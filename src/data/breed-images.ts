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
import breedNew01 from "@/assets/breed-labradoodle.jpg";
import breedNew02 from "@/assets/breed-goldendoodle.jpg";
import breedNew03 from "@/assets/breed-cavapoo.jpg";
import breedNew04 from "@/assets/breed-cockapoo.jpg";
import breedNew05 from "@/assets/breed-maltipoo.jpg";
import breedNew06 from "@/assets/breed-bernedoodle.jpg";
import breedNew07 from "@/assets/breed-great-dane.jpg";
import breedNew08 from "@/assets/breed-dobermann.jpg";
import breedNew09 from "@/assets/breed-great-pyrenees.jpg";
import breedNew10 from "@/assets/breed-newfoundland.jpg";
import breedNew11 from "@/assets/breed-cane-corso.jpg";
import breedNew12 from "@/assets/breed-bullmastiff.jpg";
import breedNew13 from "@/assets/breed-english-bulldog.jpg";
import breedNew14 from "@/assets/breed-boston-terrier.jpg";
import breedNew15 from "@/assets/breed-pembroke-welsh-corgi.jpg";
import breedNew16 from "@/assets/breed-belgian-malinois.jpg";
import breedNew17 from "@/assets/breed-shetland-sheepdog.jpg";
import breedNew18 from "@/assets/breed-australian-cattle-dog.jpg";
import breedNew19 from "@/assets/breed-dalmatian.jpg";
import breedNew20 from "@/assets/breed-weimaraner.jpg";
import breedNew21 from "@/assets/breed-english-springer-spaniel.jpg";
import breedNew22 from "@/assets/breed-brittany.jpg";
import breedNew23 from "@/assets/breed-german-shorthaired-pointer.jpg";
import breedNew24 from "@/assets/breed-havanese.jpg";
import breedNew25 from "@/assets/breed-maltese.jpg";
import breedNew26 from "@/assets/breed-pomeranian.jpg";
import breedNew27 from "@/assets/breed-papillon.jpg";
import breedNew28 from "@/assets/breed-akita.jpg";
import breedNew29 from "@/assets/breed-basenji.jpg";
import breedNew30 from "@/assets/breed-rhodesian-ridgeback.jpg";
import breedNew31 from "@/assets/breed-basset-hound.jpg";
import breedNew32 from "@/assets/breed-bloodhound.jpg";
import breedNew33 from "@/assets/breed-italian-greyhound.jpg";
import breedNew34 from "@/assets/breed-west-highland-white-terrier.jpg";
import breedNew35 from "@/assets/breed-cairn-terrier.jpg";
import breedNew36 from "@/assets/breed-airedale-terrier.jpg";
import breedNew37 from "@/assets/breed-bull-terrier.jpg";
import breedNew38 from "@/assets/breed-chinese-shar-pei.jpg";
import breedNew39 from "@/assets/breed-chow-chow.jpg";
import breedNew40 from "@/assets/breed-portuguese-water-dog.jpg";
import breedNew41 from "@/assets/breed-rough-collie.jpg";
import breedNew42 from "@/assets/breed-old-english-sheepdog.jpg";
import breedNew43 from "@/assets/breed-saint-bernard.jpg";
import breedNew44 from "@/assets/breed-irish-setter.jpg";
import breedNew45 from "@/assets/breed-miniature-pinscher.jpg";
import breedNew46 from "@/assets/breed-lhasa-apso.jpg";
import breedNew47 from "@/assets/breed-alaskan-malamute.jpg";
import breedNew48 from "@/assets/breed-english-mastiff.jpg";
import breedNew49 from "@/assets/breed-toy-poodle.jpg";
import breedNew50 from "@/assets/breed-australian-labradoodle.jpg";

/** Secondary lifestyle photography for one breed — outdoor exercise, at home, a coat/detail shot. All optional. */
export interface BreedLifestyleImages {
  exercise?: string;
  home?: string;
  detail?: string;
}

/**
 * Optional lifestyle photography, keyed by breed id, alongside the single
 * studio portrait in `breedImages`. Empty until that photography exists —
 * the breed page falls back to a wide crop of the portrait itself rather
 * than showing broken or missing images.
 */
export const breedLifestyleImages: Partial<Record<BreedId, BreedLifestyleImages>> = {};

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
  "labradoodle": breedNew01,
  "goldendoodle": breedNew02,
  "cavapoo": breedNew03,
  "cockapoo": breedNew04,
  "maltipoo": breedNew05,
  "bernedoodle": breedNew06,
  "great-dane": breedNew07,
  "dobermann": breedNew08,
  "great-pyrenees": breedNew09,
  "newfoundland": breedNew10,
  "cane-corso": breedNew11,
  "bullmastiff": breedNew12,
  "english-bulldog": breedNew13,
  "boston-terrier": breedNew14,
  "pembroke-welsh-corgi": breedNew15,
  "belgian-malinois": breedNew16,
  "shetland-sheepdog": breedNew17,
  "australian-cattle-dog": breedNew18,
  "dalmatian": breedNew19,
  "weimaraner": breedNew20,
  "english-springer-spaniel": breedNew21,
  "brittany": breedNew22,
  "german-shorthaired-pointer": breedNew23,
  "havanese": breedNew24,
  "maltese": breedNew25,
  "pomeranian": breedNew26,
  "papillon": breedNew27,
  "akita": breedNew28,
  "basenji": breedNew29,
  "rhodesian-ridgeback": breedNew30,
  "basset-hound": breedNew31,
  "bloodhound": breedNew32,
  "italian-greyhound": breedNew33,
  "west-highland-white-terrier": breedNew34,
  "cairn-terrier": breedNew35,
  "airedale-terrier": breedNew36,
  "bull-terrier": breedNew37,
  "chinese-shar-pei": breedNew38,
  "chow-chow": breedNew39,
  "portuguese-water-dog": breedNew40,
  "rough-collie": breedNew41,
  "old-english-sheepdog": breedNew42,
  "saint-bernard": breedNew43,
  "irish-setter": breedNew44,
  "miniature-pinscher": breedNew45,
  "lhasa-apso": breedNew46,
  "alaskan-malamute": breedNew47,
  "english-mastiff": breedNew48,
  "toy-poodle": breedNew49,
  "australian-labradoodle": breedNew50,
};
