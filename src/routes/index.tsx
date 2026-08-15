import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n";
import { breeds } from "@/data/breeds";
import { breedContentEn } from "@/data/breed-content.en";
import { breedImages } from "@/data/breed-images";
import { Arrow, ButtonLink, Eyebrow, Section, TraitMeter } from "@/components/dogmatch/ui";
import heroImage from "@/assets/hero.jpg";
import homeImage from "@/assets/editorial-home.jpg";
import dogLifeImage from "@/assets/dog-life.jpg";

const title = "DogMatch — Find the dog that's right for your life";
const description =
  "A smarter way to discover the dog breed that fits your lifestyle, home, personality and everyday life. Personalised, explainable breed matching.";
const ogImage =
  "https://project--133462b6-1f26-496e-a35b-0de87a08b8b1.lovable.app/og-image.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "DogMatch — the right dog, the right life" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
                alt="A woman walking a golden retriever along a coastal path at sunrise"
                width={1600}
                height={1200}
                fetchPriority="high"
                className="h-full w-full scale-[1.04] object-cover will-change-transform"
              />
            </div>
            <figure className="absolute -bottom-8 left-4 hidden w-60 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-lift)] md:block lg:-left-10">
              <figcaption className="eyebrow">Sample match</figcaption>
              <p className="mt-3 font-display text-lg leading-tight">Labrador Retriever</p>
              <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-surface-strong">
                <span className="block h-full w-[94%] rounded-full bg-primary" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">94% compatibility</p>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Value strip */}
      <section className="container-page mt-24 md:mt-32">
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
      <Section>
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>{t.home.howEyebrow}</Eyebrow>
              <h2 className="display-lg mt-6 max-w-md">{t.home.howTitle}</h2>
              <div className="mt-10 hidden overflow-hidden rounded-[1.75rem] lg:block">
                <img
                  src={homeImage}
                  alt="A terrier resting in a sunlit apartment"
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
      <Section className="bg-surface">
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
                      alt={breedContentEn[breed.id].displayName}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg leading-tight tracking-tight">
                    {breedContentEn[breed.id].displayName}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {breed.group} · {breed.origin}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ------------------------------------------------------- Comparison */}
      <Section>
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
                    alt={breedContentEn[b.id].displayName}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                  <p className="mt-3 font-display text-sm leading-tight">
                    {breedContentEn[b.id].displayName}
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

      {/* --------------------------------------------------------- Dog Life */}
      <Section className="pt-0">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={dogLifeImage}
              alt="A city park at dawn with winding walking paths"
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

      {/* ---------------------------------------------------------- Closing */}
      <Section className="border-t border-border pt-16 md:pt-24">
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
