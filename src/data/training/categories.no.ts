import type { TrainingCategory, TrainingGoal } from "./types";

export const trainingCategories: TrainingCategory[] = [
  {
    id: "puppy-foundations",
    title: "Valpens grunnlag",
    blurb: "Den rolige begynnelsen — navnet ditt, stemmen din, og at mennesker er godt selskap.",
    covers: ["Navn", "Blikkontakt", "Sitt", "Dekk", "Bli", "Innkalling", "La det være", "Håndtering", "Ro", "Renslighet", "Biting", "Tygging", "Møte verden"],
  },
  {
    id: "everyday-manners",
    title: "Hverdagsmanerer",
    blurb: "De små tingene som gjør vanlige dager enklere for dere begge.",
    covers: ["Hilse på folk", "Rolige hei", "Ikke hoppe opp", "Vente", "Dører", "Måltider", "Ro", "Vente på tur"],
  },
  {
    id: "walking",
    title: "Gå tur sammen",
    blurb: "En tur som føles som en tur, ikke som dragkamp.",
    covers: ["Løs line", "Sjekke inn ute", "Stoppe", "Snu", "Forstyrrelser", "Passere andre hunder rolig"],
  },
  {
    id: "home",
    title: "Livet hjemme",
    blurb: "Hvile, ro og en hund som klarer å koble av.",
    covers: ["Ro hjemme", "Være alene", "Slappe av", "Bjeffing", "Besøk", "Hverdagsrutiner"],
  },
  {
    id: "socialisation",
    title: "Møte verden",
    blurb: "Nye steder og nye ansikter, tatt rolig og i hundens tempo.",
    covers: ["Mennesker", "Andre hunder", "Nye steder", "Lyder", "Reise", "Bli håndtert", "Pelsstell"],
  },
  {
    id: "recall-safety",
    title: "Innkalling og sikkerhet",
    blurb: "Å komme tilbake til deg, selv når noe mer spennende skjer.",
    covers: ["Navn", "Oppmerksomhet", "Kom", "Nødinnkalling", "La det være", "Slipp"],
  },
  {
    id: "tricks-games",
    title: "Triks og lek",
    blurb: "Den morsomme delen. Og i det stille noe av den beste treningen dere gjør.",
    covers: ["Gi labb", "Snurr", "Rulle rundt", "Touch", "Finn den", "Apport", "Gå til plassen din", "Gjemsel"],
  },
  {
    id: "mental-stimulation",
    title: "Noe å tenke på",
    blurb: "Ti minutter med snusing og leting kan slite ut en hund mer enn en time med løping.",
    covers: ["Luktespill", "Aktiviseringsleker", "Søk", "Problemløsing", "Berikelse", "Rolige hjernespill"],
  },
];

export const trainingGoals: TrainingGoal[] = [
  { id: "puppy-basics", label: "Valpens grunnlag", hint: "Der de fleste starter" },
  { id: "calm-at-home", label: "Ro hjemme", hint: "Å lære å koble av" },
  { id: "loose-leash", label: "Gå pent i bånd", hint: "Mindre draging, mer tur" },
  { id: "recall", label: "Komme når du roper", hint: "Noe av det mest nyttige som finnes" },
  { id: "sit-down-stay", label: "Sitt, dekk og bli", hint: "Hverdagsordene" },
  { id: "potty-training", label: "Renslighet", hint: "Færre uhell, mindre stress" },
  { id: "puppy-biting", label: "Valpebiting", hint: "De små nålespissene" },
  { id: "leave-it", label: "La det være", hint: "For det som ligger på fortauet" },
  { id: "socialisation", label: "Møte verden", hint: "Folk, hunder, steder, lyder" },
  { id: "barking", label: "Bjeffing", hint: "Forstå det først, så dempe det" },
  { id: "calmness", label: "Ro og hvile", hint: "Hvile er også en ferdighet" },
  { id: "manners", label: "Hverdagsmanerer", hint: "Dører, besøk, middagstid" },
  { id: "mental", label: "Noe å tenke på", hint: "Snusing, søk, oppgaver" },
  { id: "tricks", label: "Triks og lek", hint: "Fordi det er gøy" },
];
