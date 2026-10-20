import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { verifyWebhook, type StripeEnv } from "@/lib/stripe.server";
import { forwardToKmTechlabs } from "@/lib/km-techlabs.server";

let _supabase: ReturnType<typeof createClient<Database>> | null = null;
function getSupabase() {
  if (!_supabase) {
    _supabase = createClient<Database>(process.env["SUPABASE_URL"]!, process.env["SUPABASE_SERVICE_ROLE_KEY"]!);
  }
  return _supabase;
}

const idOf = (v: any): string | null => (typeof v === "string" ? v : (v?.id ?? null));
const isoFromUnix = (seconds: number | null | undefined): string | null =>
  seconds ? new Date(seconds * 1000).toISOString() : null;

/** Upserts a Stripe subscription object into our subscriptions table. */
async function syncSubscription(sub: any, env: StripeEnv) {
  if (!sub?.id) return;
  const userId = sub.metadata?.userId;
  const item = sub.items?.data?.[0];
  // Prefer lookup_key (stable across sandbox and live), then legacy metadata,
  // then the raw Stripe price id as a last resort.
  const priceId = item?.price?.lookup_key || item?.price?.metadata?.lovable_external_id || item?.price?.id || "";
  const productId = idOf(item?.price?.product) ?? "";
  // Basil (2025-03-31) puts period fields on the item; keep the subscription fallback.
  const periodStart = item?.current_period_start ?? sub.current_period_start;
  const periodEnd = item?.current_period_end ?? sub.current_period_end;

  const row = {
    subscription_id: sub.id as string,
    customer_id: idOf(sub.customer) ?? "",
    product_id: productId,
    price_id: priceId,
    status: String(sub.status ?? "active"),
    current_period_start: isoFromUnix(periodStart),
    current_period_end: isoFromUnix(periodEnd),
    cancel_at_period_end: Boolean(sub.cancel_at_period_end),
    environment: env,
    updated_at: new Date().toISOString(),
  };

  if (userId) {
    await getSupabase()
      .from("subscriptions")
      .upsert({ ...row, user_id: userId }, { onConflict: "subscription_id" });
  } else {
    await getSupabase().from("subscriptions").update(row).eq("subscription_id", row.subscription_id);
  }
}

async function handleWebhook(req: Request, env: StripeEnv) {
  const event = await verifyWebhook(req, env);
  const obj = event.data.object;

  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated":
      await syncSubscription(obj, env);
      await forwardToKmTechlabs(event, env);
      break;
    case "customer.subscription.deleted":
      await getSupabase()
        .from("subscriptions")
        .update({ status: "canceled", updated_at: new Date().toISOString() })
        .eq("subscription_id", obj.id)
        .eq("environment", env);
      await forwardToKmTechlabs(event, env);
      break;
    case "checkout.session.completed":
      // Delayed-notification methods fire this when payment is SUBMITTED, not
      // settled. "paid" and "no_payment_required" (100% partner discount) are
      // final; "unpaid" waits for checkout.session.async_payment_succeeded.
      if (obj.payment_status !== "unpaid") {
        await forwardToKmTechlabs(event, env);
      }
      break;
    case "checkout.session.async_payment_succeeded":
      await forwardToKmTechlabs(event, env);
      break;
    case "invoice.paid":
      // Renewal settled — subscription state is handled above; forward for reporting.
      await forwardToKmTechlabs(event, env);
      break;
    default:
      console.log("Unhandled event:", event.type);
  }
}

export const Route = createFileRoute("/api/public/payments/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const rawEnv = new URL(request.url).searchParams.get("env");
        if (rawEnv !== "sandbox" && rawEnv !== "live") {
          console.error("Webhook received with invalid or missing env query parameter:", rawEnv);
          return Response.json({ received: true, ignored: "invalid env" });
        }
        const env: StripeEnv = rawEnv;
        try {
          await handleWebhook(request, env);
          return Response.json({ received: true });
        } catch (e) {
          console.error("Webhook error:", e);
          return new Response("Webhook error", { status: 400 });
        }
      },
    },
  },
});
