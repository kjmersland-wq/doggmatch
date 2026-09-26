import type { QuizQuestion, UserProfile } from "./types";

/**
 * A result is fully determined by the answers, so a link only has to carry
 * the answers: same answers → same dogs. Format: `key.value~key.value`.
 * Decoding is strict — every value must be a real option — so a hand-edited
 * link can never feed the engine something it does not know.
 */
export function encodeProfile(profile: UserProfile): string {
  return Object.entries(profile)
    .filter(([, v]) => typeof v === "string" && v.length > 0)
    .map(([k, v]) => `${k}.${v}`)
    .join("~");
}

export function decodeProfile(raw: string | undefined, questions: QuizQuestion[]): UserProfile | null {
  if (!raw || raw.length > 600) return null;
  const byId = new Map(questions.map((q) => [q.id, q]));
  const profile: UserProfile = {};
  for (const part of raw.split("~")) {
    const dot = part.indexOf(".");
    if (dot <= 0) return null;
    const key = part.slice(0, dot);
    const value = part.slice(dot + 1);
    if (key.endsWith("HardLimit")) {
      const base = byId.get(key.slice(0, -"HardLimit".length));
      if (!base || (value !== "true" && value !== "false")) return null;
      profile[key] = value;
      continue;
    }
    const q = byId.get(key);
    if (!q || !q.options.some((o) => o.value === value)) return null;
    profile[key] = value;
  }
  // Every required question needs an answer, otherwise start the quiz instead.
  for (const q of questions) if (!q.optional && !profile[q.id]) return null;
  return profile;
}
