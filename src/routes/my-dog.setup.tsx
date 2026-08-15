import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { breeds, type BreedId } from "@/data/breeds";
import type { AgeStage } from "@/data/care/types";
import { Arrow, Button, Eyebrow } from "@/components/dogmatch/ui";
import { trainingStore, useActiveDog } from "@/lib/training/store";
import { careStore, useCareProfile, type ActivityLevel, type BodyCondition, type FoodType } from "@/lib/care/store";
import { suggestedMeals } from "@/lib/care/portions";
import { cn } from "@/lib/utils";

const title = "Your dog's details — My Dog | DoggMatch";
const description =
  "A few simple details about your dog so food portions, weight and care suggestions actually fit them.";

export const Route = createFileRoute("/my-dog/setup")({
  head: () => ({
    meta: [
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
    links: [{ rel: "canonical", href: "/my-dog/setup" }],
  }),
  component: MyDogSetup,
});

const ageStages: Option<AgeStage>[] = [
  { value: "puppy", label: "A puppy", hint: "Up to about six months" },
  { value: "adolescent", label: "A teenager", hint: "Roughly six months to two years" },
  { value: "adult", label: "Grown up", hint: "Somewhere in the middle years" },
  { value: "senior", label: "Getting older", hint: "Slowing down a little" },
];

const activities: Option<ActivityLevel>[] = [
  { value: "gentle", label: "Gentle", hint: "Short walks, plenty of napping" },
  { value: "moderate", label: "Fairly normal", hint: "An hour or so a day" },
  { value: "busy", label: "Always going", hint: "Long walks, running, sport" },
];

const foodTypes: Option<FoodType>[] = [
  { value: "dry", label: "Dry food", hint: "Kibble" },
  { value: "wet", label: "Wet food", hint: "Tins, trays or pouches" },
  { value: "mixed", label: "A bit of both", hint: "Wet and dry together" },
  { value: "raw", label: "Raw", hint: "Prepared or home-made raw" },
  { value: "home", label: "Home-cooked", hint: "Cooked at home" },
];

const conditions: Option<BodyCondition>[] = [
  { value: "thin", label: "A little thin", hint: "Ribs and hips stand out" },
  { value: "ideal", label: "About right", hint: "Ribs easy to feel, clear waist" },
  { value: "heavy", label: "A little heavy", hint: "Ribs hard to feel, no waist" },
];

const defaultEnergy: Record<FoodType, number> = {
  dry: 360,
  wet: 100,
  mixed: 240,
  raw: 160,
  home: 150,
};

function MyDogSetup() {
  const navigate = useNavigate();
  const dog = useActiveDog();
  const profile = useCareProfile(dog?.id);

  const [name, setName] = useState(dog?.name ?? "");
  const [breedId, setBreedId] = useState<BreedId | "">(dog?.breedId ?? "");
  const [breedOther, setBreedOther] = useState(dog?.breedOther ?? "");
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
      ...(breedId ? { breedId } : {}),
      ...(breedOther.trim() ? { breedOther: breedOther.trim() } : {}),
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

    void navigate({ to: "/my-dog" });
  }

  return (
    <div className="container-page max-w-3xl pt-28 pb-32 md:pt-36">
      <Eyebrow>Your dog</Eyebrow>
      <h1 className="display-lg mt-5">A few details, and we'll do the maths.</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
        Everything here stays on this device. Skip anything you don't know — you can always come
        back and fill it in later.
      </p>

      <div className="mt-12 space-y-12">
        <Field label="What's their name?">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Luna"
            className="h-14 w-full max-w-sm rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
          />
        </Field>

        <Field label="Do you know the breed?" hint="If they're a lovely mix, just tell us what you'd call them.">
          <div className="flex flex-wrap gap-3">
            <select
              value={breedId}
              onChange={(e) => setBreedId(e.target.value as BreedId | "")}
              className="h-14 rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none focus:border-accent"
            >
              <option value="">Not from this list</option>
              {breeds.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
            {!breedId && (
              <input
                value={breedOther}
                onChange={(e) => setBreedOther(e.target.value)}
                placeholder="Terrier mix"
                className="h-14 w-full max-w-xs rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
              />
            )}
          </div>
        </Field>

        <Field label="How old is your dog?">
          <Choices options={ageStages} value={ageStage} onChange={setAgeStage} />
        </Field>

        <Field label="Have they been neutered or spayed?" hint="It changes how much food they need, so it's worth knowing.">
          <div className="flex flex-wrap gap-3">
            <Toggle on={neutered} onClick={() => setNeutered(true)} label="Yes" />
            <Toggle on={!neutered} onClick={() => setNeutered(false)} label="No, or not sure" />
          </div>
        </Field>

        <Field label="Roughly what do they weigh?" hint="In kilograms. A rough figure is fine to start with.">
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            inputMode="decimal"
            placeholder="18.5"
            className="h-14 w-40 rounded-2xl border border-border bg-card px-5 text-[1.0625rem] tabular-nums outline-none transition-colors focus:border-accent"
          />
        </Field>

        <Field label="How active are they?">
          <Choices options={activities} value={activity} onChange={setActivity} />
        </Field>

        <Field
          label="And how do they look right now?"
          hint="Feel along their ribs and look down from above. There's a proper guide in Weight & shape."
        >
          <Choices options={conditions} value={bodyCondition} onChange={setBodyCondition} />
        </Field>

        <Field label="What do you feed?">
          <Choices options={foodTypes} value={foodType} onChange={setFoodType} />
        </Field>

        <Field
          label="Calories per 100g, if the bag says"
          hint="Usually printed as kcal/100g. Leave it blank and we'll use a typical figure for that kind of food."
        >
          <div className="flex flex-wrap items-center gap-3">
            <input
              value={foodEnergy}
              onChange={(e) => setFoodEnergy(e.target.value)}
              inputMode="numeric"
              placeholder={String(defaultEnergy[foodType])}
              className="h-14 w-40 rounded-2xl border border-border bg-card px-5 text-[1.0625rem] tabular-nums outline-none transition-colors focus:border-accent"
            />
            <span className="text-muted-foreground">kcal per 100g</span>
          </div>
        </Field>

        <Field label="How many meals a day?">
          <div className="flex flex-wrap gap-3">
            {["1", "2", "3", "4"].map((n) => (
              <Toggle key={n} on={meals === n} onClick={() => setMeals(n)} label={n} />
            ))}
          </div>
        </Field>

        <Field label="Your vet" hint="Kept here so you're not searching for it when you need it.">
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              value={vetName}
              onChange={(e) => setVetName(e.target.value)}
              placeholder="Practice name"
              className="h-14 rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
            />
            <input
              value={vetPhone}
              onChange={(e) => setVetPhone(e.target.value)}
              placeholder="Phone number"
              inputMode="tel"
              className="h-14 rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
            />
            <input
              value={emergencyPhone}
              onChange={(e) => setEmergencyPhone(e.target.value)}
              placeholder="Out-of-hours number"
              inputMode="tel"
              className="h-14 rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
            />
          </div>
        </Field>

        <Field label="Anything else worth remembering?" hint="Allergies, medication, things they can't have.">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            placeholder="Reacts to chicken. On joint supplements."
            className="w-full rounded-2xl border border-border bg-card px-5 py-4 text-[1.0625rem] leading-relaxed outline-none transition-colors focus:border-accent"
          />
        </Field>
      </div>

      <div className="sticky bottom-20 mt-14 flex items-center gap-3 border-t border-border bg-background/90 py-5 backdrop-blur-xl lg:bottom-0">
        <Button tone="ghost" onClick={() => void navigate({ to: "/my-dog" })}>
          Not now
        </Button>
        <Button size="lg" className="ml-auto" onClick={save}>
          Save
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
  options: Option<T>[];
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
