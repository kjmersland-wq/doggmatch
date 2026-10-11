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
 * Paddle charges in USD for every locale, so the displayed price always
 * matches what checkout actually charges.
 */
export function dossierPrice(_locale: Locale): DossierPrice {
  return { currency: "usd", amount: 499, display: "$4.99" };
}
