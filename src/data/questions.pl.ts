import type { QuizQuestion } from "@/lib/matching/types";

/** Pytania po polsku. Id-y i wartości są takie same. */
export const questionsPl: QuizQuestion[] = [
  {
    id: "activity",
    eyebrow: "Twoje dni",
    title: "Jak aktywny jesteś na co dzień?",
    help: "Pomyśl o zwykłym tygodniu, nie o tym najlepszym.",
    options: [
      { value: "1", label: "Raczej spokojny", hint: "Krótkie spacery, spokojna rutyna" },
      { value: "2", label: "Umiarkowanie aktywny", hint: "Codzienny spacer, a czasem trochę więcej" },
      { value: "3", label: "Dość aktywny", hint: "Długie spacery i weekendy na świeżym powietrzu" },
      { value: "4", label: "Zawsze w ruchu", hint: "Bieganie, wędrówki lub sport niemal codziennie" },
    ],
  },
  {
    id: "home",
    eyebrow: "Dom",
    title: "Gdzie będzie mieszkał twój pies?",
    options: [
      { value: "apartment", label: "W mieszkaniu", hint: "Wspólna klatka schodowa lub winda" },
      { value: "house", label: "W domu bez ogrodu" },
      { value: "house-garden", label: "W domu z ogrodem" },
      { value: "rural", label: "Na wsi" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Twój dzień",
    title: "Jak długo twój pies zwykle będzie sam?",
    options: [
      { value: "0", label: "Prawie nigdy sam", hint: "Prawie zawsze ktoś jest w domu" },
      { value: "2", label: "Do trzech godzin" },
      { value: "4", label: "Od trzech do pięciu godzin" },
      { value: "6", label: "Sześć godzin lub więcej" },
    ],
  },
  {
    id: "experience",
    eyebrow: "Doświadczenie",
    title: "Miałeś już wcześniej psa?",
    options: [
      { value: "first", label: "To będzie mój pierwszy" },
      { value: "some", label: "Trochę", hint: "Dorastałem z psami albo pomagałem się nim opiekować" },
      { value: "experienced", label: "Sporo", hint: "Sam wychowywałem i szkoliłem psy" },
    ],
  },
  {
    id: "size",
    eyebrow: "Czego szukasz",
    title: "Masz na myśli jakiś rozmiar?",
    optional: true,
    options: [
      { value: "small", label: "Coś małego" },
      { value: "medium", label: "Coś pośredniego" },
      { value: "large", label: "Dużego psa" },
      { value: "any", label: "Jestem otwarty na wszystko" },
    ],
  },
  {
    id: "temperament",
    eyebrow: "Czego szukasz",
    title: "Jaki temperament najbardziej by ci odpowiadał?",
    options: [
      { value: "calm", label: "Spokojny i wyluzowany" },
      { value: "affectionate", label: "Czuły i trzymający się blisko" },
      { value: "playful", label: "Zabawowy i pełen życia" },
      { value: "independent", label: "Zadowolony we własnym towarzystwie" },
    ],
  },
  {
    id: "children",
    eyebrow: "W domu",
    title: "Kto jeszcze mieszka w domu?",
    options: [
      { value: "none", label: "Tylko dorośli" },
      { value: "older", label: "Starsze dzieci" },
      { value: "young", label: "Małe dzieci" },
      { value: "visitors", label: "Dorośli i dużo gości" },
    ],
  },
  {
    id: "pets",
    eyebrow: "W domu",
    title: "Są w domu inne zwierzęta?",
    optional: true,
    options: [
      { value: "none", label: "Żadnych innych zwierząt" },
      { value: "dog", label: "Inny pies" },
      { value: "cat", label: "Kot" },
      { value: "small", label: "Mniejsze zwierzęta", hint: "Króliki, ptaki, gryzonie" },
    ],
  },
  {
    id: "shedding",
    eyebrow: "Sierść i alergie",
    title: "Co myślisz o sierści psa w domu?",
    help: "Niektóre rasy linieją mniej, co osobom z alergią czasem ułatwia życie. Żaden pies nie jest jednak całkowicie bezpieczny dla alergików.",
    options: [
      { value: "fine", label: "Sierść mi nie przeszkadza" },
      { value: "prefer-low", label: "Wolałbym, żeby było jej mniej" },
      { value: "must-low", label: "Ktoś u nas reaguje na psy", hint: "Proszę tylko rasy mało liniejące" },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Opieka nad psem",
    title: "Ile pielęgnacji jesteś skłonny/skłonna wziąć na siebie?",
    options: [
      { value: "minimal", label: "Jak najmniej" },
      { value: "moderate", label: "Regularne szczotkowanie mi odpowiada" },
      { value: "high", label: "Nie przeszkadzają mi wizyty u groomera" },
    ],
  },
  {
    id: "physical",
    eyebrow: "Opieka nad psem",
    title: "Z jakim psem jesteś w stanie sobie poradzić fizycznie?",
    help: "Siła na smyczy zaskakuje wielu ludzi.",
    options: [
      { value: "light", label: "Nic dużego ani silnego", hint: "Silny pies byłby zbyt wymagający" },
      { value: "moderate", label: "Średni pies to dla mnie w sam raz" },
      { value: "strong", label: "Poradzę sobie z dużym, silnym psem" },
    ],
  },
  {
    id: "energyLimit",
    eyebrow: "Bądźmy szczerzy",
    title: "Czy dałbyś/dałabyś radę szczęśliwie żyć z bardzo energicznym psem?",
    help: "Warto tu być szczerym — potraktujemy twoją odpowiedź poważnie.",
    options: [
      { value: "no", label: "Nie, potrzebowałbym/potrzebowałabym spokojniejszego psa" },
      { value: "maybe", label: "W rozsądnych granicach" },
      { value: "yes", label: "Tak, chętnie miałbym/miałabym aktywnego psa" },
    ],
  },
  {
    id: "companionship",
    eyebrow: "Towarzystwo",
    title: "Czego mam nadzieję, że pies wniesie do twojego życia?",
    options: [
      { value: "calm-company", label: "Ciche, stałe towarzystwo" },
      { value: "motivation", label: "Powód, by wyjść z domu" },
      { value: "active", label: "Kogoś, kto dotrzyma mi kroku" },
      { value: "family", label: "Psa dla całej rodziny" },
    ],
  },
  {
    id: "allergy",
    eyebrow: "Sierść i alergie",
    title: "Czy ktoś w twoim domu ma alergię na psy?",
    help: "Niektóre rasy linieją mniej i lepiej utrzymują sierść, co niektórym ludziom ułatwia życie. Żaden pies nie jest całkowicie bezpieczny dla alergików, a tolerancja różni się między osobami.",
    options: [
      { value: "none", label: "Nie, nikt nie reaguje na psy" },
      { value: "mild", label: "Łagodne reakcje", hint: "Lekkie katarki przy niektórych psach" },
      { value: "significant", label: "Poważna alergia", hint: "Najpierw chcielibyśmy skonsultować się z lekarzem" },
      { value: "unsure", label: "Jeszcze nie jesteśmy pewni" },
    ],
  },
  {
    id: "wellbeing",
    eyebrow: "Towarzystwo i dobrostan",
    title: "Jak bardzo zależy ci na spokojnym, bliskim towarzyszu przy boku?",
    help: "Pies to towarzystwo, nie opieka medyczna. Przyjrzymy się spokojowi, towarzyskości i temu, jak bardzo dana rasa jest zwykle nastawiona na człowieka.",
    options: [
      { value: "no", label: "To nie jest to, czego szukam" },
      { value: "some", label: "Byłoby to miłe" },
      { value: "important", label: "Tak, to dla mnie ważne" },
      { value: "very", label: "To dla mnie najważniejsza rzecz" },
    ],
  },
];
