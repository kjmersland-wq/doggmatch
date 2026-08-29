/**
 * Polskie tłumaczenie treści z podróży Zdobądź psa. Ta sama struktura i
 * kolejność co w content.en.ts, dopasowane do naturalnego, codziennego języka.
 */

import type { JourneyStep, CostGroup, ChecklistItem } from "./content.en";

export const journey: JourneyStep[] = [
  { id: "ready", no: "01", title: "Czy pies to dobry pomysł dla mnie?", body: "Kilka szczerych pytań o twoje dni, dom i ludzi wokół ciebie.", to: "/get-a-dog/ready" },
  { id: "find", no: "02", title: "Znajdź mojego psa", body: "Zobacz, które rasy zwykle pasują do życia takiego jak twoje — i dlaczego.", to: "/find-my-dog" },
  { id: "choose", no: "03", title: "Wybieraj rozważnie", body: "Szczeniak czy dorosły pies, hodowca czy schronisko, i o co zapytać, zanim powiesz „tak”.", to: "/get-a-dog/choose" },
  { id: "costs", no: "04", title: "Zrozum zobowiązanie", body: "Ile pies naprawdę kosztuje, zanim się pojawi i co miesiąc później.", to: "/get-a-dog/costs" },
  { id: "prepare", no: "05", title: "Przygotuj się", body: "Zakupy, weterynarz, ubezpieczenie — i przygotowanie domu.", to: "/get-a-dog/prepare" },
  { id: "welcome", no: "06", title: "Witaj w domu", body: "Pierwszy dzień i pierwszy tydzień, z łagodnością.", to: "/get-a-dog/welcome-home" },
  { id: "mydog", no: "07", title: "Mój pies", body: "Całe jego życie w jednym miejscu — jedzenie, trening, zdrowie, spacery i dokumenty.", to: "/my-dog" },
];

/* ------------------------------------------------------------ Szczeniak / dorosły */

export const puppyVsAdult = {
  title: "Szczeniak czy pies, który jest już dorosły?",
  body: "Żadna opcja nie jest lepsza. To dwa zupełnie inne pierwsze lata, a to, co odpowiednie, zależy dużo bardziej od twojego życia niż od psa.",
  puppy: {
    title: "Szczeniak",
    lead: "Kształtujesz niemal wszystko sam — a płacisz za to snem.",
    good: [
      "Widzisz każdy etap tego, kim się staje",
      "Socjalizacja i nawyki zaczynają się od ciebie",
      "Zwykle łatwiej wprowadzić go do innych zwierząt i dzieci",
      "Długie wspólne życie przed wami",
    ],
    hard: [
      "Przerywane noce, nauka czystości i gryzienie, przez miesiące",
      "Na początku potrzebuje towarzystwa przez większość dnia",
      "Charakter to wciąż niewiadoma, nawet u starannego hodowcy",
      "Szczepienia, kastracja i wczesne koszty weterynaryjne przypadają na pierwszy rok",
    ],
  },
  adult: {
    title: "Dorosły pies",
    lead: "To, co widzisz, w dużej mierze jest tym, co dostajesz.",
    good: [
      "Rozmiar, sierść i charakter są już znane",
      "Wiele psów jest wychowanych czystościowo i potrafi zostać samo",
      "Często spokojniejszy od pierwszego dnia",
      "Schroniska zwykle dają szczerą ocenę psa",
    ],
    hard: [
      "Przychodzi z historią, którą możesz znać tylko częściowo",
      "Zmiana niektórych nawyków wymaga cierpliwości",
      "Mniej wspólnych lat, zwłaszcza przy starszym psie",
      "Aklimatyzacja może zająć tygodnie, nie dni",
    ],
  },
  closing:
    "Jeśli twoje dni są już wypełnione, dorosły pies, który wie, jak być psem, jest często życzliwszym wyborem — dla ciebie i dla niego.",
};

/* -------------------------------------------------------------- Źródło */

