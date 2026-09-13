import { Link } from "@tanstack/react-router";
import type { Breed } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { useCopy, pick, interpolate } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";
import { useMatchProfile } from "@/lib/matching/store";
import { relatedBreeds } from "@/lib/breeds/related";
import { breedFaq } from "@/lib/breeds/faq";
import { getLocale } from "@/i18n/locale";
import { Arrow, ButtonLink, Eyebrow } from "./ui";

/* ------------------------------------------------------------------ guides */

const guideCopy = {
  en: {
    title: "Read more before you decide",
    intro: "The guides that matter most for this breed, written in plain language.",
    guides: {
      "family-dogs": "Dogs and children, honestly",
      "flat-living": "Living with a dog in a flat",
      "first-dog": "Your first dog",
      "shedding-allergies": "Shedding, coat care and allergies",
      "calm-dogs": "Calmer dogs for quieter homes",
      "active-life": "Dogs for an active life",
      "yearly-cost": "What a dog really costs per year",
    },
  },
  no: {
    title: "Les mer før du bestemmer deg",
    intro: "Guidene som betyr mest for denne rasen, skrevet i klart språk.",
    guides: {
      "family-dogs": "Hund og barn, ærlig sagt",
      "flat-living": "Å ha hund i leilighet",
      "first-dog": "Din første hund",
      "shedding-allergies": "Pelsfelling, pelsstell og allergi",
      "calm-dogs": "Roligere hunder for rolige hjem",
      "active-life": "Hunder for et aktivt liv",
      "yearly-cost": "Hva en hund faktisk koster i året",
    },
  },
  pl: {
    title: "Poczytaj więcej, zanim zdecydujesz",
    intro: "Poradniki, które mają największe znaczenie przy tej rasie, napisane prostym językiem.",
    guides: {
      "family-dogs": "Pies i dzieci, szczerze",
      "flat-living": "Pies w mieszkaniu",
      "first-dog": "Twój pierwszy pies",
      "shedding-allergies": "Linienie, pielęgnacja i alergie",
      "calm-dogs": "Spokojniejsze psy do cichych domów",
      "active-life": "Psy do aktywnego życia",
      "yearly-cost": "Ile pies naprawdę kosztuje rocznie",
    },
  },
} as const;

type GuideId = keyof (typeof guideCopy)["en"]["guides"];

function relevantGuides(breed: Breed): GuideId[] {
  const t = breed.traits;
  const ids: GuideId[] = ["family-dogs", "flat-living", "first-dog"];
  if (t.shedding >= 3 || t.grooming >= 4) ids.push("shedding-allergies");
  if (t.energy <= 2) ids.push("calm-dogs");
  if (t.energy >= 4 || t.exerciseNeeds >= 4) ids.push("active-life");
  ids.push("yearly-cost");
  return ids;
}

