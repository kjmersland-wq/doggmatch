import { useCopy } from "@/i18n";

/** One place that describes the whole site, used by the header on every screen size. */
export type NavItem = { to: string; label: string; hint: string };
export type NavGroup = { id: string; label: string; blurb: string; items: NavItem[] };

const en: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Get a dog",
    blurb: "Thinking about it? Start here and take your time.",
    items: [
      { to: "/get-a-dog", label: "The whole journey", hint: "From first thought to first night" },
      { to: "/get-a-dog/ready", label: "Am I ready?", hint: "An honest look at your everyday life" },
      { to: "/find-my-dog", label: "Find my dog", hint: "Two minutes, no account needed" },
      { to: "/get-a-dog/choose", label: "Choosing well", hint: "Puppy or adult, breeder or rescue" },
      { to: "/get-a-dog/costs", label: "What it costs", hint: "Before, monthly and the surprises" },
      { to: "/get-a-dog/prepare", label: "Getting ready", hint: "Your home, your days, your list" },
      { to: "/get-a-dog/welcome-home", label: "Welcome home", hint: "The first day and the first week" },
    ],
  },
  {
    id: "breeds",
    label: "Breeds",
    blurb: "Every breed described honestly — the lovely bits and the hard bits.",
    items: [
      { to: "/breeds", label: "All breeds", hint: "Browse and filter" },
      { to: "/compare", label: "Compare two", hint: "Side by side, no spin" },
      { to: "/dog-life", label: "Dog life near you", hint: "Walks, weather and everyday places" },
      { to: "/guides", label: "Guides", hint: "Calm reading on living with a dog" },
    ],
  },
  {
    id: "my-dog",
    label: "My Dog",
    blurb: "The home for your own dog's everyday life.",
    items: [
      { to: "/my-dog", label: "Today", hint: "What's worth doing today" },
      { to: "/my-dog/week", label: "My week", hint: "A gentle weekly rhythm" },
      { to: "/my-dog/nutrition", label: "Food & portions", hint: "How much, roughly" },
      { to: "/my-dog/food", label: "Can my dog eat this?", hint: "Safe, careful, avoid" },
      { to: "/my-dog/weight", label: "Weight & body", hint: "Track it kindly" },
      { to: "/my-dog/vet", label: "Vet & contacts", hint: "Visits and phone numbers" },
      { to: "/my-dog/print", label: "Print & save", hint: "Paper you can stick on the fridge" },
    ],
  },
  {
    id: "train",
    label: "Train",
    blurb: "Short, kind sessions you can actually do yourself.",
    items: [
      { to: "/train", label: "Today's session", hint: "Five minutes is plenty" },
      { to: "/train/library", label: "Lesson library", hint: "Step by step, with pictures" },
      { to: "/train/journey", label: "Your journey", hint: "How far you've come" },
      { to: "/train/setup", label: "Your dog's details", hint: "Age, breed, what you're working on" },
    ],
  },
  {
    id: "travel",
    label: "Travel",
    blurb: "Car trips, hikes and crossing borders — safely.",
    items: [
      { to: "/travel", label: "Travel & adventures", hint: "Where you're heading" },
      { to: "/travel/car", label: "In the car", hint: "Safe setups and car sickness" },
      { to: "/travel/outdoors", label: "Outdoors", hint: "Hikes, paws, heat and cold" },
      { to: "/travel/abroad", label: "Travelling abroad", hint: "Country to country checker" },
    ],
  },
];

