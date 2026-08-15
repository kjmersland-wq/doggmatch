import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { Notice, SectionHead } from "@/components/dogmatch/journey/parts";
import { costGroups } from "@/data/getdog/content.en";
import { breedById } from "@/data/breeds";
import { breedContentEn } from "@/data/breed-content.en";
import { costRange } from "@/lib/getdog/prep";
import { useGetDog } from "@/lib/getdog/store";

const title = "What will a dog really cost? Before they arrive, and every month | DoggMatch";
const description =
  "An honest look at the cost of a dog: the one-off spend before they arrive, the steady monthly cost, and the unexpected vet bills worth being ready for.";

export const Route = createFileRoute("/get-a-dog/costs")({
  head: () => ({
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
    links: [{ rel: "canonical", href: "/get-a-dog/costs" }],
  }),
  component: CostsPage,
});

function CostsPage() {
  const saved = useGetDog();
  const breed = saved.interestedIn ? breedById[saved.interestedIn] : undefined;

  return (
    <div className="pb-24">
      <section className="container-page max-w-3xl pt-28 md:pt-36">
        <p className="eyebrow">The commitment</p>
        <h1 className="display-xl mt-6">What will a dog really cost?</h1>
        <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
          Money is the least romantic part of this, and the part most likely to hurt later. Here's the
          shape of it, honestly. Actual prices differ enormously by country, city and dog.
        </p>
      </section>

      {breed && (
        <section className="container-page mt-12 max-w-3xl">
          <div className="rounded-[1.75rem] border border-border bg-surface p-8 md:p-10">
            <p className="eyebrow">Your match</p>
            <h2 className="display-md mt-3">{breedContentEn[breed.id].displayName}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Indicative running cost, per year, once they're settled:{" "}
              <span className="font-display text-foreground">{costRange(breed)}</span>. That's a broad range from
              our breed library, not a quote — food, insurance and grooming prices vary a great deal by country.
            </p>
          </div>
        </section>
      )}

      <Section className="pt-16 md:pt-20">
        <div className="container-page space-y-16">
          {costGroups.map((group) => (
            <div key={group.id} className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionHead title={group.title} body={group.body} />
              </div>
              <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item.label} className="bg-background p-7">
                    <p className="font-display text-[1.0625rem] leading-tight tracking-tight">{item.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <div className="container-page max-w-3xl">
        <Notice title="Where the numbers come from">
          Every breed page shows an indicative yearly cost range for that breed, and Compare puts two or
          three of them side by side. We'd rather show you a wide, honest range than a precise number
          that turns out to be wrong where you live.
        </Notice>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink to="/compare" size="lg">
            Compare costs side by side
            <Arrow />
          </ButtonLink>
          <ButtonLink to="/get-a-dog/prepare" tone="outline" size="lg">
            Get your home ready
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}