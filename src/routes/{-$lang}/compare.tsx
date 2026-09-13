import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { useT, useCopy } from "@/i18n";
import { breeds, breedById, type BreedId, type BreedTraits } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { quizQuestions } from "@/data/questions.locale";
import { combineBreedTraits } from "@/lib/dogs/profile";
import { matchDogTraits } from "@/lib/matching/engine";
import { matchInsights, scoreReading } from "@/lib/matching/insights";
import { useMatchProfile } from "@/lib/matching/store";
import { Eyebrow } from "@/components/dogmatch/ui";
import { JourneyLinks } from "@/components/dogmatch/journey-links";
import { cn } from "@/lib/utils";
import { seoLinks, abs, localizedHead } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

const personalCopy = {
  en: {
    title: "Which of these fits your life best?",
    prompt:
      "Answer the Find My Dog questions and this table will read itself against your own days — not just breed statistics.",
    promptCta: "Answer the questions",
    based: "Based on the answers you gave in Find My Dog, kept on this device.",
    bestLabel: "Best fit of these dogs",
    watch: "Worth thinking about",
    fine: "Nothing here worked against you.",
    differencesTitle: "How these breeds differ for your lifestyle",
    differencesBody:
      "The practical gaps that are most likely to shape your week, read against the answers you gave us.",
    biggest: "Biggest practical difference",
    yourAnswer: "You told us",
    costContext:
      "Yearly cost is not scored against your answers, but it can make a real difference over time.",
    aloneTime: "Time alone",
  },
  no: {
    title: "Hvilken av disse passer livet ditt best?",
    prompt:
      "Svar på spørsmålene i Finn min hund, så leser denne tabellen seg selv opp mot dine egne dager — ikke bare rasestatistikk.",
    promptCta: "Svar på spørsmålene",
    based: "Basert på svarene du ga i Finn min hund, lagret på denne enheten.",
    bestLabel: "Passer best av disse",
    watch: "Verdt å tenke på",
    fine: "Ingenting her talte imot deg.",
    differencesTitle: "Slik skiller disse rasene seg for livet ditt",
    differencesBody:
      "De praktiske forskjellene som mest sannsynlig vil merkes i hverdagen, sett opp mot svarene du ga oss.",
    biggest: "Største praktiske forskjell",
    yourAnswer: "Du fortalte oss",
    costContext:
      "Årskostnaden vurderes ikke opp mot svarene dine, men kan utgjøre en tydelig forskjell over tid.",
    aloneTime: "Tid alene",
  },
  pl: {
    title: "Który z nich najlepiej pasuje do Twojego życia?",
    prompt:
      "Odpowiedz na pytania w Znajdź mojego psa, a ta tabela sama odniesie się do Twoich codziennych dni — nie tylko do statystyk rasy.",
    promptCta: "Odpowiedz na pytania",
    based:
      "Na podstawie odpowiedzi, które podałeś/aś w Znajdź mojego psa, zapisanych na tym urządzeniu.",
    bestLabel: "Najlepiej dopasowany z tych psów",
    watch: "Warto się zastanowić",
    fine: "Nic tutaj nie działało na Twoją niekorzyść.",
    differencesTitle: "Jak te rasy różnią się w odniesieniu do Twojego życia",
    differencesBody:
      "Praktyczne różnice, które najpewniej odczujesz na co dzień, zestawione z Twoimi odpowiedziami.",
    biggest: "Największa praktyczna różnica",
    yourAnswer: "Twoja odpowiedź",
    costContext:
      "Roczny koszt nie wpływa na dopasowanie do odpowiedzi, ale z czasem może mieć duże znaczenie.",
    aloneTime: "Czas w samotności",
  },
  dk: {
    title: "Hvilken af disse passer bedst til dit liv?",
    prompt:
      "Svar på spørgsmålene i Find min hund, så læser denne tabel sig selv op mod dine egne dage — ikke bare racestatistik.",
    promptCta: "Svar på spørgsmålene",
    based: "Baseret på de svar du gav i Find min hund, gemt på denne enhed.",
    bestLabel: "Passer bedst af disse",
    watch: "Værd at overveje",
    fine: "Intet her talte imod dig.",
    differencesTitle: "Sådan adskiller racerne sig i dit liv",
    differencesBody:
      "De praktiske forskelle, du mest sandsynligt vil mærke i hverdagen, set i forhold til dine svar.",
    biggest: "Største praktiske forskel",
    yourAnswer: "Du fortalte os",
    costContext: "Årsprisen vurderes ikke op mod dine svar, men kan gøre en reel forskel over tid.",
    aloneTime: "Tid alene",
  },
  se: {
    title: "Vilken av dessa passar ditt liv bäst?",
    prompt:
      "Svara på frågorna i Hitta min hund, så läser den här tabellen sig själv mot dina egna dagar — inte bara rasstatistik.",
    promptCta: "Svara på frågorna",
    based: "Baserat på svaren du gav i Hitta min hund, sparade på den här enheten.",
    bestLabel: "Passar bäst av dessa",
    watch: "Värt att fundera på",
    fine: "Inget här talade emot dig.",
    differencesTitle: "Så skiljer sig raserna för ditt liv",
    differencesBody:
      "De praktiska skillnader du troligen märker mest i vardagen, satta i relation till dina svar.",
    biggest: "Största praktiska skillnaden",
    yourAnswer: "Du berättade",
    costContext: "Årskostnaden vägs inte mot dina svar, men kan göra stor skillnad över tid.",
    aloneTime: "Tid ensam",
  },
  fi: {
    title: "Mikä näistä sopii parhaiten elämääsi?",
    prompt:
      "Vastaa Löydä koirani -kyselyn kysymyksiin, niin tämä taulukko peilaa itsensä omiin päiviisi — ei vain rotutilastoihin.",
    promptCta: "Vastaa kysymyksiin",
    based:
      "Perustuu vastauksiin, jotka annoit Löydä koirani -kyselyssä, tallennettuna tälle laitteelle.",
    bestLabel: "Sopii parhaiten näistä",
    watch: "Kannattaa miettiä",
    fine: "Mikään tässä ei puhunut sinua vastaan.",
    differencesTitle: "Näin rodut eroavat sinun arjessasi",
    differencesBody:
      "Käytännön erot, jotka todennäköisimmin näkyvät viikossasi, suhteutettuna antamiisi vastauksiin.",
    biggest: "Suurin käytännön ero",
    yourAnswer: "Kerroit meille",
    costContext:
      "Vuosikustannusta ei pisteytetä vastaustesi perusteella, mutta sillä voi olla ajan mittaan suuri merkitys.",
    aloneTime: "Aika yksin",
  },
  de: {
    title: "Welcher von diesen passt am besten zu deinem Leben?",
    prompt:
      "Beantworte die Fragen von Finde meinen Hund, dann liest sich diese Tabelle von selbst gegen deinen eigenen Alltag — nicht nur gegen Rassestatistiken.",
    promptCta: "Fragen beantworten",
    based:
      "Basierend auf den Antworten, die du bei Finde meinen Hund gegeben hast, gespeichert auf diesem Gerät.",
    bestLabel: "Beste Passung dieser Hunde",
    watch: "Es lohnt sich, darüber nachzudenken",
    fine: "Hier sprach nichts gegen dich.",
    differencesTitle: "Wie sich diese Rassen für deinen Alltag unterscheiden",
    differencesBody:
      "Die praktischen Unterschiede, die deine Woche am ehesten prägen, bezogen auf deine Antworten.",
    biggest: "Größter praktischer Unterschied",
    yourAnswer: "Du hast uns gesagt",
    costContext:
      "Die Jahreskosten fließen nicht in deine Antworten ein, können langfristig aber einen deutlichen Unterschied machen.",
    aloneTime: "Zeit allein",
  },
  fr: {
    title: "Lequel de ces chiens correspond le mieux à votre vie ?",
    prompt:
      "Répondez aux questions de Trouver mon chien, et ce tableau se lira de lui-même à la lumière de vos propres journées — pas seulement des statistiques de race.",
    promptCta: "Répondre aux questions",
    based:
      "Basé sur les réponses que vous avez données dans Trouver mon chien, conservées sur cet appareil.",
    bestLabel: "Meilleur choix parmi ceux-ci",
    watch: "À prendre en compte",
    fine: "Rien ici ne jouait en votre défaveur.",
    differencesTitle: "Ce qui distingue ces races pour votre mode de vie",
    differencesBody:
      "Les écarts pratiques qui devraient le plus compter dans votre semaine, à la lumière de vos réponses.",
    biggest: "Différence pratique la plus marquée",
    yourAnswer: "Vous nous avez indiqué",
    costContext:
      "Le coût annuel n'est pas évalué selon vos réponses, mais il peut compter réellement avec le temps.",
    aloneTime: "Temps seul",
  },
  nl: {
    title: "Welke van deze past het best bij jouw leven?",
    prompt:
      "Beantwoord de vragen van Vind mijn hond, en deze tabel leest zichzelf af tegen je eigen dagen — niet alleen tegen rasstatistieken.",
    promptCta: "Beantwoord de vragen",
    based: "Gebaseerd op de antwoorden die je gaf bij Vind mijn hond, bewaard op dit apparaat.",
    bestLabel: "Beste match van deze honden",
    watch: "Het overwegen waard",
    fine: "Hier speelde niets in je nadeel.",
    differencesTitle: "Hoe deze rassen verschillen voor jouw leven",
    differencesBody:
      "De praktische verschillen die je waarschijnlijk het meest merkt, bekeken naast jouw antwoorden.",
    biggest: "Grootste praktische verschil",
    yourAnswer: "Je vertelde ons",
    costContext:
      "Jaarlijkse kosten worden niet aan je antwoorden getoetst, maar kunnen op termijn veel verschil maken.",
    aloneTime: "Tijd alleen",
  },
};

