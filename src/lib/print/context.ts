import { breedById } from "@/data/breeds";
import { estimatePortions } from "@/lib/care/portions";
import { useCareProfile, useMyDog, useWeights } from "@/lib/care/store";
import { useContacts, useDogDetails, useImportantInfo, useVisits, useWeekOverride } from "@/lib/care/records";
import { buildWeek } from "@/lib/care/week";
import { rankLessons } from "@/lib/training/plan";
import { useProgress } from "@/lib/training/store";
import type { DocContext } from "./types";

/** Everything a printable needs, gathered from the one shared dog profile. */
export function useDocContext(): DocContext {
  const dog = useMyDog();
  const care = useCareProfile(dog?.id);
  const weights = useWeights(dog?.id);
  const details = useDogDetails(dog?.id);
  const contacts = useContacts(dog?.id);
  const info = useImportantInfo(dog?.id);
  const visits = useVisits(dog?.id);
  const override = useWeekOverride(dog?.id);
  const progress = useProgress(dog?.id);

  const breed = dog?.breedId ? breedById[dog.breedId] : undefined;
  const portions = estimatePortions(care.weightKg, dog?.ageStage ?? "adult", care);

  return {
    ...(dog ? { dog } : {}),
    ...(breed ? { breed } : {}),
    breedName: breed?.name ?? dog?.breedOther ?? "",
    details,
    care,
    contacts,
    info,
    visits,
    weights,
    ...(portions ? { portions } : {}),
    week: buildWeek(dog, care, progress, override),
    skills: rankLessons(dog, progress)
      .slice(0, 3)
      .map((s) => s.lesson),
    today: new Date().toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" }),
  };
}