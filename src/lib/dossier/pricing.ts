import type { Locale } from "@/i18n";

export interface DossierPrice {
  /** Lower-case ISO currency code. */
  currency: "usd";
  /** Minor units — cents. */
  amount: number;
  /** Ready-to-show price string. */
  display: string;
}

/**
 * One-time price for the Complete Breed & Puppy Buyer Dossier.
 * Shown in USD for every locale.
 */
export function dossierPrice(_locale: Locale): DossierPrice {
  return { currency: "usd", amount: 499, display: "$4.99" };
}
