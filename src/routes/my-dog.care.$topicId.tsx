import { createFileRoute, notFound } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Sources, VetNote } from "@/components/dogmatch/care/parts";
import { careVisuals, categoryImages, topicImages } from "@/data/care/images";
import { careTopics, getCareTopic } from "@/data/care/topics";
import { knownBreedIds } from "@/lib/dogs/profile";
import { useMyDog } from "@/lib/care/store";
import { useCopy } from "@/i18n";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

export const Route = createFileRoute("/my-dog/care/$topicId")({
  loader: ({ params }) => {
    const topic = getCareTopic(params.topicId);
    if (!topic) throw notFound();
    return { topic };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found | DoggMatch" }, { name: "robots", content: "noindex" }] };
    }
    const { topic } = loaderData;
    const t = `${topic.title} — My Dog | DoggMatch`;
    return {
      meta: [
        { title: t },
        { name: "description", content: topic.promise },
        { property: "og:title", content: t },
        { property: "og:description", content: topic.promise },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: t },
        { name: "twitter:description", content: topic.promise },
      ],
      links: seoLinks(`/my-dog/care/${topic.id}`),
    };
  },
  notFoundComponent: TopicNotFound,
  component: CareTopicPage,
});

const copy = {
  en: {
    myDog: "My Dog",
    step: "Step",
    gentleWeekTitle: "A gentle first week",
    gentleWeekBody: "Slow is faster here. Each day is a minute at most.",
    forName: (name: string) => `For ${name}`,
    forYourDog: "For your dog",
    thingsWorthNoticing: "Things worth noticing",
    makeAboutDog: "Make this about your dog",
    makeAboutDogBody: "Add a few details and we'll tailor the notes on pages like this one.",
    setUpMyDog: "Set up my dog",
    keepGoing: "Keep going",
    moreEverydayCare: "More everyday care",
    notWrittenTitle: "We haven't written that one yet.",
    notWrittenBody:
      "Have a look at everything in My Dog instead — there's a good chance what you're after is there under another name.",
    backToMyDog: "Back to My Dog",
  },
  no: {
    myDog: "Min hund",
    step: "Steg",
    gentleWeekTitle: "En rolig første uke",
    gentleWeekBody: "Rolig er raskere her. Hver dag tar høyst et minutt.",
    forName: (name: string) => `For ${name}`,
    forYourDog: "For hunden din",
    thingsWorthNoticing: "Verdt å legge merke til",
    makeAboutDog: "Gjør dette til noe om hunden din",
    makeAboutDogBody: "Legg til noen detaljer, så tilpasser vi notatene på sider som denne.",
    setUpMyDog: "Sett opp hunden min",
    keepGoing: "Fortsett",
    moreEverydayCare: "Mer om hverdagsstell",
    notWrittenTitle: "Den har vi ikke skrevet ennå.",
    notWrittenBody:
      "Se heller gjennom alt i Min hund — det er stor sjanse for at det du leter etter finnes der under et annet navn.",
    backToMyDog: "Tilbake til Min hund",
  },
} as const;

