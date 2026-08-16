import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { breedGroupLabel, breedOriginLabel } from "@/data/breed-meta";
import { useT, useLocale, pick } from "@/i18n";
import { getBreed } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { Arrow, ButtonLink, Eyebrow, TraitMeter } from "@/components/dogmatch/ui";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import { seoLinks, abs, breadcrumbLd, jsonLd } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

export const Route = createFileRoute("/breeds/$breedId")({
  loader: ({ params }) => {
    const breed = getBreed(params.breedId);
    if (!breed) throw notFound();
    return { breed, content: breedContent()[breed.id] };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "We can't find that breed — DoggMatch" }, { name: "robots", content: "noindex" }] };
    }
    const name = loaderData.content.displayName;
    const title = `${name} — what they're really like to live with | DoggMatch`;
    const description = loaderData.content.summary;
    const image = abs(breedImages[loaderData.breed.id] ?? "/og-image.jpg");
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: abs(`/breeds/${params.breedId}`) },
        { property: "og:image", content: image },
        { property: "og:image:alt", content: `${name} — DoggMatch breed profile` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: seoLinks(`/breeds/${params.breedId}`),
      scripts: [
        breadcrumbLd([
          { name: "DoggMatch", path: "/" },
          { name: "Breeds", path: "/breeds" },
          { name, path: `/breeds/${params.breedId}` },
        ]),
        jsonLd({
          "@type": "Article",
          headline: title,
          description,
          image,
          about: { "@type": "Thing", name },
          isPartOf: { "@type": "WebSite", name: "DoggMatch", url: abs("/") },
          mainEntityOfPage: abs(`/breeds/${params.breedId}`),
        }),
      ],
    };
  },
  component: BreedDetail,
});

const labels = {
  size: { en: "Size", no: "Størrelse" },
  energy: { en: "Energy", no: "Energi" },
  exerciseNeeds: { en: "Exercise needs", no: "Mosjonsbehov" },
  mentalStimulation: { en: "Mental stimulation", no: "Mental stimulering" },
  trainability: { en: "Trainability", no: "Lærevillighet" },
  sociability: { en: "Sociability", no: "Sosial med folk" },
  affection: { en: "Affection", no: "Kosete" },
  independence: { en: "Independence", no: "Selvstendighet" },
  goodWithChildren: { en: "Good with children", no: "Passer med barn" },
  goodWithDogs: { en: "Good with other dogs", no: "Passer med andre hunder" },
  apartmentSuitability: { en: "Apartment suitability", no: "Passer i leilighet" },
  aloneTolerance: { en: "Tolerance of being alone", no: "Tåler å være alene" },
  shedding: { en: "Shedding", no: "Pelsfelling" },
  grooming: { en: "Grooming", no: "Pelsstell" },
  barking: { en: "Barking", no: "Bjeffing" },
  firstTimeSuitability: { en: "First-time owner suitability", no: "Passer for førstegangseiere" },
} as const;

function BreedDetail() {
  const t = useT();
  const { breed } = Route.useLoaderData();
  const content = breedContent()[breed.id];
  const traitRows: [string, number][] = (Object.keys(labels) as (keyof typeof labels)[]).map((key) => [
    pick(labels[key]),
    breed.traits[key],
  ]);

  return (
    <article className="pb-24">
      <div className="container-page py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/breeds" className="hover:text-foreground">
            {t.nav.breeds}
          </Link>
          <span aria-hidden="true"> / </span>
          <span className="text-foreground">{content.displayName}</span>
        </nav>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>
              {breedGroupLabel(breed.group)} · {breedOriginLabel(breed.origin)}
            </Eyebrow>
            <h1 className="display-xl mt-6">{content.displayName}</h1>
            <ShareBar className="mt-6" />
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {content.summary}
            </p>
            <dl className="mt-9 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              <div className="bg-background p-5">
                <dt className="eyebrow">{t.breeds.lifespan}</dt>
                <dd className="mt-2 font-display text-lg">
                  {breed.lifespan[0]}–{breed.lifespan[1]} {t.breeds.years}
                </dd>
              </div>
              <div className="bg-background p-5">
                <dt className="eyebrow">{t.breeds.cost}</dt>
                <dd className="mt-2 font-display text-lg">
                  €{breed.annualCost[0]}–{breed.annualCost[1]}
                </dd>
              </div>
            </dl>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={breedImages[breed.id]}
              alt={content.displayName}
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <section className="container-page grid gap-12 border-t border-border py-16 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="display-md">What people love about them</h2>
          <ul className="mt-7 space-y-4">
            {content.strengths.map((s) => (
              <li key={s} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <span aria-hidden="true" className="text-primary">
                  ✓
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="display-md">{t.result.considerTitle}</h2>
          <ul className="mt-7 space-y-4">
            {content.considerations.map((c) => (
              <li key={c} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <span aria-hidden="true" className="text-accent">
                  !
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page border-t border-border py-16">
        <h2 className="display-md">{t.breeds.traits}</h2>
        <div className="mt-8 grid gap-x-14 md:grid-cols-2">
          {traitRows.map(([label, value]) => (
            <div key={label} className="border-b border-border">
              <TraitMeter label={label} value={value} />
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {t.allergyNote}
        </p>
        <div className="mt-6">
          <SourcesLink category="breeds" />
        </div>
      </section>

      <div className="container-page flex flex-wrap gap-3">
        <ButtonLink to="/find-my-dog" size="lg">
          {t.nav.startMatching}
          <Arrow />
        </ButtonLink>
        <ButtonLink to="/compare" tone="outline" size="lg">
          {t.nav.compare}
        </ButtonLink>
      </div>
    </article>
  );
}
