import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { CardGrid, Checklist, Notice, PointList, SectionHead } from "@/components/dogmatch/journey/parts";
import { getDogContent } from "@/data/getdog/content";
import { useGetDog } from "@/lib/getdog/store";
import { useCopy } from "@/i18n";
import homePrepImage from "@/assets/illus-home-prep.jpg";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

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
    links: seoLinks("/get-a-dog/prepare"),
  }),
  component: PreparePage,
});

const copy = {
  en: {
    eyebrow: "Get ready",
    title: "Getting everything ready.",
    intro:
      "Your home, your days, and the practical things that are far easier to sort out now than in the middle of a first week with a new dog.",
    homeEyebrow: "Your home",
    homeTitle: "Almost any home can be a good home.",
    homeBody:
      "Dogs care much less about square metres than people expect. What's within ten minutes of your front door matters far more.",
    worthChecking: "Worth checking",
    lifeEyebrow: "Your everyday life",
    lifeTitle: "What does an ordinary week look like for you?",
    lifeBody: "The dog has to fit the week you actually have, not the one you'd like to have. Find yourself below.",
    allergiesEyebrow: "Allergies",
    allergiesTitle: "What we can honestly say.",
    allergiesBody1:
      "Some breeds tend to shed less than others, and people with allergies sometimes find them easier to live with. But no dog is completely allergy-free. The proteins people react to are in saliva and skin as well as hair, and reactions vary enormously from person to person.",
    allergiesBody2:
      "If someone in your home has allergies, spend real time with the individual dog before you commit — several visits, not one — and talk to your doctor. That tells you far more than any breed list, including ours.",
    aloneEyebrow: "Time alone",
    aloneTitle: "How long is too long?",
    aloneBody:
      "Most adult dogs manage three or four hours alone comfortably once they've learned how. A puppy can't do that at first — they need someone there most of the day for the first months, and building up to being alone is a skill you teach slowly.",
    alonePoints: [
      "Practise short absences from the very first week, before there's any need",
      "A midday walker or a neighbour turns a difficult day into an easy one",
      "Daycare a couple of days a week suits some dogs and overwhelms others",
      "A dog who panics when left needs help early — it rarely improves on its own",
    ],
    checklistEyebrow: "Before they arrive",
    checklistTitle: "The arrival checklist.",
    checklistBody:
      "Tick things off as you get them. It saves as you go, on this device, so you can come back to it in a shop.",
    homePrepAlt: "An illustrated flat-lay of a dog bed, bowls, lead, harness and toys",
    printCta: "Print my arrival checklist",
    noteTitle: "One honest note",
    noteBody:
      "Buy less than you think. A bed, bowls, food, a harness, a lead and an ID tag will get you through the first week perfectly well. You'll learn what your dog actually likes soon enough.",
    welcomeCta: "The first days home",
  },
  no: {
    eyebrow: "Gjør deg klar",
    title: "Gjøre alt klart.",
    intro:
      "Hjemmet ditt, dagene dine, og de praktiske tingene som er langt lettere å ordne nå enn midt i den første uken med en ny hund.",
    homeEyebrow: "Hjemmet ditt",
    homeTitle: "Nesten ethvert hjem kan være et godt hjem.",
    homeBody:
      "Hunder bryr seg mye mindre om kvadratmeter enn folk tror. Det som ligger innen ti minutter fra døren din betyr langt mer.",
    worthChecking: "Verdt å sjekke",
    lifeEyebrow: "Hverdagen din",
    lifeTitle: "Hvordan ser en helt vanlig uke ut for deg?",
    lifeBody: "Hunden må passe inn i uken du faktisk har, ikke den du skulle ønske du hadde. Kjenn deg igjen nedenfor.",
    allergiesEyebrow: "Allergier",
    allergiesTitle: "Det vi ærlig kan si.",
    allergiesBody1:
      "Noen raser feller mindre enn andre, og folk med allergier synes noen ganger det er lettere å leve med dem. Men ingen hund er helt allergivennlig. Proteinene folk reagerer på finnes i spytt og hud i tillegg til pels, og reaksjoner varierer enormt fra person til person.",
    allergiesBody2:
      "Hvis noen i hjemmet ditt har allergier, bruk skikkelig tid sammen med den bestemte hunden før du bestemmer deg — flere besøk, ikke bare ett — og snakk med legen din. Det forteller deg langt mer enn noen raseliste, inkludert vår.",
    aloneEyebrow: "Alene hjemme",
    aloneTitle: "Hvor lenge er for lenge?",
    aloneBody:
      "De fleste voksne hunder klarer tre eller fire timer alene uten problemer når de først har lært det. En valp klarer ikke det til å begynne med — de trenger noen der mesteparten av dagen de første månedene, og det å bli alene er en ferdighet du lærer bort gradvis.",
    alonePoints: [
      "Øv på korte fravær helt fra første uke, før det er noe behov for det",
      "En hundelufter midt på dagen eller en nabo som stikker innom gjør en vanskelig dag lett",
      "Dagpass et par dager i uken passer noen hunder og overvelder andre",
      "En hund som får panikk når den blir forlatt trenger hjelp tidlig — det blir sjelden bedre av seg selv",
    ],
    checklistEyebrow: "Før hunden kommer hjem",
    checklistTitle: "Ankomstlisten.",
    checklistBody:
      "Kryss av etter hvert som du skaffer tingene. Den lagres underveis, på denne enheten, så du kan komme tilbake til den i en butikk.",
    homePrepAlt: "En illustrert oversikt over hundeseng, skåler, bånd, sele og leker",
    printCta: "Skriv ut ankomstlisten min",
    noteTitle: "Én ærlig merknad",
    noteBody:
      "Kjøp mindre enn du tror. En seng, skåler, mat, en sele, et bånd og et id-merke tar deg fint gjennom den første uken. Du finner ut hva hunden din faktisk liker snart nok.",
    welcomeCta: "De første dagene hjemme",
  },
} as const;

