import { Link } from "@tanstack/react-router";
import { useCopy } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";
import { breedImages } from "@/data/breed-images";
import { Eyebrow } from "@/components/dogmatch/ui";
import { matchBreeds } from "@/lib/matching/engine";
import { matchInsights } from "@/lib/matching/insights";
import { breedById } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import type { UserProfile } from "@/lib/matching/types";

/**
 * Three realistic lifestyle profiles, run through the real matching engine
 * live on every render — not testimonials, and not tuned to land on a
 * particular breed. Whatever breed and score come out is what's shown.
 */
/**
 * Breeds skipped for the "calmer companion" example. The engine can score
 * flat-faced breeds very high for calm and size, but their breathing problems
 * are not something a score shows — so this one card leaves them out, and says so.
 */
const FLAT_FACED = ["french-bulldog", "pug", "english-bulldog", "boston-terrier", "shih-tzu", "boxer", "bullmastiff"];

/** The breed the hand-written quote and drawback below were written for. */
const CALMER_EDITORIAL_BREED = "cavalier-king-charles-spaniel";

const SCENARIOS: { key: string; profile: UserProfile; skip?: string[] }[] = [
  {
    key: "apartmentAlone",
    profile: {
      home: "apartment",
      alone: "6",
      activity: "2",
      experience: "some",
      size: "any",
      temperament: "calm",
      children: "none",
      pets: "none",
      shedding: "prefer-low",
      grooming: "minimal",
      physical: "light",
      energyLimit: "no",
      companionship: "calm-company",
      allergy: "none",
      wellbeing: "some",
    },
  },
  {
    key: "familyShedding",
    profile: {
      home: "house-garden",
      alone: "2",
      activity: "3",
      experience: "some",
      size: "large",
      temperament: "affectionate",
      children: "young",
      pets: "none",
      shedding: "prefer-low",
      grooming: "moderate",
      physical: "moderate",
      energyLimit: "maybe",
      companionship: "family",
      allergy: "none",
      wellbeing: "some",
    },
  },
  {
    key: "firstTimeOutdoor",
    profile: {
      home: "house-garden",
      alone: "2",
      activity: "3",
      experience: "first",
      size: "medium",
      temperament: "affectionate",
      children: "none",
      pets: "none",
      shedding: "fine",
      grooming: "moderate",
      physical: "moderate",
      energyLimit: "maybe",
      companionship: "motivation",
      allergy: "none",
      wellbeing: "some",
    },
  },
  {
    key: "calmerCompanion",
    skip: FLAT_FACED,
    profile: {
      home: "house",
      alone: "2",
      activity: "2",
      experience: "some",
      size: "small",
      temperament: "calm",
      children: "visitors",
      pets: "none",
      shedding: "prefer-low",
      grooming: "moderate",
      physical: "light",
      energyLimit: "no",
      companionship: "calm-company",
      allergy: "none",
      wellbeing: "some",
    },
  },
];

