import type { BreedId, Breed } from "@/data/breeds";
import type { Locale } from "@/i18n";

/**
 * Country adjustments for the result page. This never touches the matching
 * engine: it only changes how money is shown and which plain-language notes
 * (breed rules, climate) sit next to the result. Everything is a fixed table,
 * so the same country and breed always give the same output — no AI, no lookups.
 */

export const COUNTRIES = ["GB", "NO", "PL", "DK", "SE", "FI", "DE", "FR", "NL", "OTHER"] as const;
export type Country = (typeof COUNTRIES)[number];

/** The country we assume until the reader says otherwise, from the language they chose. */
export const DEFAULT_COUNTRY: Record<Locale, Country> = {
  en: "GB",
  no: "NO",
  pl: "PL",
  dk: "DK",
  se: "SE",
  fi: "FI",
  de: "DE",
  fr: "FR",
  nl: "NL",
};

export function isCountry(value: unknown): value is Country {
  return typeof value === "string" && (COUNTRIES as readonly string[]).includes(value);
}

/** ISO 4217 code used to show money for each country. "OTHER" stays in euro. */
export const CURRENCY: Record<Country, string> = {
  GB: "GBP",
  NO: "NOK",
  PL: "PLN",
  DK: "DKK",
  SE: "SEK",
  FI: "EUR",
  DE: "EUR",
  FR: "EUR",
  NL: "EUR",
  OTHER: "EUR",
};

/**
 * Indicative units of local currency per euro. A fixed, rounded rate on
 * purpose: these are planning figures, not a quote, and a live rate would make
 * the same page read differently from day to day. Review these now and then.
 */
const PER_EURO: Record<string, number> = {
  EUR: 1,
  GBP: 0.85,
  NOK: 11.7,
  SEK: 11.3,
  DKK: 7.46,
  PLN: 4.3,
};

/** True when amounts are converted from euro rather than shown as euro. */
export function isConverted(country: Country): boolean {
  return CURRENCY[country] !== "EUR";
}

/** Rounds a converted amount to a figure that doesn't pretend to be exact. */
function tidy(amount: number): number {
  const step = amount >= 1000 ? 50 : amount >= 100 ? 10 : 5;
  return Math.max(step, Math.round(amount / step) * step);
}

export function toLocalAmount(euros: number, country: Country): number {
  const rate = PER_EURO[CURRENCY[country]] ?? 1;
  return rate === 1 ? Math.round(euros) : tidy(euros * rate);
}

/* ---------- climate ---------- */

export type Climate = "cold" | "temperate" | "warm";

export const CLIMATE: Record<Country, Climate> = {
  GB: "temperate",
  NO: "cold",
  PL: "temperate",
  DK: "temperate",
  SE: "cold",
  FI: "cold",
  DE: "temperate",
  FR: "warm",
  NL: "temperate",
  OTHER: "temperate",
};

export type ClimateNote = "feelsCold" | "feelsHeat";

/** The one climate warning that applies to this breed in this country, if any. */
export function climateNote(breed: Breed, country: Country): ClimateNote | null {
  const climate = CLIMATE[country];
  if (climate === "cold" && breed.traits.coldTolerance <= 2) return "feelsCold";
  if (climate === "warm" && breed.traits.heatTolerance <= 2) return "feelsHeat";
  return null;
}

/* ---------- breed rules ---------- */

/**
 * - restricted: special national rules, such as import or breeding limits, permits
 *   or a temperament test.
 * - permit: the owner has to hold a permit or register the dog.
 * - regional: some regions list the breed and others do not.
 *
 * DRAFT: written from general knowledge of each country's dog laws and meant to
 * be checked against the current rules before relying on it. The notes shown to
 * the reader always tell them to check the local rules.
 */
export type RuleLevel = "restricted" | "permit" | "regional";

const RULES: Partial<Record<Country, Partial<Record<BreedId, RuleLevel>>>> = {
  DE: {
    "bull-terrier": "restricted",
    "staffordshire-bull-terrier": "restricted",
    rottweiler: "regional",
    dobermann: "regional",
    "cane-corso": "regional",
    bullmastiff: "regional",
  },
  FR: {
    rottweiler: "permit",
  },
  PL: {
    rottweiler: "permit",
    "bull-terrier": "permit",
    akita: "permit",
  },
};

export function breedRule(breedId: BreedId, country: Country): RuleLevel | null {
  return RULES[country]?.[breedId] ?? null;
}
