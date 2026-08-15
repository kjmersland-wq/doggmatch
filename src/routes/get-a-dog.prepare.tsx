import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { CardGrid, Checklist, Notice, PointList, SectionHead } from "@/components/dogmatch/journey/parts";
import { arrivalChecklist, homeFactors, homeScenarios, lifeScenarios } from "@/data/getdog/content.en";
import { useGetDog } from "@/lib/getdog/store";
import homePrepImage from "@/assets/illus-home-prep.jpg";

const title = "Get ready — your home, your days and the arrival checklist | DoggMatch";
const description =
  "What your home and your everyday life mean for a dog, honest answers about allergies and time alone, and a tickable arrival checklist you can print.";

export const Route = createFileRoute("/get-a-dog/prepare")({
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
    links: [{ rel: "canonical", href: "/get-a-dog/prepare" }],
  }),
  component: PreparePage,
});

function PreparePage() {
  const state = useGetDog();
  const ticked = state.checked["arrival"] ?? [];

  return (
    <div className="pb-24">
      <section className="container-page max-w-3xl pt-28 md:pt-36">
        <p className="eyebrow">Get ready</p>
        <h1 className="display-xl mt-6">Getting everything ready.</h1>
        <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
          Your home, your days, and the practical things that are far easier to sort out now than in the
          middle of a first week with a new dog.
        </p>
      </section>

      {/* ------------------------------------------------------- Your home */}
      <Section className="pt-16 md:pt-20">
        <div className="container-page">
          <SectionHead
            eyebrow="Your home"
            title="Almost any home can be a good home."
            body="Dogs care much less about square metres than people expect. What's within ten minutes of your front door matters far more."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <CardGrid items={homeScenarios.map((s) => ({ title: s.title, body: s.body }))} columns={2} />
            <div>
              <p className="eyebrow">Worth checking</p>
              <div className="mt-6 rounded-2xl border border-border bg-card p-7">
                <PointList items={homeFactors} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------- Everyday life */}
      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <SectionHead
            eyebrow="Your everyday life"
            title="What does an ordinary week look like for you?"
            body="The dog has to fit the week you actually have, not the one you'd like to have. Find yourself below."
          />
          <div className="mt-12">
            <CardGrid items={lifeScenarios.map((s) => ({ title: s.title, body: s.body }))} />
          </div>
        </div>
      </Section>

      {/* -------------------------------------- Allergies and time alone */}
      <Section>
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">Allergies</p>
            <h2 className="display-md mt-4">What we can honestly say.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Some breeds tend to shed less than others, and people with allergies sometimes find them
              easier to live with. But no dog is completely allergy-free. The proteins people react to are
              in saliva and skin as well as hair, and reactions vary enormously from person to person.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              If someone in your home has allergies, spend real time with the individual dog before you
              commit — several visits, not one — and talk to your doctor. That tells you far more than any
              breed list, including ours.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">Time alone</p>
            <h2 className="display-md mt-4">How long is too long?</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Most adult dogs manage three or four hours alone comfortably once they've learned how. A
              puppy can't do that at first — they need someone there most of the day for the first months,
              and building up to being alone is a skill you teach slowly.
            </p>
            <div className="mt-6">
              <PointList
                items={[
                  "Practise short absences from the very first week, before there's any need",
                  "A midday walker or a neighbour turns a difficult day into an easy one",
                  "Daycare a couple of days a week suits some dogs and overwhelms others",
                  "A dog who panics when left needs help early — it rarely improves on its own",
                ]}
              />
            </div>
          </article>
        </div>
      </Section>

      {/* ------------------------------------------------------- Checklist */}
      <Section className="pt-0">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHead
                eyebrow="Before they arrive"
                title="The arrival checklist."
                body="Tick things off as you get them. It saves as you go, on this device, so you can come back to it in a shop."
              />
              <p className="mt-8 font-display text-4xl tabular-nums tracking-tight text-accent">
                {ticked.length}
                <span className="text-xl text-muted-foreground"> / {arrivalChecklist.length}</span>
              </p>
              <div className="mt-8 hidden overflow-hidden rounded-[1.5rem] lg:block">
                <img
                  src={homePrepImage}
                  alt="An illustrated flat-lay of a dog bed, bowls, lead, harness and toys"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="mt-8">
                <ButtonLink to="/my-dog/print" tone="outline">
                  Print my arrival checklist
                  <Arrow />
                </ButtonLink>
              </div>
            </div>

            <Checklist listId="arrival" items={arrivalChecklist} />
          </div>
        </div>
      </Section>

      <div className="container-page max-w-3xl">
        <Notice title="One honest note">
          Buy less than you think. A bed, bowls, food, a harness, a lead and an ID tag will get you
          through the first week perfectly well. You'll learn what your dog actually likes soon enough.
        </Notice>
        <div className="mt-10">
          <ButtonLink to="/get-a-dog/welcome-home" size="lg">
            The first days home
            <Arrow />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}