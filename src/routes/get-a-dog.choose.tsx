import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { CardGrid, Checklist, Notice, PointList, SectionHead } from "@/components/dogmatch/journey/parts";
import {
  adoptionConsiderations,
  breederQuestions,
  breederRedFlags,
  puppyVsAdult,
  sources,
} from "@/data/getdog/content.en";
import puppyImage from "@/assets/puppy.jpg";
import adultImage from "@/assets/adult-dog.jpg";
import breederImage from "@/assets/breeder.jpg";
import adoptionImage from "@/assets/adoption.jpg";

const title = "Puppy or adult, breeder or rescue — choosing carefully | DoggMatch";
const description =
  "An honest comparison of puppies and adult dogs, what to ask a breeder, the red flags worth noticing, and what to think about when you adopt.";

export const Route = createFileRoute("/get-a-dog/choose")({
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
    links: [{ rel: "canonical", href: "/get-a-dog/choose" }],
  }),
  component: ChoosePage,
});

function ChoosePage() {
  return (
    <div className="pb-24">
      <section className="container-page max-w-3xl pt-28 md:pt-36">
        <p className="eyebrow">Choose carefully</p>
        <h1 className="display-xl mt-6">{puppyVsAdult.title}</h1>
        <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{puppyVsAdult.body}</p>
      </section>

      {/* ---------------------------------------------------- Puppy / adult */}
      <Section className="pt-16 md:pt-20">
        <div className="container-page grid gap-8 md:grid-cols-2">
          {[
            { data: puppyVsAdult.puppy, img: puppyImage, alt: "A cocker spaniel puppy sitting beside a chewed slipper" },
            { data: puppyVsAdult.adult, img: adultImage, alt: "A calm adult dog resting on a sofa in a sunlit flat" },
          ].map(({ data, img, alt }) => (
            <article key={data.title} className="overflow-hidden rounded-[1.75rem] border border-border bg-card">
              <img src={img} alt={alt} width={1200} height={1504} loading="lazy" className="aspect-[5/4] w-full object-cover" />
              <div className="p-8 md:p-10">
                <h2 className="display-md">{data.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{data.lead}</p>
                <p className="eyebrow mt-8">What's good</p>
                <div className="mt-4">
                  <PointList items={data.good} />
                </div>
                <p className="eyebrow mt-8">What's hard</p>
                <div className="mt-4">
                  <PointList items={data.hard} tone="watch" />
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="container-page mt-10 max-w-3xl">
          <Notice>{puppyVsAdult.closing}</Notice>
        </div>
      </Section>

      {/* --------------------------------------------------------- Sources */}
      <Section className="bg-surface">
        <div className="container-page">
          <SectionHead eyebrow="Where from" title={sources.title} body={sources.body} />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              { data: sources.breeder, img: breederImage, alt: "A mother dog resting with her puppies on a blanket in a family living room" },
              { data: sources.rescue, img: adoptionImage, alt: "A woman crouching to greet an adult rescue dog at a shelter" },
            ].map(({ data, img, alt }) => (
              <article key={data.title} className="overflow-hidden rounded-[1.75rem] border border-border bg-background">
                <img src={img} alt={alt} width={1408} height={1056} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-8 md:p-10">
                  <h3 className="display-md">{data.title}</h3>
                  <p className="eyebrow mt-6">What's good about it</p>
                  <div className="mt-4">
                    <PointList items={data.good} />
                  </div>
                  <p className="eyebrow mt-8">Worth looking into</p>
                  <div className="mt-4">
                    <PointList items={data.check} tone="watch" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------------- Breeder */}
      <Section>
        <div className="container-page">
          <SectionHead
            eyebrow="Meeting a breeder"
            title="What to ask, and what to notice."
            body="Tick these off as you go. A good breeder will be pleased you asked — most of them wish more people did."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="eyebrow">Questions worth asking</p>
              <div className="mt-6">
                <Checklist
                  listId="breeder"
                  columns={1}
                  items={breederQuestions.map((q, i) => ({ id: `q${i}`, label: q }))}
                />
              </div>
            </div>
            <div>
              <p className="eyebrow">Things that give us pause</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                None of these prove anything on their own. Two or three together are usually a reason to
                take your time, or walk away — and it's always fine to walk away.
              </p>
              <div className="mt-6 rounded-2xl border border-border bg-card p-7">
                <PointList items={breederRedFlags} tone="watch" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------- Adoption */}
      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <SectionHead
            eyebrow="Adoption"
            title="Thinking about adoption?"
            body="Rescue dogs aren't damaged goods. Most are perfectly ordinary dogs whose people ran out of time, money or health. Here's what's worth talking through."
          />
          <div className="mt-12">
            <CardGrid items={adoptionConsiderations} />
          </div>
        </div>
      </Section>

      <div className="container-page mt-4 flex flex-wrap gap-3">
        <ButtonLink to="/get-a-dog/costs" size="lg">
          What will a dog really cost?
          <Arrow />
        </ButtonLink>
        <ButtonLink to="/find-my-dog" tone="outline" size="lg">
          Find My Dog
        </ButtonLink>
      </div>
    </div>
  );
}