const no: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Skaffe hund",
    blurb: "Går du og tenker på det? Begynn her, og ta deg god tid.",
    items: [
      { to: "/get-a-dog", label: "Hele reisen", hint: "Fra første tanke til første natt" },
      { to: "/get-a-dog/ready", label: "Er jeg klar?", hint: "Et ærlig blikk på hverdagen din" },
      { to: "/find-my-dog", label: "Finn min hund", hint: "To minutter, ingen konto" },
      { to: "/get-a-dog/choose", label: "Velge riktig", hint: "Valp eller voksen, oppdretter eller omplassering" },
      { to: "/get-a-dog/costs", label: "Hva det koster", hint: "Før, månedlig og overraskelsene" },
      { to: "/get-a-dog/prepare", label: "Bli klar", hint: "Hjemmet, dagene og lista di" },
      { to: "/get-a-dog/welcome-home", label: "Velkommen hjem", hint: "Den første dagen og den første uka" },
    ],
  },
  {
    id: "breeds",
    label: "Raser",
    blurb: "Alle raser beskrevet ærlig — både det fine og det krevende.",
    items: [
      { to: "/breeds", label: "Alle raser", hint: "Bla og filtrer" },
      { to: "/compare", label: "Sammenlign to", hint: "Side om side, uten pynt" },
      { to: "/dog-life", label: "Hundeliv der du bor", hint: "Turer, vær og hverdagssteder" },
      { to: "/guides", label: "Guider", hint: "Rolig lesing om livet med hund" },
    ],
  },
  {
    id: "my-dog",
    label: "Min hund",
    blurb: "Hjemmet for din egen hunds hverdag.",
    items: [
      { to: "/my-dog", label: "I dag", hint: "Hva som er verdt å gjøre i dag" },
      { to: "/my-dog/week", label: "Uka mi", hint: "En rolig ukerytme" },
      { to: "/my-dog/nutrition", label: "Fôr og porsjoner", hint: "Hvor mye, omtrent" },
      { to: "/my-dog/food", label: "Kan hunden spise dette?", hint: "Trygt, forsiktig, unngå" },
      { to: "/my-dog/weight", label: "Vekt og hold", hint: "Følg med, uten mas" },
      { to: "/my-dog/vet", label: "Veterinær og kontakter", hint: "Besøk og telefonnumre" },
      { to: "/my-dog/print", label: "Skriv ut og lagre", hint: "Papir du kan henge på kjøleskapet" },
    ],
  },
  {
    id: "train",
    label: "Trening",
    blurb: "Korte, vennlige økter du faktisk klarer selv.",
    items: [
      { to: "/train", label: "Dagens økt", hint: "Fem minutter holder" },
      { to: "/train/library", label: "Leksjonsbibliotek", hint: "Steg for steg, med bilder" },
      { to: "/train/journey", label: "Reisen deres", hint: "Hvor langt dere har kommet" },
      { to: "/train/setup", label: "Om hunden din", hint: "Alder, rase og hva dere øver på" },
    ],
  },
  {
    id: "travel",
    label: "Reise",
    blurb: "Bilturer, fjellturer og grensepasseringer — trygt.",
    items: [
      { to: "/travel", label: "Reise og opplevelser", hint: "Hvor dere skal" },
      { to: "/travel/car", label: "I bilen", hint: "Trygg sikring og bilsyke" },
      { to: "/travel/outdoors", label: "Ute i naturen", hint: "Turer, poter, varme og kulde" },
      { to: "/travel/abroad", label: "Reise til utlandet", hint: "Sjekk land for land" },
    ],
  },
];

const pl: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Zdobądź psa",
    blurb: "Zastanawiasz się nad tym? Zacznij tutaj i nie spiesz się.",
    items: [
      { to: "/get-a-dog", label: "Cała droga", hint: "Od pierwszej myśli do pierwszej nocy" },
      { to: "/get-a-dog/ready", label: "Czy jestem gotowy?", hint: "Szczere spojrzenie na twoją codzienność" },
      { to: "/find-my-dog", label: "Znajdź mojego psa", hint: "Dwie minuty, bez zakładania konta" },
      { to: "/get-a-dog/choose", label: "Dobry wybór", hint: "Szczeniak czy dorosły, hodowla czy schronisko" },
      { to: "/get-a-dog/costs", label: "Ile to kosztuje", hint: "Przed, co miesiąc i te niespodzianki" },
      { to: "/get-a-dog/prepare", label: "Przygotowania", hint: "Twój dom, twoje dni, twoja lista" },
      { to: "/get-a-dog/welcome-home", label: "Witaj w domu", hint: "Pierwszy dzień i pierwszy tydzień" },
    ],
  },
  {
    id: "breeds",
    label: "Rasy",
    blurb: "Każda rasa opisana szczerze — to, co piękne, i to, co trudne.",
    items: [
      { to: "/breeds", label: "Wszystkie rasy", hint: "Przeglądaj i filtruj" },
      { to: "/compare", label: "Porównaj dwie", hint: "Obok siebie, bez upiększeń" },
      { to: "/dog-life", label: "Życie z psem w twojej okolicy", hint: "Spacery, pogoda i codzienne miejsca" },
      { to: "/guides", label: "Poradniki", hint: "Spokojna lektura o życiu z psem" },
    ],
  },
  {
    id: "my-dog",
    label: "Mój pies",
    blurb: "Miejsce dla codzienności twojego psa.",
    items: [
      { to: "/my-dog", label: "Dziś", hint: "Co warto dziś zrobić" },
      { to: "/my-dog/week", label: "Mój tydzień", hint: "Spokojny rytm tygodnia" },
      { to: "/my-dog/nutrition", label: "Jedzenie i porcje", hint: "Ile mniej więcej" },
      { to: "/my-dog/food", label: "Czy mój pies może to zjeść?", hint: "Bezpieczne, ostrożnie, unikać" },
      { to: "/my-dog/weight", label: "Waga i kondycja", hint: "Śledź to z troską" },
      { to: "/my-dog/vet", label: "Weterynarz i kontakty", hint: "Wizyty i numery telefonów" },
      { to: "/my-dog/print", label: "Drukuj i zapisuj", hint: "Kartka, którą powiesisz na lodówce" },
    ],
  },
  {
    id: "train",
    label: "Trening",
    blurb: "Krótkie, łagodne sesje, które naprawdę da się zrobić samemu.",
    items: [
      { to: "/train", label: "Dzisiejsza sesja", hint: "Pięć minut w zupełności wystarczy" },
      { to: "/train/library", label: "Biblioteka lekcji", hint: "Krok po kroku, ze zdjęciami" },
      { to: "/train/journey", label: "Wasza droga", hint: "Jak daleko już zaszliście" },
      { to: "/train/setup", label: "Dane twojego psa", hint: "Wiek, rasa i nad czym pracujecie" },
    ],
  },
  {
    id: "travel",
    label: "Podróże",
    blurb: "Podróże samochodem, wędrówki i przekraczanie granic — bezpiecznie.",
    items: [
      { to: "/travel", label: "Podróże i przygody", hint: "Dokąd się wybieracie" },
      { to: "/travel/car", label: "W samochodzie", hint: "Bezpieczny montaż i choroba lokomocyjna" },
      { to: "/travel/outdoors", label: "Na dworze", hint: "Wędrówki, łapy, upał i zimno" },
      { to: "/travel/abroad", label: "Podróże za granicę", hint: "Sprawdzarka kraj po kraju" },
    ],
  },
];

