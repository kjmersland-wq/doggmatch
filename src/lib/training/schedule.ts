/**
 * Deterministic training plans and progress maths.
 *
 * Nothing here calls a model or an API. The same dog, the same progress and
 * the same date always produce exactly the same week, and every number can be
 * traced back to a rule you can read below.
 */
import { pick } from "@/i18n";
import type { CategoryId, Lesson, SkillStatus } from "@/data/training/types";
import { rankLessons, type ScoredLesson } from "./plan";
import type { DogProfile, SessionRecord } from "./store";

export type SizeBand = "small" | "medium" | "large";

/* ------------------------------------------------------- session lengths */

/** How long a single session should realistically last for this dog. */
export function sessionMinutes(lesson: Lesson, dog: DogProfile | undefined): number {
  const base = lesson.duration;
  if (!dog) return base;
  const byAge = { puppy: 0.6, adolescent: 0.9, adult: 1, senior: 0.75 }[dog.ageStage] ?? 1;
  const size = dog.sizeBand ?? "medium";
  const bySize = size === "small" ? 0.9 : size === "large" ? 1.1 : 1;
  return Math.max(2, Math.round(base * byAge * bySize));
}

/** What we'd suggest per day if there were no time pressure at all. */
export function suggestedDailyMinutes(dog: DogProfile | undefined): number {
  if (!dog) return 15;
  const byAge = { puppy: 12, adolescent: 25, adult: 20, senior: 10 }[dog.ageStage] ?? 15;
  const size = dog.sizeBand ?? "medium";
  const bySize = size === "large" ? 4 : size === "small" ? -2 : 0;
  return Math.max(8, byAge + bySize);
}

/** The budget we actually plan against: never more time than the owner has. */
export function dailyBudget(dog: DogProfile | undefined): number {
  const suggested = suggestedDailyMinutes(dog);
  const available = dog?.minutesPerDay;
  return available ? Math.min(available, suggested) : suggested;
}

/* ------------------------------------------------------------ the week */

export interface PlannedSession extends ScoredLesson {
  minutes: number;
}

export interface PlannedDay {
  /** ISO date, day precision. */
  day: string;
  /** Short weekday label in the reader's language. */
  label: string;
  sessions: PlannedSession[];
  minutes: number;
  /** A deliberately lighter day — rest matters as much as repetition. */
  easy: boolean;
  done: boolean;
}

const WEEKDAY_LABELS = {
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  no: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
  pl: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "Sb"],
  dk: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
  se: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
  fi: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
  de: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  fr: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
  nl: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
} as const;

