import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { CardGrid, Notice, SectionHead } from "@/components/dogmatch/journey/parts";
import { firstDay, firstWeek } from "@/data/getdog/content.en";
import welcomeImage from "@/assets/welcome-home.jpg";

const title = "Welcome home — the first day and the first week | DoggMatch";
const description =
  "A calm, step-by-step guide to bringing your dog home: the journey, the first evening, sleep, the first small lessons, and settling into a routine together.";

export const Route = createFileRoute("/get-a-dog/welcome-home")({
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
    links: [{ rel: "canonical", href: "/get-a-dog/welcome-home" }],
  }),
  component: WelcomeHomePage,
});

function WelcomeHomePage() {
  return (
    <div className="pb-24">
      <section className="container-page pt-24 md:pt-32">
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src={welcomeImage}
            alt="A family sitting quietly on the floor as a newly arrived dog sniffs its new bed"
            width={1600}
            height={1008}
            fetchPriority="high"
            className="h-[22rem] w-full object-cover md:h-[30rem]"
          />
        </div>
        <div className="mt-12 max-w-2xl">
          <p className="eyebrow">Welcome home</p>
          <h1 className="display-xl mt-6">The day they arrive.</h1>
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
            Quieter than you're imagining, and slower than you'd like. That's exactly right. A new dog
            needs very little on day one beyond calm, water, and somewhere of their own.
          </p>
        </div>
      </section>

      <Section className="pt-16 md:pt-20">
        <div className="container-page">
          <SectionHead eyebrow="The first day" title="Six things, and nothing else." />
          <div className="mt-12">
            <CardGrid items={firstDay} />
          </div>
        </div>
      </Section>

      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <SectionHead
            eyebrow="The first week"
            title="Then, gently, a rhythm."
            body="Most dogs need two or three weeks to show you who they really are. Don't judge anything in the first few days — not their appetite, not their toilet habits, not their character."
          />
          <div className="mt-12">
            <CardGrid items={firstWeek} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-page max-w-3xl">
          <Notice title="When to ring the vet">
            Refusing food for more than a day, repeated vomiting or diarrhoea, laboured breathing,
            lethargy that doesn't lift, or any sign of pain. New dogs are often unsettled — but you know
            unwell when you see it, and it's never a waste of anyone's time to ask.
          </Notice>

          <div className="mt-12 rounded-[1.75rem] border border-border bg-card p-8 md:p-12">
            <p className="eyebrow">And then</p>
            <h2 className="display-lg mt-4">This is where My Dog begins.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Everything from here — food and portions, training sessions, weight, vet visits, walks and
              the whole week — lives in one place, built around your actual dog. Set up their profile and
              anything you've already told us comes with you.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/my-dog/setup" size="lg">
                Create my dog
                <Arrow />
              </ButtonLink>
              <ButtonLink to="/my-dog/pack" tone="outline" size="lg">
                The printable Dog Pack
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}