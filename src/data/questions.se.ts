import type { QuizQuestion } from "@/lib/matching/types";

/** Frågorna på svenska. Id:n och värden är desamma. */
export const questionsSe: QuizQuestion[] = [
  {
    id: "activity",
    eyebrow: "Din vardag",
    title: "Hur aktiv är du en vanlig dag?",
    help: "Tänk på en helt vanlig vecka, inte den bästa du haft.",
    options: [
      { value: "1", label: "Ganska lugn", hint: "Korta promenader, lugna rutiner" },
      { value: "2", label: "Lite aktiv", hint: "En promenad varje dag, och lite mer ibland" },
      { value: "3", label: "Ganska aktiv", hint: "Långa promenader, och helger utomhus" },
      { value: "4", label: "Alltid i rörelse", hint: "Löpning, vandring eller träning de flesta dagar" },
    ],
  },
  {
    id: "home",
    eyebrow: "Hemma",
    title: "Var ska hunden bo?",
    options: [
      { value: "apartment", label: "I en lägenhet", hint: "Gemensam trappa eller hiss" },
      { value: "house", label: "Hus utan trädgård" },
      { value: "house-garden", label: "Hus med trädgård" },
      { value: "rural", label: "Ute på landet" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Din dag",
    title: "Hur länge brukar hunden vara ensam?",
    options: [
      { value: "0", label: "Nästan aldrig ensam", hint: "Det är nästan alltid någon hemma" },
      { value: "2", label: "Upp till tre timmar" },
      { value: "4", label: "Tre till fem timmar" },
      { value: "6", label: "Sex timmar eller mer" },
    ],
  },
  {
    id: "experience",
    eyebrow: "Erfarenhet",
    title: "Har du haft hund tidigare?",
    options: [
      { value: "first", label: "Det här blir min första" },
      { value: "some", label: "Lite", hint: "Växte upp med hund, eller har passat en" },
      { value: "experienced", label: "Ganska mycket", hint: "Jag har själv fostrat och tränat hundar" },
    ],
  },
  {
    id: "size",
    eyebrow: "Det du önskar dig",
    title: "Har du en storlek i tankarna?",
    optional: true,
    options: [
      { value: "small", label: "Något litet" },
      { value: "medium", label: "Någonstans mittemellan" },
      { value: "large", label: "En stor hund" },
      { value: "any", label: "Jag är öppen för allt" },
    ],
  },
  {
    id: "temperament",
    eyebrow: "Det du önskar dig",
    title: "Vilken sorts temperament skulle du trivas bäst med?",
    options: [
      { value: "calm", label: "Lugn och avslappnad" },
      { value: "affectionate", label: "Kärleksfull och tätt inpå" },
      { value: "playful", label: "Lekfull och full av liv" },
      { value: "independent", label: "Nöjd med sitt eget sällskap" },
    ],
  },
  {
    id: "children",
    eyebrow: "Hemma hos dig",
    title: "Vilka andra bor hemma hos dig?",
    options: [
      { value: "none", label: "Bara vuxna" },
      { value: "older", label: "Äldre barn" },
      { value: "young", label: "Små barn" },
      { value: "visitors", label: "Vuxna, och mycket besök" },
    ],
  },
  {
    id: "pets",
    eyebrow: "Hemma hos dig",
    title: "Finns det andra djur i hushållet?",
    optional: true,
    options: [
      { value: "none", label: "Inga andra djur" },
      { value: "dog", label: "En annan hund" },
      { value: "cat", label: "En katt" },
      { value: "small", label: "Mindre djur", hint: "Kaniner, fåglar, gnagare" },
    ],
  },
  {
    id: "shedding",
    eyebrow: "Päls och allergi",
    title: "Vad tycker du om hundhår i hemmet?",
    help: "Vissa raser fäller mindre, vilket många med allergi tycker är lättare. Men ingen hund är helt allergivänlig.",
    options: [
      { value: "fine", label: "Hår stör mig inte" },
      { value: "prefer-low", label: "Jag vill helst ha mindre av det" },
      { value: "must-low", label: "Någon hemma reagerar på hundar", hint: "Bara raser som fäller lite, tack" },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Skötsel",
    title: "Hur mycket pälsskötsel är du beredd att ta på dig?",
    options: [
      { value: "minimal", label: "Så lite som möjligt" },
      { value: "moderate", label: "Regelbunden borstning går bra" },
      { value: "high", label: "Besök hos hundfrisören är helt okej" },
    ],
  },
  {
    id: "physical",
    eyebrow: "Skötsel",
    title: "Hur mycket hund klarar du bekvämt av?",
    help: "Styrka i kopplet är något många underskattar.",
    options: [
      { value: "light", label: "Inget stort eller starkt", hint: "En stark hund skulle bli för mycket" },
      { value: "moderate", label: "En mellanstor hund går bra" },
      { value: "strong", label: "Jag klarar en stor, stark hund" },
    ],
  },
  {
    id: "energyLimit",
    eyebrow: "Helt ärligt",
    title: "Skulle du trivas med en hund med mycket energi?",
    help: "Var ärlig här — vi tar dig på orden.",
    options: [
      { value: "no", label: "Nej, jag behöver en lugnare hund" },
      { value: "maybe", label: "Inom rimliga gränser" },
      { value: "yes", label: "Ja, jag vill gärna ha en aktiv en" },
    ],
  },
  {
    id: "companionship",
    eyebrow: "Sällskap",
    title: "Vad hoppas du att en hund ska ge dig?",
    options: [
      { value: "calm-company", label: "Lugnt och tryggt sällskap" },
      { value: "motivation", label: "En anledning att komma ut" },
      { value: "active", label: "Någon som håller mig sällskap i farten" },
      { value: "family", label: "En hund för hela familjen" },
    ],
  },
  {
    id: "allergy",
    eyebrow: "Päls och allergi",
    title: "Finns det någon hemma som har hundallergi?",
    help: "Vissa raser fäller mindre och håller kvar pälsen, vilket en del tycker är lättare. Ingen hund är helt allergivänlig, och toleransen varierar från person till person.",
    options: [
      { value: "none", label: "Nej, ingen reagerar på hundar" },
      { value: "mild", label: "Milda reaktioner", hint: "Lite täppt i näsan kring vissa hundar" },
      { value: "significant", label: "En betydande allergi", hint: "Vi vill gärna ha ordentlig allergirådgivning först" },
      { value: "unsure", label: "Vi är inte säkra ännu" },
    ],
  },
  {
    id: "wellbeing",
    eyebrow: "Sällskap och välbefinnande",
    title: "Hur mycket önskar du dig en lugn, nära följeslagare omkring dig?",
    help: "En hund är sällskap, inte behandling. Vi tittar på lugn, social förmåga och hur människoorienterad en ras brukar vara.",
    options: [
      { value: "no", label: "Det är inte det jag söker" },
      { value: "some", label: "Det skulle vara trevligt" },
      { value: "important", label: "Ja, det betyder något för mig" },
      { value: "very", label: "Det är det viktigaste för mig" },
    ],
  },
];
