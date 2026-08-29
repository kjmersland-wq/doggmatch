import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { useT, useCopy } from "@/i18n";
import { breeds, breedById, type BreedId, type BreedTraits } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { combineBreedTraits } from "@/lib/dogs/profile";
import { matchDogTraits } from "@/lib/matching/engine";
import { matchInsights, scoreReading } from "@/lib/matching/insights";
import { useMatchProfile } from "@/lib/matching/store";
import { Eyebrow } from "@/components/dogmatch/ui";
import { JourneyLinks } from "@/components/dogmatch/journey-links";
import { cn } from "@/lib/utils";
import { seoLinks, abs } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

const personalCopy = {
  en: {
    title: "Which of these fits your life best?",
    prompt:
      "Answer the Find My Dog questions and this table will read itself against your own days — not just breed statistics.",
    promptCta: "Answer the questions",
    based: "Based on the answers you gave in Find My Dog, kept on this device.",
    bestLabel: "Best fit of the three",
    watch: "Worth thinking about",
    fine: "Nothing here worked against you.",
  },
  no: {
    title: "Hvilken av disse passer livet ditt best?",
    prompt:
      "Svar på spørsmålene i Finn min hund, så leser denne tabellen seg selv opp mot dine egne dager — ikke bare rasestatistikk.",
    promptCta: "Svar på spørsmålene",
    based: "Basert på svarene du ga i Finn min hund, lagret på denne enheten.",
    bestLabel: "Passer best av disse",
    watch: "Verdt å tenke på",
    fine: "Ingenting her talte imot deg.",
  },
};

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
      { property: "og:url", content: abs("/compare") },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: seoLinks("/compare"),
  }),
  component: ComparePage,
});

type CompareCopy = ReturnType<typeof useT>["compare"];

/** A column in the table: one breed, or a deterministic two-breed cross. */
type Column =
  | { kind: "breed"; id: BreedId }
  | { kind: "mix"; ids: [BreedId, BreedId] };

const columnKey = (c: Column) => (c.kind === "breed" ? c.id : `mix:${c.ids.join("+")}`);

function columnName(c: Column, copy: CompareCopy) {
  const names = breedContent();
  return c.kind === "breed"
    ? names[c.id].displayName
    : `${names[c.ids[0]].displayName} × ${names[c.ids[1]].displayName}`;
}

/**
 * Traits behind a column. A mix reuses the same deterministic cross logic the
 * rest of DoggMatch uses — no separate maths, no guessing.
 */
function columnTraits(c: Column): BreedTraits {
  if (c.kind === "breed") return breedById[c.id].traits;
  return combineBreedTraits(c.ids) ?? breedById[c.ids[0]].traits;
}

/** Ranges span both parents, so a cross reads as the honest span it is. */
function columnRange(c: Column, key: "lifespan" | "annualCost"): [number, number] {
  const ids = c.kind === "breed" ? [c.id] : c.ids;
  const values = ids.map((id) => breedById[id][key]);
  return [
    Math.min(...values.map((v) => v[0])),
    Math.max(...values.map((v) => v[1])),
  ];
}

