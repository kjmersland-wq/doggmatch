import { Link } from "@tanstack/react-router";
import { Check, Plus } from "lucide-react";
import { breedImages } from "@/data/breed-images";
import { knownBreedIds } from "@/lib/dogs/profile";
import { careStore, useCareState } from "@/lib/care/store";
import { careDue } from "@/lib/care/calendar";
import { kindLabel, type WeekDay } from "@/lib/care/week";
import { trainingStore, useTrainingState, type DogProfile } from "@/lib/training/store";
import { useCopy } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";

const copy = {
  en: { anotherDog: "Another dog", markDone: "Mark {label} as done", today: "Today" },
  no: { anotherDog: "Legg til hund", markDone: "Merk {label} som gjort", today: "I dag" },
  pl: { anotherDog: "Dodaj kolejnego psa", markDone: "Oznacz {label} jako zrobione", today: "Dziś" },
} as const;

/** Switch between the dogs you've added, without leaving the page. */
export function DogSwitcher({ active }: { active?: DogProfile }) {
  const c = useCopy(copy);
  const { dogs } = useTrainingState();
  if (dogs.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {dogs.map((dog) => {
        const on = dog.id === active?.id;
        const photoBreed = knownBreedIds(dog)[0];
        const photo = photoBreed ? breedImages[photoBreed] : undefined;
        return (
          <button
            key={dog.id}
            type="button"
            onClick={() => trainingStore.setActiveDog(dog.id)}
            aria-pressed={on}
            className={`inline-flex items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-4 text-sm transition-colors ${
              on
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"
            }`}
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center overflow-hidden rounded-full bg-surface text-[0.7rem] font-semibold text-foreground">
              {photo ? (
                <img src={photo} alt="" width={56} height={56} className="h-full w-full object-cover" />
              ) : (
                dog.name.slice(0, 1).toUpperCase()
              )}
            </span>
            {dog.name}
          </button>
        );
      })}
      <Link
        to={withLangPrefix("/my-dog/setup")}
        className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
      >
        <Plus className="h-3.5 w-3.5" />
        {c.anotherDog}
      </Link>
    </div>
  );
}

/** The gentle care calendar: what's coming round again, in plain words. */
export function CareCalendar({ dog }: { dog?: DogProfile }) {
  const c = useCopy(copy);
  const state = useCareState();
  const items = careDue(dog, state);

  return (
    <ul className="grid gap-2">
      {items.map((task) => (
        <li
          key={task.id}
          className="flex items-center gap-3 rounded-[1rem] border border-border bg-surface px-4 py-3"
        >
          <span className="min-w-0 flex-1">
            <span className="block text-[0.9375rem]">{task.label}</span>
            <span className="block text-sm text-muted-foreground">{task.line}</span>
          </span>
          {task.due && dog && (
            <button
              type="button"
              onClick={() => careStore.markDone(dog.id, task.id)}
              aria-label={c.markDone.replace("{label}", task.label)}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border-strong text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Check className="h-4 w-4" />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

/** A compact read of the coming week, three days at a time. */
export function WeekStrip({ week, todayIndex }: { week: WeekDay[]; todayIndex: number }) {
  const c = useCopy(copy);
  const ordered = [...week.slice(todayIndex), ...week.slice(0, todayIndex)].slice(0, 3);
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {ordered.map((day, i) => (
        <div key={day.index} className="rounded-[1.2rem] border border-border bg-surface p-4">
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {i === 0 ? c.today : day.name}
          </p>
          <ul className="mt-3 grid gap-2">
            {day.items.slice(0, 4).map((item) => (
              <li key={item.id} className="text-[0.9375rem] leading-snug">
                <span className="mr-2 text-xs uppercase tracking-[0.12em] text-accent">
                  {kindLabel(item.kind)}
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}