import { Link } from "@tanstack/react-router";
import { Arrow, Eyebrow } from "@/components/dogmatch/ui";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";
import { INTL_LOCALE, interpolate, useCopy, useLocale } from "@/i18n";
import { track } from "@/lib/analytics";
import type { ClusterHubData, ClusterPageData, NavLink } from "@/lib/guides/clusters/clusters.functions";
import type { FaqItem } from "@/lib/guides/clusters/types";

const ui = {
  en: {
    cost: "Typical yearly cost",
    readProfile: "Read the full profile",
    hardLimitsTitle: "Please don't choose from this list if…",
    faqTitle: "Questions people ask us",
    moreTitle: "More in this guide",
    back: "Back to {label}",
    levels: ["Very low", "Low", "Moderate", "High", "Very high"],
    quizTitle: "Your week is the other half of the match",
    quizBody:
      "A list can only get you so far. The Find My Dog quiz sets your home, your hours and your limits against every breed, and shows you the reasoning behind each score so you can judge it for yourself. It takes two minutes and it's free.",
    quizCta: "Take the Find My Dog quiz",
    compareCta: "Compare breeds side by side",
    plusTitle: "For when your dog comes home",
    plusBody:
      "DoggMatch+ helps with the practical side of the first year: training week by week, food portions worked out from your dog's weight, a care calendar and a printable Dog Pack. It's entirely optional, and everything on this page stays free.",
    plusCta: "See what DoggMatch+ includes",
  },
  no: {
    cost: "Typisk kostnad per år",
    readProfile: "Les hele profilen",
    hardLimitsTitle: "Ikke velg fra denne listen hvis …",
    faqTitle: "Spørsmål vi ofte får",
    moreTitle: "Mer i denne guiden",
    back: "Tilbake til {label}",
    levels: ["Svært lav", "Lav", "Middels", "Høy", "Svært høy"],
    quizTitle: "Uka di er den andre halvdelen av matchen",
    quizBody:
      "En liste kan bare hjelpe deg et stykke på vei. Find My Dog-quizen holder hjemmet ditt, timene dine og grensene dine opp mot hver eneste rase, og viser deg begrunnelsen bak hver score, så du kan vurdere den selv. Den tar to minutter og er gratis.",
    quizCta: "Ta Find My Dog-quizen",
    compareCta: "Sammenlign raser side om side",
    plusTitle: "Til den dagen hunden kommer hjem",
    plusBody:
      "DoggMatch+ hjelper med det praktiske det første året: trening uke for uke, fôrmengder regnet ut fra hundens vekt, en stellkalender og en hundepakke til utskrift. Det er helt frivillig, og alt på denne siden forblir gratis.",
    plusCta: "Se hva DoggMatch+ inneholder",
  },
  pl: {
    cost: "Typowy koszt roczny",
    readProfile: "Przeczytaj pełny profil",
    hardLimitsTitle: "Nie wybieraj z tej listy, jeśli…",
    faqTitle: "Pytania, które często słyszymy",
    moreTitle: "Więcej w tym przewodniku",
    back: "Wróć do: {label}",
    levels: ["Bardzo niski", "Niski", "Umiarkowany", "Wysoki", "Bardzo wysoki"],
    quizTitle: "Twój tydzień to druga połowa dopasowania",
    quizBody:
      "Lista pomoże tylko do pewnego momentu. Quiz Find My Dog zestawia Twój dom, Twój czas i Twoje granice z każdą rasą i pokazuje uzasadnienie każdego wyniku, żebyś mógł ocenić je sam. Zajmuje dwie minuty i jest bezpłatny.",
    quizCta: "Rozwiąż quiz Find My Dog",
    compareCta: "Porównaj rasy obok siebie",
    plusTitle: "Na dzień, w którym pies wróci z Tobą do domu",
    plusBody:
      "DoggMatch+ pomaga w praktycznej stronie pierwszego roku: szkolenie tydzień po tygodniu, porcje karmy wyliczone z wagi psa, kalendarz opieki i pakiet psa do druku. To całkowicie dobrowolne, a wszystko na tej stronie pozostaje bezpłatne.",
    plusCta: "Zobacz, co zawiera DoggMatch+",
  },
  dk: {
    cost: "Typisk pris om året",
    readProfile: "Læs hele profilen",
    hardLimitsTitle: "Vælg ikke fra denne liste, hvis …",
    faqTitle: "Spørgsmål vi ofte får",
    moreTitle: "Mere i denne guide",
    back: "Tilbage til {label}",
    levels: ["Meget lav", "Lav", "Middel", "Høj", "Meget høj"],
    quizTitle: "Din uge er den anden halvdel af matchet",
    quizBody:
      "En liste kan kun hjælpe dig et stykke af vejen. Find My Dog-quizzen holder dit hjem, dine timer og dine grænser op mod hver eneste race og viser dig begrundelsen bag hver score, så du selv kan vurdere den. Den tager to minutter og er gratis.",
    quizCta: "Tag Find My Dog-quizzen",
    compareCta: "Sammenlign racer side om side",
    plusTitle: "Til den dag hunden kommer hjem",
    plusBody:
      "DoggMatch+ hjælper med det praktiske i det første år: træning uge for uge, foderportioner regnet ud fra hundens vægt, en plejekalender og en hundepakke til print. Det er helt frivilligt, og alt på denne side forbliver gratis.",
    plusCta: "Se, hvad DoggMatch+ indeholder",
  },
  se: {
    cost: "Typisk kostnad per år",
    readProfile: "Läs hela profilen",
    hardLimitsTitle: "Välj inte från den här listan om …",
    faqTitle: "Frågor vi ofta får",
    moreTitle: "Mer i den här guiden",
    back: "Tillbaka till {label}",
    levels: ["Mycket låg", "Låg", "Medel", "Hög", "Mycket hög"],
    quizTitle: "Din vecka är den andra halvan av matchningen",
    quizBody:
      "En lista räcker bara en bit på vägen. Find My Dog-quizen ställer ditt hem, dina timmar och dina gränser mot varenda ras och visar resonemanget bakom varje poäng, så att du kan bedöma det själv. Den tar två minuter och är gratis.",
    quizCta: "Gör Find My Dog-quizen",
    compareCta: "Jämför raser sida vid sida",
    plusTitle: "Till dagen då hunden kommer hem",
    plusBody:
      "DoggMatch+ hjälper till med det praktiska under första året: träning vecka för vecka, foderportioner utifrån hundens vikt, en skötselkalender och ett hundpaket att skriva ut. Det är helt frivilligt, och allt på den här sidan förblir gratis.",
    plusCta: "Se vad DoggMatch+ innehåller",
  },
  fi: {
    cost: "Tyypillinen vuosikustannus",
    readProfile: "Lue koko profiili",
    hardLimitsTitle: "Älä valitse tältä listalta, jos…",
    faqTitle: "Kysymyksiä, joita meiltä usein kysytään",
    moreTitle: "Lisää tässä oppaassa",
    back: "Takaisin: {label}",
    levels: ["Hyvin matala", "Matala", "Kohtalainen", "Korkea", "Hyvin korkea"],
    quizTitle: "Viikkosi on sopivuuden toinen puolisko",
    quizBody:
      "Lista vie vain tiettyyn pisteeseen asti. Find My Dog -kysely vertaa kotiasi, aikaasi ja rajojasi jokaiseen rotuun ja näyttää jokaisen pisteen perustelut, jotta voit arvioida ne itse. Se vie kaksi minuuttia ja on maksuton.",
    quizCta: "Tee Find My Dog -kysely",
    compareCta: "Vertaile rotuja rinnakkain",
    plusTitle: "Sitä päivää varten, kun koira tulee kotiin",
    plusBody:
      "DoggMatch+ auttaa ensimmäisen vuoden käytännön asioissa: koulutus viikko kerrallaan, ruoka-annokset koiran painon mukaan, hoitokalenteri ja tulostettava koirapaketti. Se on täysin vapaaehtoinen, ja kaikki tällä sivulla pysyy maksuttomana.",
    plusCta: "Katso, mitä DoggMatch+ sisältää",
  },
  de: {
    cost: "Typische Kosten pro Jahr",
    readProfile: "Zum vollständigen Profil",
    hardLimitsTitle: "Bitte wählen Sie nicht aus dieser Liste, wenn …",
    faqTitle: "Fragen, die uns oft gestellt werden",
    moreTitle: "Mehr in diesem Ratgeber",
    back: "Zurück zu: {label}",
    levels: ["Sehr niedrig", "Niedrig", "Mittel", "Hoch", "Sehr hoch"],
    quizTitle: "Ihre Woche ist die andere Hälfte des Matches",
    quizBody:
      "Eine Liste hilft nur ein Stück weit. Der Find-My-Dog-Test legt Ihr Zuhause, Ihre Zeit und Ihre Grenzen neben jede einzelne Rasse und zeigt Ihnen die Begründung hinter jeder Punktzahl, damit Sie selbst urteilen können. Er dauert zwei Minuten und ist kostenlos.",
    quizCta: "Zum Find-My-Dog-Test",
    compareCta: "Rassen nebeneinander vergleichen",
    plusTitle: "Für den Tag, an dem Ihr Hund einzieht",
    plusBody:
      "DoggMatch+ hilft bei der praktischen Seite des ersten Jahres: Training Woche für Woche, Futtermengen passend zum Gewicht Ihres Hundes, ein Pflegekalender und ein Hundepaket zum Ausdrucken. Es ist ganz freiwillig, und alles auf dieser Seite bleibt kostenlos.",
    plusCta: "Ansehen, was DoggMatch+ enthält",
  },
  fr: {
    cost: "Coût annuel habituel",
    readProfile: "Lire le profil complet",
    hardLimitsTitle: "Ne choisissez pas dans cette liste si…",
    faqTitle: "Les questions qu’on nous pose souvent",
    moreTitle: "À lire aussi dans ce guide",
    back: "Retour : {label}",
    levels: ["Très faible", "Faible", "Modéré", "Élevé", "Très élevé"],
    quizTitle: "Votre semaine, c’est l’autre moitié de la correspondance",
    quizBody:
      "Une liste ne vous mène qu’à mi-chemin. Le quiz Find My Dog confronte votre logement, votre emploi du temps et vos limites à chaque race, et vous montre le raisonnement derrière chaque score pour que vous puissiez juger par vous-même. Il prend deux minutes et il est gratuit.",
    quizCta: "Faire le quiz Find My Dog",
    compareCta: "Comparer des races côte à côte",
    plusTitle: "Pour le jour où votre chien arrive",
    plusBody:
      "DoggMatch+ vous aide pour le côté pratique de la première année : l’éducation semaine après semaine, des rations calculées selon le poids de votre chien, un calendrier de soins et un pack du chien à imprimer. C’est entièrement facultatif, et tout sur cette page reste gratuit.",
    plusCta: "Découvrir ce que comprend DoggMatch+",
  },
  nl: {
    cost: "Gebruikelijke kosten per jaar",
    readProfile: "Lees het volledige profiel",
    hardLimitsTitle: "Kies liever niet uit deze lijst als…",
    faqTitle: "Vragen die we vaak krijgen",
    moreTitle: "Meer in deze gids",
    back: "Terug naar {label}",
    levels: ["Zeer laag", "Laag", "Gemiddeld", "Hoog", "Zeer hoog"],
    quizTitle: "Uw week is de andere helft van de match",
    quizBody:
      "Een lijst brengt u maar een eind op weg. De Find My Dog-quiz legt uw huis, uw uren en uw grenzen naast elk ras en laat de redenering achter elke score zien, zodat u zelf kunt oordelen. Het duurt twee minuten en is gratis.",
    quizCta: "Doe de Find My Dog-quiz",
    compareCta: "Vergelijk rassen naast elkaar",
    plusTitle: "Voor de dag dat uw hond thuiskomt",
    plusBody:
      "DoggMatch+ helpt met de praktische kant van het eerste jaar: training week voor week, voerporties berekend op het gewicht van uw hond, een verzorgingskalender en een hondenpakket om te printen. Het is helemaal vrijblijvend, en alles op deze pagina blijft gratis.",
    plusCta: "Bekijk wat DoggMatch+ biedt",
  },
};

