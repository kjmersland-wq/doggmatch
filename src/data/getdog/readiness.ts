import { pick } from "@/i18n";
import * as en from "./readiness.en";
import * as no from "./readiness.no";
import * as pl from "./readiness.pl";
import * as dk from "./readiness.dk";
import * as se from "./readiness.se";
import * as fi from "./readiness.fi";
import * as de from "./readiness.de";
import * as fr from "./readiness.fr";
import * as nl from "./readiness.nl";

export type { ReadinessOption, ReadinessQuestion, ReadinessOutcome } from "./readiness.en";

/** The readiness questions and outcomes, in the reader's language. */
export function getReadinessData() {
  return pick({ en, no, pl, dk, se, fi, de, fr, nl });
}