export const sources = {
  title: "Skąd weźmiesz swojego psa?",
  body: "Obie drogi mogą dać ci wspaniałego psa. Obie zasługują na kilka uważnych pytań. Żadna nie jest automatycznie tą właściwą odpowiedzią.",
  breeder: {
    title: "Odpowiedzialny hodowca",
    good: [
      "Poznajesz matkę i widzisz, jak wychowywane są szczenięta",
      "Testy zdrowotne właściwe dla rasy są zwykle wykonane",
      "Masz dość jasny obraz dorosłego rozmiaru, sierści i charakteru",
      "Dobry hodowca utrzymuje kontakt przez całe życie psa",
    ],
    check: [
      "Czy szczenięta wychowywane są w domu, w otoczeniu zwykłego życia rodzinnego?",
      "Jakie testy zdrowotne zostały wykonane i czy możesz zobaczyć wyniki?",
      "Ile miotów mają i ilu ras?",
      "Czy przyjmą psa z powrotem, jeśli twoja sytuacja się kiedyś zmieni?",
    ],
  },
  rescue: {
    title: "Adopcja lub schronisko",
    good: [
      "Dorosłe psy mają charakter, który możesz naprawdę poznać",
      "Dobre schroniska uczciwie oceniają i opisują swoje psy",
      "Często są już zaszczepione, zaczipowane i wykastrowane",
      "Wsparcie po adopcji jest zwykle częścią umowy",
    ],
    check: [
      "Co wiedzą o historii psa i jego poprzednim domu?",
      "Jak pies zachowuje się przy dzieciach, innych psach i kotach?",
      "Jakie informacje o zdrowiu są dostarczane?",
      "Jaka pomoc jest dostępna, jeśli pierwsze tygodnie okażą się trudne?",
    ],
  },
};

export const breederQuestions = [
  "Czy mogę poznać matkę?",
  "Czy mogę zobaczyć, gdzie wychowywane są szczenięta?",
  "Jakie testy zdrowotne zostały wykonane dla tej rasy?",
  "Jaką opiekę weterynaryjną szczenięta miały do tej pory?",
  "Jak były socjalizowane — co poznały i usłyszały?",
  "Jakie wsparcie jest dostępne po zabraniu szczeniaka do domu?",
  "Jaką dokumentację otrzymam?",
  "Czy mogę wziąć kilka dni na decyzję?",
];

export const breederRedFlags = [
  "Jesteś naciskany, żeby zapłacić lub zdecydować się od razu",
  "Nie możesz zobaczyć, gdzie mieszkają szczenięta, ani poznać matki",
  "Dokumentacja zdrowotna lub szczepień jest niekompletna albo niejasna",
  "Proste pytania spotykają się z wymijającymi odpowiedziami",
  "Niezwykle duża liczba niespokrewnionych miotów albo wiele ras naraz",
  "Szczeniak wygląda na chorego lub jest wyjątkowo przestraszony zwykłymi rzeczami",
  "Historia zmienia się między rozmowami",
];

export const adoptionConsiderations = [
  { title: "Historia", body: "Niektóre psy przychodzą z pełną historią, inne prawie bez niej. Dobre schronisko szczerze powie ci, z którym przypadkiem masz do czynienia." },
  { title: "Charakter", body: "Zapytaj, co faktycznie zaobserwowali: z obcymi, na smyczy, w samochodzie, samotnie przez godzinę." },
  { title: "Zdrowie", body: "Poproś o notatki weterynaryjne, nie tylko podsumowanie. Trwające schorzenia są do opanowania, gdy o nich wiesz." },
  { title: "Zachowanie", body: "Większość „problemów” to pies, którego niczego nie nauczono, albo który się boi. Zapytaj, jaka pomoc jest dostępna." },
  { title: "Twój dom", body: "Schody, dzieci, koty, ruchliwa ulica — powiedz o tym wszystkim głośno. Dobre dopasowanie liczy się bardziej niż szybkie." },
  { title: "Później", body: "Zapytaj, jakie wsparcie istnieje w drugim tygodniu, kiedy pierwsze emocje opadną i pojawi się prawdziwy pies." },
];

/* -------------------------------------------------------------- Koszty */

