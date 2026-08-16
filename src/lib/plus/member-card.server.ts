const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

/** A short, readable member number: DM-4F7K-92QX. */
export function makeMemberId(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  const chars = Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join("");
  return `DM-${chars.slice(0, 4)}-${chars.slice(4, 8)}`;
}

/** The friendliest name we know for this person. */
export function nameFor(claims: Record<string, unknown> | undefined, email: string): string {
  const meta = (claims?.["user_metadata"] ?? {}) as Record<string, unknown>;
  const candidate = (meta["full_name"] ?? meta["name"] ?? "") as string;
  if (candidate) return candidate;
  const local = email.split("@")[0] ?? "";
  return local ? local.replace(/[._-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "DoggMatch member";
}
