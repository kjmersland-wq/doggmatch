import { getLessons } from "@/data/training/lessons";
import type { Lesson, SkillStatus } from "@/data/training/types";
import { breedById } from "@/data/breeds";
import type { DogProfile } from "./store";

/**
 * Deterministic, explainable recommendations — no model, no API call.
 * The same dog, the same progress and the same day always produce the same
 * plan, and every point of the score can be traced back to a reason.
 */
export interface ScoredLesson {
  lesson: Lesson;
  score: number;
  /** Short, human reason we put this in front of you today. */
  reason: string;
}

const levelOrder = ["beginner", "building", "intermediate", "advanced"] as const;

export function scoreLesson(
  lesson: Lesson,
  dog: DogProfile | undefined,
  progress: Record<string, SkillStatus>,
): ScoredLesson {
  let score = 10;
  let reason = "A good place to start";

  const status = progress[lesson.id] ?? "not-started";
  if (status === "learned") score -= 30;
  if (status === "getting-there") score += 6;
  if (status === "practising") score += 10;

  if (dog) {
    if ((dog.goals ?? []).some((g) => lesson.goals.includes(g))) {
      score += 24;
      reason = "You said you'd like to work on this";
    }
    if (lesson.ageStages.includes(dog.ageStage)) {
      score += 10;
      if (reason === "A good place to start") reason = ageReason(dog.ageStage);
    } else {
      score -= 14;
    }

    const gap = levelOrder.indexOf(lesson.level) - levelOrder.indexOf(dog.level);
    if (gap === 0) score += 8;
    else if (gap === 1) score += 4;
    else if (gap > 1) score -= 12;

    if (dog.experience === "first-dog" && lesson.level === "beginner") score += 5;

    if (dog.breedId && lesson.breedRelevance?.includes(dog.breedId)) {
      score += 8;
      const breed = breedById[dog.breedId];
      if (breed) reason = `Often suits a ${breed.name}, though every dog is their own dog`;
    }
    if (status === "practising") reason = "You're in the middle of this one";
  }

  return { lesson, score, reason };
}

export function rankLessons(
  dog: DogProfile | undefined,
  progress: Record<string, SkillStatus>,
): ScoredLesson[] {
  return getLessons()
    .map((l) => scoreLesson(l, dog, progress))
    .sort((a, b) => b.score - a.score || a.lesson.id.localeCompare(b.lesson.id));
}

/** One to three short sessions for today. Rotates gently, day by day. */
export function todaysPlan(
  dog: DogProfile | undefined,
  progress: Record<string, SkillStatus>,
  day: string,
): ScoredLesson[] {
  const ranked = rankLessons(dog, progress);
  const pool = ranked.slice(0, 6);
  if (pool.length === 0) return [];
  const offset = dayIndex(day) % pool.length;
  const rotated = [...pool.slice(offset), ...pool.slice(0, offset)];
  return rotated.slice(0, 3);
}

function dayIndex(day: string): number {
  return day.split("-").reduce((sum, part) => sum + Number(part), 0);
}

function ageReason(stage: DogProfile["ageStage"]): string {
  switch (stage) {
    case "puppy":
      return "Worth doing early, while everything is new";
    case "adolescent":
      return "The age where this one really pays off";
    case "senior":
      return "Gentle, and lovely for an older dog";
    default:
      return "Useful at any age";
  }
}

export const ageFocus: Record<DogProfile["ageStage"], { title: string; body: string; points: string[] }> = {
  puppy: {
    title: "Puppyhood",
    body: "Everything is new, and most of what you do now is simply showing your puppy that the world is a friendly place.",
    points: ["Confidence", "Meeting the world gently", "Learning to talk to each other", "House training", "Being handled", "Sleep and calm"],
  },
  adolescent: {
    title: "The teenage months",
    body: "Things that worked last month may stop working for a while. It passes. Consistency and patience carry you through.",
    points: ["Waiting and self-control", "Working around distractions", "Recall, again and again", "Walking nicely", "Staying consistent"],
  },
  adult: {
    title: "The grown-up years",
    body: "Now it's about making good habits reliable, and keeping life interesting.",
    points: ["Reliability", "Everyday manners", "New skills for fun", "Enrichment"],
  },
  senior: {
    title: "The older years",
    body: "Older dogs still love to learn. Keep it short, gentle and kind to stiff joints.",
    points: ["Gentle brain games", "Clear communication", "Activities that suit their body", "Keeping familiar skills alive"],
  },
};
