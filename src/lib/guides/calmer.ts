import { breeds, type Breed } from "@/data/breeds";
import type { Locale } from "@/i18n";
import {
  APARTMENT_GUIDE,
  FIRST_TIME_GUIDE,
  type GuideCopy,
  type LifestyleGuideConfig,
} from "./lifestyle";

/**
 * "A calmer companion" — a guide for people who want a kind, steady dog for
 * daily walks. Nothing here scores or ranks: the shortlist is editorial, picked
 * from breeds already in the library for calm energy, easy training, low
 * barking and modest exercise needs, then read against each breed's health
 * picture. Flat-faced breeds are deliberately left off (see the health section).
 */

type Section = { title: string; paragraphs: [string, string] };

type Locale9 = {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  howChosenTitle: string;
  howChosen: [string, string, string];
  listTitle: string;
  listIntro: string;
  tradeoffNote: string;
  sections: [Section, Section, Section, Section, Section];
  reasons: Record<string, string>;
  levelLabels: string[];
  quizTitle: string;
  quizBody: string;
  quizCta: string;
  compareCta: string;
  sourcesNote: { text: string; linkLabel: string };
};

/** The seven breeds, in reading order. All exist in the published library. */
const SHORTLIST_IDS = [
  "cavalier-king-charles-spaniel",
  "whippet",
  "greyhound",
  "maltese",
  "havanese",
  "bichon-frise",
  "italian-greyhound",
] as const;

