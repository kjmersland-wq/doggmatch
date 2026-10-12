// Forwards verified Creem events to KM TECH LABS (km-techlabs.com).
// Matches the receiver at /api/public/ingest/payments: Bearer auth with the
// shared secret DOGGMATCH_INGEST_SECRET, one event per POST.
// Never throws: a failed forward must not make Creem retry the webhook.

const DEFAULT_URL = "https://www.km-techlabs.com/api/public/ingest/payments";

type IngestType = "payment" | "discount" | "subscription_created" | "subscription_canceled";

function mapType(eventType: string): IngestType {
  if (eventType === "subscription.canceled" || eventType === "subscription.expired") return "subscription_canceled";
  if (eventType === "subscription.active") return "subscription_created";
  return "payment"; // checkout.completed, subscription.paid, refund.created, ...
}

// Creem amounts are in minor units (cents); the receiver stores major units.
function toMajor(minor: unknown): number {
  const n = Number(minor);
  return Number.isFinite(n) ? n / 100 : 0;
}

const idOf = (v: any): string | undefined => (typeof v === "string" ? v : (v?.id ?? undefined));

export async function forwardToKmTechlabs(
  event: { id?: string; eventType: string; created_at?: number | string; object?: any },
  _env: string,
) {
  try {
    const obj = event.object ?? {};
    const order = obj.order ?? obj.last_transaction ?? obj.transaction ?? {};
    const product = obj.product ?? obj.subscription?.product;
    const discountTotal = toMajor(order.discount_amount ?? order.discount ?? 0);
    const type = mapType(event.eventType);
    const occurred =
      typeof event.created_at === "number" ? new Date(event.created_at).toISOString() : (event.created_at ?? new Date().toISOString());

    const payload = {
      site: "doggmatch.com",
      id: event.id ?? obj.id ?? `${event.eventType}-${Date.now()}`,
      type,
      status: String(obj.status ?? event.eventType),
      amount: toMajor(order.amount_paid ?? order.amount ?? 0),
      discount: discountTotal,
      currency: String(order.currency ?? (typeof product === "object" ? product?.currency : undefined) ?? "EUR").toUpperCase(),
      customer: idOf(obj.customer),
      plan: typeof product === "object" ? (product?.name ?? product?.id) : product,
      occurred_at: occurred,
    };

    const url = process.env["KM_TECHLABS_WEBHOOK_URL"] || DEFAULT_URL;
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    const secret = process.env["DOGGMATCH_INGEST_SECRET"];
    if (secret) headers["Authorization"] = `Bearer ${secret}`;

    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) console.warn("KM TECH LABS forward failed:", res.status, await res.text().catch(() => ""));

    if (type !== "payment" && discountTotal > 0) {
      const res2 = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify({ ...payload, id: `${payload.id}-discount`, type: "discount", amount: 0 }),
        signal: AbortSignal.timeout(5000),
      });
      if (!res2.ok) console.warn("KM TECH LABS discount forward failed:", res2.status);
    }
  } catch (e) {
    console.warn("KM TECH LABS forward error:", e);
  }
}
