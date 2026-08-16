import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { PLUS_PLANS, type PlanId } from "./plans";

export type MembershipStatus = {
  subscribed: boolean;
  plan: PlanId | null;
  renewsAt: string | null;
  cancelsAtPeriodEnd: boolean;
};

function originOf(): string {
  return (
    getRequestHeader("origin") ??
    (getRequestHeader("host") ? `https://${getRequestHeader("host")}` : "https://doggmatch.com")
  );
}

/** Start a DoggMatch+ subscription checkout for the signed-in person. */
export const createPlusCheckout = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { plan: PlanId }) => {
    if (data?.plan !== "monthly" && data?.plan !== "yearly") throw new Error("Unknown plan");
    return data;
  })
  .handler(async ({ data, context }): Promise<{ url: string }> => {
    const { getStripe, findCustomerId } = await import("./stripe.server");
    const stripe = getStripe();
    const email = context.claims?.email as string | undefined;
    if (!email) throw new Error("We couldn't find your email address.");

    const customerId = await findCustomerId(email);
    const origin = originOf();

    const session = await stripe.checkout.sessions.create({
      ...(customerId ? { customer: customerId } : { customer_email: email }),
      line_items: [{ price: PLUS_PLANS[data.plan].priceId, quantity: 1 }],
      mode: "subscription",
      allow_promotion_codes: true,
      client_reference_id: context.userId,
      success_url: `${origin}/checkout/success`,
      cancel_url: `${origin}/checkout/canceled`,
    });

    if (!session.url) throw new Error("Stripe didn't return a checkout link.");
    return { url: session.url };
  });

/** Is this person a DoggMatch+ member right now? Read straight from Stripe. */
export const getMembership = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<MembershipStatus> => {
    const none: MembershipStatus = {
      subscribed: false,
      plan: null,
      renewsAt: null,
      cancelsAtPeriodEnd: false,
    };
    const email = context.claims?.email as string | undefined;
    if (!email) return none;

    const { getStripe, findCustomerId } = await import("./stripe.server");
    const stripe = getStripe();
    const customerId = await findCustomerId(email);
    if (!customerId) return none;

    const subs = await stripe.subscriptions.list({ customer: customerId, status: "active", limit: 1 });
    const sub = subs.data[0];
    if (!sub) return none;

    const item = sub.items.data[0];
    const priceId = item?.price.id ?? "";
    const plan: PlanId | null =
      priceId === PLUS_PLANS.yearly.priceId
        ? "yearly"
        : priceId === PLUS_PLANS.monthly.priceId
          ? "monthly"
          : null;
    const periodEnd = item?.current_period_end;

    return {
      subscribed: true,
      plan,
      renewsAt: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
      cancelsAtPeriodEnd: Boolean(sub.cancel_at_period_end),
    };
  });

/** Open Stripe's own billing page so people can change or cancel their membership. */
export const openBillingPortal = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<{ url: string }> => {
    const email = context.claims?.email as string | undefined;
    if (!email) throw new Error("We couldn't find your email address.");

    const { getStripe, findCustomerId } = await import("./stripe.server");
    const stripe = getStripe();
    const customerId = await findCustomerId(email);
    if (!customerId) throw new Error("There's no membership on this account yet.");

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${originOf()}/account`,
    });
    return { url: session.url };
  });
