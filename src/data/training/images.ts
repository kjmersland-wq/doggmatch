import trainHero from "@/assets/train-hero.jpg";
import trainRecall from "@/assets/train-recall.jpg";
import trainPuppy from "@/assets/train-puppy.jpg";
import trainWalking from "@/assets/train-walking.jpg";
import trainHome from "@/assets/train-home.jpg";
import trainTricks from "@/assets/train-tricks.jpg";
import illusRecall1 from "@/assets/illus-recall-1.jpg";
import illusRecall2 from "@/assets/illus-recall-2.jpg";
import illusRecall3 from "@/assets/illus-recall-3.jpg";
import illusRecall4 from "@/assets/illus-recall-4.jpg";
import illusSit1 from "@/assets/illus-sit-1.jpg";
import illusSit2 from "@/assets/illus-sit-2.jpg";
import illusSit3 from "@/assets/illus-sit-3.jpg";
import illusLeash from "@/assets/illus-leash.jpg";
import illusGreeting from "@/assets/illus-greeting.jpg";
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
