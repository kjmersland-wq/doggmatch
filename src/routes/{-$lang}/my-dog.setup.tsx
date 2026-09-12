import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { BreedPicker, selectionFromDog, selectionToDog, type BreedSelection } from "@/components/dogmatch/breed-picker";
import type { AgeStage } from "@/data/care/types";
import { Arrow, Button, Eyebrow } from "@/components/dogmatch/ui";
import { trainingStore, useActiveDog } from "@/lib/training/store";
import { careStore, useCareProfile, type ActivityLevel, type BodyCondition, type FoodType } from "@/lib/care/store";
import { suggestedMeals } from "@/lib/care/portions";
import { cn } from "@/lib/utils";
import { useCopy } from "@/i18n";
import { abs, noindexMeta } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Your dog's details — My Dog | DoggMatch";
const description =
  "A few simple details about your dog so food portions, weight and care suggestions actually fit them.";

export const Route = createFileRoute("/{-$lang}/my-dog/setup")({
  head: () => ({
    meta: [
      ...noindexMeta,
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: abs("/my-dog/setup") }],
  }),
  component: MyDogSetup,
});

const copy = {
  en: {
    eyebrow: "Your dog",
    title: "A few details, and we'll do the maths.",
    intro:
      "Everything here stays on this device. Skip anything you don't know — you can always come back and fill it in later.",
    ageStages: [
      { value: "puppy", label: "A puppy", hint: "Up to about six months" },
      { value: "adolescent", label: "A teenager", hint: "Roughly six months to two years" },
      { value: "adult", label: "Grown up", hint: "Somewhere in the middle years" },
      { value: "senior", label: "Getting older", hint: "Slowing down a little" },
    ],
    activities: [
      { value: "gentle", label: "Gentle", hint: "Short walks, plenty of napping" },
      { value: "moderate", label: "Fairly normal", hint: "An hour or so a day" },
      { value: "busy", label: "Always going", hint: "Long walks, running, sport" },
    ],
    foodTypes: [
      { value: "dry", label: "Dry food", hint: "Kibble" },
      { value: "wet", label: "Wet food", hint: "Tins, trays or pouches" },
      { value: "mixed", label: "A bit of both", hint: "Wet and dry together" },
      { value: "raw", label: "Raw", hint: "Prepared or home-made raw" },
      { value: "home", label: "Home-cooked", hint: "Cooked at home" },
    ],
    conditions: [
      { value: "thin", label: "A little thin", hint: "Ribs and hips stand out" },
      { value: "ideal", label: "About right", hint: "Ribs easy to feel, clear waist" },
      { value: "heavy", label: "A little heavy", hint: "Ribs hard to feel, no waist" },
    ],
    nameLabel: "What's their name?",
    namePlaceholder: "Luna",
    ageLabel: "How old is your dog?",
    neuteredLabel: "Have they been neutered or spayed?",
    neuteredHint: "It changes how much food they need, so it's worth knowing.",
    yes: "Yes",
    noOrUnsure: "No, or not sure",
    weightLabel: "Roughly what do they weigh?",
    weightHint: "In kilograms. A rough figure is fine to start with.",
    activityLabel: "How active are they?",
    bodyLabel: "And how do they look right now?",
    bodyHint: "Feel along their ribs and look down from above. There's a proper guide in Weight & shape.",
    foodTypeLabel: "What do you feed?",
    energyLabel: "Calories per 100g, if the bag says",
    energyHint: "Usually printed as kcal/100g. Leave it blank and we'll use a typical figure for that kind of food.",
    kcalPer100g: "kcal per 100g",
    mealsLabel: "How many meals a day?",
    vetLabel: "Your vet",
    vetHint: "Kept here so you're not searching for it when you need it.",
    practiceName: "Practice name",
    phoneNumber: "Phone number",
    outOfHours: "Out-of-hours number",
    notesLabel: "Anything else worth remembering?",
    notesHint: "Allergies, medication, things they can't have.",
    notesPlaceholder: "Reacts to chicken. On joint supplements.",
    notNow: "Not now",
    save: "Save",
  },
  no: {
    eyebrow: "Hunden din",
    title: "Noen få detaljer, så tar vi oss av regnestykket.",
    intro:
      "Alt her blir liggende på denne enheten. Hopp over det du ikke vet — du kan alltid komme tilbake og fylle det inn senere.",
    ageStages: [
      { value: "puppy", label: "En valp", hint: "Opptil rundt seks måneder" },
      { value: "adolescent", label: "En tenåring", hint: "Omtrent seks måneder til to år" },
      { value: "adult", label: "Voksen", hint: "Et sted i de midterste årene" },
      { value: "senior", label: "Blir eldre", hint: "Roer seg litt ned" },
    ],
    activities: [
      { value: "gentle", label: "Rolig", hint: "Korte turer, mye lur" },
      { value: "moderate", label: "Ganske normalt", hint: "En times tid om dagen" },
      { value: "busy", label: "Alltid i gang", hint: "Lange turer, løping, sport" },
    ],
    foodTypes: [
      { value: "dry", label: "Tørrfôr", hint: "Pellets" },
      { value: "wet", label: "Våtfôr", hint: "Bokser, brett eller poser" },
      { value: "mixed", label: "Litt av begge deler", hint: "Våtfôr og tørrfôr sammen" },
      { value: "raw", label: "Rått", hint: "Ferdiglaget eller hjemmelaget rått fôr" },
      { value: "home", label: "Hjemmelaget", hint: "Laget hjemme" },
    ],
    conditions: [
      { value: "thin", label: "Litt tynn", hint: "Ribbein og hofter stikker ut" },
      { value: "ideal", label: "Passe", hint: "Ribbein lett å kjenne, tydelig midje" },
      { value: "heavy", label: "Litt lubben", hint: "Ribbein vanskelig å kjenne, ingen midje" },
    ],
    nameLabel: "Hva heter hunden?",
    namePlaceholder: "Luna",
    ageLabel: "Hvor gammel er hunden din?",
    neuteredLabel: "Er hunden kastrert eller sterilisert?",
    neuteredHint: "Det endrer hvor mye mat den trenger, så det er verdt å vite.",
    yes: "Ja",
    noOrUnsure: "Nei, eller usikker",
    weightLabel: "Omtrent hvor mye veier den?",
    weightHint: "I kilo. Et omtrentlig tall er greit til å begynne med.",
    activityLabel: "Hvor aktiv er hunden?",
    bodyLabel: "Og hvordan ser den ut akkurat nå?",
    bodyHint: "Kjenn langs ribbeina og se ovenfra. Det er en skikkelig guide under Vekt & hold.",
    foodTypeLabel: "Hva fôrer du med?",
    energyLabel: "Kalorier per 100 g, hvis posen sier det",
    energyHint: "Står vanligvis som kcal/100 g. La stå tomt, så bruker vi et typisk tall for den typen fôr.",
    kcalPer100g: "kcal per 100 g",
    mealsLabel: "Hvor mange måltider om dagen?",
    vetLabel: "Veterinæren din",
    vetHint: "Lagret her så du slipper å lete etter det når du trenger det.",
    practiceName: "Navn på klinikken",
    phoneNumber: "Telefonnummer",
    outOfHours: "Nummer utenom åpningstid",
    notesLabel: "Noe annet verdt å huske på?",
    notesHint: "Allergier, medisiner, ting den ikke tåler.",
    notesPlaceholder: "Reagerer på kylling. Bruker leddtilskudd.",
    notNow: "Ikke nå",
    save: "Lagre",
  },
  pl: {
    eyebrow: "Twój pies",
    title: "Kilka szczegółów, a my zajmiemy się obliczeniami.",
    intro:
      "Wszystko tutaj zostaje na tym urządzeniu. Pomiń to, czego nie wiesz — zawsze możesz wrócić i uzupełnić to później.",
    ageStages: [
      { value: "puppy", label: "Szczeniak", hint: "Do około sześciu miesięcy" },
      { value: "adolescent", label: "Nastolatek", hint: "Mniej więcej od pół roku do dwóch lat" },
      { value: "adult", label: "Dorosły", hint: "Gdzieś w środkowych latach" },
      { value: "senior", label: "Coraz starszy", hint: "Trochę zwalnia" },
    ],
    activities: [
      { value: "gentle", label: "Spokojny", hint: "Krótkie spacery, dużo drzemek" },
      { value: "moderate", label: "Dość normalny", hint: "Około godziny dziennie" },
      { value: "busy", label: "Zawsze w ruchu", hint: "Długie spacery, bieganie, sport" },
    ],
    foodTypes: [
      { value: "dry", label: "Sucha karma", hint: "Krokiety" },
      { value: "wet", label: "Mokra karma", hint: "Puszki, tacki lub saszetki" },
      { value: "mixed", label: "Trochę jednego i drugiego", hint: "Mokra i sucha karma razem" },
      { value: "raw", label: "Karma surowa", hint: "Gotowa lub domowa surowa dieta" },
      { value: "home", label: "Domowe jedzenie", hint: "Gotowane w domu" },
    ],
    conditions: [
      { value: "thin", label: "Trochę za chudy", hint: "Widać żebra i biodra" },
      { value: "ideal", label: "W sam raz", hint: "Żebra łatwo wyczuć, widoczna talia" },
      { value: "heavy", label: "Trochę za ciężki", hint: "Trudno wyczuć żebra, brak talii" },
    ],
    nameLabel: "Jak się nazywa?",
    namePlaceholder: "Luna",
    ageLabel: "Ile lat ma twój pies?",
    neuteredLabel: "Czy był kastrowany lub sterylizowana?",
    neuteredHint: "To zmienia, ile jedzenia potrzebuje, więc warto to wiedzieć.",
    yes: "Tak",
    noOrUnsure: "Nie, lub nie jestem pewien/pewna",
    weightLabel: "Ile mniej więcej waży?",
    weightHint: "W kilogramach. Na początek wystarczy przybliżona liczba.",
    activityLabel: "Jak aktywny jest twój pies?",
    bodyLabel: "A jak wygląda teraz?",
    bodyHint: "Sprawdź dotykiem żebra i spójrz z góry. Pełny przewodnik znajdziesz w sekcji Waga i sylwetka.",
    foodTypeLabel: "Czym karmisz?",
    energyLabel: "Kalorie na 100 g, jeśli podane są na opakowaniu",
    energyHint: "Zwykle podane jako kcal/100 g. Zostaw puste, a użyjemy typowej wartości dla tego rodzaju karmy.",
    kcalPer100g: "kcal na 100 g",
    mealsLabel: "Ile posiłków dziennie?",
    vetLabel: "Twój weterynarz",
    vetHint: "Zapisane tutaj, żebyś nie musiał tego szukać, kiedy będzie potrzebne.",
    practiceName: "Nazwa przychodni",
    phoneNumber: "Numer telefonu",
    outOfHours: "Numer poza godzinami pracy",
    notesLabel: "Coś jeszcze warto zapamiętać?",
    notesHint: "Alergie, leki, rzeczy, których nie może jeść.",
    notesPlaceholder: "Reaguje na kurczaka. Przyjmuje suplementy na stawy.",
    notNow: "Nie teraz",
    save: "Zapisz",
  },
  dk: {
    eyebrow: "Din hund",
    title: "Et par detaljer, så klarer vi regnestykket.",
    intro:
      "Alt her bliver på denne enhed. Spring over det, du ikke ved — du kan altid komme tilbage og udfylde det senere.",
    ageStages: [
      { value: "puppy", label: "En hvalp", hint: "Op til cirka seks måneder" },
      { value: "adolescent", label: "En teenager", hint: "Cirka seks måneder til to år" },
      { value: "adult", label: "Voksen", hint: "Et sted i de midterste år" },
      { value: "senior", label: "Bliver ældre", hint: "Sætter tempoet lidt ned" },
    ],
    activities: [
      { value: "gentle", label: "Rolig", hint: "Korte gåture, masser af lure" },
      { value: "moderate", label: "Ret normal", hint: "Omkring en time om dagen" },
      { value: "busy", label: "Altid i gang", hint: "Lange ture, løb, sport" },
    ],
    foodTypes: [
      { value: "dry", label: "Tørfoder", hint: "Piller" },
      { value: "wet", label: "Vådfoder", hint: "Dåser, bakker eller poser" },
      { value: "mixed", label: "Lidt af begge dele", hint: "Vådt og tørt sammen" },
      { value: "raw", label: "Råt", hint: "Færdiglavet eller hjemmelavet råfoder" },
      { value: "home", label: "Hjemmelavet", hint: "Lavet derhjemme" },
    ],
    conditions: [
      { value: "thin", label: "Lidt tynd", hint: "Ribben og hofter stikker ud" },
      { value: "ideal", label: "Passende", hint: "Ribben let at mærke, tydelig talje" },
      { value: "heavy", label: "Lidt tung", hint: "Svært at mærke ribben, ingen talje" },
    ],
    nameLabel: "Hvad hedder den?",
    namePlaceholder: "Luna",
    ageLabel: "Hvor gammel er din hund?",
    neuteredLabel: "Er den kastreret eller steriliseret?",
    neuteredHint: "Det ændrer, hvor meget mad den har brug for, så det er værd at vide.",
    yes: "Ja",
    noOrUnsure: "Nej, eller ikke sikker",
    weightLabel: "Cirka hvor meget vejer den?",
    weightHint: "I kilo. Et cirka-tal er fint til at starte med.",
    activityLabel: "Hvor aktiv er den?",
    bodyLabel: "Og hvordan ser den ud lige nu?",
    bodyHint: "Mærk langs ribbenene og se den ovenfra. Der er en rigtig guide under Vægt & hold.",
    foodTypeLabel: "Hvad fodrer du med?",
    energyLabel: "Kalorier per 100 g, hvis posen siger det",
    energyHint: "Står normalt som kcal/100 g. Lad det stå tomt, så bruger vi et typisk tal for den slags foder.",
    kcalPer100g: "kcal per 100 g",
    mealsLabel: "Hvor mange måltider om dagen?",
    vetLabel: "Din dyrlæge",
    vetHint: "Gemt her, så du ikke skal lede efter det, når du har brug for det.",
    practiceName: "Klinikkens navn",
    phoneNumber: "Telefonnummer",
    outOfHours: "Nummer uden for åbningstid",
    notesLabel: "Andet, der er værd at huske?",
    notesHint: "Allergier, medicin, ting den ikke tåler.",
    notesPlaceholder: "Reagerer på kylling. Får kosttilskud til led.",
    notNow: "Ikke nu",
    save: "Gem",
  },
  se: {
    eyebrow: "Din hund",
    title: "Några uppgifter, så sköter vi räkneuppgiften.",
    intro:
      "Allt här stannar på den här enheten. Hoppa över det du inte vet — du kan alltid komma tillbaka och fylla i det senare.",
    ageStages: [
      { value: "puppy", label: "En valp", hint: "Upp till ungefär sex månader" },
      { value: "adolescent", label: "En tonåring", hint: "Ungefär sex månader till två år" },
      { value: "adult", label: "Vuxen", hint: "Någonstans i de mellersta åren" },
      { value: "senior", label: "Blir äldre", hint: "Saktar ner lite" },
    ],
    activities: [
      { value: "gentle", label: "Lugn", hint: "Korta promenader, mycket tupplur" },
      { value: "moderate", label: "Ganska normal", hint: "En timme eller så om dagen" },
      { value: "busy", label: "Alltid igång", hint: "Långa promenader, löpning, sport" },
    ],
    foodTypes: [
      { value: "dry", label: "Torrfoder", hint: "Pellets" },
      { value: "wet", label: "Våtfoder", hint: "Burkar, brickor eller påsar" },
      { value: "mixed", label: "Lite av båda", hint: "Vått och torrt tillsammans" },
      { value: "raw", label: "Rått", hint: "Färdig eller hemgjord råfoder" },
      { value: "home", label: "Hemlagat", hint: "Lagat hemma" },
    ],
    conditions: [
      { value: "thin", label: "Lite mager", hint: "Revben och höfter syns tydligt" },
      { value: "ideal", label: "Lagom", hint: "Revben lätta att känna, tydlig midja" },
      { value: "heavy", label: "Lite tung", hint: "Svårt att känna revbenen, ingen midja" },
    ],
    nameLabel: "Vad heter den?",
    namePlaceholder: "Luna",
    ageLabel: "Hur gammal är din hund?",
    neuteredLabel: "Är den kastrerad eller steriliserad?",
    neuteredHint: "Det påverkar hur mycket mat den behöver, så det är bra att veta.",
    yes: "Ja",
    noOrUnsure: "Nej, eller osäker",
    weightLabel: "Ungefär hur mycket väger den?",
    weightHint: "I kilogram. Ett ungefärligt tal är bra att börja med.",
    activityLabel: "Hur aktiv är den?",
    bodyLabel: "Och hur ser den ut just nu?",
    bodyHint: "Känn längs revbenen och titta uppifrån. Det finns en riktig guide under Vikt & hull.",
    foodTypeLabel: "Vad ger du för foder?",
    energyLabel: "Kalorier per 100 g, om det står på påsen",
    energyHint: "Brukar stå som kcal/100 g. Lämna tomt så använder vi ett typiskt värde för den typen av foder.",
    kcalPer100g: "kcal per 100 g",
    mealsLabel: "Hur många måltider om dagen?",
    vetLabel: "Din veterinär",
    vetHint: "Sparat här så att du slipper leta efter det när du behöver det.",
    practiceName: "Klinikens namn",
    phoneNumber: "Telefonnummer",
    outOfHours: "Nummer utanför öppettider",
    notesLabel: "Något annat värt att komma ihåg?",
    notesHint: "Allergier, mediciner, saker den inte tål.",
    notesPlaceholder: "Reagerar på kyckling. Får ledtillskott.",
    notNow: "Inte nu",
    save: "Spara",
  },
  fi: {
    eyebrow: "Koirasi",
    title: "Muutama tieto, niin hoidamme laskutoimituksen.",
    intro:
      "Kaikki tämä pysyy tällä laitteella. Ohita se, mitä et tiedä — voit aina palata ja täyttää sen myöhemmin.",
    ageStages: [
      { value: "puppy", label: "Pentu", hint: "Noin kuuteen kuukauteen asti" },
      { value: "adolescent", label: "Murrosikäinen", hint: "Noin kuudesta kuukaudesta kahteen vuoteen" },
      { value: "adult", label: "Aikuinen", hint: "Jossain keskimmäisissä vuosissa" },
      { value: "senior", label: "Ikääntyvä", hint: "Hidastaa hieman vauhtia" },
    ],
    activities: [
      { value: "gentle", label: "Rauhallinen", hint: "Lyhyitä lenkkejä, paljon torkkuja" },
      { value: "moderate", label: "Melko tavallinen", hint: "Noin tunti päivässä" },
      { value: "busy", label: "Aina menossa", hint: "Pitkiä lenkkejä, juoksua, urheilua" },
    ],
    foodTypes: [
      { value: "dry", label: "Kuivaruoka", hint: "Rae" },
      { value: "wet", label: "Märkäruoka", hint: "Tölkit, tarjottimet tai pussit" },
      { value: "mixed", label: "Vähän molempia", hint: "Märkä- ja kuivaruokaa yhdessä" },
      { value: "raw", label: "Raakaruoka", hint: "Valmis tai kotitekoinen raakaruoka" },
      { value: "home", label: "Kotiruoka", hint: "Kotona valmistettu" },
    ],
    conditions: [
      { value: "thin", label: "Hieman laiha", hint: "Kylkiluut ja lonkkaluut erottuvat" },
      { value: "ideal", label: "Sopiva", hint: "Kylkiluut tuntuvat helposti, selkeä vyötärö" },
      { value: "heavy", label: "Hieman ylipainoinen", hint: "Kylkiluita vaikea tuntea, ei vyötäröä" },
    ],
    nameLabel: "Mikä sen nimi on?",
    namePlaceholder: "Luna",
    ageLabel: "Kuinka vanha koirasi on?",
    neuteredLabel: "Onko se leikattu?",
    neuteredHint: "Se vaikuttaa siihen, kuinka paljon ruokaa se tarvitsee, joten se on hyvä tietää.",
    yes: "Kyllä",
    noOrUnsure: "Ei, tai en ole varma",
    weightLabel: "Kuinka paljon se painaa suunnilleen?",
    weightHint: "Kilogrammoina. Suunnilleen riittää aluksi.",
    activityLabel: "Kuinka aktiivinen se on?",
    bodyLabel: "Ja miltä se näyttää juuri nyt?",
    bodyHint: "Tunnustele kylkiluita ja katso ylhäältä. Kunnollinen opas löytyy kohdasta Paino ja kunto.",
    foodTypeLabel: "Millä ruokit?",
    energyLabel: "Kalorit / 100 g, jos pussissa lukee",
    energyHint: "Ilmoitetaan yleensä muodossa kcal/100 g. Jätä tyhjäksi, niin käytämme tyypillistä arvoa kyseiselle ruokatyypille.",
    kcalPer100g: "kcal / 100 g",
    mealsLabel: "Kuinka monta ateriaa päivässä?",
    vetLabel: "Eläinlääkärisi",
    vetHint: "Tallennettuna tänne, jotta sinun ei tarvitse etsiä sitä, kun tarvitset sitä.",
    practiceName: "Klinikan nimi",
    phoneNumber: "Puhelinnumero",
    outOfHours: "Päivystysnumero",
    notesLabel: "Jotain muuta muistamisen arvoista?",
    notesHint: "Allergiat, lääkitys, asiat, joita se ei siedä.",
    notesPlaceholder: "Reagoi kanaan. Saa nivellisäravinteita.",
    notNow: "Ei nyt",
    save: "Tallenna",
  },
} as const;

