import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Eyebrow, Section } from "@/components/dogmatch/ui";
import { FoodRow, VetNote } from "@/components/dogmatch/care/parts";
import { foodItems } from "@/data/care/nutrition";
import type { FoodSafety } from "@/data/care/types";
import { cn } from "@/lib/utils";

const title = "Can my dog eat this? — a calm, searchable answer | DoggMatch";
const description =
  "Search any food and get a straight answer: fine in small amounts, be careful, or don't give this. Written for the moment something hits the kitchen floor.";

export const Route = createFileRoute("/my-dog/food")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/my-dog/food" }],
  }),
  component: FoodSafetyPage,
});

const filters: { value: FoodSafety | "all"; label: string }[] = [
  { value: "all", label: "Everything" },
  { value: "safe", label: "Fine in small amounts" },
  { value: "care", label: "Be careful" },
  { value: "avoid", label: "Don't give" },
];

function FoodSafetyPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FoodSafety | "all">("all");
  const [open, setOpen] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return foodItems
      .filter((f) => (filter === "all" ? true : f.safety === filter))
      .filter((f) => (q ? f.name.toLowerCase().includes(q) || f.body.toLowerCase().includes(q) : true))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [query, filter]);

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>Food safety</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">Can my dog eat this?</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Something's landed on the floor and your dog got there first. Type it in and you'll get a
          straight answer, without the panic.
        </p>

        <div className="mt-10 max-w-xl">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(null);
            }}
            type="search"
            placeholder="Grapes, cheese, peanut butter…"
            aria-label="Search foods"
            className="h-14 w-full rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                aria-pressed={filter === f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  "min-h-11 rounded-full border px-4 text-sm transition-colors duration-300",
                  filter === f.value
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Section className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="rounded-[1.5rem] border border-border bg-card px-6 md:px-8">
            {results.length === 0 ? (
              <p className="py-10 text-[0.9375rem] leading-relaxed text-muted-foreground">
                We haven't got that one written up. If your dog has already eaten it and you're not
                sure, ring your vet — that's exactly the sort of call they're there for.
              </p>
            ) : (
              <ul>
                {results.map((item) => (
                  <FoodRow
                    key={item.id}
                    item={item}
                    open={open === item.id}
                    onToggle={() => setOpen(open === item.id ? null : item.id)}
                  />
                ))}
              </ul>
            )}
          </div>

          <div className="grid gap-6">
            <VetNote>
              If your dog has eaten something on the "don't give" list, don't wait to see what
              happens. Ring your vet or an animal poison line and tell them what it was, roughly how
              much, and when.
            </VetNote>
            <div className="rounded-[1.5rem] border border-border bg-surface p-7">
              <h2 className="font-display text-xl tracking-tight">A note on lists like this</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                Dogs differ. Something that's fine for most can still upset yours, and quantity
                matters — a crumb of something rich is not the same as half a packet. Treats of any
                kind should stay under about a tenth of what your dog eats in a day.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
