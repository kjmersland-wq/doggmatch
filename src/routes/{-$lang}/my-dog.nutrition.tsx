import { localizedHead } from "@/lib/seo";
import { pageSeo } from "@/lib/seo/pages";
import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel, VetNote } from "@/components/dogmatch/care/parts";
import { PortionCalculator } from "@/components/dogmatch/care/portion-calculator";
import { careImages } from "@/data/care/images";
import { nutritionSections } from "@/data/care/nutrition";
import { useMyDog } from "@/lib/care/store";
import { useCopy } from "@/i18n";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Food & portions — how much to feed your dog | DoggMatch";
const description =
  "Work out roughly how much to feed your dog each day, how often to feed, and how to change food without upsetting their stomach.";

export const Route = createFileRoute("/{-$lang}/my-dog/nutrition")({
  head: (ctx) => localizedHead(ctx, "/my-dog/nutrition", pageSeo.myDogNutrition),
  component: NutritionPage,
});

const copy = {
  en: {
    eyebrow: "Food",
    title: "How much should I feed?",
    intro:
      "Nobody can give you an exact number, and anyone who says otherwise is guessing too. What we can do is give you a sensible starting point, then help you adjust.",
    heroAlt: "A bowl of dog food being measured in a kitchen",
    startingPointFor: (name: string) => `A starting point for ${name}`,
    startingPoint: "A starting point",
    statDay: "A day",
    statFoodDay: "Food a day",
    statFoodDayHintWeighed: "Weighed, not scooped",
    statFoodDayHintMissing: "Add the kcal/100g from the bag",
    statPerMeal: "Per meal",
    statPerMealHint: (n: number) => `Across ${n} meals`,
    howWeGotThereTitle: "How we got there",
    howWeGotThereP1: (weightKg: number, restingKcal: number, factor: number, reason: string) =>
      `We start with the resting energy a dog of ${weightKg} kg needs — ${restingKcal} kcal — using the standard formula vets use (70 × weight^0.75). Then we multiply by ${factor} for ${reason}. No black box, no guesswork you can't see.`,
    howWeGotThereP2: (treatKcal: number) =>
      `Keep treats to around ${treatKcal} kcal a day — roughly a tenth of the total — and take that out of the meals rather than adding it on top.`,
    noPortionsBody:
      "Add your dog's weight and we'll work out a daily amount, show you the maths behind it, and convert it into grams of the food you actually feed.",
    addDetailsCta: "Add your dog's details",
    basicsEyebrow: "The basics",
    basicsTitle: "Getting food right, without overthinking it",
    vetNote:
      "This is a starting point, not a prescription. Puppies, pregnant dogs, dogs on a diet and dogs with a health condition all need something more specific — that's a conversation with your vet, and a worthwhile one.",
    watchShapeTitle: "Then keep an eye on the shape",
    watchShapeBody:
      "The real test isn't the number on the bag. It's how your dog looks and feels a month from now. Check monthly and adjust by about 10% at a time.",
    weightCta: "Weight & shape",
  },
  no: {
    eyebrow: "Mat",
    title: "Hvor mye bør jeg fôre?",
    intro:
      "Ingen kan gi deg et eksakt tall, og alle som sier noe annet gjetter også. Det vi kan gjøre, er å gi deg et fornuftig utgangspunkt, og så hjelpe deg å justere.",
    heroAlt: "En bolle med hundemat måles opp på et kjøkken",
    startingPointFor: (name: string) => `Et utgangspunkt for ${name}`,
    startingPoint: "Et utgangspunkt",
    statDay: "Per dag",
    statFoodDay: "Mat per dag",
    statFoodDayHintWeighed: "Veid, ikke øst opp",
    statFoodDayHintMissing: "Legg inn kcal/100 g fra posen",
    statPerMeal: "Per måltid",
    statPerMealHint: (n: number) => `Fordelt på ${n} måltider`,
    howWeGotThereTitle: "Slik regnet vi det ut",
    howWeGotThereP1: (weightKg: number, restingKcal: number, factor: number, reason: string) =>
      `Vi starter med hvileenergien en hund på ${weightKg} kg trenger — ${restingKcal} kcal — med formelen veterinærer bruker (70 × vekt^0,75). Så ganger vi med ${factor} for ${reason}. Ingen svart boks, ingen gjetning du ikke kan se.`,
    howWeGotThereP2: (treatKcal: number) =>
      `Hold godbiter til rundt ${treatKcal} kcal per dag — omtrent en tidel av totalen — og ta det fra måltidene i stedet for å legge det på toppen.`,
    noPortionsBody:
      "Legg inn hundens vekt, så regner vi ut en daglig mengde, viser deg matematikken bak, og gjør det om til gram av maten du faktisk fôrer med.",
    addDetailsCta: "Legg til hundens detaljer",
    basicsEyebrow: "Det grunnleggende",
    basicsTitle: "Å få maten riktig, uten å overtenke det",
    vetNote:
      "Dette er et utgangspunkt, ikke en forskrivning. Valper, drektige tisper, hunder på diett og hunder med en helsetilstand trenger alle noe mer spesifikt — det er en samtale med veterinæren din, og en verdifull en.",
    watchShapeTitle: "Følg så med på formen",
    watchShapeBody:
      "Den virkelige testen er ikke tallet på posen. Det er hvordan hunden din ser ut og har det om en måned. Sjekk månedlig og juster med rundt 10 % om gangen.",
    weightCta: "Vekt og hold",
  },
  pl: {
    eyebrow: "Jedzenie",
    title: "Ile powinienem karmić?",
    intro:
      "Nikt nie poda ci dokładnej liczby, a każdy, kto twierdzi inaczej, też tylko zgaduje. Możemy za to dać ci rozsądny punkt wyjścia, a potem pomóc go dostosować.",
    heroAlt: "Miska z jedzeniem dla psa odmierzana w kuchni",
    startingPointFor: (name: string) => `Punkt wyjścia dla ${name}`,
    startingPoint: "Punkt wyjścia",
    statDay: "Dziennie",
    statFoodDay: "Jedzenie dziennie",
    statFoodDayHintWeighed: "Zważone, nie na oko",
    statFoodDayHintMissing: "Dodaj kcal/100g z opakowania",
    statPerMeal: "Na posiłek",
    statPerMealHint: (n: number) => `W ${n} posiłkach`,
    howWeGotThereTitle: "Jak to policzyliśmy",
    howWeGotThereP1: (weightKg: number, restingKcal: number, factor: number, reason: string) =>
      `Zaczynamy od energii spoczynkowej, jakiej potrzebuje pies o wadze ${weightKg} kg — ${restingKcal} kcal — korzystając ze standardowego wzoru stosowanego przez weterynarzy (70 × waga^0,75). Następnie mnożymy przez ${factor} ze względu na: ${reason}. Żadnej czarnej skrzynki, żadnego zgadywania, którego nie widzisz.`,
    howWeGotThereP2: (treatKcal: number) =>
      `Ogranicz przysmaki do około ${treatKcal} kcal dziennie — mniej więcej dziesiątej części całości — i odejmij tę ilość od posiłków, zamiast dodawać ją na wierzch.`,
    noPortionsBody:
      "Podaj wagę swojego psa, a my wyliczymy dzienną porcję, pokażemy ci obliczenia stojące za nią i przeliczymy ją na gramy karmy, którą faktycznie podajesz.",
    addDetailsCta: "Dodaj dane swojego psa",
    basicsEyebrow: "Podstawy",
    basicsTitle: "Jak dobrze karmić, bez przesadnego kombinowania",
    vetNote:
      "To punkt wyjścia, nie recepta. Szczenięta, suki w ciąży, psy na diecie i psy z problemami zdrowotnymi potrzebują czegoś bardziej konkretnego — to temat na rozmowę z weterynarzem, i warto ją odbyć.",
    watchShapeTitle: "Potem obserwuj sylwetkę",
    watchShapeBody:
      "Prawdziwym testem nie jest liczba na opakowaniu. Liczy się to, jak twój pies wygląda i czuje się za miesiąc. Sprawdzaj co miesiąc i koryguj o około 10% naraz.",
    weightCta: "Waga i sylwetka",
  },
  dk: {
    eyebrow: "Mad",
    title: "Hvor meget bør jeg fodre?",
    intro:
      "Ingen kan give dig et præcist tal, og alle der siger andet, gætter også. Det vi kan gøre, er at give dig et fornuftigt udgangspunkt og derefter hjælpe dig med at justere.",
    heroAlt: "En skål hundemad bliver målt af i et køkken",
    startingPointFor: (name: string) => `Et udgangspunkt for ${name}`,
    startingPoint: "Et udgangspunkt",
    statDay: "Pr. dag",
    statFoodDay: "Mad om dagen",
    statFoodDayHintWeighed: "Vejet, ikke øst op",
    statFoodDayHintMissing: "Tilføj kcal/100 g fra posen",
    statPerMeal: "Pr. måltid",
    statPerMealHint: (n: number) => `Fordelt på ${n} måltider`,
    howWeGotThereTitle: "Sådan regnede vi det ud",
    howWeGotThereP1: (weightKg: number, restingKcal: number, factor: number, reason: string) =>
      `Vi starter med hvileenergien en hund på ${weightKg} kg har brug for — ${restingKcal} kcal — med formlen dyrlæger bruger (70 × vægt^0,75). Så ganger vi med ${factor} for ${reason}. Ingen sort boks, ingen gætterier du ikke kan se.`,
    howWeGotThereP2: (treatKcal: number) =>
      `Hold godbidder til omkring ${treatKcal} kcal om dagen — cirka en tiendedel af det samlede — og træk det fra måltiderne i stedet for at lægge det oveni.`,
    noPortionsBody:
      "Tilføj din hunds vægt, så regner vi en daglig mængde ud, viser dig regnestykket bag, og omregner det til gram af den mad, du rent faktisk fodrer med.",
    addDetailsCta: "Tilføj din hunds oplysninger",
    basicsEyebrow: "Det grundlæggende",
    basicsTitle: "At få maden rigtig, uden at overtænke det",
    vetNote:
      "Det her er et udgangspunkt, ikke en recept. Hvalpe, drægtige tæver, hunde på diæt og hunde med en helbredstilstand har alle brug for noget mere specifikt — det er en samtale med din dyrlæge, og en værdifuld en.",
    watchShapeTitle: "Hold så øje med formen",
    watchShapeBody:
      "Den rigtige test er ikke tallet på posen. Det er, hvordan din hund ser ud og har det om en måned. Tjek månedligt og juster med omkring 10 % ad gangen.",
    weightCta: "Vægt og hold",
  },
  se: {
    eyebrow: "Mat",
    title: "Hur mycket bör jag mata?",
    intro:
      "Ingen kan ge dig ett exakt tal, och alla som säger annat gissar också. Det vi kan göra är att ge dig en förnuftig utgångspunkt och sedan hjälpa dig att justera.",
    heroAlt: "En skål hundmat mäts upp i ett kök",
    startingPointFor: (name: string) => `En utgångspunkt för ${name}`,
    startingPoint: "En utgångspunkt",
    statDay: "Per dag",
    statFoodDay: "Mat per dag",
    statFoodDayHintWeighed: "Vägd, inte uppmätt på känn",
    statFoodDayHintMissing: "Lägg till kcal/100 g från påsen",
    statPerMeal: "Per måltid",
    statPerMealHint: (n: number) => `Fördelat på ${n} måltider`,
    howWeGotThereTitle: "Så räknade vi ut det",
    howWeGotThereP1: (weightKg: number, restingKcal: number, factor: number, reason: string) =>
      `Vi börjar med viloenergin en hund på ${weightKg} kg behöver — ${restingKcal} kcal — med formeln veterinärer använder (70 × vikt^0,75). Sedan multiplicerar vi med ${factor} för ${reason}. Ingen svart låda, inga gissningar du inte kan se.`,
    howWeGotThereP2: (treatKcal: number) =>
      `Håll godis till runt ${treatKcal} kcal per dag — ungefär en tiondel av totalen — och dra av det från måltiderna i stället för att lägga till det ovanpå.`,
    noPortionsBody:
      "Lägg till din hunds vikt, så räknar vi ut en daglig mängd, visar dig matematiken bakom, och omvandlar det till gram av maten du faktiskt matar med.",
    addDetailsCta: "Lägg till din hunds uppgifter",
    basicsEyebrow: "Grunderna",
    basicsTitle: "Att få maten rätt, utan att övertänka det",
    vetNote:
      "Det här är en utgångspunkt, inte ett recept. Valpar, dräktiga tikar, hundar på diet och hundar med ett hälsotillstånd behöver alla något mer specifikt — det är ett samtal med din veterinär, och ett värdefullt sådant.",
    watchShapeTitle: "Håll sedan koll på formen",
    watchShapeBody:
      "Det verkliga testet är inte talet på påsen. Det är hur din hund ser ut och mår om en månad. Kolla månadsvis och justera med ungefär 10 % åt gången.",
    weightCta: "Vikt och hull",
  },
  fi: {
    eyebrow: "Ruoka",
    title: "Kuinka paljon minun pitäisi ruokkia?",
    intro:
      "Kukaan ei voi antaa sinulle tarkkaa lukua, ja jokainen, joka väittää toisin, myös arvailee. Voimme antaa sinulle järkevän lähtökohdan ja auttaa sinua sitten säätämään sitä.",
    heroAlt: "Kulhollinen koiranruokaa mitataan keittiössä",
    startingPointFor: (name: string) => `Lähtökohta koiralle ${name}`,
    startingPoint: "Lähtökohta",
    statDay: "Päivässä",
    statFoodDay: "Ruokaa päivässä",
    statFoodDayHintWeighed: "Punnittu, ei silmämääräisesti",
    statFoodDayHintMissing: "Lisää kcal/100 g pussista",
    statPerMeal: "Per ateria",
    statPerMealHint: (n: number) => `Jaettuna ${n} ateriaan`,
    howWeGotThereTitle: "Näin laskimme sen",
    howWeGotThereP1: (weightKg: number, restingKcal: number, factor: number, reason: string) =>
      `Aloitamme lepoenergiasta, jota ${weightKg} kg painava koira tarvitsee — ${restingKcal} kcal — käyttäen eläinlääkäreiden vakiokaavaa (70 × paino^0,75). Sitten kerromme kertoimella ${factor} syystä: ${reason}. Ei mustaa laatikkoa, ei arvailua, jota et näe.`,
    howWeGotThereP2: (treatKcal: number) =>
      `Pidä herkut noin ${treatKcal} kcal:ssa päivässä — suunnilleen kymmenesosassa kokonaismäärästä — ja vähennä se aterioista sen sijaan, että lisäät sen päälle.`,
    noPortionsBody:
      "Lisää koirasi paino, niin laskemme päivittäisen määrän, näytämme sen taustalla olevan laskennan ja muunnamme sen grammoiksi ruokaa, jota oikeasti annat.",
    addDetailsCta: "Lisää koirasi tiedot",
    basicsEyebrow: "Perusasiat",
    basicsTitle: "Ruokinnan saaminen kohdalleen, ilman liikaa miettimistä",
    vetNote:
      "Tämä on lähtökohta, ei resepti. Pennut, tiineet nartut, dieetillä olevat koirat ja terveysongelmaiset koirat tarvitsevat kaikki jotain tarkempaa — se on keskustelu eläinlääkärisi kanssa, ja kannattava sellainen.",
    watchShapeTitle: "Pidä sitten silmällä muotoa",
    watchShapeBody:
      "Todellinen testi ei ole pussissa oleva luku. Se on, miltä koirasi näyttää ja tuntuu kuukauden kuluttua. Tarkista kuukausittain ja säädä noin 10 % kerrallaan.",
    weightCta: "Paino ja kunto",
  },
  de: {
    eyebrow: "Futter",
    title: "Wie viel sollte ich füttern?",
    intro:
      "Niemand kann Ihnen eine exakte Zahl nennen, und wer etwas anderes behauptet, rät ebenfalls nur. Was wir tun können, ist Ihnen einen sinnvollen Ausgangspunkt zu geben und Ihnen dann bei der Anpassung zu helfen.",
    heroAlt: "Eine Schüssel Hundefutter wird in einer Küche abgemessen",
    startingPointFor: (name: string) => `Ein Ausgangspunkt für ${name}`,
    startingPoint: "Ein Ausgangspunkt",
    statDay: "Am Tag",
    statFoodDay: "Futter pro Tag",
    statFoodDayHintWeighed: "Abgewogen, nicht geschöpft",
    statFoodDayHintMissing: "Fügen Sie die kcal/100g vom Beutel hinzu",
    statPerMeal: "Pro Mahlzeit",
    statPerMealHint: (n: number) => `Verteilt auf ${n} Mahlzeiten`,
    howWeGotThereTitle: "So sind wir darauf gekommen",
    howWeGotThereP1: (weightKg: number, restingKcal: number, factor: number, reason: string) =>
      `Wir beginnen mit dem Ruheenergiebedarf, den ein Hund mit ${weightKg} kg benötigt — ${restingKcal} kcal — nach der Standardformel, die Tierärzte verwenden (70 × Gewicht^0,75). Dann multiplizieren wir mit ${factor} für ${reason}. Keine Blackbox, kein Raten, das Sie nicht nachvollziehen können.`,
    howWeGotThereP2: (treatKcal: number) =>
      `Halten Sie Leckerlis bei etwa ${treatKcal} kcal am Tag — ungefähr ein Zehntel der Gesamtmenge — und ziehen Sie das von den Mahlzeiten ab, statt es obendrauf zu geben.`,
    noPortionsBody:
      "Geben Sie das Gewicht Ihres Hundes ein, und wir berechnen eine Tagesmenge, zeigen Ihnen die dahinterstehende Rechnung und rechnen sie in Gramm des Futters um, das Sie tatsächlich füttern.",
    addDetailsCta: "Angaben zu Ihrem Hund hinzufügen",
    basicsEyebrow: "Die Grundlagen",
    basicsTitle: "Das Futter richtig hinbekommen, ohne es zu kompliziert zu machen",
    vetNote:
      "Dies ist ein Ausgangspunkt, keine Verordnung. Welpen, trächtige Hündinnen, Hunde auf Diät und Hunde mit einer Erkrankung brauchen alle etwas Spezifischeres — das ist ein Gespräch mit Ihrem Tierarzt, und ein lohnendes.",
    watchShapeTitle: "Behalten Sie dann die Kondition im Blick",
    watchShapeBody:
      "Der eigentliche Test ist nicht die Zahl auf dem Beutel. Es ist, wie Ihr Hund in einem Monat aussieht und sich fühlt. Prüfen Sie monatlich und passen Sie jeweils um etwa 10 % an.",
    weightCta: "Gewicht & Kondition",
  },
  fr: {
    eyebrow: "Nourriture",
    title: "Combien devrais-je nourrir mon chien ?",
    intro:
      "Personne ne peut vous donner un chiffre exact, et quiconque prétend le contraire devine aussi. Ce que nous pouvons faire, c'est vous donner un point de départ raisonnable, puis vous aider à ajuster.",
    heroAlt: "Un bol de nourriture pour chien mesuré dans une cuisine",
    startingPointFor: (name: string) => `Un point de départ pour ${name}`,
    startingPoint: "Un point de départ",
    statDay: "Par jour",
    statFoodDay: "Nourriture par jour",
    statFoodDayHintWeighed: "Pesée, pas mesurée à la louche",
    statFoodDayHintMissing: "Ajoutez les kcal/100g indiquées sur le sac",
    statPerMeal: "Par repas",
    statPerMealHint: (n: number) => `Réparti sur ${n} repas`,
    howWeGotThereTitle: "Comment nous avons calculé cela",
    howWeGotThereP1: (weightKg: number, restingKcal: number, factor: number, reason: string) =>
      `Nous partons de l'énergie au repos dont a besoin un chien de ${weightKg} kg — ${restingKcal} kcal — selon la formule standard utilisée par les vétérinaires (70 × poids^0,75). Puis nous multiplions par ${factor} pour ${reason}. Pas de boîte noire, pas de suppositions invisibles.`,
    howWeGotThereP2: (treatKcal: number) =>
      `Limitez les friandises à environ ${treatKcal} kcal par jour — soit environ un dixième du total — et retirez cette quantité des repas plutôt que de l'ajouter en plus.`,
    noPortionsBody:
      "Indiquez le poids de votre chien, et nous calculerons une quantité quotidienne, vous montrerons le calcul derrière, et la convertirons en grammes de la nourriture que vous donnez réellement.",
    addDetailsCta: "Ajouter les informations de votre chien",
    basicsEyebrow: "Les bases",
    basicsTitle: "Bien nourrir votre chien, sans se compliquer la vie",
    vetNote:
      "Ceci est un point de départ, pas une prescription. Les chiots, les chiennes gestantes, les chiens au régime et les chiens ayant un problème de santé ont tous besoin de quelque chose de plus spécifique — c'est une conversation à avoir avec votre vétérinaire, et une conversation qui vaut la peine.",
    watchShapeTitle: "Puis surveillez la silhouette",
    watchShapeBody:
      "Le vrai test n'est pas le chiffre sur le sac. C'est l'apparence et l'état de votre chien dans un mois. Vérifiez chaque mois et ajustez d'environ 10 % à la fois.",
    weightCta: "Poids & forme",
  },
  nl: {
    eyebrow: "Voeding",
    title: "Hoeveel zou ik moeten voeren?",
    intro:
      "Niemand kan u een exact getal geven, en iedereen die iets anders beweert, gokt ook. Wat we wél kunnen doen, is u een verstandig startpunt geven en u vervolgens helpen bij te sturen.",
    heroAlt: "Een kom hondenvoer wordt afgemeten in een keuken",
    startingPointFor: (name: string) => `Een startpunt voor ${name}`,
    startingPoint: "Een startpunt",
    statDay: "Per dag",
    statFoodDay: "Voeding per dag",
    statFoodDayHintWeighed: "Afgewogen, niet geschept",
    statFoodDayHintMissing: "Voeg de kcal/100g van de zak toe",
    statPerMeal: "Per maaltijd",
    statPerMealHint: (n: number) => `Verdeeld over ${n} maaltijden`,
    howWeGotThereTitle: "Zo kwamen we daarop uit",
    howWeGotThereP1: (weightKg: number, restingKcal: number, factor: number, reason: string) =>
      `We beginnen met de rustenergie die een hond van ${weightKg} kg nodig heeft — ${restingKcal} kcal — met de standaardformule die dierenartsen gebruiken (70 × gewicht^0,75). Vervolgens vermenigvuldigen we met ${factor} vanwege: ${reason}. Geen zwarte doos, geen giswerk dat u niet kunt zien.`,
    howWeGotThereP2: (treatKcal: number) =>
      `Houd snacks rond ${treatKcal} kcal per dag — ongeveer een tiende van het totaal — en haal dat van de maaltijden af in plaats van het erbovenop te doen.`,
    noPortionsBody:
      "Voeg het gewicht van uw hond toe, en wij berekenen een dagelijkse hoeveelheid, laten u de berekening erachter zien en zetten het om in grammen van het voer dat u daadwerkelijk geeft.",
    addDetailsCta: "Gegevens van uw hond toevoegen",
    basicsEyebrow: "De basis",
    basicsTitle: "Voeding goed regelen, zonder er te veel over na te denken",
    vetNote:
      "Dit is een startpunt, geen voorschrift. Pups, drachtige teven, honden op dieet en honden met een aandoening hebben allemaal iets specifiekers nodig — dat is een gesprek met uw dierenarts, en de moeite waard.",
    watchShapeTitle: "Houd daarna de conditie in de gaten",
    watchShapeBody:
      "De echte test is niet het getal op de zak. Het is hoe uw hond er over een maand uitziet en zich voelt. Controleer maandelijks en pas ongeveer 10% per keer aan.",
    weightCta: "Gewicht & conditie",
  },
} as const;

