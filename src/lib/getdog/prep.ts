import type { Breed } from "@/data/breeds";
import { getLocale, type Locale } from "@/i18n";
import { prepCopy } from "./prep-copy";

/**
 * Turns the breed trait data we already have into honest preparation notes.
 * Deterministic, and deliberately hedged: this describes what many dogs of a
 * type tend to need, never what a particular dog will definitely be like.
 */

export interface PrepCard {
  id: string;
  title: string;
  headline: string;
  body: string;
}

const scale = (v: number, words: readonly [string, string, string, string, string]) =>
  words[Math.min(4, Math.max(0, Math.round(v) - 1))]!;

/** The notes for one breed, in the reader's language. Which sentence applies comes from the breed's traits. */
export function prepCards(breed: Breed, locale: Locale = getLocale()): PrepCard[] {
  const t = breed.traits;
  const c = prepCopy[locale] ?? prepCopy.en;
  const withApp = (text: string) => text.replace("{myDog}", c.myDog);

  return [
    { id: "activity", title: c.titles.activity, headline: scale(t.exerciseNeeds, c.activity), body: c.activityBody },
    {
      id: "training",
      title: c.titles.training,
      headline: scale(t.trainability, c.training),
      body: t.trainability >= 4 ? c.trainingBodyQuick : c.trainingBodyIndependent,
    },
    { id: "food", title: c.titles.food, headline: scale(t.size, c.food), body: withApp(c.foodBody) },
    {
      id: "grooming",
      title: c.titles.grooming,
      headline: scale(t.grooming, c.grooming),
      body: t.grooming >= 4 ? c.groomingBodyHigh : c.groomingBodyLow,
    },
    { id: "shedding", title: c.titles.shedding, headline: scale(t.shedding, c.shedding), body: c.sheddingBody },
    {
      id: "dental",
      title: c.titles.dental,
      headline: t.size <= 2 ? c.dentalSmall : c.dentalLarge,
      body: t.size <= 2 ? c.dentalBodySmall : c.dentalBodyLarge,
    },
    {
      id: "weight",
      title: c.titles.weight,
      headline: t.energy <= 2 ? c.weightEasy : c.weightWatch,
      body: withApp(c.weightBody),
    },
    {
      id: "mental",
      title: c.titles.mental,
      headline: scale(t.mentalStimulation, c.mental),
      body: t.mentalStimulation >= 4 ? c.mentalBodyHigh : c.mentalBodyLow,
    },
    {
      id: "home",
      title: c.titles.home,
      headline: t.apartmentSuitability >= 4 ? c.home[0] : t.apartmentSuitability >= 3 ? c.home[1] : c.home[2],
      body: c.homeBody,
    },
    { id: "alone", title: c.titles.alone, headline: scale(t.aloneTolerance, c.alone), body: c.aloneBody },
    { id: "social", title: c.titles.social, headline: scale(t.sociability, c.social), body: c.socialBody },
    {
      id: "health",
      title: c.titles.health,
      headline: c.healthHead.replace("{a}", String(breed.lifespan[0])).replace("{b}", String(breed.lifespan[1])),
      body: c.healthBody,
    },
  ];
}

export function costRange(breed: Breed): string {
  return `€${breed.annualCost[0].toLocaleString()}–€${breed.annualCost[1].toLocaleString()}`;
}