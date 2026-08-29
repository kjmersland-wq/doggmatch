import { createFileRoute, Link } from "@tanstack/react-router";
import { useCopy } from "@/i18n";
import { Arrow, Eyebrow } from "@/components/dogmatch/ui";
import { localizedHead, seoLinks } from "@/lib/seo";
import { breeds, type BreedId } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { ShareBar, SectionShare } from "@/components/dogmatch/share";

const PATH = "/best-dog-breeds-for-families";

const seoCopy = {
  en: {
    title: "Best dog breeds for families — an honest shortlist | DoggMatch",
    description:
      "The best dog breeds for families with children, chosen for steady temperament rather than reputation — with the honest trade-offs of each, in plain language.",
  },
  no: {
    title: "De beste hunderasene for familier — en ærlig liste | DoggMatch",
    description:
      "De beste hunderasene for familier med barn, valgt for rolig gemytt fremfor rykte — med de ærlige fordelene og ulempene ved hver, på vanlig norsk.",
  },
  pl: {
    title: "Najlepsze rasy psów dla rodzin — szczera lista | DoggMatch",
    description:
      "Najlepsze rasy psów dla rodzin z dziećmi, wybrane ze względu na łagodne usposobienie, a nie opinię — z uczciwymi zaletami i wadami każdej z nich.",
  },
};

export const Route = createFileRoute("/best-dog-breeds-for-families")({
  head: (ctx) => localizedHead(ctx, PATH, seoCopy),
  component: FamilyBreedsPage,
});

