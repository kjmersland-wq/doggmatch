import type { BreedId } from "./breeds";
import labrador from "@/assets/breed-labrador-retriever.jpg";
import golden from "@/assets/breed-golden-retriever.jpg";
import poodle from "@/assets/breed-poodle.jpg";
import frenchie from "@/assets/breed-french-bulldog.jpg";
import collie from "@/assets/breed-border-collie.jpg";
import cavalier from "@/assets/breed-cavalier-king-charles-spaniel.jpg";
import greyhound from "@/assets/breed-greyhound.jpg";
import shiba from "@/assets/breed-shiba-inu.jpg";

/** Imagery is kept out of the data layer so it can be swapped for a CDN later. */
export const breedImages: Record<BreedId, string> = {
  "labrador-retriever": labrador,
  "golden-retriever": golden,
  poodle,
  "french-bulldog": frenchie,
  "border-collie": collie,
  "cavalier-king-charles-spaniel": cavalier,
  greyhound,
  "shiba-inu": shiba,
};
