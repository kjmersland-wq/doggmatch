import { pick } from "@/i18n";
import type { CareState } from "@/lib/care/store";
import type { DogProfile } from "@/lib/training/store";
import { resolveDogTraits } from "@/lib/dogs/profile";

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
    { id: "dental", label: pick({ en: "Teeth", no: "Tenner", pl: "Zęby" }), everyDays: 2, topicId: "dental" },
    { id: "coat", label: pick({ en: "A proper brush", no: "En skikkelig børsting", pl: "Porządne szczotkowanie" }), everyDays: grooming >= 4 ? 2 : grooming === 3 ? 4 : 7, topicId: "coat" },
    { id: "paws", label: pick({ en: "Nails and paws", no: "Klør og poter", pl: "Pazury i łapy" }), everyDays: 21, topicId: "paws" },
    { id: "ears", label: pick({ en: "Ear check", no: "Sjekk ørene", pl: "Sprawdzenie uszu" }), everyDays: 14, topicId: "ears" },
    { id: "everyday-check", label: pick({ en: "Nose-to-tail check", no: "Sjekk fra snute til hale", pl: "Przegląd od nosa po ogon" }), everyDays: 7, topicId: "everyday-check" },
    { id: "weight", label: pick({ en: "Weigh-in", no: "Veiing", pl: "Ważenie" }), everyDays: 30, to: "/my-dog/weight" },
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
  const name = dog?.name ?? pick({ en: "your dog", no: "hunden din", pl: "Twój pies" });
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
        return pick({
          en: `Whenever you're ready to start on ${name}'s teeth.`,
          no: `Når du er klar til å begynne med tennene til ${name}.`,
          pl: `Kiedy tylko będziesz gotowy, zajmij się zębami ${name}.`,
        });
      case "weight":
        return pick({
          en: `Pop ${name} on the scales when you get a chance.`,
          no: `Sett ${name} på vekta når du får sjansen.`,
          pl: `Postaw ${name} na wadze, gdy tylko będzie okazja.`,
        });
      default:
        return pick({
          en: `Nothing noted yet — tick it off once you've done it.`,
          no: `Ingenting notert ennå — huk av når du har gjort det.`,
          pl: `Nic jeszcze nie zanotowano — odhacz, gdy to zrobisz.`,
        });
    }
  }
  if (daysSince < task.everyDays) {
    if (daysSince === 0) return pick({ en: "Done today. Lovely.", no: "Gjort i dag. Fint.", pl: "Zrobione dzisiaj. Świetnie." });
    return pick({
      en: `Done ${daysSince} day${daysSince === 1 ? "" : "s"} ago.`,
      no: `Gjort for ${daysSince} ${daysSince === 1 ? "dag" : "dager"} siden.`,
      pl: `Zrobione ${daysSince} ${daysSince === 1 ? "dzień" : "dni"} temu.`,
    });
  }
  switch (task.id) {
    case "paws":
      return pick({
        en: `${name}'s nails may be due for a trim.`,
        no: `Klørne til ${name} trenger kanskje en klipp.`,
        pl: `Pazury ${name} mogą być gotowe do przycięcia.`,
      });
    case "dental":
      return pick({
        en: `It's been a few days since ${name}'s teeth.`,
        no: `Det er noen dager siden tennene til ${name} ble pusset.`,
        pl: `Minęło już kilka dni od czyszczenia zębów ${name}.`,
      });
    case "coat":
      return pick({
        en: `${name} could probably do with a brush.`,
        no: `${name} har nok godt av en børsting.`,
        pl: `${name} przydałoby się porządne szczotkowanie.`,
      });
    case "ears":
      return pick({
        en: `Worth a quick look in ${name}'s ears.`,
        no: `Verdt en rask titt i ørene til ${name}.`,
        pl: `Warto zerknąć w uszy ${name}.`,
      });
    case "weight":
      return pick({
        en: `It's been about a month since ${name} was weighed.`,
        no: `Det er omtrent en måned siden ${name} ble veid.`,
        pl: `Minął już około miesiąca od ostatniego ważenia ${name}.`,
      });
    default:
      return pick({ en: `Worth a few minutes when you have them.`, no: `Verdt noen minutter når du har dem.`, pl: `Warto poświęcić kilka minut, kiedy będzie okazja.` });
  }
}
