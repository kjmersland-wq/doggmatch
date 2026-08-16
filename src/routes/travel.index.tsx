import { createFileRoute, Link } from "@tanstack/react-router";
import { useCopy } from "@/i18n";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { CardGrid, SectionHead } from "@/components/dogmatch/journey/parts";
import { getTravelWithDifferentDogs } from "@/data/travel/content";
import heroImage from "@/assets/travel-hike.jpg";
import carImage from "@/assets/travel-car.jpg";
import abroadImage from "@/assets/travel-abroad.jpg";
import { SourcesLink } from "@/components/dogmatch/sources-link";

const title = "Travel and adventures with your dog — car, trail and abroad | DoggMatch";
const description =
  "Getting there safely and having a good time when you arrive: car safety, first journeys, hot weather, paws, hiking, dog-friendly places, and travelling between countries.";

export const Route = createFileRoute("/travel/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/travel" }],
  }),
  component: TravelPage,
});

const copy = {
  en: {
    eyebrow: "Travel and adventures",
    heroTitle: "Going somewhere together?",
    heroBody:
      "Half of a good trip is getting there safely. The other half is knowing your dog is genuinely enjoying it — and knowing when to turn back.",
    checkJourney: "Check my journey",
    carSafety: "Car safety",
    open: "Open",
    sections: [
      {
        to: "/travel/car",
        label: "In the car",
        title: "Getting there safely.",
        body: "How to secure a dog properly, first journeys for a nervous dog, car sickness, long drives — and why a parked car in summer is so dangerous.",
        alt: "A dog secured in a travel crate in the boot of an estate car",
      },
      {
        to: "/travel/outdoors",
        label: "Out and about",
        title: "Walks, trails and weather.",
        body: "Building up to longer hikes, heat and cold, paws on hot tarmac and grit, water safety, and places that are genuinely pleased to see a dog.",
        alt: "A woman and her dog resting on a mountain trail at golden hour",
      },
      {
        to: "/travel/abroad",
        label: "Crossing borders",
        title: "Travelling abroad.",
        body: "Tell us where you're going and when. We'll show what's usually required — microchip, rabies, passport, worming — and point you at the official source for the final word.",
        alt: "A dog waiting calmly beside a suitcase in an airy departure hall",
      },
    ],
    differentEyebrow: "Not every dog travels the same",
    differentTitle: "Who you're travelling with changes everything.",
    differentBody: "A puppy, an old dog, a flat-faced breed and a fit adult need quite different plans for the same journey.",
  },
  no: {
    eyebrow: "Reise og eventyr",
    heroTitle: "Skal dere et sted sammen?",
    heroBody:
      "Halvparten av en god tur er å komme trygt frem. Den andre halvparten er å vite at hunden din faktisk koser seg — og å vite når dere bør snu.",
    checkJourney: "Sjekk reisen min",
    carSafety: "Sikkerhet i bilen",
    open: "Åpne",
    sections: [
      {
        to: "/travel/car",
        label: "I bilen",
        title: "Å komme trygt frem.",
        body: "Hvordan sikre en hund riktig, første turer for en engstelig hund, bilsyke, lange kjøreturer — og hvorfor en parkert bil om sommeren er så farlig.",
        alt: "En hund sikret i et transportbur i bagasjerommet på en stasjonsvogn",
      },
      {
        to: "/travel/outdoors",
        label: "Ute og går",
        title: "Turer, stier og vær.",
        body: "Å bygge opp til lengre turer, varme og kulde, poter på varm asfalt og grus, vannsikkerhet, og steder som virkelig setter pris på en hund.",
        alt: "En kvinne og hunden hennes hviler på en fjellsti i gyllent lys",
      },
      {
        to: "/travel/abroad",
        label: "Over landegrenser",
        title: "Reise til utlandet.",
        body: "Fortell oss hvor og når dere skal reise. Vi viser hva som vanligvis kreves — chip, rabies, pass, ormekur — og peker deg til den offisielle kilden for det endelige svaret.",
        alt: "En hund som venter rolig ved siden av en koffert i en luftig avgangshall",
      },
    ],
    differentEyebrow: "Ikke alle hunder reiser likt",
    differentTitle: "Hvem du reiser med endrer alt.",
    differentBody: "En valp, en gammel hund, en rase med flatt ansikt og en sprek voksen hund trenger ganske ulike planer for samme reise.",
  },
} as const;

function TravelPage() {
  const c = useCopy(copy);
  const images = { "/travel/car": carImage, "/travel/outdoors": heroImage, "/travel/abroad": abroadImage } as const;
  return (
    <div className="pb-24">
      <section className="container-page pt-24 md:pt-32">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="animate-rise max-w-xl pb-2">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="display-xl mt-7">{c.heroTitle}</h1>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{c.heroBody}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink to="/travel/abroad" size="lg">
                {c.checkJourney}
                <Arrow />
              </ButtonLink>
              <ButtonLink to="/travel/car" tone="outline" size="lg">
                {c.carSafety}
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-surface">
            <img
              src={heroImage}
              alt="A woman and her dog resting on a mountain trail at golden hour"
              width={1600}
              height={1100}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Section>
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {c.sections.map((s) => (
            <Link
              key={s.to}
              to={s.to as never}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card transition-colors hover:border-border-strong"
            >
              <img src={images[s.to as keyof typeof images]} alt={s.alt} width={1408} height={1056} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]" />
              <div className="flex flex-1 flex-col p-8">
                <p className="eyebrow">{s.label}</p>
                <h2 className="display-md mt-4">{s.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium">
                  {c.open}
                  <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <SectionHead
            eyebrow={c.differentEyebrow}
            title={c.differentTitle}
            body={c.differentBody}
          />
          <div className="mt-12">
            <CardGrid items={getTravelWithDifferentDogs()} />
          </div>
          <div className="mt-10">
            <SourcesLink category="travel" />
          </div>
        </div>
      </Section>
    </div>
  );
}
