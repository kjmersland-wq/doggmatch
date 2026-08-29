/**
 * Polska treść dla strony „Zostań partnerem DoggMatch”.
 * Ta sama struktura i kolejność co content.en.ts.
 */
import type { PartnerCategory } from "./content.en";

export const partnerCategories: PartnerCategory[] = [
  { id: "equipment", label: "Sprzęt dla zwierząt i psów", blurb: "Szelki, smycze, legowiska, zabawki i codzienne rzeczy, które się zużywają." },
  { id: "grooming", label: "Pielęgnacja", blurb: "Salony i mobilni groomerzy, którzy poświęcają czas nerwowym psom." },
  { id: "training", label: "Trening", blurb: "Kursy dla szczeniąt, indywidualna pomoc i praca oparta na wzmocnieniu pozytywnym." },
  { id: "vet", label: "Weterynaria i zdrowie", blurb: "Kliniki, fizjoterapeuci, stomatolodzy i każdy, kto dba o zdrowie psów." },
  { id: "insurance", label: "Ubezpieczenia", blurb: "Ochrona, która jasno mówi, co pokrywa, a czego nie." },
  { id: "boarding", label: "Pensjonaty i żłobki dla psów", blurb: "Pensjonaty, opiekunowie domowi, żłobki dzienne i zaufani opiekunowie." },
  { id: "food", label: "Jedzenie i żywienie", blurb: "Karma, przekąski i suplementy, które sam podałbyś swojemu psu." },
  { id: "travel", label: "Podróże i aktywności", blurb: "Noclegi przyjazne psom, wyposażenie samochodowe, wędrówki, pływanie i wyjścia." },
];

export const partnerBenefits = [
  {
    id: "exposure",
    title: "Dotrzyj do właścicieli, którzy naprawdę szukają",
    body: "Ludzie trafiają do DoggMatch, gdy wybierają psa, wprowadzają go do domu albo rozeznają się w kwestii jedzenia, treningu i podróży. Już wydają pieniądze — po prostu stajesz się sklepem, który znajdują.",
  },
  {
    id: "listing",
    title: "Twoje własne miejsce w Korzyściach dla członków",
    body: "Prawdziwy wpis w obszarze dla członków: kim jesteś, co oferujesz, gdzie można to wykorzystać, i link prosto do ciebie. Nie logo w ścianie logotypów.",
  },
  {
    id: "offer",
    title: "Oferta, którą sam kształtujesz",
    body: "Procentowa zniżka, darmowa pierwsza sesja, ulepszenie, pakiet — cokolwiek ma sens dla twojej działalności. Ty ustalasz warunki i możesz je zmieniać lub wstrzymać, kiedy chcesz.",
  },
  {
    id: "branding",
    title: "Oznakowanie partnerskie, którego możesz używać",
    body: "Odznaka Partnera DoggMatch na twoją witrynę, stronę internetową i media społecznościowe, dzięki czemu klienci rozpoznają cię, zanim wejdą.",
  },
  {
    id: "verification",
    title: "Weryfikacja, która zajmuje dwie sekundy",
    body: "Członkowie noszą kartę DoggMatch+ z kodem QR. Zeskanuj ją, sprawdź, czy członkostwo jest aktywne, i obsłuż klienta. Bez aplikacji, bez logowań, bez papierologii.",
  },
  {
    id: "no-cost",
    title: "Bez opłaty za wpis, bez prowizji",
    body: "Nie pobieramy opłaty za umieszczenie cię na liście i nie bierzemy prowizji od twojej sprzedaży. Oferta, którą dajesz członkom, to cała umowa.",
  },
] as const;

export const partnerSteps = [
  {
    no: "01",
    title: "Opowiedz nam o swojej działalności",
    body: "Krótki formularz poniżej wystarczy na początek. Kim jesteś, gdzie się znajdujesz i mniej więcej co chciałbyś zaoferować.",
  },
  {
    no: "02",
    title: "Przeprowadzamy prawdziwą rozmowę",
    body: "Prawdziwa osoba czyta zgłoszenie i odpowiada. Zadamy kilka pytań i upewnimy się, że to dobre dopasowanie w obie strony — dla ciebie i dla naszych członków.",
  },
  {
    no: "03",
    title: "Piszemy twój wpis razem",
    body: "Zatwierdzasz treść, ofertę i szczegóły, zanim cokolwiek zostanie opublikowane. Nic nie pojawia się bez twojej zgody.",
  },
  {
    no: "04",
    title: "Członkowie zaczynają się pojawiać",
    body: "Twoja oferta pojawia się w Korzyściach dla członków, otrzymujesz odznakę partnera i skanujesz karty przy ladzie, gdy przychodzą klienci.",
  },
] as const;

export const partnerFaq = [
  {
    q: "Ile kosztuje zostanie partnerem?",
    a: "Nic. Nie ma opłaty za wpis ani prowizji. Twoim wkładem jest zniżka lub korzyść, którą dajesz członkom.",
  },
  {
    q: "Jak sprawdzam, czy ktoś naprawdę jest członkiem?",
    a: "Każdy członek DoggMatch+ ma kartę z kodem QR. Zeskanowanie jej otwiera stronę pokazującą wyłącznie to, czy członkostwo jest aktywne i do kiedy — bez danych osobowych.",
  },
  {
    q: "Czy mogę później zmienić lub zatrzymać moją ofertę?",
    a: "Tak, kiedy tylko chcesz. Napisz do nas, a zaktualizujemy lub wstrzymamy twój wpis. Prosimy tylko o dotrzymanie tego, co już obiecałeś.",
  },
  {
    q: "Nie jesteśmy w Norwegii — czy możemy mimo to dołączyć?",
    a: "Tak. DoggMatch jest używany międzynarodowo, a Korzyści dla członków są pokazywane wraz z krajem, którego dotyczą. Sklepy internetowe wysyłające szeroko są również mile widziane.",
  },
  {
    q: "Ilu członków to zobaczy?",
    a: "Nie podamy ci liczby, za którą nie moglibyśmy stanąć. DoggMatch+ jest młody i rośnie, i wolimy być z tym szczerzy, niż to zawyżać.",
  },
  {
    q: "Jakim firmom odmawiacie?",
    a: "Wszystkim opartym na awersyjnych metodach treningowych albo produktach, których nie polecilibyśmy z czystym sumieniem przyjacielowi z psem. Wolimy mieć krótką listę, której ufamy.",
  },
] as const;
