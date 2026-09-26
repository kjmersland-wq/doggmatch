import { pick, type Locale } from "@/i18n";
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
export function careTopics(locale?: Locale): CareTopic[] {
  return pick({ en: careTopicsEn, no: careTopicsNo, pl: careTopicsPl, dk: careTopicsDk, se: careTopicsSe, fi: careTopicsFi, de: careTopicsDe, fr: careTopicsFr, nl: careTopicsNl }, locale);
}

export function careTopicsById(locale?: Locale): Record<string, CareTopic> {
  return Object.fromEntries(careTopics(locale).map((t) => [t.id, t]));
}

export function getCareTopic(id: string, locale?: Locale): CareTopic | undefined {
  return careTopicsById(locale)[id];
}
