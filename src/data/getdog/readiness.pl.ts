import type { ReadinessQuestion, ReadinessOutcome } from "./readiness.en";

export const readinessQuestions: ReadinessQuestion[] = [
  {
    id: "time",
    eyebrow: "Twoje dni",
    title: "Ile czasu mógłbyś/mogłabyś poświęcić psu każdego dnia?",
    help: "Spacery, karmienie, trening, pielęgnacja i po prostu bycie razem.",
    options: [
      { value: "under1", label: "Mniej niż godzinę", score: 0, note: "Większość psów potrzebuje więcej niż godziny twojego dnia, rozłożonej na spacery, jedzenie, trening i towarzystwo. Warto pomyśleć, skąd wziąć ten czas." },
      { value: "1-2", label: "Od jednej do dwóch godzin", score: 2 },
      { value: "2-3", label: "Od dwóch do trzech godzin", score: 3 },
      { value: "3plus", label: "Więcej niż trzy godziny", score: 3, hint: "Moje dni są dość elastyczne" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Twój dzień",
    title: "Jak długo twój pies zwykle będzie sam?",
    help: "Nie ma jednej liczby, która pasuje do każdego psa. Wiek, wyszkolenie i temperament mają znaczenie.",
    options: [
      { value: "0", label: "Prawie nigdy sam", score: 3, profile: { alone: "0" } },
      { value: "2", label: "Do trzech godzin", score: 3, profile: { alone: "2" } },
      { value: "4", label: "Od trzech do pięciu godzin", score: 2, profile: { alone: "4" } },
      { value: "6", label: "Sześć godzin lub więcej", score: 0, profile: { alone: "6" }, note: "Długie dni w samotności są trudne dla większości psów. Wyprowadzacz, żłobek dla psów lub sąsiad, który może zajrzeć, robią realną różnicę — warto to zaplanować wcześniej, nie później." },
    ],
  },
  {
    id: "activity",
    eyebrow: "Twoje dni",
    title: "Jak aktywny jesteś na co dzień?",
    help: "Pomyśl o zwykłym tygodniu, nie o tym najlepszym.",
    options: [
      { value: "1", label: "Raczej spokojny", score: 2, profile: { activity: "1" } },
      { value: "2", label: "Umiarkowanie aktywny", score: 3, profile: { activity: "2" } },
      { value: "3", label: "Dość aktywny", score: 3, profile: { activity: "3" } },
      { value: "4", label: "Zawsze w ruchu", score: 3, profile: { activity: "4" } },
    ],
  },
  {
    id: "home",
    eyebrow: "Dom",
    title: "Gdzie będzie mieszkał twój pies?",
    help: "Mieszkanie nie stoi na przeszkodzie szczęśliwemu psu. Ważniejsze są możliwości spacerowe przy progu i godziny, jakich przestrzegasz.",
    options: [
      { value: "apartment", label: "W mieszkaniu", score: 3, profile: { home: "apartment" } },
      { value: "house", label: "W domu bez ogrodu", score: 3, profile: { home: "house" } },
      { value: "house-garden", label: "W domu z ogrodem", score: 3, profile: { home: "house-garden" } },
      { value: "rural", label: "Na wsi", score: 3, profile: { home: "rural" } },
    ],
  },
  {
    id: "travel",
    eyebrow: "Poza domem",
    title: "Podróżujesz często?",
    options: [
      { value: "rarely", label: "Rzadko", score: 3 },
      { value: "sometimes", label: "Kilka razy w roku", score: 2 },
      { value: "often", label: "Często, w pracy lub prywatnie", score: 1, note: "Częste podróże to nie powód, by nie mieć psa — ale oznacza wcześniejsze ustalenie, kto się nim zaopiekuje albo na które wyjazdy może z tobą jechać." },
    ],
  },
  {
    id: "children",
    eyebrow: "W domu",
    title: "Kto jeszcze mieszka w domu?",
    options: [
      { value: "none", label: "Tylko dorośli", score: 3, profile: { children: "none" } },
      { value: "older", label: "Starsze dzieci", score: 3, profile: { children: "older" } },
      { value: "young", label: "Małe dzieci", score: 2, profile: { children: "young" }, note: "Małe dzieci i psy mogą świetnie się dogadywać, przy nadzorze i spokojnym miejscu, do którego pies zawsze może się wycofać." },
      { value: "visitors", label: "Dorośli i dużo gości", score: 3, profile: { children: "visitors" } },
    ],
  },
  {
    id: "pets",
    eyebrow: "W domu",
    title: "Są w domu inne zwierzęta?",
    options: [
      { value: "none", label: "Żadnych innych zwierząt", score: 3, profile: { pets: "none" } },
      { value: "dog", label: "Inny pies", score: 3, profile: { pets: "dog" } },
      { value: "cat", label: "Kot", score: 2, profile: { pets: "cat" } },
      { value: "small", label: "Mniejsze zwierzęta", hint: "Króliki, ptaki, gryzonie", score: 2, profile: { pets: "small" } },
    ],
  },
  {
    id: "allergies",
    eyebrow: "Zdrowie w domu",
    title: "Czy ktoś w gospodarstwie domowym ma alergie?",
    help: "Niektóre rasy linieją mniej, co czasem ułatwia życie. Żaden pies nie jest całkowicie bezpieczny dla alergików, a reakcje różnią się w zależności od osoby.",
    options: [
      { value: "no", label: "Nikt, o ile wiemy", score: 3, profile: { shedding: "fine" } },
      { value: "mild", label: "Ktoś jest trochę wrażliwy", score: 2, profile: { shedding: "prefer-low" } },
      { value: "yes", label: "Tak, ktoś reaguje na psy", score: 1, profile: { shedding: "must-low" }, note: "Spędź czas z konkretnym psem przed podjęciem decyzji i porozmawiaj z lekarzem. Rasy mało liniejące pomagają jednym osobom, a innym nie." },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Opieka nad psem",
    title: "Czy jesteś gotowy/gotowa na regularną pielęgnację?",
    options: [
      { value: "minimal", label: "Wolałbym/wolałabym utrzymać to prosto", score: 2, profile: { grooming: "minimal" } },
      { value: "moderate", label: "Regularne szczotkowanie mi odpowiada", score: 3, profile: { grooming: "moderate" } },
      { value: "high", label: "Nie przeszkadzają mi wizyty u groomera", score: 3, profile: { grooming: "high" } },
    ],
  },
  {
    id: "costs",
    eyebrow: "Pieniądze",
    title: "Czy poradziłbyś/poradziłabyś sobie z nieoczekiwanym rachunkiem od weterynarza?",
    help: "To pytanie zaskakuje najwięcej osób. Ubezpieczenie albo oszczędności — obie drogi się sprawdzają.",
    options: [
      { value: "yes", label: "Tak, poradzilibyśmy sobie", score: 3 },
      { value: "insurance", label: "Z ubezpieczeniem, tak", score: 3 },
      { value: "tight", label: "Byłoby ciasno", score: 1, note: "Odkładanie odrobiny co miesiąc albo wczesne ubezpieczenie odejmuje sporo zmartwień na kolejne lata." },
      { value: "no", label: "Nie w tej chwili", score: 0, note: "Opieka weterynaryjna bywa kosztowna i rzadko przychodzi w dogodnym momencie. Kilka miesięcy oszczędzania na start może wszystko zmienić." },
    ],
  },
  {
    id: "support",
    eyebrow: "Twoi ludzie",
    title: "Kto mógłby pomóc, gdybyś zachorował/zachorowała albo wyjechał/wyjechała?",
    options: [
      { value: "household", label: "Ktoś inny w domu", score: 3 },
      { value: "family", label: "Rodzina lub przyjaciele w pobliżu", score: 3 },
      { value: "paid", label: "Zapłaciłbym/zapłaciłabym za opiekuna lub żłobek dla psów", score: 2 },
      { value: "noone", label: "Jeszcze nie jestem pewien/pewna", score: 0, note: "Każdy prędzej czy później choruje albo musi wyjechać. Wiedza z góry, kto mógłby wtedy pomóc, znacznie zmniejsza stres tych tygodni." },
    ],
  },
  {
    id: "commitment",
    eyebrow: "Dłuższa perspektywa",
    title: "Pies może być z tobą od dziesięciu do piętnastu lat. Czy to brzmi dobrze?",
    help: "Pomyśl, gdzie możesz mieszkać, pracować i podróżować za dekadę.",
    options: [
      { value: "yes", label: "Tak, przemyśleliśmy to", score: 3 },
      { value: "mostly", label: "W większości — niektóre rzeczy są niepewne", score: 2 },
      { value: "unsure", label: "Szczerze mówiąc, nie jestem pewien/pewna", score: 0, note: "To zupełnie zrozumiałe uczucie. Nie ma żadnego pośpiechu — pies wciąż tam będzie, kiedy obraz stanie się jaśniejszy." },
    ],
  },
];

export const readinessOutcomes: Record<ReadinessOutcome["id"], ReadinessOutcome> = {
  "well-prepared": {
    id: "well-prepared",
    title: "Wyglądasz na dobrze przygotowanego/przygotowaną.",
    body: "Z tego, co nam powiedziałeś/powiedziałaś, pies wpasowałby się w twoje życie bez większych zmian. Przemyślałeś/przemyślałaś czas, pieniądze i ludzi, którzy pomogą, gdy życie stanie na przeszkodzie — czyli najtrudniejszą część masz już za sobą.",
    encouragement: "Gotowy/gotowa dowiedzieć się, jakie psy mogą pasować do twojego życia?",
  },
  "good-start": {
    id: "good-start",
    title: "Masz dobry początek.",
    body: "Większość elementów już jest na swoim miejscu. Jest jedna czy dwie rzeczy warte ogarnięcia, zanim pies pojawi się w domu, i żadna z nich nie jest trudna — po prostu łatwiej je załatwić teraz niż w środku pierwszego tygodnia z nowym psem.",
    encouragement: "Zerknij, jakie psy mogłyby ci pasować, dopracowując resztę.",
  },
  "not-yet": {
    id: "not-yet",
    title: "Jest kilka rzeczy wartych przemyślenia najpierw.",
    body: "Może jeszcze nie teraz — i to zupełnie w porządku. Nic tutaj nie mówi, że nie powinieneś/powinnaś mieć psa. Mówi tylko, że odrobina przygotowania teraz znacznie ułatwiłaby decyzję i uczyniła pierwszy rok łagodniejszym dla was obojga.",
    encouragement: "Możesz spokojnie eksplorować dalej. Nic nie jest zamknięte.",
  },
};