function NutritionPage() {
  const c = useCopy(copy);
  const dog = useMyDog();

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div className="animate-rise">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="display-xl mt-6">{c.title}</h1>
            <ShareBar className="mt-6" />
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
          </div>
          <div className="animate-rise overflow-hidden rounded-[2rem] border border-border">
            <img
              src={careImages.careNutrition}
              alt={c.heroAlt}
              width={1400}
              height={1000}
              className="aspect-[7/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Section className="container-page">
        <Panel title={dog ? c.startingPointFor(dog.name) : c.startingPoint}>
          <PortionCalculator
            {...(dog ? { dogId: dog.id, dogName: dog.name } : {})}
            ageStage={dog?.ageStage ?? "adult"}
          />
          {!dog && (
            <ButtonLink to={withLangPrefix("/my-dog/setup")} tone="outline" className="mt-6">
              {c.addDetailsCta}
              <Arrow />
            </ButtonLink>
          )}
        </Panel>
      </Section>

      <Section className="container-page">
        <Eyebrow>{c.basicsEyebrow}</Eyebrow>
        <h2 className="display-lg mt-5 max-w-2xl">{c.basicsTitle}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {nutritionSections().map((s) => (
            <article key={s.title} className="rounded-[1.5rem] border border-border bg-card p-7">
              <h3 className="font-display text-xl leading-tight tracking-tight">{s.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              {"points" in s && s.points && (
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.6rem] h-1 w-3 shrink-0 rounded-full bg-accent"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-2">
          <VetNote>{c.vetNote}</VetNote>
          <div className="rounded-[1.5rem] border border-border bg-surface p-7">
            <h3 className="font-display text-xl tracking-tight">{c.watchShapeTitle}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.watchShapeBody}
            </p>
            <ButtonLink to={withLangPrefix("/my-dog/weight")} tone="outline" className="mt-6">
              {c.weightCta}
              <Arrow />
            </ButtonLink>
          </div>
        </div>
        <div className="container-page mt-8">
          <SourcesLink category="nutrition" />
        </div>
      </Section>
    </div>
  );
}
