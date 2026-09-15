/**
 * Founder accounts get DoggMatch+ for life, with no Stripe subscription
 * involved. Checked only against the verified email on a signed-in
 * Supabase session (`context.claims.email` in a server function) — never
 * against anything a client can supply directly — so this can't be spoofed
 * by claiming to "be" one of these addresses.
 *
 * To extend lifetime access to family, add their email here rather than
 * building a shareable discount code: this repository is public, and a
 * hardcoded 100%-off Stripe code would be readable by anyone on GitHub and
 * redeemable by anyone who found it. An email allowlist checked against a
 * verified auth token carries no such risk.
 */
const FOUNDER_EMAILS = new Set(["kjmersland@gmail.com"]);

export function isFounderEmail(email: string | null | undefined): boolean {
  return Boolean(email && FOUNDER_EMAILS.has(email.trim().toLowerCase()));
}

/**
 * Supabase puts `email` at the top level of the JWT claims for normal
 * sign-ins, but it's an optional claim — some auth paths (or a custom
 * Access Token Hook) can end up carrying it only under `user_metadata`
 * instead. Check both rather than assuming one shape.
 */
export function founderEmailFromClaims(
  claims: Record<string, unknown> | undefined | null,
): string | undefined {
  if (!claims) return undefined;
  const direct = claims["email"];
  if (typeof direct === "string" && direct) return direct;
  const userMetadata = claims["user_metadata"] as Record<string, unknown> | undefined;
  const metaEmail = userMetadata?.["email"];
  if (typeof metaEmail === "string" && metaEmail) return metaEmail;
  return undefined;
}
