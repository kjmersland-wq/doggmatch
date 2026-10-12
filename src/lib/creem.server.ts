// Creem (creem.io) server helpers. Server-only: reads CREEM_* env vars.
import type { PlanId } from "@/lib/plus/plans";

export type PaymentEnv = "sandbox" | "live";

function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is not configured`);
  return value;
}

/** Test keys start with creem_test_ and talk to Creem's test API. */
export function creemEnvironment(): PaymentEnv {
  return (process.env["CREEM_API_KEY"] ?? "").startsWith("creem_test_") ? "sandbox" : "live";
}

function baseUrl(): string {
  return creemEnvironment() === "sandbox" ? "https://test-api.creem.io" : "https://api.creem.io";
}

export async function creemFetch(path: string, init?: RequestInit): Promise<Response> {
  return fetch(`${baseUrl()}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": getEnv("CREEM_API_KEY"),
      ...init?.headers,
    },
  });
}

/** Creem product ID for each DoggMatch+ plan, from CREEM_PRODUCT_* env vars. */
export function productIdFor(plan: PlanId): string {
  return plan === "yearly" ? getEnv("CREEM_PRODUCT_PLUS_YEARLY") : getEnv("CREEM_PRODUCT_PLUS_MONTHLY");
}

export function planForProduct(productId: string | null | undefined): PlanId | null {
  if (!productId) return null;
  if (productId === process.env["CREEM_PRODUCT_PLUS_YEARLY"]) return "yearly";
  if (productId === process.env["CREEM_PRODUCT_PLUS_MONTHLY"]) return "monthly";
  return null;
}

/** Partner benefit: 25% off the first 12 months, a discount created in Creem. */
export const PARTNER_DISCOUNT_CODE = "DMPARTNER25";

function toHex(buf: ArrayBuffer): string {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Verifies the creem-signature header (HMAC-SHA256 of the raw body) with CREEM_WEBHOOK_SECRET. */
export async function verifyCreemWebhook(req: Request): Promise<any> {
  const signature = req.headers.get("creem-signature") ?? "";
  const body = await req.text();
  if (!signature || !body) throw new Error("Missing signature or body");

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getEnv("CREEM_WEBHOOK_SECRET")),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const expected = toHex(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(body)));
  if (!timingSafeEqual(expected, signature.trim().toLowerCase())) throw new Error("Invalid signature");
  return JSON.parse(body);
}
