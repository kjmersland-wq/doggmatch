import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useT } from "@/i18n";
import { getBreed } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { Arrow, ButtonLink, Eyebrow, TraitMeter } from "@/components/dogmatch/ui";

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
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/breeds/${params.breedId}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/breeds/${params.breedId}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Breeds", item: "/breeds" },
              { "@type": "ListItem", position: 2, name, item: `/breeds/${params.breedId}` },
            ],
          }),
        },
      ],
    };
  },
  component: BreedDetail,
});

function BreedDetail() {
  const t = useT();
  const { breed, content } = Route.useLoaderData();
  const traitRows: [string, number][] = [
    ["Size", breed.traits.size],
    ["Energy", breed.traits.energy],
    ["Exercise needs", breed.traits.exerciseNeeds],
    ["Mental stimulation", breed.traits.mentalStimulation],
    ["Trainability", breed.traits.trainability],
    ["Sociability", breed.traits.sociability],
    ["Affection", breed.traits.affection],
    ["Independence", breed.traits.independence],
    ["Good with children", breed.traits.goodWithChildren],
    ["Good with other dogs", breed.traits.goodWithDogs],
    ["Apartment suitability", breed.traits.apartmentSuitability],
    ["Tolerance of being alone", breed.traits.aloneTolerance],
    ["Shedding", breed.traits.shedding],
    ["Grooming", breed.traits.grooming],
    ["Barking", breed.traits.barking],
    ["First-time owner suitability", breed.traits.firstTimeSuitability],
  ];

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
              {breed.group} · {breed.origin}
            </Eyebrow>
            <h1 className="display-xl mt-6">{content.displayName}</h1>
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
