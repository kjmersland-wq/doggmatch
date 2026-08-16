import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { breeds } from "@/data/breeds";
import { trainingGoals } from "@/data/training/categories";
import type { AgeStage, GoalId, Level } from "@/data/training/types";
import type { BreedId } from "@/data/breeds";
import { Arrow, Button, Eyebrow } from "@/components/dogmatch/ui";
import { trainingStore, useActiveDog } from "@/lib/training/store";
import { cn } from "@/lib/utils";
import { useCopy } from "@/i18n";

const title = "Tell us about your dog — Training | DoggMatch";
const description =
  "A few friendly questions about your dog, so the training we suggest actually fits the two of you.";

export const Route = createFileRoute("/train/setup")({
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
    links: [{ rel: "canonical", href: "/train/setup" }],
  }),
  component: SetupPage,
});

const copy = {
  en: {
    eyebrow: "Your dog",
    title: "Tell us a little about your dog.",
    intro:
      "Only so the training we suggest actually fits the two of you. It stays on this device, and you can change any of it later.",
    nameLabel: "What's their name?",
    namePlaceholder: "Luna",
    breedLabel: "Do you know the breed?",
    breedHint: "If they're a lovely mix, just tell us what you'd call them.",
    breedNotListed: "Not from this list",
    breedOtherPlaceholder: "Terrier mix",
    ageLabel: "How old is your dog?",
    experienceLabel: "How much training have you done before?",
    levelLabel: "And where are the two of you right now?",
    goalsLabel: "What would you most like to work on together?",
    goalsHint: "Pick as many as you like. Nothing is locked in.",
    notNow: "Not now",
    save: "Save and start training",
    ageStages: [
      { value: "puppy" as const, label: "A puppy", hint: "Up to about six months" },
      { value: "adolescent" as const, label: "A teenager", hint: "Roughly six months to two years" },
      { value: "adult" as const, label: "Grown up", hint: "Somewhere in the middle years" },
      { value: "senior" as const, label: "Getting older", hint: "Slowing down a little" },
    ],
    experiences: [
      { value: "first-dog" as const, label: "This is my first dog", hint: "We'll keep everything simple" },
      { value: "some" as const, label: "I've had a dog before", hint: "You know your way around a treat pouch" },
      { value: "lots" as const, label: "I've trained a fair bit", hint: "Happy to go a bit further" },
    ],
    levels: [
      { value: "beginner" as const, label: "We're just starting", hint: "Almost everything is new" },
      { value: "building" as const, label: "A few things are coming along", hint: "Some days are better than others" },
      { value: "intermediate" as const, label: "The basics are solid", hint: "Ready for distractions" },
      { value: "advanced" as const, label: "We train a lot", hint: "Looking for something more" },
    ],
  },
  no: {
    eyebrow: "Hunden din",
    title: "Fortell oss litt om hunden din.",
    intro:
      "Bare så treningen vi foreslår faktisk passer dere to. Det blir liggende på denne enheten, og du kan endre alt senere.",
    nameLabel: "Hva heter hunden?",
    namePlaceholder: "Luna",
    breedLabel: "Vet du hvilken rase?",
    breedHint: "Er det en fin blanding, bare fortell oss hva du kaller den.",
    breedNotListed: "Ikke på denne listen",
    breedOtherPlaceholder: "Terrierblanding",
    ageLabel: "Hvor gammel er hunden din?",
    experienceLabel: "Hvor mye trening har du gjort før?",
    levelLabel: "Og hvor er dere to akkurat nå?",
    goalsLabel: "Hva vil dere helst jobbe med sammen?",
    goalsHint: "Velg så mange du vil. Ingenting er bindende.",
    notNow: "Ikke nå",
    save: "Lagre og start treningen",
    ageStages: [
      { value: "puppy" as const, label: "En valp", hint: "Opptil rundt seks måneder" },
      { value: "adolescent" as const, label: "En tenåring", hint: "Cirka seks måneder til to år" },
      { value: "adult" as const, label: "Voksen", hint: "Et sted i de midtre årene" },
      { value: "senior" as const, label: "Blir eldre", hint: "Roer seg litt ned" },
    ],
    experiences: [
      { value: "first-dog" as const, label: "Dette er min første hund", hint: "Vi holder alt enkelt" },
      { value: "some" as const, label: "Jeg har hatt hund før", hint: "Du kjenner godteriposen godt" },
      { value: "lots" as const, label: "Jeg har trent en god del", hint: "Gjerne litt lenger" },
    ],
    levels: [
      { value: "beginner" as const, label: "Vi er akkurat i gang", hint: "Nesten alt er nytt" },
      { value: "building" as const, label: "Noen ting begynner å sitte", hint: "Noen dager er bedre enn andre" },
      { value: "intermediate" as const, label: "Grunnlaget sitter godt", hint: "Klare for forstyrrelser" },
      { value: "advanced" as const, label: "Vi trener mye", hint: "Ser etter noe mer" },
    ],
  },
} as const;

