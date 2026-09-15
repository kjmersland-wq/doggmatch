import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://challenges.cloudflare.com",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://api.stripe.com",
  "frame-src 'self' https://js.stripe.com https://hooks.stripe.com https://challenges.cloudflare.com",
  "img-src 'self' data: blob: https:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
  "font-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
].join("; ");

const PERMISSIONS_POLICY = "camera=(), microphone=(), geolocation=()";

/** Response statuses the Fetch spec forbids from carrying a body. */
const NULL_BODY_STATUSES = new Set([101, 204, 205, 304]);

// Applied to every response (including error pages from errorMiddleware
// below), so it's listed first — request middleware wraps outer-to-inner,
// so this only gets to add headers after everything else has resolved.
const securityHeadersMiddleware = createMiddleware().server(async ({ next }) => {
  const result = await next();
  const response = result.response;
  const headers = new Headers(response.headers);
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set("Permissions-Policy", PERMISSIONS_POLICY);
  headers.set("Content-Security-Policy", CONTENT_SECURITY_POLICY);
  const withHeaders = NULL_BODY_STATUSES.has(response.status)
    ? new Response(null, { status: response.status, statusText: response.statusText, headers })
    : new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  return { ...result, response: withHeaders };
});

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

// Only attach a Supabase bearer token when Supabase is actually configured.
// This keeps public server functions (e.g. places lookup) working even if the
// published build is missing Supabase env vars, while still protecting auth-
// required functions on properly configured deployments.
const safeSupabaseAuth = createMiddleware({ type: "function" }).client(
  async ({ next }) => {
    const url = import.meta.env["VITE_SUPABASE_URL"];
    const key = import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) {
      return next({ headers: {} });
    }
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      return next({
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
    } catch {
      return next({ headers: {} });
    }
  },
);

export const startInstance = createStart(() => ({
  functionMiddleware: [safeSupabaseAuth],
  requestMiddleware: [securityHeadersMiddleware, errorMiddleware, csrfMiddleware],
}));