function levelClass(value: number) {
  switch (value) {
    case 1:
    case 2:
      return "bg-level-low";
    case 3:
      return "bg-level-medium";
    case 4:
    case 5:
      return "bg-level-high";
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
    { value: 5, label: c.legend.high },
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

/**
 * The same table, read against the reader's own answers. Only appears once
 * they've been through Find My Dog — otherwise it quietly invites them to.
 */
function PersonalFit({ columns, names }: { columns: Column[]; names: Record<BreedId, { displayName: string }> }) {
  const p = useCopy(personalCopy);
  const profile = useMatchProfile();

  if (!profile) {
    return (
      <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-surface p-6">
        <h2 className="font-display text-lg leading-tight tracking-tight">{p.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.prompt}</p>
        <Link
          to="/find-my-dog"
          className="mt-4 inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {p.promptCta}
        </Link>
      </div>
    );
  }

  const scored = columns.map((col) => {
    const traits = columnTraits(col);
    const fit = matchDogTraits(traits, profile, { individual: col.kind === "mix" });
    const { tradeoffs } = matchInsights(traits, profile);
    const label =
      col.kind === "breed"
        ? names[col.id].displayName
        : `${names[col.ids[0]].displayName} × ${names[col.ids[1]].displayName}`;
    return { key: columnKey(col), label, fit, tradeoff: tradeoffs[0]?.text };
  });
  const top = Math.max(...scored.map((s) => s.fit.score));

  return (
    <section className="mt-8">
      <h2 className="display-md">{p.title}</h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{p.based}</p>
      <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {scored.map((item) => (
          <li key={item.key} className="bg-card p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-base leading-tight tracking-tight">{item.label}</h3>
              <span className="font-display text-sm tabular-nums text-muted-foreground">
                {item.fit.score}%
              </span>
            </div>
            {item.fit.score === top && (
              <p className="mt-2 text-xs font-medium tracking-wide text-accent uppercase">
                {p.bestLabel}
              </p>
            )}
            <p className="mt-3 text-[0.9375rem] leading-relaxed">{scoreReading(item.fit.score)}</p>
            <p className="mt-3 border-l-2 border-accent/60 pl-3 text-sm leading-relaxed text-muted-foreground">
              <span className="block font-medium text-foreground">{p.watch}</span>
              {item.tradeoff ?? p.fine}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}



function rows(c: CompareCopy): [string, (col: Column) => ReactNode][] {
  const s = (v: number) => c.scale[Math.round(v) - 1] ?? "—";
  const dot = (key: keyof BreedTraits) => (col: Column) => {
    const value = columnTraits(col)[key];
    return <LevelDot value={Math.round(value)} label={s(value)} />;
  };
  return [
    [c.rows.size, dot("size")],
    [c.rows.energy, dot("energy")],
    [c.rows.exercise, dot("exerciseNeeds")],
    [c.rows.mental, dot("mentalStimulation")],
    [c.rows.trainability, dot("trainability")],
    [c.rows.learning, dot("learningAbility")],
    [c.rows.sociability, dot("sociability")],
    [c.rows.affection, dot("affection")],
    [c.rows.shedding, dot("shedding")],
    [c.rows.grooming, dot("grooming")],
    [c.rows.barking, dot("barking")],
    [c.rows.children, dot("goodWithChildren")],
    [c.rows.pets, dot("goodWithPets")],
    [c.rows.flat, dot("apartmentSuitability")],
    [c.rows.firstDog, dot("firstTimeSuitability")],
    [
      c.rows.lifespan,
      (col) => {
        const [lo, hi] = columnRange(col, "lifespan");
        return `${lo}–${hi} ${c.years}`;
      },
    ],
    [
      c.rows.cost,
      (col) => {
        const [lo, hi] = columnRange(col, "annualCost");
        return `€${lo}–${hi}`;
      },
    ],
  ];
}

function ComparePage() {
  const copy = useT();
  const c = copy.compare;
  const names = breedContent();
  const [selected, setSelected] = useState<Column[]>([
    { kind: "breed", id: "labrador-retriever" },
    { kind: "breed", id: "golden-retriever" },
    { kind: "breed", id: "poodle" },
  ]);
  const [query, setQuery] = useState("");
  const [mixOpen, setMixOpen] = useState(false);
  const [mixA, setMixA] = useState<BreedId | "">("");
  const [mixB, setMixB] = useState<BreedId | "">("");

  const q = query.trim().toLowerCase();
  const visibleBreeds = useMemo(
    () =>
      q
        ? breeds.filter(
            (b) =>
              names[b.id].displayName.toLowerCase().includes(q) ||
              b.name.toLowerCase().includes(q),
          )
        : breeds,
    [q, names],
  );

  const hasMixColumn = selected.some((col) => col.kind === "mix");

  function addColumn(next: Column) {
    setSelected((current) => {
      const key = columnKey(next);
      if (current.some((col) => columnKey(col) === key)) {
        return current.filter((col) => columnKey(col) !== key);
      }
      return current.length >= 3 ? [...current.slice(1), next] : [...current, next];
    });
  }

  function addMix() {
    if (!mixA || !mixB || mixA === mixB) return;
    addColumn({ kind: "mix", ids: [mixA, mixB] });
    setMixOpen(false);
    setMixA("");
    setMixB("");
  }

  return (
    <>
    <div className="container-page py-14 md:py-20">
      <Eyebrow>{copy.nav.compare}</Eyebrow>
      <h1 className="display-lg mt-6 max-w-2xl">{copy.compare.subtitle}</h1>
      <ShareBar className="mt-6" />

      <div className="mt-10 max-w-sm">
        <label htmlFor="breed-search" className="text-sm font-medium">
          {c.searchLabel}
        </label>
        <input
          id="breed-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={c.searchPlaceholder}
          className="mt-2 h-12 w-full rounded-2xl border border-border bg-card px-5 text-[1rem] outline-none transition-colors focus:border-accent"
        />
      </div>

      {!q && (
        <div className="mt-8">
          <h2 className="text-sm font-medium">{c.quickPicks}</h2>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">{c.quickPicksHint}</p>
        </div>
      )}

      <ul className="mt-3 flex flex-wrap gap-2">
        <li>
          <button
            type="button"
            aria-pressed={mixOpen || hasMixColumn}
            onClick={() => setMixOpen((v) => !v)}
            className={cn(
              "min-h-11 rounded-full border px-4 text-sm transition-colors",
              mixOpen || hasMixColumn
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border-strong hover:bg-surface",
            )}
          >
            🐾 {c.mix.chip}
          </button>
        </li>
        {visibleBreeds.map((b) => {
          const active = selected.some((col) => col.kind === "breed" && col.id === b.id);
          return (
            <li key={b.id}>
              <button
                type="button"
                aria-pressed={active}
                onClick={() => addColumn({ kind: "breed", id: b.id })}
                className={cn(
                  "min-h-11 rounded-full border px-4 text-sm transition-colors",
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border-strong hover:bg-surface",
                )}
              >
                {names[b.id].displayName}
              </button>
            </li>
          );
        })}
      </ul>

      {q && visibleBreeds.length === 0 && (
        <p className="mt-4 text-sm text-muted-foreground">{c.searchEmpty}</p>
      )}

      {mixOpen && (
        <div className="mt-6 max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h2 className="font-display text-lg leading-tight">{c.mix.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.mix.hint}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {([
              [c.mix.parentA, mixA, setMixA] as const,
              [c.mix.parentB, mixB, setMixB] as const,
            ]).map(([label, value, set]) => (
              <label key={label} className="flex-1 min-w-52 text-sm">
                <span className="block text-muted-foreground">{label}</span>
                <select
                  value={value}
                  onChange={(e) => set(e.target.value as BreedId | "")}
                  className="mt-2 h-12 w-full rounded-2xl border border-border bg-card px-4 text-[0.95rem] outline-none focus:border-accent"
                >
                  <option value="">{c.mix.choose}</option>
                  {breeds.map((b) => (
                    <option key={b.id} value={b.id}>
                      {names[b.id].displayName}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={addMix}
              disabled={!mixA || !mixB || mixA === mixB}
              className="min-h-11 rounded-full bg-primary px-5 text-sm text-primary-foreground transition-opacity disabled:opacity-40"
            >
              {c.mix.add}
            </button>
            <button
              type="button"
              onClick={() => setMixOpen(false)}
              className="min-h-11 rounded-full border border-border-strong px-5 text-sm hover:bg-surface"
            >
              {c.mix.cancel}
            </button>
          </div>
        </div>
      )}

      {selected.length === 0 ? (
        <p className="mt-16 text-muted-foreground">{copy.compare.empty}</p>
      ) : (
        <>
          <PersonalFit columns={selected} names={names} />
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
                    {selected.map((col) => (
                      <th key={columnKey(col)} scope="col" className="pb-6 pr-6 align-bottom">
                        {col.kind === "breed" ? (
                          <img
                            src={breedImages[col.id]}
                            alt={names[col.id].displayName}
                            width={1024}
                            height={1280}
                            loading="lazy"
                            className="aspect-square w-full max-w-36 rounded-xl object-cover"
                          />
                        ) : (
                          <span className="flex aspect-square w-full max-w-36 gap-px overflow-hidden rounded-xl">
                            {col.ids.map((id) => (
                              <img
                                key={id}
                                src={breedImages[id]}
                                alt={names[id].displayName}
                                width={1024}
                                height={1280}
                                loading="lazy"
                                className="h-full w-1/2 object-cover"
                              />
                            ))}
                          </span>
                        )}
                        {col.kind === "mix" && (
                          <span className="mt-3 block text-xs font-medium tracking-wide text-accent uppercase">
                            🐾 {c.mix.columnLabel}
                          </span>
                        )}
                        <span className="mt-1 block max-w-36 font-display text-base font-medium leading-tight text-balance">
                          {columnName(col, c)}
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
                      {selected.map((col) => (
                        <td key={columnKey(col)} className="py-4 pr-6 text-[0.9375rem]">
                          {render(col)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {hasMixColumn && (
            <p className="mt-6 max-w-2xl rounded-2xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted-foreground">
              {c.mix.note}
            </p>
          )}
        </>
      )}

      <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {copy.allergyNote}
      </p>
    </div>
    <div className="pb-20">
      <JourneyLinks exclude={["/compare"]} />
    </div>
    </>
  );
}
