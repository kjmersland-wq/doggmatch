import { getReadinessData } from "@/data/getdog/readiness";
import type { ReadinessOutcome } from "@/data/getdog/readiness.en";
import type { UserProfile } from "@/lib/matching/types";

/**
 * Deterministic and gentle: every answer scores 0–3, and the bands are wide.
 * The score is never shown as a mark out of anything — it only chooses which
 * of three warm outcomes to show.
 */
export interface ReadinessResult {
  outcome: ReadinessOutcome;
  /** 0–100, used only for the quiet progress arc. */
  percent: number;
  answered: number;
  total: number;
  /** Kind, specific notes attached to the answers given. */
  notes: string[];
  /** What the matching engine can reuse. */
  profile: UserProfile;
}

export function scoreReadiness(answers: Record<string, string>): ReadinessResult {
  const { readinessQuestions, readinessOutcomes } = getReadinessData();
  let score = 0;
  let max = 0;
  const notes: string[] = [];
  let profile: UserProfile = {};
  let answered = 0;

  for (const q of readinessQuestions) {
    const value = answers[q.id];
    if (!value) continue;
    const option = q.options.find((o) => o.value === value);
    if (!option) continue;
    answered += 1;
    score += option.score;
    max += 3;
    if (option.note) notes.push(option.note);
    if (option.profile) profile = { ...profile, ...option.profile };
  }

  const percent = max === 0 ? 0 : Math.round((score / max) * 100);
  const id: ReadinessOutcome["id"] =
    percent >= 85 ? "well-prepared" : percent >= 62 ? "good-start" : "not-yet";

  return {
    outcome: readinessOutcomes[id],
    percent,
    answered,
    total: readinessQuestions.length,
    notes,
    profile,
  };
}
