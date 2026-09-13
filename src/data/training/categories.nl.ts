import type { TrainingCategory, TrainingGoal } from "./types";

export const trainingCategories: TrainingCategory[] = [
  {
    id: "puppy-foundations",
    title: "Puppybasis",
    blurb: "De zachte start — jouw naam, jouw stem, en leren dat mensen fijn gezelschap zijn.",
    covers: ["Naam", "Oogcontact", "Zit", "Af", "Blijf", "Terugkomen", "Laat los", "Aanraking", "Tot rust komen", "Zindelijkheidstraining", "Bijten", "Kauwen", "Kennismaken met de wereld"],
  },
  {
    id: "everyday-manners",
    title: "Dagelijkse omgangsvormen",
    blurb: "De kleine dingen die gewone dagen makkelijker maken voor jullie allebei.",
    covers: ["Mensen begroeten", "Rustig gedag zeggen", "Niet opspringen", "Wachten", "Deuropeningen", "Etenstijden", "Tot rust komen", "Op je beurt wachten"],
  },
  {
    id: "walking",
    title: "Samen wandelen",
    blurb: "Een wandeling die aanvoelt als een wandeling, niet als een touwtrekwedstrijd.",
    covers: ["Losse lijn", "Buiten inchecken", "Stoppen", "Draaien", "Afleidingen", "Rustig langs andere honden lopen"],
  },
  {
    id: "home",
    title: "Het leven thuis",
    blurb: "Rust, stilte en een hond die weet hoe hij moet ontspannen.",
    covers: ["Rustig thuis", "Alleen zijn", "Tot rust komen", "Blaffen", "Bezoek", "Dagelijkse routines"],
  },
  {
    id: "socialisation",
    title: "Kennismaken met de wereld",
    blurb: "Nieuwe plekken en nieuwe gezichten, rustig en in het tempo van je hond.",
    covers: ["Mensen", "Andere honden", "Nieuwe plekken", "Geluiden", "Reizen", "Aangeraakt worden", "Verzorging"],
  },
  {
    id: "recall-safety",
    title: "Terugkomen & veiligheid",
    blurb: "Terugkomen naar jou, zelfs als er iets veel interessanters gebeurt.",
    covers: ["Naam", "Aandacht", "Kom", "Noodterugroep", "Laat los", "Laat vallen"],
  },
  {
    id: "tricks-games",
    title: "Trucjes & spelletjes",
    blurb: "Het leuke gedeelte. Ook, stiekem, een deel van de beste training die je zult doen.",
    covers: ["Pootje geven", "Draaien", "Rollen", "Aanraken", "Zoek het", "Apporteren", "Ga naar je plek", "Verstoppertje"],
  },
  {
    id: "mental-stimulation",
    title: "Dingen om over na te denken",
    blurb: "Tien minuten snuffelen en zoeken kunnen een hond meer vermoeien dan een uur rennen.",
    covers: ["Speurspelletjes", "Puzzels", "Zoeken", "Probleemoplossing", "Verrijking", "Rustige breinspelletjes"],
  },
];

export const trainingGoals: TrainingGoal[] = [
  { id: "puppy-basics", label: "Puppybasis", hint: "Waar de meeste mensen beginnen" },
  { id: "calm-at-home", label: "Rustig thuis", hint: "Leren ontspannen" },
  { id: "loose-leash", label: "Netjes wandelen", hint: "Minder trekken, meer wandelen" },
  { id: "recall", label: "Komen als er geroepen wordt", hint: "Een van de nuttigste dingen die er zijn" },
  { id: "sit-down-stay", label: "Zit, af & blijf", hint: "De woorden voor elke dag" },
  { id: "potty-training", label: "Zindelijkheidstraining", hint: "Minder ongelukjes, minder stress" },
  { id: "puppy-biting", label: "Puppybijten", hint: "Die naaldscherpe tandjes" },
  { id: "leave-it", label: "Laat los", hint: "Voor de dingen op de stoep" },
  { id: "socialisation", label: "Kennismaken met de wereld", hint: "Mensen, honden, plekken, geluiden" },
  { id: "barking", label: "Blaffen", hint: "Het begrijpen, en dan afbouwen" },
  { id: "calmness", label: "Tot rust komen", hint: "Rust is ook een vaardigheid" },
  { id: "manners", label: "Dagelijkse omgangsvormen", hint: "Deuren, bezoek, etenstijd" },
  { id: "mental", label: "Iets om over na te denken", hint: "Snuffelen, zoeken, puzzelen" },
  { id: "tricks", label: "Trucjes & spelletjes", hint: "Omdat het leuk is" },
];