export const costGroups: CostGroup[] = [
  {
    id: "before",
    title: "Zanim twój pies się pojawi",
    body: "Jednorazowy wydatek. Większość dzieje się w ciągu jednego dwutygodnia, dlatego zaskakuje ludzi.",
    items: [
      { label: "Opłata za zakup lub adopcję", note: "Bardzo różni się w zależności od rasy, kraju i drogi pozyskania" },
      { label: "Legowisko i klatka, jeśli jej używasz", note: "Kup rozmiar, w który pies dorośnie" },
      { label: "Miski, obroża, szelki, smycz, znaczek identyfikacyjny", note: "Prawne wymogi dotyczące identyfikacji różnią się w zależności od kraju" },
      { label: "Zestaw do pielęgnacji", note: "Szczotka, grzebień, obcinacz do pazurów, szczoteczka do zębów" },
      { label: "Zabawki i gryzaki", note: "Mniej niż myślisz, wymieniane częściej niż myślisz" },
      { label: "Pierwsza wizyta u weterynarza", note: "Przegląd, szczepienia, czipowanie tam, gdzie jeszcze nie zrobiono" },
    ],
  },
  {
    id: "monthly",
    title: "Co miesiąc",
    body: "Stały koszt. Warto go szczerze spisać przed podjęciem decyzji, nie po niej.",
    items: [
      { label: "Jedzenie", note: "Zdecydowanie największa pozycja co miesiąc, i rośnie wraz z rozmiarem psa" },
      { label: "Smakołyki i gryzaki", note: "Trening opiera się na nich w pierwszym roku" },
      { label: "Ubezpieczenie", note: "Tańsze, im młodszy i zdrowszy jest pies" },
      { label: "Pielęgnacja", note: "Od zera do wizyty w salonie co sześć tygodni" },
      { label: "Rutynowa opieka", note: "Odrobaczanie, ochrona przed pchłami i kleszczami, obcinanie pazurków" },
      { label: "Pomoc, gdy pracujesz", note: "Wyprowadzacz lub żłobek dla psów, jeśli twoje dni są długie" },
    ],
  },
  {
    id: "unexpected",
    title: "Coś, na co warto być gotowym",
    body: "Część, na którą nikt nie budżetuje. Odrobina odkładana co miesiąc sprawia, że łatwiej to udźwignąć.",
    items: [
      { label: "Nieoczekiwane leczenie weterynaryjne", note: "Kontuzje i choroby rzadko przychodzą w dogodnym momencie" },
      { label: "Opieka stomatologiczna", note: "Bardzo częsta w średnim wieku i niebagatelna kosztowo" },
      { label: "Opieka nagła i poza godzinami", note: "Kosztuje więcej niż zaplanowana wizyta" },
      { label: "Wymiana rzeczy", note: "Legowiska, smycze i jedna czy dwie ulubione rzeczy" },
    ],
  },
];

/* ---------------------------------------------------------------- Twój dom */

export const homeScenarios = [
  { id: "apartment", title: "Mieszkanie", body: "Absolutnie wykonalne. Pomyśl o schodach lub windzie, sąsiadach i miejscu na pierwszy spacer dnia." },
  { id: "house", title: "Dom", body: "Przestrzeń wewnątrz liczy się mniej, niż myślisz. Ważniejsze są możliwości spacerowe dziesięć minut od drzwi." },
  { id: "garden", title: "Ogród", body: "Miło go mieć, ale to nie zastępuje spaceru. Sprawdź płot, furtkę i wszystko, co rośnie i nie powinno być zjedzone." },
  { id: "city", title: "Miasto", body: "Ruchliwe chodniki, ruch uliczny, windy i kawiarnie. Miejskie psy muszą przede wszystkim czuć się dobrze z hałasem." },
  { id: "suburb", title: "Przedmieścia", body: "Zwykle najłatwiejsze ze wszystkich: ciche ulice, tereny zielone w pobliżu i miejsce, by wyszaleć się w weekend." },
  { id: "rural", title: "Wieś", body: "Przestrzeń i wolność, ale trzeba pomyśleć o zwierzętach gospodarskich, dzikiej faunie i dłuższej drodze do weterynarza." },
];

export const homeFactors = [
  "Schody i to, czy twój pies poradzi sobie z nimi zarówno młody, jak i stary",
  "Winda i to, czy będzie się w niej czuł komfortowo",
  "Przestrzeń na zewnątrz i to, jak naprawdę jest zabezpieczona",
  "Tereny zielone w zasięgu spaceru",
  "Bezpieczne miejsce, by pies mógł biegać",
  "Kawiarnie, sklepy i transport przyjazny psom",
];

export const lifeScenarios = [
  { id: "quiet", title: "Spokojny domator", body: "Stałe rutyny i krótkie, regularne spacery. Spokojniejszy pies będzie tu szczęśliwszy niż sportowiec." },
  { id: "outdoors", title: "Aktywny na świeżym powietrzu", body: "Weekendy na szlakach, pogoda bez znaczenia. Wysportowany pies, który może razem z tobą zwiększać dystans." },
  { id: "city", title: "Życie w mieście", body: "Chodniki, transport, tłumy. Pewność siebie wobec hałasu liczy się bardziej niż rozmiar." },
  { id: "family", title: "Życie rodzinne", body: "Hałas, goście, dowożenie do szkoły. Liczy się tolerancja i miejsce, do którego można się wycofać." },
  { id: "home-office", title: "Praca z domu", body: "Wspaniałe dla psa — o ile nauczy się też czasem być sam." },
  { id: "retired", title: "Emeryt lub elastyczny grafik", body: "Czas i rutyna, czyli to, czego pies chce najbardziej. Pomyśl o sile na smyczy." },
  { id: "travel", title: "Częste podróże", body: "Całkowicie możliwe przy dobrym planie: stały opiekun albo pies, który dobrze znosi podróże z tobą." },
];

