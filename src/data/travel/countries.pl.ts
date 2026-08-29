import type { Country } from "./countries";

const euBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Mikroczip",
    detail:
      "Pies musi być oznakowany mikroczipem zgodnym z normą ISO, wszczepionym przed szczepieniem przeciwko wściekliźnie. Czip wszczepiony później oznacza, że szczepienie trzeba powtórzyć.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Ważne szczepienie przeciwko wściekliźnie",
    detail:
      "Podane po wszczepieniu mikroczipa, przez uprawnionego lekarza weterynarii, i wciąż ważne w dniu podróży. Pierwsze szczepienie ma okres oczekiwania przed dopuszczeniem do podróży; dawki przypominające podane przed wygaśnięciem poprzedniej zwykle liczą się jako ciągłość.",
  },
  {
    id: "passport",
    level: "required" as const,
    title: "Paszport UE dla zwierząt",
    detail:
      "Wystawiony przez uprawnionego lekarza weterynarii w kraju UE lub EOG. Zwykła książeczka szczepień to nie ten sam dokument i nie jest akceptowana w jego miejsce.",
  },
  {
    id: "owner",
    level: "required" as const,
    title: "Podróż razem z właścicielem",
    detail:
      "Przemieszczanie niehandlowe obejmuje do pięciu zwierząt podróżujących z właścicielem lub osobą upoważnioną. Większa liczba, albo podróż w celu sprzedaży, podlega zamiast tego przepisom handlowym.",
  },
];

const euNonEuBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Mikroczip",
    detail: "Mikroczip zgodny z normą ISO, wszczepiony przed szczepieniem przeciwko wściekliźnie.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Ważne szczepienie przeciwko wściekliźnie",
    detail: "Podane po wszczepieniu mikroczipa i wciąż ważne w dniu podróży, z okresem oczekiwania po pierwszym szczepieniu.",
  },
  {
    id: "certificate",
    level: "required" as const,
    title: "Świadectwo zdrowia zwierzęcia",
    detail:
      "Podróż z kraju spoza UE zwykle wymaga urzędowego świadectwa zdrowia zwierzęcia wystawionego przez urzędowego lekarza weterynarii, zamiast paszportu UE dla zwierząt. Wymogi różnią się w zależności od kraju wyjazdu.",
  },
  {
    id: "titration",
    level: "required" as const,
    title: "Test na obecność przeciwciał przeciwko wściekliźnie — tylko dla niektórych krajów",
    detail:
      "Psy przyjeżdżające z niektórych krajów niewymienionych na liście potrzebują testu miareczkowania przeciwciał przeciwko wściekliźnie, wykonanego w zatwierdzonym laboratorium, z okresem oczekiwania między pobraniem próbki a podróżą. To, czy dotyczy to Ciebie, zależy od dokładnego kraju wyjazdu — sprawdź oficjalne źródło, zanim cokolwiek zarezerwujesz.",
  },
  {
    id: "entry-point",
    level: "required" as const,
    title: "Wyznaczone miejsce wjazdu dla podróżnych",
    detail:
      "Przyjazdy spoza UE zwykle muszą odbywać się przez wyznaczone miejsce wjazdu, gdzie można skontrolować dokumenty.",
  },
];

const tapeworm = {
  id: "tapeworm",
  level: "required" as const,
  title: "Odrobaczanie przeciwko tasiemcowi",
  detail:
    "Leczenie przeciwko Echinococcus multilocularis, podane przez lekarza weterynarii i odnotowane w paszporcie lub świadectwie, w wyznaczonym okresie przed przyjazdem. Dotyczy psów wjeżdżających do niewielkiej liczby krajów wolnych od tego pasożyta.",
};

const source = (
  name: string,
  url: string,
  country: string,
  lastChecked: string,
  category = "Podróże ze zwierzętami",
) => ({ name, url, country, lastChecked, category });

