import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { PlanId } from "./plans";
import { founderEmailFromClaims, isFounderEmail } from "./founder";
import { PURCHASES_ENABLED, PURCHASES_PAUSED_ERROR } from "@/lib/purchases";
import type { StripeEnv } from "@/lib/stripe.server";

export type MembershipStatus = {
  subscribed: boolean;
  plan: PlanId | null;
  renewsAt: string | null;
  cancelsAtPeriodEnd: boolean;
  /** Founder account — permanent, granted without a paid subscription. */
  lifetime: boolean;
};

/** Human-readable Stripe price IDs (lookup keys) for each DoggMatch+ plan. */
export const PRICE_FOR_PLAN: Record<PlanId, string> = {
  monthly: "plus_monthly",
  yearly: "plus_yearly",
};

function planForPrice(priceId: string | null | undefined): PlanId | null {
  if (priceId === "plus_yearly") return "yearly";
  if (priceId === "plus_monthly") return "monthly";
  return null;
}

/** Partner benefit: 25% off the first 12 months, a promotion code in Stripe. */
export const PARTNER_DISCOUNT_CODE = "DMPARTNER25";

// Look up an existing Customer by userId metadata (then by email), or
// create one. Putting userId on the Customer object is what makes later
// reads (portal, dashboards, subscriptions.search) resolvable.
async function resolveOrCreateCustomer(
  stripe: ReturnType<typeof import("@/lib/stripe.server").createStripeClient>,
  options: { email?: string; userId?: string },
): Promise<string> {
  if (options.userId && !/^[a-zA-Z0-9_-]+$/.test(options.userId)) {
    throw new Error("Invalid userId");
  }
  if (options.userId) {
    const found = await stripe.customers.search({
      query: `metadata['userId']:'${options.userId}'`,
      limit: 1,
    });
    const hit = found.data[0];
    if (hit) return hit.id;
  }
  if (options.email) {
    const existing = await stripe.customers.list({ email: options.email, limit: 1 });
    const customer = existing.data[0];
    if (customer) {
      if (options.userId && customer.metadata?.["userId"] !== options.userId) {
        await stripe.customers.update(customer.id, {
          metadata: { ...customer.metadata, userId: options.userId },
        });
      }
      return customer.id;
    }
  }
  const created = await stripe.customers.create({
    ...(options.email && { email: options.email }),
    ...(options.userId && { metadata: { userId: options.userId } }),
  });
  return created.id;
}

/**
 * The shared 25%-for-12-months partner discount. Created lazily the first
 * time a partner code is used, then reused. Returns the promotion code id.
 */
async function ensurePartnerPromotionCode(
  stripe: ReturnType<typeof import("@/lib/stripe.server").createStripeClient>,
): Promise<string> {
  const existing = await stripe.promotionCodes.list({ code: PARTNER_DISCOUNT_CODE, limit: 1 });
  const promo0 = existing.data[0];
  if (promo0) return promo0.id;

  let couponId: string;
  try {
    const coupon = await stripe.coupons.retrieve(PARTNER_DISCOUNT_CODE);
    couponId = coupon.id;
  } catch {
    const coupon = await stripe.coupons.create({
      id: PARTNER_DISCOUNT_CODE,
      percent_off: 25,
      duration: "repeating",
      duration_in_months: 12,
      name: "DoggMatch partner — 25% off the first year",
    });
    couponId = coupon.id;
  }

  const promo = await stripe.promotionCodes.create({
    promotion: { type: "coupon", coupon: couponId },
    code: PARTNER_DISCOUNT_CODE,
  });
  return promo.id;
}

/**
 * Starts a DoggMatch+ checkout: validates the plan and any partner code,
 * records the referral, and returns the client secret for embedded checkout.
 */