const copy = {
  en: {
    eyebrow: "See it work",
    title: "Four lifestyles, matched",
    intro:
      "Not testimonials — the same deterministic engine, run live against four common situations, so you can see exactly how it reasons before you try it yourself.",
    badge: "Worked example",
    skipNote: "Flat-faced breeds are left out of this example on purpose: heat and breathing trouble are commonly seen in them, and that matters more than a score shows. General guidance, not a vet.",
    calmerLink: "Want a calmer dog for daily walks?",
    scenarios: {
      calmerCompanion: { context: "Daily walks, a quieter home, not too big, easy to live with", quote: "A good walk each day and a warm spot beside you — that's most of what this dog asks for.", drawback: "Heart problems are commonly seen in the breed, and long days alone are hard on them. Read the breed profile and ask a vet — general guidance, not a vet." },
      apartmentAlone: { context: "Apartment living, alone 6+ hours on a workday" },
      familyShedding: { context: "House with a garden, young children, wants low shedding" },
      firstTimeOutdoor: { context: "First dog, house with a garden, wants an outdoor companion" },
    },
  },
  no: {
    eyebrow: "Se det i praksis",
    title: "Fire liv, matchet",
    intro:
      "Ikke kundeuttalelser — samme deterministiske motor, brukt direkte på fire vanlige situasjoner, så du kan se nøyaktig hvordan den tenker før du prøver selv.",
    badge: "Reelt eksempel",
    skipNote: "Flatnesete raser er bevisst utelatt i dette eksempelet: varme- og pustebesvær ses ofte hos dem, og det veier tyngre enn en score viser. Generell veiledning, ikke veterinærråd.",
    calmerLink: "Vil du ha en roligere hund til daglige turer?",
    scenarios: {
      calmerCompanion: { context: "Daglige turer, et roligere hjem, ikke for stor, enkel å leve med", quote: "En god tur hver dag og en varm plass ved siden av deg – det er det meste denne hunden ber om.", drawback: "Hjerteproblemer ses ofte i rasen, og lange dager alene er tunge for dem. Les rasens profil og spør en veterinær – generell veiledning, ikke veterinærråd." },
      apartmentAlone: { context: "Leilighet, alene 6+ timer på en vanlig arbeidsdag" },
      familyShedding: { context: "Hus med hage, små barn, vil ha lite pelsfelling" },
      firstTimeOutdoor: { context: "Første hund, hus med hage, ønsker en aktiv turkamerat" },
    },
  },
  pl: {
    eyebrow: "Zobacz, jak to działa",
    title: "Cztery życia, dopasowane",
    intro:
      "To nie opinie klientów — ten sam deterministyczny silnik, użyty na żywo w czterech typowych sytuacjach, żebyś zobaczył/a dokładnie, jak wnioskuje, zanim spróbujesz sam/sama.",
    badge: "Praktyczny przykład",
    skipNote: "Rasy o spłaszczonym pysku celowo pominięto w tym przykładzie: kłopoty z upałem i oddychaniem często się u nich zdarzają i znaczą więcej, niż pokazuje wynik. Ogólne wskazówki, nie porada weterynaryjna.",
    calmerLink: "Szukasz spokojniejszego psa na codzienne spacery?",
    scenarios: {
      calmerCompanion: { context: "Codzienne spacery, cichszy dom, niezbyt duży pies, z którym łatwo się żyje", quote: "Dobry spacer każdego dnia i ciepłe miejsce obok ciebie – tego ten pies chce najbardziej.", drawback: "Problemy z sercem często widuje się w tej rasie, a długie dni w samotności są dla niej trudne. Przeczytaj profil rasy i zapytaj weterynarza – ogólne wskazówki, nie porada weterynaryjna." },
      apartmentAlone: { context: "Mieszkanie, pies zostaje sam na 6+ godzin w dzień roboczy" },
      familyShedding: { context: "Dom z ogrodem, małe dzieci, priorytetem jest małe linienie" },
      firstTimeOutdoor: { context: "Pierwszy pies, dom z ogrodem, szuka aktywnego towarzysza" },
    },
  },
  dk: {
    eyebrow: "Se det i praksis",
    title: "Fire liv, matchet",
    intro:
      "Ikke kundeudtalelser — samme deterministiske motor, brugt direkte på fire almindelige situationer, så du kan se præcis, hvordan den tænker, før du selv prøver.",
    badge: "Reelt eksempel",
    skipNote: "Fladnæsede racer er med vilje udeladt i dette eksempel: varme- og vejrtrækningsproblemer ses ofte hos dem, og det vejer tungere, end en score viser. Generel vejledning, ikke dyrlægeråd.",
    calmerLink: "Vil du have en roligere hund til daglige gåture?",
    scenarios: {
      calmerCompanion: { context: "Daglige gåture, et roligere hjem, ikke for stor, nem at leve med", quote: "En god tur hver dag og en varm plads ved siden af dig – det er det meste, denne hund beder om.", drawback: "Hjerteproblemer ses ofte i racen, og lange dage alene er hårde for dem. Læs racens profil og spørg en dyrlæge – generel vejledning, ikke dyrlægeråd." },
      apartmentAlone: { context: "Lejlighed, hunden er alene 6+ timer på en hverdag" },
      familyShedding: { context: "Hus med have, små børn, prioriterer lidt fældning" },
      firstTimeOutdoor: { context: "Første hund, hus med have, ønsker en aktiv følgesvend" },
    },
  },
  se: {
    eyebrow: "Se det i praktiken",
    title: "Fyra liv, matchade",
    intro:
      "Inga kundomdömen — samma deterministiska motor, använd direkt på fyra vanliga situationer, så att du kan se exakt hur den resonerar innan du testar själv.",
    badge: "Exempel ur verkligheten",
    skipNote: "Plattnosade raser är medvetet utelämnade i det här exemplet: värme- och andningsproblem ses ofta hos dem, och det väger tyngre än en poäng visar. Allmän vägledning, inte veterinärråd.",
    calmerLink: "Vill du ha en lugnare hund för dagliga promenader?",
    scenarios: {
      calmerCompanion: { context: "Dagliga promenader, ett lugnare hem, inte för stor, lätt att leva med", quote: "En bra promenad varje dag och en varm plats bredvid dig – det är det mesta den här hunden ber om.", drawback: "Hjärtproblem ses ofta i rasen, och långa dagar ensam är tunga för dem. Läs rasens profil och fråga en veterinär – allmän vägledning, inte veterinärråd." },
      apartmentAlone: { context: "Lägenhet, hunden är ensam 6+ timmar en vardag" },
      familyShedding: { context: "Hus med trädgård, små barn, prioriterar lite fällning" },
      firstTimeOutdoor: { context: "Första hunden, hus med trädgård, vill ha en aktiv följeslagare" },
    },
  },
  fi: {
    eyebrow: "Katso, miten se toimii",
    title: "Neljä elämäntilannetta, neljä täsmäystä",
    intro:
      "Ei asiakaskertomuksia — sama deterministinen moottori, ajettuna suoraan neljän tavallisen elämäntilanteen läpi, jotta näet tarkalleen, miten se päättelee, ennen kuin kokeilet itse.",
    badge: "Käytännön esimerkki",
    skipNote: "Litteänaamaiset rodut on jätetty tästä esimerkistä tarkoituksella pois: lämpö- ja hengitysongelmia nähdään niillä usein, ja se painaa enemmän kuin pistemäärä näyttää. Yleistä ohjausta, ei eläinlääkärin neuvo.",
    calmerLink: "Kaipaatko rauhallisempaa koiraa päivittäisille kävelyille?",
    scenarios: {
      calmerCompanion: { context: "Päivittäiset kävelyt, rauhallisempi koti, ei liian suuri, helppo elää kanssa", quote: "Hyvä kävely joka päivä ja lämmin paikka vierelläsi – sitä tämä koira pyytää eniten.", drawback: "Sydänongelmia nähdään rodussa usein, ja pitkät päivät yksin ovat sille raskaita. Lue rodun profiili ja kysy eläinlääkäriltä – yleistä ohjausta, ei eläinlääkärin neuvo." },
      apartmentAlone: { context: "Kerrostaloasunto, koira yksin 6+ tuntia arkipäivänä" },
      familyShedding: { context: "Talo pihalla, pieniä lapsia, vähäinen karvanlähtö tärkeää" },
      firstTimeOutdoor: { context: "Ensimmäinen koira, talo pihalla, toivoo aktiivista seuralaista" },
    },
  },
  de: {
    eyebrow: "Sieh es in Aktion",
    title: "Vier Lebenssituationen, passend gematcht",
    intro:
      "Keine Erfahrungsberichte — derselbe deterministische Algorithmus, live angewendet auf vier alltägliche Situationen, damit du genau siehst, wie er denkt, bevor du es selbst ausprobierst.",
    badge: "Praxisbeispiel",
    skipNote: "Kurzköpfige Rassen lassen wir in diesem Beispiel bewusst weg: Hitze- und Atemprobleme sieht man bei ihnen häufig, und das wiegt schwerer, als eine Punktzahl zeigt. Allgemeine Orientierung, kein tierärztlicher Rat.",
    calmerLink: "Wünschst du dir einen ruhigeren Hund für die täglichen Spaziergänge?",
    scenarios: {
      calmerCompanion: { context: "Tägliche Spaziergänge, ein ruhigeres Zuhause, nicht zu groß, unkompliziert im Alltag", quote: "Ein guter Spaziergang am Tag und ein warmer Platz neben dir – mehr verlangt dieser Hund kaum.", drawback: "Herzprobleme sieht man bei dieser Rasse häufig, und lange Tage allein fallen ihr schwer. Lies das Rassenprofil und frag eine Tierärztin oder einen Tierarzt – allgemeine Orientierung, kein tierärztlicher Rat." },
      apartmentAlone: { context: "Wohnung, Hund an Werktagen 6+ Stunden allein" },
      familyShedding: { context: "Haus mit Garten, kleine Kinder, wenig Haarausfall gewünscht" },
      firstTimeOutdoor: { context: "Erster Hund, Haus mit Garten, aktiver Begleiter gewünscht" },
    },
  },
  fr: {
    eyebrow: "Voyez-le à l'œuvre",
    title: "Quatre façons de vivre, quatre matchs",
    intro:
      "Pas des témoignages — le même moteur déterministe, appliqué en direct à quatre situations courantes, pour que vous voyiez exactement comment il raisonne avant de l'essayer vous-même.",
    badge: "Cas pratique",
    skipNote: "Les races à museau plat sont volontairement écartées de cet exemple : chaleur et difficultés respiratoires y sont souvent observées, et cela pèse plus lourd que ne le montre un score. Repères généraux, pas un avis vétérinaire.",
    calmerLink: "Envie d'un chien plus calme pour les balades de tous les jours ?",
    scenarios: {
      calmerCompanion: { context: "Des balades quotidiennes, une maison plus calme, pas trop grand, facile à vivre", quote: "Une bonne balade chaque jour et une place au chaud près de vous : c'est presque tout ce que ce chien demande.", drawback: "Les problèmes cardiaques sont souvent observés dans la race, et les longues journées seul lui pèsent. Lisez le profil de la race et demandez à un vétérinaire – repères généraux, pas un avis vétérinaire." },
      apartmentAlone: { context: "Appartement, chien seul 6h ou plus un jour de semaine" },
      familyShedding: { context: "Maison avec jardin, jeunes enfants, peu de perte de poils souhaitée" },
      firstTimeOutdoor: { context: "Premier chien, maison avec jardin, envie d'un compagnon actif" },
    },
  },
  nl: {
    eyebrow: "Zie het in actie",
    title: "Vier levensstijlen, gematcht",
    intro:
      "Geen getuigenissen — dezelfde deterministische engine, live toegepast op vier herkenbare situaties, zodat je precies ziet hoe ze redeneert voordat je het zelf probeert.",
    badge: "Praktijkvoorbeeld",
    skipNote: "Platsnuitige rassen laten we in dit voorbeeld bewust weg: hitte- en ademhalingsproblemen zie je bij hen vaak, en dat weegt zwaarder dan een score laat zien. Algemene richtlijn, geen dierenartsadvies.",
    calmerLink: "Zoek je een rustigere hond voor de dagelijkse wandelingen?",
    scenarios: {
      calmerCompanion: { context: "Dagelijkse wandelingen, een rustiger huis, niet te groot, makkelijk om mee te leven", quote: "Elke dag een fijne wandeling en een warm plekje naast je – veel meer vraagt deze hond niet.", drawback: "Hartproblemen zie je bij dit ras vaak, en lange dagen alleen zijn zwaar. Lees het rasprofiel en vraag een dierenarts – algemene richtlijn, geen dierenartsadvies." },
      apartmentAlone: { context: "Appartement, hond op werkdagen 6+ uur alleen" },
      familyShedding: { context: "Huis met tuin, jonge kinderen, weinig haarverlies gewenst" },
      firstTimeOutdoor: { context: "Eerste hond, huis met tuin, wil een actieve buitenmaatje" },
    },
  },
} as const;

