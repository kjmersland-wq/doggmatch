import { localizedHead } from "@/lib/seo";
import { pageSeo } from "@/lib/seo/pages";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useCopy } from "@/i18n";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import {
  CareTile,
  Panel,
  RoutineRow,
  Stat,
  TopicCard,
  VetNote,
} from "@/components/dogmatch/care/parts";
import { CareCalendar, DogSwitcher, WeekStrip } from "@/components/dogmatch/care/hub";
import { careImages, categoryImages } from "@/data/care/images";
import { careTopics, getCareTopic } from "@/data/care/topics";
import { estimatePortions, weightTrend } from "@/lib/care/portions";
import { withLangPrefix } from "@/lib/localized-path";
import {
  careStore,
  todayKey,
  useCareProfile,
  useMyDog,
  useTodayRoutine,
  useWeights,
  type RoutineId,
} from "@/lib/care/store";
import {
  crossContributionLines,
  crossHeading,
  dogBreedLabel,
  resolveDogTraits,
  traitBasisNote,
} from "@/lib/dogs/profile";
import { breedImages } from "@/data/breed-images";
import { buildWeek } from "@/lib/care/week";
import { useWeekOverride } from "@/lib/care/records";
import { useProgress } from "@/lib/training/store";
import { seoLinks, abs } from "@/lib/seo";

const title = "My Dog — Everyday health, food and care | DoggMatch";
const description =
  "A calm, personal place to look after your dog properly: food and portions, weight, teeth, coat, paws and the little daily things that add up.";

export const Route = createFileRoute("/{-$lang}/my-dog/")({
  head: (ctx) => localizedHead(ctx, "/my-dog", pageSeo.myDog),
  component: MyDogHome,
});

