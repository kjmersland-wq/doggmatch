import { pick } from "@/i18n";
import * as en from "./readiness.en";
import * as no from "./readiness.no";
import * as pl from "./readiness.pl";

export type { ReadinessOption, ReadinessQuestion, ReadinessOutcome } from "./readiness.en";

/** The readiness questions and outcomes, in the reader's language. */
export function getReadinessData() {
  return pick({ en, no, pl });
}
