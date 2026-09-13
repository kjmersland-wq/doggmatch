import { Link, createFileRoute, useRouterState } from "@tanstack/react-router";
import { breedGroupLabel } from "@/data/breed-meta";
import { useState } from "react";
import { useT, interpolate, useCopy } from "@/i18n";
import { breeds } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { Eyebrow } from "@/components/dogmatch/ui";
import { seoLinks, abs, localizedHead, headLocale, breadcrumbLd } from "@/lib/seo";
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
  dk: {
    title: "Hunderacer — et ærligt blik på hver eneste en | DoggMatch",
    description:
      "Hvordan hver race egentlig er at leve med — energien, pelsen, hvordan de lærer, og hvordan en helt almindelig dag med dem ser ud.",
  },
  se: {
    title: "Hundraser — en ärlig blick på var och en | DoggMatch",
    description:
      "Hur varje ras egentligen är att leva med — energin, pälsen, hur de lär sig, och hur en helt vanlig dag med dem ser ut.",
  },
  fi: {
    title: "Koirarodut — rehellinen katsaus jokaiseen | DoggMatch",
    description:
      "Millaista jokaisen rodun kanssa oikeasti on elää — niiden energia, turkki, oppiminen ja millainen tavallinen päivä niiden kanssa näyttää.",
  },
  de: {
    title: "Hunderassen — ein ehrlicher Blick auf jede einzelne | DoggMatch",
    description:
      "Wie das Zusammenleben mit jeder Rasse wirklich ist — ihre Energie, ihr Fell, wie sie lernen und wie ein ganz normaler Tag mit ihnen aussieht.",
  },
  fr: {
    title: "Races de chiens — un regard honnête sur chacune | DoggMatch",
    description:
      "À quoi ressemble vraiment la vie avec chaque race — son énergie, son pelage, sa façon d'apprendre et le déroulé d'une journée ordinaire à ses côtés.",
  },
  nl: {
    title: "Hondenrassen — een eerlijke blik op elk ras | DoggMatch",
    description:
      "Hoe het echt is om met elk ras samen te leven — hun energie, hun vacht, hoe ze leren en hoe een doodgewone dag met hen eruitziet.",
  },
};

export const Route = createFileRoute("/{-$lang}/breeds/")({
  head: (ctx) => {
    const locale = headLocale(ctx);
    const base = localizedHead(ctx, "/breeds", seoCopy);
    return {
      ...base,
      scripts: [
        breadcrumbLd(
          [
            { name: "DoggMatch", path: "/" },
            {
              name: seoCopy[locale]?.title.split(" | ")[0]?.split(" — ")[0] ?? "Breeds",
              path: "/breeds",
            },
          ],
          locale,
        ),
      ],
    };
  },
  component: BreedsPage,
});

const pageCopy = {
  en: {
    intro:
      "Our deterministic matching engine draws on a model covering 250+ breeds. Below are the {count} we've published so far — each one screened the same way, and given a full, verified editorial profile rather than a thin trait sheet.",
    deepDiveBadge: "Editorial Deep-Dive",
  },
  no: {
    intro:
      "Vår deterministiske matchemotor bygger på en modell som dekker over 250 raser. Under finner du de {count} vi har publisert så langt — alle vurdert på samme måte, og med en fullstendig, verifisert redaksjonell profil i stedet for et tynt egenskapsark.",
    deepDiveBadge: "Redaksjonell dybdeprofil",
  },
  pl: {
    intro:
      "Nasz deterministyczny silnik dopasowania opiera się na modelu obejmującym ponad 250 ras. Poniżej znajdziesz {count} ras, które opublikowaliśmy do tej pory — każda sprawdzona w ten sam sposób i opisana w pełnym, zweryfikowanym profilu redakcyjnym, a nie na skróconej karcie cech.",
    deepDiveBadge: "Pogłębiony profil redakcyjny",
  },
  dk: {
    intro:
      "Vores deterministiske matchemotor bygger på en model, der dækker over 250 racer. Nedenfor finder du de {count}, vi har udgivet indtil videre — alle vurderet på samme måde, og med en fuld, verificeret redaktionel profil frem for et tyndt egenskabsark.",
    deepDiveBadge: "Redaktionel dybdeprofil",
  },
  se: {
    intro:
      "Vår deterministiska matchmotor bygger på en modell som täcker över 250 raser. Nedan hittar du de {count} vi har publicerat hittills — alla bedömda på samma sätt, och med en fullständig, verifierad redaktionell profil i stället för ett tunt egenskapsblad.",
    deepDiveBadge: "Redaktionell djupprofil",
  },
  fi: {
    intro:
      "Deterministinen täsmäysmoottorimme perustuu malliin, joka kattaa yli 250 rotua. Alta löydät ne {count} rotua, jotka olemme toistaiseksi julkaisseet — jokainen arvioitu samalla tavalla ja varustettu täydellä, varmennetulla toimituksellisella profiililla ohuen ominaisuuslistan sijaan.",
    deepDiveBadge: "Toimituksellinen syväsukellus",
  },
  de: {
    intro:
      "Unsere deterministische Matching-Engine stützt sich auf ein Modell mit über 250 Rassen. Unten findest du die {count}, die wir bisher veröffentlicht haben — jede auf dieselbe Weise geprüft und mit einem vollständigen, verifizierten Redaktionsprofil statt einer dünnen Merkmalsliste.",
    deepDiveBadge: "Redaktionelle Tiefenrecherche",
  },
  fr: {
    intro:
      "Notre moteur de matching déterministe s'appuie sur un modèle couvrant plus de 250 races. Voici les {count} que nous avons publiées à ce jour — chacune évaluée selon la même méthode, avec un profil éditorial complet et vérifié plutôt qu'une simple fiche de traits.",
    deepDiveBadge: "Dossier éditorial approfondi",
  },
  nl: {
    intro:
      "Onze deterministische matchmachine bouwt op een model dat meer dan 250 rassen omvat. Hieronder vind je de {count} die we tot nu toe hebben gepubliceerd — elk op dezelfde manier beoordeeld en voorzien van een volledig, geverifieerd redactioneel profiel in plaats van een summier kenmerkenblaadje.",
    deepDiveBadge: "Redactionele verdieping",
  },
} as const;

function BreedsPage() {
  const t = useT();
  const c = useCopy(pageCopy);
  // A ?q= in the address bar pre-fills the search, so a search engine (or a
  // shared link) can point straight at a breed someone is looking for.
  const rawSearch = useRouterState({ select: (s) => s.location.search as Record<string, unknown> });
  const initialQuery = typeof rawSearch["q"] === "string" ? (rawSearch["q"] as string) : "";
  const [query, setQuery] = useState(initialQuery);
  const filtered = breeds.filter((b) =>
    breedContent()[b.id].displayName.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className="container-page py-14 md:py-20">
      <Eyebrow>{t.nav.breeds}</Eyebrow>
      <h1 className="display-lg mt-6 max-w-2xl">{t.breeds.subtitle}</h1>
      <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
        {interpolate(c.intro, { count: String(breeds.length) })}
      </p>
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
              <Link
                to={withLangPrefix("/breeds/$breedId")}
                params={{ breedId: breed.id }}
                className="group block"
              >
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
                  {breedGroupLabel(breed.group)} · {breed.lifespan[0]}–{breed.lifespan[1]}{" "}
                  {t.breeds.years}
                </p>
                <span className="mt-2 inline-flex items-center rounded-full border border-border-strong px-2.5 py-1 text-xs text-muted-foreground">
                  {c.deepDiveBadge}
                </span>
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