export function RealMatchesSection({ className }: { className?: string }) {
  const c = useCopy(copy);

  const runs = SCENARIOS.map(({ key, profile, skip }) => {
    const ranked = matchBreeds(profile);
    const result = (skip ? ranked.find((r) => !skip.includes(r.breedId)) : undefined) ?? ranked[0]!;
    const insights = matchInsights(breedById[result.breedId].traits, profile);
    return { key, result, insights, skipped: Boolean(skip) };
  });

  // The engine's first "fit" line is often the same generic one for every profile
  // ("the walking and running lines up…"). Give each card its own quote: prefer the
  // line that appears in the fewest scenarios, and never reuse one across cards.
  const seen = new Map<string, number>();
  for (const { insights } of runs)
    for (const text of new Set(insights.fits.map((f) => f.text)))
      seen.set(text, (seen.get(text) ?? 0) + 1);
  const used = new Set<string>();
  const quoteFor = (fits: { text: string }[]) => {
    const pool = fits.filter((f) => !used.has(f.text));
    const best = [...(pool.length ? pool : fits)].sort(
      (x, y) => (seen.get(x.text) ?? 0) - (seen.get(y.text) ?? 0),
    )[0]?.text;
    if (best) used.add(best);
    return best;
  };

  const cards = runs.map(({ key, result, insights, skipped }) => {
    const scenario = c.scenarios[key as keyof typeof c.scenarios] as {
      context: string;
      quote?: string;
      drawback?: string;
    };
    // Hand-written text only when the engine really landed on the breed it was written for;
    // otherwise fall back to the engine's own reasoning.
    const editorial = scenario.quote && result.breedId === CALMER_EDITORIAL_BREED;
    return {
      key,
      breedId: result.breedId,
      skipped,
      context: scenario.context,
      breedName: breedContent()[result.breedId].displayName,
      score: result.score,
      fit: editorial ? scenario.quote : quoteFor(insights.fits),
      tradeoff: editorial ? scenario.drawback : insights.tradeoffs[0]?.text,
    };
  });

  return (
    <section aria-label={c.title} className={className}>
      <div className="container-page">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="display-lg mt-6 max-w-xl">{c.title}</h2>
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{c.intro}</p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <li key={card.key} className="flex flex-col rounded-2xl border border-border bg-surface p-7">
              {breedImages[card.breedId as keyof typeof breedImages] && (
                <img
                  src={breedImages[card.breedId as keyof typeof breedImages]}
                  alt={card.breedName}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="mb-5 aspect-[16/10] w-full rounded-xl object-cover object-[50%_35%]"
                />
              )}
              <span className="inline-flex w-fit items-center rounded-full border border-border-strong px-2.5 py-1 text-xs text-muted-foreground">
                {c.badge}
              </span>
              <p className="mt-4 text-sm text-muted-foreground">{card.context}</p>
              <h3 className="mt-2 flex items-baseline gap-2 font-display text-xl tracking-tight text-foreground">
                {card.breedName}
                <span className="text-base font-semibold tabular-nums text-accent">{card.score}%</span>
              </h3>
              {card.fit && (
                <blockquote className="mt-4 border-l-2 border-border pl-4 text-[0.9375rem] leading-relaxed text-foreground/90">
                  “{card.fit}”
                </blockquote>
              )}
              {card.tradeoff && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{card.tradeoff}</p>
              )}
              {card.skipped && (
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground/80">{c.skipNote}</p>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            to={withLangPrefix("/guides/a-calmer-companion")}
            className="text-[0.9375rem] font-medium underline underline-offset-4 decoration-border-strong hover:decoration-foreground"
          >
            {c.calmerLink}
          </Link>
        </p>
      </div>
    </section>
  );
}
