import type { QuizQuestion } from "@/lib/matching/types";

/** Spørgsmålene på dansk. Id'er og værdier er de samme. */
export const questionsDk: QuizQuestion[] = [
  {
    id: "activity",
    eyebrow: "Din hverdag",
    title: "Hvor aktiv er du til daglig?",
    help: "Tænk på en helt almindelig uge, ikke den bedste du har haft.",
    options: [
      { value: "1", label: "Ret rolig", hint: "Korte ture, rolige rutiner" },
      { value: "2", label: "Lidt aktiv", hint: "En tur hver dag, og lidt mere ind imellem" },
      { value: "3", label: "Ret aktiv", hint: "Lange ture, og weekender ude" },
      { value: "4", label: "Altid i gang", hint: "Løb, vandreture eller træning de fleste dage" },
    ],
  },
  {
    id: "home",
    eyebrow: "Hjemme",
    title: "Hvor skal hunden bo?",
    options: [
      { value: "apartment", label: "I en lejlighed", hint: "Fælles trappe eller elevator" },
      { value: "house", label: "Hus uden have" },
      { value: "house-garden", label: "Hus med have" },
      { value: "rural", label: "Ude på landet" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Din dag",
    title: "Hvor længe vil hunden typisk være alene?",
    options: [
      { value: "0", label: "Næsten aldrig alene", hint: "Der er næsten altid nogen hjemme" },
      { value: "2", label: "Op til tre timer" },
      { value: "4", label: "Tre til fem timer" },
      { value: "6", label: "Seks timer eller mere" },
    ],
  },
  {
    id: "experience",
    eyebrow: "Erfaring",
    title: "Har du haft hund før?",
    options: [
      { value: "first", label: "Det bliver min første" },
      { value: "some", label: "Lidt", hint: "Voksede op med hund, eller har passet en" },
      { value: "experienced", label: "En del", hint: "Jeg har selv opdraget og trænet hunde" },
    ],
  },
  {
    id: "size",
    eyebrow: "Det du drømmer om",
    title: "Har du en størrelse i tankerne?",
    optional: true,
    options: [
      { value: "small", label: "Noget lille" },
      { value: "medium", label: "Et sted midtimellem" },
      { value: "large", label: "En stor hund" },
      { value: "any", label: "Jeg er åben for alt" },
    ],
  },
  {
    id: "temperament",
    eyebrow: "Det du drømmer om",
    title: "Hvilken slags temperament ville du trives bedst med?",
    options: [
      { value: "calm", label: "Rolig og afslappet" },
      { value: "affectionate", label: "Kærlig og tæt på" },
      { value: "playful", label: "Legesyg og fuld af liv" },
      { value: "independent", label: "Tilfreds i eget selskab" },
    ],
  },
  {
    id: "children",
    eyebrow: "Derhjemme",
    title: "Hvem andre bor der hjemme hos dig?",
    options: [
      { value: "none", label: "Kun voksne" },
      { value: "older", label: "Større børn" },
      { value: "young", label: "Små børn" },
      { value: "visitors", label: "Voksne, og masser af besøg" },
    ],
  },
  {
    id: "pets",
    eyebrow: "Derhjemme",
    title: "Er der andre dyr i huset?",
    optional: true,
    options: [
      { value: "none", label: "Ingen andre dyr" },
      { value: "dog", label: "En anden hund" },
      { value: "cat", label: "En kat" },
      { value: "small", label: "Mindre dyr", hint: "Kaniner, fugle, gnavere" },
    ],
  },
  {
    id: "shedding",
    eyebrow: "Pels og allergi",
    title: "Hvad tænker du om hundehår i hjemmet?",
    help: "Nogle racer fælder mindre, og det oplever mange med allergi som lettere. Men ingen hund er helt allergivenlig.",
    options: [
      { value: "fine", label: "Hår generer mig ikke" },
      { value: "prefer-low", label: "Jeg vil helst have mindre af det" },
      { value: "must-low", label: "Nogen her reagerer på hunde", hint: "Kun racer med lidt fældning, tak" },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Pleje",
    title: "Hvor meget pelspleje har du lyst til at tage på dig?",
    options: [
      { value: "minimal", label: "Så lidt som muligt" },
      { value: "moderate", label: "Jævnlig børstning er fint" },
      { value: "high", label: "Ture til hundefriseuren er helt fint" },
    ],
  },
  {
    id: "physical",
    eyebrow: "Pleje",
    title: "Hvor meget hund kan du fint håndtere?",
    help: "Styrke i snoren er noget mange undervurderer.",
    options: [
      { value: "light", label: "Ikke noget stort eller stærkt", hint: "En stærk hund ville blive for meget" },
      { value: "moderate", label: "En mellemstor hund går fint" },
      { value: "strong", label: "Jeg kan sagtens klare en stor, stærk hund" },
    ],
  },
  {
    id: "energyLimit",
    eyebrow: "Helt ærligt",
    title: "Kunne du leve godt med en hund med masser af energi?",
    help: "Vær ærlig her — vi tager dig på ordet.",
    options: [
      { value: "no", label: "Nej, jeg har brug for en roligere hund" },
      { value: "maybe", label: "Inden for rimelighedens grænser" },
      { value: "yes", label: "Ja, jeg vil gerne have en aktiv en" },
    ],
  },
  {
    id: "companionship",
    eyebrow: "Selskab",
    title: "Hvad håber du en hund vil give dig?",
    options: [
      { value: "calm-company", label: "Roligt og trygt selskab" },
      { value: "motivation", label: "En grund til at komme udenfor" },
      { value: "active", label: "Nogen der kan følge med mig" },
      { value: "family", label: "En hund til hele familien" },
    ],
  },
  {
    id: "allergy",
    eyebrow: "Pels og allergi",
    title: "Er der nogen derhjemme, der har hundeallergi?",
    help: "Nogle racer fælder mindre og holder på pelsen, hvilket enkelte oplever som lettere. Ingen hund er helt allergivenlig, og tolerancen varierer fra person til person.",
    options: [
      { value: "none", label: "Nej, ingen reagerer på hunde" },
      { value: "mild", label: "Milde reaktioner", hint: "Lidt tilstoppet næse omkring visse hunde" },
      { value: "significant", label: "En betydelig allergi", hint: "Vi ville gerne have ordentlig allergirådgivning først" },
      { value: "unsure", label: "Det ved vi ikke helt endnu" },
    ],
  },
  {
    id: "wellbeing",
    eyebrow: "Selskab og trivsel",
    title: "Hvor meget ønsker du dig en rolig, nær følgesvend omkring dig?",
    help: "En hund er selskab, ikke behandling. Vi ser på ro, socialitet og hvor menneskeorienteret en race plejer at være.",
    options: [
      { value: "no", label: "Det er ikke det, jeg går efter" },
      { value: "some", label: "Det ville være rart" },
      { value: "important", label: "Ja, det betyder noget for mig" },
      { value: "very", label: "Det er det vigtigste for mig" },
    ],
  },
];
