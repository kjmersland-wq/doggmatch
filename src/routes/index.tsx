import { createFileRoute, Link } from "@tanstack/react-router";
import { breedGroupLabel, breedOriginLabel } from "@/data/breed-meta";
import { useEffect, useRef, useState } from "react";
import { useT, useCopy } from "@/i18n";
import { breeds } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { Arrow, ButtonLink, Eyebrow, Section, TraitMeter } from "@/components/dogmatch/ui";
import heroImage from "@/assets/hero.jpg";
import homeImage from "@/assets/editorial-home.jpg";
import dogLifeImage from "@/assets/dog-life.jpg";
import { seoLinks, abs } from "@/lib/seo";

const title = "DoggMatch — Find the dog that's right for your life";
const description =
  "Tell us a little about your life, your home and your days, and we'll help you find the dogs that may suit you best. Free, honest, and we always show our reasoning.";
const ogImage =
  "https://project--133462b6-1f26-496e-a35b-0de87a08b8b1.lovable.app/og-image.jpg";

/**
 * Section ids are language-independent so a shared link lands in the right
 * place whichever language the reader has chosen; only the wording changes.
 */
const SECTION_IDS = [
  "why-doggmatch",
  "how-it-works",
  "dog-breeds",
  "compare-breeds",
  "doggmatch-plus",
  "dog-life",
  "faq",
  "find-your-dog",
] as const;

const localCopy = {
  en: {
    matchLooks: "What a match looks like",
    match: "match",
    heroAlt: "A woman walking a golden retriever along a coastal path at sunrise",
    terrierAlt: "A terrier resting in a sunlit apartment",
    parkAlt: "A city park at dawn with winding walking paths",
    jumpLabel: "Jump to a section of this page",
    jumpTitle: "On this page",
    anchors: {
      "why-doggmatch": "Why DoggMatch",
      "how-it-works": "How it works",
      "dog-breeds": "Explore dog breeds",
      "compare-breeds": "Compare breeds",
      "doggmatch-plus": "DoggMatch+",
      "dog-life": "Dog life near you",
      faq: "Questions people ask",
      "find-your-dog": "Find your dog",
    },
    plusEyebrow: "DoggMatch+",
    plusTitle: "A little more help, once the dog is home",
    plusBody:
      "Training you can follow week by week, food and weight kept in one place, travel paperwork sorted, and everything printable for the fridge or the vet.",
    plusCta: "See what's inside DoggMatch+",
    faqEyebrow: "Good to know",
    faqTitle: "Questions people ask us",
    faq: [
      {
        q: "Is the matching done by AI?",
        a: "No. It's a fixed set of rules we wrote ourselves. The same answers always give the same dogs, and we show you the reasoning behind every score.",
      },
      {
        q: "Does it cost anything to find my dog?",
        a: "No. The questions, the results and every breed page are free. DoggMatch+ is only for the tools you use after the dog moves in.",
      },
      {
        q: "What if a mixed breed is right for me?",
        a: "Mixes are welcome. You can build one from two breeds and we'll score the dog in front of you rather than a label.",
      },
      {
        q: "Can I trust the breed information?",
        a: "We keep our sources open. Every breed, training and health page links to the bodies and research we lean on.",
      },
    ],
  },
  no: {
    matchLooks: "Slik ser en match ut",
    match: "match",
    heroAlt: "En kvinne g\u00e5r tur med en golden retriever langs kysten i soloppgang",
    terrierAlt: "En terrier som hviler i en solfylt leilighet",
    parkAlt: "En bypark i grålysningen med svingete turveier",
    jumpLabel: "Hopp til en del av denne siden",
    jumpTitle: "På denne siden",
    anchors: {
      "why-doggmatch": "Hvorfor DoggMatch",
      "how-it-works": "Slik fungerer det",
      "dog-breeds": "Bli kjent med rasene",
      "compare-breeds": "Sammenlign raser",
      "doggmatch-plus": "DoggMatch+",
      "dog-life": "Hundeliv der du bor",
      faq: "Spørsmål vi ofte får",
      "find-your-dog": "Finn hunden din",
    },
    plusEyebrow: "DoggMatch+",
    plusTitle: "Litt mer hjelp når hunden først er hjemme",
    plusBody:
      "Trening du kan følge uke for uke, fôr og vekt samlet på ett sted, reisepapirene i orden, og alt kan skrives ut til kjøleskapet eller veterinæren.",
    plusCta: "Se hva som ligger i DoggMatch+",
    faqEyebrow: "Godt å vite",
    faqTitle: "Spørsmål vi ofte får",
    faq: [
      {
        q: "Er det KI som gjør matchingen?",
        a: "Nei. Det er faste regler vi har skrevet selv. De samme svarene gir alltid de samme hundene, og vi viser deg begrunnelsen bak hver score.",
      },
      {
        q: "Koster det noe å finne hunden min?",
        a: "Nei. Spørsmålene, resultatet og alle rasesidene er gratis. DoggMatch+ gjelder bare verktøyene du bruker etter at hunden har flyttet inn.",
      },
      {
        q: "Hva om en blandingshund passer best for meg?",
        a: "Blandinger er hjertelig velkomne. Du kan sette sammen to raser, så vurderer vi hunden foran deg — ikke et stempel.",
      },
      {
        q: "Kan jeg stole på raseinformasjonen?",
        a: "Vi holder kildene åpne. Hver rase-, trenings- og helseside lenker til fagmiljøene og forskningen vi støtter oss på.",
      },
    ],
  },
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/") },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "DoggMatch — the right dog, the right life" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: seoLinks("/"),
  }),
  component: HomePage,
});

