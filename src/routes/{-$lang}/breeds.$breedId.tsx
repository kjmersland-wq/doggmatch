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
import {
  breedFaqs,
  exerciseCareParagraph,
  familyTemperamentParagraph,
  livingSpaceParagraph,
} from "@/lib/breeds/pseo";
import { Arrow, Badge, ButtonLink, Eyebrow, TraitMeter } from "@/components/dogmatch/ui";
import { FitPanel } from "@/components/dogmatch/fit-panel";
import { JourneyLinks } from "@/components/dogmatch/journey-links";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import { relatedBreeds } from "@/lib/breeds/related";
import { abs, breadcrumbLd, jsonLd, headLocale, langUrl, seoLinks } from "@/lib/seo";
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
    seoTitle: "{breed}: Characteristics, Care & Fit | DoggMatch",
    seoDescription:
      "Is {breed} right for you? See size, shedding, family friendliness, and check your compatibility score with our quiz.",
    livingSpaceTitle: "Living Space & Apartment Fit",
    familyTitle: "Family & Temperament",
    careTitle: "Exercise & Care Needs",
    faqTitle: "Frequently asked questions",
    ctaHeading: "Find out if the {breed} matches your lifestyle",
    ctaButton: "Take the 2-minute DoggMatch Quiz to see your compatibility score",
    levelLow: "Low",
    levelMedium: "Medium",
    levelHigh: "High",
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
    seoTitle: "{breed}: Egenskaper, stell og hvordan den passer | DoggMatch",
    seoDescription:
      "Passer {breed} for deg? Se størrelse, pelsfelling og familievennlighet, og sjekk kompatibilitetsscoren din med quizen vår.",
    livingSpaceTitle: "Boareal og leilighet",
    familyTitle: "Familie og temperament",
    careTitle: "Mosjon og stell",
    faqTitle: "Ofte stilte spørsmål",
    ctaHeading: "Finn ut om {breed} passer livsstilen din",
    ctaButton: "Ta den 2-minutters DoggMatch-quizen og se kompatibilitetsscoren din",
    levelLow: "Lav",
    levelMedium: "Middels",
    levelHigh: "Høy",
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
    seoTitle: "{breed}: Charakterystyka, pielęgnacja i dopasowanie | DoggMatch",
    seoDescription:
      "Czy {breed} to pies dla ciebie? Sprawdź rozmiar, linienie i przyjazność wobec rodziny oraz swój wynik dopasowania w naszym quizie.",
    livingSpaceTitle: "Przestrzeń mieszkalna i mieszkanie",
    familyTitle: "Rodzina i temperament",
    careTitle: "Ruch i pielęgnacja",
    faqTitle: "Najczęściej zadawane pytania",
    ctaHeading: "Sprawdź, czy {breed} pasuje do twojego stylu życia",
    ctaButton: "Wypełnij 2-minutowy quiz DoggMatch i zobacz swój wynik dopasowania",
    levelLow: "Niski",
    levelMedium: "Średni",
    levelHigh: "Wysoki",
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
    seoTitle: "{breed}: Egenskaber, pleje og hvordan den passer | DoggMatch",
    seoDescription:
      "Passer en {breed} til dig? Se størrelse, fældning og familievenlighed, og tjek din kompatibilitetsscore med vores quiz.",
    livingSpaceTitle: "Boligplads og lejlighed",
    familyTitle: "Familie og temperament",
    careTitle: "Motion og pleje",
    faqTitle: "Ofte stillede spørgsmål",
    ctaHeading: "Find ud af, om {breed} passer din livsstil",
    ctaButton: "Tag den 2-minutters DoggMatch-quiz og se din kompatibilitetsscore",
    levelLow: "Lav",
    levelMedium: "Middel",
    levelHigh: "Høj",
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
    seoTitle: "{breed}: Egenskaper, skötsel och passform | DoggMatch",
    seoDescription:
      "Passar {breed} dig? Se storlek, fällning och familjevänlighet, och kolla din matchningspoäng med vårt quiz.",
    livingSpaceTitle: "Boyta och lägenhet",
    familyTitle: "Familj och temperament",
    careTitle: "Motion och skötsel",
    faqTitle: "Vanliga frågor",
    ctaHeading: "Ta reda på om {breed} passar din livsstil",
    ctaButton: "Gör det 2 minuter långa DoggMatch-quizet och se din matchningspoäng",
    levelLow: "Låg",
    levelMedium: "Medel",
    levelHigh: "Hög",
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
    seoTitle: "{breed}: Ominaisuudet, hoito ja sopivuus | DoggMatch",
    seoDescription:
      "Sopiiko {breed} sinulle? Katso koko, karvanlähtö ja perheystävällisyys, ja tarkista yhteensopivuuspisteesi testillämme.",
    livingSpaceTitle: "Asumistila ja kerrostalosopivuus",
    familyTitle: "Perhe ja luonne",
    careTitle: "Liikunta ja hoito",
    faqTitle: "Usein kysytyt kysymykset",
    ctaHeading: "Selvitä, sopiiko {breed} elämäntyyliisi",
    ctaButton: "Tee 2 minuutin DoggMatch-testi ja katso yhteensopivuuspisteesi",
    levelLow: "Matala",
    levelMedium: "Keskitaso",
    levelHigh: "Korkea",
  },
  de: {
    dayTitle: "Ein typischer Tag",
    commitmentTitle: "Was er von Ihnen verlangt",
    suitedTitle: "Am besten geeignet für",
    considerTitle: "Wichtige Punkte zum Nachdenken",
    healthTitle: "Gesundheitliche Hinweise",
    yourFitTitle: "Wie dieser Hund zu Ihrem Leben passt",
    yourFitNote: "Abgeglichen mit Ihren Antworten aus Finde meinen Hund, gespeichert auf diesem Gerät.",
    relatedTitle: "Ähnliche Rassen, einen Blick wert",
    timeMorning: "07:00",
    timeMidday: "12:00",
    timeEvening: "17:30",
    timeNight: "21:00",
    milestoneMorningTitle: "Morgenroutine",
    milestoneMiddayTitle: "Mittags & Alleinsein",
    milestoneEveningTitle: "Abendlicher Energieabbau",
    milestoneNightTitle: "Ruhe & Pflege",
    commitmentBadge: "Geschätzter täglicher aktiver Zeitaufwand: ~{hours} Stunden",
    lifestyleTitle: "Das Leben mit einem {breed}",
    exerciseCaption: "Tägliche Bewegung",
    homeCaption: "Zu Hause",
    detailCaption: "Fell & Details",
    exerciseAlt: "{breed} beim täglichen Spaziergang",
    homeAlt: "{breed} entspannt zu Hause",
    detailAlt: "Nahaufnahme des Fells eines {breed}",
    portraitWideAlt: "{breed}, Porträt",
    seoTitle: "{breed}: Eigenschaften, Pflege & Eignung | DoggMatch",
    seoDescription:
      "Passt ein {breed} zu Ihnen? Sehen Sie Größe, Fellwechsel und Familienfreundlichkeit, und prüfen Sie Ihren Kompatibilitäts-Score mit unserem Quiz.",
    livingSpaceTitle: "Wohnraum & Wohnungstauglichkeit",
    familyTitle: "Familie & Temperament",
    careTitle: "Bewegung & Pflege",
    faqTitle: "Häufig gestellte Fragen",
    ctaHeading: "Finden Sie heraus, ob ein {breed} zu Ihrem Lebensstil passt",
    ctaButton: "Machen Sie den 2-minütigen DoggMatch-Quiz und sehen Sie Ihren Kompatibilitäts-Score",
    levelLow: "Niedrig",
    levelMedium: "Mittel",
    levelHigh: "Hoch",
  },
  fr: {
    dayTitle: "Une journée type",
    commitmentTitle: "Ce qu'il attend de vous",
    suitedTitle: "Convient le mieux à",
    considerTitle: "Points importants à considérer",
    healthTitle: "Points de vigilance sur la santé",
    yourFitTitle: "Comment ce chien s'accorde à votre vie",
    yourFitNote: "Comparé aux réponses que vous avez données dans Trouver mon chien, conservées sur cet appareil.",
    relatedTitle: "Races similaires à découvrir",
    timeMorning: "07 h 00",
    timeMidday: "12 h 00",
    timeEvening: "17 h 30",
    timeNight: "21 h 00",
    milestoneMorningTitle: "Routine du matin",
    milestoneMiddayTitle: "Milieu de journée & autonomie",
    milestoneEveningTitle: "Dépense d'énergie du soir",
    milestoneNightTitle: "Décompression & soins",
    commitmentBadge: "Engagement actif quotidien estimé : ~{hours} heures",
    lifestyleTitle: "La vie avec un {breed}",
    exerciseCaption: "Exercice quotidien",
    homeCaption: "À la maison",
    detailCaption: "Pelage & détails",
    exerciseAlt: "{breed} lors d'une promenade quotidienne",
    homeAlt: "{breed} qui se détend à la maison",
    detailAlt: "Gros plan sur le pelage d'un {breed}",
    portraitWideAlt: "{breed}, portrait",
    seoTitle: "{breed} : caractéristiques, entretien et compatibilité | DoggMatch",
    seoDescription:
      "Un {breed} vous correspond-il ? Découvrez sa taille, sa perte de poils et son caractère familial, et vérifiez votre score de compatibilité avec notre quiz.",
    livingSpaceTitle: "Espace de vie et appartement",
    familyTitle: "Famille et tempérament",
    careTitle: "Exercice et entretien",
    faqTitle: "Questions fréquentes",
    ctaHeading: "Découvrez si le {breed} correspond à votre style de vie",
    ctaButton: "Faites le quiz DoggMatch de 2 minutes et découvrez votre score de compatibilité",
    levelLow: "Faible",
    levelMedium: "Moyen",
    levelHigh: "Élevé",
  },
  nl: {
    dayTitle: "Een dag uit het leven",
    commitmentTitle: "Wat hij van u vraagt",
    suitedTitle: "Het meest geschikt voor",
    considerTitle: "Belangrijke aandachtspunten",
    healthTitle: "Gezondheidsaandachtspunten",
    yourFitTitle: "Hoe deze hond bij uw leven past",
    yourFitNote: "Vergeleken met de antwoorden die u gaf bij Vind mijn hond, bewaard op dit apparaat.",
    relatedTitle: "Vergelijkbare rassen om te bekijken",
    timeMorning: "07:00",
    timeMidday: "12:00",
    timeEvening: "17:30",
    timeNight: "21:00",
    milestoneMorningTitle: "Ochtendroutine",
    milestoneMiddayTitle: "Middag & zelfstandigheid",
    milestoneEveningTitle: "Avondlijke energieverbranding",
    milestoneNightTitle: "Ontspanning & verzorging",
    commitmentBadge: "Geschatte dagelijkse actieve tijdsbesteding: ~{hours} uur",
    lifestyleTitle: "Het leven met een {breed}",
    exerciseCaption: "Dagelijkse beweging",
    homeCaption: "Thuis",
    detailCaption: "Vacht & details",
    exerciseAlt: "{breed} tijdens een dagelijkse wandeling",
    homeAlt: "{breed} die thuis ontspant",
    detailAlt: "Close-up van de vacht van een {breed}",
    portraitWideAlt: "{breed}, portret",
    seoTitle: "{breed}: Kenmerken, verzorging & geschiktheid | DoggMatch",
    seoDescription:
      "Past een {breed} bij u? Bekijk grootte, haaruitval en gezinsvriendelijkheid, en check uw compatibiliteitsscore met onze quiz.",
    livingSpaceTitle: "Woonruimte & appartement",
    familyTitle: "Gezin & temperament",
    careTitle: "Beweging & verzorging",
    faqTitle: "Veelgestelde vragen",
    ctaHeading: "Ontdek of de {breed} bij uw levensstijl past",
    ctaButton: "Doe de 2 minuten durende DoggMatch-quiz en bekijk uw compatibiliteitsscore",
    levelLow: "Laag",
    levelMedium: "Gemiddeld",
    levelHigh: "Hoog",
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
    const p = pick(pageCopy, locale);
    const title = interpolate(p.seoTitle, { breed: name });
    const description = interpolate(p.seoDescription, { breed: name });
    const image = abs(breedImages[loaderData.breed.id] ?? "/og-en.jpg");
    const faqs = breedFaqs(name, loaderData.breed.traits);
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
      links: seoLinks(path).map((l) => (l.rel === "canonical" ? { rel: "canonical", href: langUrl(path, locale) } : l)),
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
        jsonLd({
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      ],
    };
  },
  component: BreedDetail,
});