const copy = {
  en: {
    eyebrow: "Choosing a dog",
    h1: "The best dog breeds for families",
    intro:
      "Ask ten people for the best family dog and you'll get ten answers — usually the dog they grew up with. So here's our honest version: the breeds below are steady, forgiving and genuinely enjoy living with children. But the individual dog matters more than the breed name on the kennel club paper, and no breed makes children and dogs safe together on its own. That part is on us adults.",
    whatMattersTitle: "What actually matters",
    whatMatters: [
      "A steady, forgiving temperament beats any reputation. You want a dog who shrugs off a clumsy pat, an unexpected hug, a toy grabbed mid-chew.",
      "Size cuts both ways. A big, joyful dog can flatten a toddler by accident; a tiny one can be hurt by rough play. Medium and steady is often the easiest place to start.",
      "Energy should match your family's real week, not your best intentions. A breed that needs two hours of running a day is wonderful — if someone actually has those two hours.",
      "Puppies and toddlers at the same time is two full-time jobs. Many families have a far calmer start with a dog who is already a year or two old.",
    ],
    rulesTitle: "The rules that matter more than the breed",
    rules: [
      "Never bother a dog who is eating, sleeping or in its bed.",
      "An adult is always in the room when young children and dogs are together.",
      "Children learn to read the dog — a turned head or a yawn means 'give me space'.",
    ],
    listTitle: "Our family shortlist",
    listIntro:
      "Eight breeds that consistently score well with children in our data, with the honest trade-offs. Crossbreeds with these parents often do just as well.",
    childrenLabel: "With children",
    firstTimeLabel: "First-time owners",
    sheddingLabel: "Shedding",
    energyLabel: "Energy",
    readProfile: "Read the full profile",
    allergyNote:
      "A quick word on allergies: no dog is truly hypoallergenic. Some shed less and spread less dander around the house, which helps many families — but spend time with the actual dog before you decide.",
    quizTitle: "Your family is the other half of the match",
    quizBody:
      "The best breed on paper still has to fit your week — your home, your time, your children's ages. Our quiz weighs all of it and shows you the reasoning behind every match.",
    quizCta: "Take the compatibility quiz",
    compareCta: "Compare breeds side by side",
    levelLabels: ["Very low", "Low", "Moderate", "High", "Very high"],
  },
  no: {
    eyebrow: "Å velge hund",
    h1: "De beste hunderasene for familier",
    intro:
      "Spør ti personer om den beste familiehunden, og du får ti svar — som regel hunden de selv vokste opp med. Så her er vår ærlige versjon: rasene under er rolige, overbærende og trives virkelig med barn. Men den enkelte hunden betyr mer enn rasenavnet på stamtavlen, og ingen rase gjør barn og hund trygge sammen av seg selv. Den delen er på oss voksne.",
    whatMattersTitle: "Det som faktisk betyr noe",
    whatMatters: [
      "Et rolig, overbærende gemytt slår ethvert rykte. Du vil ha en hund som rister av seg en klønete klapp, en uventet klem, et leketøy som blir tatt midt i tyggingen.",
      "Størrelse svinger begge veier. En stor, livsglad hund kan velte en smårolling ved et uhell; en bitte liten en kan bli skadet av røff lek. Middels stor og rolig er ofte det enkleste stedet å starte.",
      "Energien bør passe familiens faktiske uke, ikke de beste intensjonene. En rase som trenger to timer med løping om dagen er fantastisk — hvis noen faktisk har de to timene.",
      "Valp og småbarn samtidig er to fulltidsjobber. Mange familier får en langt roligere start med en hund som allerede er et år eller to.",
    ],
    rulesTitle: "Reglene som betyr mer enn rasen",
    rules: [
      "Forstyrr aldri en hund som spiser, sover eller ligger i senga si.",
      "En voksen er alltid i rommet når små barn og hund er sammen.",
      "Barna lærer å lese hunden — et bortvendt hode eller et gjespe betyr «gi meg litt rom».",
    ],
    listTitle: "Vår familieliste",
    listIntro:
      "Åtte raser som gjentatte ganger skårer godt med barn i dataene våre, med de ærlige fordelene og ulempene. Blandinger med disse foreldrene gjør det ofte like bra.",
    childrenLabel: "Med barn",
    firstTimeLabel: "Førstegangseiere",
    sheddingLabel: "Røyting",
    energyLabel: "Energi",
    readProfile: "Les hele profilen",
    allergyNote:
      "Et lite ord om allergier: ingen hund er helt allergivennlig. Noen røyter mindre og sprer mindre hudeskjell i huset, noe som hjelper mange familier — men tilbring tid med den faktiske hunden før du bestemmer deg.",
    quizTitle: "Familien din er den andre halvparten av matchingen",
    quizBody:
      "Den beste rasen på papiret må fortsatt passe uken deres — hjemmet, tiden og barnas alder. Quizen vår veier alt sammen og viser deg begrunnelsen bak hvert eneste forslag.",
    quizCta: "Ta kompatibilitetsquizen",
    compareCta: "Sammenlign raser side ved side",
    levelLabels: ["Veldig lav", "Lav", "Moderat", "Høy", "Veldig høy"],
  },
  pl: {
    eyebrow: "Wybór psa",
    h1: "Najlepsze rasy psów dla rodzin",
    intro:
      "Zapytaj dziesięć osób o najlepszego psa rodzinnego, a usłyszysz dziesięć odpowiedzi — zwykle będzie to pies z ich dzieciństwa. Oto nasza szczera wersja: rasy poniżej są spokojne, wyrozumiałe i naprawdę lubią żyć z dziećmi. Ale konkretny pies znaczy więcej niż nazwa rasy w metryce, a żadna rasa sama nie zadba o bezpieczeństwo dzieci i psa. To zadanie dla nas, dorosłych.",
    whatMattersTitle: "Co naprawdę ma znaczenie",
    whatMatters: [
      "Spokojne, wyrozumiałe usposobienie jest ważniejsze niż reputacja. Szukaj psa, który bez problemu zniesie niezdarną pieszczotę, niespodziewany uścisk czy zabawkę odebraną w trakcie żucia.",
      "Wielkość działa w obie strony. Duży, radosny pies może niechcący przewrócić malucha; bardzo mały może ucierpieć przy szorstkiej zabawie. Średni i spokojny to często najłatwiejszy początek.",
      "Energia powinna pasować do prawdziwego tygodnia rodziny, nie do najlepszych intencji. Rasa potrzebująca dwóch godzin biegania dziennie jest wspaniała — jeśli ktoś naprawdę ma te dwie godziny.",
      "Szczeniak i małe dziecko jednocześnie to dwa etaty. Wiele rodzin ma znacznie spokojniejszy start z psem, który ma już rok czy dwa.",
    ],
    rulesTitle: "Zasady ważniejsze niż rasa",
    rules: [
      "Nigdy nie przeszkadzaj psu, który je, śpi albo leży w swoim legowisku.",
      "Gdy małe dzieci i pies są razem, dorosły jest zawsze w pokoju.",
      "Dzieci uczą się czytać psa — odwrócona głowa albo ziewnięcie znaczy „daj mi trochę miejsca”.",
    ],
    listTitle: "Nasza rodzinna lista",
    listIntro:
      "Osiem ras, które w naszych danych stale dobrze wypadają z dziećmi — z uczciwymi zaletami i wadami. Mieszańce z tymi rasami często radzą sobie równie dobrze.",
    childrenLabel: "Z dziećmi",
    firstTimeLabel: "Dla początkujących",
    sheddingLabel: "Linienie",
    energyLabel: "Energia",
    readProfile: "Zobacz pełny profil",
    allergyNote:
      "Słówko o alergiach: żaden pies nie jest w pełni hipoalergiczny. Niektóre rasy mniej linieją i rozsiewają mniej naskórka, co pomaga wielu rodzinom — ale spędź czas z konkretnym psem, zanim zdecydujesz.",
    quizTitle: "Twoja rodzina to druga połowa dopasowania",
    quizBody:
      "Najlepsza rasa na papierze wciąż musi pasować do waszego tygodnia — domu, czasu i wieku dzieci. Nasz quiz waży to wszystko i pokazuje uzasadnienie każdego dopasowania.",
    quizCta: "Wypełnij quiz dopasowania",
    compareCta: "Porównaj rasy obok siebie",
    levelLabels: ["Bardzo niski", "Niski", "Umiarkowany", "Wysoki", "Bardzo wysoki"],
  },
};

