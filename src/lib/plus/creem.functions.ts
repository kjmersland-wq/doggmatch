import { createServerFn } from "@tanstack/react-start";
import { trustedOrigin } from "@/lib/trusted-origin";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { PlanId } from "./plans";
import { founderEmailFromClaims, isFounderEmail } from "./founder";
import { PURCHASES_ENABLED, PURCHASES_PAUSED_ERROR } from "@/lib/purchases";

export type MembershipStatus = {
  subscribed: boolean;
  plan: PlanId | null;
  renewsAt: string | null;
  cancelsAtPeriodEnd: boolean;
  /** Founder account — permanent, granted without a paid subscription. */
  lifetime: boolean;
};

/**
 * Starts a DoggMatch+ checkout: validates the plan and any partner code,
 * records the referral, and returns Creem's hosted checkout URL.
 */
export const createPlusCheckout = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { plan: PlanId; code?: string; successPath?: string }) => {
    if (data?.plan !== "monthly" && data?.plan !== "yearly") throw new Error("Unknown plan");
    const path = typeof data.successPath === "string" && /^\/[a-z/-]{0,40}$/.test(data.successPath) ? data.successPath : "/checkout/success";
    return {
      plan: data.plan,
      code: typeof data.code === "string" ? data.code.trim().toUpperCase().slice(0, 40) : "",
      successPath: path,
    };
  })
  .handler(async ({ data, context }): Promise<{ url: string }> => {
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

    const { creemFetch, productIdFor, PARTNER_DISCOUNT_CODE } = await import("@/lib/creem.server");
    const res = await creemFetch("/v1/checkouts", {
      method: "POST",
      body: JSON.stringify({
        product_id: productIdFor(data.plan),
        request_id: `${context.userId}-${Date.now()}`,
        success_url: `${trustedOrigin()}${data.successPath}`,
        ...(email ? { customer: { email } } : {}),
        ...(partnerId ? { discount_code: PARTNER_DISCOUNT_CODE } : {}),
        metadata: { userId: context.userId, site: "doggmatch.com", plan: data.plan, ...(partnerId ? { partnerCode: data.code } : {}) },
      }),
    });
    const body = (await res.json().catch(() => ({}))) as { checkout_url?: string };
    if (!res.ok || !body.checkout_url) {
      console.error("[plus] creem checkout failed", res.status, body);
      throw new Error("We couldn't open checkout just then.");
    }
    return { url: body.checkout_url };
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
  .handler(async ({ context }): Promise<MembershipStatus> => {
    const { creemEnvironment, planForProduct } = await import("@/lib/creem.server");
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
      .eq("environment", creemEnvironment())
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
      (["active", "trialing", "past_due", "scheduled_cancel"].includes(sub.status) && stillValid) ||
      (["canceled", "expired"].includes(sub.status) && Boolean(periodEnd) && stillValid);
    if (!active) return none;

    const plan = planForProduct(sub.price_id);

    return {
      subscribed: true,
      plan,
      renewsAt: sub.current_period_end,
      cancelsAtPeriodEnd: Boolean(sub.cancel_at_period_end),
      lifetime: false,
    };
  });

/** Open Creem's customer portal so people can change or cancel their membership. */
export const openBillingPortal = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<{ url: string }> => {
    const { creemFetch, creemEnvironment: env } = await import("@/lib/creem.server");
    const { data: rows } = await context.supabase
      .from("subscriptions")
      .select("customer_id")
      .eq("user_id", context.userId)
      .eq("environment", env())
      .order("created_at", { ascending: false })
      .limit(1);

    const customerId = (rows?.[0] as { customer_id: string | null } | undefined)?.customer_id;
    if (!customerId) throw new Error("There's no membership on this account yet.");

    const res = await creemFetch("/v1/customers/billing", {
      method: "POST",
      body: JSON.stringify({ customer_id: customerId }),
    });
    const body = (await res.json().catch(() => ({}))) as { customer_portal_link?: string };
    if (!res.ok || !body.customer_portal_link) throw new Error("We couldn't open your billing page just then.");
    return { url: body.customer_portal_link };
  });

/** Trusted origin helper kept for success/cancel URLs built elsewhere. */
export function originOf(): string {
  return trustedOrigin();
}
