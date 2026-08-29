import { pick } from "@/i18n";
import { careTopicsEn } from "./topics.en";
import { careTopicsNo } from "./topics.no";
import { careTopicsPl } from "./topics.pl";
import type { CareTopic } from "./types";

/** Locale-aware care topics. */
export function careTopics(): CareTopic[] {
  return pick({ en: careTopicsEn, no: careTopicsNo, pl: careTopicsPl });
}

export function careTopicsById(): Record<string, CareTopic> {
  return Object.fromEntries(careTopics().map((t) => [t.id, t]));
}

export function getCareTopic(id: string): CareTopic | undefined {
  return careTopicsById()[id];
}