const copy = {
  en: {
    eyebrow: "My Dog",
    heroTitleNoDog: "Looking after your dog, properly",
    heroLetsCare: "Let's take good care of {name}.",
    heroTextDog:
      "Food, weight, teeth, coat, paws and the small daily things. Everything in one calm place.",
    heroTextNoDog:
      "Tell us a little about your dog and we'll work out food portions, keep an eye on weight, and show you what everyday care actually looks like.",
    dogDetails: "{name}'s details",
    setupCta: "Set up my dog",
    canEatCta: "Can my dog eat this?",
    portraitAltDog: "{name}, {breed}",
    portraitAltFallbackBreed: "your dog",
    portraitAltNoDog: "A person sitting on the floor with their dog resting against them",
    sectionsAria: "My Dog sections",
    ageStages: { puppy: "Puppy", adolescent: "Adolescent", adult: "Adult", senior: "Senior" },
    routineItems: [
      { id: "fresh-water", label: "Fresh water", hint: "Clean bowl, topped up" },
      { id: "measured-meals", label: "Meals measured", hint: "Weighed, not guessed" },
      { id: "walk", label: "A proper walk", hint: "With time to sniff" },
      { id: "play", label: "A bit of play", hint: "Ten minutes counts" },
      { id: "teeth", label: "Teeth", hint: "Even thirty seconds helps" },
      { id: "brush", label: "Quick brush", hint: "And a feel for lumps or mats" },
      { id: "paw-check", label: "Paw check", hint: "After the walk" },
      { id: "quiet-time", label: "Quiet time", hint: "Nothing asked of them" },
    ],
    sections: [
      { to: "/my-dog/week", label: "My week", line: "Walks, training, food and care, day by day" },
      { to: "/train", label: "Training", line: "Today's short session and what you're working on" },
      { to: "/my-dog/nutrition", label: "Food", line: "Portions, meals and switching food safely" },
      {
        to: "/my-dog/care/everyday-check",
        label: "Health",
        line: "The quick once-over that catches things early",
      },
      {
        to: "/my-dog/care/dental",
        label: "Dental",
        line: "Teeth and gums, in under a minute a day",
      },
      {
        to: "/my-dog/care/coat",
        label: "Coat & care",
        line: "Brushing, bathing and knowing the coat type",
      },
      {
        to: "/my-dog/care/paws",
        label: "Paws & nails",
        line: "Pads, nails and what winter does to them",
      },
      { to: "/my-dog/weight", label: "Weight", line: "The hands-on check, and a simple record" },
      {
        to: "/my-dog/care/wellbeing",
        label: "Activity",
        line: "Movement, sniffing and enough rest",
      },
      {
        to: "/train/library",
        label: "Behaviour",
        line: "Pulling, jumping, barking — one lesson at a time",
      },
      { to: "/dog-life", label: "Dog life", line: "Places to go and things to do nearby" },
      {
        to: "/my-dog/print",
        label: "Documents",
        line: "Print the plan, the pack or a note for the sitter",
      },
    ],
    today: "Today",
    ofCount: "{done} of {total}",
    todayIntro: "None of this has to be perfect. Tick off what you've done — it resets tomorrow.",
    addYourDog: "Add your dog",
    toSaveDaily: "to save this from day to day.",
    whereThingsStand: "Where things stand",
    weight: "Weight",
    steadyOver: "Steady over {days} days",
    changeOver: "{sign}{kg} kg over {days} days",
    addWeightToTrack: "Add a weight to start tracking",
    foodADay: "Food a day",
    roughlyAcross: "Roughly, across {meals} meals",
    addWeightAndFood: "Add a weight and food",
    weightShape: "Weight & shape",
    foodPortions: "Food & portions",
    vetNoteHome:
      "Everything here is general guidance to help you look after your dog day to day. It doesn't replace your vet, who knows your dog. If something worries you, ring them — they'd always rather hear from you early.",
    yourWeek: "Your week",
    dogsWeek: "{name}'s week",
    seeWholeWeek: "See the whole week",
    weekIntro:
      "The next few days, worked out from your dog's age, breed and how busy your days are.",
    comingRoundAgain: "Coming round again",
    calendarIntro: "A gentle nudge, never a telling-off. Tick something off once it's done.",
    printSave: "Print & save",
    printSaveBody:
      "A profile card for the sitter, a feeding plan for the fridge, or the whole Dog Pack in one go.",
    printSaveCta: "Make something to print",
    contactsInfo: "Contacts & information",
    contactsInfoBody:
      "Your vet's number, the microchip, the allergies — all the things you'd hate to be hunting for in a hurry.",
    contactsInfoCta: "Fill in the details",
    vetVisits: "Vet visits",
    vetVisitsBody:
      "Write down what you've noticed and what you want to ask, then take it with you.",
    vetVisitsCta: "Prepare for a visit",
    everydayCare: "Everyday care",
    biggestDifference: "The things that make the biggest difference",
    biggestDifferenceSub: "Short, clear and doable. Pick one and start there.",
    foodPortionsTitle: "Food & portions",
    foodPortionsBody:
      "How much to feed, how often, and how to change food without upsetting anyone's stomach.",
    foodPortionsMeta: "Works out a daily amount for your dog",
    weightShapeTitle: "Weight & shape",
    weightShapeBody: "Learn the hands-on check vets use, and keep a simple record over time.",
    weightShapeMeta: "Takes about a minute a month",
    canEatTitle: "Can my dog eat this?",
    canEatBody: "A calm, searchable answer for the moment something falls on the kitchen floor.",
    canEatMeta: "Search any food",
    trainingCare: "Training and care go together",
    trainingCareBody:
      "A dog who's comfortable being handled is easier to brush, check and take to the vet. The handling lessons in Train Your Dog make all of this easier.",
    trainYourDog: "Train Your Dog",
    readGuides: "Read the guides",
    careGuidesCount: "{count} care guides · written to be read in a few minutes",
  },
  no: {
    eyebrow: "Min hund",
    heroTitleNoDog: "Å ta godt vare på hunden din",
    heroLetsCare: "La oss ta godt vare på {name}.",
    heroTextDog:
      "Mat, vekt, tenner, pels, poter og de små tingene i hverdagen. Alt samlet ett rolig sted.",
    heroTextNoDog:
      "Fortell oss litt om hunden din, så regner vi ut matmengder, holder øye med vekten, og viser deg hva hverdagsstell faktisk innebærer.",
    dogDetails: "Detaljer om {name}",
    setupCta: "Registrer hunden min",
    canEatCta: "Kan hunden min spise dette?",
    portraitAltDog: "{name}, {breed}",
    portraitAltFallbackBreed: "hunden din",
    portraitAltNoDog: "En person som sitter på gulvet med hunden sin inntil seg",
    sectionsAria: "Seksjoner under Min hund",
    ageStages: { puppy: "Valp", adolescent: "Tenåring", adult: "Voksen", senior: "Eldre" },
    routineItems: [
      { id: "fresh-water", label: "Friskt vann", hint: "Ren bolle, fylt opp" },
      { id: "measured-meals", label: "Målte måltider", hint: "Veid, ikke anslått" },
      { id: "walk", label: "En skikkelig tur", hint: "Med tid til å snuse" },
      { id: "play", label: "Litt lek", hint: "Ti minutter teller" },
      { id: "teeth", label: "Tenner", hint: "Selv tretti sekunder hjelper" },
      { id: "brush", label: "Rask børsting", hint: "Og en følekontroll for kuler eller filt" },
      { id: "paw-check", label: "Potesjekk", hint: "Etter turen" },
      { id: "quiet-time", label: "Rolig stund", hint: "Ingenting kreves av dem" },
    ],
    sections: [
      { to: "/my-dog/week", label: "Min uke", line: "Turer, trening, mat og stell, dag for dag" },
      { to: "/train", label: "Trening", line: "Dagens korte økt og det dere jobber med" },
      { to: "/my-dog/nutrition", label: "Mat", line: "Porsjoner, måltider og trygt fôrbytte" },
      {
        to: "/my-dog/care/everyday-check",
        label: "Helse",
        line: "Den raske sjekken som fanger ting tidlig",
      },
      {
        to: "/my-dog/care/dental",
        label: "Tannhelse",
        line: "Tenner og tannkjøtt, på under et minutt om dagen",
      },
      {
        to: "/my-dog/care/coat",
        label: "Pels & stell",
        line: "Børsting, bading og å kjenne pelstypen",
      },
      {
        to: "/my-dog/care/paws",
        label: "Poter & klør",
        line: "Poter, klør og hva vinteren gjør med dem",
      },
      { to: "/my-dog/weight", label: "Vekt", line: "Håndssjekken, og en enkel logg" },
      { to: "/my-dog/care/wellbeing", label: "Aktivitet", line: "Bevegelse, snusing og nok hvile" },
      {
        to: "/train/library",
        label: "Atferd",
        line: "Dra i bånd, hopping, bjeffing — én lekse om gangen",
      },
      { to: "/dog-life", label: "Hundeliv", line: "Steder å dra og ting å gjøre i nærheten" },
      {
        to: "/my-dog/print",
        label: "Dokumenter",
        line: "Skriv ut planen, pakken eller en lapp til hundepasseren",
      },
    ],
    today: "I dag",
    ofCount: "{done} av {total}",
    todayIntro:
      "Ingenting her trenger å være perfekt. Kryss av det du har gjort — det nullstilles i morgen.",
    addYourDog: "Legg til hunden din",
    toSaveDaily: "for å lagre dette fra dag til dag.",
    whereThingsStand: "Sånn ligger det an",
    weight: "Vekt",
    steadyOver: "Stabil over {days} dager",
    changeOver: "{sign}{kg} kg over {days} dager",
    addWeightToTrack: "Legg inn en vekt for å begynne å følge med",
    foodADay: "Mat per dag",
    roughlyAcross: "Omtrent, fordelt på {meals} måltider",
    addWeightAndFood: "Legg inn vekt og fôrtype",
    weightShape: "Vekt & hold",
    foodPortions: "Mat & porsjoner",
    vetNoteHome:
      "Alt her er generell veiledning som skal hjelpe deg med å ta vare på hunden i hverdagen. Det erstatter ikke veterinæren, som kjenner hunden din. Er du bekymret, ring dem — de vil alltid heller høre fra deg tidlig.",
    yourWeek: "Din uke",
    dogsWeek: "{name}s uke",
    seeWholeWeek: "Se hele uken",
    weekIntro:
      "De neste dagene, satt sammen ut fra hundens alder, rase og hvor travle dagene dine er.",
    comingRoundAgain: "Det som kommer igjen",
    calendarIntro: "Et vennlig dytt, aldri en skyldfølelse. Kryss av når det er gjort.",
    printSave: "Skriv ut & lagre",
    printSaveBody:
      "Et profilkort til hundepasseren, en fôringsplan til kjøleskapet, eller hele Hundepakken på én gang.",
    printSaveCta: "Lag noe å skrive ut",
    contactsInfo: "Kontakter & informasjon",
    contactsInfoBody:
      "Veterinærens nummer, mikrochip, allergier — alt du ville hatet å måtte lete etter i en fart.",
    contactsInfoCta: "Fyll inn detaljene",
    vetVisits: "Veterinærbesøk",
    vetVisitsBody:
      "Skriv ned hva du har lagt merke til og hva du vil spørre om, og ta det med deg dit.",
    vetVisitsCta: "Forbered et besøk",
    everydayCare: "Hverdagsstell",
    biggestDifference: "Tingene som utgjør størst forskjell",
    biggestDifferenceSub: "Kort, tydelig og gjennomførbart. Velg ett og start der.",
    foodPortionsTitle: "Mat & porsjoner",
    foodPortionsBody:
      "Hvor mye du bør fôre, hvor ofte, og hvordan du bytter fôr uten å velte noens mage.",
    foodPortionsMeta: "Regner ut en daglig mengde for hunden din",
    weightShapeTitle: "Vekt & hold",
    weightShapeBody: "Lær håndssjekken veterinærer bruker, og hold en enkel logg over tid.",
    weightShapeMeta: "Tar omtrent ett minutt i måneden",
    canEatTitle: "Kan hunden min spise dette?",
    canEatBody: "Et rolig, søkbart svar for øyeblikket noe havner på kjøkkengulvet.",
    canEatMeta: "Søk i alle typer mat",
    trainingCare: "Trening og stell hører sammen",
    trainingCareBody:
      "En hund som er komfortabel med å bli håndtert, er lettere å børste, sjekke og ta med til veterinæren. Håndteringsleksjonene i Tren hunden din gjør alt dette enklere.",
    trainYourDog: "Tren hunden din",
    readGuides: "Les guidene",
    careGuidesCount: "{count} stellguider · skrevet for å leses på noen minutter",
  },
  pl: {
    eyebrow: "Mój pies",
    heroTitleNoDog: "Dbanie o psa, tak jak trzeba",
    heroLetsCare: "Zadbajmy dobrze o {name}.",
    heroTextDog:
      "Jedzenie, waga, zęby, sierść, łapy i te małe codzienne rzeczy. Wszystko w jednym spokojnym miejscu.",
    heroTextNoDog:
      "Opowiedz nam trochę o swoim psie, a my obliczymy porcje jedzenia, będziemy pilnować wagi i pokażemy Ci, jak naprawdę wygląda codzienna opieka.",
    dogDetails: "Dane {name}",
    setupCta: "Zarejestruj mojego psa",
    canEatCta: "Czy mój pies może to zjeść?",
    portraitAltDog: "{name}, {breed}",
    portraitAltFallbackBreed: "Twój pies",
    portraitAltNoDog: "Osoba siedząca na podłodze, oparta o niego pies",
    sectionsAria: "Sekcje strony Mój pies",
    ageStages: { puppy: "Szczeniak", adolescent: "Nastolatek", adult: "Dorosły", senior: "Senior" },
    routineItems: [
      { id: "fresh-water", label: "Świeża woda", hint: "Czysta miska, uzupełniona" },
      { id: "measured-meals", label: "Zmierzone posiłki", hint: "Zważone, nie na oko" },
      { id: "walk", label: "Porządny spacer", hint: "Z czasem na obwąchiwanie" },
      { id: "play", label: "Trochę zabawy", hint: "Dziesięć minut się liczy" },
      { id: "teeth", label: "Zęby", hint: "Nawet trzydzieści sekund pomaga" },
      {
        id: "brush",
        label: "Szybkie szczotkowanie",
        hint: "I sprawdzenie, czy nie ma kołtunów lub guzków",
      },
      { id: "paw-check", label: "Sprawdzenie łap", hint: "Po spacerze" },
      { id: "quiet-time", label: "Chwila spokoju", hint: "Nic się od niego nie wymaga" },
    ],
    sections: [
      {
        to: "/my-dog/week",
        label: "Mój tydzień",
        line: "Spacery, trening, jedzenie i pielęgnacja, dzień po dniu",
      },
      { to: "/train", label: "Trening", line: "Dzisiejsza krótka sesja i to, nad czym pracujecie" },
      {
        to: "/my-dog/nutrition",
        label: "Jedzenie",
        line: "Porcje, posiłki i bezpieczna zmiana karmy",
      },
      {
        to: "/my-dog/care/everyday-check",
        label: "Zdrowie",
        line: "Szybki przegląd, który wychwytuje problemy wcześnie",
      },
      {
        to: "/my-dog/care/dental",
        label: "Zęby",
        line: "Zęby i dziąsła, w mniej niż minutę dziennie",
      },
      {
        to: "/my-dog/care/coat",
        label: "Sierść i pielęgnacja",
        line: "Szczotkowanie, kąpiel i poznanie typu sierści",
      },
      {
        to: "/my-dog/care/paws",
        label: "Łapy i pazury",
        line: "Poduszki, pazury i to, co robi z nimi zima",
      },
      {
        to: "/my-dog/weight",
        label: "Waga",
        line: "Praktyczne badanie dotykiem i prosta ewidencja",
      },
      {
        to: "/my-dog/care/wellbeing",
        label: "Aktywność",
        line: "Ruch, obwąchiwanie i wystarczająco dużo odpoczynku",
      },
      {
        to: "/train/library",
        label: "Zachowanie",
        line: "Ciągnięcie na smyczy, skakanie, szczekanie — jedna lekcja naraz",
      },
      {
        to: "/dog-life",
        label: "Życie z psem",
        line: "Miejsca do odwiedzenia i rzeczy do zrobienia w okolicy",
      },
      {
        to: "/my-dog/print",
        label: "Dokumenty",
        line: "Wydrukuj plan, pakiet albo notatkę dla opiekunki",
      },
    ],
    today: "Dzisiaj",
    ofCount: "{done} z {total}",
    todayIntro:
      "Nic tu nie musi być idealne. Odhaczaj to, co zrobiłaś/zrobiłeś — jutro zeruje się od nowa.",
    addYourDog: "Dodaj swojego psa",
    toSaveDaily: "aby zapisywać to z dnia na dzień.",
    whereThingsStand: "Jak to wygląda",
    weight: "Waga",
    steadyOver: "Stabilna przez {days} dni",
    changeOver: "{sign}{kg} kg przez {days} dni",
    addWeightToTrack: "Dodaj wagę, aby zacząć śledzić zmiany",
    foodADay: "Jedzenie na dzień",
    roughlyAcross: "Mniej więcej, w {meals} posiłkach",
    addWeightAndFood: "Dodaj wagę i karmę",
    weightShape: "Waga i kondycja",
    foodPortions: "Jedzenie i porcje",
    vetNoteHome:
      "Wszystko tutaj to ogólne wskazówki, które mają pomóc Ci na co dzień dbać o psa. Nie zastępują weterynarza, który zna Twojego psa. Jeśli coś Cię niepokoi, zadzwoń do niego — zawsze woli usłyszeć od Ciebie wcześniej.",
    yourWeek: "Twój tydzień",
    dogsWeek: "Tydzień {name}",
    seeWholeWeek: "Zobacz cały tydzień",
    weekIntro:
      "Najbliższe dni, obliczone na podstawie wieku psa, rasy i tego, jak zajęte są Twoje dni.",
    comingRoundAgain: "Co powraca",
    calendarIntro: "Delikatne przypomnienie, nigdy wyrzut. Odhacz coś, gdy jest zrobione.",
    printSave: "Wydrukuj i zachowaj",
    printSaveBody:
      "Karta profilu dla opiekunki, plan karmienia na lodówkę albo cały Pakiet dla psa naraz.",
    printSaveCta: "Przygotuj coś do wydruku",
    contactsInfo: "Kontakty i informacje",
    contactsInfoBody:
      "Numer do weterynarza, mikrochip, alergie — wszystko, czego nie chciałabyś/chciałbyś szukać w pośpiechu.",
    contactsInfoCta: "Uzupełnij dane",
    vetVisits: "Wizyty u weterynarza",
    vetVisitsBody:
      "Zapisz, co zauważyłaś/zauważyłeś i o co chcesz zapytać, a potem zabierz to ze sobą.",
    vetVisitsCta: "Przygotuj się do wizyty",
    everydayCare: "Codzienna pielęgnacja",
    biggestDifference: "Rzeczy, które robią największą różnicę",
    biggestDifferenceSub: "Krótko, jasno i wykonalnie. Wybierz jedną i zacznij od niej.",
    foodPortionsTitle: "Jedzenie i porcje",
    foodPortionsBody: "Ile karmić, jak często i jak zmienić karmę, nie psując nikomu żołądka.",
    foodPortionsMeta: "Obliczy dzienną porcję dla Twojego psa",
    weightShapeTitle: "Waga i kondycja",
    weightShapeBody:
      "Poznaj praktyczne badanie dotykiem stosowane przez weterynarzy i prowadź prostą ewidencję w czasie.",
    weightShapeMeta: "Zajmuje około minuty w miesiącu",
    canEatTitle: "Czy mój pies może to zjeść?",
    canEatBody:
      "Spokojna, przeszukiwalna odpowiedź na chwilę, gdy coś spadnie na podłogę w kuchni.",
    canEatMeta: "Wyszukaj dowolne jedzenie",
    trainingCare: "Trening i pielęgnacja idą w parze",
    trainingCareBody:
      "Pies, który czuje się dobrze, gdy jest dotykany, łatwiej daje się szczotkować, sprawdzać i zabierać do weterynarza. Lekcje dotyczące obsługi w Trenuj swojego psa ułatwiają to wszystko.",
    trainYourDog: "Trenuj swojego psa",
    readGuides: "Przeczytaj poradniki",
    careGuidesCount:
      "{count} poradników pielęgnacyjnych · napisanych tak, by przeczytać je w kilka minut",
  },
  dk: {
    eyebrow: "Min hund",
    heroTitleNoDog: "Pas godt på din hund",
    heroLetsCare: "Lad os passe godt på {name}.",
    heroTextDog:
      "Mad, vægt, tænder, pels, poter og de små ting i hverdagen. Alt samlet ét roligt sted.",
    heroTextNoDog:
      "Fortæl os lidt om din hund, så regner vi ud madmængder, holder øje med vægten og viser dig, hvad hverdagspleje egentlig indebærer.",
    dogDetails: "{name}s detaljer",
    setupCta: "Registrer min hund",
    canEatCta: "Kan min hund spise dette?",
    portraitAltDog: "{name}, {breed}",
    portraitAltFallbackBreed: "din hund",
    portraitAltNoDog: "En person, der sidder på gulvet med sin hund lænet ind til sig",
    sectionsAria: "Sektioner under Min hund",
    ageStages: { puppy: "Hvalp", adolescent: "Teenager", adult: "Voksen", senior: "Senior" },
    routineItems: [
      { id: "fresh-water", label: "Frisk vand", hint: "Ren skål, fyldt op" },
      { id: "measured-meals", label: "Målte måltider", hint: "Vejet, ikke gættet" },
      { id: "walk", label: "En ordentlig tur", hint: "Med tid til at snuse" },
      { id: "play", label: "Lidt leg", hint: "Ti minutter tæller" },
      { id: "teeth", label: "Tænder", hint: "Selv tredive sekunder hjælper" },
      { id: "brush", label: "Hurtig børstning", hint: "Og en følekontrol for knuder eller filt" },
      { id: "paw-check", label: "Potetjek", hint: "Efter turen" },
      { id: "quiet-time", label: "Rolig stund", hint: "Der kræves intet af dem" },
    ],
    sections: [
      { to: "/my-dog/week", label: "Min uge", line: "Gåture, træning, mad og pleje, dag for dag" },
      { to: "/train", label: "Træning", line: "Dagens korte session, og det I arbejder med" },
      { to: "/my-dog/nutrition", label: "Mad", line: "Portioner, måltider og sikkert foderskift" },
      {
        to: "/my-dog/care/everyday-check",
        label: "Sundhed",
        line: "Det hurtige tjek, der opdager ting tidligt",
      },
      {
        to: "/my-dog/care/dental",
        label: "Tandpleje",
        line: "Tænder og tandkød, på under et minut om dagen",
      },
      {
        to: "/my-dog/care/coat",
        label: "Pels & pleje",
        line: "Børstning, badning og kendskab til pelstypen",
      },
      {
        to: "/my-dog/care/paws",
        label: "Poter & kløer",
        line: "Poter, kløer og hvad vinteren gør ved dem",
      },
      { to: "/my-dog/weight", label: "Vægt", line: "Håndstjekket, og en enkel log" },
      { to: "/my-dog/care/wellbeing", label: "Aktivitet", line: "Bevægelse, snusen og nok hvile" },
      {
        to: "/train/library",
        label: "Adfærd",
        line: "Trækken i snor, hoppen, gøen — én lektie ad gangen",
      },
      { to: "/dog-life", label: "Hundeliv", line: "Steder at tage hen og ting at lave i nærheden" },
      {
        to: "/my-dog/print",
        label: "Dokumenter",
        line: "Udskriv planen, pakken eller en seddel til hundepasseren",
      },
    ],
    today: "I dag",
    ofCount: "{done} af {total}",
    todayIntro:
      "Intet af dette behøver at være perfekt. Kryds af det, du har gjort — det nulstilles i morgen.",
    addYourDog: "Tilføj din hund",
    toSaveDaily: "for at gemme dette fra dag til dag.",
    whereThingsStand: "Sådan står det til",
    weight: "Vægt",
    steadyOver: "Stabil over {days} dage",
    changeOver: "{sign}{kg} kg over {days} dage",
    addWeightToTrack: "Tilføj en vægt for at begynde at følge med",
    foodADay: "Mad om dagen",
    roughlyAcross: "Cirka, fordelt på {meals} måltider",
    addWeightAndFood: "Tilføj vægt og foder",
    weightShape: "Vægt & hold",
    foodPortions: "Mad & portioner",
    vetNoteHome:
      "Alt her er generel vejledning, der skal hjælpe dig med at passe på hunden i hverdagen. Det erstatter ikke din dyrlæge, som kender din hund. Er du bekymret, så ring til dem — de vil altid hellere høre fra dig for tidligt end for sent.",
    yourWeek: "Din uge",
    dogsWeek: "{name}s uge",
    seeWholeWeek: "Se hele ugen",
    weekIntro:
      "De næste dage, sat sammen ud fra din hunds alder, race og hvor travle dine dage er.",
    comingRoundAgain: "Det der kommer igen",
    calendarIntro: "Et venligt skub, aldrig en skideballe. Kryds af, når det er gjort.",
    printSave: "Udskriv & gem",
    printSaveBody:
      "Et profilkort til hundepasseren, en foderplan til køleskabet, eller hele Hundepakken på én gang.",
    printSaveCta: "Lav noget at udskrive",
    contactsInfo: "Kontakter & information",
    contactsInfoBody:
      "Dyrlægens nummer, mikrochippen, allergierne — alt det, du ville hade at skulle lede efter i en fart.",
    contactsInfoCta: "Udfyld detaljerne",
    vetVisits: "Dyrlægebesøg",
    vetVisitsBody:
      "Skriv ned, hvad du har lagt mærke til, og hvad du vil spørge om, og tag det med dig.",
    vetVisitsCta: "Forbered et besøg",
    everydayCare: "Hverdagspleje",
    biggestDifference: "De ting der gør den største forskel",
    biggestDifferenceSub: "Kort, tydeligt og overkommeligt. Vælg ét og start der.",
    foodPortionsTitle: "Mad & portioner",
    foodPortionsBody:
      "Hvor meget du bør fodre, hvor ofte, og hvordan du skifter foder uden at vælte nogens mave.",
    foodPortionsMeta: "Beregner en daglig mængde til din hund",
    weightShapeTitle: "Vægt & hold",
    weightShapeBody: "Lær håndstjekket, dyrlæger bruger, og hold en enkel log over tid.",
    weightShapeMeta: "Tager omkring et minut om måneden",
    canEatTitle: "Kan min hund spise dette?",
    canEatBody: "Et roligt, søgbart svar til det øjeblik, hvor noget lander på køkkengulvet.",
    canEatMeta: "Søg i alle fødevarer",
    trainingCare: "Træning og pleje hører sammen",
    trainingCareBody:
      "En hund, der er tryg ved at blive håndteret, er nemmere at børste, tjekke og tage med til dyrlægen. Håndteringslektionerne i Træn din hund gør alt dette nemmere.",
    trainYourDog: "Træn din hund",
    readGuides: "Læs guidene",
    careGuidesCount: "{count} plejeguides · skrevet til at læse på få minutter",
  },
  se: {
    eyebrow: "Min hund",
    heroTitleNoDog: "Ta hand om din hund, ordentligt",
    heroLetsCare: "Låt oss ta hand om {name} ordentligt.",
    heroTextDog:
      "Mat, vikt, tänder, päls, tassar och de små sakerna i vardagen. Allt samlat på ett lugnt ställe.",
    heroTextNoDog:
      "Berätta lite om din hund, så räknar vi ut foderportioner, håller koll på vikten och visar dig hur vardagsomsorg faktiskt ser ut.",
    dogDetails: "{name}s uppgifter",
    setupCta: "Registrera min hund",
    canEatCta: "Kan min hund äta det här?",
    portraitAltDog: "{name}, {breed}",
    portraitAltFallbackBreed: "din hund",
    portraitAltNoDog: "En person som sitter på golvet med sin hund lutad mot sig",
    sectionsAria: "Avsnitt under Min hund",
    ageStages: { puppy: "Valp", adolescent: "Tonåring", adult: "Vuxen", senior: "Senior" },
    routineItems: [
      { id: "fresh-water", label: "Färskt vatten", hint: "Ren skål, påfylld" },
      { id: "measured-meals", label: "Uppmätta måltider", hint: "Vägt, inte gissat" },
      { id: "walk", label: "En ordentlig promenad", hint: "Med tid att nosa" },
      { id: "play", label: "Lite lek", hint: "Tio minuter räknas" },
      { id: "teeth", label: "Tänder", hint: "Även trettio sekunder hjälper" },
      {
        id: "brush",
        label: "Snabb borstning",
        hint: "Och en känselkontroll efter knölar eller tovor",
      },
      { id: "paw-check", label: "Tasskoll", hint: "Efter promenaden" },
      { id: "quiet-time", label: "Lugn stund", hint: "Inget krävs av dem" },
    ],
    sections: [
      {
        to: "/my-dog/week",
        label: "Min vecka",
        line: "Promenader, träning, mat och omsorg, dag för dag",
      },
      { to: "/train", label: "Träning", line: "Dagens korta pass och det ni jobbar med" },
      {
        to: "/my-dog/nutrition",
        label: "Mat",
        line: "Portioner, måltider och att byta foder säkert",
      },
      {
        to: "/my-dog/care/everyday-check",
        label: "Hälsa",
        line: "Den snabba koll som fångar saker tidigt",
      },
      {
        to: "/my-dog/care/dental",
        label: "Tandvård",
        line: "Tänder och tandkött, på under en minut om dagen",
      },
      {
        to: "/my-dog/care/coat",
        label: "Päls & vård",
        line: "Borstning, bad och att känna igen pälstypen",
      },
      {
        to: "/my-dog/care/paws",
        label: "Tassar & klor",
        line: "Trampdynor, klor och vad vintern gör med dem",
      },
      { to: "/my-dog/weight", label: "Vikt", line: "Handgreppskontrollen, och en enkel logg" },
      {
        to: "/my-dog/care/wellbeing",
        label: "Aktivitet",
        line: "Rörelse, nosande och tillräckligt med vila",
      },
      {
        to: "/train/library",
        label: "Beteende",
        line: "Dra i kopplet, hoppa, skälla — en lektion i taget",
      },
      {
        to: "/dog-life",
        label: "Hundliv",
        line: "Platser att gå till och saker att göra i närheten",
      },
      {
        to: "/my-dog/print",
        label: "Dokument",
        line: "Skriv ut planen, paketet eller en lapp till hundvakten",
      },
    ],
    today: "Idag",
    ofCount: "{done} av {total}",
    todayIntro:
      "Inget av det här behöver vara perfekt. Bocka av det du har gjort — det nollställs imorgon.",
    addYourDog: "Lägg till din hund",
    toSaveDaily: "för att spara detta från dag till dag.",
    whereThingsStand: "Läget just nu",
    weight: "Vikt",
    steadyOver: "Stabil över {days} dagar",
    changeOver: "{sign}{kg} kg över {days} dagar",
    addWeightToTrack: "Lägg till en vikt för att börja följa upp",
    foodADay: "Mat per dag",
    roughlyAcross: "Ungefär, fördelat på {meals} måltider",
    addWeightAndFood: "Lägg till vikt och foder",
    weightShape: "Vikt & hull",
    foodPortions: "Mat & portioner",
    vetNoteHome:
      "Allt här är allmän vägledning som ska hjälpa dig ta hand om hunden i vardagen. Det ersätter inte din veterinär, som känner din hund. Är du orolig, ring dem — de vill alltid hellre höra från dig för tidigt än för sent.",
    yourWeek: "Din vecka",
    dogsWeek: "{name}s vecka",
    seeWholeWeek: "Se hela veckan",
    weekIntro:
      "De kommande dagarna, sammanställda utifrån din hunds ålder, ras och hur upptagna dina dagar är.",
    comingRoundAgain: "Det som återkommer",
    calendarIntro: "En vänlig knuff, aldrig en skuldkänsla. Bocka av när det är gjort.",
    printSave: "Skriv ut & spara",
    printSaveBody:
      "Ett profilkort till hundvakten, en foderplan till kylskåpet, eller hela Hundpaketet på en gång.",
    printSaveCta: "Skapa något att skriva ut",
    contactsInfo: "Kontakter & information",
    contactsInfoBody:
      "Veterinärens nummer, mikrochippet, allergierna — allt du skulle hata att leta efter i all hast.",
    contactsInfoCta: "Fyll i uppgifterna",
    vetVisits: "Veterinärbesök",
    vetVisitsBody:
      "Skriv ner vad du har lagt märke till och vad du vill fråga om, och ta med det dit.",
    vetVisitsCta: "Förbered ett besök",
    everydayCare: "Vardagsomsorg",
    biggestDifference: "Sakerna som gör störst skillnad",
    biggestDifferenceSub: "Kort, tydligt och görbart. Välj en och börja där.",
    foodPortionsTitle: "Mat & portioner",
    foodPortionsBody:
      "Hur mycket du bör mata, hur ofta, och hur du byter foder utan att ställa till det i magen.",
    foodPortionsMeta: "Räknar ut en daglig mängd för din hund",
    weightShapeTitle: "Vikt & hull",
    weightShapeBody:
      "Lär dig handgreppskontrollen som veterinärer använder, och håll en enkel logg över tid.",
    weightShapeMeta: "Tar ungefär en minut i månaden",
    canEatTitle: "Kan min hund äta det här?",
    canEatBody: "Ett lugnt, sökbart svar för stunden när något hamnar på köksgolvet.",
    canEatMeta: "Sök bland alla livsmedel",
    trainingCare: "Träning och omsorg hör ihop",
    trainingCareBody:
      "En hund som är bekväm med att bli hanterad är lättare att borsta, kolla och ta med till veterinären. Hanteringslektionerna i Träna din hund gör allt detta enklare.",
    trainYourDog: "Träna din hund",
    readGuides: "Läs guiderna",
    careGuidesCount: "{count} vårdguider · skrivna för att läsas på några minuter",
  },
  fi: {
    eyebrow: "Oma koira",
    heroTitleNoDog: "Huolehdi koirastasi kunnolla",
    heroLetsCare: "Pidetään hyvää huolta koirasta nimeltä {name}.",
    heroTextDog:
      "Ruoka, paino, hampaat, turkki, tassut ja pienet arjen asiat. Kaikki yhdessä rauhallisessa paikassa.",
    heroTextNoDog:
      "Kerro meille vähän koirastasi, niin laskemme ruoka-annokset, seuraamme painoa ja näytämme, miltä arjen hoito oikeasti näyttää.",
    dogDetails: "Koiran {name} tiedot",
    setupCta: "Rekisteröi koirani",
    canEatCta: "Voiko koirani syödä tätä?",
    portraitAltDog: "{name}, {breed}",
    portraitAltFallbackBreed: "koirasi",
    portraitAltNoDog: "Henkilö istuu lattialla koiransa nojatessa häneen",
    sectionsAria: "Oma koira -sivun osiot",
    ageStages: {
      puppy: "Pentu",
      adolescent: "Murrosikäinen",
      adult: "Aikuinen",
      senior: "Seniori",
    },
    routineItems: [
      { id: "fresh-water", label: "Raikas vesi", hint: "Puhdas kuppi, täytetty" },
      { id: "measured-meals", label: "Mitatut ateriat", hint: "Punnittu, ei arvattu" },
      { id: "walk", label: "Kunnon lenkki", hint: "Aikaa haistella" },
      { id: "play", label: "Vähän leikkiä", hint: "Kymmenen minuuttia riittää" },
      { id: "teeth", label: "Hampaat", hint: "Jopa kolmekymmentä sekuntia auttaa" },
      {
        id: "brush",
        label: "Nopea harjaus",
        hint: "Ja käsin tunnustelu kyhmyjen tai takkujen varalta",
      },
      { id: "paw-check", label: "Tassujen tarkistus", hint: "Lenkin jälkeen" },
      { id: "quiet-time", label: "Rauhallinen hetki", hint: "Ei vaadita mitään" },
    ],
    sections: [
      {
        to: "/my-dog/week",
        label: "Oma viikko",
        line: "Lenkit, koulutus, ruoka ja hoito, päivä kerrallaan",
      },
      {
        to: "/train",
        label: "Koulutus",
        line: "Tämän päivän lyhyt harjoitus ja se, mitä harjoittelette",
      },
      {
        to: "/my-dog/nutrition",
        label: "Ruoka",
        line: "Annokset, ateriat ja turvallinen ruoan vaihto",
      },
      {
        to: "/my-dog/care/everyday-check",
        label: "Terveys",
        line: "Nopea tarkistus, joka huomaa asiat ajoissa",
      },
      {
        to: "/my-dog/care/dental",
        label: "Hammashoito",
        line: "Hampaat ja ikenet, alle minuutissa päivässä",
      },
      {
        to: "/my-dog/care/coat",
        label: "Turkki ja hoito",
        line: "Harjaus, kylvetys ja turkkityypin tunteminen",
      },
      {
        to: "/my-dog/care/paws",
        label: "Tassut ja kynnet",
        line: "Tassunalustat, kynnet ja se, mitä talvi tekee niille",
      },
      {
        to: "/my-dog/weight",
        label: "Paino",
        line: "Käsin tehtävä tarkistus ja yksinkertainen seuranta",
      },
      {
        to: "/my-dog/care/wellbeing",
        label: "Aktiivisuus",
        line: "Liikuntaa, haistelua ja riittävästi lepoa",
      },
      {
        to: "/train/library",
        label: "Käytös",
        line: "Hihnasta vetäminen, hyppääminen, haukkuminen — yksi asia kerrallaan",
      },
      { to: "/dog-life", label: "Koiraelämä", line: "Paikkoja mennä ja tekemistä lähialueella" },
      {
        to: "/my-dog/print",
        label: "Asiakirjat",
        line: "Tulosta suunnitelma, paketti tai viesti koiranvahdille",
      },
    ],
    today: "Tänään",
    ofCount: "{done}/{total}",
    todayIntro:
      "Minkään tässä ei tarvitse olla täydellistä. Merkitse tehdyksi se, minkä olet tehnyt — se nollautuu huomenna.",
    addYourDog: "Lisää koirasi",
    toSaveDaily: "tallentaaksesi tämän päivästä toiseen.",
    whereThingsStand: "Tilanne juuri nyt",
    weight: "Paino",
    steadyOver: "Vakaa {days} päivän ajan",
    changeOver: "{sign}{kg} kg {days} päivän aikana",
    addWeightToTrack: "Lisää paino aloittaaksesi seurannan",
    foodADay: "Ruokaa päivässä",
    roughlyAcross: "Karkeasti, jaettuna {meals} ateriaan",
    addWeightAndFood: "Lisää paino ja ruoka",
    weightShape: "Paino ja kunto",
    foodPortions: "Ruoka ja annokset",
    vetNoteHome:
      "Kaikki tämä on yleistä ohjeistusta, joka auttaa sinua huolehtimaan koirastasi arjessa. Se ei korvaa eläinlääkäriä, joka tuntee koirasi. Jos jokin huolestuttaa, soita hänelle — hän kuulee mieluummin liian aikaisin kuin liian myöhään.",
    yourWeek: "Oma viikkosi",
    dogsWeek: "Viikko koiran {name} kanssa",
    seeWholeWeek: "Katso koko viikko",
    weekIntro: "Seuraavat päivät, koottuna koirasi iän, rodun ja arkesi kiireisyyden mukaan.",
    comingRoundAgain: "Mikä tulee taas eteen",
    calendarIntro:
      "Ystävällinen muistutus, ei koskaan syyllistävä. Merkitse tehdyksi, kun se on tehty.",
    printSave: "Tulosta ja tallenna",
    printSaveBody:
      "Profiilikortti koiranvahdille, ruokintasuunnitelma jääkaappiin tai koko Koirapaketti kerralla.",
    printSaveCta: "Tee jotain tulostettavaa",
    contactsInfo: "Yhteystiedot ja tiedot",
    contactsInfoBody:
      "Eläinlääkärin numero, mikrosiru, allergiat — kaikki se, mitä et haluaisi etsiä kiireessä.",
    contactsInfoCta: "Täytä tiedot",
    vetVisits: "Eläinlääkärikäynnit",
    vetVisitsBody: "Kirjoita ylös, mitä olet huomannut ja mitä haluat kysyä, ja ota se mukaasi.",
    vetVisitsCta: "Valmistaudu käyntiin",
    everydayCare: "Arjen hoito",
    biggestDifference: "Asiat, jotka vaikuttavat eniten",
    biggestDifferenceSub: "Lyhyttä, selkeää ja tehtävissä olevaa. Valitse yksi ja aloita siitä.",
    foodPortionsTitle: "Ruoka ja annokset",
    foodPortionsBody:
      "Kuinka paljon ruokkia, kuinka usein, ja miten vaihdat ruoan ilman että kenenkään vatsa reagoi.",
    foodPortionsMeta: "Laskee koirallesi päivittäisen annoksen",
    weightShapeTitle: "Paino ja kunto",
    weightShapeBody:
      "Opi eläinlääkäreiden käyttämä käsin tehtävä tarkistus ja pidä yksinkertaista seurantaa ajan mittaan.",
    weightShapeMeta: "Vie noin minuutin kuukaudessa",
    canEatTitle: "Voiko koirani syödä tätä?",
    canEatBody: "Rauhallinen, haettava vastaus hetkeen, jolloin jotain putoaa keittiön lattialle.",
    canEatMeta: "Hae mitä tahansa ruokaa",
    trainingCare: "Koulutus ja hoito kulkevat käsi kädessä",
    trainingCareBody:
      "Koira, joka on tottunut käsittelyyn, on helpompi harjata, tarkistaa ja viedä eläinlääkäriin. Kouluta koirasi -osion käsittelyoppitunnit helpottavat kaikkea tätä.",
    trainYourDog: "Kouluta koirasi",
    readGuides: "Lue oppaat",
    careGuidesCount: "{count} hoito-opasta · kirjoitettu luettavaksi muutamassa minuutissa",
  },
  de: {
    eyebrow: "Mein Hund",
    heroTitleNoDog: "Gut für deinen Hund sorgen",
    heroLetsCare: "Kümmern wir uns gut um {name}.",
    heroTextDog:
      "Futter, Gewicht, Zähne, Fell, Pfoten und die kleinen Dinge im Alltag. Alles an einem ruhigen Ort.",
    heroTextNoDog:
      "Erzähl uns ein wenig über deinen Hund, und wir berechnen die Futtermengen, behalten das Gewicht im Blick und zeigen dir, wie Alltagspflege wirklich aussieht.",
    dogDetails: "{name}s Angaben",
    setupCta: "Meinen Hund anlegen",
    canEatCta: "Darf mein Hund das essen?",
    portraitAltDog: "{name}, {breed}",
    portraitAltFallbackBreed: "dein Hund",
    portraitAltNoDog: "Eine Person sitzt auf dem Boden, ihr Hund lehnt sich an sie",
    sectionsAria: "Bereiche unter Mein Hund",
    ageStages: { puppy: "Welpe", adolescent: "Junghund", adult: "Erwachsen", senior: "Senior" },
    routineItems: [
      { id: "fresh-water", label: "Frisches Wasser", hint: "Sauberer Napf, aufgefüllt" },
      { id: "measured-meals", label: "Abgemessene Mahlzeiten", hint: "Gewogen, nicht geschätzt" },
      { id: "walk", label: "Ein richtiger Spaziergang", hint: "Mit Zeit zum Schnüffeln" },
      { id: "play", label: "Etwas Spiel", hint: "Zehn Minuten zählen schon" },
      { id: "teeth", label: "Zähne", hint: "Schon dreißig Sekunden helfen" },
      {
        id: "brush",
        label: "Kurz bürsten",
        hint: "Und dabei nach Knoten oder Verfilzungen tasten",
      },
      { id: "paw-check", label: "Pfotencheck", hint: "Nach dem Spaziergang" },
      { id: "quiet-time", label: "Ruhige Zeit", hint: "Nichts wird verlangt" },
    ],
    sections: [
      {
        to: "/my-dog/week",
        label: "Meine Woche",
        line: "Spaziergänge, Training, Futter und Pflege, Tag für Tag",
      },
      {
        to: "/train",
        label: "Training",
        line: "Die kurze Einheit von heute und woran ihr gerade arbeitet",
      },
      {
        to: "/my-dog/nutrition",
        label: "Futter",
        line: "Portionen, Mahlzeiten und ein sicherer Futterwechsel",
      },
      {
        to: "/my-dog/care/everyday-check",
        label: "Gesundheit",
        line: "Der schnelle Check, der Probleme früh erkennt",
      },
      {
        to: "/my-dog/care/dental",
        label: "Zahnpflege",
        line: "Zähne und Zahnfleisch, in unter einer Minute am Tag",
      },
      {
        to: "/my-dog/care/coat",
        label: "Fell & Pflege",
        line: "Bürsten, Baden und den Felltyp kennen",
      },
      {
        to: "/my-dog/care/paws",
        label: "Pfoten & Krallen",
        line: "Ballen, Krallen und was der Winter mit ihnen macht",
      },
      {
        to: "/my-dog/weight",
        label: "Gewicht",
        line: "Der Handcheck, und eine einfache Aufzeichnung",
      },
      {
        to: "/my-dog/care/wellbeing",
        label: "Aktivität",
        line: "Bewegung, Schnüffeln und genug Ruhe",
      },
      {
        to: "/train/library",
        label: "Verhalten",
        line: "Ziehen, Hochspringen, Bellen — eine Lektion nach der anderen",
      },
      {
        to: "/dog-life",
        label: "Hundeleben",
        line: "Orte zum Hingehen und Dinge zu tun in der Nähe",
      },
      {
        to: "/my-dog/print",
        label: "Dokumente",
        line: "Drucke den Plan, das Paket oder eine Notiz für die Hundesitterin",
      },
    ],
    today: "Heute",
    ofCount: "{done} von {total}",
    todayIntro:
      "Nichts hiervon muss perfekt sein. Hak ab, was du erledigt hast — morgen fängt es von vorn an.",
    addYourDog: "Füge deinen Hund hinzu",
    toSaveDaily: "um das von Tag zu Tag zu speichern.",
    whereThingsStand: "Wie es gerade steht",
    weight: "Gewicht",
    steadyOver: "Stabil über {days} Tage",
    changeOver: "{sign}{kg} kg über {days} Tage",
    addWeightToTrack: "Trage ein Gewicht ein, um den Verlauf zu verfolgen",
    foodADay: "Futter pro Tag",
    roughlyAcross: "Etwa, verteilt auf {meals} Mahlzeiten",
    addWeightAndFood: "Trage Gewicht und Futter ein",
    weightShape: "Gewicht & Kondition",
    foodPortions: "Futter & Portionen",
    vetNoteHome:
      "Alles hier ist allgemeine Orientierung, die dir hilft, deinen Hund im Alltag gut zu versorgen. Es ersetzt nicht deine Tierärztin oder deinen Tierarzt, die deinen Hund kennen. Wenn dich etwas beunruhigt, ruf sie an — sie hören lieber zu früh von dir als zu spät.",
    yourWeek: "Deine Woche",
    dogsWeek: "{name}s Woche",
    seeWholeWeek: "Die ganze Woche ansehen",
    weekIntro: "Die nächsten Tage, zusammengestellt aus Alter, Rasse und wie voll deine Tage sind.",
    comingRoundAgain: "Was wiederkehrt",
    calendarIntro: "Eine sanfte Erinnerung, nie ein Vorwurf. Hak etwas ab, sobald es erledigt ist.",
    printSave: "Drucken & aufbewahren",
    printSaveBody:
      "Eine Profilkarte für die Hundesitterin, ein Fütterungsplan für den Kühlschrank oder das ganze Hundepaket auf einmal.",
    printSaveCta: "Etwas zum Ausdrucken erstellen",
    contactsInfo: "Kontakte & Informationen",
    contactsInfoBody:
      "Die Nummer der Tierarztpraxis, der Chip, die Allergien — alles, wonach du in der Eile nicht suchen möchtest.",
    contactsInfoCta: "Angaben ausfüllen",
    vetVisits: "Tierarztbesuche",
    vetVisitsBody:
      "Schreib auf, was dir aufgefallen ist und was du fragen möchtest, und nimm es mit.",
    vetVisitsCta: "Einen Besuch vorbereiten",
    everydayCare: "Alltagspflege",
    biggestDifference: "Was den größten Unterschied macht",
    biggestDifferenceSub: "Kurz, klar und machbar. Wähle eins und fang dort an.",
    foodPortionsTitle: "Futter & Portionen",
    foodPortionsBody:
      "Wie viel du füttern solltest, wie oft, und wie du das Futter wechselst, ohne jemandem den Magen zu verderben.",
    foodPortionsMeta: "Berechnet eine Tagesmenge für deinen Hund",
    weightShapeTitle: "Gewicht & Kondition",
    weightShapeBody:
      "Lerne den Handcheck, den Tierärzte verwenden, und führe eine einfache Aufzeichnung über die Zeit.",
    weightShapeMeta: "Dauert etwa eine Minute im Monat",
    canEatTitle: "Darf mein Hund das essen?",
    canEatBody:
      "Eine ruhige, durchsuchbare Antwort für den Moment, in dem etwas auf dem Küchenboden landet.",
    canEatMeta: "Beliebiges Futter suchen",
    trainingCare: "Training und Pflege gehören zusammen",
    trainingCareBody:
      "Ein Hund, der gerne angefasst wird, lässt sich leichter bürsten, checken und zum Tierarzt bringen. Die Übungen zum Anfassen in Trainiere deinen Hund machen all das einfacher.",
    trainYourDog: "Trainiere deinen Hund",
    readGuides: "Ratgeber lesen",
    careGuidesCount:
      "{count} Pflegeratgeber · geschrieben, um in wenigen Minuten gelesen zu werden",
  },
  fr: {
    eyebrow: "Mon chien",
    heroTitleNoDog: "Prendre soin de son chien, comme il faut",
    heroLetsCare: "Prenons bien soin de {name}.",
    heroTextDog:
      "Alimentation, poids, dents, pelage, coussinets et les petites choses du quotidien. Tout au même endroit, sans stress.",
    heroTextNoDog:
      "Parlez-nous un peu de votre chien, et nous calculerons les portions, suivrons son poids et vous montrerons à quoi ressemble vraiment le soin au quotidien.",
    dogDetails: "Fiche de {name}",
    setupCta: "Créer la fiche de mon chien",
    canEatCta: "Mon chien peut-il manger ça ?",
    portraitAltDog: "{name}, {breed}",
    portraitAltFallbackBreed: "votre chien",
    portraitAltNoDog: "Une personne assise par terre, son chien appuyé contre elle",
    sectionsAria: "Sections de Mon chien",
    ageStages: { puppy: "Chiot", adolescent: "Adolescent", adult: "Adulte", senior: "Senior" },
    routineItems: [
      { id: "fresh-water", label: "Eau fraîche", hint: "Gamelle propre, remplie" },
      { id: "measured-meals", label: "Repas mesurés", hint: "Pesés, pas au jugé" },
      { id: "walk", label: "Une vraie promenade", hint: "Avec le temps de renifler" },
      { id: "play", label: "Un peu de jeu", hint: "Dix minutes, ça compte" },
      { id: "teeth", label: "Dents", hint: "Même trente secondes, ça aide" },
      {
        id: "brush",
        label: "Petit coup de brosse",
        hint: "Et un passage de la main pour repérer nœuds ou grosseurs",
      },
      { id: "paw-check", label: "Vérifier les coussinets", hint: "Après la promenade" },
      { id: "quiet-time", label: "Moment calme", hint: "Rien n'est demandé" },
    ],
    sections: [
      {
        to: "/my-dog/week",
        label: "Ma semaine",
        line: "Promenades, éducation, alimentation et soins, jour après jour",
      },
      {
        to: "/train",
        label: "Éducation",
        line: "La courte session du jour et ce sur quoi vous travaillez",
      },
      {
        to: "/my-dog/nutrition",
        label: "Alimentation",
        line: "Portions, repas et changement de nourriture en toute sécurité",
      },
      {
        to: "/my-dog/care/everyday-check",
        label: "Santé",
        line: "Le contrôle rapide qui détecte les problèmes tôt",
      },
      {
        to: "/my-dog/care/dental",
        label: "Dentaire",
        line: "Dents et gencives, en moins d'une minute par jour",
      },
      {
        to: "/my-dog/care/coat",
        label: "Pelage & soins",
        line: "Brossage, bain et connaître le type de pelage",
      },
      {
        to: "/my-dog/care/paws",
        label: "Coussinets & griffes",
        line: "Coussinets, griffes et ce que l'hiver leur fait",
      },
      { to: "/my-dog/weight", label: "Poids", line: "Le contrôle à la main, et un suivi simple" },
      {
        to: "/my-dog/care/wellbeing",
        label: "Activité",
        line: "Mouvement, reniflage et assez de repos",
      },
      {
        to: "/train/library",
        label: "Comportement",
        line: "Tirer en laisse, sauter, aboyer — une leçon à la fois",
      },
      {
        to: "/dog-life",
        label: "Vie de chien",
        line: "Des endroits où aller et des choses à faire dans le coin",
      },
      {
        to: "/my-dog/print",
        label: "Documents",
        line: "Imprimez le plan, le dossier ou un mot pour la personne qui le garde",
      },
    ],
    today: "Aujourd'hui",
    ofCount: "{done} sur {total}",
    todayIntro:
      "Rien de tout ça ne doit être parfait. Cochez ce que vous avez fait — ça se remet à zéro demain.",
    addYourDog: "Ajoutez votre chien",
    toSaveDaily: "pour garder cela d'un jour à l'autre.",
    whereThingsStand: "Où en sont les choses",
    weight: "Poids",
    steadyOver: "Stable sur {days} jours",
    changeOver: "{sign}{kg} kg sur {days} jours",
    addWeightToTrack: "Ajoutez un poids pour commencer le suivi",
    foodADay: "Nourriture par jour",
    roughlyAcross: "Environ, réparti sur {meals} repas",
    addWeightAndFood: "Ajoutez un poids et une nourriture",
    weightShape: "Poids & silhouette",
    foodPortions: "Alimentation & portions",
    vetNoteHome:
      "Tout ce qui est indiqué ici reste une aide générale pour prendre soin de votre chien au quotidien. Cela ne remplace pas votre vétérinaire, qui connaît votre chien. En cas d'inquiétude, appelez-le — il préférera toujours être prévenu trop tôt que trop tard.",
    yourWeek: "Votre semaine",
    dogsWeek: "La semaine de {name}",
    seeWholeWeek: "Voir toute la semaine",
    weekIntro:
      "Les prochains jours, établis selon l'âge, la race de votre chien et le rythme de vos journées.",
    comingRoundAgain: "Ce qui revient",
    calendarIntro:
      "Un petit rappel bienveillant, jamais un reproche. Cochez une fois que c'est fait.",
    printSave: "Imprimer & conserver",
    printSaveBody:
      "Une fiche pour la personne qui le garde, un plan de repas pour le frigo, ou tout le Dossier chien en une fois.",
    printSaveCta: "Créer un document à imprimer",
    contactsInfo: "Contacts & informations",
    contactsInfoBody:
      "Le numéro du vétérinaire, la puce, les allergies — tout ce que vous détesteriez chercher dans l'urgence.",
    contactsInfoCta: "Remplir les informations",
    vetVisits: "Visites chez le vétérinaire",
    vetVisitsBody:
      "Notez ce que vous avez remarqué et ce que vous voulez demander, puis emportez-le avec vous.",
    vetVisitsCta: "Préparer une visite",
    everydayCare: "Soins du quotidien",
    biggestDifference: "Ce qui fait la plus grande différence",
    biggestDifferenceSub: "Court, clair et réalisable. Choisissez-en un et commencez par là.",
    foodPortionsTitle: "Alimentation & portions",
    foodPortionsBody:
      "Combien nourrir, à quelle fréquence, et comment changer de nourriture sans déranger l'estomac de personne.",
    foodPortionsMeta: "Calcule une quantité quotidienne pour votre chien",
    weightShapeTitle: "Poids & silhouette",
    weightShapeBody:
      "Apprenez le contrôle manuel utilisé par les vétérinaires, et tenez un suivi simple dans le temps.",
    weightShapeMeta: "Prend environ une minute par mois",
    canEatTitle: "Mon chien peut-il manger ça ?",
    canEatBody:
      "Une réponse calme et consultable pour le moment où quelque chose tombe sur le sol de la cuisine.",
    canEatMeta: "Rechercher n'importe quel aliment",
    trainingCare: "Éducation et soins vont de pair",
    trainingCareBody:
      "Un chien à l'aise quand on le manipule est plus facile à brosser, examiner et emmener chez le vétérinaire. Les leçons de manipulation d'Éduquez votre chien facilitent tout cela.",
    trainYourDog: "Éduquez votre chien",
    readGuides: "Lire les guides",
    careGuidesCount: "{count} guides de soins · écrits pour se lire en quelques minutes",
  },
  nl: {
    eyebrow: "Mijn hond",
    heroTitleNoDog: "Goed voor je hond zorgen",
    heroLetsCare: "Laten we goed voor {name} zorgen.",
    heroTextDog:
      "Eten, gewicht, tanden, vacht, poten en de kleine dingen van elke dag. Alles op één rustige plek.",
    heroTextNoDog:
      "Vertel ons iets over je hond, dan berekenen we de portie, houden we het gewicht in de gaten en laten we zien hoe dagelijkse verzorging er in de praktijk uitziet.",
    dogDetails: "Gegevens van {name}",
    setupCta: "Mijn hond registreren",
    canEatCta: "Mag mijn hond dit eten?",
    portraitAltDog: "{name}, {breed}",
    portraitAltFallbackBreed: "je hond",
    portraitAltNoDog: "Iemand zit op de grond met de hond ertegenaan",
    sectionsAria: "Onderdelen van Mijn hond",
    ageStages: { puppy: "Pup", adolescent: "Puber", adult: "Volwassen", senior: "Senior" },
    routineItems: [
      { id: "fresh-water", label: "Vers water", hint: "Schone bak, bijgevuld" },
      { id: "measured-meals", label: "Afgemeten maaltijden", hint: "Gewogen, niet geschat" },
      { id: "walk", label: "Een echte wandeling", hint: "Met tijd om te snuffelen" },
      { id: "play", label: "Even spelen", hint: "Tien minuten telt al mee" },
      { id: "teeth", label: "Tanden", hint: "Zelfs dertig seconden helpt" },
      { id: "brush", label: "Snel borstelen", hint: "En voelen naar klitten of bultjes" },
      { id: "paw-check", label: "Pootjes checken", hint: "Na de wandeling" },
      { id: "quiet-time", label: "Rustig moment", hint: "Er wordt niets van ze gevraagd" },
    ],
    sections: [
      {
        to: "/my-dog/week",
        label: "Mijn week",
        line: "Wandelen, training, eten en verzorging, dag na dag",
      },
      {
        to: "/train",
        label: "Training",
        line: "De korte oefening van vandaag en waar je aan werkt",
      },
      {
        to: "/my-dog/nutrition",
        label: "Voeding",
        line: "Porties, maaltijden en veilig overstappen van voer",
      },
      {
        to: "/my-dog/care/everyday-check",
        label: "Gezondheid",
        line: "De snelle check die dingen vroeg opmerkt",
      },
      {
        to: "/my-dog/care/dental",
        label: "Gebit",
        line: "Tanden en tandvlees, in minder dan een minuut per dag",
      },
      {
        to: "/my-dog/care/coat",
        label: "Vacht & verzorging",
        line: "Borstelen, wassen en het vachttype kennen",
      },
      {
        to: "/my-dog/care/paws",
        label: "Poten & nagels",
        line: "Zooltjes, nagels en wat de winter ermee doet",
      },
      {
        to: "/my-dog/weight",
        label: "Gewicht",
        line: "De handmatige check, en een simpel overzicht",
      },
      {
        to: "/my-dog/care/wellbeing",
        label: "Activiteit",
        line: "Beweging, snuffelen en genoeg rust",
      },
      {
        to: "/train/library",
        label: "Gedrag",
        line: "Trekken, opspringen, blaffen — één les tegelijk",
      },
      {
        to: "/dog-life",
        label: "Hondenleven",
        line: "Plekken om heen te gaan en dingen te doen in de buurt",
      },
      {
        to: "/my-dog/print",
        label: "Documenten",
        line: "Print het plan, het pakket of een briefje voor de oppas",
      },
    ],
    today: "Vandaag",
    ofCount: "{done} van {total}",
    todayIntro:
      "Niets hiervan hoeft perfect te zijn. Vink af wat je hebt gedaan — morgen begint het weer opnieuw.",
    addYourDog: "Voeg je hond toe",
    toSaveDaily: "om dit dag na dag te bewaren.",
    whereThingsStand: "Hoe het ervoor staat",
    weight: "Gewicht",
    steadyOver: "Stabiel over {days} dagen",
    changeOver: "{sign}{kg} kg over {days} dagen",
    addWeightToTrack: "Voeg een gewicht toe om te beginnen bijhouden",
    foodADay: "Eten per dag",
    roughlyAcross: "Ongeveer, verdeeld over {meals} maaltijden",
    addWeightAndFood: "Voeg gewicht en voer toe",
    weightShape: "Gewicht & conditie",
    foodPortions: "Eten & porties",
    vetNoteHome:
      "Alles hier is algemene begeleiding om je te helpen je hond dagelijks goed te verzorgen. Het vervangt niet je dierenarts, die je hond kent. Maak je je zorgen, bel dan — ze horen liever te vroeg dan te laat van je.",
    yourWeek: "Jouw week",
    dogsWeek: "De week van {name}",
    seeWholeWeek: "Bekijk de hele week",
    weekIntro:
      "De komende dagen, samengesteld op basis van leeftijd, ras en hoe druk jouw dagen zijn.",
    comingRoundAgain: "Wat terugkomt",
    calendarIntro: "Een vriendelijk duwtje, nooit een verwijt. Vink iets af zodra het gedaan is.",
    printSave: "Printen & bewaren",
    printSaveBody:
      "Een profielkaart voor de oppas, een voerschema voor de koelkast, of het hele Hondenpakket in één keer.",
    printSaveCta: "Iets maken om te printen",
    contactsInfo: "Contacten & informatie",
    contactsInfoBody:
      "Het nummer van de dierenarts, de chip, de allergieën — alles wat je liever niet in paniek hoeft op te zoeken.",
    contactsInfoCta: "Gegevens invullen",
    vetVisits: "Dierenartsbezoeken",
    vetVisitsBody: "Schrijf op wat je hebt gemerkt en wat je wilt vragen, en neem het mee.",
    vetVisitsCta: "Bereid een bezoek voor",
    everydayCare: "Dagelijkse verzorging",
    biggestDifference: "Wat het meeste verschil maakt",
    biggestDifferenceSub: "Kort, duidelijk en haalbaar. Kies er één en begin daar.",
    foodPortionsTitle: "Eten & porties",
    foodPortionsBody:
      "Hoeveel je moet voeren, hoe vaak, en hoe je van voer wisselt zonder iemands maag van streek te maken.",
    foodPortionsMeta: "Berekent een dagelijkse hoeveelheid voor je hond",
    weightShapeTitle: "Gewicht & conditie",
    weightShapeBody:
      "Leer de handmatige check die dierenartsen gebruiken en houd een simpel overzicht bij in de tijd.",
    weightShapeMeta: "Kost ongeveer een minuut per maand",
    canEatTitle: "Mag mijn hond dit eten?",
    canEatBody:
      "Een rustig, doorzoekbaar antwoord voor het moment dat er iets op de keukenvloer valt.",
    canEatMeta: "Zoek elk soort voedsel op",
    trainingCare: "Training en verzorging horen bij elkaar",
    trainingCareBody:
      "Een hond die het prettig vindt om aangeraakt te worden, is makkelijker te borstelen, te controleren en mee te nemen naar de dierenarts. De hanteringslessen in Train je hond maken dit allemaal makkelijker.",
    trainYourDog: "Train je hond",
    readGuides: "Lees de gidsen",
    careGuidesCount: "{count} verzorgingsgidsen · geschreven om in een paar minuten te lezen",
  },
} as const;

