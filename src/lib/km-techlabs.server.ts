// Forwards verified Stripe payment events to KM TECH LABS (km-techlabs.com).
// Matches the receiver at /api/public/ingest/payments: Bearer auth with the
// shared secret DOGGMATCH_INGEST_SECRET, one event per POST.
// Never throws: a failed forward must not make Stripe retry the webhook.

const DEFAULT_URL = "https://www.km-techlabs.com/api/public/ingest/payments";

type IngestType = "payment" | "discount" | "subscription_created" | "subscription_canceled";

function mapType(eventType: string): IngestType {
  if (eventType === "customer.subscription.deleted") return "subscription_canceled";
  if (eventType === "customer.subscription.created") return "subscription_created";
  return "payment"; // checkout.session.completed, invoice.paid, ...
}

// Stripe amounts are in minor units (cents); the receiver stores major units.
function toMajor(minor: unknown): number {
  const n = Number(minor);
  return Number.isFinite(n) ? n / 100 : 0;
}

const idOf = (v: any): string | undefined => (typeof v === "string" ? v : (v?.id ?? undefined));

export async function forwardToKmTechlabs(
  event: { id?: string; type: string; created?: number; data?: { object?: any } },
  _env: string,
) {
  try {
    const obj = event.data?.object ?? {};
    const type = mapType(event.type);

    // Amount/discount/currency differ per object kind: checkout sessions and
    // invoices carry totals; subscriptions carry the price on the first item.
    const item = obj.items?.data?.[0];
    const amount = toMajor(obj.amount_total ?? obj.amount_paid ?? item?.price?.unit_amount ?? 0);
    const discountTotal = toMajor(obj.total_details?.amount_discount ?? obj.discount?.coupon?.percent_off ? 0 : 0);
    const currency = String(obj.currency ?? item?.price?.currency ?? "EUR").toUpperCase();
    const plan = obj.metadata?.plan ?? item?.price?.lookup_key ?? item?.price?.id ?? null;
    const occurred = typeof event.created === "number" ? new Date(event.created * 1000).toISOString() : new Date().toISOString();

    const payload = {
      site: "doggmatch.com",
      id: event.id ?? obj.id ?? `${event.type}-${Date.now()}`,
      type,
      status: String(obj.status ?? event.type),
      amount,
      discount: discountTotal,
      currency,
      customer: idOf(obj.customer),
      plan,
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
