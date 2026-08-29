import type { FoodItem } from "./types";

const poisonLine = {
  label: "Poradnik o toksycznych pokarmach dla psów",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * Spokojna, przeszukiwalna odpowiedź na pytanie "czy mój pies może to zjeść?".
 * `avoid` = znane jako szkodliwe. `care` = w porządku w niektórych sytuacjach, z zastrzeżeniami.
 * Nic tutaj nie zastępuje telefonu do weterynarza, jeśli pies już coś zjadł.
 */
export const foodItemsPl: FoodItem[] = [
  // ---------------------------------------------------------------- avoid
  { id: "chocolate", name: "Czekolada", safety: "avoid", body: "Zawiera teobrominę, której psy nie potrafią rozkładać tak jak my. Gorzka i piekarska czekolada są najgorsze, ale czekolada mleczna też się liczy.", warning: "Zadzwoń od razu do weterynarza, podając rodzaj, ilość i mniej więcej godzinę. Nie czekaj na objawy.", source: poisonLine },
  { id: "xylitol", name: "Ksylitol / cukier brzozowy", safety: "avoid", body: "Słodzik w bezcukrowej gumie do żucia, miętówkach, niektórych masłach orzechowych, wypiekach i niektórych lekach. Bardzo małe ilości mogą wywołać niebezpieczny spadek cukru we krwi.", warning: "To sytuacja awaryjna. Natychmiast zadzwoń do weterynarza.", source: poisonLine },
  { id: "grapes", name: "Winogrona, rodzynki, sułtanki, porzeczki", safety: "avoid", body: "U niektórych psów mogą wywołać niewydolność nerek, a nikt nie potrafi przewidzieć, u których psów ani w jakiej ilości. Dotyczy to też ciasta z bakaliami, keksu i granoli.", warning: "Każda ilość to powód do telefonu do weterynarza tego samego dnia.", source: poisonLine },
  { id: "onion", name: "Cebula, czosnek, pory, szczypiorek", safety: "avoid", body: "Cała rodzina roślin cebulowych uszkadza czerwone krwinki, surowa, gotowana, suszona czy w proszku. Uważaj na sosy, buliony, curry i resztki jedzenia.", warning: "Objawy mogą pojawić się dopiero po kilku dniach. Zadzwoń do weterynarza.", source: poisonLine },
  { id: "macadamia", name: "Orzechy makadamia", safety: "avoid", body: "Powodują osłabienie, chwiejny chód, drżenia i wymioty, często w ciągu dwunastu godzin.", warning: "Zadzwoń do weterynarza.", source: poisonLine },
  { id: "alcohol", name: "Alkohol", safety: "avoid", body: "Psy są dużo bardziej wrażliwe niż ludzie. Dotyczy to też surowego ciasta drożdżowego i niektórych deserów.", warning: "Zadzwoń pilnie do weterynarza.", source: poisonLine },
  { id: "caffeine", name: "Kawa, herbata, napoje energetyczne", safety: "avoid", body: "Kofeina powoduje przyspieszone bicie serca, niepokój i drżenia. Fusy z kawy i torebki po herbacie w koszu to częsty winowajca.", warning: "Zadzwoń do weterynarza.", source: poisonLine },
  { id: "dough", name: "Surowe ciasto drożdżowe", safety: "avoid", body: "Rośnie w ciepłym żołądku, a drożdże wytwarzają alkohol. Bolesne i naprawdę niebezpieczne.", warning: "To sytuacja awaryjna.", source: poisonLine },
  { id: "cooked-bones", name: "Gotowane kości", safety: "avoid", body: "Rozłupują się na ostre kawałki, które mogą uszkodzić lub zablokować przewód pokarmowy. Dotyczy to kości z kurczaka, kotletów i żeberek.", warning: "Jeśli pies zjadł taką kość, zadzwoń do weterynarza po poradę." },
  { id: "corn-cob", name: "Kolba kukurydzy", safety: "avoid", body: "Ziarna są w porządku; kolba to jedna z najczęstszych przyczyn niedrożności jelit wymagającej operacji u psów.", warning: "Zadzwoń do weterynarza tego samego dnia." },
  { id: "mouldy", name: "Zapleśniałe jedzenie i kompost", safety: "avoid", body: "Pleśń może wytwarzać toksyny wywołujące silne drżenia i drgawki. Trzymaj kompostownik dobrze zamknięty.", warning: "Zadzwoń pilnie do weterynarza.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Pestki brzoskwini, śliwki i wiśni", safety: "avoid", body: "Sam miąższ w małych ilościach jest w porządku, pestki już nie — grożą zadławieniem i niedrożnością, a dodatkowo zawierają związki cyjankowe." },
  { id: "mushrooms-wild", name: "Dzikie grzyby", safety: "avoid", body: "Niektóre są śmiertelnie trujące, a odróżnienie ich w terenie nie jest realistyczne. Grzyby ze sklepu w daniu to zupełnie inna sprawa.", warning: "Jeśli pies zje dziki grzyb, zadzwoń do weterynarza i jeśli możesz, zrób mu zdjęcie." },
  { id: "salt", name: "Bardzo słone jedzenie", safety: "avoid", body: "Duże ilości soli powodują poważne problemy. Ozdoby z masy solnej i połknięcie dużej ilości wody morskiej to zwykłe przyczyny." },
  { id: "rhubarb", name: "Liście rabarbaru", safety: "avoid", body: "Liście są toksyczne. Warto o tym wiedzieć, jeśli uprawiasz rabarbar w ogrodzie." },
  { id: "nutmeg", name: "Gałka muszkatołowa", safety: "avoid", body: "W większej ilości powoduje dezorientację i drżenia. Odrobina posypana na czymś zwykle nie jest kryzysem, ale nie podawaj jej celowo." },
  { id: "hops", name: "Chmiel", safety: "avoid", body: "Istotne, jeśli ktoś w domu warzy piwo. Powoduje niebezpieczny wzrost temperatury ciała." },

  // ------------------------------------------------------------------ care
  { id: "peanut-butter", name: "Masło orzechowe", safety: "care", body: "W porządku jako sporadyczny smakołyk — ale tylko jeśli nie zawiera ksylitolu ani cukru brzozowego. Za każdym razem czytaj skład, nawet przy znanej marce.", serving: "Łyżeczka rozsmarowana na macie do lizania", warning: "Wyłącznie bez ksylitolu." },
  { id: "cheese", name: "Ser", safety: "care", body: "Świetna waluta treningowa, ale tłusta i słona. Wiele psów nie toleruje dobrze nabiału.", serving: "Kawałki wielkości groszku, nie plaster" },
  { id: "yoghurt", name: "Naturalny jogurt", safety: "care", body: "Niewielkie ilości naturalnego, niesłodzonego jogurtu odpowiadają niektórym psom. Nigdy nic słodzonego — sprawdź, czy nie ma ksylitolu.", serving: "Łyżka" },
  { id: "milk", name: "Mleko", safety: "care", body: "Wiele dorosłych psów nie toleruje laktozy, co zwykle objawia się rozstrojem żołądka. Woda to lepszy pomysł." },
  { id: "bread", name: "Chleb", safety: "care", body: "Zwykły pieczony chleb nie szkodzi, ale to puste kalorie. Unikaj wszystkiego z rodzynkami, cebulą, czosnkiem lub pestkami." },
  { id: "popcorn", name: "Popcorn", safety: "care", body: "Naturalny, przygotowany na gorącym powietrzu i niesolony jest w porządku jako okazjonalna przekąska. Masło, sól i słodkie polewy — już nie. Niewybuchłe ziarna mogą złamać zęby." },
  { id: "ham", name: "Szynka, boczek i przetworzone mięso", safety: "care", body: "Bardzo słone i tłuste. Tłuste jedzenie to dobrze znany wyzwalacz zapalenia trzustki, które jest bolesne i poważne." },
  { id: "avocado", name: "Awokado", safety: "care", body: "Miąższ jest dużo mniejszym problemem dla psów niż dla ptaków, ale jest tłusty, a pestka to realne ryzyko niedrożności. Łatwiej po prostu go unikać." },
  { id: "tomato", name: "Pomidor", safety: "care", body: "Dojrzały miąższ pomidora jest w porządku w małych ilościach. Zielone pomidory, liście i łodygi już nie." },
  { id: "nuts", name: "Orzechy (ogólnie)", safety: "care", body: "Tłuste, łatwo się nimi zadławić, często solone. Orzechy makadamia są toksyczne. Najlepiej unikać ich jako nawyku." },
  { id: "raw-potato", name: "Surowy ziemniak", safety: "care", body: "Zielone lub kiełkujące ziemniaki są toksyczne. Zwykły gotowany ziemniak bez masła i soli jest w porządku od czasu do czasu." },
  { id: "sweetcorn", name: "Ziarna kukurydzy", safety: "care", body: "Ziarna oderwane od kolby są nieszkodliwe w małych ilościach. Kolba jest niebezpieczna." },
  { id: "citrus", name: "Pomarańcze i owoce cytrusowe", safety: "care", body: "Mały kawałek obranej pomarańczy nie zaszkodzi, choć większość psów nie jest nim zachwycona. Pomiń skórkę, białą część i pestki." },
  { id: "ice-cream", name: "Lody", safety: "care", body: "Słodkie, często bogate w nabiał, a czasem zawierają ksylitol lub czekoladę. Mrożony naturalny jogurt albo mrożona marchewka to lepszy smakołyk w upalny dzień." },
  { id: "raw-fish", name: "Surowa ryba", safety: "care", body: "Niesie ryzyko pasożytów i bakterii, a niektóre surowe ryby zaburzają wchłanianie witamin. Gotowana i bez ości to bezpieczniejsza wersja." },
  { id: "liver", name: "Wątróbka", safety: "care", body: "Świetny smakołyk treningowy, ale bardzo bogaty w witaminę A. Podawaj w małych ilościach, nie jako stały posiłek." },
  { id: "eggs-raw", name: "Surowe jajko", safety: "care", body: "Ryzyko salmonelli, a surowe białko może zaburzać przyswajanie witaminy z grupy B. Gotowane, zwykłe jajko to prosta alternatywa." },
  { id: "honey", name: "Miód", safety: "care", body: "Nietoksyczny, to po prostu cukier. Odrobina od czasu do czasu jest w porządku dla zdrowych dorosłych psów; unikaj u psów cukrzycowych i szczeniąt." },
  { id: "coconut", name: "Kokos", safety: "care", body: "Małe ilości miąższu lub oleju nie szkodzą, ale są tłuste i mogą rozluźnić stolec." },
  { id: "spinach", name: "Szpinak i jarmuż", safety: "care", body: "W porządku w małych ilościach jako część posiłku. Duże ilości nie są idealne dla psów z problemami nerkowymi." },
  { id: "table-scraps", name: "Resztki ze stołu", safety: "care", body: "Problemem rzadko jest jeden kęs — to sosy, cebula, sól i tłuszcz oraz kalorie, których nikt nie liczy. Ogranicz smakołyki do około jednej dziesiątej dziennej porcji jedzenia." },

  // ------------------------------------------------------------------ safe
  { id: "carrot", name: "Marchewka", safety: "safe", body: "Chrupiąca, tania i niskokaloryczna. Zimna marchewka to niezła rzecz do gryzienia dla ząbkującego szczeniaka.", serving: "Surowe paluszki lub gotowane kawałki" },
  { id: "apple", name: "Jabłko", safety: "safe", body: "Słodkie, chrupiące i popularne. Usuń gniazdo nasienne i pestki.", serving: "Kilka plasterków" },
  { id: "banana", name: "Banan", safety: "safe", body: "W porządku w małych ilościach. Zawiera dużo cukru, więc nie codziennie.", serving: "Kilka plasterków banana" },
  { id: "blueberries", name: "Borówki", safety: "safe", body: "Małe, łatwe do rozdawania, a większość psów je uwielbia.", serving: "Mała garść" },
  { id: "watermelon", name: "Arbuz", safety: "safe", body: "Orzeźwiający w upalny dzień. Usuń pestki i skórkę.", serving: "Kilka kostek albo mrożone" },
  { id: "strawberries", name: "Truskawki", safety: "safe", body: "Świeże są w porządku, w małych ilościach. Nic z puszki ani w syropie.", serving: "Jedna lub dwie" },
  { id: "pumpkin", name: "Zwykła dynia", safety: "safe", body: "Zwykła gotowana lub w puszce dynia (nie nadzienie do ciasta) jest łagodna dla żołądka i często zalecana przy luźnym stolcu.", serving: "Łyżka lub dwie" },
  { id: "green-beans", name: "Zielona fasolka", safety: "safe", body: "Sycąca i niskokaloryczna — naprawdę przydatna, jeśli pies jest na diecie.", serving: "Mała garść, bez dodatków" },
  { id: "cucumber", name: "Ogórek", safety: "safe", body: "Głównie woda. Dobra przekąska w upalny dzień.", serving: "Kilka plasterków" },
  { id: "chicken", name: "Zwykły gotowany kurczak", safety: "safe", body: "Bez skóry, bez kości i bez przypraw. Jeden z najlepszych smakołyków treningowych.", serving: "Małe kawałki" },
  { id: "turkey", name: "Zwykły gotowany indyk", safety: "safe", body: "Te same zasady co przy kurczaku: bez skóry, bez kości, bez przypraw, bez sosu.", serving: "Małe kawałki" },
  { id: "fish-cooked", name: "Gotowana biała ryba i łosoś", safety: "safe", body: "Dobrze ugotowana i dokładnie odkostniona. Dobre źródło białka i kwasów omega-3.", serving: "Mała porcja" },
  { id: "rice", name: "Zwykły gotowany ryż", safety: "safe", body: "Delikatny i łatwostrawny — często to, co zaleca weterynarz po rozstroju żołądka.", serving: "Wymieszany z posiłkiem" },
  { id: "egg", name: "Gotowane jajko", safety: "safe", body: "Jajecznica bez masła i soli, albo jajko na twardo.", serving: "Część jajka, zależnie od wielkości psa" },
  { id: "sweet-potato", name: "Gotowany batat", safety: "safe", body: "Zwykły i gotowany. Większość psów bardzo go lubi.", serving: "Niewielka ilość, bez masła" },
  { id: "peas", name: "Groszek", safety: "safe", body: "Świeży lub mrożony, bez dodatków. Unikaj groszku z puszki — za dużo soli.", serving: "Łyżka" },
  { id: "broccoli", name: "Brokuł", safety: "safe", body: "W porządku w małych ilościach. Duża ilość może powodować wzdęcia i podrażnienie żołądka.", serving: "Kilka małych różyczek" },
  { id: "courgette", name: "Cukinia", safety: "safe", body: "Niskokaloryczna i łagodna dla żołądka, surowa albo gotowana bez dodatków.", serving: "Kilka kawałków" },
  { id: "celery", name: "Seler naciowy", safety: "safe", body: "Chrupiący i bardzo niskokaloryczny. Pokrój go drobno.", serving: "Drobno pokrojone kawałki" },
  { id: "pear", name: "Gruszka", safety: "safe", body: "W porządku bez gniazda nasiennego i pestek.", serving: "Kilka kawałków" },
  { id: "melon", name: "Melon kantalupa", safety: "safe", body: "Słodki i nawadniający. Usuń skórkę i pestki.", serving: "Kilka kostek" },
  { id: "mango", name: "Mango", safety: "safe", body: "Obrane, bez pestki. Zawiera dużo cukru, więc dawkuj oszczędnie.", serving: "Kilka kawałków" },
  { id: "pineapple", name: "Ananas", safety: "safe", body: "Tylko świeży, bez skórki i twardego rdzenia. Nie ten słodzony z puszki.", serving: "Mały kawałek" },
  { id: "oats", name: "Zwykły gotowany owies", safety: "safe", body: "Zwykła owsianka na wodzie. Bez cukru, bez słodzików, bez mleka.", serving: "Łyżka" },
  { id: "sardines", name: "Sardynki w wodzie", safety: "safe", body: "W puszce, w wodzie, nie w oleju ani zalewie. Dobre źródło kwasów omega-3.", serving: "Część puszki, od czasu do czasu" },
  { id: "cauliflower", name: "Kalafior", safety: "safe", body: "Zwykły, w małych ilościach. Może powodować wzdęcia, tak jak u nas.", serving: "Mała różyczka" },
  { id: "lettuce", name: "Sałata", safety: "safe", body: "Nieszkodliwa i głównie woda. Niezbyt ekscytująca, ale w porządku.", serving: "Trochę, pokrojone" },
  { id: "beetroot", name: "Gotowany burak", safety: "safe", body: "Zwykły gotowany burak jest w porządku w małych ilościach — nie ten kiszony ani marynowany.", serving: "Mały kawałek" },
];

export const nutritionSectionsPl = [
  {
    title: "Czytaj skład, nie opakowanie",
    body: "Przód torby to marketing. Liczy się informacja, że karma jest pełnoporcjowa i zbilansowana dla etapu życia twojego psa, oraz tabela żywieniowa, którą faktycznie da się stosować.",
    points: [
      "\"Pełnoporcjowa\" oznacza, że można nią karmić samodzielnie. \"Uzupełniająca\" oznacza, że nie",
      "Sprawdź, czy jest odpowiednia do etapu życia — szczenię, dorosły pies czy wszystkie etapy życia",
      "Tabele żywieniowe to punkt wyjścia, nie zasada. Dostosuj do swojego psa",
      "Marki zatrudniające weterynarzy i żywieniowców, przeprowadzające testy karmienia, to bezpieczniejszy wybór",
    ],
  },
  {
    title: "Ile naprawdę",
    body: "Każda tabela na każdej torbie to średnia. Dwa psy o tej samej wadze mogą potrzebować wyraźnie różnych ilości, a uczciwa odpowiedź brzmi: karm, obserwuj i dostosowuj co kilka tygodni.",
    points: [
      "Waż jedzenie zamiast używać miarki — miarki z czasem zawodzą",
      "Licz smakołyki i gryzaki. Sumują się szybciej, niż ktokolwiek się spodziewa",
      "Sprawdzaj kondycję ciała co miesiąc i koryguj porcję o mniej więcej 10% naraz",
      "Wykastrowane psy często potrzebują trochę mniej niż wcześniej",
    ],
  },
  {
    title: "Jak często",
    body: "Szczenięta potrzebują częstych, małych posiłków; dorosłym psom dobrze służą dwa. Podzielenie dziennej porcji na dwa posiłki pasuje do rytmu dnia większości psów lepiej niż jedna duża miska.",
    points: [
      "Poniżej 4 miesięcy: trzy lub cztery posiłki dziennie",
      "Od 4 do 6 miesięcy: trzy posiłki",
      "Od 6 miesiąca życia: dwa posiłki",
      "Psy o głębokiej klatce piersiowej: unikaj intensywnego wysiłku tuż przy posiłkach",
    ],
  },
  {
    title: "Zmiana karmy",
    body: "Nagłe zmiany rozstrajają żołądek u większości psów. Rozłóż to na około tydzień.",
    points: [
      "Dni 1–2: jedna czwarta nowej karmy, trzy czwarte starej",
      "Dni 3–4: po połowie",
      "Dni 5–6: trzy czwarte nowej",
      "Dzień 7: cała nowa karma",
      "Jeśli stolec się rozluźni, zwolnij tempo, zamiast brnąć dalej",
    ],
  },
  {
    title: "Woda",
    body: "Świeża woda, zawsze dostępna, w czystej misce. Brzmi to oczywiście, a i tak najczęściej o tym zapomina się w upalne dni i podczas długich podróży.",
  },
  {
    title: "Dieta surowa i domowa",
    body: "Obie można zrobić dobrze i obie łatwo zrobić źle. Diety gotowane w domu są szczególnie często niezbilansowane, jeśli nie ułożył ich weterynarz żywieniowiec.",
    points: [
      "Karmienie surowe niesie ryzyko bakteryjne dla psa i całego domu",
      "Dieta domowa potrzebuje właściwego przepisu i suplementów, żeby była pełnowartościowa",
      "Porozmawiaj z weterynarzem przed zmianą, zwłaszcza w przypadku szczeniąt i starszych psów",
      "To decyzja, którą trzeba podjąć wspólnie z fachowcem, a nie na podstawie forum",
    ],
  },
] as const;
