import * as en from "./content.en";
import * as no from "./content.no";
import { pick } from "@/i18n";

export type { PartnerCategory } from "./content.en";

export function partnersContent() {
  return pick({ en, no });
}
