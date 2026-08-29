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

export const navGroupsByLocale = { en, no, pl };

/** The navigation in the reader's language. */
export function useNavGroups(): NavGroup[] {
  return useCopy(navGroupsByLocale);
}

/** English fallback, for anything outside a React render. */
export const navGroups = en;
