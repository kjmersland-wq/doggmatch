import type { CareState } from "@/lib/care/store";
import type { DogProfile } from "@/lib/training/store";
import { resolveDogTraits } from "@/lib/dogs/profile";
import { breedById } from "@/data/breeds";

/**
 * A gentle nudge, not a nagging list. Every interval below is a rough rhythm
 * for a healthy dog, worked out from what the owner has told us. Nothing here
 * is a deadline, and nothing here is medical advice.
 */

export interface CareTask {
  id: string;
  label: string;
  everyDays: number;
  /** Where to go to actually do it. */
  to?: string;
  topicId?: string;
}

export interface CareDue extends CareTask {
  lastDone?: string;
  daysSince?: number;
  due: boolean;
  /** Warm, plain-spoken line shown to the owner. */
  line: string;
}

export function careTasks(dog: DogProfile | undefined): CareTask[] {
  const grooming = resolveDogTraits(dog).traits.grooming;
  return [
    { id: "dental", label: "Teeth", everyDays: 2, topicId: "dental" },
    { id: "coat", label: "A proper brush", everyDays: grooming >= 4 ? 2 : grooming === 3 ? 4 : 7, topicId: "coat" },
    { id: "paws", label: "Nails and paws", everyDays: 21, topicId: "paws" },
    { id: "ears", label: "Ear check", everyDays: 14, topicId: "ears" },
    { id: "everyday-check", label: "Nose-to-tail check", everyDays: 7, topicId: "everyday-check" },
    { id: "weight", label: "Weigh-in", everyDays: 30, to: "/my-dog/weight" },
  ];
}

function daysBetween(from: string, to: Date): number {
  const a = new Date(`${from}T00:00:00`);
  return Math.max(0, Math.round((to.getTime() - a.getTime()) / 86_400_000));
}

export function careDue(
  dog: DogProfile | undefined,
  state: CareState,
  now = new Date(),
): CareDue[] {
  const name = dog?.name ?? "your dog";
  const done = (dog && state.lastDone[dog.id]) || {};
  return careTasks(dog).map((task) => {
    const last = task.id === "weight" ? lastWeightDay(dog, state) : done[task.id];
    const daysSince = last ? daysBetween(last, now) : undefined;
    const due = daysSince === undefined || daysSince >= task.everyDays;
    return {
      ...task,
      ...(last ? { lastDone: last } : {}),
      ...(daysSince === undefined ? {} : { daysSince }),
      due,
      line: line(task, name, daysSince),
    };
  });
}

function lastWeightDay(dog: DogProfile | undefined, state: CareState): string | undefined {
  const entries = (dog && state.weights[dog.id]) || [];
  return entries.length ? entries[entries.length - 1]!.day : undefined;
}

function line(task: CareTask, name: string, daysSince?: number): string {
  if (daysSince === undefined) {
    switch (task.id) {
      case "dental":
        return `Whenever you're ready to start on ${name}'s teeth.`;
      case "weight":
        return `Pop ${name} on the scales when you get a chance.`;
      default:
        return `Nothing noted yet — tick it off once you've done it.`;
    }
  }
  if (daysSince < task.everyDays) {
    return daysSince === 0 ? "Done today. Lovely." : `Done ${daysSince} day${daysSince === 1 ? "" : "s"} ago.`;
  }
  switch (task.id) {
    case "paws":
      return `${name}'s nails may be due for a trim.`;
    case "dental":
      return `It's been a few days since ${name}'s teeth.`;
    case "coat":
      return `${name} could probably do with a brush.`;
    case "ears":
      return `Worth a quick look in ${name}'s ears.`;
    case "weight":
      return `It's been about a month since ${name} was weighed.`;
    default:
      return `Worth a few minutes when you have them.`;
  }
}