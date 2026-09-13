import { useState } from "react";
import { Stat } from "@/components/dogmatch/care/parts";
import { estimatePortions } from "@/lib/care/portions";
import {
  careStore,
  useCareProfile,
  type ActivityLevel,
  type BodyCondition,
  type CareProfile,
} from "@/lib/care/store";
import type { AgeStage } from "@/data/care/types";
import { useCopy } from "@/i18n";
import { cn } from "@/lib/utils";

/**
 * The portion calculator: everything that goes into the number is on screen,
 * editable, and saved against the dog so the rest of My Dog stays in step.
 */

const copy = {
  en: {
    weight: "Weight today",
    age: "Life stage",
    activity: "A normal day",
    condition: "Body shape right now",
    foodEnergy: "Energy of the food",
    foodEnergyHint: "kcal per 100 g — it's on the bag, usually in small print",
    meals: "Meals a day",
    brand: "Food brand or type",
    brandHint: "Just so you remember what these numbers were based on",
    brandPlaceholder: "e.g. Acana Adult, dry",
    ages: { puppy: "Puppy", adolescent: "Adolescent", adult: "Adult", senior: "Senior" } as Record<AgeStage, string>,
    activities: { gentle: "Gentle", moderate: "Normal", busy: "Busy" } as Record<ActivityLevel, string>,
    conditions: { thin: "A little lean", ideal: "About right", heavy: "A little heavy" } as Record<BodyCondition, string>,
    needWeight: "Add a weight above and the numbers appear straight away.",
    day: "A day",
    foodDay: "Food a day",
    foodDayHintWeighed: "Weighed, not scooped",
    foodDayHintMissing: "Add the kcal/100 g to see grams",
    perMeal: "Per meal",
    perMealHint: (n: number) => `Across ${n} meals`,
    mathsTitle: "The maths, in full",
    maths: (w: number, resting: number, factor: number, kcal: number) =>
      `70 × ${w}^0.75 = ${resting} kcal at rest. × ${factor} for the choices above = ${kcal} kcal a day.`,
    treats: (t: number) => `Keep treats near ${t} kcal a day and take them out of the meals, not on top.`,
    savedTo: (name: string) => `Saved to ${name}'s profile`,
    notSaved: "Add your dog to save these settings.",
  },
  no: {
    weight: "Vekt i dag",
    age: "Livsfase",
    activity: "En vanlig dag",
    condition: "Hold akkurat nå",
    foodEnergy: "Energi i maten",
    foodEnergyHint: "kcal per 100 g — står på posen, ofte med liten skrift",
    meals: "Måltider per dag",
    brand: "Merke eller type mat",
    brandHint: "Bare så du husker hva tallene bygger på",
    brandPlaceholder: "f.eks. Acana Adult, tørrfôr",
    ages: { puppy: "Valp", adolescent: "Ungdom", adult: "Voksen", senior: "Senior" } as Record<AgeStage, string>,
    activities: { gentle: "Rolig", moderate: "Vanlig", busy: "Travel" } as Record<ActivityLevel, string>,
    conditions: { thin: "Litt tynn", ideal: "Passe", heavy: "Litt tung" } as Record<BodyCondition, string>,
    needWeight: "Legg inn en vekt over, så dukker tallene opp med en gang.",
    day: "Per dag",
    foodDay: "Mat per dag",
    foodDayHintWeighed: "Veid, ikke øst opp",
    foodDayHintMissing: "Legg inn kcal/100 g for å se gram",
    perMeal: "Per måltid",
    perMealHint: (n: number) => `Fordelt på ${n} måltider`,
    mathsTitle: "Hele regnestykket",
    maths: (w: number, resting: number, factor: number, kcal: number) =>
      `70 × ${w}^0,75 = ${resting} kcal i hvile. × ${factor} for valgene over = ${kcal} kcal per dag.`,
    treats: (t: number) => `Hold godbiter rundt ${t} kcal per dag, og ta det fra måltidene i stedet for å legge det på toppen.`,
    savedTo: (name: string) => `Lagret i profilen til ${name}`,
    notSaved: "Legg til hunden din for å lagre disse innstillingene.",
  },
  pl: {
    weight: "Waga dzisiaj",
    age: "Etap życia",
    activity: "Zwykły dzień",
    condition: "Sylwetka teraz",
    foodEnergy: "Energia karmy",
    foodEnergyHint: "kcal na 100 g — jest na opakowaniu, zwykle małym drukiem",
    meals: "Posiłki dziennie",
    brand: "Marka lub rodzaj karmy",
    brandHint: "Żebyś pamiętał, na czym oparte są te liczby",
    brandPlaceholder: "np. Acana Adult, sucha",
    ages: { puppy: "Szczenię", adolescent: "Nastolatek", adult: "Dorosły", senior: "Senior" } as Record<AgeStage, string>,
    activities: { gentle: "Spokojny", moderate: "Zwykły", busy: "Aktywny" } as Record<ActivityLevel, string>,
    conditions: { thin: "Trochę szczupły", ideal: "W sam raz", heavy: "Trochę ciężki" } as Record<BodyCondition, string>,
    needWeight: "Podaj wagę powyżej, a liczby pojawią się od razu.",
    day: "Dziennie",
    foodDay: "Karma dziennie",
    foodDayHintWeighed: "Zważone, nie na oko",
    foodDayHintMissing: "Dodaj kcal/100 g, aby zobaczyć gramy",
    perMeal: "Na posiłek",
    perMealHint: (n: number) => `W ${n} posiłkach`,
    mathsTitle: "Całe obliczenie",
    maths: (w: number, resting: number, factor: number, kcal: number) =>
      `70 × ${w}^0,75 = ${resting} kcal w spoczynku. × ${factor} za powyższe wybory = ${kcal} kcal dziennie.`,
    treats: (t: number) => `Trzymaj przysmaki w okolicy ${t} kcal dziennie i odejmij je od posiłków, zamiast dodawać.`,
    savedTo: (name: string) => `Zapisano w profilu psa ${name}`,
    notSaved: "Dodaj swojego psa, aby zapisać te ustawienia.",
  },
} as const;

