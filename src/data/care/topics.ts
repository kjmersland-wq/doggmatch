import { pick } from "@/i18n";
import { careTopicsEn } from "./topics.en";
import { careTopicsNo } from "./topics.no";
import { careTopicsPl } from "./topics.pl";
import { careTopicsDk } from "./topics.dk";
import { careTopicsSe } from "./topics.se";
import { careTopicsFi } from "./topics.fi";
import { careTopicsDe } from "./topics.de";
import { careTopicsFr } from "./topics.fr";
import { careTopicsNl } from "./topics.nl";
import type { CareTopic } from "./types";

/** Locale-aware care topics. */
export function careTopics(): CareTopic[] {
  return pick({ en: careTopicsEn, no: careTopicsNo, pl: careTopicsPl, dk: careTopicsDk, se: careTopicsSe, fi: careTopicsFi, de: careTopicsDe, fr: careTopicsFr, nl: careTopicsNl });
}

export function careTopicsById(): Record<string, CareTopic> {
  return Object.fromEntries(careTopics().map((t) => [t.id, t]));
}

export function getCareTopic(id: string): CareTopic | undefined {
  return careTopicsById()[id];
}
