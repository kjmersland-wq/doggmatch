import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { breedGroupLabel, breedOriginLabel } from "@/data/breed-meta";
import { useT, pick, useCopy, interpolate } from "@/i18n";
import { getBreed } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { breedImages, breedLifestyleImages } from "@/data/breed-images";
import { withLangPrefix } from "@/lib/localized-path";
import {
  bestSuitedFor,
  commitmentFacts,
  dailyCommitmentHours,
  groomingCadence,
  healthNote,
  thingsToConsider,
  typicalDay,
} from "@/lib/breeds/everyday";
import { matchDogTraits } from "@/lib/matching/engine";
import { useMatchProfile } from "@/lib/matching/store";
import { Arrow, ButtonLink, Eyebrow, TraitMeter } from "@/components/dogmatch/ui";
import { FitPanel } from "@/components/dogmatch/fit-panel";
import { JourneyLinks } from "@/components/dogmatch/journey-links";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import { relatedBreeds } from "@/lib/breeds/related";
import { abs, breadcrumbLd, jsonLd, headLocale, langUrl, noUrl, plUrl } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

const pageCopy = {
  en: {
    dayTitle: "A typical day together",
    commitmentTitle: "What they ask of you",
    suitedTitle: "Best suited for",
    considerTitle: "Important things to consider",
    healthTitle: "Health considerations",
    yourFitTitle: "How this dog fits your life",
    yourFitNote: "Read against the answers you gave in Find My Dog, kept on this device.",
    relatedTitle: "Similar breeds worth a look",
    timeMorning: "07:00",
    timeMidday: "12:00",
    timeEvening: "17:30",
    timeNight: "21:00",
    milestoneMorningTitle: "Morning Routine",
    milestoneMiddayTitle: "Midday & Independence",
    milestoneEveningTitle: "Evening Energy Burn",
    milestoneNightTitle: "Decompression & Care",
    commitmentBadge: "Estimated daily active commitment: ~{hours} hours",
    lifestyleTitle: "Life with a {breed}",
    exerciseCaption: "Daily exercise",
    homeCaption: "At home",
    detailCaption: "Coat & detail",
    exerciseAlt: "{breed} out on a daily walk",
    homeAlt: "{breed} resting at home",
    detailAlt: "Close-up detail of a {breed}'s coat",
    portraitWideAlt: "{breed}, portrait",
  },
  no: {
    dayTitle: "En typisk hverdag",
    commitmentTitle: "Hva den krever av deg",
    suitedTitle: "Passer best for",
    considerTitle: "Viktige ting å tenke gjennom",
    healthTitle: "Helsehensyn",
    yourFitTitle: "Hvordan denne hunden passer livet ditt",
    yourFitNote: "Lest opp mot svarene du ga i Finn min hund, lagret på denne enheten.",
    relatedTitle: "Lignende raser, verdt en titt",
    timeMorning: "07:00",
    timeMidday: "12:00",
    timeEvening: "17:30",
    timeNight: "21:00",
    milestoneMorningTitle: "Morgenrutine",
    milestoneMiddayTitle: "Midt på dagen og alenetid",
    milestoneEveningTitle: "Kveldens energiutladning",
    milestoneNightTitle: "Nedtrapping og pleie",
    commitmentBadge: "Anslått daglig aktiv innsats: ~{hours} timer",
    lifestyleTitle: "Livet med en {breed}",
    exerciseCaption: "Daglig mosjon",
    homeCaption: "Hjemme",
    detailCaption: "Pels og detaljer",
    exerciseAlt: "{breed} ute på en daglig tur",
    homeAlt: "{breed} som slapper av hjemme",
    detailAlt: "Nærbilde av pelsen til en {breed}",
    portraitWideAlt: "{breed}, portrett",
  },
  pl: {
    dayTitle: "Typowy dzień",
    commitmentTitle: "Czego od ciebie wymaga",
    suitedTitle: "Do kogo najlepiej pasuje",
    considerTitle: "Ważne rzeczy do przemyślenia",
    healthTitle: "Kwestie zdrowotne",
    yourFitTitle: "Jak ten pies pasuje do twojego życia",
    yourFitNote: "Odczytane na tle odpowiedzi, które podałeś w Znajdź mojego psa, zapisanych na tym urządzeniu.",
    relatedTitle: "Podobne rasy, warte spojrzenia",
    timeMorning: "07:00",
    timeMidday: "12:00",
    timeEvening: "17:30",
    timeNight: "21:00",
    milestoneMorningTitle: "Poranna rutyna",
    milestoneMiddayTitle: "Południe i samodzielność",
    milestoneEveningTitle: "Wieczorne rozładowanie energii",
    milestoneNightTitle: "Wyciszenie i pielęgnacja",
    commitmentBadge: "Szacowane dzienne zaangażowanie: ~{hours} godz.",
    lifestyleTitle: "Życie z {breed}",
    exerciseCaption: "Codzienny ruch",
    homeCaption: "W domu",
    detailCaption: "Sierść i detale",
    exerciseAlt: "{breed} podczas codziennego spaceru",
    homeAlt: "{breed} odpoczywający w domu",
    detailAlt: "Zbliżenie sierści {breed}",
    portraitWideAlt: "{breed}, portret",
  },
  dk: {
    dayTitle: "En typisk hverdag",
    commitmentTitle: "Hvad den kræver af dig",
    suitedTitle: "Hvem den passer bedst til",
    considerTitle: "Vigtige ting at tænke igennem",
    healthTitle: "Sundhedshensyn",
    yourFitTitle: "Hvordan denne hund passer dit liv",
    yourFitNote: "Læst op mod de svar du gav i Find min hund, gemt på denne enhed.",
    relatedTitle: "Lignende racer, værd at kigge på",
    timeMorning: "07:00",
    timeMidday: "12:00",
    timeEvening: "17:30",
    timeNight: "21:00",
    milestoneMorningTitle: "Morgenrutine",
    milestoneMiddayTitle: "Midt på dagen og alenetid",
    milestoneEveningTitle: "Aftenens energiudladning",
    milestoneNightTitle: "Nedtrapning og pleje",
    commitmentBadge: "Anslået daglig aktiv indsats: ~{hours} timer",
    lifestyleTitle: "Livet med en {breed}",
    exerciseCaption: "Daglig motion",
    homeCaption: "Derhjemme",
    detailCaption: "Pels og detaljer",
    exerciseAlt: "{breed} ude på en daglig tur",
    homeAlt: "{breed} der slapper af derhjemme",
    detailAlt: "Nærbillede af pelsen på en {breed}",
    portraitWideAlt: "{breed}, portræt",
  },
  se: {
    dayTitle: "En typisk vardag",
    commitmentTitle: "Vad den kräver av dig",
    suitedTitle: "Vem den passar bäst för",
    considerTitle: "Viktiga saker att tänka igenom",
    healthTitle: "Hälsohänsyn",
    yourFitTitle: "Hur den här hunden passar ditt liv",
    yourFitNote: "Läst mot svaren du gav i Hitta min hund, sparade på den här enheten.",
    relatedTitle: "Liknande raser värda en titt",
    timeMorning: "07:00",
    timeMidday: "12:00",
    timeEvening: "17:30",
    timeNight: "21:00",
    milestoneMorningTitle: "Morgonrutin",
    milestoneMiddayTitle: "Mitt på dagen och att vara ensam",
    milestoneEveningTitle: "Kvällens energiutlopp",
    milestoneNightTitle: "Nedvarvning och skötsel",
    commitmentBadge: "Uppskattad daglig aktiv insats: ~{hours} timmar",
    lifestyleTitle: "Livet med en {breed}",
    exerciseCaption: "Daglig motion",
    homeCaption: "Hemma",
    detailCaption: "Päls och detaljer",
    exerciseAlt: "{breed} ute på en daglig promenad",
    homeAlt: "{breed} som kopplar av hemma",
    detailAlt: "Närbild på pälsen hos en {breed}",
    portraitWideAlt: "{breed}, porträtt",
  },
  fi: {
    dayTitle: "Tyypillinen arkipäivä",
    commitmentTitle: "Mitä se vaatii sinulta",
    suitedTitle: "Kenelle se sopii parhaiten",
    considerTitle: "Tärkeitä asioita mietittäväksi",
    healthTitle: "Terveyteen liittyvät huomiot",
    yourFitTitle: "Miten tämä koira sopii elämääsi",
    yourFitNote: "Verrattu vastauksiisi Löydä koirani -kyselyssä, tallennettuna tälle laitteelle.",
    relatedTitle: "Samankaltaisia rotuja, joihin kannattaa tutustua",
    timeMorning: "07:00",
    timeMidday: "12:00",
    timeEvening: "17:30",
    timeNight: "21:00",
    milestoneMorningTitle: "Aamurutiini",
    milestoneMiddayTitle: "Keskipäivä ja yksinolo",
    milestoneEveningTitle: "Illan energianpurku",
    milestoneNightTitle: "Rauhoittuminen ja hoito",
    commitmentBadge: "Arvioitu päivittäinen aktiivinen panostus: ~{hours} tuntia",
    lifestyleTitle: "Arkea ja elämää: {breed}",
    exerciseCaption: "Päivittäinen liikunta",
    homeCaption: "Kotona",
    detailCaption: "Turkki ja yksityiskohdat",
    exerciseAlt: "{breed} päivittäisellä lenkillä",
    homeAlt: "{breed} rentoutumassa kotona",
    detailAlt: "Lähikuva turkista — {breed}",
    portraitWideAlt: "{breed}, muotokuva",
  },
de: {
    dayTitle: "Ein typischer gemeinsamer Tag",
    commitmentTitle: "Was sie von dir verlangen",
    suitedTitle: "Am besten geeignet für",
    considerTitle: "Wichtige Dinge zu bedenken",
    healthTitle: "Gesundheitliche Aspekte",
    yourFitTitle: "Wie dieser Hund zu deinem Leben passt",
    yourFitNote: "Abgeglichen mit den Antworten, die du bei Finde meinen Hund gegeben hast, gespeichert auf diesem Gerät.",
    relatedTitle: "Ähnliche Rassen, einen Blick wert",
    timeMorning: "07:00",
    timeMidday: "12:00",
    timeEvening: "17:30",
    timeNight: "21:00",
    milestoneMorningTitle: "Morgenroutine",
    milestoneMiddayTitle: "Mittagszeit und Alleinsein",
    milestoneEveningTitle: "Abendlicher Energieausgleich",
    milestoneNightTitle: "Runterkommen und Pflege",
    commitmentBadge: "Geschätzter täglicher Zeitaufwand: ~{hours} Stunden",
    lifestyleTitle: "Das Leben mit einem {breed}",
    exerciseCaption: "Tägliche Bewegung",
    homeCaption: "Zu Hause",
    detailCaption: "Fell & Details",
    exerciseAlt: "{breed} beim täglichen Spaziergang",
    homeAlt: "{breed} beim Entspannen zu Hause",
    detailAlt: "Nahaufnahme des Fells eines {breed}",
    portraitWideAlt: "{breed}, Porträt",
  },
  fr: {
    dayTitle: "Une journée type ensemble",
    commitmentTitle: "Ce qu'il attend de vous",
    suitedTitle: "Convient le mieux à",
    considerTitle: "Points importants à considérer",
    healthTitle: "Aspects de santé à connaître",
    yourFitTitle: "Comment ce chien s'accorde à votre vie",
    yourFitNote: "Analysé à partir des réponses que vous avez données dans Trouver mon chien, conservées sur cet appareil.",
    relatedTitle: "Des races proches qui méritent un coup d'œil",
    timeMorning: "07h00",
    timeMidday: "12h00",
    timeEvening: "17h30",
    timeNight: "21h00",
    milestoneMorningTitle: "Rituel du matin",
    milestoneMiddayTitle: "Milieu de journée et solitude",
    milestoneEveningTitle: "Dépense d'énergie du soir",
    milestoneNightTitle: "Détente et soins",
    commitmentBadge: "Engagement quotidien actif estimé : ~{hours} heures",
    lifestyleTitle: "La vie avec un {breed}",
    exerciseCaption: "Exercice quotidien",
    homeCaption: "À la maison",
    detailCaption: "Pelage & détails",
    exerciseAlt: "{breed} lors de sa promenade quotidienne",
    homeAlt: "{breed} au repos à la maison",
    detailAlt: "Gros plan sur le pelage d'un {breed}",
    portraitWideAlt: "{breed}, portrait",
  },
  nl: {
    dayTitle: "Een doorsnee dag samen",
    commitmentTitle: "Wat hij van je vraagt",
    suitedTitle: "Het meest geschikt voor",
    considerTitle: "Belangrijke aandachtspunten",
    healthTitle: "Aandachtspunten voor de gezondheid",
    yourFitTitle: "Hoe deze hond bij jouw leven past",
    yourFitNote: "Afgezet tegen de antwoorden die je gaf bij Vind mijn hond, bewaard op dit apparaat.",
    relatedTitle: "Vergelijkbare rassen die de moeite waard zijn",
    timeMorning: "07:00",
    timeMidday: "12:00",
    timeEvening: "17:30",
    timeNight: "21:00",
    milestoneMorningTitle: "Ochtendroutine",
    milestoneMiddayTitle: "Middag en alleen zijn",
    milestoneEveningTitle: "Energie kwijt in de avond",
    milestoneNightTitle: "Tot rust komen en verzorging",
    commitmentBadge: "Geschatte dagelijkse actieve tijdsinvestering: ~{hours} uur",
    lifestyleTitle: "Het leven met een {breed}",
    exerciseCaption: "Dagelijkse beweging",
    homeCaption: "Thuis",
    detailCaption: "Vacht & details",
    exerciseAlt: "{breed} tijdens de dagelijkse wandeling",
    homeAlt: "{breed} die thuis uitrust",
    detailAlt: "Close-up van de vacht van een {breed}",
    portraitWideAlt: "{breed}, portret",
  },
};