const title = "Compare dogs side by side | DoggMatch";
const description =
  "Compare up to four dog breeds side by side across exercise, grooming, alone time, shedding and yearly cost.";

const seoCopy = {
  en: { title, description },
  dk: { title: "DoggMatch", description: "Find din perfekte firbenede ven" },
  se: { title: "DoggMatch", description: "Hitta din perfekta fyrbenta vän" },
  fi: { title: "DoggMatch", description: "Löydä täydellinen kumppani koirallesi" },
  no: {
    title: "Sammenlign hunder side om side | DoggMatch",
    description:
      "Sammenlign opptil fire hunderaser side om side på mosjon, pelsstell, alenetid, røyting og årlige kostnader.",
  },
  pl: {
    title: "Porównaj psy obok siebie | DoggMatch",
    description:
      "Porównaj obok siebie do czterech ras pod względem ruchu, pielęgnacji, samotności, linienia i rocznych kosztów.",
  },
  de: {
    title: "Hunde direkt vergleichen | DoggMatch",
    description:
      "Vergleiche bis zu vier Hunderassen bei Bewegung, Pflege, Alleinbleiben, Haaren und Jahreskosten.",
  },
  fr: {
    title: "Comparez des chiens côte à côte | DoggMatch",
    description:
      "Comparez jusqu'à quatre races selon l'exercice, le toilettage, le temps seul, la perte de poils et le coût annuel.",
  },
  nl: {
    title: "Vergelijk honden naast elkaar | DoggMatch",
    description:
      "Vergelijk tot vier hondenrassen op beweging, verzorging, alleen zijn, verharen en jaarlijkse kosten.",
  },
};

