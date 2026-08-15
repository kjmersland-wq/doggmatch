import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { CardGrid, Notice, PointList, SectionHead, StepList } from "@/components/dogmatch/journey/parts";
import { carSafety, carSickness, carSteps, longJourney, nervousDog, publicTransport, airTravel } from "@/data/travel/content.en";
import carImage from "@/assets/travel-car.jpg";
import safetyIllus from "@/assets/illus-car-safety.jpg";

const title = "Travelling by car with your dog — safely | DoggMatch";
const description =
  "How to secure a dog in a car, first journeys for a nervous dog, car sickness, long drives and breaks — and the honest truth about hot cars.";

export const Route = createFileRoute("/travel/car")({
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
    links: [{ rel: "canonical", href: "/travel/car" }],
  }),
  component: CarPage,
});

function CarPage() {
  return (
    <div className="pb-24">
      <section className="container-page pt-24 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="max-w-xl">
            <p className="eyebrow">In the car</p>
            <h1 className="display-xl mt-6">Getting there safely.</h1>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              An unsecured dog is dangerous — to themselves, and to everyone else in the car. It's also
              the easiest thing on this page to put right.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-surface">
            <img src={carImage} alt="A dog secured in a travel crate in the boot of an estate car" width={1600} height={1100} fetchPriority="high" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Safe / unsafe */}
      <Section className="pt-16 md:pt-24">
        <div className="container-page">
          <SectionHead
            eyebrow="Safe and unsafe"
            title="How your dog should travel."
            body={carSafety.note}
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr_0.8fr] lg:gap-12">
            <div className="rounded-[1.5rem] border border-border bg-card p-8">
              <p className="eyebrow">Safe</p>
              <div className="mt-5">
                <PointList items={carSafety.safe} />
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-border bg-card p-8">
              <p className="eyebrow">Not safe</p>
              <div className="mt-5">
                <PointList items={carSafety.unsafe} tone="watch" />
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.5rem]">
              <img src={safetyIllus} alt="An illustration comparing a dog secured in a crate with an unsecured dog on a car seat" width={1200} height={1200} loading="lazy" className="aspect-square w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------- Hot cars */}
      <Section className="pt-0">
        <div className="container-page max-w-3xl">
          <div className="rounded-[1.75rem] border-2 border-accent bg-accent-soft/50 p-8 md:p-10">
            <p className="eyebrow text-accent">Please read this one</p>
            <h2 className="display-md mt-4">Never leave your dog in a parked car in warm weather.</h2>
            <p className="mt-5 leading-relaxed">
              A car heats up far faster than people expect, and a dog can't cool itself the way we can.
              Shade moves. A window cracked open does very little. On a mild day it can still become
              dangerous inside in minutes.
            </p>
            <p className="mt-4 leading-relaxed">
              If you see a dog in distress in a locked car — panting hard, drooling, unsteady, unresponsive —
              call your local emergency number. It is always better to be wrong about it than too late.
            </p>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------- First journeys */}
      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHead
                eyebrow="First journeys"
                title="Start smaller than you think."
                body="Most dogs who hate the car learned to hate it on one long, frightening trip. Undoing that takes far longer than doing it gently in the first place."
              />
              <div className="mt-8 rounded-2xl border border-border bg-background p-7">
                <p className="eyebrow">If your dog is nervous</p>
                <div className="mt-5">
                  <PointList items={nervousDog} />
                </div>
              </div>
            </div>
            <StepList steps={carSteps} />
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------- Sickness */}
      <Section>
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">Car sickness</p>
            <h2 className="display-md mt-4">Very common, and usually improves.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Signs to watch for: {carSickness.signs.join(", ").toLowerCase()}.
            </p>
            <div className="mt-6">
              <PointList items={carSickness.helps} />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{carSickness.note}</p>
          </article>
          <article className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">Long journeys</p>
            <h2 className="display-md mt-4">Breaks, water and patience.</h2>
            <div className="mt-6">
              <PointList items={longJourney} />
            </div>
          </article>
        </div>
      </Section>

      {/* ----------------------------------------------- Other transport */}
      <Section className="pt-0">
        <div className="container-page">
          <SectionHead
            eyebrow="Trains, buses, boats and planes"
            title="Everything else that moves."
            body="Every operator sets its own rules, and they change. Always confirm directly with them before you book anything."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Public transport</p>
              <div className="mt-6">
                <CardGrid items={publicTransport} columns={2} />
              </div>
            </div>
            <div>
              <p className="eyebrow">Flying</p>
              <div className="mt-6 rounded-2xl border border-border bg-card p-7">
                <PointList items={airTravel} tone="watch" />
              </div>
            </div>
          </div>
          <div className="mt-10 max-w-3xl">
            <Notice>
              Flying is genuinely hard on some dogs, and some airlines won't carry flat-faced breeds at
              all because of the risk. If there's a way to drive or take a ferry instead, it's usually
              kinder.
            </Notice>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink to="/travel/outdoors" size="lg">
              Walks, trails and weather
              <Arrow />
            </ButtonLink>
            <ButtonLink to="/travel/abroad" tone="outline" size="lg">
              Travelling abroad
            </ButtonLink>
          </div>
        </div>
      </Section>
    </div>
  );
}