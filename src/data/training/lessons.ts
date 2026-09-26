import type { Lesson } from "./types";
import { pick, type Locale } from "@/i18n";
import { lessons as lessonsEn } from "./lessons.en";
import { lessons as lessonsNo } from "./lessons.no";
import { lessons as lessonsPl } from "./lessons.pl";
import { lessons as lessonsDk } from "./lessons.dk";
import { lessons as lessonsSe } from "./lessons.se";
import { lessons as lessonsFi } from "./lessons.fi";
import { lessons as lessonsDe } from "./lessons.de";
import { lessons as lessonsFr } from "./lessons.fr";
import { lessons as lessonsNl } from "./lessons.nl";

/** Locale-aware lesson list — call inside render so it re-picks on locale change. */
export function getLessons(locale?: Locale): Lesson[] {
  return pick({ en: lessonsEn, no: lessonsNo, pl: lessonsPl, dk: lessonsDk, se: lessonsSe, fi: lessonsFi, de: lessonsDe, fr: lessonsFr, nl: lessonsNl }, locale);
}

export function getLessonsById(locale?: Locale): Record<string, Lesson> {
  return Object.fromEntries(getLessons(locale).map((l) => [l.id, l]));
}

export function getLesson(id: string, locale?: Locale): Lesson | undefined {
  return getLessonsById(locale)[id];
}
