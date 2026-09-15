import { createServerFn } from "@tanstack/react-start";
import { trustedOrigin } from "@/lib/trusted-origin";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { PLUS_PLANS, type PlanId } from "./plans";
import { founderEmailFromClaims, isFounderEmail } from "./founder";

export type MembershipStatus = {
  subscribed: boolean;
  plan: PlanId | null;
  renewsAt: string | null;
  cancelsAtPeriodEnd: boolean;
  /** Founder account — permanent, granted without a Stripe subscription. */
  lifetime: boolean;
};

function originOf(): string {
  return trustedOrigin();
}

/** Start a DoggMatch+ subscription checkout for the signed-in person. */
export const createPlusCheckout = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { plan: PlanId; code?: string }) => {
    if (data?.plan !== "monthly" && data?.plan !== "yearly") throw new Error("Unknown plan");
    return {
      plan: data.plan,
      code: typeof data.code === "string" ? data.code.trim().toUpperCase().slice(0, 40) : "",
    };
  })
  .handler(async ({ data, context }): Promise<{ url: string }> => {
    const { getStripe, findCustomerId } = await import("./stripe.server");
    const stripe = getStripe();
    const email = context.claims?.email as string | undefined;
    if (!email) throw new Error("We couldn't find your email address.");

    const customerId = await findCustomerId(email);
    const origin = originOf();

    // A partner code gives 25% off the first year, and lets the partner see it.
    let partner: { id: string; stripe_promotion_code_id: string | null } | null = null;
    if (data.code) {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { data: row } = await supabaseAdmin
        .from("partners")
        .select("id, stripe_promotion_code_id")
        .eq("code", data.code)
        .eq("status", "approved")
        .maybeSingle();
      partner = (row as { id: string; stripe_promotion_code_id: string | null } | null) ?? null;
    }
    const promotionCodeId = partner?.stripe_promotion_code_id ?? null;

    const session = await stripe.checkout.sessions.create({
      ...(customerId ? { customer: customerId } : { customer_email: email }),
      line_items: [{ price: PLUS_PLANS[data.plan].priceId, quantity: 1 }],
      mode: "subscription",
      ...(promotionCodeId
        ? { discounts: [{ promotion_code: promotionCodeId }] }
        : { allow_promotion_codes: true }),
      client_reference_id: context.userId,
      success_url: `${origin}/checkout/success`,
      cancel_url: `${origin}/checkout/canceled`,
    });

    if (partner) {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { error } = await supabaseAdmin.from("partner_referrals").insert({
        partner_id: partner.id,
        user_id: context.userId,
        code: data.code,
        plan: data.plan,
        status: "started",
        stripe_session_id: session.id,
      });
      if (error) console.error("[plus] referral record failed", error.message);
    }

    if (!session.url) throw new Error("Stripe didn't return a checkout link.");
    return { url: session.url };
  });

/** Does this partner code exist and is it live? Used before checkout. */
export const checkPartnerCode = createServerFn({ method: "POST" })
  .inputValidator((data: { code: string }) => ({
    code: String(data?.code ?? "")
      .trim()
      .toUpperCase()
      .slice(0, 40),
  }))
  .handler(async ({ data }): Promise<{ valid: boolean; company: string | null }> => {
    if (!data.code) return { valid: false, company: null };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row } = await supabaseAdmin
      .from("partners")
      .select("company")
      .eq("code", data.code)
      .eq("status", "approved")
      .maybeSingle();
    return { valid: Boolean(row), company: (row as { company: string } | null)?.company ?? null };
  });

/** After a successful checkout, mark the partner referral as joined. */
export const confirmPartnerReferral = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<{ ok: boolean }> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("partner_referrals")
      .update({ status: "joined", confirmed_at: new Date().toISOString() })
      .eq("user_id", context.userId)
      .eq("status", "started");
    if (error) console.error("[plus] referral confirm failed", error.message);
    return { ok: !error };
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
      lifetime: false,
    };
    const email = founderEmailFromClaims(context.claims);

    // Founder accounts skip Stripe entirely — permanent membership by email
    // alone. Checked first, so a missing/empty email claim elsewhere in this
    // function can never short-circuit past a founder's own account.
    if (isFounderEmail(email)) {
      return {
        subscribed: true,
        plan: "yearly",
        renewsAt: null,
        cancelsAtPeriodEnd: false,
        lifetime: true,
      };
    }
    if (!email) return none;

    const { getStripe, findCustomerId } = await import("./stripe.server");
    const stripe = getStripe();
    const customerId = await findCustomerId(email);
    if (!customerId) return none;

    const subs = await stripe.subscriptions.list({
      customer: customerId,
      status: "active",
      limit: 1,
    });
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
      lifetime: false,
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
