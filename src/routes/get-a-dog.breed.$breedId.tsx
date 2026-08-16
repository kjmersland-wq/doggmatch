import { createFileRoute, notFound } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { Notice, SectionHead } from "@/components/dogmatch/journey/parts";
import { getBreed } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { costRange, prepCards } from "@/lib/getdog/prep";
import { getDogStore } from "@/lib/getdog/store";
import { useCopy } from "@/i18n";
import { useEffect } from "react";

export const Route = createFileRoute("/get-a-dog/breed/$breedId")({
  loader: ({ params }) => {
    const breed = getBreed(params.breedId);
    if (!breed) throw notFound();
    return { breedId: breed.id };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable | DoggMatch" }, { name: "robots", content: "noindex" }] };
    }
    const name = breedContent()[loaderData.breedId].displayName;
    const title = `Getting ready for a ${name} — what to know before you commit | DoggMatch`;
    const description = `What a ${name} will actually ask of you: exercise, training, grooming, being alone, cost and the first weeks — drawn from their real traits, not a sales pitch.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
    };
  },
  component: BreedPrepPage,
});


const copy = {
  en: {
    eyebrow: "I'm interested — what should I know?",
    heading: (name: string) => `Getting ready for a ${name}.`,
    intro:
      "Everything below comes from this breed's own traits in our library — what they'll ask of " +
      "you week after week, including the parts people wish they'd known.",
    askEyebrow: "What this dog will ask of you",
    askTitle: "Honestly, week after week.",
    moneyEyebrow: "The money",
    moneyTitle: (name: string) => `What a ${name} tends to cost`,
    moneyBody:
      "Per year, once they're settled — food, insurance, routine vet care and grooming. Wide on " +
      "purpose: prices differ enormously by country and city, and this is not a quote.",
    noticeTitle: "Before you say yes",
    noticeBody:
      "Meet the dog more than once if you possibly can, on a normal day rather than a special one. " +
      "Ask what they're like at six in the morning and at ten at night. The honest answer to that " +
      "question tells you more than any breed description, including this one.",
    prepareCta: "Get my home ready",
    profileCta: "The full breed profile",
    costsCta: "Costs in full",
  },
  no: {
    eyebrow: "Jeg er interessert — hva bør jeg vite?",
    heading: (name: string) => `Gjør deg klar for en ${name}.`,
    intro:
      "Alt under kommer fra denne rasens egne egenskaper i biblioteket vårt — hva den vil be deg om " +
      "uke etter uke, inkludert det folk skulle ønske de visste på forhånd.",
    askEyebrow: "Det denne hunden vil be deg om",
    askTitle: "Ærlig talt, uke etter uke.",
    moneyEyebrow: "Pengene",
    moneyTitle: (name: string) => `Hva en ${name} pleier å koste`,
    moneyBody:
      "Per år, når hunden har slått seg til — mat, forsikring, rutinemessig veterinærbesøk og stell. " +
      "Bevisst bredt: prisene varierer enormt fra land til land og by til by, og dette er ikke et tilbud.",
    noticeTitle: "Før du sier ja",
    noticeBody:
      "Møt hunden mer enn én gang hvis du i det hele tatt kan, på en vanlig dag heller enn en spesiell. " +
      "Spør hvordan den er klokken seks om morgenen og klokken ti om kvelden. Det ærlige svaret på det " +
      "spørsmålet forteller deg mer enn noen rasebeskrivelse, denne inkludert.",
    prepareCta: "Gjør hjemmet mitt klart",
    profileCta: "Hele raseprofilen",
    costsCta: "Kostnader i sin helhet",
  },
} as const;

function BreedPrepPage() {
  const c = useCopy(copy);
  const { breedId } = Route.useLoaderData();
  const breed = getBreed(breedId)!;
  const content = breedContent()[breed.id];
  const cards = prepCards(breed);

  useEffect(() => {
    getDogStore.setInterest(breed.id);
  }, [breed.id]);

  return (
    <div className="pb-24">
      <section className="container-page pt-24 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="max-w-xl">
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 className="display-xl mt-6">{c.heading(content.displayName)}</h1>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{content.summary}</p>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.intro}
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-surface">
            <img
              src={breedImages[breed.id]}
              alt={content.displayName}
              width={1024}
              height={1280}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Section className="pt-16 md:pt-24">
        <div className="container-page">
          <SectionHead eyebrow={c.askEyebrow} title={c.askTitle} />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <li key={card.id} className="bg-background p-8">
                <p className="eyebrow">{card.title}</p>
                <h3 className="display-md mt-4">{card.headline}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHead eyebrow={c.moneyEyebrow} title={c.moneyTitle(content.displayName)} />
              <p className="mt-6 font-display text-4xl tracking-tight text-accent">{costRange(breed)}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                {c.moneyBody}
              </p>
            </div>
            <Notice title={c.noticeTitle}>
              {c.noticeBody}
            </Notice>
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            <ButtonLink to="/get-a-dog/prepare" size="lg">
              {c.prepareCta}
              <Arrow />
            </ButtonLink>
            <ButtonLink to={`/breeds/${breed.id}` as never} tone="outline" size="lg">
              {c.profileCta}
            </ButtonLink>
            <ButtonLink to="/get-a-dog/costs" tone="ghost" size="lg">
              {c.costsCta}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </div>
  );
}