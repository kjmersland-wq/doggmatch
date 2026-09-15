import * as en from "./content.en";
import * as no from "./content.no";
import * as pl from "./content.pl";
import * as dk from "./content.dk";
import * as se from "./content.se";
import * as fi from "./content.fi";
import * as de from "./content.de";
import * as fr from "./content.fr";
import * as nl from "./content.nl";
import { pick, type Locale } from "@/i18n";

export type { PartnerCategory } from "./content.en";

export function partnersContent() {
  return pick({ en, no, pl, dk, se, fi, de, fr, nl });
}

/** The same copy, for a language we already know (used inside route head()). */
export function partnersContentFor(locale: Locale) {
  return pick({ en, no, pl, dk, se, fi, de, fr, nl }, locale);
}
