import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const PARTNER_COUPON_ID = "doggmatch-partner-25-first-year";

export type PartnerRecord = {
  id: string;
  company: string;
  contactName: string;
  email: string;
  country: string;
  category: string;
  website: string | null;
  benefit: string | null;
  status: string;
  code: string | null;
  createdAt: string;
};

export type PartnerAccount = {
  partner: PartnerRecord | null;
  isAdmin: boolean;
};

export type ReferralRow = {
  id: string;
  createdAt: string;
  status: string;
  plan: string | null;
  confirmedAt: string | null;
};

export type PartnerStats = {
  referrals: ReferralRow[];
  started: number;
  joined: number;
  discountPercent: number;
};

type PartnerRow = {
  id: string;
  company: string;
  contact_name: string;
  email: string;
  country: string;
  category: string;
  website: string | null;
  benefit: string | null;
  status: string;
  code: string | null;
  created_at: string;
};

function toRecord(row: PartnerRow): PartnerRecord {
  return {
    id: row.id,
    company: row.company,
    contactName: row.contact_name,
    email: row.email,
    country: row.country,
    category: row.category,
    website: row.website,
    benefit: row.benefit,
    status: row.status,
    code: row.code,
    createdAt: row.created_at,
  };
}

/** What this signed-in person is: a partner, an admin, or neither. */
export const getPartnerAccount = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<PartnerAccount> => {
    const { supabase, userId } = context;
    const [{ data: partner }, { data: isAdmin }] = await Promise.all([
      supabase.from("partners").select("*").eq("user_id", userId).maybeSingle(),
      supabase.rpc("has_role", { _user_id: userId, _role: "admin" }),
    ]);
    return {
      partner: partner ? toRecord(partner as PartnerRow) : null,
      isAdmin: Boolean(isAdmin),
    };
  });

/** Apply to become a partner. Starts as pending until a person approves it. */
export const applyForPortal = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: {
    company: string;
    contactName: string;
    country: string;
    category: string;
    website?: string;
    benefit?: string;
  }) => data)
  .handler(async ({ data, context }): Promise<{ ok: boolean; message?: string }> => {
    const { supabase, userId, claims } = context;
    const email = (claims?.["email"] as string | undefined) ?? "";
    const company = data.company?.trim() ?? "";
    const contactName = data.contactName?.trim() ?? "";
    const country = data.country?.trim() ?? "";
    const category = data.category?.trim() ?? "";
    if (company.length < 2 || contactName.length < 2 || country.length < 2 || category.length < 2 || email.length < 3) {
      return { ok: false, message: "invalid" };
    }

    const { error } = await supabase.from("partners").insert({
      user_id: userId,
      company,
      contact_name: contactName,
      email,
      country,
      category,
      website: data.website?.trim() || null,
      benefit: data.benefit?.trim() || null,
      status: "pending",
    });
    if (error) {
      console.error("[partner-portal] apply failed", error.message);
      return { ok: false, message: "failed" };
    }
    return { ok: true };
  });

function codeFor(company: string): string {
  const base = company
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 10);
  const suffix = Array.from(crypto.getRandomValues(new Uint8Array(3)), (b) =>
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[b % 32],
  ).join("");
  return `${base || "DOGG"}${suffix}`;
}

/** Create (or re-read) the partner's own discount code for their customers. */
export const issuePartnerCode = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<{ ok: boolean; code?: string; message?: string }> => {
    const { supabase, userId } = context;
    const { data: partner } = await supabase
      .from("partners")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();

    const row = partner as PartnerRow | null;
    if (!row) return { ok: false, message: "not-a-partner" };
    if (row.status !== "approved") return { ok: false, message: "not-approved" };
    if (row.code) return { ok: true, code: row.code };

    const { getStripe } = await import("@/lib/plus/stripe.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const stripe = getStripe();

    const code = codeFor(row.company);
    const promo = await stripe.promotionCodes.create({
      coupon: PARTNER_COUPON_ID,
      code,
      metadata: { partner_id: row.id, company: row.company },
    });

    const { error } = await supabaseAdmin
      .from("partners")
      .update({ code, stripe_promotion_code_id: promo.id })
      .eq("id", row.id);
    if (error) {
      console.error("[partner-portal] saving code failed", error.message);
      return { ok: false, message: "failed" };
    }
    return { ok: true, code };
  });

/** The partner's own members and how the 25% discount is being used. */
export const getPartnerStats = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<PartnerStats> => {
    const { supabase, userId } = context;
    const empty: PartnerStats = { referrals: [], started: 0, joined: 0, discountPercent: 25 };

    const { data: partner } = await supabase
      .from("partners")
      .select("id")
      .eq("user_id", userId)
      .maybeSingle();
    if (!partner) return empty;

    const { data } = await supabase
      .from("partner_referrals")
      .select("id, created_at, status, plan, confirmed_at")
      .eq("partner_id", (partner as { id: string }).id)
      .order("created_at", { ascending: false })
      .limit(200);

    const rows = (data ?? []) as Array<{
      id: string;
      created_at: string;
      status: string;
      plan: string | null;
      confirmed_at: string | null;
    }>;

    return {
      referrals: rows.map((r) => ({
        id: r.id,
        createdAt: r.created_at,
        status: r.status,
        plan: r.plan,
        confirmedAt: r.confirmed_at,
      })),
      started: rows.length,
      joined: rows.filter((r) => r.status === "joined").length,
      discountPercent: 25,
    };
  });

/** Admin: every partner, newest first. */
export const listPartners = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<PartnerRecord[]> => {
    const { supabase, userId } = context;
    const { data: isAdmin } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
    if (!isAdmin) return [];
    const { data } = await supabase
      .from("partners")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(200);
    return ((data ?? []) as PartnerRow[]).map(toRecord);
  });

/** Admin: approve or pause a partner. */
export const setPartnerStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { partnerId: string; status: "approved" | "pending" | "paused" }) => data)
  .handler(async ({ data, context }): Promise<{ ok: boolean }> => {
    const { supabase, userId } = context;
    const { data: isAdmin } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
    if (!isAdmin) return { ok: false };
    const { error } = await supabase
      .from("partners")
      .update({ status: data.status })
      .eq("id", data.partnerId);
    if (error) {
      console.error("[partner-portal] status update failed", error.message);
      return { ok: false };
    }
    return { ok: true };
  });