export const Route = createFileRoute("/{-$lang}/compare")({
  /** ?breeds=a,b,c lets a breed page open the table already filled in. */
  validateSearch: (search: Record<string, unknown>): { breeds?: string } =>
    typeof search["breeds"] === "string" ? { breeds: search["breeds"] } : {},
  head: (ctx) => localizedHead(ctx, "/compare", seoCopy),
  component: ComparePage,
});

type CompareCopy = ReturnType<typeof useT>["compare"];

/** A column in the table: one breed, or a deterministic two-breed cross. */
type Column = { kind: "breed"; id: BreedId } | { kind: "mix"; ids: [BreedId, BreedId] };

const columnKey = (c: Column) => (c.kind === "breed" ? c.id : `mix:${c.ids.join("+")}`);

function columnName(c: Column, copy: CompareCopy) {
  const names = breedContent();
  return c.kind === "breed"
    ? names[c.id].displayName
    : `${names[c.ids[0]].displayName} × ${names[c.ids[1]].displayName}`;
}

/**
 * Traits behind a column. A mix reuses the same deterministic cross logic the
 * rest of DoggMatch uses — no separate maths, no guessing.
 */
function columnTraits(c: Column): BreedTraits {
  if (c.kind === "breed") return breedById[c.id].traits;
  return combineBreedTraits(c.ids) ?? breedById[c.ids[0]].traits;
}