export const countries: Country[] = [
  {
    code: "NO",
    name: "Norwegia",
    eu: true,
    sources: [
      source("Mattilsynet — Norweski Urząd ds. Bezpieczeństwa Żywności", "https://www.mattilsynet.no/en/animals/travelling-with-pets", "Norwegia", "2026-08-15"),
    ],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine:
          "Nie ma rutynowej kwarantanny dla psów spełniających wszystkie wymogi wjazdu. Jeśli przy przyjeździe brakuje dokumentów lub zabiegów, władze mogą objąć psa urzędowym nadzorem — co nie jest tym samym co standardowy okres kwarantanny.",
        minimumAge:
          "Pies nie może podróżować, dopóki szczepienie przeciwko wściekliźnie nie jest ważne, co w praktyce wyklucza bardzo młode szczenięta. Przed zaplanowaniem podróży sprawdź aktualny minimalny wiek i okres oczekiwania u Mattilsynet.",
        notes: [
          "Norwegia jest jednym z krajów wymagających odrobaczenia przeciwko tasiemcowi. Okno czasowe jest ścisłe, więc umów wizytę u weterynarza, zanim zarezerwujesz prom.",
        ],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine:
          "Brak rutynowej kwarantanny przy podróży zgodnej z przepisami. Przyjazdy niezgodne z wymogami mogą zostać odrzucone lub objęte urzędowym nadzorem.",
        minimumAge: "Zależy od przepisów o szczepieniu przeciwko wściekliźnie w kraju wyjazdu.",
      },
    },
  },
  {
    code: "SE",
    name: "Szwecja",
    eu: true,
    sources: [source("Jordbruksverket — Szwedzka Rada Rolnictwa", "https://jordbruksverket.se/languages/english/travelling-with-pets", "Szwecja", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Brak rutynowej kwarantanny dla psów spełniających wymogi wjazdu.",
        minimumAge: "Podróż nie jest możliwa, dopóki szczepienie przeciwko wściekliźnie nie jest ważne. Sprawdź aktualny wiek i okres oczekiwania.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Brak rutynowej kwarantanny przy podróży zgodnej z przepisami; pozostałe przypadki są rozpatrywane przez władze na granicy.",
        minimumAge: "Określany przez przepisy o wściekliźnie w kraju wyjazdu.",
      },
    },
  },
  {
    code: "DK",
    name: "Dania",
    eu: true,
    sources: [source("Fødevarestyrelsen — Duński Urząd Weterynarii i Żywności", "https://www.foedevarestyrelsen.dk/english", "Dania", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Brak rutynowej kwarantanny dla psów spełniających wymogi wjazdu.",
        minimumAge: "Niemożliwa, dopóki szczepienie przeciwko wściekliźnie nie jest ważne.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Brak rutynowej kwarantanny przy podróży zgodnej z przepisami.",
        minimumAge: "Określany przez przepisy o wściekliźnie w kraju wyjazdu.",
      },
    },
  },
  {
    code: "DE",
    name: "Niemcy",
    eu: true,
    sources: [source("Bundesministerium für Ernährung und Landwirtschaft", "https://www.bmel.de/EN/topics/animals/animal-health/travelling-with-pets.html", "Niemcy", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Brak rutynowej kwarantanny dla psów spełniających wymogi wjazdu.",
        minimumAge: "Niemożliwa, dopóki szczepienie przeciwko wściekliźnie nie jest ważne.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Brak rutynowej kwarantanny przy podróży zgodnej z przepisami.",
        minimumAge: "Określany przez przepisy o wściekliźnie w kraju wyjazdu.",
      },
    },
  },
  {
    code: "PL",
    name: "Polska",
    eu: true,
    sources: [source("Główny Inspektorat Weterynarii", "https://www.wetgiw.gov.pl/handel-eksport-import/przemieszczanie-w-celach-niehandlowych", "Polska", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Brak rutynowej kwarantanny dla psów spełniających wymogi wjazdu.",
        minimumAge: "Niemożliwa, dopóki szczepienie przeciwko wściekliźnie nie jest ważne.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Brak rutynowej kwarantanny przy podróży zgodnej z przepisami.",
        minimumAge: "Określany przez przepisy o wściekliźnie w kraju wyjazdu.",
      },
    },
  },
  {
    code: "FR",
    name: "Francja",
    eu: true,
    sources: [source("Ministère de l'Agriculture", "https://agriculture.gouv.fr/voyager-avec-son-animal-de-compagnie", "Francja", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Brak rutynowej kwarantanny dla psów spełniających wymogi wjazdu.",
        minimumAge: "Niemożliwa, dopóki szczepienie przeciwko wściekliźnie nie jest ważne.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Brak rutynowej kwarantanny przy podróży zgodnej z przepisami.",
        minimumAge: "Określany przez przepisy o wściekliźnie w kraju wyjazdu.",
      },
    },
  },
  {
    code: "ES",
    name: "Hiszpania",
    eu: true,
    sources: [source("Ministerio de Agricultura, Pesca y Alimentación", "https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/animales-compania/", "Hiszpania", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Brak rutynowej kwarantanny dla psów spełniających wymogi wjazdu.",
        minimumAge: "Niemożliwa, dopóki szczepienie przeciwko wściekliźnie nie jest ważne.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Brak rutynowej kwarantanny przy podróży zgodnej z przepisami.",
        minimumAge: "Określany przez przepisy o wściekliźnie w kraju wyjazdu.",
      },
    },
  },
  {
    code: "NL",
    name: "Holandia",
    eu: true,
    sources: [source("NVWA — Niderlandzki Urząd ds. Bezpieczeństwa Żywności i Produktów Konsumenckich", "https://english.nvwa.nl/topics/travelling-with-pets", "Holandia", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Brak rutynowej kwarantanny dla psów spełniających wymogi wjazdu.",
        minimumAge: "Niemożliwa, dopóki szczepienie przeciwko wściekliźnie nie jest ważne.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Brak rutynowej kwarantanny przy podróży zgodnej z przepisami.",
        minimumAge: "Określany przez przepisy o wściekliźnie w kraju wyjazdu.",
      },
    },
  },
  {
    code: "IE",
    name: "Irlandia",
    eu: true,
    sources: [source("Department of Agriculture, Food and the Marine", "https://www.gov.ie/en/organisation/department-of-agriculture-food-and-the-marine/", "Irlandia", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine: "Brak rutynowej kwarantanny dla psów spełniających wymogi wjazdu.",
        minimumAge: "Niemożliwa, dopóki szczepienie przeciwko wściekliźnie nie jest ważne.",
        notes: ["Irlandia jest jednym z krajów wymagających odrobaczenia przeciwko tasiemcowi przed przyjazdem, w wyznaczonym oknie czasowym."],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine: "Brak rutynowej kwarantanny przy podróży zgodnej z przepisami.",
        minimumAge: "Określany przez przepisy o wściekliźnie w kraju wyjazdu.",
      },
    },
  },
  {
    code: "GB",
    name: "Wielka Brytania",
    eu: false,
    sources: [source("GOV.UK — Bringing your pet dog to Great Britain", "https://www.gov.uk/bring-pet-to-great-britain", "Wielka Brytania", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          {
            id: "microchip",
            level: "required" as const,
            title: "Mikroczip",
            detail: "Mikroczip zgodny z normą ISO, wszczepiony przed szczepieniem przeciwko wściekliźnie.",
          },
          {
            id: "rabies",
            level: "required" as const,
            title: "Ważne szczepienie przeciwko wściekliźnie",
            detail: "Podane po wszczepieniu mikroczipa i wciąż ważne w dniu podróży, z okresem oczekiwania po pierwszym szczepieniu.",
          },
          {
            id: "document",
            level: "required" as const,
            title: "Akceptowany dokument podróży",
            detail:
              "Paszport UE dla zwierząt wystawiony w kraju UE, albo brytyjskie świadectwo zdrowia zwierzęcia domowego. To, który dokument obowiązuje, zależy od miejsca jego wystawienia — sprawdź oficjalne wytyczne dla swojej sytuacji.",
          },
          tapeworm,
          {
            id: "route",
            level: "required" as const,
            title: "Zatwierdzona trasa i przewoźnik",
            detail: "Psy muszą podróżować z zatwierdzonym przewoźnikiem na zatwierdzonej trasie, chyba że podróżujesz z Irlandii.",
          },
        ],
        quarantine:
          "Nie ma rutynowej kwarantanny dla psów spełniających wszystkie wymogi. Psy, które przyjadą bez ważnych dokumentów, mogą zostać skierowane do kwarantanny na koszt właściciela — to realna możliwość, a nie tylko formalność.",
        minimumAge: "Podróż nie jest możliwa, dopóki szczepienie przeciwko wściekliźnie nie jest ważne. Sprawdź aktualny wiek i okres oczekiwania na GOV.UK.",
      },
    },
  },
  {
    code: "US",
    name: "Stany Zjednoczone",
    eu: false,
    sources: [source("CDC — Bringing a dog into the United States", "https://www.cdc.gov/importation/dogs/", "Stany Zjednoczone", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          { id: "microchip", level: "required" as const, title: "Mikroczip", detail: "Mikroczip zgodny z normą ISO, wpisany do składanych formularzy." },
          { id: "age", level: "required" as const, title: "Minimalny wiek", detail: "CDC stosuje minimalny wiek dla psów wjeżdżających do Stanów Zjednoczonych. Sprawdź aktualną wartość przed rezerwacją." },
          { id: "form", level: "required" as const, title: "Formularz importowy CDC", detail: "Wymagany jest internetowy formularz CDC Dog Import Form, złożony przed podróżą, z potwierdzeniem zabranym w podróż." },
          { id: "rabies", level: "required" as const, title: "Dokumentacja dotycząca wścieklizny", detail: "To, co jest wymagane, zależy od tego, gdzie pies przebywał w ciągu ostatnich sześciu miesięcy. Strona CDC omawia każdy przypadek." },
        ],
        quarantine:
          "Brak rutynowej kwarantanny dla psów spełniających wymogi. Psy przyjeżdżające bez odpowiednich dokumentów mogą nie zostać wpuszczone i zostać odesłane na koszt właściciela.",
        minimumAge: "Obowiązuje minimalny wiek. Sprawdź aktualną zasadę na stronie CDC.",
      },
    },
  },
];

