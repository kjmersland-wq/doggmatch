import { getRequestHeader } from "@tanstack/react-start/server";

/**
 * Canonical site origin used for every payment redirect.
 *
 * The Origin/Host headers are caller-controlled, so they are only honoured
 * when they match a host we actually own. Anything else falls back to the
 * production site, which keeps checkout links from ever pointing somewhere else.
 */
const PRODUCTION_ORIGIN = "https://doggmatch.com";

const ALLOWED_HOSTS = new Set([
  "doggmatch.com",
  "www.doggmatch.com",
  "localhost:8080",
  "127.0.0.1:8080",
]);

function isAllowedHost(host: string): boolean {
  if (ALLOWED_HOSTS.has(host)) return true;
  const bare = host.split(":")[0] ?? "";
  // Lovable preview/published hosts for this project.
  return bare.endsWith(".lovable.app") || bare.endsWith(".lovableproject.com");
}

/** The origin every Stripe success/cancel/return URL is built from. */
export function trustedOrigin(): string {
  const configured = process.env["SITE_URL"];
  if (configured) return configured.replace(/\/+$/, "");

  const origin = getRequestHeader("origin");
  if (origin) {
    try {
      const url = new URL(origin);
      if ((url.protocol === "https:" || url.protocol === "http:") && isAllowedHost(url.host)) {
        return url.origin;
      }
    } catch {
      /* fall through to the production origin */
    }
  }

  const host = getRequestHeader("host");
  if (host && isAllowedHost(host)) {
    const scheme = host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https";
    return `${scheme}://${host}`;
  }

  return PRODUCTION_ORIGIN;
}
