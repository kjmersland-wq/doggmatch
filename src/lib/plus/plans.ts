import { pick, type Locale } from "@/i18n";

/** DoggMatch+ plans. Creem product IDs come from CREEM_PRODUCT_* env vars on the server. */
export type PlanId = "monthly" | "yearly";

export const PLUS_PLANS: Record<PlanId, { label: string }> = {
  monthly: { label: "Monthly" },
  yearly: { label: "Yearly" },
};

const planLabels: Record<PlanId, Record<Locale, string>> = {
  monthly: { en: "Monthly", no: "Månedlig", pl: "Miesięczny", dk: "Månedlig", se: "Månadsvis", fi: "Kuukausittain", de: "Monatlich", fr: "Mensuel", nl: "Maandelijks" },
  yearly: { en: "Yearly", no: "Årlig", pl: "Roczny", dk: "Årlig", se: "Årsvis", fi: "Vuosittain", de: "Jährlich", fr: "Annuel", nl: "Jaarlijks" },
};

/** Bilingual, locale-aware label for a plan (safe outside React too). */
export function planLabel(plan: PlanId): string {
  return pick(planLabels[plan]);
}
