import { pick } from "@/i18n";

/**
 * Partner benefits for DoggMatch+ members.
 * Add, edit or remove entries here — the page picks them up on its own.
 * Set `active: false` to hide one without deleting it.
 */
export type BenefitCategory =
  | "equipment"
  | "food"
  | "grooming"
  | "training"
  | "insurance"
  | "vet"
  | "travel";

export interface Benefit {
  id: string;
  partner: string;
  category: BenefitCategory;
  /** Short line on the card, e.g. "15% off harnesses and leads". */
  offer: string;
  detail: string;
  /** Shown to the member when there's a code to use in a shop or online. */
  code?: string;
  url?: string;
  /** Where it can be used, in plain words. */
  where?: string;
  active?: boolean;
}

const benefitCategoryLabels: Record<BenefitCategory, { en: string; no: string }> = {
  equipment: { en: "Equipment", no: "Utstyr" },
  food: { en: "Food & treats", no: "Mat og godbiter" },
  grooming: { en: "Grooming", no: "Stell og pels" },
  training: { en: "Training", no: "Trening" },
  insurance: { en: "Insurance", no: "Forsikring" },
  vet: { en: "Vet care", no: "Veterinær" },
  travel: { en: "Travel", no: "Reise" },
};

/** Bilingual, locale-aware benefit categories. Call from render — reads the live locale. */
export function benefitCategories(): { id: BenefitCategory; label: string }[] {
  return (Object.keys(benefitCategoryLabels) as BenefitCategory[]).map((id) => ({
    id,
    label: pick(benefitCategoryLabels[id]),
  }));
}

export const benefits: Benefit[] = [];

export const activeBenefits = () => benefits.filter((b) => b.active !== false);
