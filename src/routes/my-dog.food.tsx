import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Eyebrow, Section } from "@/components/dogmatch/ui";
import { FoodRow, VetNote } from "@/components/dogmatch/care/parts";
import { foodItems } from "@/data/care/nutrition";
import type { FoodSafety } from "@/data/care/types";
import { cn } from "@/lib/utils";
import { useCopy } from "@/i18n";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

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
    links: seoLinks("/my-dog/food"),
  }),
  component: FoodSafetyPage,
});

const copy = {
  en: {
    eyebrow: "Food safety",
    title: "Can my dog eat this?",
    intro:
      "Something's landed on the floor and your dog got there first. Type it in and you'll get a straight answer, without the panic.",
    searchPlaceholder: "Grapes, cheese, peanut butter…",
    searchAria: "Search foods",
    filters: [
      { value: "all" as const, label: "Everything" },
      { value: "safe" as const, label: "Fine in small amounts" },
      { value: "care" as const, label: "Be careful" },
      { value: "avoid" as const, label: "Don't give" },
    ],
    empty:
      "We haven't got that one written up. If your dog has already eaten it and you're not sure, ring your vet — that's exactly the sort of call they're there for.",
    vetNote:
      "If your dog has eaten something on the \"don't give\" list, don't wait to see what happens. Ring your vet or an animal poison line and tell them what it was, roughly how much, and when.",
    noteTitle: "A note on lists like this",
    noteBody:
      "Dogs differ. Something that's fine for most can still upset yours, and quantity matters — a crumb of something rich is not the same as half a packet. Treats of any kind should stay under about a tenth of what your dog eats in a day.",
  },
  no: {
    eyebrow: "Matsikkerhet",
    title: "Kan hunden min spise dette?",
    intro:
      "Noe har havnet på gulvet, og hunden din kom først. Skriv det inn, så får du et rett svar, uten panikk.",
    searchPlaceholder: "Druer, ost, peanøttsmør…",
    searchAria: "Søk etter mat",
    filters: [
      { value: "all" as const, label: "Alt" },
      { value: "safe" as const, label: "Greit i små mengder" },
      { value: "care" as const, label: "Vær forsiktig" },
      { value: "avoid" as const, label: "Ikke gi" },
    ],
    empty:
      "Vi har ikke skrevet om den ennå. Har hunden din allerede spist det og du er usikker, ring veterinæren — det er nettopp den typen samtale de er der for.",
    vetNote:
      "Har hunden din spist noe fra «ikke gi»-listen, ikke vent og se hva som skjer. Ring veterinæren eller en dyregiftlinje og fortell hva det var, omtrent hvor mye, og når.",
    noteTitle: "En kommentar om lister som denne",
    noteBody:
      "Hunder er forskjellige. Noe som er greit for de fleste kan likevel gi din hund problemer, og mengde betyr noe — en smule av noe fettrikt er ikke det samme som et halvt pakke. Godbiter av alle slag bør holdes under omtrent en tidel av det hunden spiser på en dag.",
  },
  pl: {
    eyebrow: "Bezpieczeństwo jedzenia",
    title: "Czy mój pies może to zjeść?",
    intro:
      "Coś wylądowało na podłodze i twój pies dotarł tam pierwszy. Wpisz co to było, a otrzymasz jasną odpowiedź, bez paniki.",
    searchPlaceholder: "Winogrona, ser, masło orzechowe…",
    searchAria: "Szukaj produktów",
    filters: [
      { value: "all" as const, label: "Wszystko" },
      { value: "safe" as const, label: "Dobre w małych ilościach" },
      { value: "care" as const, label: "Uważaj" },
      { value: "avoid" as const, label: "Nie podawaj" },
    ],
    empty:
      "Tego jeszcze nie opisaliśmy. Jeśli twój pies już to zjadł i nie jesteś pewien, zadzwoń do weterynarza — dokładnie po to tam są.",
    vetNote:
      "Jeśli twój pies zjadł coś z listy „nie podawaj”, nie czekaj, aż zobaczysz efekty. Zadzwoń do weterynarza lub na infolinię ds. zatruć zwierząt i powiedz, co to było, mniej więcej ile i kiedy.",
    noteTitle: "Uwaga o listach takich jak ta",
    noteBody:
      "Psy się różnią. Coś, co jest w porządku dla większości, może zaszkodzić twojemu psu, a ilość ma znaczenie — okruszek czegoś tłustego to nie to samo co pół opakowania. Wszelkie przysmaki powinny stanowić mniej niż jedną dziesiątą tego, co pies zjada w ciągu dnia.",
  },
} as const;

function FoodSafetyPage() {
  const c = useCopy(copy);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FoodSafety | "all">("all");
  const [open, setOpen] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return foodItems()
      .filter((f) => (filter === "all" ? true : f.safety === filter))
      .filter((f) => (q ? f.name.toLowerCase().includes(q) || f.body.toLowerCase().includes(q) : true))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [query, filter]);

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">{c.title}</h1>
        <ShareBar className="mt-6" />
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>

        <div className="mt-10 max-w-xl">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(null);
            }}
            type="search"
            placeholder={c.searchPlaceholder}
            aria-label={c.searchAria}
            className="h-14 w-full rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            {c.filters.map((f) => (
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
              <p className="py-10 text-[0.9375rem] leading-relaxed text-muted-foreground">{c.empty}</p>
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
            <VetNote>{c.vetNote}</VetNote>
            <div className="rounded-[1.5rem] border border-border bg-surface p-7">
              <h2 className="font-display text-xl tracking-tight">{c.noteTitle}</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{c.noteBody}</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <SourcesLink category="nutrition" />
        </div>
      </Section>
    </div>
  );
}
