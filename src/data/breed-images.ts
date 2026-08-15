import type { BreedId } from "./breeds";
import labrador from "@/assets/breed-labrador-retriever.jpg";
import golden from "@/assets/breed-golden-retriever.jpg";
import poodle from "@/assets/breed-poodle.jpg";
import frenchie from "@/assets/breed-french-bulldog.jpg";
import collie from "@/assets/breed-border-collie.jpg";
import cavalier from "@/assets/breed-cavalier-king-charles-spaniel.jpg";
import greyhound from "@/assets/breed-greyhound.jpg";
import shiba from "@/assets/breed-shiba-inu.jpg";
import germanShepherd from "@/assets/breed-german-shepherd.jpg";
import dachshund from "@/assets/breed-dachshund.jpg";
import beagle from "@/assets/breed-beagle.jpg";
import cockerSpaniel from "@/assets/breed-cocker-spaniel.jpg";
import chihuahua from "@/assets/breed-chihuahua.jpg";
import miniatureSchnauzer from "@/assets/breed-miniature-schnauzer.jpg";
import berneseMountainDog from "@/assets/breed-bernese-mountain-dog.jpg";
import australianShepherd from "@/assets/breed-australian-shepherd.jpg";
import jackRussellTerrier from "@/assets/breed-jack-russell-terrier.jpg";
import siberianHusky from "@/assets/breed-siberian-husky.jpg";
import boxer from "@/assets/breed-boxer.jpg";
import rottweiler from "@/assets/breed-rottweiler.jpg";
import whippet from "@/assets/breed-whippet.jpg";
import shihTzu from "@/assets/breed-shih-tzu.jpg";
import pug from "@/assets/breed-pug.jpg";
import bichonFrise from "@/assets/breed-bichon-frise.jpg";
import staffordshireBullTerrier from "@/assets/breed-staffordshire-bull-terrier.jpg";
import vizsla from "@/assets/breed-vizsla.jpg";
import samoyed from "@/assets/breed-samoyed.jpg";
import yorkshireTerrier from "@/assets/breed-yorkshire-terrier.jpg";

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
  "german-shepherd": germanShepherd,
  "dachshund": dachshund,
  "beagle": beagle,
  "cocker-spaniel": cockerSpaniel,
  "chihuahua": chihuahua,
  "miniature-schnauzer": miniatureSchnauzer,
  "bernese-mountain-dog": berneseMountainDog,
  "australian-shepherd": australianShepherd,
  "jack-russell-terrier": jackRussellTerrier,
  "siberian-husky": siberianHusky,
  "boxer": boxer,
  "rottweiler": rottweiler,
  "whippet": whippet,
  "shih-tzu": shihTzu,
  "pug": pug,
  "bichon-frise": bichonFrise,
  "staffordshire-bull-terrier": staffordshireBullTerrier,
  "vizsla": vizsla,
  "samoyed": samoyed,
  "yorkshire-terrier": yorkshireTerrier,
};