function LevelDot({ level, label }: { level: number; label: string }) {
  const tone = level >= 4 ? "bg-accent" : level === 3 ? "bg-amber-500" : "bg-muted-foreground/40";
  return (
    <span className="inline-flex items-center gap-1.5" title={label}>
      <span className={`h-2.5 w-2.5 rounded-full ${tone}`} aria-hidden="true" />
      <span className="text-xs">{label}</span>
    </span>
  );
}

function FaqSection({ items }: { items: FaqItem[] }) {
  const c = useCopy(ui);
  if (items.length === 0) return null;
  return (
    <section className="mt-14" aria-labelledby="faq-title">
      <h2 id="faq-title" className="font-display text-2xl font-semibold text-foreground">
        {c.faqTitle}
      </h2>
      <div className="mt-6 divide-y divide-border rounded-3xl border border-border">
        {items.map((item) => (
          <div key={item.q} className="p-6">
            <h3 className="font-display text-lg font-semibold leading-snug text-foreground">{item.q}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function GuideLinks({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <nav className="mt-14" aria-label={title}>
      <h2 className="font-display text-2xl font-semibold text-foreground">{title}</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={withLangPrefix(link.path)}
              className="flex h-full items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 text-sm font-medium text-foreground transition-colors hover:border-border-strong"
            >
              {link.label}
              <Arrow className="h-3.5 w-3.5 shrink-0 text-accent" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function QuizAndPlus({ source }: { source: string }) {
  const c = useCopy(ui);
  return (
    <>
      <section className="mt-14 rounded-3xl bg-primary p-8 text-primary-foreground sm:p-10">
        <h2 className="font-display text-2xl font-semibold">{c.quizTitle}</h2>
        <p className="mt-4 leading-relaxed opacity-90">{c.quizBody}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to={withLangPrefix("/find-my-dog")}
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {c.quizCta}
          </Link>
          <Link
            to={withLangPrefix("/compare")}
            className="inline-flex h-12 items-center justify-center rounded-full border border-primary-foreground/30 px-7 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
          >
            {c.compareCta}
          </Link>
        </div>
      </section>
      <section className="mt-8 rounded-3xl border border-border bg-surface p-8 sm:p-10">
        <h2 className="font-display text-xl font-semibold text-foreground">{c.plusTitle}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{c.plusBody}</p>
        <Link
          to={withLangPrefix("/plus")}
          onClick={() => track("plus_cta_clicked", { source })}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          {c.plusCta}
          <Arrow className="h-3.5 w-3.5" />
        </Link>
      </section>
    </>
  );
}

/** A focused support page inside a topic cluster. */
export function ClusterPage({ data }: { data: ClusterPageData }) {
  const c = useCopy(ui);
  const { locale } = useLocale();
  const { copy } = data;
  const eur = (n: number) =>
    new Intl.NumberFormat(INTL_LOCALE[locale], {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <Link
        to={withLangPrefix(data.pillar.path)}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <Arrow className="h-3.5 w-3.5 rotate-180" />
        {interpolate(c.back, { label: data.pillar.label })}
      </Link>
      <div className="mt-8">
        <Eyebrow>{copy.eyebrow}</Eyebrow>
      </div>
      <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
        {copy.h1}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{copy.intro}</p>
      <div className="mt-6">
        <ShareBar path={data.path} title={copy.h1} />
      </div>

      <ul className="mt-10 space-y-3">
        {copy.howChosen.map((point) => (
          <li key={point} className="flex gap-3 leading-relaxed text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>

      <section className="mt-14" aria-labelledby="shortlist-title">
        <h2 id="shortlist-title" className="font-display text-2xl font-semibold text-foreground">
          {copy.listTitle}
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {data.shortlist.map((breed) => (
            <div key={breed.id} className="flex flex-col rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">{breed.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{breed.summary}</p>
              <dl className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {data.metrics.map((m, i) => {
                  const level = breed.levels[i] ?? 0;
                  return (
                    <div key={m.key} className="flex items-center justify-between gap-3">
                      <dt>{m.label}</dt>
                      <dd>
                        <LevelDot level={level} label={c.levels[level - 1] ?? ""} />
                      </dd>
                    </div>
                  );
                })}
                <div className="flex items-center justify-between gap-3 border-t border-border pt-2">
                  <dt>{c.cost}</dt>
                  <dd className="tabular-nums text-foreground">
                    {eur(breed.cost[0])}–{eur(breed.cost[1])}
                  </dd>
                </div>
              </dl>
              <Link
                to={withLangPrefix("/breeds/$breedId")}
                params={{ breedId: breed.id }}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                {c.readProfile}
                <Arrow className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-foreground">{copy.body.title}</h2>
        {copy.body.paragraphs.map((p) => (
          <p key={p} className="mt-4 leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </section>

      <section className="mt-14 rounded-3xl border border-border p-8">
        <h2 className="font-display text-xl font-semibold text-foreground">{c.hardLimitsTitle}</h2>
        <ul className="mt-5 space-y-3">
          {copy.hardLimits.map((line) => (
            <li key={line} className="flex gap-3 leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/60" aria-hidden="true" />
              {line}
            </li>
          ))}
        </ul>
      </section>

      <FaqSection items={copy.faq} />
      <QuizAndPlus source={`cluster_${data.slug}`} />
      <GuideLinks title={c.moreTitle} links={[data.pillar, ...data.siblings]} />
    </article>
  );
}

/** FAQ, links to the support pages and the Plus note, added to a pillar guide. */
export function ClusterHubExtras({ data }: { data: ClusterHubData }) {
  const c = useCopy(ui);
  return (
    <div className="mx-auto max-w-3xl px-5 pb-16 sm:pb-24">
      <GuideLinks title={c.moreTitle} links={data.pages} />
      <FaqSection items={data.faq} />
      <section className="mt-14 rounded-3xl border border-border bg-surface p-8 sm:p-10">
        <h2 className="font-display text-xl font-semibold text-foreground">{c.plusTitle}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{c.plusBody}</p>
        <Link
          to={withLangPrefix("/plus")}
          onClick={() => track("plus_cta_clicked", { source: `pillar_${data.cluster}` })}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          {c.plusCta}
          <Arrow className="h-3.5 w-3.5" />
        </Link>
      </section>
    </div>
  );
}
