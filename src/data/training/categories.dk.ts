import type { TrainingCategory, TrainingGoal } from "./types";

export const trainingCategories: TrainingCategory[] = [
  {
    id: "puppy-foundations",
    title: "Hvalpens grundtræning",
    blurb: "De blide begyndelser — dit navn, din stemme, og lære at mennesker er godt selskab.",
    covers: ["Navn", "Øjenkontakt", "Sid", "Dæk", "Bliv", "Tilbagekald", "Lad være", "Håndtering", "Falde til ro", "Renlighedstræning", "Bidning", "Tygning", "Møde verden"],
  },
  {
    id: "everyday-manners",
    title: "Hverdagsopførsel",
    blurb: "De små ting, der gør hverdagen lettere for jer begge.",
    covers: ["At hilse på mennesker", "Rolige hilsner", "Ikke hoppe op", "At vente", "Døråbninger", "Måltider", "Falde til ro", "At vente på tur"],
  },
  {
    id: "walking",
    title: "Gåtur sammen",
    blurb: "En gåtur, der føles som en gåtur, ikke en tovtrækning.",
    covers: ["Løs line", "Tjekke ind udendørs", "Standse", "Dreje", "Distraktioner", "Passere andre hunde roligt"],
  },
  {
    id: "home",
    title: "Livet derhjemme",
    blurb: "Ro, stilhed og en hund, der ved, hvordan man slapper af.",
    covers: ["Ro derhjemme", "At være alene", "Falde til ro", "Gøen", "Gæster", "Hverdagsrutiner"],
  },
  {
    id: "socialisation",
    title: "Møde verden",
    blurb: "Nye steder og nye ansigter, taget langsomt og i din hunds eget tempo.",
    covers: ["Mennesker", "Andre hunde", "Nye steder", "Lyde", "Rejser", "At blive håndteret", "Pelspleje"],
  },
  {
    id: "recall-safety",
    title: "Tilbagekald & sikkerhed",
    blurb: "At komme tilbage til dig, selv når noget mere spændende sker.",
    covers: ["Navn", "Opmærksomhed", "Kom", "Nødtilbagekald", "Lad være", "Slip"],
  },
  {
    id: "tricks-games",
    title: "Tricks & lege",
    blurb: "Den sjove del. Også, i det stille, noget af den bedste træning, du kommer til at lave.",
    covers: ["Poter", "Snurre rundt", "Rulle rundt", "Rør", "Find den", "Hente", "Gå til din plads", "Gemmeleg"],
  },
  {
    id: "mental-stimulation",
    title: "Ting at tænke over",
    blurb: "Ti minutters snusen og søgen kan trætte en hund mere end en times løb.",
    covers: ["Duftlege", "Puslespil", "Søgning", "Problemløsning", "Berigelse", "Rolige hjernelege"],
  },
];

export const trainingGoals: TrainingGoal[] = [
  { id: "puppy-basics", label: "Hvalpens grundtræning", hint: "Hvor de fleste starter" },
  { id: "calm-at-home", label: "Ro derhjemme", hint: "At lære at slappe af" },
  { id: "loose-leash", label: "Gå pænt i snor", hint: "Mindre trækken, mere gåtur" },
  { id: "recall", label: "At komme, når man kalder", hint: "En af de mest nyttige overhovedet" },
  { id: "sit-down-stay", label: "Sid, dæk & bliv", hint: "Hverdagens ord" },
  { id: "potty-training", label: "Renlighedstræning", hint: "Færre uheld, mindre stress" },
  { id: "puppy-biting", label: "Hvalpebid", hint: "De der nåletænder" },
  { id: "leave-it", label: "Lad være", hint: "Til tingene på fortovet" },
  { id: "socialisation", label: "Møde verden", hint: "Mennesker, hunde, steder, lyde" },
  { id: "barking", label: "Gøen", hint: "At forstå det, og så lette det" },
  { id: "calmness", label: "Falde til ro", hint: "Hvile er også en færdighed" },
  { id: "manners", label: "Hverdagsopførsel", hint: "Døre, gæster, aftensmad" },
  { id: "mental", label: "Noget at tænke over", hint: "Snusen, søgning, puslespil" },
  { id: "tricks", label: "Tricks & lege", hint: "Fordi det er sjovt" },
];
