import type { Lesson } from "./types";
import { pick, getLocale } from "@/i18n";
import { lessons as lessonsEn } from "./lessons.en";
import { lessons as lessonsNo } from "./lessons.no";

/** Locale-aware lesson list — call inside render so it re-picks on locale change. */
export function getLessons(): Lesson[] {
  console.log("DBG", getLocale(), Array.isArray(lessonsNo), lessonsNo?.length);
  return pick({ en: lessonsEn, no: lessonsNo });
}

export function getLessonsById(): Record<string, Lesson> {
  return Object.fromEntries(getLessons().map((l) => [l.id, l]));
}

export function getLesson(id: string): Lesson | undefined {
  return getLessonsById()[id];
}
