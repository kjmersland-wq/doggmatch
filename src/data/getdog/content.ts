import { pick } from "@/i18n";
import * as en from "./content.en";
import * as no from "./content.no";
import * as pl from "./content.pl";
import * as dk from "./content.dk";
import * as se from "./content.se";
import * as fi from "./content.fi";
import * as de from "./content.de";
import * as fr from "./content.fr";
import * as nl from "./content.nl";

export type { JourneyStep, CostGroup, ChecklistItem } from "./content.en";

/** All the Get A Dog journey copy, in the reader's language. Safe outside React too. */
export function getDogContent() {
  return pick({ en, no, pl, dk, se, fi, de, fr, nl });
}
