import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { CardGrid, Checklist, Notice, PointList, SectionHead } from "@/components/dogmatch/journey/parts";
import { getDogContent } from "@/data/getdog/content";
import { useCopy } from "@/i18n";
import puppyImage from "@/assets/puppy.jpg";
import adultImage from "@/assets/adult-dog.jpg";
import breederImage from "@/assets/breeder.jpg";
import adoptionImage from "@/assets/adoption.jpg";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Puppy or adult, breeder or rescue — choosing carefully | DoggMatch";
const description =
  "An honest comparison of puppies and adult dogs, what to ask a breeder, the red flags worth noticing, and what to think about when you adopt.";

export const Route = createFileRoute("/{-$lang}/get-a-dog/choose")({
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
    links: seoLinks("/get-a-dog/choose"),
  }),
  component: ChoosePage,
});

const copy = {
  en: {
    eyebrow: "Choose carefully",
    puppyAlt: "A cocker spaniel puppy sitting beside a chewed slipper",
    adultAlt: "A calm adult dog resting on a sofa in a sunlit flat",
    whatsGood: "What's good",
    whatsHard: "What's hard",
    whereFrom: "Where from",
    breederAlt: "A mother dog resting with her puppies on a blanket in a family living room",
    rescueAlt: "A woman crouching to greet an adult rescue dog at a shelter",
    whatsGoodAbout: "What's good about it",
    worthLookingInto: "Worth looking into",
    meetingBreederEyebrow: "Meeting a breeder",
    meetingBreederTitle: "What to ask, and what to notice.",
    meetingBreederBody:
      "Tick these off as you go. A good breeder will be pleased you asked — most of them wish more people did.",
    questionsWorthAsking: "Questions worth asking",
    thingsGivePause: "Things that give us pause",
    pauseBody:
      "None of these prove anything on their own. Two or three together are usually a reason to take your time, or walk away — and it's always fine to walk away.",
    adoptionEyebrow: "Adoption",
    adoptionTitle: "Thinking about adoption?",
    adoptionBody:
      "Rescue dogs aren't damaged goods. Most are perfectly ordinary dogs whose people ran out of time, money or health. Here's what's worth talking through.",
    costsCta: "What will a dog really cost?",
    findMyDog: "Find My Dog",
  },
  no: {
    eyebrow: "Velg med omhu",
    puppyAlt: "En cocker spaniel-valp som sitter ved siden av en tygget tøffel",
    adultAlt: "En rolig voksen hund som hviler i en sofa i en solfylt leilighet",
    whatsGood: "Hva som er bra",
    whatsHard: "Hva som er tøft",
    whereFrom: "Hvor fra",
    breederAlt: "En mor-hund som hviler med valpene sine på et teppe i en familiestue",
    rescueAlt: "En kvinne som huker seg ned for å hilse på en voksen omplasseringshund på et internat",
    whatsGoodAbout: "Hva som er bra med det",
    worthLookingInto: "Verdt å undersøke",
    meetingBreederEyebrow: "Å møte en oppdretter",
    meetingBreederTitle: "Hva du bør spørre om, og hva du bør legge merke til.",
    meetingBreederBody:
      "Kryss av etter hvert som du går gjennom dem. En god oppdretter blir glad for at du spurte — de fleste skulle ønske flere gjorde det.",
    questionsWorthAsking: "Spørsmål verdt å stille",
    thingsGivePause: "Ting som gjør oss usikre",
    pauseBody:
      "Ingen av disse beviser noe alene. To eller tre sammen er som regel en grunn til å ta det med ro, eller gå videre — og det er alltid greit å gå videre.",
    adoptionEyebrow: "Omplassering",
    adoptionTitle: "Går du og tenker på omplassering?",
    adoptionBody:
      "Omplasseringshunder er ikke skadevare. De fleste er helt vanlige hunder hvis mennesker gikk tom for tid, penger eller helse. Her er det som er verdt å snakke gjennom.",
    costsCta: "Hva koster en hund egentlig?",
    findMyDog: "Finn min hund",
  },
  pl: {
    eyebrow: "Wybieraj z rozwagą",
    puppyAlt: "Szczeniak cocker spaniela siedzący obok pogryzionego kapcia",
    adultAlt: "Spokojny dorosły pies odpoczywający na kanapie w słonecznym mieszkaniu",
    whatsGood: "Co jest dobre",
    whatsHard: "Co jest trudne",
    whereFrom: "Skąd wziąć psa",
    breederAlt: "Suka odpoczywająca ze szczeniakami na kocu w rodzinnym salonie",
    rescueAlt: "Kobieta kucająca, by przywitać się z dorosłym psem ze schroniska",
    whatsGoodAbout: "Co jest w tym dobrego",
    worthLookingInto: "Warto sprawdzić",
    meetingBreederEyebrow: "Spotkanie z hodowcą",
    meetingBreederTitle: "O co zapytać, i na co zwrócić uwagę.",
    meetingBreederBody:
      "Odhaczaj po kolei. Dobry hodowca ucieszy się, że pytasz — większość z nich chciałaby, żeby więcej osób to robiło.",
    questionsWorthAsking: "Pytania warte zadania",
    thingsGivePause: "Rzeczy, które budzą naszą czujność",
    pauseBody:
      "Żadna z nich sama w sobie niczego nie dowodzi. Dwie lub trzy razem to zwykle powód, by zwolnić tempo albo się wycofać — a wycofanie się zawsze jest w porządku.",
    adoptionEyebrow: "Adopcja",
    adoptionTitle: "Myślisz o adopcji?",
    adoptionBody:
      "Psy ze schronisk nie są uszkodzonym towarem. Większość to zupełnie zwyczajne psy, których ludziom zabrakło czasu, pieniędzy lub zdrowia. Oto, co warto sobie przemyśleć.",
    costsCta: "Ile naprawdę kosztuje pies?",
    findMyDog: "Znajdź mojego psa",
  },
} as const;

