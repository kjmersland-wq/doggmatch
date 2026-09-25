import careHero from "@/assets/care-hero.webp";
import careNutrition from "@/assets/care-nutrition.webp";
import careDental from "@/assets/care-dental.webp";
import careCoat from "@/assets/care-coat.webp";
import carePaws from "@/assets/care-paws.webp";
import careWeight from "@/assets/care-weight.webp";
import careWellbeing from "@/assets/care-wellbeing.webp";
import illusBrush1 from "@/assets/illus-brush-1.webp";
import illusBrush2 from "@/assets/illus-brush-2.webp";
import illusNails from "@/assets/illus-nails.webp";
import illusPawCheck from "@/assets/illus-paw-check.webp";
import illusBodyCondition from "@/assets/illus-body-condition.webp";
import illusCoatTypes from "@/assets/illus-coat-types.webp";
import trainRecall from "@/assets/train-recall.webp";
import trainHome from "@/assets/train-home.webp";
import dogLife from "@/assets/dog-life.webp";
import type { CareCategoryId } from "./types";

export const careImages = {
  careHero,
  careNutrition,
  careDental,
  careCoat,
  carePaws,
  careWeight,
  careWellbeing,
};

export const careVisuals: Record<string, string> = {
  "brush-1": illusBrush1,
  "brush-2": illusBrush2,
  nails: illusNails,
  "paw-check": illusPawCheck,
  "body-condition": illusBodyCondition,
  "coat-types": illusCoatTypes,
};

export const categoryImages: Record<CareCategoryId, string> = {
  health: careHero,
  nutrition: careNutrition,
  dental: careDental,
  coat: careCoat,
  paws: carePaws,
  weight: careWeight,
  activity: trainRecall,
  wellbeing: careWellbeing,
  behaviour: trainHome,
  "dog-life": dogLife,
};

export const topicImages: Record<string, string> = {
  dental: careDental,
  coat: careCoat,
  paws: carePaws,
  ears: careCoat,
  eyes: careHero,
  wellbeing: careWellbeing,
  "body-condition": careWeight,
  "everyday-check": careHero,
  "something-different": careWellbeing,
};
