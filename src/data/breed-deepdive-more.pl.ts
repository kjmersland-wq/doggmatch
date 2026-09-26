import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

const G = "Ogólne wskazówki, nie porada weterynaryjna.";
const h = (text: string) => `${text} ${G}`;

export const breedDeepDiveMorePl: Partial<Record<BreedId, BreedDeepDive>> = {
  whippet: {
    originalPurpose:
      "Whippety wyhodowały w XIX wieku w północnej Anglii rodziny fabrycznych i górniczych robotników, które chciały małego, szybkiego psa do wyścigów i pogoni za królikami – „konia wyścigowego biednego człowieka”.",
    healthConsiderations: h(
      "Whippet to zwykle wytrzymała i długowieczna rasa, ale cienka skóra łatwo się rani, a szczupłe ciało marznie, więc ubranko w mroźne dni to dobry gest. Charty mogą inaczej reagować na znieczulenie, warto więc wspomnieć o rasie u każdego weterynarza. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Spuścisz psa ze smyczy przy królikach, kotach albo ruchu drogowym i będziesz mieć nadzieję, że się uda",
      "Chcesz psa, który dobrze znosi pobyt na dworze albo w chłodnym domu",
      "Twój ogród nie jest ogrodzony i nie masz bezpiecznego miejsca na porządny sprint",
    ],
    keyTradeoffs: [
      "Spokojny i czysty w domu, zdumiewający na dworze – potrzebujesz zarówno kanapy, jak i bezpiecznego pola",
      "Łagodny i cichy, z instynktem pogoni, którego żadne szkolenie nie wyłączy do końca",
    ],
  },
  greyhound: {
    originalPurpose:
      "Greyhound to jeden z najstarszych typów chartów, hodowany od tysięcy lat do gonienia zajęcy z widzenia. W nowszych czasach był psem wyścigowym, a wielu emerytowanych zawodników trafia dziś do domów jako pupile.",
    healthConsiderations: h(
      "Greyhound jest szczupły, ma cienką skórę i mało tłuszczu, więc marznie i może nabawić się odleżyn na twardej podłodze – miękkie legowisko ma znaczenie. Zęby często wymagają regularnej troski, a psy o głębokiej klatce piersiowej bywają obserwowane pod kątem skrętu żołądka. Emerytowani zawodnicy mogą mieć stare kontuzje, zapytaj więc organizację adopcyjną, co wie, i porozmawiaj z weterynarzem.",
    ),
    poorMatchFor: [
      "Chcesz spuszczać psa ze smyczy w nieogrodzonym parku",
      "Mieszkasz z kotem lub małymi zwierzętami i nie da się ich rozdzielić",
      "Chcesz psa, który dobrze znosi zimowy dzień na dworze",
    ],
    keyTradeoffs: [
      "Jeden z najłagodniejszych i najcichszych psów, przesypiający na kanapie większą część dnia, a zbudowany do sprintu w chwili, gdy coś małego ucieknie",
      "Duży pies w spokojnym ciele: łatwy w domu, a na końcu smyczy sporo psa, jeśli rzuci się do biegu",
    ],
  },
  poodle: {
    originalPurpose:
      "Pudel zaczynał jako niemiecki aport z wody, przynoszący myśliwym kaczki, a we Francji stał się ukochanym towarzyszem i tamtejszym najsłynniejszym psem. Słynne wystawowe strzyżenie podobno zaczęło się jako praktyczne, do pływania.",
    healthConsiderations: h(
      "Biodra, oczy i skóra to zwykle to, o co się pyta, a psy o głębokiej klatce piersiowej, jak pudel duży, bywają obserwowane pod kątem skrętu żołądka. Sierść filcuje się bez regularnego szczotkowania, a uszy też warto sprawdzać. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Fryzjer co sześć do ośmiu tygodni i szczotkowanie prawie codziennie nie mieszczą się w twoim życiu",
      "Chcesz psa, który zniesie bycie ignorowanym przez cały dzień",
      "Wolisz nie poświęcać czasu na dawanie mądremu psu rzeczy do myślenia",
    ],
    keyTradeoffs: [
      "Szybki, chętny do współpracy i mało się liniejący, z sierścią, która wymaga prawdziwej, regularnej pielęgnacji",
      "Poważny myśliciel: świetny w szkoleniu i pomysłowy, gdy się nudzi",
    ],
  },
  "bichon-frise": {
    originalPurpose:
      "Bichony wywodzą się z małych psów wodnych znad Morza Śródziemnego, a od wieków były trzymane jako towarzysze w południowej Europie.",
    healthConsiderations: h(
      "Zęby, skóra i rzepki to zwykle to, na co się patrzy u małej rasy o jasnej sierści: pielęgnacja zębów to rutyna, a alergie skórne często się zdarzają. Krótka, regularna rutyna pielęgnacyjna ma znaczenie. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Trudno by ci było nadążyć ze szczotkowaniem i profesjonalnym strzyżeniem co sześć do ośmiu tygodni",
      "Pies zostawałby sam na długi dzień pracy, przez większość dni",
      "Chcesz psa, który dobrze znosi pozostawienie samemu sobie",
    ],
    keyTradeoffs: [
      "Pogodny, przyjazny i mało się liniejący, z sierścią, która nigdy nie przestaje wymagać uwagi",
      "Najszczęśliwszy tam, gdzie jesteś ty, a najmniej – gdy wychodzisz",
    ],
  },
  maltese: {
    originalPurpose:
      "Maltańczyk to jedna z najstarszych europejskich ras miniaturowych, od wieków trzymana jako pies na kolana i ceniona za długą białą sierść oraz oddanie swojemu człowiekowi.",
    healthConsiderations: h(
      "Zęby, rzepki i przebarwienia od łez często zdarzają się u małych psów o białej sierści, a delikatna sierść szybko się plącze. Malutki pies męczy się i marznie też szybciej, niż myślisz. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Codzienne szczotkowanie nie mieści się w twoim rytmie dnia",
      "Chcesz psa, który milczy, gdy zadzwoni dzwonek",
      "Pies zostawałby sam na długie godziny",
    ],
    keyTradeoffs: [
      "Malutki, łagodny i bardzo lojalny, z szczekaniem większym niż on sam",
      "Sierść wygląda na bezwysiłkową, a wymaga codziennego wysiłku",
    ],
  },
  havanese: {
    originalPurpose:
      "Hawańczyk to narodowy pies Kuby, potomek małych psów typu bichon, które trafiły na wyspę i zostały towarzyszami w zamożnych domach.",
    healthConsiderations: h(
      "Rzepki, oczy i biodra to zwykle to, o co się pyta u małej, długowiecznej rasy, a jedwabista sierść plącze się bez regularnego szczotkowania. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Pies zostawałby sam przez większość dnia pracy",
      "Nie masz czasu na regularne szczotkowanie",
      "Chcesz psa, który spokojnie towarzyszy w tle, gdy ty zajmujesz się swoimi sprawami",
    ],
    keyTradeoffs: [
      "Towarzyski, szybko się uczy i jest pogodnym kompanem – a naprawdę chce twojego towarzystwa cały dzień",
      "Lekki na smyczy i łatwy do noszenia, z sierścią, która potrzebuje prawdziwej rutyny",
    ],
  },
  "italian-greyhound": {
    originalPurpose:
      "Chart włoski to miniaturowy chart, od wieków trzymany jako towarzysz i szczególnie popularny na dworach renesansowych Włoch.",
    healthConsiderations: h(
      "Łapy są bardzo cienkie, więc zapytaj weterynarza, jak bezpiecznie podchodzić do skoków i ostrej zabawy, i pomyśl o schodach oraz kanapach. Zęby wymagają regularnej troski, a cienka sierść oznacza porządne ubranka na chłodne dni. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Masz małe dzieci, które chętnie podnosiłyby psa albo brutalnie się z nim bawiły",
      "Chcesz psa, który spokojnie znosi zimny, mokry spacer",
      "Pies zostawałby sam przez długie dni",
    ],
    keyTradeoffs: [
      "Mały, cichy i słodko czuły, a bardziej delikatny, niż wygląda",
      "Kocha kolana i koc, a pogoń przez pole równie mocno",
    ],
  },
  pug: {
    originalPurpose:
      "Mopsy pochodzą z Chin, gdzie małe psy o spłaszczonym pysku trzymali cesarze, a później dotarły do Europy z holenderskimi kupcami i stały się pieskami na kolana w wielu domach królewskich.",
    healthConsiderations: h(
      "Psy o spłaszczonym pysku często mają kłopoty z oddychaniem i źle znoszą upał – ryzyko przegrzania to jedna z kwestii dobrostanu, które podnosi British Veterinary Association – a oczy, fałdy skóry i waga wymagają regularnej uwagi. Jeśli mimo to się zdecydujesz, wybierz szczenię z otwartymi nozdrzami i dłuższym pyskiem, odłóż na ubezpieczenie oraz przeczytaj profil rasy i zapytaj weterynarza.",
    ),
    poorMatchFor: [
      "Twoje lata są upalne i nie masz chłodnego pokoju dla psa",
      "Niespodziewany rachunek u weterynarza na kilka tysięcy euro mocno by cię obciążył",
      "Chcesz psa, który będzie z tobą biegał albo chodził po górach",
    ],
    keyTradeoffs: [
      "Zabawny, czuły i zadowolony z krótkich spacerów, często z prawdziwymi kłopotami z oddychaniem i upałem",
      "Spłaszczony pyszczek, który podbija każde serce, stoi też za większością problemów zdrowotnych",
    ],
  },
  "shih-tzu": {
    originalPurpose:
      "Shih tzu hodowano jako towarzyszy dla chińskiego dworu cesarskiego, z tybetańskimi korzeniami, a nazwa oznacza „lwi pies”. Od bardzo dawna są pieskami na kolana.",
    healthConsiderations: h(
      "To rasa o spłaszczonym pysku, więc oddychanie i upał wymagają uwagi – ryzyko przegrzania to jedna z kwestii dobrostanu, które podnosi British Veterinary Association – a duże oczy, uszy i skóra pod sierścią wymagają regularnych kontroli. Długa sierść szybko się filcuje, dlatego wielu opiekunów wybiera krótkie strzyżenie. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Regularna pielęgnacja albo krótkie strzyżenie co kilka tygodni nie mieszczą się w twoim rytmie dnia",
      "Mieszkasz tam, gdzie jest gorąco i nie ma chłodnego kąta",
      "Chcesz psa, którego szybko i łatwo nauczyć czystości",
    ],
    keyTradeoffs: [
      "Pogodny, kochający ludzi piesek na kolana, z sierścią i pyszczkiem, które oba wymagają codziennej troski",
      "Uparta żyłka pod puszystą sierścią: najlepiej działa cierpliwe szkolenie na smakołykach",
    ],
  },
  "golden-retriever": {
    originalPurpose:
      "Golden retrievery powstały w szkockich Highlands w XIX wieku, by aportować postrzelone ptaki z trudnego terenu i zimnej wody, a delikatny chwyt i chęć zadowolenia człowieka wzięły się z tej pracy.",
    healthConsiderations: h(
      "Biodra, łokcie, oczy i serce to zwykle to, o co się pyta, a nowotwory często się w tej rasie zdarzają – to jeden z powodów, dla których warto poczekać na dobrego hodowcę. Sierść i uszy wymagają regularnej pielęgnacji, a waga ma znaczenie. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Chcesz psa, który jest zawsze czysty i mało się linieje",
      "Pies zostawałby sam w domu przez cały dzień pracy, przez większość dni",
      "Chcesz psa stróżującego",
    ],
    keyTradeoffs: [
      "Przyjazny wobec niemal wszystkich i chętny do zadowalania, co daje wspaniałe psy rodzinne i kiepskich stróży",
      "Łatwy w szkoleniu i zawsze chętny do noszenia czegoś w pysku, więc chwytanie trzeba łagodnie prowadzić",
    ],
  },
  "boston-terrier": {
    originalPurpose:
      "Boston terrier powstał w Bostonie pod koniec XIX wieku z krzyżówek angielskich buldogów i terierów i stał się jedną z pierwszych amerykańskich ras towarzyszących.",
    healthConsiderations: h(
      "To rasa krótkonosa, więc oddychanie, upał i oczy wymagają uwagi – ryzyko przegrzania to jedna z kwestii dobrostanu, które podnosi British Veterinary Association – a wiele miotów potrzebuje pomocy przy porodzie. Warto też zapytać o rzepki i alergie skórne. Jeśli to możliwe, wybierz szczenię z otwartymi nozdrzami i dłuższym pyskiem oraz przeczytaj profil rasy i zapytaj weterynarza.",
    ),
    poorMatchFor: [
      "Latem w domu robi się bardzo gorąco i nie umiesz ochłodzić psa",
      "Wolisz nie dzielić sypialni z chrapaniem",
      "Szukasz towarzysza do biegania albo górskich wypraw w upale",
    ],
    keyTradeoffs: [
      "Żywy, przyjazny i schludny, z krótkim nosem, który ogranicza, ile upału i ruchu zniesie",
      "Zabawny i błazenkowaty, a nie tak wytrzymały, jak sugeruje jego skoczny charakter",
    ],
  },
  papillon: {
    originalPurpose:
      "Papillony to miniaturowe spaniele z kontynentalnej Europy, nazwane od uszu w kształcie motyla, a na wielu starych obrazach widnieją jako towarzysze rodzin szlacheckich.",
    healthConsiderations: h(
      "To mała, często długowieczna rasa, a rzepki, zęby i oczy to zwykle to, o co się pyta. Lekka budowa sprawia, że skoki z mebli warto ograniczać. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Chcesz psa, który milczy przy drzwiach lub oknie",
      "Pies zostawałby sam przez długie dni",
      "Wolisz nie ćwiczyć regularnie, by zająć żywy umysł",
    ],
    keyTradeoffs: [
      "Bystry, łatwy w szkoleniu i żywy jak na swój rozmiar, a szybki do szczekania na każdy dźwięk",
      "Na tyle mały, by go nosić, i na tyle mądry, by się nudzić, jeśli nie dasz mu zajęcia",
    ],
  },
  "lhasa-apso": {
    originalPurpose:
      "Lhasa apso pochodzi z Tybetu, gdzie małe psy pełniły rolę wartowników w domach i klasztorach – ciche przez większość dnia i szybkie do bicia na alarm.",
    healthConsiderations: h(
      "Oczy, skóra oraz uszy i łapy pod długą sierścią wymagają regularnych kontroli, a sierść szybko się plącze bez szczotkowania, dlatego wielu opiekunów wybiera krótkie strzyżenie. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Szczekanie na każde pukanie i hałas doprowadziłoby ciebie lub sąsiadów do szału",
      "Nie nadążałbyś ze szczotkowaniem",
      "Chcesz psa, który uwielbia obcych",
    ],
    keyTradeoffs: [
      "Dostojny, oddany mały stróż, z opiniami o gościach",
      "Niezależny i czasem uparty: nagrody i cierpliwość wygrywają z powtarzaniem",
    ],
  },
  "miniature-schnauzer": {
    originalPurpose:
      "Sznaucer miniaturowy powstał w Niemczech pod koniec XIX wieku z mniejszych sznaucerów jako pies gospodarski i łowca szczurów, co tłumaczy czujny, żywy charakter ze szczekaniem na pierwszym miejscu.",
    healthConsiderations: h(
      "O oczy i kamienie moczowe często się w tej rasie pyta, a tłuste smakołyki mogą obciążać trzustkę, więc prosta dieta i stała waga mają znaczenie. Szorstka sierść wymaga regularnej pielęgnacji. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Chcesz cichego psa, który nie reaguje na wchodzenie i wychodzenie sąsiadów",
      "Regularna pielęgnacja i trymowanie nie mieszczą się w twoim rytmie dnia",
      "Wolisz nie zajmować się szczekaniem małego psa",
    ],
    keyTradeoffs: [
      "Krzepki, bystry i mało się liniejący, ze szczekaniem, które przychodzi przed dzwonkiem",
      "Świetnie się uczy, a w sercu jest terierem: nie wstydzi się własnego zdania",
    ],
  },
  labradoodle: {
    originalPurpose:
      "Labradoodle to krzyżówka labradora z pudlem, po raz pierwszy wyhodowana w Australii pod koniec lat 80., by połączyć charakter psa przewodnika z sierścią mniej się liniejącą. To krzyżówka, a nie uznana rasa, a mioty bywają różne.",
    healthConsiderations: h(
      "Mieszaniec nie jest automatycznie zdrowszy: labradoodle może odziedziczyć cechy po obu stronach, więc warto pytać o biodra, łokcie, oczy, uszy i skórę. Sierść bywa bardzo różna, a wiele wymaga regularnego szczotkowania i strzyżenia. Zapytaj hodowcę, jakie badania zdrowotne mieli oboje rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Potrzebujesz gwarantowanie mało liniejącej lub przyjaznej alergikom sierści",
      "Trudno by ci było regularnie pielęgnować kręconą sierść",
      "Chcesz psa, którego łatwo przewidzieć z opisu rasy",
    ],
    keyTradeoffs: [
      "Przyjazny, bystry i często łatwy w życiu, a każdy miot jest trochę inny",
      "Skacze jak labrador i myśli jak pudel: energia, która potrzebuje codziennego ujścia",
    ],
  },
  cavapoo: {
    originalPurpose:
      "Cavapoo to krzyżówka cavaliera king charles spaniela z pudlem, popularna jako mały, przytulny towarzysz od początku XXI wieku. To krzyżówka, a nie uznana rasa, a mioty bywają różne.",
    healthConsiderations: h(
      "Cavapoo może odziedziczyć cechy po obu stronach, więc zapytaj, jakie badania zdrowotne mieli oboje rodzice – warto pytać o serce, oczy, rzepki i sierść. Sierść filcuje się bez regularnego szczotkowania. Przeczytaj profil rasy i zapytaj weterynarza.",
    ),
    poorMatchFor: [
      "Pies zostawałby sam przez cały dzień pracy",
      "Chcesz psa, którego typ sierści i wielkość da się przewidzieć",
      "Wolisz zrezygnować z regularnej pielęgnacji",
    ],
    keyTradeoffs: [
      "Czuły i towarzyski, często bardzo spragniony towarzystwa – czasem zbyt, by zostawać sam",
      "Słodki i bystry, z sierścią, która potrzebuje prawdziwej rutyny",
    ],
  },
  "yorkshire-terrier": {
    originalPurpose:
      "Yorkshire terriery stworzyli w XIX wieku robotnicy fabryk w Yorkshire i Lancashire do łapania szczurów. Stąd daleko do pieska na kolana z jedwabistą sierścią, ale terier wciąż w nim siedzi.",
    healthConsiderations: h(
      "Rzepki, zęby i tchawica wrażliwa na obrożę to zwykle to, o co się pyta u małych psów, dlatego wielu opiekunów używa szelek. Delikatna sierść wymaga regularnego szczotkowania albo strzyżenia. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Chcesz psa, który zostawia inne psy w spokoju, bez względu na ich rozmiar",
      "Wolisz nie szczotkować ani nie strzyc regularnie",
      "Chcesz cichego psa, którego nie kusi szczekanie",
    ],
    keyTradeoffs: [
      "Mały pies z nastawieniem dużego: odważny, bystry i pewny siebie",
      "Jedwabisty, mało się liniejący i terier na cały etat",
    ],
  },
  "siberian-husky": {
    originalPurpose:
      "Husky wyhodował lud Czukczów z północno-wschodniej Syberii jako psy zaprzęgowe, zbudowane do ciągnięcia lekkich ładunków na duże odległości w siarczystym mrozie, i do dziś uwielbiają biegać.",
    healthConsiderations: h(
      "To dość wytrzymała rasa; o oczy i biodra zwykle się pyta, a gęsta sierść sprawia, że upał to realny kłopot w ciepłej pogodzie. Linieją też intensywnie dwa razy w roku. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Chcesz psa, który za każdym razem wraca ze spaceru bez smyczy",
      "Twój dom jest gorący albo w twoich dniach mało czasu na bieganie",
      "Chcesz cichego psa, którego łatwo utrzymać w mieszkaniu",
    ],
    keyTradeoffs: [
      "Przyjazny, efektowny i pełen wytrzymałości, a przy tym prawdziwy mistrz ucieczek, który wyje zamiast szczekać",
      "Kocha biegać z tobą i potrzebuje tego dużo, niezależnie od pogody",
    ],
  },
  "pembroke-welsh-corgi": {
    originalPurpose:
      "Pembroke welsh corgi pochodzą z Pembrokeshire w Walii, gdzie zaganiały bydło, podgryzając pięty i unikając kopnięć, a ta niska, szybka, władcza żyłka nie zniknęła.",
    healthConsiderations: h(
      "Długi grzbiet i krótkie łapy sprawiają, że waga i skakanie zasługują na uwagę, a o biodra i oczy zwykle się pyta. Linieją mocno, przez cały rok. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Schody, skakanie i przyrost wagi źle się mają do długiego grzbietu",
      "Chcesz psa, który zostawia w spokoju kostki i dzieci",
      "Nie chcesz psiej sierści na wszystkim",
    ],
    keyTradeoffs: [
      "Bystry, pogodny i twardszy, niż wygląda, a pies pasterski, który może próbować zaganiać ciebie i dzieci",
      "Uwielbia jedzenie i zabawy, a nadmiar kilogramów obciąża ten długi grzbiet",
    ],
  },
  "shiba-inu": {
    originalPurpose:
      "Shiba inu to mała japońska rasa typu szpic, pierwotnie używana do polowania na ptaki i drobną zwierzynę w górach, i wciąż ma dumny, niezależny, kocie usposobienie.",
    healthConsiderations: h(
      "Alergie, oczy, rzepki i biodra to zwykle to, o co się pyta w tej rasie, a linieją intensywnie dwa razy w roku. Zapytaj hodowcę, jakie badania zdrowotne mieli rodzice, i przeczytaj profil rasy.",
    ),
    poorMatchFor: [
      "Chcesz psa, który przychodzi na zawołanie i może biegać bez smyczy",
      "Chcesz psa, który uwielbia, gdy dotyka go każdy",
      "Wolisz nie poświęcać czasu na cierpliwe szkolenie oparte na nagrodach",
    ],
    keyTradeoffs: [
      "Czysty, dostojny i cicho czuły, z własną wolą",
      "Niezależny do granic uporu: szkolenie to rozmowa, nie rozkaz",
    ],
  },
};
