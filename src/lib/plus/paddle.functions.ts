import { createServerFn } from "@tanstack/react-start";
import { trustedOrigin } from "@/lib/trusted-origin";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { PLUS_PLANS, type PlanId } from "./plans";
import { founderEmailFromClaims, isFounderEmail } from "./founder";
import { PURCHASES_ENABLED, PURCHASES_PAUSED_ERROR } from "@/lib/purchases";
import type { PaddleEnv } from "@/lib/paddle.server";

export type MembershipStatus = {
  subscribed: boolean;
  plan: PlanId | null;
  renewsAt: string | null;
  cancelsAtPeriodEnd: boolean;
  /** Founder account — permanent, granted without a Paddle subscription. */
  lifetime: boolean;
};

/**
 * Partner benefit: 25% off the first year, applied as a Paddle discount when a
 * valid partner code is entered. IDs differ between test and live.
 */
const PARTNER_DISCOUNTS: Record<PaddleEnv, Record<PlanId, string>> = {
  sandbox: {
    monthly: "dsc_01m4n1abd56qfxya0whhg22k6r",
    yearly: "dsc_01m4n1h5v5bjdaex247wzgx4jf",
  },
  live: {
    monthly: "dsc_01m4n1j0tvzsh8cpg99sznn5ax",
    yearly: "dsc_01m4n28ah56n72s8m0bd4acvp4",
  },
};

/**
 * Prepares a DoggMatch+ checkout: validates the plan and any partner code,
 * records the referral, and returns what the browser needs to open Paddle's
 * own checkout overlay.
 */
export const preparePlusCheckout = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { plan: PlanId; code?: string; environment?: PaddleEnv }) => {
    if (data?.plan !== "monthly" && data?.plan !== "yearly") throw new Error("Unknown plan");
    return {
      plan: data.plan,
      code: typeof data.code === "string" ? data.code.trim().toUpperCase().slice(0, 40) : "",
      environment: data.environment === "live" ? ("live" as const) : ("sandbox" as const),
    };
  })
  .handler(
    async ({
      data,
      context,
    }): Promise<{ priceId: string; discountId: string | null; email: string | null; userId: string }> => {
      if (!PURCHASES_ENABLED) throw new Error(PURCHASES_PAUSED_ERROR);
      const email = (context.claims?.email as string | undefined) ?? null;

      let partnerId: string | null = null;
      if (data.code) {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data: row } = await supabaseAdmin
          .from("partners")
          .select("id")
          .eq("code", data.code)
          .eq("status", "approved")
          .maybeSingle();
        partnerId = (row as { id: string } | null)?.id ?? null;
      }

      if (partnerId) {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin.from("partner_referrals").insert({
          partner_id: partnerId,
          user_id: context.userId,
          code: data.code,
          plan: data.plan,
          status: "started",
        });
        if (error) console.error("[plus] referral record failed", error.message);
      }

      return {
        priceId: PLUS_PLANS[data.plan].priceId,
        discountId: partnerId ? PARTNER_DISCOUNTS[data.environment][data.plan] : null,
        email,
        userId: context.userId,
      };
    },
  );

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
  .inputValidator((data?: { environment?: PaddleEnv }) => ({
    environment: data?.environment === "sandbox" ? ("sandbox" as const) : ("live" as const),
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
      (sub.status === "canceled" && stillValid);
    if (!active) return none;

    const plan: PlanId | null =
      sub.price_id === PLUS_PLANS.yearly.priceId
        ? "yearly"
        : sub.price_id === PLUS_PLANS.monthly.priceId
          ? "monthly"
          : null;

    return {
      subscribed: true,
      plan,
      renewsAt: sub.current_period_end,
      cancelsAtPeriodEnd: Boolean(sub.cancel_at_period_end),
      lifetime: false,
    };
  });

/** Open Paddle's customer portal so people can change or cancel their membership. */
export const openBillingPortal = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data?: { environment?: PaddleEnv }) => ({
    environment: data?.environment === "sandbox" ? ("sandbox" as const) : ("live" as const),
  }))
  .handler(async ({ data, context }): Promise<{ url: string }> => {
    const { data: rows } = await context.supabase
      .from("subscriptions")
      .select("paddle_customer_id, paddle_subscription_id")
      .eq("user_id", context.userId)
      .eq("environment", data.environment)
      .order("created_at", { ascending: false })
      .limit(1);

    const sub = rows?.[0] as
      | { paddle_customer_id: string; paddle_subscription_id: string }
      | undefined;
    if (!sub) throw new Error("There's no membership on this account yet.");

    const { getPaddleClient } = await import("@/lib/paddle.server");
    const paddle = getPaddleClient(data.environment);
    const session = await paddle.customerPortalSessions.create(sub.paddle_customer_id, [
      sub.paddle_subscription_id,
    ]);
    const url = session.urls.general.overview;
    if (!url) throw new Error("We couldn't open your billing page just then.");
    return { url };
  });

/** Trusted origin helper kept for success/cancel URLs built elsewhere. */
export function originOf(): string {
  return trustedOrigin();
}