/* ------------------------------------------------------------- Przygotowania */

export const arrivalChecklist: ChecklistItem[] = [
  { id: "food", label: "Jedzenie", note: "Zacznij od tego, co pies już je, potem zmieniaj stopniowo" },
  { id: "bowls", label: "Miski", note: "Jedna na jedzenie, druga zawsze pełna wody" },
  { id: "collar", label: "Obroża" },
  { id: "tag", label: "Znaczek identyfikacyjny", note: "Twój numer telefonu, przynajmniej" },
  { id: "harness", label: "Szelki" },
  { id: "lead", label: "Smycz" },
  { id: "bed", label: "Legowisko", note: "Spokojne miejsce, z dala od ruchu w domu" },
  { id: "toys", label: "Kilka zabawek" },
  { id: "grooming", label: "Akcesoria do pielęgnacji" },
  { id: "toothbrush", label: "Szczoteczka i pasta do zębów dla psów" },
  { id: "waste", label: "Woreczki na odchody" },
  { id: "cleaning", label: "Środki czystości", note: "Enzymatyczny środek czyszczący, na wypadki, które się zdarzą" },
  { id: "travel", label: "Bezpieczne wyposażenie podróżne", note: "Na drogę do domu, a także na później" },
  { id: "vet", label: "Umówiona wizyta u weterynarza" },
  { id: "insurance", label: "Zorganizowane ubezpieczenie" },
  { id: "microchip", label: "Dane mikroczipu", note: "Zarejestrowane na ciebie, z aktualnym numerem telefonu" },
  { id: "emergency", label: "Spisane kontakty awaryjne", note: "Twój weterynarz i najbliższa lecznica całodobowa" },
];

export const firstDay = [
  { title: "Zachowaj spokój", body: "Bez powitalnej imprezy. Tylko domownicy, mówiący normalnym tonem." },
  { title: "Pokaż mu jego legowisko", body: "Zaprowadź go do miejsca, które jest jego, i pozwól mu wracać tam we własnym tempie." },
  { title: "Najpierw woda, potem jedzenie", body: "Woda od razu. Jedzenie, gdy trochę się uspokoi, i to samo jedzenie, co wcześniej." },
  { title: "Pozwól mu odkrywać", body: "Jeden pokój na raz, bez smyczy, z tobą w pobliżu, ale bez nadmiernej kontroli." },
  { title: "Ogranicz świat", body: "Dom i ogród w zupełności wystarczą na jeden dzień. Reszta może poczekać." },
  { title: "Zacznij obserwować", body: "Kiedy potrzebuje wyjść, gdzie wybiera spanie, co go niepokoi. To początek poznawania go." },
];

export const firstWeek = [
  { title: "Łagodna rutyna", body: "Te same pory na jedzenie, spacery i sen. Przewidywalność najszybciej uspokaja psa." },
  { title: "Jego imię", body: "Powiedz je i nagradzaj za spojrzenie na ciebie. Na razie nic bardziej skomplikowanego." },
  { title: "Pierwsze małe lekcje", body: "Przychodzenie na wołanie i wygodne bycie samemu przez kilka minut naraz." },
  { title: "Rutyna toaletowa", body: "Na zewnątrz po śnie, jedzeniu i zabawie. Chwal w momencie, gdy to się zdarzy, nigdy nie besztaj za wypadki." },
  { title: "Sen", body: "Nowe psy śpią ogromnie dużo. Pozwól im na to. Szczenięta potrzebują większości dnia." },
  { title: "Poznawanie świata", body: "W tempie odpowiednim do jego wieku i zgodnie z zaleceniami weterynarza dotyczącymi szczepień." },
  { title: "Bycie razem", body: "Spokojne siedzenie w tym samym pokoju robi więcej dla więzi niż jakiekolwiek ćwiczenie." },
  { title: "Obserwacja", body: "Apetyt, nawyki toaletowe, energia. Szybciej niż myślisz zorientujesz się, co jest dla niego normalne." },
];