const CONTENT: Record<Locale, Locale9> = {
  en: {
    seoTitle: "A calmer companion, for daily walks",
    seoDescription:
      "A kind, steady dog for daily walks — not sport, not status. What to look at in size, training and health, and seven breeds worth meeting.",
    eyebrow: "Choosing a dog",
    h1: "A calmer companion: a kind, steady dog for daily walks",
    intro:
      "You don't need a dog that runs marathons or turns heads. You'd like someone steady to walk beside every day, and a home that stays quiet and easy. That's a perfectly good thing to want — and it's more specific than 'a small dog'. Here's what to look at, and the seven breeds that came out best, each with the catch we think you should hear before you fall for them.",
    howChosenTitle: "How we chose",
    howChosen: [
      "We started from the same trait data the matching engine uses, and looked for calm energy, easy training, low barking and moderate exercise needs — the traits that make everyday life gentle.",
      "Then we read each breed against its health picture. A calm dog with a heavy vet bill, or a short and uncomfortable life, won't give you a calm life.",
      "Flat-faced breeds (French bulldogs, pugs, English bulldogs, Boston terriers, shih tzus) often score well for calm and size. We've left them off on purpose — see the health section.",
    ],
    listTitle: "Seven breeds worth meeting",
    listIntro:
      "Each one is steady on a lead and settled at home. None is perfect, and every card says what to expect on the harder days.",
    tradeoffNote:
      "Whichever you're drawn to, meet the actual dog — and, with a puppy, the parents. A calm breed still produces the occasional lively individual, and the parents' temperament tells you more than any list.",
    sections: [
      {
        title: "Size: 'not too big' is about handling, not looks",
        paragraphs: [
          "What matters is whether you can hold the lead on a slippery pavement, and lift your dog into the car or onto the vet's table if you have to. A small dog is easy to handle in almost every way; a medium, well-trained dog is fine too. Once a dog gets bigger, its manners need to be really good.",
          "Very small dogs bring their own worries: they're easier to trip over and to hurt, and they get cold quickly. A medium, sturdy dog is often the steadier companion.",
        ],
      },
      {
        title: "Trainability: what 'easy' really means",
        paragraphs: [
          "An easy dog wants to work things out with you: it learns a cue in a handful of repeats and settles afterwards. That's trainability, and it's separate from energy. A calm dog that ignores you is not an easy one.",
          "Even quick learners need a few minutes of practice every day. The reward is a dog that walks nicely beside you, comes when called and doesn't turn every doorbell into an event.",
        ],
      },
      {
        title: "Street manners: the part you'll feel every day",
        paragraphs: [
          "Pulling on the lead, barking at other dogs and lunging at bikes wear you down far faster than a long walk does. Look for breeds that bark little and take strangers calmly, and start lead training in the first week — one short, quiet lesson is enough.",
          "Sighthounds such as whippets and greyhounds are gentle and quiet, but they'll chase whatever runs. Keep them on a lead near traffic or wildlife, and use a fenced space for a proper run.",
        ],
      },
      {
        title: "Health burdens worth avoiding",
        paragraphs: [
          "Flat-faced dogs can struggle in warm weather — heat risk is one of the welfare concerns the British Veterinary Association raises — and breathing trouble is commonly seen in these breeds, which is why they're not on our list even where the engine likes them. Ask what a breed is commonly known for: heart trouble in some breeds such as Cavaliers, back trouble in long-backed dogs, delicate legs in very fine-boned breeds. Read the breed profile, then ask a vet — this is general guidance, not a vet.",
          "A good breeder will show you health-test results for both parents. If they can't or won't, walk away — however sweet the puppy. And think about insurance early: it costs far less than the first bill you didn't plan for.",
        ],
      },
      {
        title: "Small is not the same as easy",
        paragraphs: [
          "Toy breeds are often the most dependent: many struggle to be left, bark at every sound and need regular grooming. They're also fragile in a busy house or on a staircase.",
          "So ask yourself three things: how long will the dog be alone, how much brushing will you really do, and how steady are you on your feet? Answer honestly and the shortlist gets shorter — in a good way.",
        ],
      },
    ],
    reasons: {
      "cavalier-king-charles-spaniel":
        "Gentle, affectionate and happy with an easy walk — heart problems are commonly seen in the breed, and long days alone are hard on them. Read the breed profile and ask a vet what heart checks make sense; general guidance, not a vet.",
      whippet:
        "Quiet, clean and calm indoors, with a couple of proper sprints a week — but the chase instinct is real off the lead, and they feel the cold.",
      greyhound:
        "A gentle sofa dog that only needs short walks and a safe place to run — but it's a big dog, and it will chase anything small and fast.",
      maltese:
        "Tiny, gentle and calm indoors — but it's quick to bark at every sound, the coat needs brushing most days, and long days alone are hard on it.",
      havanese:
        "Cheerful, sociable and quick to learn — but it wants company nearly all day, and the coat needs brushing most days.",
      "bichon-frise":
        "Cheerful and low-shedding, lovely with visitors — but the grooming is a real commitment, and long days alone are hard.",
      "italian-greyhound":
        "Small, quiet and affectionate — but the legs are very fine, so ask a vet how to keep jumping and rough play safe, and read the breed profile; it also feels the cold. General guidance, not a vet.",
    },
    levelLabels: ["Very low", "Low", "Moderate", "High", "Very high"],
    quizTitle: "The right dog is the one that fits your days",
    quizBody:
      "A shortlist is a place to start. The Find My Dog quiz takes your home, your week and what you'd rather not deal with, and shows you the reasoning behind every score — so you can judge it yourself.",
    quizCta: "Find My Dog",
    compareCta: "Compare breeds side by side",
    sourcesNote: { text: "Health notes on this page are general guidance, not a vet. For breed health information, see The Kennel Club (UK) and RVC VetCompass, and for heat risk the British Veterinary Association — all listed, with the date we last checked them, on our sources page. For your own dog, your vet knows best.", linkLabel: "See our sources" },
  },
  no: {
    seoTitle: "En roligere følgesvenn til daglige turer",
    seoDescription:
      "En snill, stødig hund til daglige turer – ikke sport, ikke status. Hva du bør se på ved størrelse, trening og helse, og sju raser verdt å møte.",
    eyebrow: "Velge hund",
    h1: "En roligere følgesvenn: en snill, stødig hund til daglige turer",
    intro:
      "Du trenger ikke en hund som løper maraton eller får folk til å snu seg. Du vil ha noen stødige å gå ved siden av hver dag, og et hjem som er stille og enkelt. Det er et helt fint ønske – og mer presist enn «en liten hund». Her er det du bør se på, og de sju rasene som kom best ut, hver med det du bør vite før du forelsker deg.",
    howChosenTitle: "Slik valgte vi",
    howChosen: [
      "Vi startet med de samme egenskapsdataene som matchemotoren bruker, og lette etter rolig energi, lett trening, lite bjeffing og moderat mosjonsbehov – egenskapene som gjør hverdagen mild.",
      "Så leste vi hver rase opp mot helsebildet. En rolig hund med tung veterinærregning eller et kort, ubehagelig liv gir deg ikke en rolig hverdag.",
      "Flatnesete raser (fransk bulldogg, mops, engelsk bulldogg, bostonterrier, shih tzu) scorer ofte høyt på ro og størrelse. Vi har bevisst latt dem stå utenfor – se avsnittet om helse.",
    ],
    listTitle: "Sju raser verdt å møte",
    listIntro:
      "Alle er stødige i bånd og rolige hjemme. Ingen er perfekte, og hvert kort forteller hva du kan vente deg på de tyngre dagene.",
    tradeoffNote:
      "Uansett hva du faller for: møt den faktiske hunden, og for valper foreldrene. En rolig rase gir fortsatt av og til et livlig individ, og foreldrenes temperament sier mer enn noen liste.",
    sections: [
      {
        title: "Størrelse: «ikke for stor» handler om håndtering, ikke utseende",
        paragraphs: [
          "Det som teller er om du kan holde i båndet på glatt fortau, og om du kan løfte hunden inn i bilen eller opp på veterinærens bord hvis du må. En liten hund er lett å håndtere på nesten alle måter; en middels stor, godt trent hund går også fint. Blir hunden større, må oppførselen være svært god.",
          "Veldig små hunder har sine egne bekymringer: de er lettere å snuble i og skade, og de fryser fort. En middels stor, solid hund er ofte den tryggere følgesvennen.",
        ],
      },
      {
        title: "Trenbarhet: hva «lett» egentlig betyr",
        paragraphs: [
          "En lett hund er en som vil finne ut av ting sammen med deg: den lærer et signal på noen få repetisjoner og roer seg etterpå. Det er trenbarhet, og det er noe annet enn energi. En rolig hund som ignorerer deg er ikke lett.",
          "Selv raske lærere trenger noen minutter øving hver dag. Belønningen er en hund som går pent ved siden av deg, kommer når du roper og ikke gjør hver dørklokke til en begivenhet.",
        ],
      },
      {
        title: "Gateoppførsel: det du merker hver dag",
        paragraphs: [
          "Trekking i båndet, bjeffing på andre hunder og utfall mot sykler sliter mye fortere på deg enn en lang tur. Se etter raser som bjeffer lite og tar fremmede rolig, og øv båndtrening fra første uke – en kort, stille økt holder.",
          "Mynder som whippet og greyhound er milde og stille, men de jager alt som løper. Hold dem i bånd der det er trafikk eller vilt, og bruk et inngjerdet område når de skal få løpe skikkelig.",
        ],
      },
      {
        title: "Helseplager det er verdt å unngå",
        paragraphs: [
          "Flatnesete hunder kan ha det tungt i varmen – varmerisiko er blant velferdshensynene British Veterinary Association tar opp – og pustebesvær ses ofte hos disse rasene, derfor har vi ikke tatt dem med, selv der motoren liker dem. Spør hva rasen er vanlig kjent for: hjerteproblemer hos enkelte raser som cavalier, ryggproblemer hos langrygga hunder, sarte ben hos de tynnbeinte rasene. Les rasens profil, og spør en veterinær – dette er generell veiledning, ikke veterinærråd.",
          "En god oppdretter viser deg helseresultater for begge foreldrene. Kan eller vil de ikke det, la være – uansett hvor søt valpen er. Vurder forsikring tidlig: det koster langt mindre enn den første regningen du ikke hadde planlagt.",
        ],
      },
      {
        title: "Liten betyr ikke lett",
        paragraphs: [
          "Toy-raser er ofte de mest avhengige: mange takler dårlig å bli alene, bjeffer på hver lyd og trenger jevnlig stell. De er også sårbare i et travelt hjem eller ved en trapp.",
          "Tenk derfor på tre spørsmål: hvor lenge er hunden alene, hvor mye børsting kommer du faktisk til å gjøre, og hvor trygg er du på beina? Svar ærlig, så blir listen kortere – på en god måte.",
        ],
      },
    ],
    reasons: {
      "cavalier-king-charles-spaniel":
        "Mild, kjærlig og fornøyd med en rolig tur – hjerteproblemer ses ofte i rasen, og lange dager alene er tunge. Les rasens profil og spør en veterinær hvilke hjertesjekker som gir mening; generell veiledning, ikke veterinærråd.",
      whippet:
        "Stille, ren og rolig inne, med et par skikkelige spurter i uka – men jaktlysten er reell uten bånd, og de fryser lett.",
      greyhound:
        "En mild sofahund som bare trenger korte turer og et trygt sted å løpe – men den er stor, og den jager alt som er lite og raskt.",
      maltese:
        "Liten, mild og rolig inne – men den bjeffer raskt på hver lyd, pelsen må børstes de fleste dager, og lange dager alene er tunge.",
      havanese:
        "Glad, sosial og rask til å lære – men den vil ha selskap nesten hele dagen, og pelsen må børstes de fleste dager.",
      "bichon-frise":
        "Blid og lite røytende, fin med gjester – men pelsstellet er stort, og lange dager alene er vanskelig.",
      "italian-greyhound":
        "Liten, stille og kjærlig – men beina er veldig tynne, så spør en veterinær hvordan hopp og røff lek kan holdes trygt, og les rasens profil; den fryser også lett. Generell veiledning, ikke veterinærråd.",
    },
    levelLabels: ["Svært lavt", "Lavt", "Middels", "Høyt", "Svært høyt"],
    quizTitle: "Den rette hunden er den som passer dagene dine",
    quizBody:
      "En kortliste er et sted å begynne. Finn min hund-quizen tar hjemmet ditt, uken din og det du helst slipper å bry deg med, og viser deg begrunnelsen bak hver score – så du kan vurdere den selv.",
    quizCta: "Finn min hund",
    compareCta: "Sammenlign raser side ved side",
    sourcesNote: { text: "Helsenotatene på denne siden er generell veiledning, ikke veterinærråd. For rasehelse, se The Kennel Club (UK) og RVC VetCompass, og for varmerisiko British Veterinary Association – alle oppført, med datoen vi sist sjekket dem, på kildesiden vår. For din egen hund vet veterinæren best.", linkLabel: "Se kildene våre" },
  },
  pl: {
    seoTitle: "Spokojny towarzysz na codzienne spacery",
    seoDescription:
      "Łagodny, stały pies na codzienne spacery – bez sportu i prestiżu. Na co patrzeć przy rozmiarze, szkoleniu i zdrowiu oraz siedem ras wartych poznania.",
    eyebrow: "Wybór psa",
    h1: "Spokojny towarzysz: łagodny, stały pies na codzienne spacery",
    intro:
      "Nie potrzebujesz psa, który przebiegnie maraton ani przyciągnie spojrzenia. Chcesz kogoś pewnego u swojego boku każdego dnia i domu, w którym jest cicho i łatwo. To zupełnie dobre życzenie – i bardziej konkretne niż „mały pies”. Oto na co warto patrzeć oraz siedem ras, które wypadły najlepiej – każda z tym, co warto usłyszeć, zanim się zakochasz.",
    howChosenTitle: "Jak wybieraliśmy",
    howChosen: [
      "Zaczęliśmy od tych samych danych o cechach, których używa silnik dopasowania, i szukaliśmy spokojnej energii, łatwego szkolenia, rzadkiego szczekania i umiarkowanych potrzeb ruchowych – cech, dzięki którym codzienność jest łagodna.",
      "Potem sprawdziliśmy każdą rasę pod kątem zdrowia. Spokojny pies z wysokimi rachunkami u weterynarza albo krótkim, niewygodnym życiem nie daje spokojnej codzienności.",
      "Rasy o spłaszczonym pysku (buldog francuski, mops, buldog angielski, boston terrier, shih tzu) często dostają wysokie noty za spokój i rozmiar. Celowo je pominęliśmy – zobacz część o zdrowiu.",
    ],
    listTitle: "Siedem ras wartych poznania",
    listIntro:
      "Każda jest spokojna na smyczy i w domu. Żadna nie jest idealna, a każda karta mówi, czego się spodziewać w trudniejsze dni.",
    tradeoffNote:
      "Niezależnie od tego, która ci się podoba, poznaj konkretnego psa – a w przypadku szczeniaka także jego rodziców. Spokojna rasa też czasem daje żywiołowego osobnika, a charakter rodziców powie więcej niż jakakolwiek lista.",
    sections: [
      {
        title: "Rozmiar: „nie za duży” dotyczy prowadzenia, nie wyglądu",
        paragraphs: [
          "Liczy się to, czy utrzymasz smycz na śliskim chodniku i czy w razie potrzeby podniesiesz psa do auta albo na stół u weterynarza. Mały pies jest łatwy w prowadzeniu pod prawie każdym względem; średni, dobrze ułożony też sobie poradzi. Przy większym psie maniery muszą być naprawdę dobre.",
          "Bardzo małe psy mają własne kłopoty: łatwiej o nie zahaczyć i je skrzywdzić, a szybko marzną. Średni, solidny pies bywa pewniejszym towarzyszem.",
        ],
      },
      {
        title: "Łatwość szkolenia: co naprawdę znaczy „łatwy”",
        paragraphs: [
          "Łatwy pies chce rozwiązywać sprawy razem z tobą: uczy się komendy po kilku powtórzeniach i potem się wycisza. To właśnie łatwość szkolenia i jest czymś innym niż energia. Spokojny pies, który cię ignoruje, nie jest łatwy.",
          "Nawet szybcy uczniowie potrzebują kilku minut ćwiczeń dziennie. Nagrodą jest pies, który idzie grzecznie przy nodze, wraca na przywołanie i nie robi z każdego dzwonka wydarzenia.",
        ],
      },
      {
        title: "Zachowanie na ulicy: to, co poczujesz każdego dnia",
        paragraphs: [
          "Ciągnięcie na smyczy, szczekanie na inne psy i rzucanie się na rowery męczą dużo szybciej niż długi spacer. Szukaj ras, które rzadko szczekają i spokojnie reagują na obcych, i ćwicz chodzenie na smyczy od pierwszego tygodnia – wystarczy krótka, cicha lekcja.",
          "Charty, jak whippet czy greyhound, są łagodne i ciche, ale gonią wszystko, co ucieka. Trzymaj je na smyczy tam, gdzie jest ruch lub zwierzyna, a na prawdziwy bieg wybieraj ogrodzony teren.",
        ],
      },
      {
        title: "Problemy zdrowotne, których warto unikać",
        paragraphs: [
          "Psy o spłaszczonym pysku mogą źle znosić upał – ryzyko przegrzania to jedna z kwestii dobrostanu, które podnosi British Veterinary Association – a kłopoty z oddychaniem często widuje się u tych ras, dlatego ich nie polecamy, nawet tam, gdzie silnik je lubi. Zapytaj, z czego rasa jest zwykle znana: problemy z sercem u niektórych ras, jak cavalier, problemy z plecami u psów o długim grzbiecie, delikatne łapy u ras o cienkich kościach. Przeczytaj profil rasy i zapytaj weterynarza – to ogólne wskazówki, nie porada weterynaryjna.",
          "Dobry hodowca pokaże wyniki badań zdrowotnych obojga rodziców. Jeśli nie może lub nie chce, odpuść – choćby szczeniak był najsłodszy. Pomyśl też wcześnie o ubezpieczeniu: kosztuje znacznie mniej niż pierwszy nieplanowany rachunek.",
        ],
      },
      {
        title: "Mały nie znaczy łatwy",
        paragraphs: [
          "Rasy miniaturowe bywają najbardziej zależne: wiele z nich źle znosi samotność, szczeka na każdy dźwięk i wymaga regularnej pielęgnacji. Są też kruche w tłocznym domu albo na schodach.",
          "Zadaj więc sobie trzy pytania: jak długo pies będzie sam, ile szczotkowania naprawdę zrobisz i jak pewnie stoisz na nogach? Odpowiedz szczerze, a lista się skróci – na dobre.",
        ],
      },
    ],
    reasons: {
      "cavalier-king-charles-spaniel":
        "Łagodny, czuły i zadowolony ze spokojnego spaceru – problemy z sercem często widuje się w tej rasie, a długie dni w samotności są dla niego trudne. Przeczytaj profil rasy i zapytaj weterynarza, jakie badania serca mają sens; ogólne wskazówki, nie porada weterynaryjna.",
      whippet:
        "Cichy, czysty i spokojny w domu, z kilkoma porządnymi sprintami w tygodniu – ale instynkt pogoni jest prawdziwy bez smyczy, a zimno mu doskwiera.",
      greyhound:
        "Łagodny kanapowiec, któremu wystarczą krótkie spacery i bezpieczne miejsce do biegu – ale to duży pies, który goni wszystko, co małe i szybkie.",
      maltese:
        "Malutki, łagodny i spokojny w domu – ale szybko szczeka na każdy dźwięk, sierść trzeba szczotkować prawie codziennie, a długie dni w samotności są dla niego trudne.",
      havanese:
        "Pogodny, towarzyski i szybko się uczy – ale chce towarzystwa niemal cały dzień, a sierść trzeba szczotkować prawie codziennie.",
      "bichon-frise":
        "Radosny i mało się liniejący, dobrze znosi gości – ale pielęgnacja to duże zobowiązanie, a długie dni w samotności są dla niego trudne.",
      "italian-greyhound":
        "Mały, cichy i czuły – ale łapy ma bardzo cienkie, więc zapytaj weterynarza, jak bezpiecznie podchodzić do skoków i ostrej zabawy, i przeczytaj profil rasy; łatwo też marznie. Ogólne wskazówki, nie porada weterynaryjna.",
    },
    levelLabels: ["Bardzo niski", "Niski", "Umiarkowany", "Wysoki", "Bardzo wysoki"],
    quizTitle: "Dobry pies to taki, który pasuje do twoich dni",
    quizBody:
      "Krótka lista to punkt wyjścia. Quiz „Znajdź mojego psa” bierze pod uwagę twój dom, twój tydzień i to, z czym wolisz nie mieć do czynienia, i pokazuje uzasadnienie każdej oceny – żebyś mógł/mogła ją ocenić samodzielnie.",
    quizCta: "Znajdź mojego psa",
    compareCta: "Porównaj rasy obok siebie",
    sourcesNote: { text: "Uwagi zdrowotne na tej stronie to ogólne wskazówki, nie porada weterynaryjna. Informacje o zdrowiu ras znajdziesz w The Kennel Club (UK) i RVC VetCompass, a o ryzyku przegrzania – w British Veterinary Association; wszystkie są wymienione na stronie źródeł wraz z datą ostatniego sprawdzenia. W sprawie własnego psa najlepiej wie weterynarz.", linkLabel: "Zobacz nasze źródła" },
  },
  dk: {
    seoTitle: "En roligere følgesvend til daglige gåture",
    seoDescription:
      "En venlig, stabil hund til daglige gåture – ikke sport, ikke status. Hvad du skal se på ved størrelse, træning og helbred, og syv racer at møde.",
    eyebrow: "Valg af hund",
    h1: "En roligere følgesvend: en venlig, stabil hund til daglige gåture",
    intro:
      "Du behøver ikke en hund, der løber maraton eller får folk til at vende sig om. Du vil gerne have en stabil ven at gå ved siden af hver dag og et hjem, der er stille og nemt. Det er et helt fint ønske – og mere præcist end »en lille hund«. Her er, hvad du skal se på, og de syv racer, der kom bedst ud – hver med det, du bør vide, før du forelsker dig.",
    howChosenTitle: "Sådan valgte vi",
    howChosen: [
      "Vi tog udgangspunkt i de samme egenskabsdata, som matchmotoren bruger, og ledte efter rolig energi, nem træning, lidt gøen og moderat motionsbehov – de egenskaber, der gør hverdagen mild.",
      "Derefter læste vi hver race op mod sundhedsbilledet. En rolig hund med tunge dyrlægeregninger eller et kort, ubehageligt liv giver dig ikke en rolig hverdag.",
      "Fladnæsede racer (fransk bulldog, mops, engelsk bulldog, bostonterrier, shih tzu) scorer ofte højt på ro og størrelse. Vi har med vilje udeladt dem – se afsnittet om helbred.",
    ],
    listTitle: "Syv racer, der er værd at møde",
    listIntro:
      "Alle er stabile i snor og rolige derhjemme. Ingen er perfekte, og hvert kort fortæller, hvad du kan vente dig på de tungere dage.",
    tradeoffNote:
      "Uanset hvad du bliver draget af: mød den konkrete hund, og ved en hvalp forældrene. En rolig race giver stadig nu og da et livligt individ, og forældrenes temperament fortæller mere end nogen liste.",
    sections: [
      {
        title: "Størrelse: »ikke for stor« handler om håndtering, ikke udseende",
        paragraphs: [
          "Det afgørende er, om du kan holde snoren på et glat fortov, og om du kan løfte hunden ind i bilen eller op på dyrlægens bord, hvis du skal. En lille hund er nem at håndtere på næsten alle måder; en mellemstor, velopdragen hund går også fint. Bliver hunden større, skal manererne være rigtig gode.",
          "Meget små hunde har deres egne bekymringer: de er lettere at falde over og skade, og de fryser hurtigt. En mellemstor, solid hund er ofte den tryggere følgesvend.",
        ],
      },
      {
        title: "Træningsvillighed: hvad »nem« egentlig betyder",
        paragraphs: [
          "En nem hund er en, der gerne vil finde ud af tingene sammen med dig: den lærer et signal på få gentagelser og falder til ro bagefter. Det er træningsvillighed, og det er noget andet end energi. En rolig hund, der ignorerer dig, er ikke nem.",
          "Selv hurtige elever har brug for nogle minutters øvelse hver dag. Belønningen er en hund, der går pænt ved siden af dig, kommer, når du kalder, og ikke gør hver ringeklokke til en begivenhed.",
        ],
      },
      {
        title: "Gadeopførsel: det, du mærker hver dag",
        paragraphs: [
          "Træk i snoren, gøen af andre hunde og udfald mod cykler slider langt hurtigere på dig end en lang tur. Se efter racer, der gøer lidt og tager fremmede roligt, og øv snorgang fra første uge – en kort, stille lektion er nok.",
          "Mynder som whippet og greyhound er milde og stille, men de jagter alt, der løber. Hold dem i snor, hvor der er trafik eller vildt, og brug et indhegnet område, når de skal løbe rigtigt.",
        ],
      },
      {
        title: "Helbredsproblemer, det er værd at undgå",
        paragraphs: [
          "Fladnæsede hunde kan have det svært i varmen – varmerisiko er blandt de velfærdshensyn, British Veterinary Association peger på – og vejrtrækningsproblemer ses ofte hos disse racer, derfor har vi ikke taget dem med, selv hvor motoren kan lide dem. Spørg, hvad racen almindeligvis er kendt for: hjerteproblemer hos nogle racer som cavalier, rygproblemer hos langrygede hunde, sarte ben hos de finbenede racer. Læs racens profil, og spørg en dyrlæge – det her er generel vejledning, ikke dyrlægeråd.",
          "En god opdrætter viser dig helbredsresultater for begge forældre. Kan eller vil de ikke det, så lad være – uanset hvor sød hvalpen er. Overvej forsikring tidligt: det koster langt mindre end den første regning, du ikke havde planlagt.",
        ],
      },
      {
        title: "Lille betyder ikke nem",
        paragraphs: [
          "Toy-racer er ofte de mest afhængige: mange tåler dårligt at blive alene, gøer af hver lyd og skal plejes jævnligt. De er også skrøbelige i et travlt hjem eller ved en trappe.",
          "Tænk derfor på tre spørgsmål: hvor længe er hunden alene, hvor meget børstning vil du faktisk få gjort, og hvor sikker er du på fødderne? Svar ærligt, så bliver listen kortere – på en god måde.",
        ],
      },
    ],
    reasons: {
      "cavalier-king-charles-spaniel":
        "Mild, kærlig og tilfreds med en rolig tur – hjerteproblemer ses ofte i racen, og lange dage alene er hårde. Læs racens profil og spørg en dyrlæge, hvilke hjertetjek der giver mening; generel vejledning, ikke dyrlægeråd.",
      whippet:
        "Stille, ren og rolig indenfor, med et par ordentlige sprint om ugen – men jagtinstinktet er reelt uden snor, og de fryser let.",
      greyhound:
        "En mild sofahund, der kun behøver korte ture og et sikkert sted at løbe – men den er stor, og den jagter alt, der er småt og hurtigt.",
      maltese:
        "Lille, mild og rolig indenfor – men den gøer hurtigt af hver lyd, pelsen skal børstes de fleste dage, og lange dage alene er hårde.",
      havanese:
        "Glad, social og hurtig til at lære – men den vil have selskab næsten hele dagen, og pelsen skal børstes de fleste dage.",
      "bichon-frise":
        "Frisk og lidt fældende, god med gæster – men pelsplejen er stor, og lange dage alene er svære.",
      "italian-greyhound":
        "Lille, stille og kærlig – men benene er meget tynde, så spørg en dyrlæge, hvordan hop og hård leg holdes trygt, og læs racens profil; den fryser også let. Generel vejledning, ikke dyrlægeråd.",
    },
    levelLabels: ["Meget lavt", "Lavt", "Middel", "Højt", "Meget højt"],
    quizTitle: "Den rigtige hund er den, der passer til dine dage",
    quizBody:
      "En kortliste er et sted at begynde. Find min hund-quizzen tager udgangspunkt i dit hjem, din uge og det, du helst vil slippe for, og viser dig begrundelsen bag hver score – så du selv kan vurdere den.",
    quizCta: "Find min hund",
    compareCta: "Sammenlign racer side om side",
    sourcesNote: { text: "Sundhedsnoterne på denne side er generel vejledning, ikke dyrlægeråd. For racesundhed, se The Kennel Club (UK) og RVC VetCompass, og for varmerisiko British Veterinary Association – alle er opført, med datoen vi sidst tjekkede dem, på vores kildeside. For din egen hund ved dyrlægen bedst.", linkLabel: "Se vores kilder" },
  },
  se: {
    seoTitle: "En lugnare följeslagare för dagliga promenader",
    seoDescription:
      "En snäll, stabil hund för dagliga promenader – inte sport, inte status. Vad du ska titta på vid storlek, träning och hälsa, och sju raser att träffa.",
    eyebrow: "Välja hund",
    h1: "En lugnare följeslagare: en snäll, stabil hund för dagliga promenader",
    intro:
      "Du behöver ingen hund som springer maraton eller får folk att vända sig om. Du vill ha någon stadig att gå bredvid varje dag och ett hem som är tyst och enkelt. Det är en alldeles fin önskan – och mer träffande än »en liten hund». Här är vad du bör titta på, och de sju raserna som kom bäst ut – var och en med det du bör veta innan du blir kär.",
    howChosenTitle: "Så valde vi",
    howChosen: [
      "Vi utgick från samma egenskapsdata som matchningsmotorn använder och letade efter lugn energi, lätt träning, lite skällande och måttligt motionsbehov – egenskaperna som gör vardagen mild.",
      "Sedan läste vi varje ras mot hälsobilden. En lugn hund med tunga veterinärräkningar eller ett kort, obehagligt liv ger dig ingen lugn vardag.",
      "Plattnosade raser (fransk bulldogg, mops, engelsk bulldogg, bostonterrier, shih tzu) får ofta höga poäng för lugn och storlek. Vi har medvetet lämnat dem utanför – se avsnittet om hälsa.",
    ],
    listTitle: "Sju raser värda att träffa",
    listIntro:
      "Alla är stadiga i koppel och lugna hemma. Ingen är perfekt, och varje kort berättar vad du kan vänta dig på de tyngre dagarna.",
    tradeoffNote:
      "Vilken du än fastnar för: träffa den faktiska hunden, och vid en valp föräldrarna. En lugn ras ger ändå då och då en livlig individ, och föräldrarnas temperament säger mer än någon lista.",
    sections: [
      {
        title: "Storlek: »inte för stor» handlar om hanterbarhet, inte utseende",
        paragraphs: [
          "Det som räknas är om du kan hålla i kopplet på hal trottoar, och om du kan lyfta in hunden i bilen eller upp på veterinärens bord om det behövs. En liten hund är lätt att hantera på nästan alla sätt; en medelstor, väluppfostrad hund fungerar också fint. Blir hunden större måste uppförandet vara riktigt bra.",
          "Riktigt små hundar har egna bekymmer: de är lättare att snubbla på och skada, och de fryser snabbt. En medelstor, kraftig hund är ofta den tryggare följeslagaren.",
        ],
      },
      {
        title: "Träningsbarhet: vad »lätt» egentligen betyder",
        paragraphs: [
          "En lätt hund vill lösa saker tillsammans med dig: den lär sig en signal på några få repetitioner och lugnar sig efteråt. Det är träningsbarhet, och det är något annat än energi. En lugn hund som ignorerar dig är inte lätt.",
          "Även snabba elever behöver några minuters övning varje dag. Belöningen är en hund som går fint bredvid dig, kommer när du kallar och inte gör varje ringklocka till en händelse.",
        ],
      },
      {
        title: "Gatubeteende: det du märker varje dag",
        paragraphs: [
          "Att dra i kopplet, skälla på andra hundar och kasta sig mot cyklar sliter mycket fortare på dig än en lång promenad. Leta efter raser som skäller lite och tar främlingar lugnt, och öva kopplet från första veckan – en kort, stilla lektion räcker.",
          "Vinthundar som whippet och greyhound är milda och tysta, men de jagar allt som rusar. Ha dem i koppel där det finns trafik eller vilt, och använd ett inhägnat område när de ska springa ordentligt.",
        ],
      },
      {
        title: "Hälsobördor värda att undvika",
        paragraphs: [
          "Plattnosade hundar kan ha det jobbigt i värme – värmerisk är ett av de välfärdsskäl som British Veterinary Association lyfter – och andningsbesvär ses ofta hos de här raserna, därför har vi inte tagit med dem, även där motorn gillar dem. Fråga vad rasen vanligen är känd för: hjärtproblem hos vissa raser som cavalier, ryggproblem hos långryggade hundar, ömtåliga ben hos de tunnbenta raserna. Läs rasens profil och fråga en veterinär – det här är allmän vägledning, inte veterinärråd.",
          "En bra uppfödare visar hälsoresultat för båda föräldrarna. Kan eller vill de inte det, avstå – hur söt valpen än är. Fundera tidigt på försäkring: det kostar långt mindre än den första räkningen du inte hade planerat för.",
        ],
      },
      {
        title: "Liten betyder inte lätt",
        paragraphs: [
          "Toyraser är ofta de mest beroende: många klarar sig dåligt ensamma, skäller åt varje ljud och behöver regelbunden pälsvård. De är också sköra i ett rörigt hem eller vid en trappa.",
          "Tänk därför på tre frågor: hur länge är hunden ensam, hur mycket borstning kommer du faktiskt att göra, och hur säker är du på benen? Svara ärligt, så blir listan kortare – på ett bra sätt.",
        ],
      },
    ],
    reasons: {
      "cavalier-king-charles-spaniel":
        "Mild, tillgiven och nöjd med en lugn promenad – hjärtproblem ses ofta i rasen, och långa dagar ensam är svåra. Läs rasens profil och fråga en veterinär vilka hjärtkontroller som är vettiga; allmän vägledning, inte veterinärråd.",
      whippet:
        "Tyst, ren och lugn inomhus, med ett par ordentliga språng i veckan – men jaktlusten är verklig utan koppel, och den fryser lätt.",
      greyhound:
        "En mild soffhund som bara behöver korta promenader och en trygg plats att springa på – men den är stor, och den jagar allt som är litet och snabbt.",
      maltese:
        "Liten, mild och lugn inomhus – men den skäller snabbt åt varje ljud, pälsen behöver borstas de flesta dagar, och långa dagar ensam är tunga.",
      havanese:
        "Glad, social och snabb att lära – men den vill ha sällskap nästan hela dagen, och pälsen behöver borstas de flesta dagar.",
      "bichon-frise":
        "Glad och lite fällande, fin med gäster – men pälsvården är stor, och långa dagar ensam är svåra.",
      "italian-greyhound":
        "Liten, tyst och tillgiven – men benen är mycket tunna, så fråga en veterinär hur hopp och vild lek kan hållas säkra, och läs rasens profil; den fryser också lätt. Allmän vägledning, inte veterinärråd.",
    },
    levelLabels: ["Mycket lågt", "Lågt", "Måttligt", "Högt", "Mycket högt"],
    quizTitle: "Rätt hund är den som passar dina dagar",
    quizBody:
      "En kortlista är en början. Hitta min hund-quizet utgår från ditt hem, din vecka och det du helst slipper, och visar resonemanget bakom varje poäng – så att du själv kan bedöma det.",
    quizCta: "Hitta min hund",
    compareCta: "Jämför raser sida vid sida",
    sourcesNote: { text: "Hälsonoteringarna på den här sidan är allmän vägledning, inte veterinärråd. För rashälsa, se The Kennel Club (UK) och RVC VetCompass, och för värmerisk British Veterinary Association – alla finns upptagna, med datumet vi senast kontrollerade dem, på vår källsida. För din egen hund vet veterinären bäst.", linkLabel: "Se våra källor" },
  },
  fi: {
    seoTitle: "Rauhallinen kumppani päivittäisille kävelyille",
    seoDescription:
      "Ystävällinen, tasainen koira päivittäisille kävelyille – ei urheilua, ei statusta. Mihin katsoa koossa, koulutuksessa ja terveydessä, sekä seitsemän rotua.",
    eyebrow: "Koiran valinta",
    h1: "Rauhallinen kumppani: ystävällinen, tasainen koira päivittäisille kävelyille",
    intro:
      "Et tarvitse koiraa, joka juoksee maratonin tai saa ihmiset kääntymään katsomaan. Haluat jonkun tasaisen kävelemään vierellesi joka päivä ja kodin, jossa on rauhallista ja helppoa. Se on täysin hyvä toive – ja tarkempi kuin ”pieni koira”. Tässä on, mihin kannattaa katsoa, sekä seitsemän rotua, jotka pärjäsivät parhaiten – kunkin mukana se, mikä kannattaa tietää ennen kuin ihastut.",
    howChosenTitle: "Näin valitsimme",
    howChosen: [
      "Lähdimme samoista ominaisuustiedoista, joita sovitusmoottori käyttää, ja etsimme rauhallista energiaa, helppoa koulutusta, vähäistä haukkumista ja kohtuullista liikunnantarvetta – ominaisuuksia, jotka tekevät arjesta lempeää.",
      "Sitten luimme jokaisen rodun terveystilanteen valossa. Rauhallinen koira, jolla on raskaat eläinlääkärilaskut tai lyhyt, epämukava elämä, ei tuo sinulle rauhallista arkea.",
      "Litteänaamaiset rodut (ranskanbulldoggi, mopsi, englanninbulldoggi, bostoninterrieri, shih tzu) saavat usein korkeat pisteet rauhallisuudesta ja koosta. Jätimme ne tarkoituksella pois – katso terveysosio.",
    ],
    listTitle: "Seitsemän rotua, joihin kannattaa tutustua",
    listIntro:
      "Jokainen on tasainen talutushihnassa ja rauhallinen kotona. Yksikään ei ole täydellinen, ja jokainen kortti kertoo, mitä odottaa raskaampina päivinä.",
    tradeoffNote:
      "Mihin tahansa ihastutkin: tapaa itse koira, ja pennun kohdalla sen vanhemmat. Rauhallisestakin rodusta tulee toisinaan vilkas yksilö, ja vanhempien luonne kertoo enemmän kuin mikään lista.",
    sections: [
      {
        title: "Koko: ”ei liian suuri” tarkoittaa käsiteltävyyttä, ei ulkonäköä",
        paragraphs: [
          "Ratkaisevaa on, pystytkö pitämään hihnasta kiinni liukkaalla jalkakäytävällä ja nostamaan koiran autoon tai eläinlääkärin pöydälle tarvittaessa. Pientä koiraa on helppo käsitellä lähes joka suhteessa; keskikokoinen, hyvin koulutettu koira sopii myös. Jos koira on isompi, käytöksen on oltava todella hyvä.",
          "Aivan pienillä koirilla on omat huolensa: niihin on helpompi kompastua ja ne loukkaantuvat helposti, ja ne palelevat nopeasti. Keskikokoinen, vankka koira on usein turvallisempi kumppani.",
        ],
      },
      {
        title: "Koulutettavuus: mitä ”helppo” oikeasti tarkoittaa",
        paragraphs: [
          "Helppo koira haluaa selvittää asiat kanssasi: se oppii merkin muutamalla toistolla ja rauhoittuu sen jälkeen. Se on koulutettavuutta, ja se on eri asia kuin energia. Rauhallinen koira, joka ei kuuntele sinua, ei ole helppo.",
          "Nopeatkin oppijat tarvitsevat muutaman minuutin harjoittelun päivässä. Palkkiona on koira, joka kävelee siististi vierellä, tulee kutsuttaessa eikä tee jokaisesta ovikellosta tapahtumaa.",
        ],
      },
      {
        title: "Käytös kadulla: se, minkä tunnet joka päivä",
        paragraphs: [
          "Hihnan vetäminen, toisille koirille haukkuminen ja pyöriin syöksyminen kuluttavat sinua paljon nopeammin kuin pitkä kävely. Etsi rotuja, jotka haukkuvat vähän ja suhtautuvat vieraisiin rauhallisesti, ja harjoittele hihnakäytöstä ensimmäisestä viikosta alkaen – lyhyt, hiljainen harjoitus riittää.",
          "Vinttikoirat, kuten whippet ja greyhound, ovat lempeitä ja hiljaisia, mutta ne jahtaavat kaikkea, mikä pakenee. Pidä ne hihnassa liikenteen tai riistan lähellä ja käytä aidattua aluetta, kun ne saavat juosta kunnolla.",
        ],
      },
      {
        title: "Terveysrasitteet, joita kannattaa välttää",
        paragraphs: [
          "Litteänaamaiset koirat voivat kärsiä helteestä – lämpöriski on yksi eläinten hyvinvointiin liittyvistä huolista, jotka British Veterinary Association nostaa esiin – ja hengitysvaikeuksia nähdään näillä roduilla usein, siksi emme ottaneet niitä mukaan, vaikka moottori pitäisi niistä. Kysy, mistä rotu on yleensä tunnettu: sydänongelmat joillakin roduilla, kuten cavalier-spanielilla, selkäongelmat pitkäselkäisillä koirilla, herkät jalat hienokoisilla roduilla. Lue rodun profiili ja kysy eläinlääkäriltä – tämä on yleistä ohjausta, ei eläinlääkärin neuvo.",
          "Hyvä kasvattaja näyttää molempien vanhempien terveystulokset. Jos hän ei voi tai halua, jätä väliin – vaikka pentu olisi kuinka suloinen. Harkitse vakuutusta ajoissa: se maksaa paljon vähemmän kuin ensimmäinen suunnittelematon lasku.",
        ],
      },
      {
        title: "Pieni ei tarkoita helppoa",
        paragraphs: [
          "Pienet lelurodut ovat usein riippuvaisimpia: monet sietävät huonosti yksinoloa, haukkuvat jokaiselle äänelle ja tarvitsevat säännöllistä hoitoa. Ne ovat myös hauraita vilkkaassa kodissa tai portaiden kohdalla.",
          "Mieti siis kolmea kysymystä: kuinka pitkään koira on yksin, kuinka paljon harjaisit todella ja kuinka varmasti seisot jaloillasi? Vastaa rehellisesti, niin lista lyhenee – hyvällä tavalla.",
        ],
      },
    ],
    reasons: {
      "cavalier-king-charles-spaniel":
        "Lempeä, kiintyvä ja tyytyväinen rauhalliseen kävelyyn – sydänongelmia nähdään rodussa usein, ja pitkät päivät yksin ovat sille raskaita. Lue rodun profiili ja kysy eläinlääkäriltä, mitkä sydäntutkimukset ovat järkeviä; yleistä ohjausta, ei eläinlääkärin neuvo.",
      whippet:
        "Hiljainen, siisti ja rauhallinen sisällä, pari kunnon pyrähdystä viikossa – mutta jahtiviettiä on aidosti ilman hihnaa, ja se palelee helposti.",
      greyhound:
        "Lempeä sohvakoira, joka tarvitsee vain lyhyitä kävelyjä ja turvallisen paikan juosta – mutta se on iso, ja se jahtaa kaikkea pientä ja nopeaa.",
      maltese:
        "Pieni, lempeä ja rauhallinen sisällä – mutta se haukahtaa nopeasti jokaiselle äänelle, turkki pitää harjata useimpina päivinä, ja pitkät päivät yksin ovat sille raskaita.",
      havanese:
        "Iloinen, sosiaalinen ja oppii nopeasti – mutta se haluaa seuraa lähes koko päivän, ja turkki pitää harjata useimpina päivinä.",
      "bichon-frise":
        "Iloinen ja vähän karvaa lähtevä, hyvä vieraiden kanssa – mutta turkinhoito on työlästä, ja pitkät päivät yksin ovat vaikeita.",
      "italian-greyhound":
        "Pieni, hiljainen ja kiintyvä – mutta jalat ovat hyvin ohuet, joten kysy eläinlääkäriltä, miten hypyt ja rajut leikit pidetään turvallisina, ja lue rodun profiili; se myös palelee helposti. Yleistä ohjausta, ei eläinlääkärin neuvo.",
    },
    levelLabels: ["Hyvin matala", "Matala", "Kohtalainen", "Korkea", "Hyvin korkea"],
    quizTitle: "Oikea koira on se, joka sopii päiviisi",
    quizBody:
      "Lyhyt lista on lähtökohta. Löydä koirani -kysely ottaa huomioon kotisi, viikkosi ja sen, mistä mieluiten pääset eroon, ja näyttää perustelut jokaisen pistemäärän takana – jotta voit arvioida ne itse.",
    quizCta: "Löydä koirani",
    compareCta: "Vertaile rotuja rinnakkain",
    sourcesNote: { text: "Tämän sivun terveysmerkinnät ovat yleistä ohjausta, eivät eläinlääkärin neuvo. Rotujen terveystietoa löydät The Kennel Clubilta (UK) ja RVC VetCompassilta, ja lämpöriskistä British Veterinary Associationilta – kaikki on lueteltu lähdesivullamme viimeisimmän tarkistuspäivän kanssa. Oman koirasi asioissa eläinlääkäri tietää parhaiten.", linkLabel: "Katso lähteemme" },
  },
  de: {
    seoTitle: "Ein ruhiger Begleiter für den täglichen Spaziergang",
    seoDescription:
      "Ein freundlicher, verlässlicher Hund für die täglichen Runden – kein Sport, kein Status. Worauf es bei Größe, Erziehung und Gesundheit ankommt, plus sieben Rassen.",
    eyebrow: "Einen Hund wählen",
    h1: "Ein ruhiger Begleiter: ein freundlicher, verlässlicher Hund für den täglichen Spaziergang",
    intro:
      "Du brauchst keinen Hund, der Marathon läuft oder Blicke auf sich zieht. Du wünschst dir jemanden Verlässlichen an deiner Seite, jeden Tag, und ein Zuhause, das ruhig und unkompliziert bleibt. Das ist ein völlig berechtigter Wunsch – und genauer als »ein kleiner Hund«. Hier steht, worauf du achten kannst, und welche sieben Rassen am besten abgeschnitten haben – jede mit dem, was du wissen solltest, bevor du dich verliebst.",
    howChosenTitle: "So haben wir ausgewählt",
    howChosen: [
      "Wir sind von denselben Eigenschaftsdaten ausgegangen wie die Matching-Engine und haben nach ruhiger Energie, leichter Erziehung, wenig Bellen und mäßigem Bewegungsbedarf gesucht – den Eigenschaften, die den Alltag sanft machen.",
      "Dann haben wir jede Rasse vor dem Hintergrund ihrer Gesundheit gelesen. Ein ruhiger Hund mit hohen Tierarztkosten oder einem kurzen, beschwerlichen Leben schenkt dir keinen ruhigen Alltag.",
      "Kurzköpfige Rassen (Französische Bulldogge, Mops, Englische Bulldogge, Boston Terrier, Shih Tzu) schneiden bei Ruhe und Größe oft gut ab. Wir haben sie bewusst weggelassen – siehe den Abschnitt zur Gesundheit.",
    ],
    listTitle: "Sieben Rassen, die man kennenlernen sollte",
    listIntro:
      "Jede ist verlässlich an der Leine und entspannt zu Hause. Keine ist perfekt, und jede Karte sagt, was dich an den schwierigeren Tagen erwartet.",
    tradeoffNote:
      "Egal, welche dich anzieht: Lerne den einzelnen Hund kennen – und bei einem Welpen die Eltern. Auch eine ruhige Rasse bringt gelegentlich ein lebhaftes Tier hervor, und das Wesen der Eltern verrät mehr als jede Liste.",
    sections: [
      {
        title: "Größe: »nicht zu groß« meint Handhabung, nicht Aussehen",
        paragraphs: [
          "Entscheidend ist, ob du die Leine auf glattem Pflaster halten und deinen Hund notfalls ins Auto oder auf den Tierarzttisch heben kannst. Einen kleinen Hund kannst du fast in jeder Hinsicht leicht handhaben; ein mittelgroßer, gut erzogener Hund geht ebenfalls gut. Wird der Hund größer, müssen seine Manieren wirklich gut sein.",
          "Sehr kleine Hunde bringen eigene Sorgen mit: Man stolpert leichter über sie, sie verletzen sich schneller, und sie frieren rasch. Ein mittelgroßer, robuster Hund ist oft der verlässlichere Begleiter.",
        ],
      },
      {
        title: "Trainierbarkeit: was »leicht« wirklich heißt",
        paragraphs: [
          "Ein leichter Hund will Dinge mit dir gemeinsam klären: Er lernt ein Signal nach wenigen Wiederholungen und kommt danach zur Ruhe. Das ist Trainierbarkeit, und die ist etwas anderes als Energie. Ein ruhiger Hund, der dich ignoriert, ist nicht leicht.",
          "Auch schnelle Lerner brauchen jeden Tag ein paar Minuten Übung. Der Lohn ist ein Hund, der ordentlich neben dir geht, auf Ruf kommt und nicht aus jedem Klingeln ein Ereignis macht.",
        ],
      },
      {
        title: "Straßenmanieren: was du jeden Tag spürst",
        paragraphs: [
          "Leinenziehen, Bellen andere Hunde an und Ausfälle gegen Fahrräder zehren viel schneller an dir als ein langer Spaziergang. Suche Rassen, die wenig bellen und Fremden gelassen begegnen, und übe Leinenführigkeit von der ersten Woche an – eine kurze, ruhige Einheit genügt.",
          "Windhunde wie Whippet und Greyhound sind sanft und leise, aber sie jagen alles, was rennt. Halte sie dort an der Leine, wo Verkehr oder Wild ist, und nutze für einen richtigen Lauf einen eingezäunten Platz.",
        ],
      },
      {
        title: "Gesundheitslasten, die du meiden solltest",
        paragraphs: [
          "Kurzköpfige Hunde können bei Wärme leiden – Hitzerisiko gehört zu den Tierschutzthemen, die die British Veterinary Association anspricht – und Atemprobleme sieht man bei diesen Rassen häufig; deshalb haben wir sie nicht aufgenommen, auch wenn die Engine sie mag. Frag, wofür eine Rasse üblicherweise bekannt ist: Herzprobleme bei manchen Rassen wie dem Cavalier, Rückenprobleme bei langrückigen Hunden, empfindliche Beine bei sehr feingliedrigen Rassen. Lies das Rassenprofil und frag eine Tierärztin oder einen Tierarzt – das ist allgemeine Orientierung, kein tierärztlicher Rat.",
          "Ein guter Züchter zeigt dir die Gesundheitsergebnisse beider Elterntiere. Kann oder will er das nicht, lass es – so süß der Welpe auch ist. Denk früh über eine Versicherung nach: Sie kostet weit weniger als die erste Rechnung, mit der du nicht gerechnet hast.",
        ],
      },
      {
        title: "Klein heißt nicht leicht",
        paragraphs: [
          "Zwergrassen sind oft die abhängigsten: Viele können schlecht allein bleiben, bellen bei jedem Geräusch und brauchen regelmäßige Pflege. In einem lebhaften Haushalt oder auf einer Treppe sind sie außerdem zerbrechlich.",
          "Stell dir deshalb drei Fragen: Wie lange ist der Hund allein, wie viel bürstest du wirklich, und wie sicher stehst du auf den Beinen? Beantworte sie ehrlich, dann wird die Liste kürzer – im guten Sinn.",
        ],
      },
    ],
    reasons: {
      "cavalier-king-charles-spaniel":
        "Sanft, anhänglich und mit einer ruhigen Runde zufrieden – Herzprobleme sieht man bei dieser Rasse häufig, und lange Tage allein fallen ihr schwer. Lies das Rassenprofil und frag eine Tierärztin oder einen Tierarzt, welche Herzuntersuchungen sinnvoll sind; allgemeine Orientierung, kein tierärztlicher Rat.",
      whippet:
        "Leise, sauber und ruhig im Haus, mit ein, zwei richtigen Sprints pro Woche – aber der Jagdtrieb ist ohne Leine echt, und er friert schnell.",
      greyhound:
        "Ein sanfter Sofahund, der nur kurze Runden und einen sicheren Platz zum Rennen braucht – aber er ist groß und jagt alles, was klein und schnell ist.",
      maltese:
        "Winzig, sanft und ruhig im Haus – aber er schlägt bei jedem Geräusch schnell an, das Fell muss an den meisten Tagen gebürstet werden, und lange Tage allein fallen ihm schwer.",
      havanese:
        "Fröhlich, gesellig und lernt schnell – aber er will fast den ganzen Tag Gesellschaft, und das Fell muss an den meisten Tagen gebürstet werden.",
      "bichon-frise":
        "Fröhlich und haart kaum, gut mit Gästen – aber die Fellpflege ist aufwendig, und lange Tage allein fallen ihm schwer.",
      "italian-greyhound":
        "Klein, leise und anhänglich – aber die Beine sind sehr dünn, frag deshalb eine Tierärztin oder einen Tierarzt, wie Sprünge und wildes Spiel sicher bleiben, und lies das Rassenprofil; er friert außerdem schnell. Allgemeine Orientierung, kein tierärztlicher Rat.",
    },
    levelLabels: ["Sehr niedrig", "Niedrig", "Mittel", "Hoch", "Sehr hoch"],
    quizTitle: "Der richtige Hund ist der, der zu deinen Tagen passt",
    quizBody:
      "Eine Shortlist ist ein Anfang. Das Quiz »Meinen Hund finden« berücksichtigt dein Zuhause, deine Woche und das, womit du lieber nichts zu tun hättest, und zeigt dir die Begründung hinter jeder Punktzahl – damit du sie selbst beurteilen kannst.",
    quizCta: "Meinen Hund finden",
    compareCta: "Rassen nebeneinander vergleichen",
    sourcesNote: { text: "Die Gesundheitshinweise auf dieser Seite sind allgemeine Orientierung, kein tierärztlicher Rat. Informationen zur Rassegesundheit findest du beim The Kennel Club (UK) und bei RVC VetCompass, zum Hitzerisiko bei der British Veterinary Association – alle sind auf unserer Quellenseite mit dem Datum der letzten Prüfung aufgeführt. Für deinen eigenen Hund weiß deine Tierarztpraxis es am besten.", linkLabel: "Unsere Quellen ansehen" },
  },
  fr: {
    seoTitle: "Un compagnon plus calme pour vos balades",
    seoDescription:
      "Un chien gentil et stable pour les balades quotidiennes – ni sport, ni statut. Taille, éducation, santé : ce qu'il faut regarder, et sept races à rencontrer.",
    eyebrow: "Choisir un chien",
    h1: "Un compagnon plus calme : un chien gentil et stable pour les balades de tous les jours",
    intro:
      "Vous n'avez pas besoin d'un chien qui court des marathons ou qui fait se retourner les passants. Vous aimeriez quelqu'un de stable à vos côtés chaque jour, et une maison qui reste calme et simple. C'est un souhait tout à fait légitime – et plus précis que « un petit chien ». Voici ce qu'il faut regarder, et les sept races qui ressortent le mieux, chacune avec ce qu'il faut savoir avant de craquer.",
    howChosenTitle: "Comment nous avons choisi",
    howChosen: [
      "Nous sommes partis des mêmes données de traits que le moteur de matching, en cherchant une énergie tranquille, une éducation facile, peu d'aboiements et des besoins d'exercice modérés – les traits qui rendent le quotidien doux.",
      "Nous avons ensuite lu chaque race à la lumière de sa santé. Un chien calme qui coûte cher en frais vétérinaires ou qui vit peu et mal ne vous offre pas un quotidien tranquille.",
      "Les races à museau plat (bouledogue français, carlin, bouledogue anglais, boston terrier, shih tzu) obtiennent souvent de bons scores pour le calme et la taille. Nous les avons volontairement écartées – voir la partie sur la santé.",
    ],
    listTitle: "Sept races à rencontrer",
    listIntro:
      "Chacune est sûre en laisse et posée à la maison. Aucune n'est parfaite, et chaque carte dit à quoi s'attendre les jours difficiles.",
    tradeoffNote:
      "Quelle que soit celle qui vous attire, rencontrez le chien lui-même – et, pour un chiot, ses parents. Une race calme donne parfois un individu vif, et le caractère des parents en dit plus que n'importe quelle liste.",
    sections: [
      {
        title: "La taille : « pas trop grand » parle de maniabilité, pas d'apparence",
        paragraphs: [
          "Ce qui compte, c'est de pouvoir tenir la laisse sur un trottoir glissant et, au besoin, soulever votre chien pour le mettre en voiture ou sur la table du vétérinaire. Un petit chien est facile à gérer presque en tout ; un chien de taille moyenne bien éduqué convient aussi. Au-delà, les bonnes manières doivent être vraiment solides.",
          "Les très petits chiens ont leurs propres soucis : on trébuche plus facilement sur eux, ils se blessent vite et ils ont vite froid. Un chien moyen et robuste est souvent le compagnon le plus sûr.",
        ],
      },
      {
        title: "L'éducabilité : ce que « facile » veut vraiment dire",
        paragraphs: [
          "Un chien facile a envie de comprendre les choses avec vous : il apprend un signal en quelques répétitions, puis se pose. C'est l'éducabilité, et elle n'a rien à voir avec l'énergie. Un chien calme qui vous ignore n'est pas facile.",
          "Même les élèves rapides ont besoin de quelques minutes d'exercice par jour. La récompense, c'est un chien qui marche bien à côté de vous, revient quand on l'appelle et ne fait pas de chaque sonnette un événement.",
        ],
      },
      {
        title: "Les manières en ville : ce que vous sentirez chaque jour",
        paragraphs: [
          "Tirer en laisse, aboyer sur les autres chiens et se jeter sur les vélos vous usent bien plus vite qu'une longue balade. Cherchez des races qui aboient peu et réagissent calmement aux inconnus, et travaillez la marche en laisse dès la première semaine – une courte leçon tranquille suffit.",
          "Les lévriers, comme le whippet et le greyhound, sont doux et silencieux, mais ils poursuivent tout ce qui file. Gardez-les en laisse là où il y a de la circulation ou du gibier, et offrez-leur un espace clos pour un vrai galop.",
        ],
      },
      {
        title: "Les fardeaux de santé à éviter",
        paragraphs: [
          "Les chiens à museau plat peuvent souffrir de la chaleur – le risque de coup de chaleur fait partie des préoccupations de bien-être que soulève la British Veterinary Association – et les difficultés respiratoires sont souvent observées dans ces races ; c'est pourquoi nous ne les avons pas retenues, même quand le moteur les apprécie. Demandez ce pour quoi une race est couramment connue : problèmes cardiaques chez certaines races comme le cavalier, problèmes de dos chez les chiens au dos long, pattes délicates chez les races très fines. Lisez le profil de la race, puis demandez à un vétérinaire – ce sont des repères généraux, pas un avis vétérinaire.",
          "Un bon éleveur vous montre les résultats des tests de santé des deux parents. S'il ne peut pas ou ne veut pas, passez votre chemin – même si le chiot est adorable. Pensez tôt à une assurance : elle coûte bien moins que la première facture imprévue.",
        ],
      },
      {
        title: "Petit ne veut pas dire facile",
        paragraphs: [
          "Les races miniatures sont souvent les plus dépendantes : beaucoup supportent mal la solitude, aboient au moindre bruit et demandent un toilettage régulier. Elles sont aussi fragiles dans une maison animée ou dans un escalier.",
          "Posez-vous donc trois questions : combien de temps le chien sera-t-il seul, combien de brossage ferez-vous vraiment, et quelle est la sûreté de vos pas ? Répondez honnêtement, et la liste raccourcit – dans le bon sens.",
        ],
      },
    ],
    reasons: {
      "cavalier-king-charles-spaniel":
        "Doux, affectueux et content d'une balade tranquille – les problèmes cardiaques sont souvent observés dans la race, et les longues journées seul lui pèsent. Lisez le profil de la race et demandez à un vétérinaire quels contrôles cardiaques ont du sens ; repères généraux, pas un avis vétérinaire.",
      whippet:
        "Silencieux, propre et calme à la maison, avec un ou deux vrais sprints par semaine – mais l'instinct de chasse est bien réel sans laisse, et il souffre du froid.",
      greyhound:
        "Un doux chien de canapé qui ne demande que de courtes balades et un endroit sûr pour courir – mais c'est un grand chien, et il poursuit tout ce qui est petit et rapide.",
      maltese:
        "Minuscule, doux et calme à la maison – mais il aboie vite au moindre bruit, son poil se brosse presque tous les jours, et les longues journées seul lui pèsent.",
      havanese:
        "Joyeux, sociable et rapide à apprendre – mais il veut de la compagnie presque toute la journée, et son poil se brosse presque tous les jours.",
      "bichon-frise":
        "Joyeux et peu perdeur de poils, très bien avec les invités – mais le toilettage est lourd, et les longues journées seul lui sont difficiles.",
      "italian-greyhound":
        "Petit, silencieux et affectueux – mais ses pattes sont très fines : demandez à un vétérinaire comment garder sauts et jeux brusques sans danger, et lisez le profil de la race ; il a aussi vite froid. Repères généraux, pas un avis vétérinaire.",
    },
    levelLabels: ["Très faible", "Faible", "Modéré", "Élevé", "Très élevé"],
    quizTitle: "Le bon chien est celui qui s'accorde à vos journées",
    quizBody:
      "Une présélection n'est qu'un début. Le quiz Trouver mon chien tient compte de votre logement, de votre semaine et de ce que vous préférez éviter, et vous montre le raisonnement derrière chaque score – pour que vous puissiez en juger vous-même.",
    quizCta: "Trouver mon chien",
    compareCta: "Comparer les races côte à côte",
    sourcesNote: { text: "Les notes de santé de cette page sont des repères généraux, pas un avis vétérinaire. Pour la santé des races, voir The Kennel Club (UK) et RVC VetCompass, et pour le risque de chaleur la British Veterinary Association – tous figurent, avec la date de notre dernière vérification, sur notre page des sources. Pour votre propre chien, votre vétérinaire sait mieux.", linkLabel: "Voir nos sources" },
  },
  nl: {
    seoTitle: "Een rustigere metgezel voor de dagelijkse wandeling",
    seoDescription:
      "Een vriendelijke, stabiele hond voor dagelijkse wandelingen – geen sport, geen statussymbool. Waar je op let bij formaat, training en gezondheid, plus zeven rassen.",
    eyebrow: "Een hond kiezen",
    h1: "Een rustigere metgezel: een vriendelijke, stabiele hond voor de dagelijkse wandeling",
    intro:
      "Je hebt geen hond nodig die marathons loopt of blikken trekt. Je wilt iemand stabiels naast je, elke dag, en een huis dat rustig en makkelijk blijft. Dat is een prima wens – en preciezer dan 'een kleine hond'. Hier lees je waar je op kunt letten, en welke zeven rassen het best uit de bus kwamen – elk met wat je moet weten voordat je verliefd wordt.",
    howChosenTitle: "Hoe we hebben gekozen",
    howChosen: [
      "We zijn uitgegaan van dezelfde eigenschappendata als de matching-engine en zochten rustige energie, makkelijke training, weinig blaffen en een gematigde beweegbehoefte – de eigenschappen die het dagelijks leven zacht maken.",
      "Daarna lazen we elk ras naast het gezondheidsbeeld. Een rustige hond met zware dierenartsrekeningen of een kort, oncomfortabel leven geeft jou geen rustig leven.",
      "Platsnuitige rassen (Franse bulldog, mopshond, Engelse bulldog, Boston terriër, shih tzu) scoren vaak goed op rust en formaat. We hebben ze bewust weggelaten – zie het stuk over gezondheid.",
    ],
    listTitle: "Zeven rassen om te ontmoeten",
    listIntro:
      "Elk is stabiel aan de lijn en ontspannen thuis. Geen enkel is perfect, en elke kaart vertelt wat je op de zwaardere dagen kunt verwachten.",
    tradeoffNote:
      "Welk ras je ook aanspreekt: ontmoet de echte hond, en bij een pup de ouders. Ook een rustig ras levert soms een levendig exemplaar op, en het karakter van de ouders zegt meer dan welke lijst ook.",
    sections: [
      {
        title: "Formaat: 'niet te groot' gaat over hanteerbaarheid, niet over uiterlijk",
        paragraphs: [
          "Waar het om gaat: kun je de lijn vasthouden op een gladde stoep, en kun je je hond zo nodig de auto in of op de behandeltafel tillen? Een kleine hond is bijna in elk opzicht makkelijk te hanteren; een middelgrote, goed opgevoede hond gaat ook prima. Wordt de hond groter, dan moeten de manieren echt goed zijn.",
          "Hele kleine honden hebben eigen zorgen: je struikelt er sneller over, ze raken sneller gewond en ze hebben snel kou. Een middelgrote, stevige hond is vaak de betrouwbaardere metgezel.",
        ],
      },
      {
        title: "Trainbaarheid: wat 'makkelijk' echt betekent",
        paragraphs: [
          "Een makkelijke hond wil dingen samen met jou uitzoeken: hij leert een signaal na een paar herhalingen en komt daarna tot rust. Dat is trainbaarheid, en dat is iets anders dan energie. Een rustige hond die je negeert, is niet makkelijk.",
          "Ook snelle leerlingen hebben elke dag een paar minuten oefening nodig. De beloning is een hond die netjes naast je loopt, komt als je roept en van elke deurbel geen gebeurtenis maakt.",
        ],
      },
      {
        title: "Straatmanieren: wat je elke dag voelt",
        paragraphs: [
          "Trekken aan de lijn, blaffen naar andere honden en uitvallen naar fietsen slijten je veel sneller dan een lange wandeling. Zoek rassen die weinig blaffen en rustig op vreemden reageren, en oefen lijnlopen vanaf de eerste week – een korte, rustige les is genoeg.",
          "Windhonden zoals de whippet en de greyhound zijn zacht en stil, maar ze jagen op alles wat rent. Houd ze aan de lijn waar verkeer of wild is, en gebruik een omheind terrein voor een echte sprint.",
        ],
      },
      {
        title: "Gezondheidslasten die je liever vermijdt",
        paragraphs: [
          "Platsnuitige honden kunnen het zwaar hebben bij warmte – hitterisico is een van de welzijnszorgen die de British Veterinary Association noemt – en ademhalingsproblemen zie je bij deze rassen vaak; daarom staan ze niet op de lijst, ook al vindt de engine ze leuk. Vraag waar een ras gewoonlijk om bekendstaat: hartproblemen bij sommige rassen zoals de cavalier, rugproblemen bij langgerekte honden, tere pootjes bij fijngebouwde rassen. Lees het rasprofiel en vraag het aan een dierenarts – dit is algemene richtlijn, geen dierenartsadvies.",
          "Een goede fokker laat je de gezondheidsuitslagen van beide ouders zien. Kan of wil hij dat niet, laat het dan – hoe lief de pup ook is. Denk vroeg aan een verzekering: die kost veel minder dan de eerste rekening waar je niet op had gerekend.",
        ],
      },
      {
        title: "Klein is niet hetzelfde als makkelijk",
        paragraphs: [
          "Dwergrassen zijn vaak het meest afhankelijk: veel kunnen slecht alleen zijn, blaffen bij elk geluid en hebben regelmatig verzorging nodig. In een druk huis of op een trap zijn ze bovendien kwetsbaar.",
          "Stel jezelf dus drie vragen: hoe lang is de hond alleen, hoeveel borstel je echt, en hoe vast sta je op je benen? Beantwoord ze eerlijk, dan wordt de lijst korter – op een goede manier.",
        ],
      },
    ],
    reasons: {
      "cavalier-king-charles-spaniel":
        "Zacht, aanhankelijk en tevreden met een rustige wandeling – hartproblemen zie je bij dit ras vaak, en lange dagen alleen zijn zwaar. Lees het rasprofiel en vraag een dierenarts welke hartcontroles zinvol zijn; algemene richtlijn, geen dierenartsadvies.",
      whippet:
        "Stil, schoon en rustig in huis, met een of twee flinke sprints per week – maar het jachtinstinct is echt zonder lijn, en hij heeft snel kou.",
      greyhound:
        "Een zachte bankhond die alleen korte wandelingen en een veilige plek om te rennen nodig heeft – maar hij is groot en jaagt op alles wat klein en snel is.",
      maltese:
        "Klein, zacht en rustig in huis – maar hij blaft snel bij elk geluid, de vacht moet de meeste dagen geborsteld worden, en lange dagen alleen zijn zwaar.",
      havanese:
        "Vrolijk, sociaal en leert snel – maar hij wil bijna de hele dag gezelschap, en de vacht moet de meeste dagen geborsteld worden.",
      "bichon-frise":
        "Vrolijk en verhaart weinig, fijn met bezoek – maar de vachtverzorging is intensief, en lange dagen alleen zijn moeilijk.",
      "italian-greyhound":
        "Klein, stil en aanhankelijk – maar de pootjes zijn heel dun, dus vraag een dierenarts hoe je springen en wild spel veilig houdt, en lees het rasprofiel; hij heeft ook snel kou. Algemene richtlijn, geen dierenartsadvies.",
    },
    levelLabels: ["Heel laag", "Laag", "Gemiddeld", "Hoog", "Heel hoog"],
    quizTitle: "De juiste hond is de hond die bij je dagen past",
    quizBody:
      "Een shortlist is een begin. De quiz Vind mijn hond kijkt naar je huis, je week en waar je liever niet mee te maken hebt, en toont de redenering achter elke score – zodat je zelf kunt beoordelen of het klopt.",
    quizCta: "Vind mijn hond",
    compareCta: "Vergelijk rassen naast elkaar",
    sourcesNote: { text: "De gezondheidsnotities op deze pagina zijn algemene richtlijnen, geen dierenartsadvies. Voor rasgezondheid: zie The Kennel Club (UK) en RVC VetCompass, en voor hitterisico de British Veterinary Association – allemaal vermeld, met de datum van onze laatste controle, op onze bronnenpagina. Voor je eigen hond weet je dierenarts het best.", linkLabel: "Bekijk onze bronnen" },
  },
};