function addDays(iso: string, n: number): string {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

function weekdayLabel(iso: string): string {
  const labels = pick<readonly string[]>(WEEKDAY_LABELS);
  const index = new Date(`${iso}T00:00:00Z`).getUTCDay();
  return labels[index] ?? "";
}

function dayNumber(iso: string): number {
  return iso.split("-").reduce((sum, part) => sum + Number(part), 0);
}

/**
 * Seven days starting today. Sessions are drawn from the ranked pool and
 * rotated day by day so nothing gets hammered, and each day stops as soon as
 * the time budget is used up.
 */
export function weeklyPlan(
  dog: DogProfile | undefined,
  progress: Record<string, SkillStatus>,
  sessions: SessionRecord[],
  startDay: string,
): PlannedDay[] {
  const ranked = rankLessons(dog, progress);
  const pool = ranked.slice(0, 8);
  const budget = dailyBudget(dog);
  const doneDays = new Set(sessions.map((s) => s.day));

  return Array.from({ length: 7 }, (_, i) => {
    const day = addDays(startDay, i);
    const easy = i === 6;
    const picks: PlannedSession[] = [];
    let minutes = 0;

    if (pool.length > 0) {
      const offset = (dayNumber(day) * 2) % pool.length;
      const rotated = [...pool.slice(offset), ...pool.slice(0, offset)];
      const cap = easy ? Math.max(5, Math.round(budget * 0.5)) : budget;
      for (const item of rotated) {
        const m = sessionMinutes(item.lesson, dog);
        if (minutes + m > cap && picks.length > 0) continue;
        picks.push({ ...item, minutes: m });
        minutes += m;
        if (minutes >= cap || picks.length >= (easy ? 1 : 3)) break;
      }
    }

    return { day, label: weekdayLabel(day), sessions: picks, minutes, easy, done: doneDays.has(day) };
  });
}

/* -------------------------------------------------- why this one matters */

const WHY_BY_CATEGORY: Record<CategoryId, { en: string; no?: string; pl?: string }> = {
  "puppy-foundations": {
    en: "The early weeks shape how safe your dog feels later. Small, kind repetitions now save you a lot of worry in a year's time.",
    no: "De første ukene former hvor trygg hunden føler seg senere. Små, vennlige gjentakelser nå sparer deg for mye bekymring om et år.",
    pl: "Pierwsze tygodnie kształtują to, jak bezpiecznie pies czuje się później. Drobne, łagodne powtórki teraz oszczędzą wam wielu zmartwień za rok.",
  },
  "everyday-manners": {
    en: "This is the stuff you use every single day — doorways, guests, mealtimes. It quietly makes life together easier.",
    no: "Dette bruker dere hver eneste dag — døråpninger, gjester, måltider. Det gjør hverdagen sammen enklere, helt stille.",
    pl: "To rzeczy, których używacie codziennie — drzwi, goście, posiłki. Po cichu ułatwiają wspólne życie.",
  },
  walking: {
    en: "Walks are most of your week. A dog who can walk calmly gets taken more places — and sees more of the world.",
    no: "Turer er det meste av uken deres. En hund som går rolig blir med flere steder — og ser mer av verden.",
    pl: "Spacery to większość waszego tygodnia. Pies, który idzie spokojnie, trafia w więcej miejsc — i widzi więcej świata.",
  },
  home: {
    en: "A dog who can settle at home is a dog who can relax anywhere. Calm is a skill, and it can be practised.",
    no: "En hund som kan slappe av hjemme, kan slappe av hvor som helst. Ro er en ferdighet, og den kan øves opp.",
    pl: "Pies, który potrafi się wyciszyć w domu, wyciszy się wszędzie. Spokój to umiejętność, którą można ćwiczyć.",
  },
  socialisation: {
    en: "Good experiences with people, dogs and noise build a dog who copes instead of reacting. This is prevention, not repair.",
    no: "Gode opplevelser med folk, hunder og lyder bygger en hund som takler i stedet for å reagere. Dette er forebygging, ikke reparasjon.",
    pl: "Dobre doświadczenia z ludźmi, psami i hałasem budują psa, który sobie radzi, zamiast reagować. To profilaktyka, nie naprawa.",
  },
  "recall-safety": {
    en: "This is the one that keeps your dog safe. Every rep you do in the garden is credit in the bank for the day it really counts.",
    no: "Dette er den som holder hunden din trygg. Hver repetisjon i hagen er penger i banken den dagen det virkelig gjelder.",
    pl: "To właśnie ta umiejętność chroni psa. Każde powtórzenie w ogrodzie to oszczędność na dzień, w którym naprawdę się liczy.",
  },
  "tricks-games": {
    en: "Tricks aren't showing off — they teach your dog how to learn, and they're a fine way to spend five happy minutes together.",
    no: "Triks handler ikke om å vise seg fram — de lærer hunden å lære, og er en fin måte å bruke fem gode minutter sammen.",
    pl: "Sztuczki to nie popisy — uczą psa, jak się uczyć, i to miły sposób na pięć wspólnych, radosnych minut.",
  },
  "mental-stimulation": {
    en: "Ten minutes of thinking tires a dog more kindly than an hour of running, and it helps on days when a long walk isn't possible.",
    no: "Ti minutter med tenking sliter ut en hund mer skånsomt enn en time med løping, og hjelper på dager der lang tur ikke går.",
    pl: "Dziesięć minut myślenia męczy psa łagodniej niż godzina biegania i ratuje dni, gdy długi spacer nie wchodzi w grę.",
  },
};

/** A short, plain-language answer to "why are we doing this?". */
export function whyItMatters(lesson: Lesson): string {
  return pick(WHY_BY_CATEGORY[lesson.category] ?? WHY_BY_CATEGORY["everyday-manners"]);
}

/* ------------------------------------------------------------- progress */

export interface ProgressSummary {
  sessions: number;
  sessionsThisWeek: number;
  learned: number;
  practising: number;
  total: number;
  streak: number;
  bestStreak: number;
  /** Last 7 days, oldest first: did you train that day? */
  week: { day: string; label: string; done: boolean; today: boolean }[];
}

export function progressSummary(
  sessions: SessionRecord[],
  progress: Record<string, SkillStatus>,
  totalLessons: number,
  todayIso: string,
): ProgressSummary {
  const days = new Set(sessions.map((s) => s.day));

  let streak = 0;
  for (let i = 0; ; i += 1) {
    if (!days.has(addDays(todayIso, -i))) {
      // Today not being done yet shouldn't wipe yesterday's streak.
      if (i === 0) continue;
      break;
    }
    streak += 1;
  }

  const sorted = [...days].sort();
  let bestStreak = 0;
  let run = 0;
  let previous = "";
  for (const day of sorted) {
    run = previous && addDays(previous, 1) === day ? run + 1 : 1;
    previous = day;
    if (run > bestStreak) bestStreak = run;
  }

  const week = Array.from({ length: 7 }, (_, i) => {
    const day = addDays(todayIso, i - 6);
    return { day, label: weekdayLabel(day), done: days.has(day), today: day === todayIso };
  });

  const statuses = Object.values(progress);
  return {
    sessions: sessions.length,
    sessionsThisWeek: week.filter((d) => d.done).length,
    learned: statuses.filter((s) => s === "learned").length,
    practising: statuses.filter((s) => s === "practising" || s === "getting-there").length,
    total: totalLessons,
    streak,
    bestStreak,
    week,
  };
}

/**
 * An honest, warm line about where you are. Never congratulates you for
 * nothing, never scolds you for a quiet week.
 */
export function encouragement(summary: ProgressSummary): string {
  const c = pick({
    en: {
      none: "Nothing logged yet — that's fine. One five-minute session today is a real start.",
      first: "One session in. That's genuinely how every trained dog started.",
      quiet: "It's been a quiet few days. Pick the shortest lesson and do it once — that's enough to be back.",
      building: (n: number) => `${n} days in a row. Short and regular beats long and rare, every time.`,
      steady: (n: number) => `${n} sessions together so far. You're building a habit, not chasing a finish line.`,
    },
    no: {
      none: "Ingenting logget ennå — helt greit. Én økt på fem minutter i dag er en ekte start.",
      first: "Én økt inne. Slik startet faktisk hver eneste godt trente hund.",
      quiet: "Det har vært stille noen dager. Velg den korteste leksjonen og gjør den én gang — det holder for å være i gang igjen.",
      building: (n: number) => `${n} dager på rad. Kort og jevnlig slår langt og sjeldent, hver gang.`,
      steady: (n: number) => `${n} økter sammen så langt. Dere bygger en vane, ikke jager en målstrek.`,
    },
    pl: {
      none: "Nic jeszcze nie zapisano — i dobrze. Jedna pięciominutowa sesja dziś to prawdziwy początek.",
      first: "Pierwsza sesja za wami. Tak właśnie zaczynał każdy dobrze ułożony pies.",
      quiet: "Ostatnie dni były spokojne. Wybierz najkrótszą lekcję i zrób ją raz — to wystarczy, by wrócić.",
      building: (n: number) => `${n} dni z rzędu. Krótko i regularnie wygrywa z długo i rzadko, za każdym razem.`,
      steady: (n: number) => `${n} wspólnych sesji. Budujecie nawyk, a nie gonicie metę.`,
    },
  });

  if (summary.sessions === 0) return c.none;
  if (summary.sessions === 1) return c.first;
  if (summary.streak >= 2) return c.building(summary.streak);
  if (summary.sessionsThisWeek === 0) return c.quiet;
  return c.steady(summary.sessions);
}
