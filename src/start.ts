import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://km-techlabs.com https://www.km-techlabs.com",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
  "frame-src 'self' https://challenges.cloudflare.com",
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

// Attach the signed-in user's bearer token to every server function call.
// The client module carries the project's publishable fallbacks, so this must
// not be gated on VITE_SUPABASE_* — the published build may not inline them,
// and gating here silently broke every auth-required function (checkout,
// membership). Failures fall through with no header so public functions work.
const safeSupabaseAuth = createMiddleware({ type: "function" }).client(
  async ({ next }) => {
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