/** Ranges span both parents, so a cross reads as the honest span it is. */
function columnRange(c: Column, key: "lifespan" | "annualCost"): [number, number] {
  const ids = c.kind === "breed" ? [c.id] : c.ids;
  const values = ids.map((id) => breedById[id][key]);
  return [Math.min(...values.map((v) => v[0])), Math.max(...values.map((v) => v[1]))];
}

function levelClass(value: number) {
  switch (value) {
    case 1:
    case 2:
      return "bg-level-low";
    case 3:
      return "bg-level-medium";
    case 4:
    case 5:
      return "bg-level-high";
    default:
      return "bg-muted-foreground";
  }
}

function LevelDot({
  value,
  label,
  size = "md",
}: {
  value: number;
  label: string;
  size?: "sm" | "md";
}) {
  const sizeClass = size === "sm" ? "h-3 w-3" : "h-4 w-4";
  return (
    <span
      className={cn(
        "inline-block shrink-0 rounded-full ring-2 ring-background",
        sizeClass,
        levelClass(value),
      )}
      aria-label={label}
      title={label}
    />
  );
}

function CompareLegend({ c }: { c: CompareCopy }) {
  const items: { value: number; label: string }[] = [
    { value: 2, label: c.legend.low },
    { value: 3, label: c.legend.medium },
    { value: 5, label: c.legend.high },
  ];

  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-border bg-card p-4 text-sm">
      <span className="font-medium text-foreground">{c.legendTitle}</span>
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2 text-muted-foreground">
          <LevelDot value={item.value} label={item.label} size="sm" />
          <span>{item.label}</span>
        </span>
      ))}
    </div>
  );
}

/**
 * The same table, read against the reader's own answers. Only appears once
 * they've been through Find My Dog — otherwise it quietly invites them to.
 */
