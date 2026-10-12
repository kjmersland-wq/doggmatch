import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { verifyCreemWebhook, creemEnvironment, type PaymentEnv } from "@/lib/creem.server";
import { forwardToKmTechlabs } from "@/lib/km-techlabs.server";

let _supabase: ReturnType<typeof createClient<Database>> | null = null;
function getSupabase() {
  if (!_supabase) {
    _supabase = createClient<Database>(process.env["SUPABASE_URL"]!, process.env["SUPABASE_SERVICE_ROLE_KEY"]!);
  }
  return _supabase;
}

const idOf = (v: any): string | null => (typeof v === "string" ? v : (v?.id ?? null));

/** Upserts a Creem subscription object into our subscriptions table. */
async function syncSubscription(sub: any, env: PaymentEnv, metadata?: any) {
  if (!sub?.id) return;
  const userId = sub.metadata?.userId ?? metadata?.userId;
  const productId = idOf(sub.product) ?? "";
  const row = {
    subscription_id: sub.id as string,
    customer_id: idOf(sub.customer) ?? "",
    product_id: productId,
    price_id: productId,
    status: String(sub.status ?? "active"),
    current_period_start: sub.current_period_start_date ?? null,
    current_period_end: sub.current_period_end_date ?? null,
    cancel_at_period_end: sub.status === "scheduled_cancel",
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

export const Route = createFileRoute("/api/public/payments/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let event: any;
        try {
          event = await verifyCreemWebhook(request);
        } catch (e) {
          console.error("Webhook rejected:", e);
          return new Response("Invalid signature", { status: 401 });
        }
        try {
          const env = creemEnvironment();
          await forwardToKmTechlabs(event, env);
          const type = String(event.eventType ?? "");
          const obj = event.object ?? {};
          if (type === "checkout.completed") {
            if (obj.subscription && typeof obj.subscription === "object") {
              await syncSubscription(obj.subscription, env, obj.metadata);
            }
          } else if (type.startsWith("subscription.")) {
            await syncSubscription(obj, env);
          }
          return Response.json({ received: true });
        } catch (e) {
          console.error("Webhook error:", e);
          return new Response("Webhook error", { status: 400 });
        }
      },
    },
  },
});
