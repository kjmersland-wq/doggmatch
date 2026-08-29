import { pick } from "@/i18n";
import * as en from "./content.en";
import * as no from "./content.no";
import * as pl from "./content.pl";

export type { JourneyStep, CostGroup, ChecklistItem } from "./content.en";

/** All the Get A Dog journey copy, in the reader's language. Safe outside React too. */
export function getDogContent() {
  return pick({ en, no, pl });
}
