import type { UserProfile } from "@/lib/matching/types";

/**
 * Samtalen om parathed. Ikke en test – der er ingen bestået-grænse, og ingen skam
 * ved noget svar. Hvor et svar også er nyttigt for matchende motor, bærer det en
 * `profile` patch, så Find Min Hund aldrig spørger igen.
 */
export interface ReadinessOption {
  value: string;
  label: string;
  hint?: string;
  /** 0–3. Højere betyder simpelthen færre ting at ordne først. */
  score: number;
  /** Hvad dette svar fortæller den matchende motor, hvis noget. */
  profile?: UserProfile;
  /** En venlig bemærkning vist i resultatet, når dette svar vælges. */
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
    eyebrow: "Dine dage",
    title: "Hvor meget tid kunne du give en hund hver dag?",
    help: "Gåture, fodring, træning, pelspleje og bare at være sammen.",
    options: [
      { value: "under1", label: "Mindre end en time", score: 0, note: "De fleste hunde har brug for mere end en time af din dag, fordelt på gåture, mad, træning og selskab. Det er værd at tænke over, hvordan du ville finde den tid." },
      { value: "1-2", label: "En til to timer", score: 2 },
      { value: "2-3", label: "To til tre timer", score: 3 },
      { value: "3plus", label: "Mere end tre timer", score: 3, hint: "Mine dage er ret fleksible" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Din dag",
    title: "Hvor længe ville din hund normalt være alene?",
    help: "Der er ikke ét enkelt tal, der passer til alle hunde. Alder, træning og temperament betyder alt.",
    options: [
      { value: "0", label: "Næsten aldrig alene", score: 3, profile: { alone: "0" } },
      { value: "2", label: "Op til tre timer", score: 3, profile: { alone: "2" } },
      { value: "4", label: "Tre til fem timer", score: 2, profile: { alone: "4" } },
      { value: "6", label: "Seks timer eller mere", score: 0, profile: { alone: "6" }, note: "Lange dage alene er hårde for de fleste hunde. En hundelufter, dagpleje eller en nabo, der kan kigge forbi, gør en reel forskel – det er værd at planlægge før, ikke efter." },
    ],
  },
  {
    id: "activity",
    eyebrow: "Dine dage",
    title: "Hvor aktiv er du på en normal dag?",
    help: "Tænk på en almindelig uge, ikke din bedste.",
    options: [
      { value: "1", label: "Ret stille", score: 2, profile: { activity: "1" } },
      { value: "2", label: "Rimelig aktiv", score: 3, profile: { activity: "2" } },
      { value: "3", label: "Ret aktiv", score: 3, profile: { activity: "3" } },
      { value: "4", label: "Altid på farten", score: 3, profile: { activity: "4" } },
    ],
  },
  {
    id: "home",
    eyebrow: "Hjem",
    title: "Hvor ville din hund bo?",
    help: "En lejlighed er ingen hindring for en glad hund. Hvad der betyder mere, er gåturene lige uden for døren og dine rutiner.",
    options: [
      { value: "apartment", label: "En lejlighed", score: 3, profile: { home: "apartment" } },
      { value: "house", label: "Et hus, ingen have", score: 3, profile: { home: "house" } },
      { value: "house-garden", label: "Et hus med have", score: 3, profile: { home: "house-garden" } },
      { value: "rural", label: "På landet", score: 3, profile: { home: "rural" } },
    ],
  },
  {
    id: "travel",
    eyebrow: "Væk hjemmefra",
    title: "Rejser du ofte?",
    options: [
      { value: "rarely", label: "Sjældent", score: 3 },
      { value: "sometimes", label: "Et par gange om året", score: 2 },
      { value: "often", label: "Ofte, på arbejde eller andet", score: 1, note: "At rejse ofte er ikke en grund til ikke at have en hund – men det betyder, at du skal beslutte tidligt, hvem der passer den, eller hvilke ture den skal med på." },
    ],
  },
  {
    id: "children",
    eyebrow: "Hjemme",
    title: "Hvem andre er hjemme?",
    options: [
      { value: "none", label: "Kun voksne", score: 3, profile: { children: "none" } },
      { value: "older", label: "Ældre børn", score: 3, profile: { children: "older" } },
      { value: "young", label: "Små børn", score: 2, profile: { children: "young" }, note: "Små børn og hunde kan være vidunderlige sammen, med opsyn og et roligt sted, som hunden altid kan trække sig tilbage til." },
      { value: "visitors", label: "Voksne og mange gæster", score: 3, profile: { children: "visitors" } },
    ],
  },
  {
    id: "pets",
    eyebrow: "Hjemme",
    title: "Andre dyr i huset?",
    options: [
      { value: "none", label: "Ingen andre kæledyr", score: 3, profile: { pets: "none" } },
      { value: "dog", label: "En anden hund", score: 3, profile: { pets: "dog" } },
      { value: "cat", label: "En kat", score: 2, profile: { pets: "cat" } },
      { value: "small", label: "Mindre dyr", hint: "Kaniner, fugle, gnavere", score: 2, profile: { pets: "small" } },
    ],
  },
  {
    id: "allergies",
    eyebrow: "Sundhed derhjemme",
    title: "Er der nogen i husstanden med allergi?",
    help: "Nogle racer fælder mindre, hvilket folk nogle gange finder lettere at leve med. Ingen hund er helt allergivenlig, og reaktioner varierer fra person til person.",
    options: [
      { value: "no", label: "Ingen, så vidt vi ved", score: 3, profile: { shedding: "fine" } },
      { value: "mild", label: "Nogen er lidt følsom", score: 2, profile: { shedding: "prefer-low" } },
      { value: "yes", label: "Ja, nogen reagerer på hunde", score: 1, profile: { shedding: "must-low" }, note: "Tilbring tid med den enkelte hund, før du beslutter dig, og tal med en læge. Hunde med mindre fældning hjælper nogle mennesker og ikke andre." },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Pasning",
    title: "Er du komfortabel med regelmæssig pelspleje?",
    options: [
      { value: "minimal", label: "Jeg vil helst holde det simpelt", score: 2, profile: { grooming: "minimal" } },
      { value: "moderate", label: "En almindelig børstning er fint", score: 3, profile: { grooming: "moderate" } },
      { value: "high", label: "Jeg har ikke noget imod ture til hundefrisøren", score: 3, profile: { grooming: "high" } },
    ],
  },
  {
    id: "costs",
    eyebrow: "Penge",
    title: "Kunne du håndtere en uventet dyrlægeregning?",
    help: "Det er den, der overrasker de fleste. Forsikring eller opsparing virker begge dele.",
    options: [
      { value: "yes", label: "Ja, vi ville klare det", score: 3 },
      { value: "insurance", label: "Med forsikring, ja", score: 3 },
      { value: "tight", label: "Det ville være stramt", score: 1, note: "At sætte lidt til side hver måned, eller forsikre tidligt, fjerner meget bekymring fra de kommende år." },
      { value: "no", label: "Ikke lige nu", score: 0, note: "Dyrlægehjælp kan være dyrt og kommer sjældent på et belejligt tidspunkt. Et par måneders opsparing først kan ændre alt." },
    ],
  },
  {
    id: "support",
    eyebrow: "Dine folk",
    title: "Hvem kunne hjælpe, hvis du blev syg eller var væk?",
    options: [
      { value: "household", label: "Nogen andre hjemme", score: 3 },
      { value: "family", label: "Familie eller venner i nærheden", score: 3 },
      { value: "paid", label: "Jeg ville betale for en hundepasser eller dagpleje", score: 2 },
      { value: "noone", label: "Det er jeg ikke sikker på endnu", score: 0, note: "Alle bliver syge eller kaldt væk til sidst. At vide nu, hvem der ville træde til, gør de uger langt mindre stressende." },
    ],
  },
  {
    id: "commitment",
    eyebrow: "Det lange perspektiv",
    title: "En hund kan være hos dig i ti til femten år. Føles det rigtigt?",
    help: "Tænk over, hvor du måske bor, arbejder og rejser om et årti.",
    options: [
      { value: "yes", label: "Ja, vi har tænkt det igennem", score: 3 },
      { value: "mostly", label: "Mest – nogle ting er usikre", score: 2 },
      { value: "unsure", label: "Ærligt talt, jeg er ikke sikker", score: 0, note: "Det er helt rimeligt at føle. Der er ingen hast overhovedet – en hund vil stadig være der, når billedet er klarere." },
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
    title: "Du ser godt forberedt ud.",
    body: "Ud fra hvad du har fortalt os, ville en hund passe ind i dit liv uden at skulle ændre meget. Du har tænkt over tid, penge og de mennesker, der ville hjælpe, når livet kommer i vejen – hvilket er det meste af det svære arbejde gjort.",
    encouragement: "Klar til at finde ud af, hvilke hunde der kan passe til dit liv?",
  },
  "good-start": {
    id: "good-start",
    title: "Du er godt på vej.",
    body: "De fleste brikker er allerede på plads. Der er en eller to ting, der er værd at ordne, før en hund kommer hjem, og ingen af dem er svære – de er bare lettere at arrangere nu end midt i den første uge med en ny hund.",
    encouragement: "Tag et kig på, hvilke hunde der kunne passe til dig, mens du arbejder på resten.",
  },
  "not-yet": {
    id: "not-yet",
    title: "Der er et par ting, der er værd at tænke over først.",
    body: "Måske ikke helt endnu – og det er helt okay. Intet her siger, at du ikke skal have en hund. Det siger, at lidt forberedelse nu ville gøre beslutningen meget lettere, og det første år meget mildere for jer begge.",
    encouragement: "Du er velkommen til at blive ved med at udforske. Intet er låst.",
  },
};