const de: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Einen Hund bekommen",
    blurb: "Denken Sie darüber nach? Fangen Sie hier an und lassen Sie sich Zeit.",
    items: [
      { to: "/get-a-dog", label: "Der ganze Weg", hint: "Vom ersten Gedanken bis zur ersten Nacht" },
      { to: "/get-a-dog/ready", label: "Bin ich bereit?", hint: "Ein ehrlicher Blick auf Ihren Alltag" },
      { to: "/find-my-dog", label: "Finde meinen Hund", hint: "Zwei Minuten, kein Konto nötig" },
      { to: "/get-a-dog/choose", label: "Gut auswählen", hint: "Welpe oder erwachsen, Züchter oder Tierheim" },
      { to: "/get-a-dog/costs", label: "Was es kostet", hint: "Vorab, monatlich und die Überraschungen" },
      { to: "/get-a-dog/prepare", label: "Sich vorbereiten", hint: "Ihr Zuhause, Ihre Tage, Ihre Liste" },
      { to: "/get-a-dog/welcome-home", label: "Willkommen daheim", hint: "Der erste Tag und die erste Woche" },
    ],
  },
  {
    id: "breeds",
    label: "Rassen",
    blurb: "Jede Rasse ehrlich beschrieben — die schönen Seiten und die schwierigen.",
    items: [
      { to: "/breeds", label: "Alle Rassen", hint: "Durchsuchen und filtern" },
      { to: "/compare", label: "Zwei vergleichen", hint: "Nebeneinander, ohne Schönfärberei" },
      { to: "/dog-life", label: "Hundeleben in Ihrer Nähe", hint: "Spaziergänge, Wetter und Alltagsorte" },
      { to: "/guides", label: "Ratgeber", hint: "Entspannte Lektüre zum Leben mit Hund" },
    ],
  },
  {
    id: "my-dog",
    label: "Mein Hund",
    blurb: "Die Zentrale für den Alltag Ihres eigenen Hundes.",
    items: [
      { to: "/my-dog", label: "Heute", hint: "Was sich heute lohnt zu tun" },
      { to: "/my-dog/week", label: "Meine Woche", hint: "Ein ruhiger Wochenrhythmus" },
      { to: "/my-dog/nutrition", label: "Futter & Portionen", hint: "Wie viel, etwa" },
      { to: "/my-dog/food", label: "Darf mein Hund das essen?", hint: "Unbedenklich, mit Vorsicht, meiden" },
      { to: "/my-dog/weight", label: "Gewicht & Kondition", hint: "Achtsam im Blick behalten" },
      { to: "/my-dog/vet", label: "Tierarzt & Kontakte", hint: "Termine und Telefonnummern" },
      { to: "/my-dog/print", label: "Drucken & speichern", hint: "Papier für den Kühlschrank" },
    ],
  },
  {
    id: "train",
    label: "Training",
    blurb: "Kurze, freundliche Einheiten, die Sie wirklich selbst schaffen.",
    items: [
      { to: "/train", label: "Heutige Einheit", hint: "Fünf Minuten reichen völlig" },
      { to: "/train/library", label: "Lektionsbibliothek", hint: "Schritt für Schritt, mit Bildern" },
      { to: "/train/journey", label: "Ihr Weg", hint: "Wie weit Sie schon gekommen sind" },
      { to: "/train/setup", label: "Angaben zu Ihrem Hund", hint: "Alter, Rasse, woran Sie arbeiten" },
    ],
  },
  {
    id: "travel",
    label: "Reisen",
    blurb: "Autofahrten, Wanderungen und Grenzübertritte — sicher.",
    items: [
      { to: "/travel", label: "Reisen & Abenteuer", hint: "Wohin es geht" },
      { to: "/travel/car", label: "Im Auto", hint: "Sichere Ausstattung und Reisekrankheit" },
      { to: "/travel/outdoors", label: "Draußen unterwegs", hint: "Wanderungen, Pfoten, Hitze und Kälte" },
      { to: "/travel/abroad", label: "Ins Ausland reisen", hint: "Land für Land geprüft" },
    ],
  },
];

