import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { CardGrid, Notice, SectionHead } from "@/components/dogmatch/journey/parts";
import { getDogContent } from "@/data/getdog/content";
import { useCopy } from "@/i18n";
import welcomeImage from "@/assets/welcome-home.jpg";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

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
    links: seoLinks("/get-a-dog/welcome-home"),
  }),
  component: WelcomeHomePage,
});

const copy = {
  en: {
    imgAlt: "A family sitting quietly on the floor as a newly arrived dog sniffs its new bed",
    eyebrow: "Welcome home",
    title: "The day they arrive.",
    intro:
      "Quieter than you're imagining, and slower than you'd like. That's exactly right. A new dog needs very little on day one beyond calm, water, and somewhere of their own.",
    firstDayEyebrow: "The first day",
    firstDayTitle: "Six things, and nothing else.",
    firstWeekEyebrow: "The first week",
    firstWeekTitle: "Then, gently, a rhythm.",
    firstWeekBody:
      "Most dogs need two or three weeks to show you who they really are. Don't judge anything in the first few days — not their appetite, not their toilet habits, not their character.",
    vetTitle: "When to ring the vet",
    vetBody:
      "Refusing food for more than a day, repeated vomiting or diarrhoea, laboured breathing, lethargy that doesn't lift, or any sign of pain. New dogs are often unsettled — but you know unwell when you see it, and it's never a waste of anyone's time to ask.",
    andThen: "And then",
    myDogTitle: "This is where My Dog begins.",
    myDogBody:
      "Everything from here — food and portions, training sessions, weight, vet visits, walks and the whole week — lives in one place, built around your actual dog. Set up their profile and anything you've already told us comes with you.",
    createCta: "Create my dog",
    packCta: "The printable Dog Pack",
  },
  no: {
    imgAlt: "En familie som sitter stille på gulvet mens en nyankommet hund snuser på sengen sin",
    eyebrow: "Velkommen hjem",
    title: "Dagen den kommer.",
    intro:
      "Roligere enn du tror, og saktere enn du kanskje vil. Det er akkurat riktig. En ny hund trenger svært lite den første dagen, bortsett fra ro, vann, og et sted som er dens eget.",
    firstDayEyebrow: "Den første dagen",
    firstDayTitle: "Seks ting, og ikke noe mer.",
    firstWeekEyebrow: "Den første uken",
    firstWeekTitle: "Så, forsiktig, en rytme.",
    firstWeekBody:
      "De fleste hunder trenger to eller tre uker på å vise deg hvem de egentlig er. Ikke døm noe i de første dagene — verken matlysten, toalettvanene eller karakteren deres.",
    vetTitle: "Når du bør ringe veterinæren",
    vetBody:
      "Nekter å spise i mer enn en dag, gjentatt oppkast eller diaré, tung pust, slapphet som ikke gir seg, eller tegn på smerte. Nye hunder er ofte urolige — men du kjenner igjen sykdom når du ser den, og det er aldri bortkastet tid å spørre.",
    andThen: "Og så",
    myDogTitle: "Her begynner Min hund.",
    myDogBody:
      "Alt herfra — mat og porsjoner, treningsøkter, vekt, veterinærbesøk, turer og hele uken — samles ett sted, bygget rundt din faktiske hund. Sett opp profilen deres, så blir alt du allerede har fortalt oss med videre.",
    createCta: "Opprett hunden min",
    packCta: "Den utskriftsvennlige hundepakken",
  },
} as const;

function WelcomeHomePage() {
  const c = useCopy(copy);
  const { firstDay, firstWeek } = getDogContent();

  return (
    <div className="pb-24">
      <section className="container-page pt-24 md:pt-32">
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src={welcomeImage}
            alt={c.imgAlt}
            width={1600}
            height={1008}
            fetchPriority="high"
            className="h-[22rem] w-full object-cover md:h-[30rem]"
          />
        </div>
        <div className="mt-12 max-w-2xl">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="display-xl mt-6">{c.title}</h1>
          <ShareBar className="mt-6" />
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
        </div>
      </section>

      <Section className="pt-16 md:pt-20">
        <div className="container-page">
          <SectionHead eyebrow={c.firstDayEyebrow} title={c.firstDayTitle} />
          <div className="mt-12">
            <CardGrid items={firstDay} />
          </div>
        </div>
      </Section>

      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <SectionHead eyebrow={c.firstWeekEyebrow} title={c.firstWeekTitle} body={c.firstWeekBody} />
          <div className="mt-12">
            <CardGrid items={firstWeek} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-page max-w-3xl">
          <Notice title={c.vetTitle}>{c.vetBody}</Notice>

          <div className="mt-12 rounded-[1.75rem] border border-border bg-card p-8 md:p-12">
            <p className="eyebrow">{c.andThen}</p>
            <h2 className="display-lg mt-4">{c.myDogTitle}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{c.myDogBody}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/my-dog/setup" size="lg">
                {c.createCta}
                <Arrow />
              </ButtonLink>
              <ButtonLink to="/my-dog/pack" tone="outline" size="lg">
                {c.packCta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
