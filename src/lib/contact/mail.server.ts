/**
 * Server-only email helpers for the DoggMatch contact form.
 * Nothing in here is ever reachable from the browser bundle.
 */

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

/** Strips CR/LF so a submitted value can never inject extra mail headers. */
export function headerSafe(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function encodeHeader(value: string): string {
  const safe = headerSafe(value);
  // RFC 2047 for anything outside plain ASCII (æ, ø, å and friends).
  if (/^[\x20-\x7E]*$/.test(safe)) return safe;
  return `=?UTF-8?B?${btoa(String.fromCharCode(...new TextEncoder().encode(safe)))}?=`;
}

function base64Url(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function buildMime(opts: {
  to: string;
  from?: string | undefined;
  replyTo?: string | undefined;
  subject: string;
  body: string;
}): string {
  const lines = [
    `To: ${headerSafe(opts.to)}`,
    ...(opts.from ? [`From: ${headerSafe(opts.from)}`] : []),
    ...(opts.replyTo ? [`Reply-To: ${headerSafe(opts.replyTo)}`] : []),
    `Subject: ${encodeHeader(opts.subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    opts.body,
  ];
  return base64Url(lines.join("\r\n"));
}

function gatewayHeaders() {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const connectionKey =
    process.env["GOOGLE_MAIL_API_KEY"] ?? process.env["GOOGLE_MAIL_API_KEY_2"];
  if (!lovableKey || !connectionKey) return null;
  return {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": connectionKey,
    "Content-Type": "application/json",
  };
}

/** The inbox that receives contact messages: an override, or the connected account. */
export async function resolveRecipient(): Promise<string | null> {
  const configured = process.env["CONTACT_EMAIL"];
  if (configured) return configured;
  const headers = gatewayHeaders();
  if (!headers) return null;
  const res = await fetch(`${GATEWAY_URL}/users/me/profile`, { headers });
  if (!res.ok) {
    console.error(`[contact] profile lookup failed [${res.status}]: ${await res.text()}`);
    return null;
  }
  const data = (await res.json()) as { emailAddress?: string };
  return data.emailAddress ?? null;
}

export async function sendGmail(raw: string): Promise<void> {
  const headers = gatewayHeaders();
  if (!headers) throw new Error("Gmail connection is not configured");
  const res = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
    method: "POST",
    headers,
    body: JSON.stringify({ raw }),
  });
  if (!res.ok) {
    const errorBody = await res.text();
    console.error(`[contact] gmail send failed [${res.status}]: ${errorBody}`);
    throw new Error(`Gmail send failed [${res.status}]`);
  }
}