function CareTopicPage() {
  const { topic } = Route.useLoaderData();
  const c = useCopy(copy);
  const dog = useMyDog();
  const hero = topicImages[topic.id] ?? categoryImages[topic.category];
  const ageNote = dog?.ageStage ? topic.ageNotes?.[dog.ageStage] : undefined;
  const dogBreedIds = knownBreedIds(dog);
  const breedNote = dogBreedIds.length
    ? topic.breedNotes?.find((b) => b.breeds.some((id) => dogBreedIds.includes(id)))?.note
    : undefined;

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.myDog}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">{topic.title}</h1>
        <ShareBar className="mt-6" />
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{topic.promise}</p>
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-border">
          <img
            src={hero}
            alt=""
            width={1400}
            height={800}
            className="max-h-[460px] w-full object-cover"
          />
        </div>
      </section>

      <Section className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div>
            <div className="max-w-2xl space-y-5">
              {topic.intro.map((p) => (
                <p key={p} className="text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {topic.steps && (
              <ol className="mt-12 space-y-6">
                {topic.steps.map((step, i) => (
                  <li key={step.title} className="overflow-hidden rounded-[1.5rem] border border-border bg-card">
                    {step.visual && careVisuals[step.visual] && (
                      <img
                        src={careVisuals[step.visual]!}
                        alt=""
                        loading="lazy"
                        width={1200}
                        height={800}
                        className="max-h-[460px] w-full object-cover"
                      />
                    )}
                    <div className="p-7">
                      <p className="text-xs uppercase tracking-[0.14em] text-accent">{c.step} {i + 1}</p>
                      <h2 className="mt-3 font-display text-xl leading-tight tracking-tight">{step.title}</h2>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}

            {topic.routine && (
              <div className="mt-12 rounded-[1.5rem] border border-border bg-surface p-7 md:p-9">
                <h2 className="font-display text-xl tracking-tight">{c.gentleWeekTitle}</h2>
                <p className="mt-2 text-[0.9375rem] text-muted-foreground">
                  {c.gentleWeekBody}
                </p>
                <ol className="mt-6 space-y-3">
                  {topic.routine.map((r) => (
                    <li key={r.day} className="flex gap-5 border-t border-border pt-3 first:border-0 first:pt-0">
                      <span className="w-16 shrink-0 text-sm uppercase tracking-[0.1em] text-accent">{r.day}</span>
                      <span className="text-[0.9375rem] leading-relaxed text-muted-foreground">{r.body}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {topic.sections && (
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {topic.sections.map((s) => (
                  <article key={s.title} className="rounded-[1.5rem] border border-border bg-card p-7">
                    <h2 className="font-display text-lg leading-tight tracking-tight">{s.title}</h2>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{s.body}</p>
                    {s.points && (
                      <ul className="mt-4 space-y-2">
                        {s.points.map((p) => (
                          <li key={p} className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                            <span aria-hidden="true" className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-accent" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            )}

            <Sources sources={[...(topic.sources ?? [])]} />
          </div>

          {/* ------------------------------------------------------ sidebar */}
          <aside className="grid content-start gap-6 lg:sticky lg:top-24">
            {(ageNote || breedNote) && (
              <div className="rounded-[1.5rem] border border-accent/40 bg-accent-soft/50 p-7">
                <p className="text-xs uppercase tracking-[0.14em] text-accent">
                  {dog?.name ? c.forName(dog.name) : c.forYourDog}
                </p>
                {ageNote && <p className="mt-3 text-[0.9375rem] leading-relaxed">{ageNote}</p>}
                {breedNote && <p className="mt-3 text-[0.9375rem] leading-relaxed">{breedNote}</p>}
              </div>
            )}

            {topic.watchFor && (
              <div className="rounded-[1.5rem] border border-border bg-card p-7">
                <h2 className="font-display text-lg tracking-tight">{c.thingsWorthNoticing}</h2>
                <ul className="mt-4 space-y-2">
                  {topic.watchFor.map((w) => (
                    <li key={w} className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-destructive/70" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {topic.whenToAskVet && <VetNote>{topic.whenToAskVet}</VetNote>}

            {!dog && (
              <div className="rounded-[1.5rem] border border-border bg-surface p-7">
                <h2 className="font-display text-lg tracking-tight">{c.makeAboutDog}</h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {c.makeAboutDogBody}
                </p>
                <ButtonLink to="/my-dog/setup" tone="outline" className="mt-5">
                  {c.setUpMyDog}
                  <Arrow />
                </ButtonLink>
              </div>
            )}
          </aside>
        </div>
      </Section>

      <Section className="container-page">
        <Eyebrow>{c.keepGoing}</Eyebrow>
        <h2 className="display-md mt-5">{c.moreEverydayCare}</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {careTopics()
            .filter((t) => t.id !== topic.id)
            .map((t) => (
              <li key={t.id}>
                <ButtonLink to="/my-dog/care/$topicId" params={{ topicId: t.id } as never} tone="outline">
                  {t.title}
                </ButtonLink>
              </li>
            ))}
        </ul>
        <div className="mt-8">
          <SourcesLink category="health" />
        </div>
      </Section>
    </div>
  );
}

function TopicNotFound() {
  const c = useCopy(copy);
  return (
    <div className="container-page pt-32 pb-24">
      <h1 className="display-lg">{c.notWrittenTitle}</h1>
      <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
        {c.notWrittenBody}
      </p>
      <ButtonLink to="/my-dog" className="mt-8" size="lg">
        {c.backToMyDog}
        <Arrow />
      </ButtonLink>
    </div>
  );
}