function fmt(s: string, values: Record<string, string | number>) {
  return s.replace(/\{(\w+)\}/g, (_, k: string) => (k in values ? String(values[k]) : `{${k}}`));
}

function MyDogHome() {
  const c = useCopy(copy);
  const dog = useMyDog();
  const profile = useCareProfile(dog?.id);
  const weights = useWeights(dog?.id);
  const done = useTodayRoutine(dog?.id);
  const progress = useProgress(dog?.id);
  const override = useWeekOverride(dog?.id);
  const week = buildWeek(dog, profile, progress, override);
  const todayIndex = (new Date().getDay() + 6) % 7;
  const portions = estimatePortions(profile.weightKg, dog?.ageStage ?? "adult", profile);
  const trend = weightTrend(weights);
  const traitProfile = resolveDogTraits(dog);
  const breedLine = dogBreedLabel(dog);
  const portraitBreed = traitProfile.breedIds[0];
  const portrait = portraitBreed ? breedImages[portraitBreed] : careImages.careHero;
  const ageLabel = dog?.ageStage ? c.ageStages[dog.ageStage] : c.ageStages.adult;

  return (
    <div className="pb-24">
      {/* ------------------------------------------------------------ hero */}
      <section className="relative">
        <div className="container-page pt-28 md:pt-36">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
            <div className="animate-rise">
              <Eyebrow>{c.eyebrow}</Eyebrow>
              {dog ? (
                <>
                  <p className="mt-6 text-sm uppercase tracking-[0.18em] text-accent">
                    {breedLine ? `${breedLine} · ` : ""}
                    {ageLabel}
                    {profile.weightKg ? ` · ${profile.weightKg} kg` : ""}
                  </p>
                  <h1 className="display-xl mt-3">{dog.name}</h1>
                  <p className="mt-4 text-2xl leading-snug">
                    {fmt(c.heroLetsCare, { name: dog.name })}
                  </p>
                </>
              ) : (
                <h1 className="display-xl mt-6">{c.heroTitleNoDog}</h1>
              )}
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {dog ? c.heroTextDog : c.heroTextNoDog}
              </p>
              {dog && traitProfile.isMixed && (
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {traitBasisNote(traitProfile)}
                </p>
              )}
              {dog && crossHeading(traitProfile) && (
                <div className="mt-4 max-w-lg rounded-xl border border-border bg-card p-4">
                  <p className="text-sm font-medium">{crossHeading(traitProfile)}</p>
                  <ul className="mt-2 space-y-1">
                    {crossContributionLines(traitProfile).map((line) => (
                      <li key={line} className="text-sm leading-relaxed text-muted-foreground">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink to={withLangPrefix("/my-dog/setup")} size="lg">
                  {dog ? fmt(c.dogDetails, { name: dog.name }) : c.setupCta}
                  <Arrow />
                </ButtonLink>
                <ButtonLink to={withLangPrefix("/my-dog/food")} tone="outline" size="lg">
                  {c.canEatCta}
                </ButtonLink>
              </div>
              <div className="mt-6">
                <DogSwitcher {...(dog ? { active: dog } : {})} />
              </div>
            </div>
            <div className="animate-rise overflow-hidden rounded-[2rem] border border-border">
              <img
                src={portrait}
                alt={
                  dog
                    ? fmt(c.portraitAltDog, {
                        name: dog.name,
                        breed: breedLine || c.portraitAltFallbackBreed,
                      })
                    : c.portraitAltNoDog
                }
                width={1400}
                height={1000}
                className="aspect-[7/5] w-full object-cover"
              />
            </div>
          </div>

          {/* ------------------------------------------------- section map */}
          <nav aria-label={c.sectionsAria} className="mt-14">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {c.sections.map((s) => (
                <Link
                  key={s.to}
                  to={s.to as never}
                  className="group rounded-[1.2rem] border border-border bg-surface p-5 transition-colors hover:border-border-strong"
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-[1.05rem] font-medium">{s.label}</span>
                    <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      <Arrow />
                    </span>
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                    {s.line}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* --------------------------------------------------------- today */}
      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Panel
            title={c.today}
            action={
              <span className="text-sm tabular-nums text-muted-foreground">
                {fmt(c.ofCount, { done: done.length, total: c.routineItems.length })}
              </span>
            }
          >
            <p className="-mt-2 mb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.todayIntro}
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {c.routineItems.map((item) => (
                <RoutineRow
                  key={item.id}
                  label={item.label}
                  hint={item.hint}
                  done={done.includes(item.id as RoutineId)}
                  onToggle={() =>
                    dog && careStore.toggleRoutine(dog.id, item.id as RoutineId, todayKey())
                  }
                />
              ))}
            </div>
            {!dog && (
              <p className="mt-5 text-sm text-muted-foreground">
                <Link
                  to={withLangPrefix("/my-dog/setup")}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {c.addYourDog}
                </Link>{" "}
                {c.toSaveDaily}
              </p>
            )}
          </Panel>

          <div className="grid content-start gap-6">
            <Panel title={c.whereThingsStand}>
              <div className="grid gap-3 sm:grid-cols-2">
                <Stat
                  label={c.weight}
                  value={profile.weightKg ? `${profile.weightKg} kg` : "—"}
                  {...(trend
                    ? {
                        hint:
                          trend.direction === "steady"
                            ? fmt(c.steadyOver, { days: trend.days })
                            : fmt(c.changeOver, {
                                sign: trend.changeKg > 0 ? "+" : "",
                                kg: trend.changeKg,
                                days: trend.days,
                              }),
                      }
                    : { hint: c.addWeightToTrack })}
                />
                <Stat
                  label={c.foodADay}
                  value={
                    portions?.gramsPerDay
                      ? `${portions.gramsPerDay} g`
                      : portions
                        ? `${portions.dailyKcal} kcal`
                        : "—"
                  }
                  hint={
                    portions
                      ? fmt(c.roughlyAcross, { meals: portions.mealsPerDay })
                      : c.addWeightAndFood
                  }
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <ButtonLink to={withLangPrefix("/my-dog/weight")} tone="outline" size="md">
                  {c.weightShape}
                </ButtonLink>
                <ButtonLink to={withLangPrefix("/my-dog/nutrition")} tone="outline" size="md">
                  {c.foodPortions}
                </ButtonLink>
              </div>
            </Panel>

            <VetNote>{c.vetNoteHome}</VetNote>
          </div>
        </div>
      </Section>

      {/* ----------------------------------------------------------- week */}
      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Panel
            title={dog ? fmt(c.dogsWeek, { name: dog.name }) : c.yourWeek}
            action={
              <Link
                to={withLangPrefix("/my-dog/week")}
                className="text-sm text-accent underline-offset-4 hover:underline"
              >
                {c.seeWholeWeek}
              </Link>
            }
          >
            <p className="-mt-2 mb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.weekIntro}
            </p>
            <WeekStrip week={week} todayIndex={todayIndex} />
          </Panel>

          <Panel title={c.comingRoundAgain}>
            <p className="-mt-2 mb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.calendarIntro}
            </p>
            <CareCalendar {...(dog ? { dog } : {})} />
          </Panel>
        </div>
      </Section>

      {/* ------------------------------------------------------ paper & people */}
      <Section className="container-page">
        <div className="grid gap-6 md:grid-cols-3">
          <Panel title={c.printSave}>
            <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.printSaveBody}
            </p>
            <ButtonLink
              to={withLangPrefix("/my-dog/print")}
              tone="outline"
              size="md"
              className="mt-5"
            >
              {c.printSaveCta}
            </ButtonLink>
          </Panel>
          <Panel title={c.contactsInfo}>
            <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.contactsInfoBody}
            </p>
            <ButtonLink
              to={withLangPrefix("/my-dog/contacts")}
              tone="outline"
              size="md"
              className="mt-5"
            >
              {c.contactsInfoCta}
            </ButtonLink>
          </Panel>
          <Panel title={c.vetVisits}>
            <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {c.vetVisitsBody}
            </p>
            <ButtonLink
              to={withLangPrefix("/my-dog/vet")}
              tone="outline"
              size="md"
              className="mt-5"
            >
              {c.vetVisitsCta}
            </ButtonLink>
          </Panel>
        </div>
      </Section>

      {/* -------------------------------------------------------- the areas */}
      <Section className="container-page">
        <Eyebrow>{c.everydayCare}</Eyebrow>
        <h2 className="display-lg mt-5 max-w-2xl">{c.biggestDifference}</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {c.biggestDifferenceSub}
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CareTile
            to={withLangPrefix("/my-dog/nutrition")}
            image={categoryImages.nutrition}
            title={c.foodPortionsTitle}
            body={c.foodPortionsBody}
            meta={c.foodPortionsMeta}
          />
          <CareTile
            to={withLangPrefix("/my-dog/weight")}
            image={categoryImages.weight}
            title={c.weightShapeTitle}
            body={c.weightShapeBody}
            meta={c.weightShapeMeta}
          />
          <CareTile
            to={withLangPrefix("/my-dog/food")}
            image={categoryImages.nutrition}
            title={c.canEatTitle}
            body={c.canEatBody}
            meta={c.canEatMeta}
          />
          {[
            "dental",
            "coat",
            "paws",
            "ears",
            "eyes",
            "wellbeing",
            "everyday-check",
            "something-different",
            "emergency",
          ]
            .map((id) => getCareTopic(id))
            .filter((t): t is NonNullable<typeof t> => Boolean(t))
            .map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
        </div>
      </Section>

      {/* --------------------------------------------------------- closing */}
      <Section className="container-page">
        <div className="rounded-[2rem] border border-border bg-surface p-10 md:p-14">
          <h2 className="display-md max-w-2xl">{c.trainingCare}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {c.trainingCareBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to={withLangPrefix("/train")} size="lg">
              {c.trainYourDog}
              <Arrow />
            </ButtonLink>
            <ButtonLink to={withLangPrefix("/guides")} tone="outline" size="lg">
              {c.readGuides}
            </ButtonLink>
          </div>
        </div>
      </Section>

      <p className="container-page mt-4 text-sm text-muted-foreground">
        {fmt(c.careGuidesCount, { count: careTopics.length })}
      </p>
    </div>
  );
}