const fr: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Adopter un chien",
    blurb: "Vous y pensez ? Commencez ici et prenez votre temps.",
    items: [
      { to: "/get-a-dog", label: "Tout le parcours", hint: "De la première idée à la première nuit" },
      { to: "/get-a-dog/ready", label: "Suis-je prêt ?", hint: "Un regard honnête sur votre quotidien" },
      { to: "/find-my-dog", label: "Trouver mon chien", hint: "Deux minutes, sans compte" },
      { to: "/get-a-dog/choose", label: "Bien choisir", hint: "Chiot ou adulte, éleveur ou refuge" },
      { to: "/get-a-dog/costs", label: "Ce que ça coûte", hint: "Avant, chaque mois et les surprises" },
      { to: "/get-a-dog/prepare", label: "Se préparer", hint: "Votre logement, vos journées, votre liste" },
      { to: "/get-a-dog/welcome-home", label: "Bienvenue à la maison", hint: "Le premier jour et la première semaine" },
    ],
  },
  {
    id: "breeds",
    label: "Races",
    blurb: "Chaque race décrite honnêtement — les beaux côtés et les plus exigeants.",
    items: [
      { to: "/breeds", label: "Toutes les races", hint: "Parcourir et filtrer" },
      { to: "/compare", label: "Comparer deux races", hint: "Côte à côte, sans enjolivure" },
      { to: "/dog-life", label: "La vie de chien près de chez vous", hint: "Balades, météo et lieux du quotidien" },
      { to: "/guides", label: "Guides", hint: "Une lecture apaisante sur la vie avec un chien" },
    ],
  },
  {
    id: "my-dog",
    label: "Mon chien",
    blurb: "L'espace dédié au quotidien de votre propre chien.",
    items: [
      { to: "/my-dog", label: "Aujourd'hui", hint: "Ce qui vaut la peine d'être fait aujourd'hui" },
      { to: "/my-dog/week", label: "Ma semaine", hint: "Un rythme hebdomadaire tout en douceur" },
      { to: "/my-dog/nutrition", label: "Alimentation & portions", hint: "Combien, environ" },
      { to: "/my-dog/food", label: "Mon chien peut-il manger ça ?", hint: "Sûr, avec prudence, à éviter" },
      { to: "/my-dog/weight", label: "Poids & silhouette", hint: "Un suivi bienveillant" },
      { to: "/my-dog/vet", label: "Vétérinaire & contacts", hint: "Rendez-vous et numéros de téléphone" },
      { to: "/my-dog/print", label: "Imprimer & enregistrer", hint: "Une feuille à afficher sur le frigo" },
    ],
  },
  {
    id: "train",
    label: "Éducation",
    blurb: "De courtes séances bienveillantes que vous pouvez vraiment mener vous-même.",
    items: [
      { to: "/train", label: "La séance du jour", hint: "Cinq minutes suffisent amplement" },
      { to: "/train/library", label: "Bibliothèque de leçons", hint: "Étape par étape, avec des images" },
      { to: "/train/journey", label: "Votre parcours", hint: "Le chemin déjà parcouru" },
      { to: "/train/setup", label: "Les informations de votre chien", hint: "Âge, race, ce sur quoi vous travaillez" },
    ],
  },
  {
    id: "travel",
    label: "Voyages",
    blurb: "Trajets en voiture, randonnées et passages de frontières — en toute sécurité.",
    items: [
      { to: "/travel", label: "Voyages & aventures", hint: "Là où vous allez" },
      { to: "/travel/car", label: "En voiture", hint: "Installations sûres et mal des transports" },
      { to: "/travel/outdoors", label: "En plein air", hint: "Randonnées, coussinets, chaleur et froid" },
      { to: "/travel/abroad", label: "Voyager à l'étranger", hint: "Vérificateur pays par pays" },
    ],
  },
];

