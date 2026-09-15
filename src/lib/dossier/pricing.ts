import type { Locale } from "@/i18n";

export interface DossierPrice {
  /** Stripe's lower-case ISO currency code. */
  currency: "usd" | "nok";
  /** Minor units — cents or øre. */
  amount: number;
  /** Ready-to-show price string, in the reader's own currency. */
  display: string;
}

/** One-time price for the Complete Breed & Puppy Buyer Dossier, by locale. */
export function dossierPrice(locale: Locale): DossierPrice {
  if (locale === "no") return { currency: "nok", amount: 4900, display: "49 kr" };
  return { currency: "usd", amount: 499, display: "$4.99" };
}
