import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useT } from "@/i18n";
import { breeds } from "@/data/breeds";
import { breedContentEn } from "@/data/breed-content.en";
import { breedImages } from "@/data/breed-images";
import { Eyebrow } from "@/components/dogmatch/ui";

const title = "Dog breeds — honest profiles and characteristics | DogMatch";
const description =
  "Browse breed profiles with temperament, energy, grooming, trainability and the realities of daily life, written without marketing gloss.";

export const Route = createFileRoute("/breeds/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/breeds" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/breeds" }],
  }),
  component: BreedsPage,
});

function BreedsPage() {
  const t = useT();
  const [query, setQuery] = useState("");
  const filtered = breeds.filter((b) =>
    breedContentEn[b.id].displayName.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className="container-page py-14 md:py-20">
      <Eyebrow>{t.nav.breeds}</Eyebrow>
      <h1 className="display-lg mt-6 max-w-2xl">{t.breeds.subtitle}</h1>

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
              <Link to="/breeds/$breedId" params={{ breedId: breed.id }} className="group block">
                <div className="overflow-hidden rounded-[1.25rem] bg-surface">
                  <img
                    src={breedImages[breed.id]}
                    alt={breedContentEn[breed.id].displayName}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <h2 className="mt-5 font-display text-xl leading-tight tracking-tight">
                  {breedContentEn[breed.id].displayName}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {breed.group} · {breed.lifespan[0]}–{breed.lifespan[1]} {t.breeds.years}
                </p>
                <p className="mt-3 line-clamp-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {breedContentEn[breed.id].summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