export const createPlusCheckout = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { plan: PlanId; code?: string; successPath?: string; environment: StripeEnv }) => {
    if (data?.plan !== "monthly" && data?.plan !== "yearly") throw new Error("Unknown plan");
    if (data?.environment !== "sandbox" && data?.environment !== "live") throw new Error("Unknown environment");
    const path =
      typeof data.successPath === "string" && /^\/[a-z/-]{0,40}$/.test(data.successPath)
        ? data.successPath
        : "/checkout/success";
    return {
      plan: data.plan,
      code: typeof data.code === "string" ? data.code.trim().toUpperCase().slice(0, 40) : "",
      successPath: path,
      environment: data.environment,
    };
  })
  .handler(async ({ data, context }): Promise<{ clientSecret: string } | { error: string }> => {
    if (!PURCHASES_ENABLED) throw new Error(PURCHASES_PAUSED_ERROR);
    const email = (context.claims?.email as string | undefined) ?? null;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    let partnerId: string | null = null;
    if (data.code) {
      const { data: row } = await supabaseAdmin
        .from("partners")
        .select("id")
        .eq("code", data.code)
        .eq("status", "approved")
        .maybeSingle();
      partnerId = (row as { id: string } | null)?.id ?? null;
    }

    if (partnerId) {
      const { error } = await supabaseAdmin.from("partner_referrals").insert({
        partner_id: partnerId,
        user_id: context.userId,
        code: data.code,
        plan: data.plan,
        status: "started",
      });
      if (error) console.error("[plus] referral record failed", error.message);
    }

    try {
      const { createStripeClient, getStripeErrorMessage } = await import("@/lib/stripe.server");
      const stripe = createStripeClient(data.environment);

      const prices = await stripe.prices.list({ lookup_keys: [PRICE_FOR_PLAN[data.plan]] });
      const stripePrice = prices.data[0];
      if (!stripePrice) throw new Error("Price not found");

      const customerId = await resolveOrCreateCustomer(stripe, {
        ...(email ? { email } : {}),
        userId: context.userId,
      });

      const promotionCodeId = partnerId ? await ensurePartnerPromotionCode(stripe) : null;
      const { trustedOrigin } = await import("@/lib/trusted-origin");

      const session = await stripe.checkout.sessions.create({
        line_items: [{ price: stripePrice.id, quantity: 1 }],
        mode: "subscription",
        ui_mode: "embedded_page",
        return_url: `${trustedOrigin()}${data.successPath}?session_id={CHECKOUT_SESSION_ID}`,
        customer: customerId,
        // Full compliance handling: Stripe handles tax, fraud, disputes and
        // transaction-level support for buyers in ~80 countries (+3.5%).
        managed_payments: { enabled: true },
        ...(promotionCodeId ? { discounts: [{ promotion_code: promotionCodeId }] } : {}),
        metadata: {
          userId: context.userId,
          site: "doggmatch.com",
          plan: data.plan,
          managed_payments: "true",
          ...(partnerId ? { partnerCode: data.code } : {}),
        },
        subscription_data: {
          metadata: {
            userId: context.userId,
            site: "doggmatch.com",
            plan: data.plan,
            ...(partnerId ? { partnerCode: data.code } : {}),
          },
        },
      } as Parameters<typeof stripe.checkout.sessions.create>[0]);

      if (!session.client_secret) throw new Error("Stripe did not return a client secret");
      return { clientSecret: session.client_secret };
    } catch (error) {
      const { getStripeErrorMessage } = await import("@/lib/stripe.server");
      console.error("[plus] stripe checkout failed", getStripeErrorMessage(error));
      return { error: getStripeErrorMessage(error) };
    }
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

/** Is this person a DoggMatch+ member right now? Read from our subscriptions table. */
export const getMembership = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { environment: StripeEnv }) => ({
    environment: data?.environment === "live" ? ("live" as const) : ("sandbox" as const),
  }))
  .handler(async ({ data, context }): Promise<MembershipStatus> => {
    const none: MembershipStatus = {
      subscribed: false,
      plan: null,
      renewsAt: null,
      cancelsAtPeriodEnd: false,
      lifetime: false,
    };
    const email = founderEmailFromClaims(context.claims);

    // Founder accounts skip billing entirely — permanent membership by email
    // alone. Checked first, so nothing else can short-circuit past it.
    if (isFounderEmail(email)) {
      return {
        subscribed: true,
        plan: "yearly",
        renewsAt: null,
        cancelsAtPeriodEnd: false,
        lifetime: true,
      };
    }

    const { data: rows } = await context.supabase
      .from("subscriptions")
      .select("price_id, status, current_period_end, cancel_at_period_end, created_at")
      .eq("user_id", context.userId)
      .eq("environment", data.environment)
      .order("created_at", { ascending: false })
      .limit(1);

    const sub = rows?.[0] as
      | {
          price_id: string;
          status: string;
          current_period_end: string | null;
          cancel_at_period_end: boolean | null;
        }
      | undefined;
    if (!sub) return none;

    const periodEnd = sub.current_period_end ? new Date(sub.current_period_end) : null;
    const stillValid = !periodEnd || periodEnd > new Date();
    const active =
      (["active", "trialing", "past_due"].includes(sub.status) && stillValid) ||
      (sub.status === "canceled" && Boolean(periodEnd) && stillValid);
    if (!active) return none;

    const plan = planForPrice(sub.price_id);

    return {
      subscribed: true,
      plan,
      renewsAt: sub.current_period_end,
      cancelsAtPeriodEnd: Boolean(sub.cancel_at_period_end),
      lifetime: false,
    };
  });

/** Open the billing portal so people can change or cancel their membership. */
export const openBillingPortal = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { environment: StripeEnv; returnUrl?: string }) => ({
    environment: data?.environment === "live" ? ("live" as const) : ("sandbox" as const),
    returnUrl: typeof data?.returnUrl === "string" && data.returnUrl.startsWith("https://") ? data.returnUrl : undefined,
  }))
  .handler(async ({ data, context }): Promise<{ url: string } | { error: string }> => {
    const { data: rows } = await context.supabase
      .from("subscriptions")
      .select("customer_id")
      .eq("user_id", context.userId)
      .eq("environment", data.environment)
      .order("created_at", { ascending: false })
      .limit(1);

    const customerId = (rows?.[0] as { customer_id: string | null } | undefined)?.customer_id;
    if (!customerId) throw new Error("There's no membership on this account yet.");

    try {
      const { createStripeClient, getStripeErrorMessage } = await import("@/lib/stripe.server");
      const stripe = createStripeClient(data.environment);
      const portal = await stripe.billingPortal.sessions.create({
        customer: customerId,
        ...(data.returnUrl && { return_url: data.returnUrl }),
      });
      return { url: portal.url };
    } catch (error) {
      const { getStripeErrorMessage } = await import("@/lib/stripe.server");
      return { error: getStripeErrorMessage(error) };
    }
  });
