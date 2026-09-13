import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Eyebrow } from "@/components/dogmatch/ui";
import { LessonCard, levelLabel } from "@/components/dogmatch/training/parts";
import { getTrainingCategories } from "@/data/training/categories";
import { getLessons } from "@/data/training/lessons";
import type { CategoryId, Level } from "@/data/training/types";
import { useActiveDog, useProgress } from "@/lib/training/store";
import { cn } from "@/lib/utils";
import { useCopy, useLocale } from "@/i18n";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

const title = "Every training lesson — Train Your Dog | DoggMatch";
const description =
  "Browse every DoggMatch lesson: puppy foundations, everyday manners, walking, recall, calm at home, tricks and brain games.";

export const Route = createFileRoute("/{-$lang}/train/library")({
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
    links: seoLinks("/train/library"),
  }),
  component: LibraryPage,
});

const levelFilters: (Level | "all")[] = ["all", "beginner", "building", "intermediate", "advanced"];

const copy = {
  en: {
    eyebrow: "The library",
    title: "Every lesson, in one calm place.",
    intro: "Start anywhere. Each lesson is short, and you can come back to it as many times as you like.",
    searchPlaceholder: "What would you like to work on?",
    searchAria: "Search lessons",
    allLevels: "All levels",
    everything: "Everything",
    empty: "Nothing here matches that just yet. Try a different word, or clear the filters.",
  },
  no: {
    eyebrow: "Biblioteket",
    title: "Alle leksjonene, på ett rolig sted.",
    intro: "Start hvor som helst. Hver leksjon er kort, og du kan komme tilbake til den så mange ganger du vil.",
    searchPlaceholder: "Hva vil du øve på?",
    searchAria: "Søk i leksjoner",
    allLevels: "Alle nivåer",
    everything: "Alt",
    empty: "Ingenting her matcher det ennå. Prøv et annet ord, eller nullstill filtrene.",
  },
  pl: {
    eyebrow: "Biblioteka",
    title: "Wszystkie lekcje, w jednym spokojnym miejscu.",
    intro: "Zacznij, gdziekolwiek chcesz. Każda lekcja jest krótka i możesz wracać do niej tyle razy, ile chcesz.",
    searchPlaceholder: "Nad czym chciałbyś popracować?",
    searchAria: "Szukaj lekcji",
    allLevels: "Wszystkie poziomy",
    everything: "Wszystko",
    empty: "Nic tu jeszcze nie pasuje. Spróbuj innego słowa albo wyczyść filtry.",
  },
  dk: {
    eyebrow: "Biblioteket",
    title: "Alle lektioner, ét roligt sted.",
    intro: "Start hvor som helst. Hver lektion er kort, og du kan vende tilbage til den, så mange gange du vil.",
    searchPlaceholder: "Hvad vil du gerne øve på?",
    searchAria: "Søg i lektioner",
    allLevels: "Alle niveauer",
    everything: "Alt",
    empty: "Der er ikke noget her, der matcher endnu. Prøv et andet ord, eller ryd filtrene.",
  },
  se: {
    eyebrow: "Biblioteket",
    title: "Alla lektioner, på ett lugnt ställe.",
    intro: "Börja var du vill. Varje lektion är kort, och du kan gå tillbaka till den så många gånger du vill.",
    searchPlaceholder: "Vad vill du träna på?",
    searchAria: "Sök bland lektioner",
    allLevels: "Alla nivåer",
    everything: "Allt",
    empty: "Inget matchar det där ännu. Prova ett annat ord, eller rensa filtren.",
  },
  fi: {
    eyebrow: "Kirjasto",
    title: "Kaikki oppitunnit, yhdessä rauhallisessa paikassa.",
    intro: "Aloita mistä vain. Jokainen oppitunti on lyhyt, ja voit palata siihen niin monta kertaa kuin haluat.",
    searchPlaceholder: "Mitä haluaisit harjoitella?",
    searchAria: "Hae oppitunteja",
    allLevels: "Kaikki tasot",
    everything: "Kaikki",
    empty: "Mikään ei vielä vastaa tätä. Kokeile toista sanaa tai tyhjennä suodattimet.",
  },
  de: {
    eyebrow: "Die Bibliothek",
    title: "Alle Lektionen, an einem ruhigen Ort.",
    intro: "Fangen Sie irgendwo an. Jede Lektion ist kurz, und Sie können so oft zurückkommen, wie Sie möchten.",
    searchPlaceholder: "Woran möchten Sie arbeiten?",
    searchAria: "Lektionen durchsuchen",
    allLevels: "Alle Stufen",
    everything: "Alles",
    empty: "Dazu passt hier noch nichts. Probieren Sie ein anderes Wort oder setzen Sie die Filter zurück.",
  },
  fr: {
    eyebrow: "La bibliothèque",
    title: "Toutes les leçons, dans un seul endroit paisible.",
    intro: "Commencez où vous voulez. Chaque leçon est courte, et vous pouvez y revenir autant de fois que vous le souhaitez.",
    searchPlaceholder: "Sur quoi aimeriez-vous travailler ?",
    searchAria: "Rechercher des leçons",
    allLevels: "Tous les niveaux",
    everything: "Tout",
    empty: "Rien ne correspond encore à cela. Essayez un autre mot, ou effacez les filtres.",
  },
  nl: {
    eyebrow: "De bibliotheek",
    title: "Alle lessen, op één rustige plek.",
    intro: "Begin waar u wilt. Elke les is kort, en u kunt er zo vaak op terugkomen als u wilt.",
    searchPlaceholder: "Waar wilt u aan werken?",
    searchAria: "Lessen zoeken",
    allLevels: "Alle niveaus",
    everything: "Alles",
    empty: "Hier komt nog niets mee overeen. Probeer een ander woord, of wis de filters.",
  },
} as const;

function LibraryPage() {
  const c = useCopy(copy);
  const { locale } = useLocale();
  const dog = useActiveDog();
  const progress = useProgress(dog?.id);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<Level | "all">("all");
  const [category, setCategory] = useState<CategoryId | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return getLessons().filter((l) => {
      if (level !== "all" && l.level !== level) return false;
      if (category !== "all" && l.category !== category) return false;
      if (!q) return true;
      return (
        l.title.toLowerCase().includes(q) ||
        l.promise.toLowerCase().includes(q) ||
        l.goals.some((g) => g.includes(q))
      );
    });
  }, [query, level, category, locale]);

  return (
    <div className="container-page pt-28 pb-28 md:pt-36">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h1 className="display-lg mt-5 max-w-2xl">{c.title}</h1>
      <ShareBar className="mt-6" />
      <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{c.intro}</p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={c.searchPlaceholder}
          aria-label={c.searchAria}
          className="h-13 min-h-12 w-full max-w-sm rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
        />
        <div className="flex flex-wrap gap-2">
          {levelFilters.map((l) => (
            <Chip key={l} on={level === l} onClick={() => setLevel(l)}>
              {l === "all" ? c.allLevels : levelLabel(l)}
            </Chip>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Chip on={category === "all"} onClick={() => setCategory("all")}>
          {c.everything}
        </Chip>
        {getTrainingCategories().map((cat) => (
          <Chip key={cat.id} on={category === cat.id} onClick={() => setCategory(cat.id)}>
            {cat.title}
          </Chip>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-lg text-muted-foreground">{c.empty}</p>
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
        {getTrainingCategories().map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-28">
            <h2 className="display-md">{cat.title}</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{cat.blurb}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {cat.covers.map((x) => (
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