function ChoosePage() {
  const c = useCopy(copy);
  const { adoptionConsiderations, breederQuestions, breederRedFlags, puppyVsAdult, sources } = getDogContent();

  return (
    <div className="pb-24">
      <section className="container-page max-w-3xl pt-28 md:pt-36">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="display-xl mt-6">{puppyVsAdult.title}</h1>
        <ShareBar className="mt-6" />
        <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{puppyVsAdult.body}</p>
      </section>

      {/* ---------------------------------------------------- Puppy / adult */}
      <Section className="pt-16 md:pt-20">
        <div className="container-page grid gap-8 md:grid-cols-2">
          {[
            { data: puppyVsAdult.puppy, img: puppyImage, alt: c.puppyAlt },
            { data: puppyVsAdult.adult, img: adultImage, alt: c.adultAlt },
          ].map(({ data, img, alt }) => (
            <article key={data.title} className="overflow-hidden rounded-[1.75rem] border border-border bg-card">
              <img src={img} alt={alt} width={1200} height={1504} loading="lazy" className="aspect-[5/4] w-full object-cover" />
              <div className="p-8 md:p-10">
                <h2 className="display-md">{data.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{data.lead}</p>
                <p className="eyebrow mt-8">{c.whatsGood}</p>
                <div className="mt-4">
                  <PointList items={data.good} />
                </div>
                <p className="eyebrow mt-8">{c.whatsHard}</p>
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
          <SectionHead eyebrow={c.whereFrom} title={sources.title} body={sources.body} />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              { data: sources.breeder, img: breederImage, alt: c.breederAlt },
              { data: sources.rescue, img: adoptionImage, alt: c.rescueAlt },
            ].map(({ data, img, alt }) => (
              <article key={data.title} className="overflow-hidden rounded-[1.75rem] border border-border bg-background">
                <img src={img} alt={alt} width={1408} height={1056} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-8 md:p-10">
                  <h3 className="display-md">{data.title}</h3>
                  <p className="eyebrow mt-6">{c.whatsGoodAbout}</p>
                  <div className="mt-4">
                    <PointList items={data.good} />
                  </div>
                  <p className="eyebrow mt-8">{c.worthLookingInto}</p>
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
            eyebrow={c.meetingBreederEyebrow}
            title={c.meetingBreederTitle}
            body={c.meetingBreederBody}
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="eyebrow">{c.questionsWorthAsking}</p>
              <div className="mt-6">
                <Checklist
                  listId="breeder"
                  columns={1}
                  items={breederQuestions.map((q, i) => ({ id: `q${i}`, label: q }))}
                />
              </div>
            </div>
            <div>
              <p className="eyebrow">{c.thingsGivePause}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.pauseBody}</p>
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
          <SectionHead eyebrow={c.adoptionEyebrow} title={c.adoptionTitle} body={c.adoptionBody} />
          <div className="mt-12">
            <CardGrid items={adoptionConsiderations} />
          </div>
        </div>
      </Section>

      <div className="container-page mt-4 flex flex-wrap gap-3">
        <ButtonLink to={withLangPrefix("/get-a-dog/costs")} size="lg">
          {c.costsCta}
          <Arrow />
        </ButtonLink>
        <ButtonLink to={withLangPrefix("/find-my-dog")} tone="outline" size="lg">
          {c.findMyDog}
        </ButtonLink>
      </div>
    </div>
  );
}