function PersonalFit({
  columns,
  names,
}: {
  columns: Column[];
  names: Record<BreedId, { displayName: string }>;
}) {
  const p = useCopy(personalCopy);
  const copy = useT();
  const profile = useMatchProfile();

  if (!profile) {
    return (
      <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-surface p-6">
        <h2 className="font-display text-lg leading-tight tracking-tight">{p.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.prompt}</p>
        <Link
          to={withLangPrefix("/find-my-dog")}
          className="mt-4 inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {p.promptCta}
        </Link>
      </div>
    );
  }

  const scored = columns.map((col) => {
    const traits = columnTraits(col);
    const fit = matchDogTraits(traits, profile, { individual: col.kind === "mix" });
    const { tradeoffs } = matchInsights(traits, profile);
    const label =
      col.kind === "breed"
        ? names[col.id].displayName
        : `${names[col.ids[0]].displayName} × ${names[col.ids[1]].displayName}`;
    return { key: columnKey(col), label, fit, tradeoff: tradeoffs[0]?.text };
  });
  const top = Math.max(...scored.map((s) => s.fit.score));
  const questionById = Object.fromEntries(
    quizQuestions().map((question) => [question.id, question]),
  );
  const practical = [
    {
      key: "exercise",
      label: copy.compare.rows.exercise,
      trait: "exerciseNeeds" as const,
      answerId: "activity",
    },
    {
      key: "grooming",
      label: copy.compare.rows.grooming,
      trait: "grooming" as const,
      answerId: "grooming",
    },
    { key: "alone", label: p.aloneTime, trait: "aloneTolerance" as const, answerId: "alone" },
    {
      key: "shedding",
      label: copy.compare.rows.shedding,
      trait: "shedding" as const,
      answerId: "shedding",
    },
  ].map((item) => ({
    ...item,
    spread:
      Math.max(...columns.map((col) => columnTraits(col)[item.trait])) -
      Math.min(...columns.map((col) => columnTraits(col)[item.trait])),
  }));
  const costSpread =
    Math.max(...columns.map((col) => columnRange(col, "annualCost")[1])) -
    Math.min(...columns.map((col) => columnRange(col, "annualCost")[0]));
  const biggestKey = [...practical, { key: "cost", spread: costSpread / 600 }].sort(
    (a, b) => b.spread - a.spread,
  )[0]?.key;

  const answerLabel = (id: string) => {
    const question = questionById[id];
    return question?.options.find((option) => option.value === profile[id])?.label;
  };
  const difficulty = (value: number, inverse = false) => {
    const adjusted = inverse ? 6 - value : value;
    if (adjusted <= 2)
      return {
        value: 2,
        label: copy.compare.legend.low.split(" — ")[0] ?? copy.compare.legend.low,
      };
    if (adjusted >= 4)
      return {
        value: 5,
        label: copy.compare.legend.high.split(" — ")[0] ?? copy.compare.legend.high,
      };
    return { value: 3, label: copy.compare.legend.medium };
  };

  return (
    <section className="mt-8">
      <h2 className="display-md">{p.title}</h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{p.based}</p>
      <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-2 xl:grid-cols-4">
        {scored.map((item) => (
          <li key={item.key} className="bg-card p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-base leading-tight tracking-tight">{item.label}</h3>
              <span className="font-display text-sm tabular-nums text-muted-foreground">
                {item.fit.score}%
              </span>
            </div>
            {item.fit.score === top && (
              <p className="mt-2 text-xs font-medium tracking-wide text-accent uppercase">
                {p.bestLabel}
              </p>
            )}
            <p className="mt-3 text-[0.9375rem] leading-relaxed">{scoreReading(item.fit.score)}</p>
            <p className="mt-3 border-l-2 border-accent/60 pl-3 text-sm leading-relaxed text-muted-foreground">
              <span className="block font-medium text-foreground">{p.watch}</span>
              {item.tradeoff ?? p.fine}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-12 border-t border-border pt-10">
        <h2 className="display-md">{p.differencesTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {p.differencesBody}
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {practical.map((item) => (
            <article key={item.key} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-base">{item.label}</h3>
                {item.key === biggestKey && (
                  <span className="text-xs font-medium text-accent">{p.biggest}</span>
                )}
              </div>
              {answerLabel(item.answerId) && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {p.yourAnswer}: {answerLabel(item.answerId)}
                </p>
              )}
              <ul className="mt-4 grid gap-3">
                {columns.map((col) => {
                  const value = Math.round(columnTraits(col)[item.trait]);
                  const level = difficulty(value, item.key === "alone");
                  return (
                    <li
                      key={columnKey(col)}
                      className="flex items-center justify-between gap-4 text-sm"
                    >
                      <span>{columnName(col, copy.compare)}</span>
                      <span className="inline-flex items-center gap-2 text-muted-foreground">
                        <LevelDot value={level.value} label={level.label} size="sm" />
                        {level.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
          <article className="rounded-2xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-base">{copy.compare.rows.cost}</h3>
              {biggestKey === "cost" && (
                <span className="text-xs font-medium text-accent">{p.biggest}</span>
              )}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.costContext}</p>
            <ul className="mt-4 grid gap-3">
              {columns.map((col) => {
                const [lo, hi] = columnRange(col, "annualCost");
                return (
                  <li
                    key={columnKey(col)}
                    className="flex items-center justify-between gap-4 text-sm"
                  >
                    <span>{columnName(col, copy.compare)}</span>
                    <span className="tabular-nums text-muted-foreground">
                      €{lo}–{hi}
                    </span>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function rows(c: CompareCopy): [string, (col: Column) => ReactNode][] {
  const s = (v: number) => c.scale[Math.round(v) - 1] ?? "—";
  const dot = (key: keyof BreedTraits) => (col: Column) => {
    const value = columnTraits(col)[key];
    return <LevelDot value={Math.round(value)} label={s(value)} />;
  };
  return [
    [c.rows.size, dot("size")],
    [c.rows.energy, dot("energy")],
    [c.rows.exercise, dot("exerciseNeeds")],
    [c.rows.mental, dot("mentalStimulation")],
    [c.rows.trainability, dot("trainability")],
    [c.rows.learning, dot("learningAbility")],
    [c.rows.sociability, dot("sociability")],
    [c.rows.affection, dot("affection")],
    [c.rows.shedding, dot("shedding")],
    [c.rows.grooming, dot("grooming")],
    [c.rows.barking, dot("barking")],
    [c.rows.children, dot("goodWithChildren")],
    [c.rows.pets, dot("goodWithPets")],
    [c.rows.flat, dot("apartmentSuitability")],
    [c.rows.firstDog, dot("firstTimeSuitability")],
    [
      c.rows.lifespan,
      (col) => {
        const [lo, hi] = columnRange(col, "lifespan");
        return `${lo}–${hi} ${c.years}`;
      },
    ],
    [
      c.rows.cost,
      (col) => {
        const [lo, hi] = columnRange(col, "annualCost");
        return `€${lo}–${hi}`;
      },
    ],
  ];
}

function ComparePage() {
  const copy = useT();
  const c = copy.compare;
  const names = breedContent();
  const search = Route.useSearch();
  const fromLink = (search.breeds ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter((id): id is BreedId => id in breedById)
    .slice(0, 4)
    .map((id): Column => ({ kind: "breed", id }));
  const [selected, setSelected] = useState<Column[]>(
    fromLink.length > 0
      ? fromLink
      : [
          { kind: "breed", id: "labrador-retriever" },
          { kind: "breed", id: "golden-retriever" },
          { kind: "breed", id: "poodle" },
        ],
  );
  const [query, setQuery] = useState("");
  const [mixOpen, setMixOpen] = useState(false);
  const [mixA, setMixA] = useState<BreedId | "">("");
  const [mixB, setMixB] = useState<BreedId | "">("");

  const q = query.trim().toLowerCase();
  const visibleBreeds = useMemo(
    () =>
      q
        ? breeds.filter(
            (b) =>
              names[b.id].displayName.toLowerCase().includes(q) || b.name.toLowerCase().includes(q),
          )
        : breeds,
    [q, names],
  );

  const hasMixColumn = selected.some((col) => col.kind === "mix");

  function addColumn(next: Column) {
    setSelected((current) => {
      const key = columnKey(next);
      if (current.some((col) => columnKey(col) === key)) {
        return current.filter((col) => columnKey(col) !== key);
      }
      return current.length >= 4 ? [...current.slice(1), next] : [...current, next];
    });
  }

  function addMix() {
    if (!mixA || !mixB || mixA === mixB) return;
    addColumn({ kind: "mix", ids: [mixA, mixB] });
    setMixOpen(false);
    setMixA("");
    setMixB("");
  }

  return (
    <>
      <div className="container-page py-14 md:py-20">
        <Eyebrow>{copy.nav.compare}</Eyebrow>
        <div className="mt-6 flex items-start justify-between gap-4">
          <h1 className="display-lg max-w-2xl">{copy.compare.subtitle}</h1>
          <ShareBar compact className="mt-1 shrink-0" />
        </div>

        <div className="mt-10 max-w-sm">
          <label htmlFor="breed-search" className="text-sm font-medium">
            {c.searchLabel}
          </label>
          <input
            id="breed-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={c.searchPlaceholder}
            className="mt-2 h-12 w-full rounded-2xl border border-border bg-card px-5 text-[1rem] outline-none transition-colors focus:border-accent"
          />
        </div>

        {!q && (
          <div className="mt-8">
            <h2 className="text-sm font-medium">{c.quickPicks}</h2>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">{c.quickPicksHint}</p>
          </div>
        )}

        <ul className="mt-3 flex flex-wrap gap-2">
          <li>
            <button
              type="button"
              aria-pressed={mixOpen || hasMixColumn}
              onClick={() => setMixOpen((v) => !v)}
              className={cn(
                "min-h-11 rounded-full border px-4 text-sm transition-colors",
                mixOpen || hasMixColumn
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border-strong hover:bg-surface",
              )}
            >
              🐾 {c.mix.chip}
            </button>
          </li>
          {visibleBreeds.map((b) => {
            const active = selected.some((col) => col.kind === "breed" && col.id === b.id);
            return (
              <li key={b.id}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => addColumn({ kind: "breed", id: b.id })}
                  className={cn(
                    "min-h-11 rounded-full border px-4 text-sm transition-colors",
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border-strong hover:bg-surface",
                  )}
                >
                  {names[b.id].displayName}
                </button>
              </li>
            );
          })}
        </ul>

        {q && visibleBreeds.length === 0 && (
          <p className="mt-4 text-sm text-muted-foreground">{c.searchEmpty}</p>
        )}

        {mixOpen && (
          <div className="mt-6 max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="font-display text-lg leading-tight">{c.mix.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.mix.hint}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                [c.mix.parentA, mixA, setMixA] as const,
                [c.mix.parentB, mixB, setMixB] as const,
              ].map(([label, value, set]) => (
                <label key={label} className="flex-1 min-w-52 text-sm">
                  <span className="block text-muted-foreground">{label}</span>
                  <select
                    value={value}
                    onChange={(e) => set(e.target.value as BreedId | "")}
                    className="mt-2 h-12 w-full rounded-2xl border border-border bg-card px-4 text-[0.95rem] outline-none focus:border-accent"
                  >
                    <option value="">{c.mix.choose}</option>
                    {breeds.map((b) => (
                      <option key={b.id} value={b.id}>
                        {names[b.id].displayName}
                      </option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={addMix}
                disabled={!mixA || !mixB || mixA === mixB}
                className="min-h-11 rounded-full bg-primary px-5 text-sm text-primary-foreground transition-opacity disabled:opacity-40"
              >
                {c.mix.add}
              </button>
              <button
                type="button"
                onClick={() => setMixOpen(false)}
                className="min-h-11 rounded-full border border-border-strong px-5 text-sm hover:bg-surface"
              >
                {c.mix.cancel}
              </button>
            </div>
          </div>
        )}

        {selected.length === 0 ? (
          <p className="mt-16 text-muted-foreground">{copy.compare.empty}</p>
        ) : (
          <>
            <PersonalFit columns={selected} names={names} />
            <CompareLegend c={copy.compare} />
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[38rem] border-collapse text-left">
                  <caption className="sr-only">{copy.compare.title}</caption>
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="sticky left-0 z-10 w-40 border-r border-border bg-card pb-6 pr-6 align-bottom"
                      />
                      {selected.map((col) => (
                        <th key={columnKey(col)} scope="col" className="pb-6 pr-6 align-bottom">
                          {col.kind === "breed" ? (
                            <img
                              src={breedImages[col.id]}
                              alt={names[col.id].displayName}
                              width={1024}
                              height={1280}
                              loading="lazy"
                              className="aspect-square w-full max-w-36 rounded-xl object-cover"
                            />
                          ) : (
                            <span className="flex aspect-square w-full max-w-36 gap-px overflow-hidden rounded-xl">
                              {col.ids.map((id) => (
                                <img
                                  key={id}
                                  src={breedImages[id]}
                                  alt={names[id].displayName}
                                  width={1024}
                                  height={1280}
                                  loading="lazy"
                                  className="h-full w-1/2 object-cover"
                                />
                              ))}
                            </span>
                          )}
                          {col.kind === "mix" && (
                            <span className="mt-3 block text-xs font-medium tracking-wide text-accent uppercase">
                              🐾 {c.mix.columnLabel}
                            </span>
                          )}
                          <span className="mt-1 block max-w-36 font-display text-base font-medium leading-tight text-balance">
                            {columnName(col, c)}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows(copy.compare).map(([label, render]) => (
                      <tr
                        key={label}
                        className="border-t border-border transition-colors hover:bg-surface"
                      >
                        <th
                          scope="row"
                          className="sticky left-0 z-10 border-r border-border bg-card py-4 pr-6 text-sm font-normal whitespace-nowrap text-muted-foreground"
                        >
                          {label}
                        </th>
                        {selected.map((col) => (
                          <td key={columnKey(col)} className="py-4 pr-6 text-[0.9375rem]">
                            {render(col)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {hasMixColumn && (
              <p className="mt-6 max-w-2xl rounded-2xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted-foreground">
                {c.mix.note}
              </p>
            )}
          </>
        )}

        <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {copy.allergyNote}
        </p>
      </div>
      <div className="pb-20">
        <JourneyLinks exclude={["/compare"]} />
      </div>
    </>
  );
}
