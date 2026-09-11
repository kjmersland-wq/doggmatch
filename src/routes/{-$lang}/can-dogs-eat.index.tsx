import { Link, createFileRoute } from "@tanstack/react-router";
import { createFileRoute as _unused } from "@tanstack/react-router";
import { Eyebrow, Section } from "@/components/dogmatch/ui";
import { SafetyDot, VetNote } from "@/components/dogmatch/care/parts";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import { ShareBar } from "@/components/dogmatch/share";
import { useCopy, useLocale } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";
import { foodsByLetter, foodListFor } from "@/lib/food";
import { breadcrumbLd, headLocale, jsonLd, langUrl, localizedHead } from "@/lib/seo";

const seo = {
  en: {
    title: "Can dogs eat that? A–Z food safety list for dogs | DoggMatch",
    description:
      "A calm A–Z answer for every food: fine in small amounts, be careful, or don't give this. Written for the moment something hits the kitchen floor.",
  },
  no: {
    title: "Kan hunder spise det? A–Å matliste for hund | DoggMatch",
    description:
      "Et rolig A–Å-svar for hver matvare: greit i små mengder, vær forsiktig, eller ikke gi dette.",
  },
  pl: {
    title: "Czy pies może to zjeść? Lista A–Z bezpiecznych produktów | DoggMatch",
    description:
      "Spokojna odpowiedź A–Z dla każdego produktu: w porządku w małych ilościach, uważaj albo nie podawaj.",
  },
};

export const Route = createFileRoute("/{-$lang}/can-dogs-eat/")({
  head: (ctx) => {
    const locale = headLocale(ctx);
    const head = localizedHead(ctx, "/can-dogs-eat", seo);
    return {
      ...head,
      scripts: [
        breadcrumbLd([
          { name: "DoggMatch", path: "/" },
          { name: seo[locale].title, path: "/can-dogs-eat" },
        ]),
        jsonLd({
          "@type": "CollectionPage",
          name: seo[locale].title,
          description: seo[locale].description,
          url: langUrl("/can-dogs-eat", locale),
        }),
      ],
    };
  },
  component: FoodHub,
});

const copy = {
  en: {
    eyebrow: "Food safety",
    title: "Can dogs eat that?",
    intro:
      "One page per food, so you get a straight answer without scrolling past three adverts first. Pick what your dog got hold of.",
    counted: (n: number) => `${n} foods answered so far`,
    vetNote:
      "If your dog has eaten something on the “don't give this” list, don't wait for symptoms. Ring your vet or an animal poison line and tell them what it was, roughly how much, and when.",
    searchHint: "Prefer to search? Use the searchable food list.",
    searchLink: "Open the searchable list",
  },
  no: {
    eyebrow: "Mattrygghet",
    title: "Kan hunder spise det?",
    intro: "Én side per matvare, så du får et klart svar med én gang. Velg det hunden fikk tak i.",
    counted: (n: number) => `${n} matvarer besvart så langt`,
    vetNote:
      "Har hunden spist noe fra «ikke gi dette»-listen, ikke vent på symptomer. Ring veterinæren og si hva det var, omtrent hvor mye, og når.",
    searchHint: "Vil du heller søke? Bruk den søkbare matlisten.",
    searchLink: "Åpne den søkbare listen",
  },
  pl: {
    eyebrow: "Bezpieczeństwo żywności",
    title: "Czy pies może to zjeść?",
    intro: "Jedna strona na produkt, więc od razu masz jasną odpowiedź. Wybierz to, co zjadł twój pies.",
    counted: (n: number) => `${n} produktów opisanych do tej pory`,
    vetNote:
      "Jeśli pies zjadł coś z listy „nie podawaj”, nie czekaj na objawy. Zadzwoń do weterynarza i powiedz, co to było, ile mniej więcej i kiedy.",
    searchHint: "Wolisz szukać? Skorzystaj z wyszukiwarki produktów.",
    searchLink: "Otwórz listę z wyszukiwarką",
  },
} as const;

function FoodHub() {
  const c = useCopy(copy);
  const { locale } = useLocale();
  const groups = foodsByLetter(locale);
  const total = foodListFor(locale).length;

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">{c.title}</h1>
        <ShareBar className="mt-6" />
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
        <p className="mt-3 text-sm text-muted-foreground">{c.counted(total)}</p>
      </section>

      <Section className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div className="grid gap-8">
            {groups.map((group) => (
              <div key={group.letter}>
                <h2 className="font-display text-lg tracking-tight text-muted-foreground">{group.letter}</h2>
                <ul className="mt-3 grid gap-1 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={withLangPrefix("/can-dogs-eat/$foodId")}
                        params={{ foodId: item.id }}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[0.9375rem] transition-colors hover:bg-surface"
                      >
                        <SafetyDot safety={item.safety} />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-6">
            <VetNote>{c.vetNote}</VetNote>
            <div className="rounded-[1.5rem] border border-border bg-surface p-7">
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">{c.searchHint}</p>
              <Link
                to={withLangPrefix("/my-dog/food")}
                className="mt-4 inline-flex text-sm text-accent underline decoration-border underline-offset-4 hover:decoration-accent"
              >
                {c.searchLink}
              </Link>
            </div>
            <SourcesLink category="nutrition" />
          </div>
        </div>
      </Section>
    </div>
  );
}
