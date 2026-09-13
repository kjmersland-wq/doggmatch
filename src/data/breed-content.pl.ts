import type { BreedId } from "./breeds";
import type { BreedContent } from "./breed-content.en";

/** Rasowe teksty po polsku, powiązane z tymi samymi stabilnymi id ras. */
export const breedContentPl: Partial<Record<BreedId, BreedContent>> = {
  "labrador-retriever": {
    displayName: "Labrador retriever",
    summary:
      "Otwarty, motywowany jedzeniem pies myśliwski, który nie bez powodu stał się domyślnym towarzyszem rodzinnym — i wciąż potrzebuje prawdziwego zajęcia, żeby czuć się dobrze.",
    strengths: [
      "Uwielbia towarzystwo ludzi",
      "Uczy się szybko, zwłaszcza za smaczek",
      "Wspaniałe towarzystwo na co dzień",
      "Chętnie dołączy do każdej aktywności",
      "Zwykle dobrze wpasowuje się w życie rodzinne",
    ],
    considerations: [
      "Linieje przez cały rok",
      "Potrzebuje sporo ruchu każdego dnia",
      "Duży i silny na smyczy",
      "Nudzi się bez zajęcia dla umysłu",
    ],
  },
  "golden-retriever": {
    displayName: "Golden retriever",
    summary:
      "Łagodny, uległy i niezwykle cierpliwy. Golden prosi o towarzystwo bardziej niż o cokolwiek innego.",
    strengths: [
      "Cudownie łagodny wobec dzieci",
      "Uwielbia się uczyć, gdy czeka na niego nagroda",
      "Przyjazny wobec ludzi i innych psów",
      "Najszczęśliwszy na dworze w chłodniejszą pogodę",
    ],
    considerations: [
      "Mocno linieje kilka razy w roku",
      "Wymaga regularnego szczotkowania",
      "Ciężko znosi upały",
      "Nie lubi długich godzin w samotności",
    ],
  },
  poodle: {
    displayName: "Pudel (standard)",
    summary:
      "Wysportowany i niezwykle inteligentny pies pod elegancką sierścią. Rozkwita przy rozwiązywaniu zadań i bliskiej współpracy.",
    strengths: [
      "Bardzo mało linieje",
      "Uczy się zdumiewająco szybko",
      "Dobrze radzi sobie w mieszkaniu, jeśli dostaje dość ruchu",
      "Zabawny, ale nie chaotyczny",
    ],
    considerations: [
      "Wizyta u groomera co 6–8 tygodni",
      "Potrzebuje zajęcia dla umysłu, nie tylko spacerów",
      "Może odczuwać niepokój przy częstej samotności",
      "Pielęgnacja sierści z czasem sporo kosztuje",
    ],
  },
  "french-bulldog": {
    displayName: "Buldog francuski",
    summary:
      "Zwarty, komiczny i głęboko przywiązany towarzysz miejski o skromnych potrzebach ruchowych i realnych wyzwaniach zdrowotnych.",
    strengths: [
      "Bardzo dobrze czuje się w mieszkaniu",
      "Nie potrzebuje wiele ruchu",
      "Czuły i zawsze blisko ciebie",
      "Spokojniejszy niż większość małych psów",
    ],
    considerations: [
      "Może mieć trudności z oddychaniem w upale lub przy wysiłku",
      "Rachunki u weterynarza bywają wyższe przez całe życie",
      "Nie lubi zostawać sam",
      "Warto wybrać hodowcę, który dokładnie bada zdrowie rodziców",
    ],
  },
  "border-collie": {
    displayName: "Border collie",
    summary:
      "Najbardziej ulegający tresurze pies, którego większość ludzi nie powinna mieć. Genialny, intensywny i nieszczęśliwy bez codziennej pracy.",
    strengths: [
      "Uczy się niemal wszystkiego, czego go nauczysz",
      "Świetny w sportach, węchówce i zagadkach",
      "Głęboko przywiązany do swojej osoby",
      "Najlepiej czuje się z naprawdę aktywnymi ludźmi",
    ],
    considerations: [
      "Potrzebuje dużo ruchu i dużo zajęć dla umysłu",
      "Rzadko czuje się dobrze w mieszkaniu lub przy spokojnej rutynie",
      "Może próbować spędzać dzieci lub gonić rowery",
      "Nuda szybko zamienia się w kłopoty",
    ],
  },
  "cavalier-king-charles-spaniel": {
    displayName: "Cavalier king charles spaniel",
    summary:
      "Mały, łagodny towarzysz, który chce być tam, gdzie ty. Spokojne towarzystwo, a nie projekt do prowadzenia.",
    strengths: [
      "Łagodny wobec dzieci i osób starszych",
      "W pełni zadowolony w małym domu",
      "Dogaduje się z innymi psami i zwierzętami",
      "Nie potrzebuje długich spacerów",
    ],
    considerations: [
      "Znane dziedziczne problemy z sercem i układem nerwowym",
      "Rzadko dobrze znosi dłuższą samotność",
      "Uszy i sierść wymagają regularnej pielęgnacji",
      "Zawsze pytaj o badania zdrowotne rodziców",
    ],
  },
  greyhound: {
    displayName: "Greyhound",
    summary:
      "Sprinter, który śpi przez większość dnia. Spokojny, czysty i zaskakująco dobrze dopasowany do spokojnych domów.",
    strengths: [
      "Cudownie spokojny w domu",
      "Łatwa sierść i rzadko szczeka",
      "Wystarczy mu kilka krótkich biegów",
      "Często czeka na dom przez organizacje adopcyjne",
    ],
    considerations: [
      "Silny instynkt pościgu za małymi zwierzętami",
      "Czas bez smyczy wymaga bezpiecznie ogrodzonej przestrzeni",
      "Marznie, potrzebuje ciepła i miękkiego posłania",
      "Cienka skóra, więc skaleczenia i otarcia zdarzają się łatwo",
    ],
  },
  "shiba-inu": {
    displayName: "Shiba inu",
    summary:
      "Niezależny, drobiazgowy i samowystarczalny. Shiba raczej cię szanuje, niż jest ci posłuszna.",
    strengths: [
      "Lepiej niż większość psów znosi samotność",
      "Czysty, niemal jak kot",
      "Mały, ale krzepki",
      "Często żyje długo",
    ],
    considerations: [
      "Niezależny, przywołanie wymaga prawdziwej pracy",
      "Traci ogromne ilości sierści dwa razy w roku",
      "Często powściągliwy wobec innych psów",
      "Niekoniecznie najprostszy pierwszy pies",
    ],
  },
  "german-shepherd": {
    displayName: "Owczarek niemiecki",
    summary:
      "Poważny, czujny i głęboko lojalny. Owczarek niemiecki chce mieć zadanie, rutynę i kogoś, dla kogo warto pracować.",
    strengths: [
      "Uczy się szybko i dobrze zapamiętuje",
      "Oddany swoim ludziom",
      "Wspaniały po prawidłowej socjalizacji",
      "Najlepiej czuje się z codziennym zajęciem",
    ],
    considerations: [
      "Linieje cały rok, a mocno dwa razy w roku",
      "Potrzebuje godziny lub więcej realnej pracy dziennie",
      "Może być nieufny wobec obcych bez wczesnego treningu",
      "Warto zapytać hodowcę o biodra i łokcie",
    ],
  },
  dachshund: {
    displayName: "Jamnik",
    summary:
      "Mały, zabawny i odważniejszy, niż sugerują jego nogi. Duża osobowość, która lubi być blisko ciebie.",
    strengths: [
      "Świetnie odnajduje się w małym domu",
      "Nie potrzebuje długich spacerów",
      "Bystry i pełen charakteru",
      "Dobre towarzystwo, zawsze pod nogami",
    ],
    considerations: [
      "Kruchy grzbiet — żadnych schodów ani skoków z kanapy",
      "Lubi dźwięk własnego głosu",
      "Upiera się i dyskutuje w trakcie treningu",
      "Łatwo przybiera na wadze",
    ],
  },
  beagle: {
    displayName: "Beagle",
    summary:
      "Nos na czterech łapach. Wesoły, towarzyski i niemal niemożliwy do oderwania od dobrego zapachu.",
    strengths: [
      "Naprawdę przyjazny wobec wszystkich",
      "Wytrzymały i wyrozumiały wobec dzieci",
      "Uwielbia inne psy",
      "Krótka sierść, prosta w pielęgnacji",
    ],
    considerations: [
      "Przywołanie to ciężka praca — nos zwykle wygrywa",
      "Wyje i skomli, gdy się nudzi",
      "Zje wszystko, co zostawisz w zasięgu",
      "Potrzebuje bezpiecznie ogrodzonego ogrodu",
    ],
  },
  "cocker-spaniel": {
    displayName: "Cocker spaniel",
    summary:
      "Łagodne spojrzenie, mnóstwo energii i niesłabnąca chęć współpracy. Cocker jest najszczęśliwszy, gdy robi coś razem z tobą.",
    strengths: [
      "Czuły i chętny do współpracy",
      "Uwielbia węchówkę i zabawy",
      "Radzi sobie w mieście i na wsi",
      "Dobry rozmiar dla większości domów",
    ],
    considerations: [
      "Uszy trzeba często sprawdzać i czyścić",
      "Sierść się kołtuni bez regularnego szczotkowania",
      "Robi się niespokojny bez zajęcia",
      "Nie lubi długich godzin w samotności",
    ],
  },
  chihuahua: {
    displayName: "Chihuahua",
    summary:
      "Malutki, odważny i całkowicie oddany jednej lub dwóm osobom. Mały pies, opinie w pełnym rozmiarze.",
    strengths: [
      "Idealny do mieszkania",
      "Potrzebuje bardzo mało ruchu",
      "Żyje długo, często do późnej starości",
      "Łatwo zabrać go w podróż",
    ],
    considerations: [
      "Delikatny — to nie pies do szorstkiego obchodzenia się",
      "Szczeka na wszystko, co nieznane",
      "Bardzo mocno odczuwa zimno",
      "Potrzebuje prawdziwej socjalizacji, żeby zostać spokojnym psem",
    ],
  },
  "miniature-schnauzer": {
    displayName: "Sznaucer miniaturowy",
    summary:
      "Brodaty, bystry i po cichu przekonany o swojej ważności. Terierowy umysł w schludnej, mało liniejącej sierści.",
    strengths: [
      "Bardzo mało linieje",
      "Bystry i szybko się uczy",
      "Pasuje zarówno do mieszkania, jak i domu",
      "Krzepki jak na małego psa",
    ],
    considerations: [
      "Strzyżenie co 6–8 tygodni",
      "Szczeka na drzwi, listonosza i wiatr",
      "Niezbyt przepada za małymi zwierzętami",
      "Skłonny do tycia",
    ],
  },
  "bernese-mountain-dog": {
    displayName: "Berneński pies pasterski",
    summary:
      "Ogromny, łagodny i spokojny. Berneńczyk to miękkie towarzystwo dla rodziny, która ma miejsce i słabość do sierści.",
    strengths: [
      "Cudownie cierpliwy wobec dzieci",
      "Spokojny w domu jak na tak dużego psa",
      "Uwielbia zimną pogodę",
      "Łagodny z natury i wyważony",
    ],
    considerations: [
      "Krótsze życie niż u większości ras",
      "Mnóstwo sierści po całym domu",
      "Wyższe koszty karmy, ubezpieczenia i leczenia",
      "Bardzo ciężko znosi upały",
    ],
  },
  "australian-shepherd": {
    displayName: "Owczarek australijski",
    summary:
      "Bystry, wysportowany i zawsze czujny. Aussie potrzebuje celu bardziej niż ogrodu.",
    strengths: [
      "Genialny we wszystkim, czego go nauczysz",
      "Uwielbia sport, sztuczki i węchówkę",
      "Bardzo przywiązany do swojej osoby",
      "Przystojny i wytrzymały na dworze",
    ],
    considerations: [
      "Potrzebuje wielu godzin aktywności każdego dnia",
      "Spędza dzieci, rowery i biegaczy",
      "Szybko się nudzi i głośno o tym mówi",
      "Rzadko pasuje do mieszkania",
    ],
  },
  "jack-russell-terrier": {
    displayName: "Jack russell terrier",
    summary:
      "Mały, szybki i całkowicie pewny siebie. Świetna zabawa, jeśli lubisz psa z silnikiem.",
    strengths: [
      "Wytrzymały, zdrowy i długowieczny",
      "Mieści się w małym domu",
      "Niesłabnąco zabawowy",
      "Lepiej niż większość psów znosi samotność",
    ],
    considerations: [
      "Goni wszystko, co małe i szybkie",
      "Kopie, i to na poważnie",
      "Może być zaczepny wobec innych psów",
      "Potrzebuje dużo więcej ruchu, niż sugeruje jego rozmiar",
    ],
  },
  "siberian-husky": {
    displayName: "Husky syberyjski",
    summary:
      "Piękny, przyjazny i stworzony do biegania cały dzień. Husky rzadko robi to, o co prosisz, tylko dlatego, że o to poprosiłeś.",
    strengths: [
      "Towarzyski wobec ludzi i psów",
      "Stworzony do zimna i długich dystansów",
      "Rzadko szczeka",
      "Czysty, z niewielkim psim zapachem",
    ],
    considerations: [
      "Ucieka z ogrodu i nie wraca",
      "Przywołanie to projekt na całe życie",
      "Traci sierść dwa razy w roku, wszędzie",
      "Cierpi w ciepłym klimacie",
    ],
  },
  boxer: {
    displayName: "Bokser",
    summary:
      "Błazen, który nigdy do końca nie dorasta. Żywiołowy, ciepły i zawsze w samym środku wydarzeń.",
    strengths: [
      "Wspaniały z dziećmi",
      "Zabawowy aż do starości",
      "Krótka sierść, łatwa w pielęgnacji",
      "Dobrze się uczy przy życzliwym, pogodnym treningu",
    ],
    considerations: [
      "Skoczny i silny — wskakuje na ludzi",
      "Szybko się przegrzewa przez krótki pysk",
      "Niektóre poważne problemy zdrowotne w rasie",
      "Ślini się",
    ],
  },
  rottweiler: {
    displayName: "Rottweiler",
    summary:
      "Silny, opanowany i pewny siebie bez rozgłosu. Rottweiler potrzebuje właściciela, który wie, co robi.",
    strengths: [
      "Stabilny i pewny siebie, gdy jest dobrze wychowany",
      "Uczy się szybko i chętnie pracuje",
      "Lojalny i opiekuńczy wobec rodziny",
      "Łatwa sierść",
    ],
    considerations: [
      "Bardzo silny — trening musi być solidny",
      "Wymaga starannej socjalizacji od pierwszego dnia",
      "Ubezpieczenie i karma kosztują więcej",
      "W niektórych miejscach rasa jest objęta ograniczeniami",
    ],
  },
  whippet: {
    displayName: "Whippet",
    summary:
      "Kanapowy pies w ciele sprintera. Cichy, czuły i niezwykle łatwy w codziennym życiu.",
    strengths: [
      "Spokojny i mało wymagający w domu",
      "Prawie żadnej pielęgnacji sierści",
      "Dwa krótkie sprinty dziennie wystarczą",
      "Łagodny i cichy",
    ],
    considerations: [
      "Goni wszystko, co biegnie",
      "Czas bez smyczy wymaga ogrodzonej przestrzeni",
      "Marznie — potrzebuje ubranek i koców",
      "Cienka skóra łatwo się przecina",
    ],
  },
  "shih-tzu": {
    displayName: "Shih tzu",
    summary:
      "Stworzony na towarzysza i naprawdę dobry w tej roli. Szczęśliwy na kolanach, szczęśliwy w małym mieszkaniu.",
    strengths: [
      "Idealny do życia w mieście",
      "Przyjazny niemal wobec wszystkich",
      "Bardzo mało linieje",
      "Nie potrzebuje długich spacerów",
    ],
    considerations: [
      "Codzienne szczotkowanie albo krótkie strzyżenie",
      "Krótki pysk sprawia, że upał jest niebezpieczny",
      "Oczy wymagają obserwacji i czyszczenia",
      "Nauka czystości może wymagać cierpliwości",
    ],
  },
  pug: {
    displayName: "Mops",
    summary:
      "Komiczny, czuły i trzymający się blisko jak cień. Mops prosi o towarzystwo dużo bardziej niż o ruch.",
    strengths: [
      "Kocha wszystkich, psy również",
      "Dobrze czuje się nawet w najmniejszym domu",
      "Wyluzowany i zabawny",
      "Potrzebuje mało ruchu",
    ],
    considerations: [
      "Problemy z oddychaniem są częste",
      "Upał może być niebezpieczny",
      "Bardzo łatwo tyje",
      "Zmarszczki i oczy wymagają codziennej pielęgnacji",
    ],
  },
  "bichon-frise": {
    displayName: "Bichon frise",
    summary:
      "Mała biała chmurka o pogodnym usposobieniu. Towarzyski, bystry i najszczęśliwszy w otoczeniu ludzi.",
    strengths: [
      "Bardzo mało linieje",
      "Przyjazny wobec dzieci i innych psów",
      "Pasuje do mieszkań i małych ogrodów",
      "Uczy się szybko i uwielbia pochwały",
    ],
    considerations: [
      "Groomer co 4–6 tygodni",
      "Naprawdę słabo znosi samotność",
      "Skóra i uszy wymagają uwagi",
      "Nauka czystości wymaga konsekwencji",
    ],
  },
  "staffordshire-bull-terrier": {
    displayName: "Staffordshire bull terrier",
    summary:
      "Umięśniony, łagodny w usposobieniu i znany z sympatii do dzieci. Staffie kocha swoich ludzi bez zastrzeżeń.",
    strengths: [
      "Wspaniały pies rodzinny, gdy dobrze wychowany",
      "Krótka sierść, bardzo prosta pielęgnacja",
      "Krzepki i zabawowy",
      "Chętny do współpracy",
    ],
    considerations: [
      "Może być trudny wobec innych psów",
      "Silny jak na swój rozmiar na smyczy",
      "Rozgryza miękkie zabawki i legowiska",
      "W niektórych miejscach spotyka się z ograniczeniami lub uprzedzeniami",
    ],
  },
  vizsla: {
    displayName: "Wyżeł węgierski krótkowłosy",
    summary:
      "Pies-rzep. Wysportowany, wrażliwy i nigdy nie oddala się od ciebie bardziej niż na metr.",
    strengths: [
      "Piękny, cichy i czysty",
      "Świetny towarzysz biegania i wędrówek",
      "Bardzo czuły",
      "Prawie żadnej pielęgnacji sierści",
    ],
    considerations: [
      "Nie może zostawać sam na długo",
      "Potrzebuje godziny lub dwóch intensywnego ruchu dziennie",
      "Wrażliwy na podniesiony głos",
      "Marznie na zimowych spacerach",
    ],
  },
  samoyed: {
    displayName: "Samojed",
    summary:
      "Uśmiechnięty pies śniegu. Towarzyski, gadatliwy i piękny — a przy tym mnóstwo sierści.",
    strengths: [
      "Naprawdę przyjazny wobec wszystkich",
      "Uwielbia zimno i śnieg",
      "Zabawowy i rodzinny",
      "Rzadko bywa agresywny",
    ],
    considerations: [
      "Linieje w zdumiewających ilościach",
      "Szczotkowanie kilka razy w tygodniu",
      "Dużo mówi, wyje i marudzi",
      "Łatwo się przegrzewa latem",
    ],
  },
  "yorkshire-terrier": {
    displayName: "Yorkshire terrier",
    summary:
      "Malutki, bystry i pełen terierowego temperamentu. Yorkie jest odważniejszy, niż ktokolwiek się spodziewa.",
    strengths: [
      "Ledwo linieje",
      "Idealny rozmiar do mieszkania",
      "Bystry i szybko się uczy",
      "Często żyje długo",
    ],
    considerations: [
      "Sierść wymaga codziennej pielęgnacji albo krótkiego strzyżenia",
      "Szczeka na wszystko",
      "Delikatny — łatwo go zranić przy nieostrożnym kroku",
      "Nauka czystości może zająć trochę czasu",
    ],
  },
};