const nl: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Een hond nemen",
    blurb: "Overweegt u het? Begin hier en neem de tijd.",
    items: [
      { to: "/get-a-dog", label: "De hele reis", hint: "Van de eerste gedachte tot de eerste nacht" },
      { to: "/get-a-dog/ready", label: "Ben ik er klaar voor?", hint: "Een eerlijke kijk op uw dagelijks leven" },
      { to: "/find-my-dog", label: "Vind mijn hond", hint: "Twee minuten, geen account nodig" },
      { to: "/get-a-dog/choose", label: "Goed kiezen", hint: "Pup of volwassen, fokker of asiel" },
      { to: "/get-a-dog/costs", label: "Wat het kost", hint: "Vooraf, maandelijks en de verrassingen" },
      { to: "/get-a-dog/prepare", label: "Klaarmaken", hint: "Uw huis, uw dagen, uw lijstje" },
      { to: "/get-a-dog/welcome-home", label: "Welkom thuis", hint: "De eerste dag en de eerste week" },
    ],
  },
  {
    id: "breeds",
    label: "Rassen",
    blurb: "Elk ras eerlijk beschreven — de mooie kanten en de lastige kanten.",
    items: [
      { to: "/breeds", label: "Alle rassen", hint: "Bladeren en filteren" },
      { to: "/compare", label: "Vergelijk twee", hint: "Naast elkaar, zonder opsmuk" },
      { to: "/dog-life", label: "Hondenleven bij u in de buurt", hint: "Wandelingen, weer en alledaagse plekken" },
      { to: "/guides", label: "Gidsen", hint: "Rustige leesstof over het leven met een hond" },
    ],
  },
  {
    id: "my-dog",
    label: "Mijn hond",
    blurb: "De plek voor het dagelijks leven van uw eigen hond.",
    items: [
      { to: "/my-dog", label: "Vandaag", hint: "Wat het waard is om vandaag te doen" },
      { to: "/my-dog/week", label: "Mijn week", hint: "Een rustig weekritme" },
      { to: "/my-dog/nutrition", label: "Voeding & porties", hint: "Hoeveel, ongeveer" },
      { to: "/my-dog/food", label: "Mag mijn hond dit eten?", hint: "Veilig, voorzichtig, vermijden" },
      { to: "/my-dog/weight", label: "Gewicht & conditie", hint: "Volg het met zorg" },
      { to: "/my-dog/vet", label: "Dierenarts & contacten", hint: "Afspraken en telefoonnummers" },
      { to: "/my-dog/print", label: "Afdrukken & bewaren", hint: "Papier voor op de koelkast" },
    ],
  },
  {
    id: "train",
    label: "Training",
    blurb: "Korte, vriendelijke sessies die u echt zelf kunt doen.",
    items: [
      { to: "/train", label: "De sessie van vandaag", hint: "Vijf minuten is ruim voldoende" },
      { to: "/train/library", label: "Lessenbibliotheek", hint: "Stap voor stap, met afbeeldingen" },
      { to: "/train/journey", label: "Uw traject", hint: "Hoever u al gekomen bent" },
      { to: "/train/setup", label: "Gegevens van uw hond", hint: "Leeftijd, ras, waar u aan werkt" },
    ],
  },
  {
    id: "travel",
    label: "Reizen",
    blurb: "Autoritjes, wandelingen en grensovergangen — veilig.",
    items: [
      { to: "/travel", label: "Reizen & avontuur", hint: "Waar u naartoe gaat" },
      { to: "/travel/car", label: "In de auto", hint: "Veilige bevestiging en reisziekte" },
      { to: "/travel/outdoors", label: "Naar buiten", hint: "Wandelingen, pootjes, hitte en kou" },
      { to: "/travel/abroad", label: "Naar het buitenland reizen", hint: "Land-voor-land-checker" },
    ],
  },
];

export const navGroupsByLocale = { en, no, pl, de, fr, nl };

/** The navigation in the reader's language. */
export function useNavGroups(): NavGroup[] {
  return useCopy(navGroupsByLocale);
}

/** English fallback, for anything outside a React render. */
export const navGroups = en;
