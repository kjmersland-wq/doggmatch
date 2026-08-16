import type { QuizQuestion } from "@/lib/matching/types";

/** Spørsmålene på norsk. Id-er og verdier er de samme. */
export const questionsNo: QuizQuestion[] = [
  {
    id: "activity",
    eyebrow: "Dagene dine",
    title: "Hvor aktiv er du på en vanlig dag?",
    help: "Tenk på en helt vanlig uke, ikke den beste du har hatt.",
    options: [
      { value: "1", label: "Ganske rolig", hint: "Korte turer, rolige rutiner" },
      { value: "2", label: "Litt aktiv", hint: "En tur hver dag, og litt mer innimellom" },
      { value: "3", label: "Ganske aktiv", hint: "Lange turer, og helger ute" },
      { value: "4", label: "Alltid i farta", hint: "Løping, fjelltur eller trening de fleste dager" },
    ],
  },
  {
    id: "home",
    eyebrow: "Hjemme",
    title: "Hvor skal hunden bo?",
    options: [
      { value: "apartment", label: "I leilighet", hint: "Felles trapp eller heis" },
      { value: "house", label: "Hus uten hage" },
      { value: "house-garden", label: "Hus med hage" },
      { value: "rural", label: "Ute på landet" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Dagen din",
    title: "Hvor lenge vil hunden vanligvis være alene?",
    options: [
      { value: "0", label: "Nesten aldri alene", hint: "Det er nesten alltid noen hjemme" },
      { value: "2", label: "Opptil tre timer" },
      { value: "4", label: "Tre til fem timer" },
      { value: "6", label: "Seks timer eller mer" },
    ],
  },
  {
    id: "experience",
    eyebrow: "Erfaring",
    title: "Har du hatt hund før?",
    options: [
      { value: "first", label: "Dette blir min første" },
      { value: "some", label: "Litt", hint: "Vokste opp med hund, eller har passet en" },
      { value: "experienced", label: "Mye", hint: "Jeg har oppdratt og trent hunder selv" },
    ],
  },
  {
    id: "size",
    eyebrow: "Det du ønsker deg",
    title: "Har du en størrelse i tankene?",
    optional: true,
    options: [
      { value: "small", label: "Noe lite" },
      { value: "medium", label: "Et sted midt imellom" },
      { value: "large", label: "En stor hund" },
      { value: "any", label: "Jeg er åpen for alt" },
    ],
  },
  {
    id: "temperament",
    eyebrow: "Det du ønsker deg",
    title: "Hva slags personlighet ville du trivdes best med?",
    options: [
      { value: "calm", label: "Rolig og lettlivet" },
      { value: "affectionate", label: "Kjærlig og tett på" },
      { value: "playful", label: "Leken og full av liv" },
      { value: "independent", label: "Fornøyd i eget selskap" },
    ],
  },
  {
    id: "children",
    eyebrow: "Hjemme",
    title: "Hvem andre bor hjemme hos deg?",
    options: [
      { value: "none", label: "Bare voksne" },
      { value: "older", label: "Større barn" },
      { value: "young", label: "Små barn" },
      { value: "visitors", label: "Voksne, og mye besøk" },
    ],
  },
  {
    id: "pets",
    eyebrow: "Hjemme",
    title: "Er det andre dyr i huset?",
    optional: true,
    options: [
      { value: "none", label: "Ingen andre dyr" },
      { value: "dog", label: "En annen hund" },
      { value: "cat", label: "En katt" },
      { value: "small", label: "Mindre dyr", hint: "Kaniner, fugler, gnagere" },
    ],
  },
  {
    id: "shedding",
    eyebrow: "Pels og allergi",
    title: "Hva tenker du om hundehår i huset?",
    help: "Noen raser feller mindre, og det opplever mange med allergi som lettere. Men ingen hund er helt allergivennlig.",
    options: [
      { value: "fine", label: "Hår plager meg ikke" },
      { value: "prefer-low", label: "Jeg vil helst ha mindre av det" },
      { value: "must-low", label: "Noen her reagerer på hund", hint: "Kun raser som feller lite, takk" },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Stell",
    title: "Hvor mye pelsstell har du lyst til å ta på deg?",
    options: [
      { value: "minimal", label: "Så lite som mulig" },
      { value: "moderate", label: "Jevnlig børsting går fint" },
      { value: "high", label: "Turer til hundefrisøren er greit" },
    ],
  },
  {
    id: "physical",
    eyebrow: "Stell",
    title: "Hvor mye hund klarer du fint å håndtere?",
    help: "Styrke i bånd er det mange undervurderer.",
    options: [
      { value: "light", label: "Ingenting stort eller sterkt", hint: "En sterk hund ville blitt for mye" },
      { value: "moderate", label: "En mellomstor hund går fint" },
      { value: "strong", label: "Jeg klarer en stor og sterk hund" },
    ],
  },
  {
    id: "energyLimit",
    eyebrow: "Helt ærlig",
    title: "Kunne du levd godt med en hund med mye energi?",
    help: "Vær ærlig her — vi tar deg på ordet.",
    options: [
      { value: "no", label: "Nei, jeg trenger en roligere hund" },
      { value: "maybe", label: "Innenfor rimelighetens grenser" },
      { value: "yes", label: "Ja, jeg vil gjerne ha en aktiv en" },
    ],
  },
  {
    id: "companionship",
    eyebrow: "Selskap",
    title: "Hva håper du en hund vil gi deg?",
    options: [
      { value: "calm-company", label: "Rolig og trygt selskap" },
      { value: "motivation", label: "En grunn til å komme seg ut" },
      { value: "active", label: "Noen som holder tritt med meg" },
      { value: "family", label: "En hund for hele familien" },
    ],
  },
  {
    id: "allergy",
    eyebrow: "Pels og allergi",
    title: "Er det noen hjemme hos deg som har hundeallergi?",
    help: "Noen raser feller mindre og holder på pelsen, og det opplever enkelte som lettere. Ingen hund er helt allergivennlig, og toleransen varierer fra person til person.",
    options: [
      { value: "none", label: "Nei, ingen reagerer på hund" },
      { value: "mild", label: "Milde reaksjoner", hint: "Litt tett i nesen rundt enkelte hunder" },
      { value: "significant", label: "En betydelig allergi", hint: "Vi ville hatt skikkelig allergiråd først" },
      { value: "unsure", label: "Vi vet ikke sikkert ennå" },
    ],
  },
  {
    id: "wellbeing",
    eyebrow: "Selskap og trivsel",
    title: "Hvor mye ønsker du deg en rolig og nær følgesvenn å ha rundt deg?",
    help: "En hund er selskap, ikke behandling. Vi ser på ro, sosialitet og hvor menneskeorientert en rase pleier å være.",
    options: [
      { value: "no", label: "Det er ikke det jeg ser etter" },
      { value: "some", label: "Det hadde vært hyggelig" },
      { value: "important", label: "Ja, det betyr noe for meg" },
      { value: "very", label: "Det er det viktigste for meg" },
    ],
  },
];