function SetupPage() {
  const c = useCopy(copy);
  const navigate = useNavigate();
  const existing = useActiveDog();
  const [name, setName] = useState(existing?.name ?? "");
  const [breedId, setBreedId] = useState<BreedId | "">(existing?.breedId ?? "");
  const [breedOther, setBreedOther] = useState(existing?.breedOther ?? "");
  const [ageStage, setAgeStage] = useState<AgeStage>(existing?.ageStage ?? "puppy");
  const [experience, setExperience] = useState(existing?.experience ?? "first-dog");
  const [level, setLevel] = useState<Level>(existing?.level ?? "beginner");
  const [goals, setGoals] = useState<GoalId[]>(existing?.goals ?? []);

  function toggleGoal(id: GoalId) {
    setGoals((g) => (g.includes(id) ? g.filter((x) => x !== id) : [...g, id]));
  }

  function save() {
    trainingStore.saveDog({
      ...(existing?.id ? { id: existing.id } : {}),
      name: name.trim() || "your dog",
      ...(breedId ? { breedId } : {}),
      ...(breedOther.trim() ? { breedOther: breedOther.trim() } : {}),
      ageStage,
      experience,
      level,
      goals,
    });
    void navigate({ to: "/train" });
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

        <Field label={c.breedLabel} hint={c.breedHint}>
          <div className="flex flex-wrap gap-3">
            <select
              value={breedId}
              onChange={(e) => setBreedId(e.target.value as BreedId | "")}
              className="h-14 rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none focus:border-accent"
            >
              <option value="">{c.breedNotListed}</option>
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
                placeholder={c.breedOtherPlaceholder}
                className="h-14 w-full max-w-xs rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
              />
            )}
          </div>
        </Field>

        <Field label={c.ageLabel}>
          <Choices options={c.ageStages} value={ageStage} onChange={(v) => setAgeStage(v as AgeStage)} />
        </Field>

        <Field label={c.experienceLabel}>
          <Choices
            options={c.experiences}
            value={experience}
            onChange={(v) => setExperience(v as typeof experience)}
          />
        </Field>

        <Field label={c.levelLabel}>
          <Choices options={c.levels} value={level} onChange={(v) => setLevel(v as Level)} />
        </Field>

        <Field label={c.goalsLabel} hint={c.goalsHint}>
          <div className="flex flex-wrap gap-3">
            {trainingGoals.map((g) => {
              const on = goals.includes(g.id);
              return (
                <button
                  key={g.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleGoal(g.id)}
                  className={cn(
                    "min-h-14 rounded-2xl border px-5 py-3 text-left transition-all duration-300",
                    on
                      ? "border-accent bg-accent-soft/70 shadow-[var(--shadow-soft)]"
                      : "border-border bg-card hover:border-border-strong",
                  )}
                >
                  <span className="block font-display text-[1.0625rem] leading-tight tracking-tight">
                    {g.label}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">{g.hint}</span>
                </button>
              );
            })}
          </div>
        </Field>
      </div>

      <div className="sticky bottom-20 mt-14 flex items-center gap-3 border-t border-border bg-background/90 py-5 backdrop-blur-xl lg:bottom-0">
        <Button tone="ghost" onClick={() => void navigate({ to: "/train" })}>
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

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-2xl leading-tight tracking-tight">{label}</h2>
      {hint && <p className="mt-2 text-sm text-muted-foreground">{hint}</p>}
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Choices({
  options,
  value,
  onChange,
}: {
  options: readonly { value: string; label: string; hint: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((o) => {
        const on = value === o.value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(o.value)}
            className={cn(
              "min-h-16 rounded-2xl border px-5 py-4 text-left transition-all duration-300",
              on
                ? "border-accent bg-accent-soft/70 shadow-[var(--shadow-soft)]"
                : "border-border bg-card hover:border-border-strong",
            )}
          >
            <span className="block font-display text-[1.0625rem] leading-tight tracking-tight">
              {o.label}
            </span>
            <span className="mt-1 block text-sm text-muted-foreground">{o.hint}</span>
          </button>
        );
      })}
    </div>
  );
}
