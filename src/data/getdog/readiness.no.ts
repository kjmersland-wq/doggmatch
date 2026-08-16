import type { ReadinessQuestion, ReadinessOutcome } from "./readiness.en";

export const readinessQuestions: ReadinessQuestion[] = [
  {
    id: "time",
    eyebrow: "Hverdagen din",
    title: "Hvor mye tid kunne du gi en hund hver dag?",
    help: "Turer, mat, trening, stell, og bare det å være sammen.",
    options: [
      { value: "under1", label: "Mindre enn en time", score: 0, note: "De fleste hunder trenger mer enn en time av dagen din, fordelt på turer, mat, trening og selskap. Verdt å tenke på hvordan du ville finne den tiden." },
      { value: "1-2", label: "En til to timer", score: 2 },
      { value: "2-3", label: "To til tre timer", score: 3 },
      { value: "3plus", label: "Mer enn tre timer", score: 3, hint: "Hverdagen min er ganske fleksibel" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Dagen din",
    title: "Hvor lenge ville hunden din som regel være alene?",
    help: "Det finnes ikke ett tall som er riktig for alle hunder. Alder, trening og gemytt spiller alle inn.",
    options: [
      { value: "0", label: "Nesten aldri alene", score: 3, profile: { alone: "0" } },
      { value: "2", label: "Opptil tre timer", score: 3, profile: { alone: "2" } },
      { value: "4", label: "Tre til fem timer", score: 2, profile: { alone: "4" } },
      { value: "6", label: "Seks timer eller mer", score: 0, profile: { alone: "6" }, note: "Lange dager alene er tøft for de fleste hunder. En hundelufter, dagpass, eller en nabo som kan stikke innom, gjør en reell forskjell — verdt å planlegge på forhånd, ikke etterpå." },
    ],
  },
  {
    id: "activity",
    eyebrow: "Hverdagen din",
    title: "Hvor aktiv er du en vanlig dag?",
    help: "Tenk på en helt vanlig uke, ikke den beste uken din.",
    options: [
      { value: "1", label: "Ganske rolig", score: 2, profile: { activity: "1" } },
      { value: "2", label: "Ganske aktiv", score: 3, profile: { activity: "2" } },
      { value: "3", label: "Ganske sprek", score: 3, profile: { activity: "3" } },
      { value: "4", label: "Alltid i bevegelse", score: 3, profile: { activity: "4" } },
    ],
  },
  {
    id: "home",
    eyebrow: "Hjemmet",
    title: "Hvor skal hunden din bo?",
    help: "En leilighet er ingen hindring for en glad hund. Det som betyr mer, er turmulighetene på dørstokken og tidene du holder.",
    options: [
      { value: "apartment", label: "En leilighet", score: 3, profile: { home: "apartment" } },
      { value: "house", label: "Et hus, uten hage", score: 3, profile: { home: "house" } },
      { value: "house-garden", label: "Et hus med hage", score: 3, profile: { home: "house-garden" } },
      { value: "rural", label: "Ute på landet", score: 3, profile: { home: "rural" } },
    ],
  },
  {
    id: "travel",
    eyebrow: "Borte fra hjemmet",
    title: "Reiser du ofte?",
    options: [
      { value: "rarely", label: "Sjelden", score: 3 },
      { value: "sometimes", label: "Noen ganger i året", score: 2 },
      { value: "often", label: "Ofte, jobb eller annet", score: 1, note: "Å reise ofte er ingen grunn til ikke å ha hund — men det betyr at du må bestemme tidlig hvem som passer den, eller hvilke turer den blir med på." },
    ],
  },
  {
    id: "children",
    eyebrow: "Hjemme",
    title: "Hvem andre bor hjemme?",
    options: [
      { value: "none", label: "Bare voksne", score: 3, profile: { children: "none" } },
      { value: "older", label: "Eldre barn", score: 3, profile: { children: "older" } },
      { value: "young", label: "Små barn", score: 2, profile: { children: "young" }, note: "Små barn og hunder kan bli fantastiske sammen, med tilsyn og et rolig sted hunden alltid kan trekke seg tilbake til." },
      { value: "visitors", label: "Voksne, og mye besøk", score: 3, profile: { children: "visitors" } },
    ],
  },
  {
    id: "pets",
    eyebrow: "Hjemme",
    title: "Andre dyr i huset?",
    options: [
      { value: "none", label: "Ingen andre dyr", score: 3, profile: { pets: "none" } },
      { value: "dog", label: "En annen hund", score: 3, profile: { pets: "dog" } },
      { value: "cat", label: "En katt", score: 2, profile: { pets: "cat" } },
      { value: "small", label: "Mindre dyr", hint: "Kaniner, fugler, gnagere", score: 2, profile: { pets: "small" } },
    ],
  },
  {
    id: "allergies",
    eyebrow: "Helse hjemme",
    title: "Har noen i husholdningen allergier?",
    help: "Noen raser feller mindre, noe folk noen ganger synes er lettere å leve med. Ingen hund er helt allergivennlig, og reaksjoner varierer fra person til person.",
    options: [
      { value: "no", label: "Ingen, så vidt vi vet", score: 3, profile: { shedding: "fine" } },
      { value: "mild", label: "Noen er litt følsomme", score: 2, profile: { shedding: "prefer-low" } },
      { value: "yes", label: "Ja, noen reagerer på hunder", score: 1, profile: { shedding: "must-low" }, note: "Tilbring tid med den enkelte hunden før du bestemmer deg, og snakk med legen din. Det gir langt mer svar enn noen raseliste, inkludert vår." },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Å stelle dem",
    title: "Er du komfortabel med jevnlig pelsstell?",
    options: [
      { value: "minimal", label: "Jeg vil helst holde det enkelt", score: 2, profile: { grooming: "minimal" } },
      { value: "moderate", label: "En jevnlig børsting går fint", score: 3, profile: { grooming: "moderate" } },
      { value: "high", label: "Jeg har ikke noe imot frisørbesøk", score: 3, profile: { grooming: "high" } },
    ],
  },
  {
    id: "costs",
    eyebrow: "Penger",
    title: "Kunne du håndtert en uventet veterinærregning?",
    help: "Dette er den som overrasker flest. Forsikring eller sparepenger fungerer begge deler.",
    options: [
      { value: "yes", label: "Ja, det ville gått fint", score: 3 },
      { value: "insurance", label: "Med forsikring, ja", score: 3 },
      { value: "tight", label: "Det ville blitt stramt", score: 1, note: "Å sette litt til side hver måned, eller forsikre tidlig, tar mye av bekymringen ut av årene som kommer." },
      { value: "no", label: "Ikke akkurat nå", score: 0, note: "Veterinærbehandling kan bli dyrt og kommer sjelden beleilig. Noen måneders sparing først kan endre alt." },
    ],
  },
  {
    id: "support",
    eyebrow: "Folkene dine",
    title: "Hvem kunne hjulpet til hvis du var syk eller borte?",
    options: [
      { value: "household", label: "Noen andre hjemme", score: 3 },
      { value: "family", label: "Familie eller venner i nærheten", score: 3 },
      { value: "paid", label: "Jeg ville betalt for en passer eller dagpass", score: 2 },
      { value: "noone", label: "Jeg er ikke sikker ennå", score: 0, note: "Alle blir syke eller må reise bort før eller siden. Å vite nå hvem som kunne trådt til, gjør de ukene langt mindre stressende." },
    ],
  },
  {
    id: "commitment",
    eyebrow: "Det lange løpet",
    title: "En hund kan være med deg i ti til femten år. Føles det riktig?",
    help: "Tenk på hvor du kanskje bor, jobber og reiser om et tiår.",
    options: [
      { value: "yes", label: "Ja, vi har tenkt gjennom det", score: 3 },
      { value: "mostly", label: "Stort sett — noe er usikkert", score: 2 },
      { value: "unsure", label: "Ærlig talt, jeg er ikke sikker", score: 0, note: "Det er en helt rimelig følelse å ha. Det er ingen hast i det hele tatt — en hund vil fortsatt være der når bildet er klarere." },
    ],
  },
];

export const readinessOutcomes: Record<ReadinessOutcome["id"], ReadinessOutcome> = {
  "well-prepared": {
    id: "well-prepared",
    title: "Du virker godt forberedt.",
    body: "Ut fra det du har fortalt oss, ville en hund passe inn i livet ditt uten at mye må endres. Du har tenkt på tid, penger og folkene som ville hjulpet når livet kommer i veien — som er det meste av det vanskelige gjort.",
    encouragement: "Klar for å finne ut hvilke hunder som kan passe livet ditt?",
  },
  "good-start": {
    id: "good-start",
    title: "Du er godt i gang.",
    body: "De fleste brikkene er allerede på plass. Det er en eller to ting verdt å ordne før en hund kommer hjem, og ingen av dem er vanskelige — de er bare lettere å ordne nå enn midt i en første uke med ny hund.",
    encouragement: "Ta en titt på hvilke hunder som kan passe deg mens du jobber med resten.",
  },
  "not-yet": {
    id: "not-yet",
    title: "Det er noen ting verdt å tenke gjennom først.",
    body: "Kanskje ikke helt ennå — og det er helt greit. Ingenting her sier at du ikke bør ha hund. Det sier at litt forberedelse nå ville gjort beslutningen mye enklere, og det første året mye snillere for dere begge.",
    encouragement: "Du er velkommen til å fortsette å utforske. Ingenting er låst.",
  },
};
