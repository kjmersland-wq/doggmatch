import type { UserProfile } from "@/lib/matching/types";

/**
 * Samtalsflödet om förberedelser. Inte ett test – det finns inget godkänt betyg och ingen skam
 * i något svar. Där ett svar också är användbart för matchningsmotorn, bär det en
 * `profile`-uppdatering så att Find My Dog aldrig frågar igen.
 */
export interface ReadinessOption {
  value: string;
  label: string;
  hint?: string;
  /** 0–3. Högre betyder helt enkelt färre saker att ordna med först. */
  score: number;
  /** Vad detta svar berättar för matchningsmotorn, om något. */
  profile?: UserProfile;
  /** En vänlig notering som visas i resultatet när detta svar väljs. */
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
    eyebrow: "Dina dagar",
    title: "Hur mycket tid kan du ge en hund varje dag?",
    help: "Promenader, matning, träning, pälsvård och bara att vara tillsammans.",
    options: [
      { value: "under1", label: "Mindre än en timme", score: 0, note: "De flesta hundar behöver mer än en timme av din dag, fördelat på promenader, mat, träning och sällskap. Det är värt att fundera på hur du skulle hitta den tiden." },
      { value: "1-2", label: "En till två timmar", score: 2 },
      { value: "2-3", label: "Två till tre timmar", score: 3 },
      { value: "3plus", label: "Mer än tre timmar", score: 3, hint: "Mina dagar är ganska flexibla" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Din dag",
    title: "Hur länge skulle hunden vanligtvis vara ensam?",
    help: "Det finns inget enskilt nummer som är rätt för alla hundar. Ålder, träning och temperament spelar roll.",
    options: [
      { value: "0", label: "Nästan aldrig ensam", score: 3, profile: { alone: "0" } },
      { value: "2", label: "Upp till tre timmar", score: 3, profile: { alone: "2" } },
      { value: "4", label: "Tre till fem timmar", score: 2, profile: { alone: "4" } },
      { value: "6", label: "Sex timmar eller mer", score: 0, profile: { alone: "6" }, note: "Långa dagar ensam är tufft för de flesta hundar. En hundvakt, dagis eller en granne som kan titta till gör verklig skillnad – värt att planera innan, inte efter." },
    ],
  },
  {
    id: "activity",
    eyebrow: "Dina dagar",
    title: "Hur aktiv är du en vanlig dag?",
    help: "Tänk på en vanlig vecka, inte din bästa.",
    options: [
      { value: "1", label: "Ganska lugn", score: 2, profile: { activity: "1" } },
      { value: "2", label: "Rimligt aktiv", score: 3, profile: { activity: "2" } },
      { value: "3", label: "Ganska aktiv", score: 3, profile: { activity: "3" } },
      { value: "4", label: "Alltid på språng", score: 3, profile: { activity: "4" } },
    ],
  },
  {
    id: "home",
    eyebrow: "Hemma",
    title: "Var skulle din hund bo?",
    help: "En lägenhet är inget hinder för en lycklig hund. Vad som spelar större roll är promenaderna utanför dörren och dina rutiner.",
    options: [
      { value: "apartment", label: "En lägenhet", score: 3, profile: { home: "apartment" } },
      { value: "house", label: "Ett hus, ingen trädgård", score: 3, profile: { home: "house" } },
      { value: "house-garden", label: "Ett hus med trädgård", score: 3, profile: { home: "house-garden" } },
      { value: "rural", label: "Ute på landet", score: 3, profile: { home: "rural" } },
    ],
  },
  {
    id: "travel",
    eyebrow: "Borta från hemmet",
    title: "Reser du ofta?",
    options: [
      { value: "rarely", label: "Sällan", score: 3 },
      { value: "sometimes", label: "Några gånger om året", score: 2 },
      { value: "often", label: "Ofta, i jobbet eller annat", score: 1, note: "Att resa ofta är ingen anledning att inte ha en hund – men det innebär att du tidigt behöver bestämma vem som tar hand om dem, eller vilka resor de får följa med på." },
    ],
  },
  {
    id: "children",
    eyebrow: "Hemma",
    title: "Vem mer finns hemma?",
    options: [
      { value: "none", label: "Bara vuxna", score: 3, profile: { children: "none" } },
      { value: "older", label: "Äldre barn", score: 3, profile: { children: "older" } },
      { value: "young", label: "Små barn", score: 2, profile: { children: "young" }, note: "Små barn och hundar kan vara underbara tillsammans, med tillsyn och en lugn plats som hunden alltid kan dra sig tillbaka till." },
      { value: "visitors", label: "Vuxna, och många besökare", score: 3, profile: { children: "visitors" } },
    ],
  },
  {
    id: "pets",
    eyebrow: "Hemma",
    title: "Några andra djur i huset?",
    options: [
      { value: "none", label: "Inga andra husdjur", score: 3, profile: { pets: "none" } },
      { value: "dog", label: "En annan hund", score: 3, profile: { pets: "dog" } },
      { value: "cat", label: "En katt", score: 2, profile: { pets: "cat" } },
      { value: "small", label: "Mindre djur", hint: "Kaniner, fåglar, gnagare", score: 2, profile: { pets: "small" } },
    ],
  },
  {
    id: "allergies",
    eyebrow: "Hälsa hemma",
    title: "Har någon i hushållet allergier?",
    help: "Vissa raser fäller mindre, vilket folk ibland tycker är lättare att leva med. Ingen hund är helt allergifri, och reaktioner varierar från person till person.",
    options: [
      { value: "no", label: "Ingen, så vitt vi vet", score: 3, profile: { shedding: "fine" } },
      { value: "mild", label: "Någon är lite känslig", score: 2, profile: { shedding: "prefer-low" } },
      { value: "yes", label: "Ja, någon reagerar på hundar", score: 1, profile: { shedding: "must-low" }, note: "Tillbringa tid med den enskilda hunden innan du bestämmer dig, och prata med en läkare. Hundar som fäller mindre hjälper vissa personer och inte andra." },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Att ta hand om dem",
    title: "Är du bekväm med regelbunden pälsvård?",
    options: [
      { value: "minimal", label: "Jag vill helst hålla det enkelt", score: 2, profile: { grooming: "minimal" } },
      { value: "moderate", label: "En vanlig borstning går bra", score: 3, profile: { grooming: "moderate" } },
      { value: "high", label: "Jag har inget emot besök hos hundfrisören", score: 3, profile: { grooming: "high" } },
    ],
  },
  {
    id: "costs",
    eyebrow: "Pengar",
    title: "Kan du hantera en oväntad veterinärräkning?",
    help: "Det här är det som överraskar de flesta. Försäkring eller sparande fungerar båda.",
    options: [
      { value: "yes", label: "Ja, vi skulle klara det", score: 3 },
      { value: "insurance", label: "Med försäkring, ja", score: 3 },
      { value: "tight", label: "Det skulle vara tajt", score: 1, note: "Att lägga undan lite varje månad, eller försäkra tidigt, tar bort mycket oro för de kommande åren." },
      { value: "no", label: "Inte just nu", score: 0, note: "Veterinärvård kan vara dyrt och kommer sällan vid en lämplig tidpunkt. Några månaders sparande först kan förändra allt." },
    ],
  },
  {
    id: "support",
    eyebrow: "Dina människor",
    title: "Vem skulle kunna hjälpa om du blev sjuk eller var borta?",
    options: [
      { value: "household", label: "Någon annan hemma", score: 3 },
      { value: "family", label: "Familj eller vänner i närheten", score: 3 },
      { value: "paid", label: "Jag skulle betala för en hundvakt eller dagis", score: 2 },
      { value: "noone", label: "Jag är inte säker än", score: 0, note: "Alla blir sjuka eller måste iväg någon gång. Att veta nu vem som skulle kliva in gör de veckorna mycket mindre stressiga." },
    ],
  },
  {
    id: "commitment",
    eyebrow: "Det långa perspektivet",
    title: "En hund kan vara med dig i tio till femton år. Känns det rätt?",
    help: "Tänk på var du kan tänkas bo, arbeta och resa om ett decennium.",
    options: [
      { value: "yes", label: "Ja, vi har tänkt igenom det", score: 3 },
      { value: "mostly", label: "Mestadels – vissa saker är osäkra", score: 2 },
      { value: "unsure", label: "Ärligt talat, jag är inte säker", score: 0, note: "Det är en mycket rimlig känsla. Det finns ingen brådska alls – en hund finns kvar när bilden är tydligare." },
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
    title: "Du verkar väl förberedd.",
    body: "Baserat på vad du har berättat skulle en hund passa in i ditt liv utan att mycket behöver förändras. Du har tänkt på tid, pengar och de personer som skulle hjälpa till när livet kommer emellan – vilket är det svåraste arbetet gjort.",
    encouragement: "Redo att ta reda på vilka hundar som kan passa ditt liv?",
  },
  "good-start": {
    id: "good-start",
    title: "Du har fått en bra start.",
    body: "De flesta bitarna finns redan på plats. Det finns en eller två saker som är värda att ordna med innan en hund kommer hem, och inget av dem är svårt – de är bara lättare att ordna nu än mitt i den första veckan med en ny hund.",
    encouragement: "Ta en titt på vilka hundar som kan passa dig medan du jobbar igenom resten.",
  },
  "not-yet": {
    id: "not-yet",
    title: "Det finns några saker som är värda att tänka på först.",
    body: "Kanske inte riktigt än – och det är helt okej. Inget här säger att du inte ska ha en hund. Det säger att lite förberedelse nu skulle göra beslutet mycket enklare, och det första året mycket snällare för er båda.",
    encouragement: "Du är välkommen att fortsätta utforska. Ingenting är låst.",
  },
};
