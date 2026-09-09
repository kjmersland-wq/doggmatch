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
