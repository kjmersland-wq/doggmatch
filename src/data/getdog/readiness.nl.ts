import type { UserProfile } from "@/lib/matching/types";

/**
 * Het gesprek over de gereedheid. Geen test — er is geen slagingspercentage en geen schaamte
 * voor welk antwoord dan ook. Waar een antwoord ook nuttig is voor de matching-engine, draagt het
 * een `profile`-patch mee zodat Find My Dog er nooit meer naar vraagt.
 */
export interface ReadinessOption {
  value: string;
  label: string;
  hint?: string;
  /** 0–3. Hoger betekent simpelweg minder dingen om eerst uit te zoeken. */
  score: number;
  /** Wat dit antwoord de matching-engine vertelt, indien van toepassing. */
  profile?: UserProfile;
  /** Een vriendelijke opmerking die wordt weergegeven in het resultaat wanneer dit antwoord is gekozen. */
  note?: string;
}

export interface ReadinessQuestion {
  id: string;
  eyebrow: string;
  title: string;
  help?: string;
  options: ReadinessOption[];
}

export const readinessQuestions: ReadinessQuestion[] = [
  {
    id: "time",
    eyebrow: "Je dagen",
    title: "Hoeveel tijd zou je een hond per dag kunnen geven?",
    help: "Wandelingen, voeren, trainen, verzorgen en gewoon samen zijn.",
    options: [
      { value: "under1", label: "Minder dan een uur", score: 0, note: "De meeste honden hebben meer dan een uur van je dag nodig, verdeeld over wandelingen, voeding, training en gezelschap. Het is de moeite waard om na te denken over hoe je die tijd zou vinden." },
      { value: "1-2", label: "Eén tot twee uur", score: 2 },
      { value: "2-3", label: "Twee tot drie uur", score: 3 },
      { value: "3plus", label: "Meer dan drie uur", score: 3, hint: "Mijn dagen zijn redelijk flexibel" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Je dag",
    title: "Hoe lang zou je hond normaal gesproken alleen zijn?",
    help: "Er is geen enkel getal dat voor elke hond goed is. Leeftijd, training en temperament spelen allemaal een rol.",
    options: [
      { value: "0", label: "Nauwelijks alleen", score: 3, profile: { alone: "0" } },
      { value: "2", label: "Tot drie uur", score: 3, profile: { alone: "2" } },
      { value: "4", label: "Drie tot vijf uur", score: 2, profile: { alone: "4" } },
      { value: "6", label: "Zes uur of langer", score: 0, profile: { alone: "6" }, note: "Lange dagen alleen zijn is zwaar voor de meeste honden. Een hondenuitlater, dagopvang of een buur die kan langskomen, maakt een echt verschil — de moeite waard om van tevoren te plannen, niet achteraf." },
    ],
  },
  {
    id: "activity",
    eyebrow: "Je dagen",
    title: "Hoe actief ben je op een normale dag?",
    help: "Denk aan een gewone week, niet je beste week.",
    options: [
      { value: "1", label: "Redelijk rustig", score: 2, profile: { activity: "1" } },
      { value: "2", label: "Redelijk actief", score: 3, profile: { activity: "2" } },
      { value: "3", label: "Behoorlijk actief", score: 3, profile: { activity: "3" } },
      { value: "4", label: "Altijd onderweg", score: 3, profile: { activity: "4" } },
    ],
  },
  {
    id: "home",
    eyebrow: "Thuis",
    title: "Waar zou je hond gaan wonen?",
    help: "Een appartement is geen belemmering voor een blije hond. Wat meer telt, is de wandelmogelijkheden voor je deur en de uren die je maakt.",
    options: [
      { value: "apartment", label: "Een flat of appartement", score: 3, profile: { home: "apartment" } },
      { value: "house", label: "Een huis, zonder tuin", score: 3, profile: { home: "house" } },
      { value: "house-garden", label: "Een huis met een tuin", score: 3, profile: { home: "house-garden" } },
      { value: "rural", label: "Op het platteland", score: 3, profile: { home: "rural" } },
    ],
  },
  {
    id: "travel",
    eyebrow: "Weg van huis",
    title: "Reis je vaak?",
    options: [
      { value: "rarely", label: "Zelden", score: 3 },
      { value: "sometimes", label: "Een paar keer per jaar", score: 2 },
      { value: "often", label: "Vaak, voor werk of anderszins", score: 1, note: "Vaak reizen is geen reden om geen hond te hebben — maar het betekent wel dat je vroeg moet beslissen wie er voor hen zorgt, of met welke reizen ze meegaan." },
    ],
  },
  {
    id: "children",
    eyebrow: "Thuis",
    title: "Wie zijn er nog meer thuis?",
    options: [
      { value: "none", label: "Alleen volwassenen", score: 3, profile: { children: "none" } },
      { value: "older", label: "Oudere kinderen", score: 3, profile: { children: "older" } },
      { value: "young", label: "Jonge kinderen", score: 2, profile: { children: "young" }, note: "Jonge kinderen en honden kunnen geweldig samengaan, met toezicht en een rustige plek waar de hond zich altijd kan terugtrekken." },
      { value: "visitors", label: "Volwassenen, en veel bezoek", score: 3, profile: { children: "visitors" } },
    ],
  },
  {
    id: "pets",
    eyebrow: "Thuis",
    title: "Zijn er nog andere dieren in huis?",
    options: [
      { value: "none", label: "Geen andere huisdieren", score: 3, profile: { pets: "none" } },
      { value: "dog", label: "Nog een hond", score: 3, profile: { pets: "dog" } },
      { value: "cat", label: "Een kat", score: 2, profile: { pets: "cat" } },
      { value: "small", label: "Kleinere dieren", hint: "Konijnen, vogels, knaagdieren", score: 2, profile: { pets: "small" } },
    ],
  },
  {
    id: "allergies",
    eyebrow: "Gezondheid thuis",
    title: "Heeft iemand in het huishouden allergieën?",
    help: "Sommige rassen verharen minder, wat mensen soms makkelijker vinden om mee te leven. Geen enkele hond is volledig allergeenvrij, en reacties verschillen van persoon tot persoon.",
    options: [
      { value: "no", label: "Niemand, voor zover we weten", score: 3, profile: { shedding: "fine" } },
      { value: "mild", label: "Iemand is een beetje gevoelig", score: 2, profile: { shedding: "prefer-low" } },
      { value: "yes", label: "Ja, iemand reageert op honden", score: 1, profile: { shedding: "must-low" }, note: "Breng tijd door met de individuele hond voordat je beslist, en praat met een arts. Rassen met minder verharing helpen sommige mensen wel en andere niet." },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Voor hen zorgen",
    title: "Ben je comfortabel met regelmatige verzorging?",
    options: [
      { value: "minimal", label: "Ik houd het liever simpel", score: 2, profile: { grooming: "minimal" } },
      { value: "moderate", label: "Een regelmatige borstelbeurt is prima", score: 3, profile: { grooming: "moderate" } },
      { value: "high", label: "Ik vind trips naar de trimmer niet erg", score: 3, profile: { grooming: "high" } },
    ],
  },
  {
    id: "costs",
    eyebrow: "Geld",
    title: "Zou je een onverwachte dierenartsrekening kunnen betalen?",
    help: "Dit is het punt waar de meeste mensen verrast worden. Verzekering of spaargeld werken allebei.",
    options: [
      { value: "yes", label: "Ja, we zouden het redden", score: 3 },
      { value: "insurance", label: "Met verzekering, ja", score: 3 },
      { value: "tight", label: "Het zou krap worden", score: 1, note: "Elke maand een beetje opzij zetten, of vroeg verzekeren, haalt veel zorgen weg voor de komende jaren." },
      { value: "no", label: "Op dit moment niet", score: 0, note: "Dierenartszorg kan duur zijn en komt zelden op een geschikt moment. Een paar maanden sparen kan alles veranderen." },
    ],
  },
  {
    id: "support",
    eyebrow: "Je mensen",
    title: "Wie zou kunnen helpen als je ziek was of weg?",
    options: [
      { value: "household", label: "Iemand anders thuis", score: 3 },
      { value: "family", label: "Familie of vrienden in de buurt", score: 3 },
      { value: "paid", label: "Ik zou betalen voor een oppas of dagopvang", score: 2 },
      { value: "noone", label: "Ik weet het nog niet zeker", score: 0, note: "Iedereen wordt uiteindelijk ziek of moet weg. Nu weten wie er zou bijspringen, maakt die weken veel minder stressvol." },
    ],
  },
  {
    id: "commitment",
    eyebrow: "Het lange zicht",
    title: "Een hond kan tien tot vijftien jaar bij je zijn. Voelt dat goed?",
    help: "Denk na over waar je over tien jaar zou kunnen wonen, werken en reizen.",
    options: [
      { value: "yes", label: "Ja, we hebben erover nagedacht", score: 3 },
      { value: "mostly", label: "Meestal wel — sommige dingen zijn onzeker", score: 2 },
      { value: "unsure", label: "Eerlijk gezegd, ik weet het niet zeker", score: 0, note: "Dat is een heel redelijk gevoel. Er is geen enkele haast — een hond zal er nog steeds zijn als het plaatje duidelijker is." },
    ],
  },
];

export interface ReadinessOutcome {
  id: "well-prepared" | "good-start" | "not-yet";
  title: string;
  body: string;
  encouragement: string;
}

export const readinessOutcomes: Record<ReadinessOutcome["id"], ReadinessOutcome> = {
  "well-prepared": {
    id: "well-prepared",
    title: "Je lijkt goed voorbereid.",
    body: "Afgaande op wat je ons verteld hebt, zou een hond in je leven passen zonder dat er veel hoeft te veranderen. Je hebt nagedacht over tijd, geld en de mensen die zouden helpen als het leven tegenzit — dat is al het moeilijkste werk gedaan.",
    encouragement: "Klaar om te ontdekken welke honden bij je leven passen?",
  },
  "good-start": {
    id: "good-start",
    title: "Je bent goed op weg.",
    body: "De meeste puzzelstukjes zijn er al. Er zijn een of twee dingen die de moeite waard zijn om uit te zoeken voordat een hond thuiskomt, en geen daarvan is moeilijk — ze zijn gewoon makkelijker te regelen nu dan midden in de eerste week met een nieuwe hond.",
    encouragement: "Kijk alvast welke honden bij je passen terwijl je de rest uitwerkt.",
  },
  "not-yet": {
    id: "not-yet",
    title: "Er zijn een paar dingen die de moeite waard zijn om eerst te overwegen.",
    body: "Misschien nog niet helemaal — en dat is volkomen oké. Niets hier zegt dat je geen hond zou moeten hebben. Het zegt dat een beetje voorbereiding nu de beslissing veel makkelijker zou maken, en het eerste jaar veel vriendelijker voor jullie beiden.",
    encouragement: "Je bent welkom om verder te verkennen. Niets is afgesloten.",
  },
};