/** Breeds that score best for family life: children first, then first-time ease. */
const familyBreeds = breeds
  .filter((b) => b.traits.goodWithChildren >= 4)
  .sort(
    (a, b) =>
      b.traits.goodWithChildren + b.traits.firstTimeSuitability -
      (a.traits.goodWithChildren + a.traits.firstTimeSuitability),
  )
  .slice(0, 8);

function LevelDot({ level, label }: { level: number; label: string }) {
  const tone =
    level >= 4
      ? "bg-accent"
      : level === 3
        ? "bg-amber-500"
        : "bg-muted-foreground/40";
  return (
    <span className="inline-flex items-center gap-1.5" title={label}>
      <span className={`h-2.5 w-2.5 rounded-full ${tone}`} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </span>
  );
}

function FamilyBreedsPage() {
  const c = useCopy(copy);
  const content = breedContent();


  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
        {c.h1}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
      <div className="mt-6">
        <ShareBar path={PATH} title={c.h1} />
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          {c.whatMattersTitle}
        </h2>
        <ul className="mt-5 space-y-3">
          {c.whatMatters.map((point) => (
            <li key={point} className="flex gap-3 text-muted-foreground leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 rounded-3xl border border-border bg-surface p-7 sm:p-9">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          {c.rulesTitle}
        </h2>
        <ul className="mt-5 space-y-3">
          {c.rules.map((rule) => (
            <li key={rule} className="flex gap-3 text-muted-foreground leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {rule}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          {c.listTitle}
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">{c.listIntro}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {familyBreeds.map((breed) => {
            const bc = content[breed.id as BreedId];
            return (
              <div
                key={breed.id}
                className="rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {bc?.displayName ?? breed.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {bc?.summary ?? ""}
                </p>
                <dl className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <dt>{c.childrenLabel}</dt>
                    <dd>
                      <LevelDot
                        level={breed.traits.goodWithChildren}
                        label={c.levelLabels[breed.traits.goodWithChildren - 1] ?? ""}
                      />
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt>{c.firstTimeLabel}</dt>
                    <dd>
                      <LevelDot
                        level={breed.traits.firstTimeSuitability}
                        label={c.levelLabels[breed.traits.firstTimeSuitability - 1] ?? ""}
                      />
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt>{c.sheddingLabel}</dt>
                    <dd>
                      <LevelDot
                        level={breed.traits.shedding}
                        label={c.levelLabels[breed.traits.shedding - 1] ?? ""}
                      />
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt>{c.energyLabel}</dt>
                    <dd>
                      <LevelDot
                        level={breed.traits.energy}
                        label={c.levelLabels[breed.traits.energy - 1] ?? ""}
                      />
                    </dd>
                  </div>
                </dl>
                <Link
                  to="/breeds/$breedId"
                  params={{ breedId: breed.id }}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  {c.readProfile}
                  <Arrow className="h-3.5 w-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{c.allergyNote}</p>
        <SectionShare anchor="family-shortlist" title={c.listTitle} />
      </section>

      <section className="mt-14 rounded-3xl bg-primary p-8 text-primary-foreground sm:p-10">
        <h2 className="font-display text-2xl font-semibold">{c.quizTitle}</h2>
        <p className="mt-4 leading-relaxed opacity-90">{c.quizBody}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/find-my-dog"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {c.quizCta}
          </Link>
          <Link
            to="/compare"
            className="inline-flex h-12 items-center justify-center rounded-full border border-primary-foreground/30 px-7 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
          >
            {c.compareCta}
          </Link>
        </div>
      </section>
    </article>
  );
}
