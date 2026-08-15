import { breedById } from "@/data/breeds";
import type { SkillStatus } from "@/data/training/types";
import type { DogProfile } from "@/lib/training/store";
import { rankLessons } from "@/lib/training/plan";
import type { CareProfile } from "@/lib/care/store";
import type { WeekOverride } from "@/lib/care/records";

/**
 * My Dog Week — one calm view of the days ahead, built from what we already
 * know about this dog. Same dog, same answers, same week: it never guesses and
 * there's no model involved. Anything here can be removed or added to.
 */

export type WeekKind = "walk" | "training" | "food" | "care" | "play" | "rest" | "own";

export interface WeekItem {
  id: string;
  kind: WeekKind;
  label: string;
  detail?: string;
}

export interface WeekDay {
  index: number;
  name: string;
  items: WeekItem[];
}

export const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const kindLabels: Record<WeekKind, string> = {
  walk: "Walk",
  training: "Training",
  food: "Food",
  care: "Care",
  play: "Play",
  rest: "Rest",
  own: "Yours",
};

export function kindLabel(kind: WeekKind): string {
  return kindLabels[kind];
}

function walkLine(dog: DogProfile | undefined, care: CareProfile): { label: string; detail: string } {
  const energy = dog?.breedId ? (breedById[dog.breedId]?.traits.exerciseNeeds ?? 3) : 3;
  const activity = care.activity ?? "moderate";
  if (dog?.ageStage === "puppy") {
    return { label: "Two short walks", detail: "Short and sniffy — little legs tire quickly" };
  }
  if (dog?.ageStage === "senior") {
    return { label: "A gentle walk", detail: "Their pace, not yours" };
  }
  if (energy >= 4 && activity !== "gentle") {
    return { label: "A long walk", detail: "This one needs a proper leg-stretch" };
  }
  if (energy <= 2 || activity === "gentle") {
    return { label: "An easy walk", detail: "Steady, with time to sniff" };
  }
  return { label: "A good walk", detail: "Half an hour or so, with sniffing time" };
}

function groomDays(dog: DogProfile | undefined): number[] {
  const grooming = dog?.breedId ? (breedById[dog.breedId]?.traits.grooming ?? 3) : 3;
  if (grooming >= 4) return [0, 2, 4, 6];
  if (grooming === 3) return [1, 4];
  return [3];
}

export function buildWeek(
  dog: DogProfile | undefined,
  care: CareProfile,
  progress: Record<string, SkillStatus>,
  override: WeekOverride = { removed: [], added: [] },
): WeekDay[] {
  const walk = walkLine(dog, care);
  const meals = care.mealsPerDay ?? (dog?.ageStage === "puppy" ? 3 : 2);
  const ranked = rankLessons(dog, progress).slice(0, 5);
  const brushDays = groomDays(dog);
  const mental = dog?.breedId ? (breedById[dog.breedId]?.traits.mentalStimulation ?? 3) : 3;

  const days: WeekDay[] = dayNames.map((name, index) => {
    const items: WeekItem[] = [];

    items.push({ id: `walk-${index}`, kind: "walk", label: walk.label, detail: walk.detail });
    items.push({
      id: `food-${index}`,
      kind: "food",
      label: meals === 1 ? "One measured meal" : `${meals} measured meals`,
      detail: "Weighed rather than guessed",
    });

    // Training on most days, resting the mind on Sunday.
    if (index !== 6 && ranked.length) {
      const lesson = ranked[index % ranked.length]!;
      items.push({
        id: `train-${index}`,
        kind: "training",
        label: lesson.lesson.title,
        detail: "Five minutes is plenty",
      });
    }

    if (index % 2 === 0) {
      items.push({ id: `teeth-${index}`, kind: "care", label: "Teeth", detail: "Even thirty seconds helps" });
    }
    if (brushDays.includes(index)) {
      items.push({ id: `brush-${index}`, kind: "care", label: "Brush", detail: "And a feel for lumps or mats" });
    }
    if (mental >= 4 && (index === 1 || index === 4)) {
      items.push({ id: `game-${index}`, kind: "play", label: "A thinking game", detail: "Scatter feed, or hide a toy" });
    }
    if (index === 6) {
      items.push({ id: `rest-${index}`, kind: "rest", label: "A slow day", detail: "Nothing asked of them" });
      items.push({ id: `check-${index}`, kind: "care", label: "Nose-to-tail check", detail: "Ears, eyes, paws, skin" });
    }
    if (index === 0) {
      items.push({ id: `weigh-${index}`, kind: "care", label: "Weigh-in (every few weeks)", detail: "Only takes a minute" });
    }

    return { index, name: name!, items };
  });

  for (const item of override.added) {
    const day = days[item.day];
    if (day) day.items.push({ id: item.id, kind: "own", label: item.label });
  }
  const removed = new Set(override.removed);
  return days.map((d) => ({ ...d, items: d.items.filter((i) => !removed.has(i.id)) }));
}