export const transportModes = [
  { id: "car", label: "Samochód", note: "Sam decydujesz o tempie i przerwach. Jeśli trasa przecina wodę, sprawdź zasady dotyczące promu lub tunelu." },
  { id: "train", label: "Pociąg", note: "Zasady przewoźnika obowiązują dodatkowo do wymogów kraju i różnią się w zależności od linii." },
  { id: "plane", label: "Samolot", note: "Zasady linii lotniczych są oddzielne od wymogów wjazdu. Zarezerwuj miejsce dla psa wcześnie." },
  { id: "ferry", label: "Prom", note: "Kojce, kabiny i zasady na pokładzie różnią się w zależności od przewoźnika i rejsu." },
  { id: "bus", label: "Autobus", note: "Wielu przewoźników dalekobieżnych w ogóle nie zabiera psów. Potwierdź przed rezerwacją." },
];

export const travelTimeline = [
  { when: "8 tygodni przed", what: "Sprawdź przepisy dotyczące dokładnie Twojej trasy, w obie strony." },
  { when: "6 tygodni przed", what: "Sprawdź u weterynarza stan mikroczipa i szczepienia przeciwko wściekliźnie." },
  { when: "4 tygodnie przed", what: "Zacznij załatwiać dokumenty — niektóre trwają dłużej, niż mogłoby się wydawać." },
  { when: "2 tygodnie przed", what: "Potwierdź własne zasady przewoźnika i zapisz psa na podróż." },
  { when: "1 tydzień przed", what: "Spakuj teczkę podróżną i znajdź weterynarza w miejscu docelowym." },
  { when: "Dzień przed", what: "Ostatnia kontrola dokumentów i długi, dobry spacer." },
  { when: "Dzień podróży", what: "Dokumenty, pies, woda, smycz i coś znajomego z domu." },
];