const defaultEnergy: Record<FoodType, number> = {
  dry: 360,
  wet: 100,
  mixed: 240,
  raw: 160,
  home: 150,
};

function MyDogSetup() {
  const c = useCopy(copy);
  const navigate = useNavigate();
  const dog = useActiveDog();
  const profile = useCareProfile(dog?.id);

  const [name, setName] = useState(dog?.name ?? "");
  const [breedSel, setBreedSel] = useState<BreedSelection>(() => selectionFromDog(dog));
  const [ageStage, setAgeStage] = useState<AgeStage>((dog?.ageStage as AgeStage) ?? "adult");
  const [neutered, setNeutered] = useState(profile.neutered ?? false);
  const [weight, setWeight] = useState(profile.weightKg ? String(profile.weightKg) : "");
  const [activity, setActivity] = useState<ActivityLevel>(profile.activity ?? "moderate");
  const [bodyCondition, setBodyCondition] = useState<BodyCondition>(profile.bodyCondition ?? "ideal");
  const [foodType, setFoodType] = useState<FoodType>(profile.foodType ?? "dry");
  const [foodEnergy, setFoodEnergy] = useState(profile.foodEnergy ? String(profile.foodEnergy) : "");
  const [meals, setMeals] = useState(String(profile.mealsPerDay ?? suggestedMeals(ageStage)));
  const [vetName, setVetName] = useState(profile.vetName ?? "");
  const [vetPhone, setVetPhone] = useState(profile.vetPhone ?? "");
  const [emergencyPhone, setEmergencyPhone] = useState(profile.emergencyPhone ?? "");
  const [notes, setNotes] = useState(profile.notes ?? "");

  function save() {
    const id = trainingStore.saveDog({
      ...(dog?.id ? { id: dog.id } : {}),
      name: name.trim() || "your dog",
      ...selectionToDog(breedSel),
      ageStage,
      experience: dog?.experience ?? "some",
      level: dog?.level ?? "beginner",
      goals: dog?.goals ?? [],
    });

    const kg = Number.parseFloat(weight);
    const energy = Number.parseFloat(foodEnergy);
    careStore.saveProfile(id, {
      neutered,
      activity,
      bodyCondition,
      foodType,
      foodEnergy: Number.isFinite(energy) && energy > 0 ? energy : defaultEnergy[foodType],
      mealsPerDay: Number.parseInt(meals, 10) || suggestedMeals(ageStage),
      ...(Number.isFinite(kg) && kg > 0 ? { weightKg: Math.round(kg * 10) / 10 } : {}),
      vetName: vetName.trim(),
      vetPhone: vetPhone.trim(),
      emergencyPhone: emergencyPhone.trim(),
      notes: notes.trim(),
    });
    if (Number.isFinite(kg) && kg > 0) careStore.logWeight(id, Math.round(kg * 10) / 10);

    void navigate({ to: withLangPrefix("/my-dog") });
  }

  return (
    <div className="container-page max-w-3xl pt-28 pb-32 md:pt-36">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h1 className="display-lg mt-5">{c.title}</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{c.intro}</p>

      <div className="mt-12 space-y-12">
        <Field label={c.nameLabel}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={c.namePlaceholder}
            className="h-14 w-full max-w-sm rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
          />
        </Field>

        <BreedPicker value={breedSel} onChange={setBreedSel} Field={Field} />

        <Field label={c.ageLabel}>
          <Choices options={c.ageStages} value={ageStage} onChange={setAgeStage} />
        </Field>

        <Field label={c.neuteredLabel} hint={c.neuteredHint}>
          <div className="flex flex-wrap gap-3">
            <Toggle on={neutered} onClick={() => setNeutered(true)} label={c.yes} />
            <Toggle on={!neutered} onClick={() => setNeutered(false)} label={c.noOrUnsure} />
          </div>
        </Field>

        <Field label={c.weightLabel} hint={c.weightHint}>
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            inputMode="decimal"
            placeholder="18.5"
            className="h-14 w-40 rounded-2xl border border-border bg-card px-5 text-[1.0625rem] tabular-nums outline-none transition-colors focus:border-accent"
          />
        </Field>

        <Field label={c.activityLabel}>
          <Choices options={c.activities} value={activity} onChange={setActivity} />
        </Field>

        <Field label={c.bodyLabel} hint={c.bodyHint}>
          <Choices options={c.conditions} value={bodyCondition} onChange={setBodyCondition} />
        </Field>

        <Field label={c.foodTypeLabel}>
          <Choices options={c.foodTypes} value={foodType} onChange={setFoodType} />
        </Field>

        <Field label={c.energyLabel} hint={c.energyHint}>
          <div className="flex flex-wrap items-center gap-3">
            <input
              value={foodEnergy}
              onChange={(e) => setFoodEnergy(e.target.value)}
              inputMode="numeric"
              placeholder={String(defaultEnergy[foodType])}
              className="h-14 w-40 rounded-2xl border border-border bg-card px-5 text-[1.0625rem] tabular-nums outline-none transition-colors focus:border-accent"
            />
            <span className="text-muted-foreground">{c.kcalPer100g}</span>
          </div>
        </Field>

        <Field label={c.mealsLabel}>
          <div className="flex flex-wrap gap-3">
            {["1", "2", "3", "4"].map((n) => (
              <Toggle key={n} on={meals === n} onClick={() => setMeals(n)} label={n} />
            ))}
          </div>
        </Field>

        <Field label={c.vetLabel} hint={c.vetHint}>
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              value={vetName}
              onChange={(e) => setVetName(e.target.value)}
              placeholder={c.practiceName}
              className="h-14 rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
            />
            <input
              value={vetPhone}
              onChange={(e) => setVetPhone(e.target.value)}
              placeholder={c.phoneNumber}
              inputMode="tel"
              className="h-14 rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
            />
            <input
              value={emergencyPhone}
              onChange={(e) => setEmergencyPhone(e.target.value)}
              placeholder={c.outOfHours}
              inputMode="tel"
              className="h-14 rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
            />
          </div>
        </Field>

        <Field label={c.notesLabel} hint={c.notesHint}>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            placeholder={c.notesPlaceholder}
            className="w-full rounded-2xl border border-border bg-card px-5 py-4 text-[1.0625rem] leading-relaxed outline-none transition-colors focus:border-accent"
          />
        </Field>
      </div>

      <div className="sticky bottom-20 mt-14 flex items-center gap-3 border-t border-border bg-background/90 py-5 backdrop-blur-xl lg:bottom-0">
        <Button tone="ghost" onClick={() => void navigate({ to: withLangPrefix("/my-dog") })}>
          {c.notNow}
        </Button>
        <Button size="lg" className="ml-auto" onClick={save}>
          {c.save}
          <Arrow />
        </Button>
      </div>
    </div>
  );
}

interface Option<T extends string> {
  value: T;
  label: string;
  hint?: string;
}

function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-[1.375rem] leading-tight tracking-tight">{label}</h2>
      {hint && <p className="mt-2 text-[0.9375rem] text-muted-foreground">{hint}</p>}
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Choices<T extends string>({
  options,
  value,
  onChange,
}: {
  options: readonly Option<T>[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          className={cn(
            "min-h-14 rounded-2xl border px-5 py-3 text-left transition-all duration-300",
            value === o.value
              ? "border-accent bg-accent-soft/70 shadow-[var(--shadow-soft)]"
              : "border-border bg-card hover:border-border-strong",
          )}
        >
          <span className="block font-display text-[1.0625rem] leading-tight tracking-tight">{o.label}</span>
          {o.hint && <span className="mt-1 block text-sm text-muted-foreground">{o.hint}</span>}
        </button>
      ))}
    </div>
  );
}

function Toggle({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={cn(
        "min-h-14 min-w-14 rounded-2xl border px-6 text-[1.0625rem] transition-all duration-300",
        on ? "border-accent bg-accent-soft/70" : "border-border bg-card hover:border-border-strong",
      )}
    >
      {label}
    </button>
  );
}
