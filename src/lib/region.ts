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
 * Units of local currency per euro: the ECB euro reference rates for 2026-10-16
 * (https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml). The rates are fixed
 * on purpose, so the same page always reads the same; the cost note on the page says
 * the figures are approximate. To refresh, copy the new ECB values here and update
 * RATES_AS_OF. Rates older than a few months should be refreshed.
 */
export const RATES_AS_OF = "2026-10-16";

const PER_EURO: Record<string, number> = {
  EUR: 1,
  GBP: 0.84385,
  NOK: 10.624,
  SEK: 11.145,
  DKK: 7.4748,
  PLN: 4.37,
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

/**
 * A coarse national summary, not a forecast: "cold" means long, hard winters across most
 * of the country, "warm" means hot summers across most of it. It only decides which
 * single weather note can appear next to a breed that copes badly with that weather.
 */
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
 * - restricted: national rules such as import and breeding limits, a permit or a
 *   temperament test.
 * - permit: the owner has to hold a permit or register the dog.
 * - regional: some regions list the breed and others do not.
 *
 * Checked on RULES_CHECKED against official or official-derived sources:
 * - DE: federal import and breeding ban (Pit Bull Terrier, American Staffordshire Terrier,
 *   Staffordshire Bull Terrier, Bull Terrier) plus separate state lists that commonly name
 *   Rottweiler, Dobermann, Cane Corso and mastiff types (Zoll.de, state dog laws).
 * - FR: Rottweiler is category 2 (declaration, permit, behavioural evaluation) under the
 *   2008 dangerous dogs rules; the Staffordshire Bull Terrier is not covered (Ministry of
 *   Agriculture / customs guidance).
 * - PL: the 2003 Interior Ministry list of 11 breeds needs a permit from the municipality;
 *   of the breeds in our library only Rottweiler is on it.
 * - GB, DK, NO: outright bans (GB: Pit Bull Terrier type, Japanese Tosa, Dogo Argentino,
 *   Fila Brasileiro, XL Bully type; DK: 13 breeds; NO: 6 breeds) cover no breed in our
 *   library, so they produce no entry. SE, FI and NL have no national breed list.
 * When a breed is added to the library, check it against these lists before shipping.
 * The notes shown to readers always say to check the current local rules.
 */
export const RULES_CHECKED = "2026-10-19";

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
  },
};

export function breedRule(breedId: BreedId, country: Country): RuleLevel | null {
  return RULES[country]?.[breedId] ?? null;
}
