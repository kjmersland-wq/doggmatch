import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { useT } from "@/i18n";
import { breeds, type BreedId } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { Eyebrow } from "@/components/dogmatch/ui";
import { cn } from "@/lib/utils";

const title = "Compare dogs side by side | DoggMatch";
const description =
  "Torn between a few dogs? Put up to three side by side and see where they really differ — energy, shedding, grooming, lifespan and yearly cost.";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/compare" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/compare" }],
  }),
  component: ComparePage,
});

type CompareCopy = ReturnType<typeof useT>["compare"];

function levelClass(value: number) {
  switch (value) {
    case 1:
    case 2:
      return "bg-level-low";
    case 3:
      return "bg-level-medium";
    case 4:
      return "bg-level-high";
    case 5:
      return "bg-level-very-high";
    default:
      return "bg-muted-foreground";
  }
}

function LevelDot({
  value,
  label,
  size = "md",
}: {
  value: number;
  label: string;
  size?: "sm" | "md";
}) {
  const sizeClass = size === "sm" ? "h-3 w-3" : "h-4 w-4";
  return (
    <span
      className={cn(
        "inline-block shrink-0 rounded-full ring-2 ring-background",
        sizeClass,
        levelClass(value),
      )}
      aria-label={label}
      title={label}
    />
  );
}

function CompareLegend({ c }: { c: CompareCopy }) {
  const items: { value: number; label: string }[] = [
    { value: 2, label: c.legend.low },
    { value: 3, label: c.legend.medium },
    { value: 4, label: c.legend.high },
    { value: 5, label: c.legend.veryHigh },
  ];

  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-border bg-card p-4 text-sm">
      <span className="font-medium text-foreground">{c.legendTitle}</span>
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2 text-muted-foreground">
          <LevelDot value={item.value} label={item.label} size="sm" />
          <span>{item.label}</span>
        </span>
      ))}
    </div>
  );
}

function rows(c: CompareCopy): [string, (id: BreedId) => ReactNode][] {
  const s = (v: number) => c.scale[v - 1] ?? "—";
  const cell = (v: number) => <LevelDot value={v} label={s(v)} />;
  return [
    [c.rows.size, (id) => cell(t(id).size)],
    [c.rows.energy, (id) => cell(t(id).energy)],
    [c.rows.exercise, (id) => cell(t(id).exerciseNeeds)],
    [c.rows.mental, (id) => cell(t(id).mentalStimulation)],
    [c.rows.trainability, (id) => cell(t(id).trainability)],
    [c.rows.learning, (id) => cell(t(id).learningAbility)],
    [c.rows.sociability, (id) => cell(t(id).sociability)],
    [c.rows.affection, (id) => cell(t(id).affection)],
    [c.rows.shedding, (id) => cell(t(id).shedding)],
    [c.rows.grooming, (id) => cell(t(id).grooming)],
    [c.rows.barking, (id) => cell(t(id).barking)],
    [c.rows.children, (id) => cell(t(id).goodWithChildren)],
    [c.rows.pets, (id) => cell(t(id).goodWithPets)],
    [c.rows.flat, (id) => cell(t(id).apartmentSuitability)],
    [c.rows.firstDog, (id) => cell(t(id).firstTimeSuitability)],
    [
      c.rows.lifespan,
      (id) => {
        const b = breeds.find((x) => x.id === id)!;
        return `${b.lifespan[0]}–${b.lifespan[1]} ${c.years}`;
      },
    ],
    [
      c.rows.cost,
      (id) => {
        const b = breeds.find((x) => x.id === id)!;
        return `€${b.annualCost[0]}–${b.annualCost[1]}`;
      },
    ],
  ];
}

function t(id: BreedId) {
  return breeds.find((b) => b.id === id)!.traits;
}

function ComparePage() {
  const copy = useT();
  const [selected, setSelected] = useState<BreedId[]>([
    "labrador-retriever",
    "golden-retriever",
    "poodle",
  ]);

  function toggle(id: BreedId) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((x) => x !== id)
        : current.length >= 3
          ? [...current.slice(1), id]
          : [...current, id],
    );
  }

  return (
    <div className="container-page py-14 md:py-20">
      <Eyebrow>{copy.nav.compare}</Eyebrow>
      <h1 className="display-lg mt-6 max-w-2xl">{copy.compare.subtitle}</h1>

      <ul className="mt-10 flex flex-wrap gap-2">
        {breeds.map((b) => {
          const active = selected.includes(b.id);
          return (
            <li key={b.id}>
              <button
                type="button"
                aria-pressed={active}
                onClick={() => toggle(b.id)}
                className={cn(
                  "min-h-11 rounded-full border px-4 text-sm transition-colors",
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border-strong hover:bg-surface",
                )}
              >
                {breedContent()[b.id].displayName}
              </button>
            </li>
          );
        })}
      </ul>

      {selected.length === 0 ? (
        <p className="mt-16 text-muted-foreground">{copy.compare.empty}</p>
      ) : (
        <>
          <CompareLegend c={copy.compare} />
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[38rem] border-collapse text-left">
                <caption className="sr-only">{copy.compare.title}</caption>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="sticky left-0 z-10 w-40 border-r border-border bg-card pb-6 pr-6 align-bottom"
                    />
                    {selected.map((id) => (
                      <th key={id} scope="col" className="pb-6 pr-6 align-bottom">
                        <img
                          src={breedImages[id]}
                          alt={breedContent()[id].displayName}
                          width={1024}
                          height={1280}
                          loading="lazy"
                          className="aspect-square w-full max-w-36 rounded-xl object-cover"
                        />
                        <span className="mt-3 block font-display text-base font-medium leading-tight">
                          {breedContent()[id].displayName}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows(copy.compare).map(([label, render]) => (
                    <tr
                      key={label}
                      className="border-t border-border transition-colors hover:bg-surface"
                    >
                      <th
                        scope="row"
                        className="sticky left-0 z-10 border-r border-border bg-card py-4 pr-6 text-sm font-normal whitespace-nowrap text-muted-foreground"
                      >
                        {label}
                      </th>
                      {selected.map((id) => (
                        <td key={id} className="py-4 pr-6 text-[0.9375rem]">
                          {render(id)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {copy.allergyNote}
      </p>
    </div>
  );
}
