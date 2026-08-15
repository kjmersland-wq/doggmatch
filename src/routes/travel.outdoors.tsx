import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { CardGrid, Notice, PointList, SectionHead } from "@/components/dogmatch/journey/parts";
import { hikingFactors, holidayChecklist, pawChecks, walkPrep, weather } from "@/data/travel/content.en";
import { Checklist } from "@/components/dogmatch/journey/parts";
import hikeImage from "@/assets/travel-hike.jpg";

const title = "Walks, hikes and weather — adventures your dog will enjoy | DoggMatch";
const description =
  "Building up to longer walks, hot and cold weather, paw care on tarmac and grit, water safety, and what to take on a holiday with your dog.";

export const Route = createFileRoute("/travel/outdoors")({
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
    links: [{ rel: "canonical", href: "/travel/outdoors" }],
  }),
  component: OutdoorsPage,
});

function OutdoorsPage() {
  return (
    <div className="pb-24">
      <section className="container-page pt-24 md:pt-32">
        <div className="overflow-hidden rounded-[2rem]">
          <img src={hikeImage} alt="A woman and her dog resting on a mountain trail at golden hour" width={1600} height={1008} fetchPriority="high" className="h-[22rem] w-full object-cover md:h-[30rem]" />
        </div>
        <div className="mt-12 max-w-2xl">
          <p className="eyebrow">Out and about</p>
          <h1 className="display-xl mt-6">Adventures they'll actually enjoy.</h1>
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
            Dogs will almost always keep going for you, well past the point they should have stopped.
            That's why the judgement has to be yours.
          </p>
        </div>
      </section>

      <Section className="pt-16 md:pt-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="Before a big walk" title="A little preparation." />
            <div className="mt-8 rounded-2xl border border-border bg-card p-7">
              <PointList items={walkPrep} />
            </div>
          </div>
          <div>
            <SectionHead eyebrow="Hiking" title="What decides how far you go." />
            <div className="mt-8">
              <CardGrid items={hikingFactors} columns={2} />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <SectionHead eyebrow="Weather" title={weather.title} body={weather.body} />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <article className="rounded-[1.75rem] border border-border bg-background p-8 md:p-10">
              <h3 className="display-md">Heat</h3>
              <div className="mt-6">
                <PointList items={weather.heat} tone="watch" />
              </div>
            </article>
            <article className="rounded-[1.75rem] border border-border bg-background p-8 md:p-10">
              <h3 className="display-md">Cold</h3>
              <div className="mt-6">
                <PointList items={weather.cold} tone="watch" />
              </div>
            </article>
          </div>
          <div className="mt-10 max-w-3xl">
            <Notice title="Heatstroke is an emergency">
              Heavy panting that won't settle, bright red gums, drooling, wobbliness, vomiting or
              collapse. Get them into shade, offer water, cool them with tepid — not icy — water, and ring
              a vet straight away.
            </Notice>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHead eyebrow="Paws" title="Check them after every big day." />
            <div className="mt-8 rounded-2xl border border-border bg-card p-7">
              <PointList items={pawChecks} />
            </div>
          </div>
          <div>
            <SectionHead eyebrow="A holiday together" title="What to take." body="Tick it off as you pack. It saves on this device, so it'll still be here next time." />
            <div className="mt-8">
              <Checklist listId="holiday" items={holidayChecklist} />
            </div>
          </div>
        </div>

        <div className="container-page mt-14 flex flex-wrap gap-3">
          <ButtonLink to="/travel/abroad" size="lg">
            Travelling abroad
            <Arrow />
          </ButtonLink>
          <ButtonLink to="/dog-life" tone="outline" size="lg">
            Find dog-friendly places
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}