const fieldClass =
  "h-12 w-full rounded-2xl border border-border bg-surface px-4 text-[0.9375rem] tabular-nums outline-none transition-colors focus:border-accent";

function Label({ children, hint }: { children: string; hint?: string }) {
  return (
    <span className="block">
      <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">{children}</span>
      {hint && <span className="mt-1 block text-sm text-muted-foreground">{hint}</span>}
    </span>
  );
}

function Choice<T extends string>({
  value,
  options,
  labels,
  onChange,
}: {
  value: T;
  options: readonly T[];
  labels: Record<T, string>;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          aria-pressed={o === value}
          onClick={() => onChange(o)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm transition-colors",
            o === value
              ? "border-accent bg-accent-soft text-accent"
              : "border-border bg-surface text-muted-foreground hover:border-border-strong",
          )}
        >
          {labels[o]}
        </button>
      ))}
    </div>
  );
}

export function PortionCalculator({
  dogId,
  dogName,
  ageStage = "adult",
}: {
  dogId?: string;
  dogName?: string;
  ageStage?: AgeStage;
}) {
  const c = useCopy(copy);
  const saved = useCareProfile(dogId);

  // Local draft so the page works before a dog exists; saved straight away when one does.
  const [draft, setDraft] = useState<CareProfile & { ageStage?: AgeStage }>({});
  const profile: CareProfile & { ageStage?: AgeStage } = { ...saved, ...draft };

  function patch(next: Partial<CareProfile & { ageStage?: AgeStage }>) {
    setDraft((d) => ({ ...d, ...next }));
    if (dogId) careStore.saveProfile(dogId, next as Partial<CareProfile>);
  }

  const stage: AgeStage = profile.ageStage ?? ageStage;
  const activity: ActivityLevel = profile.activity ?? "moderate";
  const condition: BodyCondition = profile.bodyCondition ?? "ideal";
  const meals = profile.mealsPerDay ?? (stage === "puppy" ? 3 : 2);

  const portions = estimatePortions(profile.weightKg, stage, { ...profile, mealsPerDay: meals });

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <Label>{c.weight}</Label>
          <div className="mt-2 flex items-center gap-3">
            <input
              className={fieldClass}
              inputMode="decimal"
              placeholder="18.5"
              value={profile.weightKg || ""}
              onChange={(e) => {
                const kg = Number.parseFloat(e.target.value);
                const ok = Number.isFinite(kg) && kg > 0;
                patch(ok ? { weightKg: Math.round(kg * 10) / 10 } : { weightKg: 0 });
              }}
            />
            <span className="text-muted-foreground">kg</span>
          </div>
        </label>

        <div>
          <Label>{c.age}</Label>
          <div className="mt-3">
            <Choice
              value={stage}
              options={["puppy", "adolescent", "adult", "senior"] as const}
              labels={c.ages}
              onChange={(v) => patch({ ageStage: v })}
            />
          </div>
        </div>

        <div>
          <Label>{c.activity}</Label>
          <div className="mt-3">
            <Choice
              value={activity}
              options={["gentle", "moderate", "busy"] as const}
              labels={c.activities}
              onChange={(v) => patch({ activity: v })}
            />
          </div>
        </div>

        <div>
          <Label>{c.condition}</Label>
          <div className="mt-3">
            <Choice
              value={condition}
              options={["thin", "ideal", "heavy"] as const}
              labels={c.conditions}
              onChange={(v) => patch({ bodyCondition: v })}
            />
          </div>
        </div>

        <label className="block">
          <Label hint={c.foodEnergyHint}>{c.foodEnergy}</Label>
          <input
            className={cn(fieldClass, "mt-2")}
            inputMode="numeric"
            placeholder="365"
            value={profile.foodEnergy || ""}
            onChange={(e) => {
              const v = Number.parseInt(e.target.value, 10);
              patch({ foodEnergy: Number.isFinite(v) && v > 0 ? v : 0 });
            }}
          />
        </label>

        <div>
          <Label>{c.meals}</Label>
          <div className="mt-3">
            <Choice
              value={String(meals) as "1" | "2" | "3" | "4"}
              options={["1", "2", "3", "4"] as const}
              labels={{ "1": "1", "2": "2", "3": "3", "4": "4" }}
              onChange={(v) => patch({ mealsPerDay: Number.parseInt(v, 10) })}
            />
          </div>
        </div>

        <label className="block md:col-span-2">
          <Label hint={c.brandHint}>{c.brand}</Label>
          <input
            className={cn(fieldClass, "mt-2 tracking-normal")}
            placeholder={c.brandPlaceholder}
            value={profile.foodBrand ?? ""}
            onChange={(e) => patch({ foodBrand: e.target.value })}
          />
        </label>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        {dogId && dogName ? c.savedTo(dogName) : c.notSaved}
      </p>

      {portions ? (
        <>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Stat label={c.day} value={`${portions.dailyKcal} kcal`} hint={portions.factorReason} />
            <Stat
              label={c.foodDay}
              value={portions.gramsPerDay ? `${portions.gramsPerDay} g` : "—"}
              hint={portions.gramsPerDay ? c.foodDayHintWeighed : c.foodDayHintMissing}
            />
            <Stat
              label={c.perMeal}
              value={portions.gramsPerMeal ? `${portions.gramsPerMeal} g` : "—"}
              hint={c.perMealHint(portions.mealsPerDay)}
            />
          </div>
          <div className="mt-6 rounded-[1.25rem] border border-border bg-surface p-6">
            <h3 className="font-display text-lg tracking-tight">{c.mathsTitle}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.maths(profile.weightKg!, portions.restingKcal, portions.factor, portions.dailyKcal)}
            </p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.treats(portions.treatKcal)}
            </p>
          </div>
        </>
      ) : (
        <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted-foreground">{c.needWeight}</p>
      )}
    </div>
  );
}