export const Route = createFileRoute("/{-$lang}/breeds/$breedId")({
  loader: ({ params }) => {
    const breed = getBreed(params.breedId);
    if (!breed) throw notFound();
    return { breed, content: breedContent()[breed.id] };
  },
  head: (ctx) => {
    const { params, loaderData } = ctx;
    if (!loaderData) {
      return { meta: [{ title: "We can't find that breed — DoggMatch" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/breeds/${params.breedId}`;
    const locale = headLocale(ctx);
    const name = loaderData.content.displayName;
    const title = `${name} — what they're really like to live with | DoggMatch`;
    const description = loaderData.content.summary;
    const image = abs(breedImages[loaderData.breed.id] ?? "/og-en.jpg");
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: langUrl(path, locale) },
        { property: "og:image", content: image },
        { property: "og:image:alt", content: `${name} — DoggMatch breed profile` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [
        { rel: "canonical", href: langUrl(path, locale) },
        { rel: "alternate", hrefLang: "en", href: abs(path) },
        { rel: "alternate", hrefLang: "nb-NO", href: noUrl(path) },
        { rel: "alternate", hrefLang: "pl-PL", href: plUrl(path) },
        { rel: "alternate", hrefLang: "x-default", href: abs(path) },
      ],
      scripts: [
        breadcrumbLd([
          { name: "DoggMatch", path: "/" },
          { name: "Breeds", path: "/breeds" },
          { name, path: `/breeds/${params.breedId}` },
        ]),
        jsonLd({
          "@type": "Article",
          headline: title,
          description,
          image,
          about: {
            "@type": "Thing",
            name,
            additionalProperty: (
              ["size", "energy", "shedding", "apartmentSuitability", "trainability", "firstTimeSuitability"] as const
            ).map((key) => ({
              "@type": "PropertyValue",
              name: pick(labels[key], locale),
              value: `${loaderData.breed.traits[key]}/5`,
            })),
          },
          isPartOf: { "@type": "WebSite", name: "DoggMatch", url: abs("/") },
          mainEntityOfPage: langUrl(path, locale),
        }),
      ],
    };
  },
  component: BreedDetail,
});

const labels = {
  size: { en: "Size", no: "Størrelse" , pl: "Rozmiar", de: "Größe", fr: "Taille", nl: "Grootte" },
  energy: { en: "Energy", no: "Energi" , pl: "Energia", de: "Energie", fr: "Énergie", nl: "Energie" },
  exerciseNeeds: { en: "Exercise needs", no: "Mosjonsbehov" , pl: "Potrzeby ruchowe", de: "Bewegungsbedarf", fr: "Besoin d'exercice", nl: "Behoefte aan beweging" },
  mentalStimulation: { en: "Mental stimulation", no: "Mental stimulering" , pl: "Stymulacja umysłowa", de: "Geistige Auslastung", fr: "Stimulation mentale", nl: "Mentale prikkeling" },
  trainability: { en: "Trainability", no: "Lærevillighet" , pl: "Podatność na szkolenie", de: "Erziehbarkeit", fr: "Facilité d'éducation", nl: "Leerbaarheid" },
  sociability: { en: "Sociability", no: "Sosial med folk" , pl: "Towarzyskość z ludźmi", de: "Geselligkeit mit Menschen", fr: "Sociabilité avec les gens", nl: "Sociaal met mensen" },
  affection: { en: "Affection", no: "Kosete" , pl: "Czułość", de: "Anhänglichkeit", fr: "Affection", nl: "Aanhankelijkheid" },
  independence: { en: "Independence", no: "Selvstendighet" , pl: "Niezależność", de: "Eigenständigkeit", fr: "Indépendance", nl: "Zelfstandigheid" },
  goodWithChildren: { en: "Good with children", no: "Passer med barn" , pl: "Dobrze z dziećmi", de: "Kinderfreundlich", fr: "Bon avec les enfants", nl: "Goed met kinderen" },
  goodWithDogs: { en: "Good with other dogs", no: "Passer med andre hunder" , pl: "Dobrze z innymi psami", de: "Verträgt sich mit anderen Hunden", fr: "Bon avec les autres chiens", nl: "Goed met andere honden" },
  apartmentSuitability: { en: "Apartment suitability", no: "Passer i leilighet" , pl: "Do mieszkania", de: "Wohnungstauglichkeit", fr: "Adapté à la vie en appartement", nl: "Geschikt voor een appartement" },
  aloneTolerance: { en: "Tolerance of being alone", no: "Tåler å være alene" , pl: "Tolerancja samotności", de: "Verträgt Alleinsein", fr: "Tolérance à la solitude", nl: "Verdraagt alleen zijn" },
  shedding: { en: "Shedding", no: "Pelsfelling" , pl: "Linienie", de: "Fellwechsel", fr: "Perte de poils", nl: "Verharen" },
  grooming: { en: "Grooming", no: "Pelsstell" , pl: "Pielęgnacja sierści", de: "Fellpflege", fr: "Toilettage", nl: "Vachtverzorging" },
  barking: { en: "Barking", no: "Bjeffing" , pl: "Szczekanie", de: "Bellen", fr: "Aboiements", nl: "Blaffen" },
  firstTimeSuitability: { en: "First-time owner suitability", no: "Passer for førstegangseiere", pl: "Odpowiedni dla początkujących", de: "Geeignet für Ersthundehalter", fr: "Adapté aux primo-adoptants", nl: "Geschikt voor beginners" },
} as const;

function BreedDetail() {
  const t = useT();
  const c = useCopy(pageCopy);
  const profile = useMatchProfile();
  const { breed } = Route.useLoaderData();
  const content = breedContent()[breed.id];
  const traitRows: [string, number][] = (Object.keys(labels) as (keyof typeof labels)[]).map((key) => [
    pick(labels[key]),
    breed.traits[key],
  ]);
  const related = relatedBreeds(breed.id, 4);

  const day = typicalDay(breed.traits);
  const dailyHours = dailyCommitmentHours(breed.traits);
  const dailyMilestones = [
    { time: c.timeMorning, title: c.milestoneMorningTitle, body: `${day[0]} ${day[2]}` },
    { time: c.timeMidday, title: c.milestoneMiddayTitle, body: day[1]! },
    { time: c.timeEvening, title: c.milestoneEveningTitle, body: day[3]! },
    { time: c.timeNight, title: c.milestoneNightTitle, body: groomingCadence(breed.traits) },
  ];

  const lifestyle = breedLifestyleImages[breed.id];
  const lifestylePhotos = [
    lifestyle?.exercise
      ? {
          key: "exercise",
          src: lifestyle.exercise,
          alt: interpolate(c.exerciseAlt, { breed: content.displayName }),
          caption: c.exerciseCaption,
        }
      : undefined,
    lifestyle?.home
      ? {
          key: "home",
          src: lifestyle.home,
          alt: interpolate(c.homeAlt, { breed: content.displayName }),
          caption: c.homeCaption,
        }
      : undefined,
    lifestyle?.detail
      ? {
          key: "detail",
          src: lifestyle.detail,
          alt: interpolate(c.detailAlt, { breed: content.displayName }),
          caption: c.detailCaption,
        }
      : undefined,
  ].filter((photo): photo is NonNullable<typeof photo> => photo !== undefined);

  return (
    <article className="pb-24">
      <div className="container-page py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to={withLangPrefix("/breeds")} className="hover:text-foreground">
            {t.nav.breeds}
          </Link>
          <span aria-hidden="true"> / </span>
          <span className="text-foreground">{content.displayName}</span>
        </nav>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>
              {breedGroupLabel(breed.group)} · {breedOriginLabel(breed.origin)}
            </Eyebrow>
            <div className="mt-6 flex items-start justify-between gap-4">
              <h1 className="display-xl">{content.displayName}</h1>
              <ShareBar compact className="mt-1 shrink-0" />
            </div>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {content.summary}
            </p>
            <dl className="mt-9 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              <div className="bg-background p-5">
                <dt className="eyebrow">{t.breeds.lifespan}</dt>
                <dd className="mt-2 font-display text-lg">
                  {breed.lifespan[0]}–{breed.lifespan[1]} {t.breeds.years}
                </dd>
              </div>
              <div className="bg-background p-5">
                <dt className="eyebrow">{t.breeds.cost}</dt>
                <dd className="mt-2 font-display text-lg">
                  €{breed.annualCost[0]}–{breed.annualCost[1]}
                </dd>
              </div>
            </dl>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={breedImages[breed.id]}
              alt={content.displayName}
              width={1024}
              height={1280}
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* secondary lifestyle gallery — falls back to a wide crop of the portrait until real lifestyle photography exists */}
      <section className="container-page border-t border-border py-16">
        <h2 className="display-md">{interpolate(c.lifestyleTitle, { breed: content.displayName })}</h2>
        {lifestylePhotos.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lifestylePhotos.map((photo) => (
              <figure key={photo.key} className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={960}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-sm text-muted-foreground">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <img
              src={breedImages[breed.id]}
              alt={interpolate(c.portraitWideAlt, { breed: content.displayName })}
              width={1600}
              height={686}
              loading="lazy"
              decoding="async"
              className="aspect-[21/9] w-full object-cover object-top"
            />
          </div>
        )}
      </section>

      <section className="container-page grid gap-12 border-t border-border py-16 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="display-md">{pick({ en: "What people love about them", no: "Det folk elsker ved dem", pl: "Co ludzie w nich kochają", dk: "Det folk elsker ved dem", se: "Det folk älskar hos dem", fi: "Mistä ihmiset pitävät heissä", de: "Was Menschen an ihnen lieben", fr: "Ce que les gens adorent chez eux", nl: "Wat mensen aan hen zo geweldig vinden" })}</h2>
          <ul className="mt-7 space-y-4">
            {content.strengths.map((s) => (
              <li key={s} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <span aria-hidden="true" className="text-primary">
                  ✓
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="display-md">{t.result.considerTitle}</h2>
          <ul className="mt-7 space-y-4">
            {content.considerations.map((c) => (
              <li key={c} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <span aria-hidden="true" className="text-accent">
                  !
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page border-t border-border py-16">
        <h2 className="display-md">{t.breeds.traits}</h2>
        <div className="mt-8 grid gap-x-14 md:grid-cols-2">
          {traitRows.map(([label, value]) => (
            <div key={label} className="border-b border-border">
              <TraitMeter label={label} value={value} />
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {t.allergyNote}
        </p>
        <div className="mt-6">
          <SourcesLink category="breeds" />
        </div>
      </section>

      {/* what living with them actually looks like */}
      <section className="container-page border-t border-border py-16">
        <h2 className="display-md">{c.dayTitle}</h2>
        <ol className="mt-10 max-w-2xl">
          {dailyMilestones.map((m, i) => (
            <li key={m.time} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="flex shrink-0 flex-col items-center">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border-strong bg-card font-display text-xs tabular-nums text-muted-foreground">
                  {m.time}
                </span>
                {i < dailyMilestones.length - 1 && (
                  <span aria-hidden="true" className="mt-1 w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pt-2">
                <h3 className="font-display text-lg tracking-tight">{m.title}</h3>
                <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-foreground/90">{m.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground">
          {interpolate(c.commitmentBadge, { hours: String(dailyHours) })}
        </p>

        <h3 className="display-md mt-14">{c.commitmentTitle}</h3>
        <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {commitmentFacts(breed).map((fact) => (
            <div key={fact.label} className="bg-card p-6">
              <dt className="eyebrow">{fact.label}</dt>
              <dd className="mt-2 font-display text-base leading-snug">{fact.value}</dd>
              {fact.detail && (
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{fact.detail}</dd>
              )}
            </div>
          ))}
        </dl>
      </section>

      <section className="container-page grid gap-12 border-t border-border py-16 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="display-md">{c.suitedTitle}</h2>
          <ul className="mt-7 space-y-4">
            {bestSuitedFor(breed.traits).map((line) => (
              <li key={line} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <span aria-hidden="true" className="text-primary">
                  ✓
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="display-md">{c.considerTitle}</h2>
          <ul className="mt-7 space-y-4">
            {thingsToConsider(breed.traits).map((line) => (
              <li key={line} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <span aria-hidden="true" className="text-accent">
                  !
                </span>
                {line}
              </li>
            ))}
          </ul>
          <h3 className="mt-10 font-display text-lg leading-tight tracking-tight">{c.healthTitle}</h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
            {healthNote(breed.traits)}
          </p>
        </div>
      </section>

      {/* how they sit against the reader's own answers */}
      {profile && (
        <section className="container-page border-t border-border py-16">
          <h2 className="display-md">{c.yourFitTitle}</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{c.yourFitNote}</p>
          <FitPanel
            className="mt-8"
            traits={breed.traits}
            profile={profile}
            score={matchDogTraits(breed.traits, profile).score}
          />
        </section>
      )}

      {/* onward links for readers comparing breeds, and for Googlebot to reach every breed page without going back to the index */}
      <section className="container-page border-t border-border py-16">
        <h2 className="display-md">{c.relatedTitle}</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((r) => (
            <li key={r.id}>
              <Link to={withLangPrefix("/breeds/$breedId")} params={{ breedId: r.id }} className="group block">
                <div className="overflow-hidden rounded-[1.25rem]">
                  <img
                    src={breedImages[r.id]}
                    alt={breedContent()[r.id].displayName}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg leading-tight tracking-tight">
                  {breedContent()[r.id].displayName}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{breedGroupLabel(r.group)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="container-page flex flex-wrap gap-3">
        <ButtonLink to={withLangPrefix("/find-my-dog")} size="lg">
          {t.nav.startMatching}
          <Arrow />
        </ButtonLink>
        <ButtonLink to={withLangPrefix("/compare")} tone="outline" size="lg">
          {t.nav.compare}
        </ButtonLink>
      </div>

      <JourneyLinks exclude={["/breeds"]} />
    </article>
  );
}
