/**
 * Country-to-country travel rules.
 *
 * Rules are DATA, never hard-coded into a screen. Where we don't hold a
 * verified rule for a route, the engine says so and points at the official
 * authority instead of guessing. Accuracy matters more than looking complete.
 */
import { pick } from "@/i18n";
import { countries as countriesEn, transportModes as transportModesEn, travelTimeline as travelTimelineEn } from "./countries.en";
import { countries as countriesNo, transportModes as transportModesNo, travelTimeline as travelTimelineNo } from "./countries.no";

export interface OfficialSource {
  name: string;
  url: string;
  country: string;
  lastChecked: string;
  category: string;
}

export interface Country {
  code: string;
  name: string;
  /** Member of the EU pet travel scheme (EU + EEA participants). */
  eu: boolean;
  sources: OfficialSource[];
  /** Requirements that apply to dogs arriving in this country. */
  entry: {
    /** Rules that apply when arriving from another EU/EEA country. */
    fromEu: RuleSet;
    /** Rules that apply when arriving from outside the EU/EEA. */
    fromNonEu?: RuleSet;
  };
}

export type RuleLevel = "required" | "recommended" | "good-to-have";

export interface Rule {
  id: string;
  level: RuleLevel;
  title: string;
  detail: string;
}

export interface RuleSet {
  rules: Rule[];
  /** Quarantine position, stated carefully. */
  quarantine: string;
  /** Minimum-age position, stated carefully. */
  minimumAge: string;
  notes?: string[];
}

/** Locale-aware country list — call inside render so it re-picks on locale change. */
export function getCountries(): Country[] {
  return pick({ en: countriesEn, no: countriesNo });
}

export function getCountriesByCode(): Record<string, Country> {
  return Object.fromEntries(getCountries().map((c) => [c.code, c]));
}

export function getTransportModes() {
  return pick({ en: transportModesEn, no: transportModesNo });
}

export function getTravelTimeline() {
  return pick({ en: travelTimelineEn, no: travelTimelineNo });
}