export function BreedGuideLinks({ breed }: { breed: Breed }) {
  const c = useCopy(guideCopy);
  const ids = relevantGuides(breed);

  return (
    <section className="container-page border-t border-border py-16">
      <h2 className="display-md">{c.title}</h2>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{c.intro}</p>
      <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {ids.map((id) => (
          <li key={id} className="bg-card">
            <Link
              to={withLangPrefix("/guides")}
              hash={id}
              className="flex h-full items-center justify-between gap-4 p-6 transition-colors hover:bg-surface"
            >
              <span className="font-display text-base leading-tight tracking-tight">{c.guides[id]}</span>
              <Arrow />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ----------------------------------------------------------------- compare */

const compareCopy = {
  en: {
    title: "Compare with similar breeds",
    intro:
      "Side by side on exercise, coat, time alone and cost — the things that decide how the week actually feels.",
    cta: "Compare these breeds",
    open: "Open the full comparison",
  },
  no: {
    title: "Sammenlign med lignende raser",
    intro:
      "Side om side på mosjon, pels, alenetid og kostnad — det som avgjør hvordan uka faktisk blir.",
    cta: "Sammenlign disse rasene",
    open: "Åpne hele sammenligningen",
  },
  pl: {
    title: "Porównaj z podobnymi rasami",
    intro:
      "Obok siebie: ruch, sierść, czas w samotności i koszty — to, co decyduje o tym, jak naprawdę wygląda tydzień.",
    cta: "Porównaj te rasy",
    open: "Otwórz pełne porównanie",
  },
} as const;

export function CompareSimilar({ breed }: { breed: Breed }) {
  const c = useCopy(compareCopy);
  const names = breedContent();
  const related = relatedBreeds(breed.id, 3);
  const ids = [breed.id, ...related.map((r) => r.id)].join(",");

  return (
    <section className="container-page border-t border-border py-16">
      <h2 className="display-md">{c.title}</h2>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{c.intro}</p>
      <ul className="mt-8 flex flex-wrap gap-3">
        {[breed, ...related].map((b) => (
          <li
            key={b.id}
            className="flex items-center gap-3 rounded-full border border-border bg-card py-2 pl-2 pr-5"
          >
            <img
              src={breedImages[b.id]}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-display text-sm tracking-tight">{names[b.id].displayName}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ButtonLink
          to={withLangPrefix("/compare")}
          {...({ search: { breeds: ids } } as Record<string, unknown>)}
          size="lg"
        >
          {c.cta}
          <Arrow />
        </ButtonLink>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- quiz nudge */

const quizCopy = {
  en: {
    eyebrow: "Not sure yet?",
    title: "Let us read this breed against your own days",
    body: "Fifteen short questions about your home, your hours and your energy. You get a ranked shortlist, the reasoning behind it, and this page will start speaking to your answers.",
    cta: "Take the Find My Dog quiz",
    time: "Takes about three minutes. Your answers stay on this device.",
  },
  no: {
    eyebrow: "Usikker ennå?",
    title: "La oss lese denne rasen opp mot dine egne dager",
    body: "Femten korte spørsmål om hjemmet ditt, timene dine og energien din. Du får en rangert kortliste, begrunnelsen bak, og denne siden begynner å snakke til svarene dine.",
    cta: "Ta Finn min hund",
    time: "Tar rundt tre minutter. Svarene blir liggende på denne enheten.",
  },
  pl: {
    eyebrow: "Jeszcze nie masz pewności?",
    title: "Zestawmy tę rasę z twoją codziennością",
    body: "Piętnaście krótkich pytań o dom, godziny i energię. Dostaniesz uszeregowaną krótką listę, uzasadnienie, a ta strona zacznie mówić językiem twoich odpowiedzi.",
    cta: "Wypełnij Znajdź mojego psa",
    time: "Zajmuje około trzech minut. Odpowiedzi zostają na tym urządzeniu.",
  },
} as const;

/** Only shown when the reader has not answered the questions yet. */
export function BreedQuizCta() {
  const c = useCopy(quizCopy);
  const profile = useMatchProfile();
  if (profile) return null;

  return (
    <section className="container-page border-t border-border py-16">
      <div className="rounded-[2rem] border border-border bg-card p-8 md:p-12">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="display-md mt-5 max-w-xl">{c.title}</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{c.body}</p>
        <div className="mt-8">
          <ButtonLink to={withLangPrefix("/find-my-dog")} size="lg">
            {c.cta}
            <Arrow />
          </ButtonLink>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{c.time}</p>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------- faq */

const faqCopy = {
  en: { title: "Questions people ask before committing to a {breed}" },
  no: { title: "Spørsmål folk stiller før de bestemmer seg for en {breed}" },
  pl: { title: "Pytania, które ludzie zadają przed decyzją o rasie {breed}" },
} as const;

export function BreedFaq({ breed, displayName }: { breed: Breed; displayName: string }) {
  const c = useCopy(faqCopy);
  const items = breedFaq(breed, displayName, getLocale());

  return (
    <section className="container-page border-t border-border py-16">
      <h2 className="display-md max-w-2xl">{interpolate(c.title, { breed: displayName })}</h2>
      <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {items.map((item) => (
          <div key={item.question} className="bg-card p-6">
            <dt className="font-display text-base leading-snug tracking-tight">{item.question}</dt>
            <dd className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{item.answer}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {pick({
          en: "These answers come from the same trait numbers used everywhere on DoggMatch — no marketing, no guesswork.",
          no: "Svarene bygger på de samme egenskapstallene som brukes overalt på DoggMatch — ingen markedsføring, ingen gjetting.",
          pl: "Te odpowiedzi opierają się na tych samych wartościach cech, których używamy w całym DoggMatch — bez marketingu i zgadywania.",
        })}
      </p>
    </section>
  );
}
