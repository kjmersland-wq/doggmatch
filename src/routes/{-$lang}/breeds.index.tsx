import { Link, createFileRoute } from "@tanstack/react-router";
import { breedGroupLabel } from "@/data/breed-meta";
import { useState } from "react";
import { useT } from "@/i18n";
import { breeds } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { Eyebrow } from "@/components/dogmatch/ui";
import { seoLinks, abs, localizedHead } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Dog breeds — an honest look at each one | DoggMatch";
const description =
  "What each breed is really like to live with — their energy, their coat, how they learn, and what an ordinary day with them looks like.";

const seoCopy = {
  en: { title, description },
  no: {
    title: "Hunderaser — et ærlig blikk på hver enkelt | DoggMatch",
    description:
      "Hvordan hver rase egentlig er å leve med — energien, pelsen, hvordan de lærer, og hvordan en helt vanlig dag med dem ser ut.",
  },
  pl: {
    title: "Rasy psów — szczere spojrzenie na każdą z nich | DoggMatch",
    description:
      "Jak naprawdę żyje się z każdą rasą — energia, sierść, sposób uczenia się i to, jak wygląda z nimi zwykły dzień.",
  },
};

export const Route = createFileRoute("/{-$lang}/breeds/")({
  head: (ctx) => localizedHead(ctx, "/breeds", seoCopy),
  component: BreedsPage,
});

function BreedsPage() {
  const t = useT();
  const [query, setQuery] = useState("");
  const filtered = breeds.filter((b) =>
    breedContent()[b.id].displayName.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className="container-page py-14 md:py-20">
      <Eyebrow>{t.nav.breeds}</Eyebrow>
      <h1 className="display-lg mt-6 max-w-2xl">{t.breeds.subtitle}</h1>
      <ShareBar className="mt-6" />

      <div className="mt-10 max-w-sm">
        <label htmlFor="breed-search" className="sr-only">
          {t.breeds.search}
        </label>
        <input
          id="breed-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.breeds.search}
          className="h-12 w-full rounded-full border border-border bg-card px-5 text-[0.9375rem] outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-muted-foreground">{t.breeds.empty}</p>
      ) : (
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((breed) => (
            <li key={breed.id}>
              <Link to={withLangPrefix("/breeds/$breedId")} params={{ breedId: breed.id }} className="group block">
                <div className="overflow-hidden rounded-[1.25rem] bg-surface">
                  <img
                    src={breedImages[breed.id]}
                    alt={breedContent()[breed.id].displayName}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <h2 className="mt-5 font-display text-xl leading-tight tracking-tight">
                  {breedContent()[breed.id].displayName}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {breedGroupLabel(breed.group)} · {breed.lifespan[0]}–{breed.lifespan[1]} {t.breeds.years}
                </p>
                <p className="mt-3 line-clamp-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {breedContent()[breed.id].summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
