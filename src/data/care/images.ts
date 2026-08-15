import careHero from "@/assets/care-hero.jpg";
import careNutrition from "@/assets/care-nutrition.jpg";
import careDental from "@/assets/care-dental.jpg";
import careCoat from "@/assets/care-coat.jpg";
import carePaws from "@/assets/care-paws.jpg";
import careWeight from "@/assets/care-weight.jpg";
import careWellbeing from "@/assets/care-wellbeing.jpg";
import illusBrush1 from "@/assets/illus-brush-1.jpg";
import illusBrush2 from "@/assets/illus-brush-2.jpg";
import illusNails from "@/assets/illus-nails.jpg";
import illusPawCheck from "@/assets/illus-paw-check.jpg";
import illusBodyCondition from "@/assets/illus-body-condition.jpg";
import illusCoatTypes from "@/assets/illus-coat-types.jpg";
import trainRecall from "@/assets/train-recall.jpg";
import trainHome from "@/assets/train-home.jpg";
import dogLife from "@/assets/dog-life.jpg";
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