/** Very restrained parallax — a few pixels, disabled for reduced motion. */
function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 600);
        if (ref.current) ref.current.style.transform = `translate3d(0, ${y * 0.06}px, 0) scale(1.04)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return ref;
}

function HomePage() {
  const t = useT();
  const c = useCopy(localCopy);
  const parallax = useParallax();
  const featured = breeds.slice(0, 4);

  return (
    <>
      {/* ------------------------------------------------------------ Hero */}
      <section className="container-page pt-6 md:pt-10">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="animate-rise max-w-xl pb-2 lg:pb-16">
            <Eyebrow>{t.home.heroEyebrow}</Eyebrow>
            <h1 className="display-xl mt-7">{t.home.heroTitle}</h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
              {t.home.heroBody}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink to="/find-my-dog" size="lg">
                {t.home.heroCta}
                <Arrow />
              </ButtonLink>
              <ButtonLink to="/breeds" tone="outline" size="lg">
                {t.home.heroSecondary}
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{t.home.heroCaption}</p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface md:aspect-[5/4] lg:aspect-[4/5]">
              <img
                ref={parallax as never}
                src={heroImage}
                alt={c.heroAlt}
                width={1600}
                height={1200}
                fetchPriority="high"
                className="h-full w-full scale-[1.04] object-cover will-change-transform"
              />
            </div>
            <figure className="absolute -bottom-8 left-4 hidden w-60 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-lift)] md:block lg:-left-10">
              <figcaption className="eyebrow">{c.matchLooks}</figcaption>
              <p className="mt-3 font-display text-lg leading-tight text-foreground">
                Labrador Retriever
              </p>
              <p className="mt-2 font-display text-3xl font-semibold tabular-nums tracking-tight text-accent">
                94<span className="text-xl align-top">%</span>
              </p>
              <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-surface-strong">
                <span className="block h-full w-[94%] rounded-full bg-accent" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{c.match}</p>
            </figure>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- Anchors for this page */}
      <nav aria-label={c.jumpLabel} className="container-page mt-16 md:mt-20">
        <h2 className="eyebrow">{c.jumpTitle}</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {SECTION_IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="inline-flex min-h-11 items-center rounded-full border border-border bg-surface px-4 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                {c.anchors[id]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ---------------------------------------------------- Value strip */}
      <section id="why-doggmatch" aria-label={c.anchors["why-doggmatch"]} className="container-page mt-16 md:mt-20">
        <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.home.valueStrip.map((item) => (
            <div key={item.title} className="bg-background p-7">
              <dt className="font-display text-lg tracking-tight">{item.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ------------------------------------------------------ How it works */}
      <Section id="how-it-works">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>{t.home.howEyebrow}</Eyebrow>
              <h2 className="display-lg mt-6 max-w-md">{t.home.howTitle}</h2>
              <div className="mt-10 hidden overflow-hidden rounded-[1.75rem] lg:block">
                <img
                  src={homeImage}
                  alt={c.terrierAlt}
                  width={1200}
                  height={1504}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>

            <ol className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
              {t.home.steps.map((step) => (
                <li key={step.no} className="bg-background p-8 md:p-12">
                  <span className="font-display text-sm tabular-nums text-accent">{step.no}</span>
                  <h3 className="display-md mt-5">{step.title}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------- Breed preview */}
      <Section id="dog-breeds" className="bg-surface">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-lg">
              <Eyebrow>{t.home.breedsEyebrow}</Eyebrow>
              <h2 className="display-lg mt-6">{t.home.breedsTitle}</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{t.home.breedsBody}</p>
            </div>
            <Link
              to="/breeds"
              className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium"
            >
              {t.home.breedsCta}
              <Arrow />
            </Link>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((breed) => (
              <li key={breed.id}>
                <Link
                  to="/breeds/$breedId"
                  params={{ breedId: breed.id }}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-[1.25rem] bg-background">
                    <img
                      src={breedImages[breed.id]}
                      alt={breedContent()[breed.id].displayName}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg leading-tight tracking-tight">
                    {breedContent()[breed.id].displayName}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {breedGroupLabel(breed.group)} · {breedOriginLabel(breed.origin)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ------------------------------------------------------- Comparison */}
      <Section id="compare-breeds">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div className="max-w-lg">
            <Eyebrow>{t.home.compareEyebrow}</Eyebrow>
            <h2 className="display-lg mt-6">{t.home.compareTitle}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{t.home.compareBody}</p>
            <div className="mt-9">
              <ButtonLink to="/compare" tone="outline" size="lg">
                {t.home.compareCta}
                <Arrow />
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-card p-7 shadow-[var(--shadow-soft)] md:p-9">
            <div className="grid grid-cols-2 gap-4 border-b border-border pb-5">
              {breeds.slice(0, 2).map((b) => (
                <div key={b.id}>
                  <img
                    src={breedImages[b.id]}
                    alt={breedContent()[b.id].displayName}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                  <p className="mt-3 font-display text-sm leading-tight">
                    {breedContent()[b.id].displayName}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 divide-y divide-border">
              {(["energy", "trainability", "shedding", "apartmentSuitability"] as const).map((key) => (
                <div key={key} className="grid grid-cols-2 gap-4">
                  <TraitMeter
                    label={key === "apartmentSuitability" ? "Apartment" : key.charAt(0).toUpperCase() + key.slice(1)}
                    value={breeds[0]!.traits[key]}
                  />
                  <TraitMeter label="" value={breeds[1]!.traits[key]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------- DoggMatch+ */}
      <Section id="doggmatch-plus" className="pt-0">
        <div className="container-page max-w-3xl">
          <Eyebrow>{c.plusEyebrow}</Eyebrow>
          <h2 className="display-lg mt-6">{c.plusTitle}</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">{c.plusBody}</p>
          <div className="mt-9">
            <ButtonLink to="/plus" tone="outline" size="lg">
              {c.plusCta}
              <Arrow />
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------------- Dog Life */}
      <Section id="dog-life" className="pt-0">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={dogLifeImage}
              alt={c.parkAlt}
              width={1600}
              height={1008}
              loading="lazy"
              className="h-[26rem] w-full object-cover md:h-[34rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-14">
              <p className="eyebrow text-primary-foreground/70">{t.home.lifeEyebrow}</p>
              <h2 className="display-lg mt-4 max-w-xl text-primary-foreground">{t.home.lifeTitle}</h2>
              <p className="mt-4 max-w-lg leading-relaxed text-primary-foreground/80">
                {t.home.lifeBody}
              </p>
              <div className="mt-8">
                <ButtonLink to="/dog-life" tone="accent" size="lg">
                  {t.home.lifeCta}
                  <Arrow />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------------- FAQ */}
      <Section id="faq" className="pt-0">
        <div className="container-page">
          <Eyebrow>{c.faqEyebrow}</Eyebrow>
          <h2 className="display-lg mt-6 max-w-lg">{c.faqTitle}</h2>
          <dl className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
            {c.faq.map((item) => (
              <div key={item.q}>
                <dt className="font-display text-lg leading-tight tracking-tight">{item.q}</dt>
                <dd className="mt-3 max-w-md leading-relaxed text-muted-foreground">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ---------------------------------------------------------- Closing */}
      <Section id="find-your-dog" className="border-t border-border pt-16 md:pt-24">
        <div className="container-page max-w-3xl text-center">
          <h2 className="display-lg">{t.home.closingTitle}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{t.home.closingBody}</p>
          <div className="mt-10 flex justify-center">
            <ButtonLink to="/find-my-dog" size="lg">
              {t.home.closingCta}
              <Arrow />
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
