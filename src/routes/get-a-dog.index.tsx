import { createFileRoute, Link } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { SectionHead } from "@/components/dogmatch/journey/parts";
import { journey } from "@/data/getdog/content.en";
import heroImage from "@/assets/get-a-dog-hero.jpg";
import puppyImage from "@/assets/puppy.jpg";
import adultImage from "@/assets/adult-dog.jpg";
import welcomeImage from "@/assets/welcome-home.jpg";

const title = "Get a dog — the whole journey, from thinking about it to bringing them home | DoggMatch";
const description =
  "Thinking about getting a dog? Work out whether now is the right time, find the dogs that suit your life, choose carefully, understand the costs and get your home ready.";

export const Route = createFileRoute("/get-a-dog/")({
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
    links: [{ rel: "canonical", href: "/get-a-dog" }],
  }),
  component: GetADogPage,
});

function GetADogPage() {
  return (
    <div className="pb-24">
      <section className="container-page pt-24 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="animate-rise max-w-xl">
            <Eyebrow>Get a dog</Eyebrow>
            <h1 className="display-xl mt-7">Thinking about getting a dog?</h1>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              A dog can change your everyday life in wonderful ways. It can also be a big commitment.
              Let's make sure you're ready for the right one.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink to="/get-a-dog/ready" size="lg">
                Am I Ready?
                <Arrow />
              </ButtonLink>
              <ButtonLink to="/find-my-dog" tone="outline" size="lg">
                Find My Dog
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Free, all of it. No account, and nothing kept anywhere but this device.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-surface">
            <img
              src={heroImage}
              alt="An older man sitting on his front steps with his arm around a scruffy mixed-breed dog"
              width={1600}
              height={1104}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- The flow */}
      <Section>
        <div className="container-page">
          <SectionHead
            eyebrow="The journey"
            title="One decision, taken one step at a time."
            body="Getting a dog is exciting. It's also a big decision. Here's the whole path, in the order it usually happens — start anywhere, and come back whenever you like."
          />

          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {journey.map((step) => (
              <li key={step.id} className="bg-background">
                <Link to={step.to as never} className="group flex h-full flex-col p-8">
                  <span className="font-display text-sm tabular-nums text-accent">{step.no}</span>
                  <h3 className="display-md mt-4">{step.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium">
                    Open
                    <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ------------------------------------------------- Puppy or adult */}
      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <SectionHead
            eyebrow="A first big choice"
            title="Puppy, or a dog who's already grown up?"
            body="Two quite different first years. Neither is better — the right one depends far more on your life than on the dog."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { img: puppyImage, alt: "A cocker spaniel puppy sitting beside a chewed slipper", label: "A puppy", body: "Sleepless months, and you shape almost everything." },
              { img: adultImage, alt: "A calm adult dog resting on a sofa in a sunlit flat", label: "An adult dog", body: "Much more of what you see is what you get." },
            ].map((card) => (
              <Link key={card.label} to={"/get-a-dog/choose" as never} className="group block overflow-hidden rounded-[1.75rem] bg-background">
                <img src={card.img} alt={card.alt} width={1200} height={1504} loading="lazy" className="aspect-[5/4] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]" />
                <div className="p-8">
                  <h3 className="display-md">{card.label}</h3>
                  <p className="mt-3 text-muted-foreground">{card.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium">
                    Compare them properly
                    <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------ Welcome home */}
      <Section className="pt-0">
        <div className="container-page pt-20 md:pt-28">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={welcomeImage}
              alt="A family sitting quietly on the floor as a newly arrived dog sniffs its new bed"
              width={1600}
              height={1008}
              loading="lazy"
              className="h-[24rem] w-full object-cover md:h-[32rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-14">
              <p className="eyebrow text-primary-foreground/70">The end of this journey</p>
              <h2 className="display-lg mt-4 max-w-xl text-primary-foreground">
                And the beginning of the far longer one.
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-primary-foreground/80">
                When your dog comes home, everything you've told us moves across into My Dog —
                food, training, health, walks and paperwork, all in one place.
              </p>
              <div className="mt-8">
                <ButtonLink to="/get-a-dog/welcome-home" tone="accent" size="lg">
                  See the first week
                  <Arrow />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}