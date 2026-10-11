// Forwards verified Paddle events to KM TECH LABS (km-techlabs.com).
// Signed with HMAC-SHA256 (header x-kmtl-signature) when KM_TECHLABS_WEBHOOK_SECRET is set.
// Never throws: a failed forward must not make Paddle retry the webhook.

const DEFAULT_URL = "https://www.km-techlabs.com/api/public/ingest/payments";

async function hmacHex(secret: string, body: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(body));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function summarize(eventType: string, data: any) {
  const totals = data?.details?.totals;
  return {
    id: data?.id,
    status: data?.status,
    customer_id: data?.customerId,
    subscription_id: data?.subscriptionId ?? (eventType.startsWith("subscription") ? data?.id : undefined),
    currency: data?.currencyCode,
    total: totals?.total,
    discount: totals?.discount,
    tax: totals?.tax,
    earnings: totals?.earnings,
    discount_id: data?.discountId ?? data?.discount?.id,
    items: (data?.items ?? []).map((i: any) => ({
      price_id: i?.price?.importMeta?.externalId ?? i?.price?.id,
      quantity: i?.quantity,
    })),
    canceled_at: data?.canceledAt,
    scheduled_change: data?.scheduledChange,
  };
}

export async function forwardToKmTechlabs(event: { eventId?: string; eventType: string; occurredAt?: string; data: any }, env: string) {
  try {
    const url = process.env["KM_TECHLABS_WEBHOOK_URL"] || DEFAULT_URL;
    const body = JSON.stringify({
      site: "doggmatch.com",
      environment: env,
      event_id: event.eventId,
      event_type: event.eventType,
      occurred_at: event.occurredAt,
      summary: summarize(event.eventType, event.data),
    });
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    const secret = process.env["KM_TECHLABS_WEBHOOK_SECRET"];
    if (secret) headers["x-kmtl-signature"] = await hmacHex(secret, body);
    const res = await fetch(url, { method: "POST", headers, body, signal: AbortSignal.timeout(5000) });
    if (!res.ok) console.warn("KM TECH LABS forward failed:", res.status);
  } catch (e) {
    console.warn("KM TECH LABS forward error:", e);
  }
}