const labels = {
  size: { en: "Size", no: "Størrelse", pl: "Rozmiar", dk: "Størrelse", se: "Storlek", fi: "Koko", de: "Größe", fr: "Taille", nl: "Grootte" },
  energy: { en: "Energy", no: "Energi", pl: "Energia", dk: "Energi", se: "Energi", fi: "Energisyys", de: "Energie", fr: "Énergie", nl: "Energie" },
  exerciseNeeds: { en: "Exercise needs", no: "Mosjonsbehov", pl: "Potrzeby ruchowe", dk: "Motionsbehov", se: "Motionsbehov", fi: "Liikuntatarve", de: "Bewegungsbedarf", fr: "Besoin d'exercice", nl: "Beweegbehoefte" },
  mentalStimulation: { en: "Mental stimulation", no: "Mental stimulering", pl: "Stymulacja umysłowa", dk: "Mental stimulering", se: "Mental stimulans", fi: "Henkinen virikkeisyys", de: "Geistige Auslastung", fr: "Stimulation mentale", nl: "Mentale stimulatie" },
  trainability: { en: "Trainability", no: "Lærevillighet", pl: "Podatność na szkolenie", dk: "Lærevillighed", se: "Lärvillighet", fi: "Koulutettavuus", de: "Erziehbarkeit", fr: "Facilité d'éducation", nl: "Leerbaarheid" },
  sociability: { en: "Sociability", no: "Sosial med folk", pl: "Towarzyskość z ludźmi", dk: "Social med mennesker", se: "Social med människor", fi: "Sosiaalisuus ihmisten kanssa", de: "Geselligkeit", fr: "Sociabilité", nl: "Sociaal gedrag" },
  affection: { en: "Affection", no: "Kosete", pl: "Czułość", dk: "Kærlighed", se: "Kelig", fi: "Hellyys", de: "Anhänglichkeit", fr: "Affection", nl: "Aanhankelijkheid" },
  independence: { en: "Independence", no: "Selvstendighet", pl: "Niezależność", dk: "Selvstændighed", se: "Självständighet", fi: "Itsenäisyys", de: "Eigenständigkeit", fr: "Indépendance", nl: "Zelfstandigheid" },
  goodWithChildren: { en: "Good with children", no: "Passer med barn", pl: "Dobrze z dziećmi", dk: "Fungerer med børn", se: "Fungerar med barn", fi: "Sopii lasten kanssa", de: "Kinderfreundlichkeit", fr: "Bonne entente avec les enfants", nl: "Geschikt voor kinderen" },
  goodWithDogs: { en: "Good with other dogs", no: "Passer med andre hunder", pl: "Dobrze z innymi psami", dk: "Fungerer med andre hunde", se: "Fungerar med andra hundar", fi: "Sopii muiden koirien kanssa", de: "Verträglichkeit mit anderen Hunden", fr: "Bonne entente avec les autres chiens", nl: "Geschikt voor andere honden" },
  apartmentSuitability: { en: "Apartment suitability", no: "Passer i leilighet", pl: "Do mieszkania", dk: "Egnet til lejlighed", se: "Lämplig för lägenhet", fi: "Sopivuus kerrostaloon", de: "Wohnungstauglichkeit", fr: "Adapté à la vie en appartement", nl: "Geschikt voor een appartement" },
  aloneTolerance: { en: "Tolerance of being alone", no: "Tåler å være alene", pl: "Tolerancja samotności", dk: "Tåler at være alene", se: "Tål att vara ensam", fi: "Yksinolon sietokyky", de: "Verträgt Alleinsein", fr: "Tolérance à la solitude", nl: "Tolerantie voor alleen zijn" },
  shedding: { en: "Shedding", no: "Pelsfelling", pl: "Linienie", dk: "Fældning", se: "Fällning", fi: "Karvanlähtö", de: "Fellwechsel", fr: "Perte de poils", nl: "Haaruitval" },
  grooming: { en: "Grooming", no: "Pelsstell", pl: "Pielęgnacja sierści", dk: "Pelspleje", se: "Pälsvård", fi: "Turkinhoito", de: "Fellpflege", fr: "Toilettage", nl: "Vachtverzorging" },
  barking: { en: "Barking", no: "Bjeffing", pl: "Szczekanie", dk: "Gøen", se: "Skällighet", fi: "Haukkuherkkyys", de: "Bellneigung", fr: "Aboiements", nl: "Blafgedrag" },
  firstTimeSuitability: { en: "First-time owner suitability", no: "Passer for førstegangseiere", pl: "Odpowiedni dla początkujących", dk: "Egnet til førstegangsejere", se: "Lämplig för förstagångsägare", fi: "Sopivuus ensikertalaiselle", de: "Eignung für Ersthundehalter", fr: "Adapté aux primo-adoptants", nl: "Geschikt voor beginners" },
} as const;

