import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { getMembership } from "./stripe.functions";

export type MemberCard = {
  memberId: string;
  name: string;
  status: "active" | "ended";
  plan: string | null;
  validThrough: string | null;
};

export type CardCheck =
  | { found: false }
  | { found: true; memberId: string; name: string; status: string; validThrough: string | null };

/**
 * The member's card. Created the first time they look at it, then kept in step
 * with what Stripe says about their membership.
 */
export const getMyMemberCard = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data?: { name?: string }) => ({ name: data?.name?.slice(0, 60) ?? "" }))
  .handler(async ({ data, context }): Promise<MemberCard | null> => {
    const membership = await getMembership();
    if (!membership.subscribed) return null;

    const { makeMemberId, nameFor } = await import("./member-card.server");
    const supabase = context.supabase;
    const email = (context.claims?.["email"] as string | undefined) ?? "";
    const name = data.name || nameFor(context.claims, email);

    const { data: existing } = await supabase
      .from("member_cards")
      .select("member_id")
      .eq("user_id", context.userId)
      .maybeSingle();

    const memberId = existing?.member_id ?? makeMemberId();
    const row = {
      user_id: context.userId,
      member_id: memberId,
      display_name: name,
      status: "active",
      plan: membership.plan,
      valid_through: membership.renewsAt,
    };

    if (existing) {
      await supabase.from("member_cards").update(row).eq("user_id", context.userId);
    } else {
      await supabase.from("member_cards").insert(row);
    }

    return {
      memberId,
      name,
      status: "active",
      plan: membership.plan,
      validThrough: membership.renewsAt,
    };
  });

/** Anyone holding the card (or scanning its code) can check that it's real. */
export const checkMemberCard = createServerFn({ method: "POST" })
  .inputValidator((data: { memberId: string }) => ({
    memberId: String(data?.memberId ?? "").slice(0, 32).toUpperCase(),
  }))
  .handler(async ({ data }): Promise<CardCheck> => {
    if (!/^DM-[A-Z0-9-]{4,20}$/.test(data.memberId)) return { found: false };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row } = await supabaseAdmin
      .from("member_cards")
      .select("member_id, display_name, status, valid_through")
      .eq("member_id", data.memberId)
      .maybeSingle();
    if (!row) return { found: false };

    const expired = row.valid_through ? new Date(row.valid_through).getTime() < Date.now() : false;
    return {
      found: true,
      memberId: row.member_id,
      name: row.display_name ?? "DoggMatch member",
      status: expired ? "ended" : (row.status ?? "active"),
      validThrough: row.valid_through,
    };
  });
