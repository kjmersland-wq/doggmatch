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

function rows(c: CompareCopy): [string, (id: BreedId) => string][] {
  const s = (v: number) => c.scale[v - 1] ?? "—";
  return [
    [c.rows.size, (id) => s(t(id).size)],
    [c.rows.energy, (id) => s(t(id).energy)],
    [c.rows.exercise, (id) => s(t(id).exerciseNeeds)],
    [c.rows.mental, (id) => s(t(id).mentalStimulation)],
    [c.rows.trainability, (id) => s(t(id).trainability)],
    [c.rows.learning, (id) => s(t(id).learningAbility)],
    [c.rows.sociability, (id) => s(t(id).sociability)],
    [c.rows.affection, (id) => s(t(id).affection)],
    [c.rows.shedding, (id) => s(t(id).shedding)],
    [c.rows.grooming, (id) => s(t(id).grooming)],
    [c.rows.barking, (id) => s(t(id).barking)],
    [c.rows.children, (id) => s(t(id).goodWithChildren)],
    [c.rows.pets, (id) => s(t(id).goodWithPets)],
    [c.rows.flat, (id) => s(t(id).apartmentSuitability)],
    [c.rows.firstDog, (id) => s(t(id).firstTimeSuitability)],
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
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[38rem] border-collapse text-left">
            <caption className="sr-only">{copy.compare.title}</caption>
            <thead>
              <tr>
                <th scope="col" className="w-40 align-bottom pb-6 pr-6" />
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
                <tr key={label} className="border-t border-border">
                  <th scope="row" className="py-4 pr-6 text-sm font-normal text-muted-foreground">
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
      )}

      <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {copy.allergyNote}
      </p>
    </div>
  );
}
