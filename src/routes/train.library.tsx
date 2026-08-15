import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Eyebrow } from "@/components/dogmatch/ui";
import { LessonCard, levelLabels } from "@/components/dogmatch/training/parts";
import { trainingCategories } from "@/data/training/categories";
import { lessons } from "@/data/training/lessons";
import type { CategoryId, Level } from "@/data/training/types";
import { useActiveDog, useProgress } from "@/lib/training/store";
import { cn } from "@/lib/utils";

const title = "Every training lesson — Train Your Dog | DoggMatch";
const description =
  "Browse every DoggMatch lesson: puppy foundations, everyday manners, walking, recall, calm at home, tricks and brain games.";

export const Route = createFileRoute("/train/library")({
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
    links: [{ rel: "canonical", href: "/train/library" }],
  }),
  component: LibraryPage,
});

const levelFilters: (Level | "all")[] = ["all", "beginner", "building", "intermediate", "advanced"];

function LibraryPage() {
  const dog = useActiveDog();
  const progress = useProgress(dog?.id);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<Level | "all">("all");
  const [category, setCategory] = useState<CategoryId | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return lessons.filter((l) => {
      if (level !== "all" && l.level !== level) return false;
      if (category !== "all" && l.category !== category) return false;
      if (!q) return true;
      return (
        l.title.toLowerCase().includes(q) ||
        l.promise.toLowerCase().includes(q) ||
        l.goals.some((g) => g.includes(q))
      );
    });
  }, [query, level, category]);

  return (
    <div className="container-page pt-28 pb-28 md:pt-36">
      <Eyebrow>The library</Eyebrow>
      <h1 className="display-lg mt-5 max-w-2xl">Every lesson, in one calm place.</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
        Start anywhere. Each lesson is short, and you can come back to it as many times as you like.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What would you like to work on?"
          aria-label="Search lessons"
          className="h-13 min-h-12 w-full max-w-sm rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
        />
        <div className="flex flex-wrap gap-2">
          {levelFilters.map((l) => (
            <Chip key={l} on={level === l} onClick={() => setLevel(l)}>
              {l === "all" ? "All levels" : levelLabels[l]}
            </Chip>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Chip on={category === "all"} onClick={() => setCategory("all")}>
          Everything
        </Chip>
        {trainingCategories.map((c) => (
          <Chip key={c.id} on={category === c.id} onClick={() => setCategory(c.id)}>
            {c.title}
          </Chip>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-lg text-muted-foreground">
          Nothing here matches that just yet. Try a different word, or clear the filters.
        </p>
      ) : (
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((l) => (
            <li key={l.id}>
              <LessonCard lesson={l} status={progress[l.id]} />
            </li>
          ))}
        </ul>
      )}

      <div className="mt-24 space-y-16">
        {trainingCategories.map((c) => (
          <section key={c.id} id={c.id} className="scroll-mt-28">
            <h2 className="display-md">{c.title}</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{c.blurb}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {c.covers.map((x) => (
                <li
                  key={x}
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                >
                  {x}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function Chip({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={cn(
        "min-h-11 rounded-full border px-4 text-sm transition-colors duration-300",
        on
          ? "border-accent bg-accent-soft text-accent"
          : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
