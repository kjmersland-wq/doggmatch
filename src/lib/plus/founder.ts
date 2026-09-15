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