const LOCALES = Object.keys(CONTENT) as Locale[];

function byIds(ids: readonly string[]): Breed[] {
  return ids
    .map((id) => breeds.find((b) => b.id === id))
    .filter((b): b is Breed => Boolean(b));
}

/** Metric labels are borrowed from the existing guides so terms stay consistent per language. */
function metricLabel(locale: Locale, key: "barking" | "exerciseNeeds" | "aloneTolerance" | "trainability") {
  const src = key === "trainability" ? FIRST_TIME_GUIDE : APARTMENT_GUIDE;
  const c = (src.copy as Partial<Record<Locale, GuideCopy>>)[locale] ?? src.copy.en;
  return c.metrics.find((m) => m.key === key)?.label ?? key;
}

function readProfile(locale: Locale): string {
  const c = (APARTMENT_GUIDE.copy as Partial<Record<Locale, GuideCopy>>)[locale] ?? APARTMENT_GUIDE.copy.en;
  return c.readProfile;
}

function copyFor(locale: Locale): GuideCopy {
  const t = CONTENT[locale];
  return {
    eyebrow: t.eyebrow,
    h1: t.h1,
    intro: t.intro,
    howChosenTitle: t.howChosenTitle,
    howChosen: [...t.howChosen],
    listTitle: t.listTitle,
    listIntro: t.listIntro,
    metrics: [
      { key: "trainability", label: metricLabel(locale, "trainability") },
      { key: "barking", label: metricLabel(locale, "barking") },
      { key: "exerciseNeeds", label: metricLabel(locale, "exerciseNeeds") },
      { key: "aloneTolerance", label: metricLabel(locale, "aloneTolerance") },
    ],
    readProfile: readProfile(locale),
    tradeoffNote: t.tradeoffNote,
    sections: t.sections.map((s) => ({ title: s.title, paragraphs: [...s.paragraphs] })),
    quizTitle: t.quizTitle,
    quizBody: t.quizBody,
    quizCta: t.quizCta,
    compareCta: t.compareCta,
    sourcesNote: { text: t.sourcesNote.text, linkLabel: t.sourcesNote.linkLabel },
    levelLabels: t.levelLabels,
  };
}

const en = "en" as const;

export const CALMER_GUIDE: LifestyleGuideConfig = {
  id: "calmer-companion",
  path: "/guides/a-calmer-companion",
  seo: {
    en: {
      title: `${CONTENT[en].seoTitle} | DoggMatch`,
      description: CONTENT[en].seoDescription,
    },
    ...Object.fromEntries(
      LOCALES.filter((l) => l !== "en").map((l) => [
        l,
        { title: `${CONTENT[l].seoTitle} | DoggMatch`, description: CONTENT[l].seoDescription },
      ]),
    ),
  } as LifestyleGuideConfig["seo"],
  copy: Object.fromEntries(LOCALES.map((l) => [l, copyFor(l)])) as unknown as LifestyleGuideConfig["copy"],
  shortlist: byIds(SHORTLIST_IDS),
  reasons: Object.fromEntries(LOCALES.map((l) => [l, CONTENT[l].reasons])) as unknown as NonNullable<LifestyleGuideConfig["reasons"]>,
  heroBreedId: "cavalier-king-charles-spaniel",
  portraits: true,
};
