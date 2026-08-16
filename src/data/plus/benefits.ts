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

export const benefitCategories: { id: BenefitCategory; label: string }[] = [
  { id: "equipment", label: "Equipment" },
  { id: "food", label: "Food & treats" },
  { id: "grooming", label: "Grooming" },
  { id: "training", label: "Training" },
  { id: "insurance", label: "Insurance" },
  { id: "vet", label: "Vet care" },
  { id: "travel", label: "Travel" },
];

export const benefits: Benefit[] = [];

export const activeBenefits = () => benefits.filter((b) => b.active !== false);