function PreparePage() {
  const c = useCopy(copy);
  const { arrivalChecklist, homeFactors, homeScenarios, lifeScenarios } = getDogContent();
  const state = useGetDog();
  const ticked = state.checked["arrival"] ?? [];

  return (
    <div className="pb-24">
      <section className="container-page max-w-3xl pt-28 md:pt-36">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="display-xl mt-6">{c.title}</h1>
        <ShareBar className="mt-6" />
        <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
      </section>

      {/* ------------------------------------------------------- Your home */}
      <Section className="pt-16 md:pt-20">
        <div className="container-page">
          <SectionHead eyebrow={c.homeEyebrow} title={c.homeTitle} body={c.homeBody} />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <CardGrid items={homeScenarios.map((s) => ({ title: s.title, body: s.body }))} columns={2} />
            <div>
              <p className="eyebrow">{c.worthChecking}</p>
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
          <SectionHead eyebrow={c.lifeEyebrow} title={c.lifeTitle} body={c.lifeBody} />
          <div className="mt-12">
            <CardGrid items={lifeScenarios.map((s) => ({ title: s.title, body: s.body }))} />
          </div>
        </div>
      </Section>

      {/* -------------------------------------- Allergies and time alone */}
      <Section>
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">{c.allergiesEyebrow}</p>
            <h2 className="display-md mt-4">{c.allergiesTitle}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{c.allergiesBody1}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{c.allergiesBody2}</p>
          </article>

          <article className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">{c.aloneEyebrow}</p>
            <h2 className="display-md mt-4">{c.aloneTitle}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{c.aloneBody}</p>
            <div className="mt-6">
              <PointList items={c.alonePoints} />
            </div>
          </article>
        </div>
      </Section>

      {/* ------------------------------------------------------- Checklist */}
      <Section className="pt-0">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHead eyebrow={c.checklistEyebrow} title={c.checklistTitle} body={c.checklistBody} />
              <p className="mt-8 font-display text-4xl tabular-nums tracking-tight text-accent">
                {ticked.length}
                <span className="text-xl text-muted-foreground"> / {arrivalChecklist.length}</span>
              </p>
              <div className="mt-8 hidden overflow-hidden rounded-[1.5rem] lg:block">
                <img
                  src={homePrepImage}
                  alt={c.homePrepAlt}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="mt-8">
                <ButtonLink to="/my-dog/print" tone="outline">
                  {c.printCta}
                  <Arrow />
                </ButtonLink>
              </div>
            </div>

            <Checklist listId="arrival" items={arrivalChecklist} />
          </div>
        </div>
      </Section>

      <div className="container-page max-w-3xl">
        <Notice title={c.noteTitle}>{c.noteBody}</Notice>
        <div className="mt-10">
          <ButtonLink to="/get-a-dog/welcome-home" size="lg">
            {c.welcomeCta}
            <Arrow />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
