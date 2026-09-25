import trainHero from "@/assets/train-hero.webp";
import trainRecall from "@/assets/train-recall.webp";
import trainPuppy from "@/assets/train-puppy.webp";
import trainWalking from "@/assets/train-walking.webp";
import trainHome from "@/assets/train-home.webp";
import trainTricks from "@/assets/train-tricks.webp";
import illusRecall1 from "@/assets/illus-recall-1.webp";
import illusRecall2 from "@/assets/illus-recall-2.webp";
import illusRecall3 from "@/assets/illus-recall-3.webp";
import illusRecall4 from "@/assets/illus-recall-4.webp";
import illusSit1 from "@/assets/illus-sit-1.webp";
import illusSit2 from "@/assets/illus-sit-2.webp";
import illusSit3 from "@/assets/illus-sit-3.webp";
import illusLeash from "@/assets/illus-leash.webp";
import illusGreeting from "@/assets/illus-greeting.webp";
import type { CategoryId } from "./types";

/** Imagery is kept out of the content layer so it can move to a CDN later. */
export const trainingImages = { trainHero, trainRecall, trainPuppy, trainWalking, trainHome, trainTricks };

export const categoryImages: Record<CategoryId, string> = {
  "puppy-foundations": trainPuppy,
  "everyday-manners": illusGreeting,
  walking: trainWalking,
  home: trainHome,
  socialisation: trainWalking,
  "recall-safety": trainRecall,
  "tricks-games": trainTricks,
  "mental-stimulation": illusRecall4,
};

/** Step and hero visuals, keyed by the string used in lesson data. */
export const stepVisuals: Record<string, string> = {
  "recall-1": illusRecall1,
  "recall-2": illusRecall2,
  "recall-3": illusRecall3,
  "settle-1": illusRecall4,
  "sit-1": illusSit1,
  "sit-2": illusSit2,
  "sit-3": illusSit3,
  "leash-1": illusLeash,
  "greeting-1": illusGreeting,
  "photo-recall": trainRecall,
  "photo-puppy": trainPuppy,
  "photo-walking": trainWalking,
  "photo-home": trainHome,
  "photo-tricks": trainTricks,
};

export const lessonHeroes: Record<string, string> = {
  recall: trainRecall,
  sit: trainPuppy,
  "loose-leash": trainWalking,
  settle: trainHome,
  name: trainPuppy,
  "calm-greetings": illusGreeting,
  "leave-it": trainPuppy,
  "scent-game": trainHome,
  paw: trainTricks,
  "alone-time": trainHome,
};