/** The five metrics called out as badges at the top of the page. */
const KEY_STAT_KEYS = ["size", "shedding", "barking", "energy", "trainability"] as const;

function levelWord(value: number, c: (typeof pageCopy)["en"]): string {
  return value >= 4 ? c.levelHigh : value === 3 ? c.levelMedium : c.levelLow;
}

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
  const keyStats: [string, number][] = KEY_STAT_KEYS.map((key) => [pick(labels[key]), breed.traits[key]]);
  const faqs = breedFaqs(content.displayName, breed.traits);
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
            <div className="mt-6 flex flex-wrap gap-2">
              {keyStats.map(([label, value]) => (
                <Badge key={label}>
                  {label}: {levelWord(value, c)}
                </Badge>
              ))}
            </div>
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

      <CtaBanner breed={content.displayName} c={c} />

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
          <h2 className="display-md">{pick({ en: "What people love about them", no: "Det folk elsker ved dem", pl: "Co ludzie w nich kochają", dk: "Det folk elsker ved dem", se: "Det folk älskar hos dem", fi: "Mistä ihmiset pitävät heissä", de: "Was Menschen an ihnen lieben", fr: "Ce que les gens adorent chez eux", nl: "Wat mensen aan hen waarderen" })}</h2>
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

      {/* programmatic-SEO content block: apartment fit, family fit, exercise & care */}
      <section className="container-page grid gap-12 border-t border-border py-16 md:grid-cols-3 md:gap-10">
        <div>
          <h2 className="display-md">{c.livingSpaceTitle}</h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
            {livingSpaceParagraph(breed.traits)}
          </p>
        </div>
        <div>
          <h2 className="display-md">{c.familyTitle}</h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
            {familyTemperamentParagraph(breed.traits)}
          </p>
        </div>
        <div>
          <h2 className="display-md">{c.careTitle}</h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
            {exerciseCareParagraph(breed.traits)}
          </p>
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

      {/* FAQ, marked up in head() as FAQPage JSON-LD — kept in sync with what's rendered here */}
      <section className="container-page border-t border-border py-16">
        <h2 className="display-md">{c.faqTitle}</h2>
        <dl className="mt-8 grid gap-8 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="font-display text-lg leading-tight tracking-tight">{faq.question}</dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <CtaBanner breed={content.displayName} c={c} />

      <div className="container-page flex flex-wrap gap-3">
        <ButtonLink to={withLangPrefix("/compare")} tone="outline" size="lg">
          {t.nav.compare}
        </ButtonLink>
      </div>

      <JourneyLinks exclude={["/breeds"]} />
    </article>
  );
}

/** Prominent, high-visibility CTA into the quiz — used near the top and bottom of every breed page. */
function CtaBanner({ breed, c }: { breed: string; c: (typeof pageCopy)["en"] }) {
  return (
    <div className="container-page">
      <div className="flex flex-col items-start gap-5 rounded-[2rem] border border-border bg-surface px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <h2 className="font-display text-xl leading-snug tracking-tight sm:text-2xl">
          {interpolate(c.ctaHeading, { breed })}
        </h2>
        <ButtonLink
          to={withLangPrefix("/find-my-dog")}
          size="lg"
          className="w-full shrink-0 sm:w-auto"
        >
          {c.ctaButton}
          <Arrow />
        </ButtonLink>
      </div>
    </div>
  );
}
