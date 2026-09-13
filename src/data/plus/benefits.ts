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

const benefitCategoryLabels: Record<
  BenefitCategory,
  { en: string; no: string; pl: string; dk: string; se: string; fi: string; de: string; fr: string; nl: string }
> = {
  equipment: {
    en: "Equipment", no: "Utstyr", pl: "Wyposażenie", dk: "Udstyr", se: "Utrustning",
    fi: "Varusteet", de: "Ausrüstung", fr: "Équipement", nl: "Uitrusting",
  },
  food: {
    en: "Food & treats", no: "Mat og godbiter", pl: "Jedzenie i przysmaki", dk: "Mad og godbidder", se: "Mat och godis",
    fi: "Ruoka ja herkut", de: "Futter & Leckerlis", fr: "Alimentation et friandises", nl: "Voeding en snacks",
  },
  grooming: {
    en: "Grooming", no: "Stell og pels", pl: "Pielęgnacja", dk: "Pleje", se: "Pälsvård",
    fi: "Turkinhoito", de: "Fellpflege", fr: "Toilettage", nl: "Verzorging",
  },
  training: {
    en: "Training", no: "Trening", pl: "Szkolenie", dk: "Træning", se: "Träning",
    fi: "Koulutus", de: "Training", fr: "Éducation", nl: "Training",
  },
  insurance: {
    en: "Insurance", no: "Forsikring", pl: "Ubezpieczenie", dk: "Forsikring", se: "Försäkring",
    fi: "Vakuutus", de: "Versicherung", fr: "Assurance", nl: "Verzekering",
  },
  vet: {
    en: "Vet care", no: "Veterinær", pl: "Opieka weterynaryjna", dk: "Dyrlæge", se: "Veterinärvård",
    fi: "Eläinlääkäripalvelut", de: "Tierarzt", fr: "Soins vétérinaires", nl: "Dierenarts",
  },
  travel: {
    en: "Travel", no: "Reise", pl: "Podróże", dk: "Rejse", se: "Resor",
    fi: "Matkailu", de: "Reisen", fr: "Voyage", nl: "Reizen",
  },
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
