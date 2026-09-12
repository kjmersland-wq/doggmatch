import { createFileRoute } from "@tanstack/react-router";
import { useCopy } from "@/i18n";
import { Eyebrow } from "@/components/dogmatch/ui";
import { lastReviewedAll, resolvedSourceCategories } from "@/data/sources/registry";
import { seoLinks, abs, localizedHead } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

const title = "Sources & methodology — DoggMatch";
const description =
  "Where DoggMatch's information comes from: veterinary bodies, kennel organisations, authorities and welfare charities — and exactly how our matching maths works.";

const seoCopy = {
  en: { title, description },
  no: {
    title: "Kilder og metode — DoggMatch",
    description:
      "Hvor informasjonen i DoggMatch kommer fra: veterinærfaglige organer, kennelorganisasjoner, myndigheter og dyrevernorganisasjoner — og nøyaktig hvordan matchingen regnes ut.",
  },
  pl: {
    title: "Źródła i metodyka — DoggMatch",
    description:
      "Skąd pochodzą informacje w DoggMatch: organizacje weterynaryjne, związki kynologiczne, urzędy i organizacje ochrony zwierząt — oraz dokładnie to, jak liczy się dopasowanie.",
  },
  dk: {
    title: "Kilder og metode — DoggMatch",
    description:
      "Hvor informationen i DoggMatch kommer fra: veterinærfaglige organer, kennelorganisationer, myndigheder og dyreværnsorganisationer — og præcis hvordan matchningen regnes ud.",
  },
  se: {
    title: "Källor och metod — DoggMatch",
    description:
      "Var informationen i DoggMatch kommer ifrån: veterinärmedicinska organ, kennelorganisationer, myndigheter och djurskyddsorganisationer — och exakt hur matchningen räknas ut.",
  },
  fi: {
    title: "Lähteet ja menetelmä — DoggMatch",
    description:
      "Mistä DoggMatchin tiedot ovat peräisin: eläinlääketieteelliset järjestöt, kennelliitot, viranomaiset ja eläinsuojelujärjestöt — ja tarkalleen, miten täsmäys lasketaan.",
  },
  de: {
    title: "Quellen und Methodik — DoggMatch",
    description:
      "Woher die Informationen von DoggMatch stammen: tierärztliche Fachverbände, Zuchtverbände, Behörden und Tierschutzorganisationen — und genau, wie unsere Matching-Berechnung funktioniert.",
  },
  fr: {
    title: "Sources et méthodologie — DoggMatch",
    description:
      "D'où viennent les informations de DoggMatch : organismes vétérinaires, clubs canins, autorités et associations de protection animale — et le fonctionnement exact de notre calcul de compatibilité.",
  },
  nl: {
    title: "Bronnen en methodologie — DoggMatch",
    description:
      "Waar de informatie van DoggMatch vandaan komt: diergeneeskundige organisaties, kennelclubs, overheden en dierenwelzijnsorganisaties — en precies hoe onze matchberekening werkt.",
  },
};

export const Route = createFileRoute("/{-$lang}/sources")({
  head: (ctx) => localizedHead(ctx, "/sources", seoCopy),
  component: SourcesPage,
});

const copy = {
  en: {
    eyebrow: "Transparency",
    h1: "Where our information comes from",
    intro:
      "We'd rather show our homework than sound clever. Everything factual on DoggMatch comes from named organisations you can check yourself, and everything we work out ourselves is plain arithmetic we're happy to explain.",
    reviewed: "Whole registry last reviewed",
    twoKinds: "Two different kinds of information",
    externalTitle: "Knowledge from others",
    externalBody:
      "Breed standards, health and nutrition guidance, welfare rules and border requirements come from veterinary organisations, published research, government authorities, recognised kennel clubs and established animal-welfare charities. They are listed below, by subject, with a link to the page we read and the date we last checked it.",
    ownTitle: "Calculations that are ours",
    ownBody:
      "Match percentages, portion estimates, weekly rhythms and readiness scores are produced by our own deterministic code. The same answers always give the same result — there is no AI guessing in the middle, and no personal data leaves your device to produce them.",
    methodTitle: "How the matching actually works",
    stageWord: "Stage",
    stages: [
      {
        t: "User Lifestyle Inputs",
        b: "Living space, hours alone, activity level, experience, and household details like children, other pets, shedding and allergies.",
      },
      {
        t: "Hard Constraint Elimination",
        b: "Severe allergies, apartment mismatches and long alone-time are checked first. Mark any of these as a hard limit yourself, and a breed that crosses it is dropped from your results entirely — not just scored down.",
      },
      {
        t: "Deterministic Multi-Vector Scoring",
        b: "Every surviving breed is scored across all 9 real dimensions — lifestyle, home, activity, temperament, trainability, companionship, allergy, wellbeing and maintenance — then combined with fixed weights.",
      },
      {
        t: "Transparent Fit & Trade-offs Report",
        b: "You see exactly what lined up with your answers and what didn't, side by side — never just a single black-box number.",
      },
    ],
    calloutEyebrow: "A hard limit in practice",
    calloutTitle: "Why a Border Collie can be eliminated for a 6+ hour alone day",
    calloutBody:
      "A Border Collie tends to score brilliantly on activity and trainability — but its tolerance for being left alone is low. Mark \"hours alone\" as a hard limit, and a long day alone rules it out completely, no matter how well it does everywhere else.",
    calloutTrait1: "High activity score",
    calloutTrait2: "High trainability score",
    calloutEliminated: "Still eliminated",
    limitsTitle: "What a match percentage is — and isn't",
    limits:
      "A DoggMatch percentage is an algorithmic compatibility assessment based on structured breed data and the answers you gave us. It is not a scientific prediction, not a measure of any individual dog, and it carries no claim of certainty. Dogs are individuals; two dogs of the same breed can live very differently. For a dog you already know, we score the dog's own observed characteristics rather than assumptions about its breed.",
    vetTitle: "We are not your vet",
    vetBody:
      "DoggMatch offers general education about life with a dog. It does not diagnose, treat or prescribe, and it never replaces advice from a qualified vet, veterinary behaviourist or trainer who has met your dog. If something worries you, please ring your vet — and in an emergency, go straight there.",
    borderTitle: "Travel rules change",
    borderBody:
      "Border and import requirements are set by governments and can change with little notice. We link to the authority for each country and tell you plainly when we don't hold a verified rule for a route, rather than guessing.",
    registryTitle: "The source registry",
    registryBody:
      "Organised by subject. Every entry links to the original source. New sources and review dates are added here as the site grows.",
    usedOn: "Used on",
    reviewedShort: "Checked",
    addTitle: "Spotted something wrong?",
    addBody:
      "If you find a claim that isn't supported, or a source that has moved or changed, tell us and we'll fix it. Corrections are welcome, always.",
    contact: "Send us a correction",
  },
  no: {
    eyebrow: "Åpenhet",
    h1: "Hvor informasjonen vår kommer fra",
    intro:
      "Vi viser heller utregningen enn å høres smarte ut. Alt faktabasert på DoggMatch kommer fra navngitte organisasjoner du kan sjekke selv, og alt vi regner ut selv er enkel matematikk vi gjerne forklarer.",
    reviewed: "Hele kildelisten sist gjennomgått",
    twoKinds: "To ulike typer informasjon",
    externalTitle: "Kunnskap fra andre",
    externalBody:
      "Rasestandarder, helse- og ernæringsveiledning, velferdsregler og grensekrav kommer fra veterinærorganisasjoner, publisert forskning, offentlige myndigheter, anerkjente kennelklubber og etablerte dyrevernorganisasjoner. De står oppført nedenfor, sortert etter tema, med lenke til siden vi leste og datoen vi sist sjekket den.",
    ownTitle: "Beregninger som er våre egne",
    ownBody:
      "Matchprosenter, porsjonsanslag, ukerytmer og readiness-poeng lages av vår egen deterministiske kode. De samme svarene gir alltid det samme resultatet — ingen gjetting, ingen skjult AI, bare transparente og faste regler. Ingen personopplysninger forlater enheten din for å regne det ut.",
    methodTitle: "Slik fungerer matchingen faktisk",
    stageWord: "Steg",
    stages: [
      {
        t: "Livsstilsinnspill fra deg",
        b: "Bolig, timer alene, aktivitetsnivå, erfaring og forhold i hjemmet som barn, andre dyr, pelsfelling og allergier.",
      },
      {
        t: "Eliminering av absolutte krav",
        b: "Alvorlig allergi, dårlig match med leilighet og lange dager alene sjekkes først. Merk noen av disse som et absolutt krav selv, og en rase som ikke oppfyller det, fjernes helt fra resultatene dine — ikke bare nedjustert.",
      },
      {
        t: "Deterministisk scoring på flere vektorer",
        b: "Hver gjenværende rase scores på alle 9 reelle dimensjoner — livsstil, bolig, aktivitet, temperament, lærevillighet, selskap, allergi, velvære og stell — og settes så sammen med faste vekter.",
      },
      {
        t: "Åpen rapport om match og avveininger",
        b: "Du ser nøyaktig hva som stemte med svarene dine og hva som ikke gjorde det, side om side — aldri bare ett lukket tall.",
      },
    ],
    calloutEyebrow: "Et absolutt krav i praksis",
    calloutTitle: "Hvorfor en border collie kan bli utelukket ved 6+ timer alene",
    calloutBody:
      "En border collie scorer som regel strålende på aktivitet og lærevillighet — men tåler dårlig å være alene. Merk «timer alene» som et absolutt krav, og en lang dag alene utelukker den helt, uansett hvor godt den gjør det andre steder.",
    calloutTrait1: "Høy score på aktivitet",
    calloutTrait2: "Høy score på lærevillighet",
    calloutEliminated: "Fortsatt utelukket",
    limitsTitle: "Hva en matchprosent er — og ikke er",
    limits:
      "En DoggMatch-prosent er en algoritmisk vurdering av kompatibilitet, basert på strukturerte rasedata og svarene du ga oss. Den er ikke en vitenskapelig prediksjon, ikke et mål på én bestemt hund, og den påstår ingen sikkerhet. Hunder er individer; to hunder av samme rase kan leve svært ulikt. For en hund du allerede kjenner, scorer vi hundens egne observerte egenskaper i stedet for antagelser om rasen.",
    vetTitle: "Vi er ikke veterinæren din",
    vetBody:
      "DoggMatch gir generell kunnskap om livet med hund. Vi stiller ingen diagnose, behandler ikke og forskriver ikke, og vi erstatter aldri råd fra en kvalifisert veterinær, veterinær atferdsspesialist eller trener som har møtt hunden din. Er du bekymret, ring veterinæren — og ved akutt sykdom, dra rett dit.",
    borderTitle: "Reiseregler endres",
    borderBody:
      "Grense- og innførselskrav settes av myndighetene og kan endres på kort varsel. Vi lenker til myndigheten for hvert land, og sier tydelig fra når vi ikke har en verifisert regel for en reisevei — i stedet for å gjette.",
    registryTitle: "Kildelisten",
    registryBody:
      "Sortert etter tema. Hver oppføring lenker til originalkilden. Nye kilder og gjennomgangsdatoer legges inn her etter hvert som siden vokser.",
    usedOn: "Brukes på",
    reviewedShort: "Sjekket",
    addTitle: "Har du funnet noe som er feil?",
    addBody:
      "Finner du en påstand uten dekning, eller en kilde som har flyttet eller endret seg, si fra — så retter vi det. Rettelser er alltid velkomne.",
    contact: "Send oss en rettelse",
  },
  pl: {
    eyebrow: "Przejrzystość",
    h1: "Skąd bierzemy nasze informacje",
    intro:
      "Wolimy pokazać naszą pracę domową, niż brzmieć mądrze. Wszystko, co faktograficzne w DoggMatch, pochodzi od nazwanych organizacji, które możesz sprawdzić sama lub sam, a wszystko, co obliczamy sami, to zwykła arytmetyka, którą chętnie wyjaśnimy.",
    reviewed: "Cały rejestr ostatnio sprawdzony",
    twoKinds: "Dwa różne rodzaje informacji",
    externalTitle: "Wiedza od innych",
    externalBody:
      "Standardy ras, wytyczne dotyczące zdrowia i żywienia, zasady dobrostanu i wymogi graniczne pochodzą od organizacji weterynaryjnych, opublikowanych badań, organów rządowych, uznanych klubów kynologicznych i sprawdzonych organizacji zajmujących się dobrostanem zwierząt. Są wymienione poniżej, według tematu, z linkiem do strony, którą przeczytaliśmy, i datą ostatniego sprawdzenia.",
    ownTitle: "Obliczenia, które są nasze",
    ownBody:
      "Procenty dopasowania, szacunki porcji, rytmy tygodniowe i wyniki gotowości powstają dzięki naszemu własnemu, deterministycznemu kodowi. Te same odpowiedzi zawsze dają ten sam wynik — bez zgadywania i czarnych skrzynek AI, tylko przejrzyste, jasne zasady dopasowania. Żadne dane osobowe nie opuszczają Twojego urządzenia, by je policzyć.",
    methodTitle: "Jak naprawdę działa dopasowywanie",
    stageWord: "Etap",
    stages: [
      {
        t: "Twoje dane o stylu życia",
        b: "Przestrzeń życiowa, godziny spędzane samodzielnie przez psa, poziom aktywności, doświadczenie oraz szczegóły domowe, takie jak dzieci, inne zwierzęta, linienie i alergie.",
      },
      {
        t: "Eliminacja warunków bezwzględnych",
        b: "Poważne alergie, niedopasowanie do mieszkania i długie dni w samotności są sprawdzane najpierw. Oznacz dowolne z nich jako warunek bezwzględny, a rasa, która go nie spełnia, zostaje całkowicie usunięta z wyników — a nie tylko obniżona w ocenie.",
      },
      {
        t: "Deterministyczne wielowymiarowe punktowanie",
        b: "Każda pozostała rasa jest oceniana we wszystkich 9 rzeczywistych wymiarach — styl życia, dom, aktywność, temperament, podatność na trening, towarzystwo, alergia, dobrostan i pielęgnacja — a następnie łączona ze stałymi wagami.",
      },
      {
        t: "Przejrzysty raport dopasowania i kompromisów",
        b: "Widzisz dokładnie, co pasowało do Twoich odpowiedzi, a co nie, obok siebie — nigdy tylko jedną zamkniętą liczbę.",
      },
    ],
    calloutEyebrow: "Warunek bezwzględny w praktyce",
    calloutTitle: "Dlaczego border collie może zostać wyeliminowany przy 6+ godzinach samotności",
    calloutBody:
      "Border collie zwykle świetnie wypada pod względem aktywności i podatności na trening — ale słabo znosi samotność. Oznacz „godziny samodzielnie” jako warunek bezwzględny, a długi dzień w samotności całkowicie go wyklucza, niezależnie od tego, jak dobrze wypada gdzie indziej.",
    calloutTrait1: "Wysoka ocena aktywności",
    calloutTrait2: "Wysoka ocena podatności na trening",
    calloutEliminated: "Nadal wyeliminowany",
    limitsTitle: "Czym jest procent dopasowania — i czym nie jest",
    limits:
      "Procent DoggMatch to algorytmiczna ocena kompatybilności, oparta na uporządkowanych danych o rasach i odpowiedziach, które nam podałaś/podałeś. To nie jest naukowa prognoza, nie jest miarą konkretnego psa i nie niesie żadnej pewności. Psy to indywidua; dwa psy tej samej rasy mogą żyć zupełnie inaczej. Dla psa, którego już znasz, oceniamy jego własne, zaobserwowane cechy, a nie założenia dotyczące rasy.",
    vetTitle: "Nie jesteśmy Twoim weterynarzem",
    vetBody:
      "DoggMatch oferuje ogólną wiedzę o życiu z psem. Nie stawia diagnoz, nie leczy ani nie przepisuje, i nigdy nie zastępuje porady wykwalifikowanego weterynarza, behawiorysty weterynaryjnego czy trenera, który poznał Twojego psa. Jeśli coś Cię niepokoi, zadzwoń do weterynarza — a w nagłym przypadku jedź prosto tam.",
    borderTitle: "Zasady podróżowania się zmieniają",
    borderBody:
      "Wymogi graniczne i importowe ustalają rządy i mogą się zmieniać z niewielkim wyprzedzeniem. Podajemy link do odpowiedniego urzędu dla każdego kraju i mówimy wprost, gdy nie mamy zweryfikowanej zasady dla danej trasy, zamiast zgadywać.",
    registryTitle: "Rejestr źródeł",
    registryBody:
      "Uporządkowany według tematu. Każdy wpis linkuje do oryginalnego źródła. Nowe źródła i daty przeglądu są dodawane tutaj w miarę rozwoju strony.",
    usedOn: "Wykorzystywane w",
    reviewedShort: "Sprawdzono",
    addTitle: "Zauważyłaś/zauważyłeś coś, co jest błędne?",
    addBody:
      "Jeśli znajdziesz twierdzenie, które nie jest poparte, albo źródło, które się przeniosło lub zmieniło, daj nam znać, a poprawimy to. Poprawki są zawsze mile widziane.",
    contact: "Wyślij nam poprawkę",
  },
  dk: {
    eyebrow: "Åbenhed",
    h1: "Hvor vores information kommer fra",
    intro:
      "Vi viser hellere regnestykket end at lyde kloge. Alt faktabaseret på DoggMatch kommer fra navngivne organisationer, du selv kan tjekke, og alt vi selv regner ud, er enkel matematik, vi gerne forklarer.",
    reviewed: "Hele kilderegistret sidst gennemgået",
    twoKinds: "To forskellige typer information",
    externalTitle: "Viden fra andre",
    externalBody:
      "Racestandarder, sundheds- og ernæringsvejledning, velfærdsregler og grænsekrav kommer fra veterinærorganisationer, publiceret forskning, offentlige myndigheder, anerkendte kennelklubber og etablerede dyreværnsorganisationer. De er listet nedenfor, efter emne, med et link til siden vi læste, og datoen vi sidst tjekkede den.",
    ownTitle: "Beregninger der er vores egne",
    ownBody:
      "Matchprocenter, portionsestimater, ugerytmer og readiness-point produceres af vores egen deterministiske kode. De samme svar giver altid det samme resultat — ingen gætterier, ingen hemmelig AI, kun gennemskuelige, faste regler. Ingen personlige oplysninger forlader din enhed for at regne det ud.",
    methodTitle: "Sådan fungerer matchningen faktisk",
    stageWord: "Trin",
    stages: [
      {
        t: "Dine livsstilsoplysninger",
        b: "Boligforhold, timer alene, aktivitetsniveau, erfaring og forhold derhjemme som børn, andre dyr, fældning og allergier.",
      },
      {
        t: "Eliminering af absolutte grænser",
        b: "Alvorlig allergi, dårligt match med lejlighed og lange dage alene tjekkes først. Marker en af disse som en absolut grænse selv, og en race, der ikke opfylder den, fjernes helt fra dine resultater — ikke bare nedjusteret.",
      },
      {
        t: "Deterministisk scoring på flere vektorer",
        b: "Hver tilbageværende race scores på alle 9 reelle dimensioner — livsstil, hjem, aktivitet, temperament, trænbarhed, selskab, allergi, trivsel og pleje — og sættes derefter sammen med faste vægte.",
      },
      {
        t: "Gennemskuelig rapport om match og afvejninger",
        b: "Du ser præcis, hvad der stemte overens med dine svar, og hvad der ikke gjorde, side om side — aldrig bare ét lukket tal.",
      },
    ],
    calloutEyebrow: "En absolut grænse i praksis",
    calloutTitle: "Hvorfor en border collie kan blive udelukket ved 6+ timer alene",
    calloutBody:
      "En border collie scorer som regel strålende på aktivitet og trænbarhed — men tåler dårligt at være alene. Marker \"timer alene\" som en absolut grænse, og en lang dag alene udelukker den helt, uanset hvor godt den klarer sig andre steder.",
    calloutTrait1: "Høj score på aktivitet",
    calloutTrait2: "Høj score på trænbarhed",
    calloutEliminated: "Stadig udelukket",
    limitsTitle: "Hvad en matchprocent er — og ikke er",
    limits:
      "En DoggMatch-procent er en algoritmisk vurdering af kompatibilitet, baseret på strukturerede racedata og de svar du gav os. Den er ikke en videnskabelig forudsigelse, ikke et mål på en bestemt hund, og den hævder ingen sikkerhed. Hunde er individer; to hunde af samme race kan leve meget forskelligt. For en hund du allerede kender, scorer vi hundens egne observerede egenskaber i stedet for antagelser om racen.",
    vetTitle: "Vi er ikke din dyrlæge",
    vetBody:
      "DoggMatch tilbyder generel oplysning om livet med hund. Vi stiller ingen diagnose, behandler ikke og udskriver ikke recepter, og vi erstatter aldrig råd fra en kvalificeret dyrlæge, adfærdsspecialist eller træner, der har mødt din hund. Er du bekymret, så ring til dyrlægen — og ved akut sygdom, tag direkte derhen.",
    borderTitle: "Rejseregler ændrer sig",
    borderBody:
      "Grænse- og indførselskrav fastsættes af myndighederne og kan ændres med kort varsel. Vi linker til myndigheden for hvert land og siger klart fra, når vi ikke har en verificeret regel for en rejserute — i stedet for at gætte.",
    registryTitle: "Kilderegistret",
    registryBody:
      "Sorteret efter emne. Hver post linker til den oprindelige kilde. Nye kilder og gennemgangsdatoer tilføjes her, efterhånden som siden vokser.",
    usedOn: "Bruges på",
    reviewedShort: "Tjekket",
    addTitle: "Har du fundet noget, der er forkert?",
    addBody:
      "Finder du en påstand uden belæg, eller en kilde der har flyttet sig eller ændret sig, så sig til — så retter vi det. Rettelser er altid velkomne.",
    contact: "Send os en rettelse",
  },
  se: {
    eyebrow: "Öppenhet",
    h1: "Var vår information kommer ifrån",
    intro:
      "Vi visar hellre uträkningen än att låta smarta. Allt faktabaserat på DoggMatch kommer från namngivna organisationer du kan kontrollera själv, och allt vi räknar ut själva är enkel matematik vi gärna förklarar.",
    reviewed: "Hela källregistret senast granskat",
    twoKinds: "Två olika typer av information",
    externalTitle: "Kunskap från andra",
    externalBody:
      "Rasstandarder, hälso- och näringsvägledning, välfärdsregler och gränskrav kommer från veterinärorganisationer, publicerad forskning, statliga myndigheter, erkända kennelklubbar och etablerade djurskyddsorganisationer. De listas nedan, efter ämne, med en länk till sidan vi läste och datumet vi senast kontrollerade den.",
    ownTitle: "Beräkningar som är våra egna",
    ownBody:
      "Matchprocent, portionsuppskattningar, veckorytmer och readiness-poäng tas fram av vår egen deterministiska kod. Samma svar ger alltid samma resultat — inga gissningar eller dold AI, bara transparenta, tydliga regler. Ingen personlig information lämnar din enhet för att räkna ut det.",
    methodTitle: "Så här fungerar matchningen faktiskt",
    stageWord: "Steg",
    stages: [
      {
        t: "Din livsstilsinformation",
        b: "Boendeform, timmar ensam, aktivitetsnivå, erfarenhet och förhållanden hemma som barn, andra djur, fällning och allergier.",
      },
      {
        t: "Eliminering av absoluta gränser",
        b: "Allvarlig allergi, dåligt matchande lägenhet och långa dagar ensam kontrolleras först. Markera någon av dessa som en absolut gräns själv, och en ras som inte uppfyller den tas bort helt från dina resultat — inte bara nedgraderad.",
      },
      {
        t: "Deterministisk poängsättning på flera vektorer",
        b: "Varje kvarvarande ras poängsätts på alla 9 verkliga dimensioner — livsstil, hem, aktivitet, temperament, träningsvillighet, sällskap, allergi, välbefinnande och skötsel — och kombineras sedan med fasta vikter.",
      },
      {
        t: "Transparent rapport om matchning och avvägningar",
        b: "Du ser exakt vad som stämde överens med dina svar och vad som inte gjorde det, sida vid sida — aldrig bara ett enda stängt tal.",
      },
    ],
    calloutEyebrow: "En absolut gräns i praktiken",
    calloutTitle: "Varför en border collie kan uteslutas vid 6+ timmar ensam",
    calloutBody:
      "En border collie brukar prestera lysande på aktivitet och träningsvillighet — men har låg tolerans för att lämnas ensam. Markera \"timmar ensam\" som en absolut gräns, och en lång dag ensam utesluter den helt, oavsett hur bra den presterar på andra håll.",
    calloutTrait1: "Hög poäng på aktivitet",
    calloutTrait2: "Hög poäng på träningsvillighet",
    calloutEliminated: "Fortfarande utesluten",
    limitsTitle: "Vad en matchprocent är — och inte är",
    limits:
      "En DoggMatch-procent är en algoritmisk bedömning av kompatibilitet, baserad på strukturerad rasdata och svaren du gav oss. Den är inte en vetenskaplig förutsägelse, inte ett mått på en specifik hund, och den hävdar ingen säkerhet. Hundar är individer; två hundar av samma ras kan leva mycket olika. För en hund du redan känner poängsätter vi hundens egna observerade egenskaper i stället för antaganden om rasen.",
    vetTitle: "Vi är inte din veterinär",
    vetBody:
      "DoggMatch erbjuder allmän kunskap om livet med hund. Vi ställer ingen diagnos, behandlar inte och skriver inte ut recept, och vi ersätter aldrig råd från en kvalificerad veterinär, veterinärbeteendespecialist eller tränare som har träffat din hund. Om något oroar dig, ring veterinären — och vid akut sjukdom, åk dit direkt.",
    borderTitle: "Reseregler förändras",
    borderBody:
      "Gräns- och importkrav fastställs av myndigheter och kan ändras med kort varsel. Vi länkar till myndigheten för varje land och säger tydligt ifrån när vi inte har en verifierad regel för en resväg — i stället för att gissa.",
    registryTitle: "Källregistret",
    registryBody:
      "Sorterat efter ämne. Varje post länkar till originalkällan. Nya källor och granskningsdatum läggs till här allteftersom sidan växer.",
    usedOn: "Används på",
    reviewedShort: "Kontrollerat",
    addTitle: "Har du hittat något som är fel?",
    addBody:
      "Om du hittar ett påstående som saknar stöd, eller en källa som har flyttat eller ändrats, säg till — så rättar vi det. Rättelser är alltid välkomna.",
    contact: "Skicka oss en rättelse",
  },
  fi: {
    eyebrow: "Läpinäkyvyys",
    h1: "Mistä tietomme ovat peräisin",
    intro:
      "Näytämme mieluummin laskutapamme kuin kuulostamme fiksuilta. Kaikki DoggMatchin faktatieto tulee nimetyiltä organisaatioilta, jotka voit itse tarkistaa, ja kaiken, mitä laskemme itse, on yksinkertaista matematiikkaa, jonka selitämme mielellämme.",
    reviewed: "Koko lähderekisteri viimeksi tarkistettu",
    twoKinds: "Kaksi erilaista tietolajia",
    externalTitle: "Muilta saatu tieto",
    externalBody:
      "Rotustandardit, terveys- ja ravitsemusohjeet, hyvinvointisäännöt ja rajavaatimukset tulevat eläinlääketieteellisiltä järjestöiltä, julkaistusta tutkimuksesta, viranomaisilta, tunnustetuilta kennelliitoilta ja vakiintuneilta eläinsuojelujärjestöiltä. Ne on listattu alla aiheittain, linkillä sivulle, jota luimme, ja päivämäärällä, jolloin viimeksi tarkistimme sen.",
    ownTitle: "Omat laskelmamme",
    ownBody:
      "Täsmäysprosentit, annosarviot, viikkorytmit ja valmiuspisteet tuottaa oma deterministinen koodimme. Samat vastaukset antavat aina saman tuloksen — ei arvailua tai salaista tekoälyä, vain läpinäkyviä, selkeitä sääntöjä. Mitkään henkilötiedot eivät poistu laitteeltasi niiden laskemiseksi.",
    methodTitle: "Näin täsmäys oikeasti toimii",
    stageWord: "Vaihe",
    stages: [
      {
        t: "Elämäntyylitietosi",
        b: "Asumismuoto, tunnit yksin, aktiivisuustaso, kokemus ja kotitalouden tiedot, kuten lapset, muut lemmikit, karvanlähtö ja allergiat.",
      },
      {
        t: "Ehdottomien kriteerien eliminointi",
        b: "Vakava allergia, kerrostaloon sopimattomuus ja pitkät yksinäolopäivät tarkistetaan ensin. Merkitse jokin näistä itse ehdottomaksi kriteeriksi, ja rotu, joka ei täytä sitä, poistetaan kokonaan tuloksistasi — ei vain lasketa pisteitä.",
      },
      {
        t: "Deterministinen monivektoripisteytys",
        b: "Jokainen jäljellä oleva rotu pisteytetään kaikissa 9 todellisessa ulottuvuudessa — elämäntyyli, koti, aktiivisuus, temperamentti, koulutettavuus, seura, allergia, hyvinvointi ja hoito — ja yhdistetään sitten kiinteillä painoarvoilla.",
      },
      {
        t: "Läpinäkyvä raportti sopivuudesta ja kompromisseista",
        b: "Näet tarkalleen, mikä vastasi vastauksiasi ja mikä ei, rinnakkain — ei koskaan vain yhtä suljettua lukua.",
      },
    ],
    calloutEyebrow: "Ehdoton vaatimus käytännössä",
    calloutTitle: "Miksi bordercollie voidaan sulkea pois, jos koira olisi yksin 6+ tuntia",
    calloutBody:
      "Bordercollie pärjää yleensä loistavasti aktiivisuudessa ja koulutettavuudessa — mutta sen kyky sietää yksinoloa on heikko. Merkitse \"tunnit yksin\" ehdottomaksi kriteeriksi, ja pitkä yksinäolopäivä sulkee sen kokonaan pois, riippumatta siitä, kuinka hyvin se pärjää muualla.",
    calloutTrait1: "Korkea aktiivisuuspisteytys",
    calloutTrait2: "Korkea koulutettavuuspisteytys",
    calloutEliminated: "Silti suljettu pois",
    limitsTitle: "Mikä täsmäysprosentti on — ja mikä se ei ole",
    limits:
      "DoggMatch-prosentti on algoritminen yhteensopivuusarvio, joka perustuu jäsenneltyyn rotutietoon ja antamiisi vastauksiin. Se ei ole tieteellinen ennuste, ei minkään yksittäisen koiran mitta, eikä se väitä mitään varmuudesta. Koirat ovat yksilöitä; kaksi samaa rotua olevaa koiraa voi elää hyvin eri tavoin. Koirasta, jonka jo tunnet, arvioimme koiran omia havaittuja ominaisuuksia rotua koskevien oletusten sijaan.",
    vetTitle: "Emme ole eläinlääkärisi",
    vetBody:
      "DoggMatch tarjoaa yleistä tietoa koiran kanssa elämisestä. Emme diagnosoi, hoida tai määrää lääkkeitä, emmekä koskaan korvaa pätevän eläinlääkärin, eläinlääketieteellisen käyttäytymisasiantuntijan tai kouluttajan neuvoja, joka on tavannut koirasi. Jos jokin huolestuttaa sinua, soita eläinlääkärille — ja hätätapauksessa mene suoraan sinne.",
    borderTitle: "Matkustussäännöt muuttuvat",
    borderBody:
      "Raja- ja tuontivaatimukset asettavat viranomaiset, ja ne voivat muuttua lyhyellä varoitusajalla. Linkitämme kunkin maan viranomaiseen ja kerromme suoraan, kun meillä ei ole vahvistettua sääntöä jollekin reitille — arvailun sijaan.",
    registryTitle: "Lähderekisteri",
    registryBody:
      "Järjestetty aiheittain. Jokainen merkintä linkittää alkuperäiseen lähteeseen. Uusia lähteitä ja tarkistuspäivämääriä lisätään tänne sivun kasvaessa.",
    usedOn: "Käytetty sivulla",
    reviewedShort: "Tarkistettu",
    addTitle: "Huomasitko jotain väärää?",
    addBody:
      "Jos löydät väitteen, jota ei ole tuettu, tai lähteen, joka on siirtynyt tai muuttunut, kerro meille — korjaamme sen. Korjaukset ovat aina tervetulleita.",
    contact: "Lähetä meille korjaus",
  },
  de: {
    eyebrow: "Transparenz",
    h1: "Woher unsere Informationen stammen",
    intro:
      "Wir zeigen lieber unsere Hausaufgaben, als klug zu klingen. Alles Faktische auf DoggMatch stammt von namentlich genannten Organisationen, die du selbst überprüfen kannst, und alles, was wir selbst berechnen, ist einfache Mathematik, die wir gerne erklären.",
    reviewed: "Gesamtes Verzeichnis zuletzt geprüft",
    twoKinds: "Zwei verschiedene Arten von Informationen",
    externalTitle: "Wissen von anderen",
    externalBody:
      "Rassestandards, Gesundheits- und Ernährungshinweise, Tierschutzregeln und Einreisebestimmungen stammen von tierärztlichen Organisationen, veröffentlichter Forschung, staatlichen Behörden, anerkannten Zuchtverbänden und etablierten Tierschutzorganisationen. Sie sind unten nach Thema aufgeführt, mit einem Link zur gelesenen Seite und dem Datum unserer letzten Prüfung.",
    ownTitle: "Berechnungen, die von uns stammen",
    ownBody:
      "Match-Prozentsätze, Portionsschätzungen, Wochenrhythmen und Bereitschaftswerte entstehen aus unserem eigenen deterministischen Code. Dieselben Antworten ergeben immer dasselbe Ergebnis — Kein KI-Raten, keine Blackbox – transparente, feste Regeln. Keine persönlichen Daten verlassen dabei dein Gerät.",
    methodTitle: "So funktioniert das Matching wirklich",
    stageWord: "Schritt",
    stages: [
      {
        t: "Deine Lebensstil-Angaben",
        b: "Wohnsituation, Stunden allein, Aktivitätslevel, Erfahrung und Details im Haushalt wie Kinder, andere Haustiere, Fellwechsel und Allergien.",
      },
      {
        t: "Ausschluss nach Ausschlusskriterien",
        b: "Schwere Allergien, unpassende Wohnungsgrößen und lange Zeiten allein werden zuerst geprüft. Markiere selbst eines davon als Ausschlusskriterium, und eine Rasse, die es überschreitet, fällt komplett aus deinen Ergebnissen — nicht nur schlechter bewertet.",
      },
      {
        t: "Deterministische Mehrfach-Bewertung",
        b: "Jede verbleibende Rasse wird in allen 9 realen Dimensionen bewertet — Lebensstil, Zuhause, Aktivität, Temperament, Trainierbarkeit, Gesellschaft, Allergie, Wohlbefinden und Pflege — und dann mit festen Gewichtungen kombiniert.",
      },
      {
        t: "Transparenter Bericht zu Passung und Kompromissen",
        b: "Du siehst genau, was zu deinen Antworten passt und was nicht, nebeneinander — nie nur eine einzelne, undurchsichtige Zahl.",
      },
    ],
    calloutEyebrow: "Ein Ausschlusskriterium in der Praxis",
    calloutTitle: "Warum ein Border Collie bei 6+ Stunden allein ausgeschlossen werden kann",
    calloutBody:
      "Ein Border Collie punktet meist hervorragend bei Aktivität und Trainierbarkeit — aber seine Toleranz fürs Alleinsein ist gering. Markiere „Stunden allein\" als Ausschlusskriterium, und ein langer Tag allein schließt ihn komplett aus, egal wie gut er sonst abschneidet.",
    calloutTrait1: "Hoher Aktivitätswert",
    calloutTrait2: "Hoher Trainierbarkeitswert",
    calloutEliminated: "Trotzdem ausgeschlossen",
    limitsTitle: "Was eine Match-Prozentzahl ist — und was nicht",
    limits:
      "Eine DoggMatch-Prozentzahl ist eine algorithmische Kompatibilitätseinschätzung, basierend auf strukturierten Rassedaten und deinen Antworten. Sie ist keine wissenschaftliche Vorhersage, kein Maß für einen einzelnen Hund, und sie beansprucht keine Gewissheit. Hunde sind Individuen; zwei Hunde derselben Rasse können sehr unterschiedlich leben. Bei einem Hund, den du bereits kennst, bewerten wir die eigenen beobachteten Eigenschaften des Hundes statt Annahmen über seine Rasse.",
    vetTitle: "Wir sind nicht dein Tierarzt",
    vetBody:
      "DoggMatch bietet allgemeine Aufklärung über das Leben mit Hund. Wir stellen keine Diagnosen, behandeln nicht und verschreiben nichts, und wir ersetzen nie den Rat eines qualifizierten Tierarztes, einer Verhaltenstherapeutin oder eines Trainers, der deinen Hund kennt. Wenn dich etwas beunruhigt, ruf deinen Tierarzt an — und im Notfall geh direkt hin.",
    borderTitle: "Reisebestimmungen ändern sich",
    borderBody:
      "Grenz- und Einfuhrbestimmungen werden von Behörden festgelegt und können sich kurzfristig ändern. Wir verlinken zur zuständigen Behörde jedes Landes und sagen klar, wenn wir für eine Route keine geprüfte Regel vorliegen haben, statt zu raten.",
    registryTitle: "Das Quellenverzeichnis",
    registryBody:
      "Nach Thema geordnet. Jeder Eintrag verlinkt zur Originalquelle. Neue Quellen und Prüfdaten werden hier ergänzt, während die Seite wächst.",
    usedOn: "Verwendet auf",
    reviewedShort: "Geprüft",
    addTitle: "Etwas Falsches entdeckt?",
    addBody:
      "Wenn du eine unbelegte Behauptung findest oder eine Quelle, die umgezogen oder verändert wurde, sag uns Bescheid, und wir korrigieren es. Korrekturen sind jederzeit willkommen.",
    contact: "Sende uns eine Korrektur",
  },
  fr: {
    eyebrow: "Transparence",
    h1: "D'où viennent nos informations",
    intro:
      "Nous préférons montrer nos calculs plutôt que de paraître savants. Tout ce qui est factuel sur DoggMatch provient d'organisations nommées que tu peux vérifier toi-même, et tout ce que nous calculons nous-mêmes est de l'arithmétique simple que nous expliquons volontiers.",
    reviewed: "Registre complet mis à jour pour la dernière fois",
    twoKinds: "Deux types d'informations différents",
    externalTitle: "Connaissances venant d'ailleurs",
    externalBody:
      "Les standards de race, les conseils de santé et de nutrition, les règles de bien-être et les exigences frontalières proviennent d'organisations vétérinaires, de recherches publiées, d'autorités gouvernementales, de clubs canins reconnus et d'associations de protection animale établies. Elles sont listées ci-dessous, par sujet, avec un lien vers la page consultée et la date de notre dernière vérification.",
    ownTitle: "Des calculs qui nous appartiennent",
    ownBody:
      "Les pourcentages de compatibilité, les estimations de portions, les rythmes hebdomadaires et les scores de préparation sont produits par notre propre code déterministe. Les mêmes réponses donnent toujours le même résultat — Pas d'estimation opaque par IA – des règles claires et transparentes. Aucune donnée personnelle ne quitte ton appareil pour les calculer.",
    methodTitle: "Comment fonctionne réellement le matching",
    stageWord: "Étape",
    stages: [
      {
        t: "Tes informations de style de vie",
        b: "Espace de vie, heures seul, niveau d'activité, expérience et détails du foyer comme les enfants, les autres animaux, la mue et les allergies.",
      },
      {
        t: "Élimination des critères rédhibitoires",
        b: "Les allergies sévères, l'incompatibilité avec un appartement et les longues journées seul sont vérifiées en premier. Marque toi-même l'un de ces éléments comme critère rédhibitoire, et une race qui le dépasse est totalement retirée de tes résultats — pas seulement moins bien notée.",
      },
      {
        t: "Notation déterministe multi-vecteurs",
        b: "Chaque race restante est notée sur les 9 dimensions réelles — style de vie, logement, activité, tempérament, aptitude à l'éducation, compagnie, allergie, bien-être et entretien — puis combinée avec des pondérations fixes.",
      },
      {
        t: "Rapport transparent des correspondances et compromis",
        b: "Tu vois exactement ce qui correspond à tes réponses et ce qui ne correspond pas, côte à côte — jamais juste un seul chiffre opaque.",
      },
    ],
    calloutEyebrow: "Un critère rédhibitoire en pratique",
    calloutTitle: "Pourquoi un Border Collie peut être éliminé pour une journée de plus de 6 heures seul",
    calloutBody:
      "Un Border Collie obtient généralement d'excellents scores en activité et en aptitude à l'éducation — mais sa tolérance à la solitude est faible. Marque « heures seul » comme critère rédhibitoire, et une longue journée seul l'exclut complètement, quelle que soit sa performance ailleurs.",
    calloutTrait1: "Score d'activité élevé",
    calloutTrait2: "Score d'aptitude à l'éducation élevé",
    calloutEliminated: "Éliminé malgré tout",
    limitsTitle: "Ce qu'est un pourcentage de compatibilité — et ce qu'il n'est pas",
    limits:
      "Un pourcentage DoggMatch est une évaluation algorithmique de compatibilité, fondée sur des données de race structurées et les réponses que tu nous as données. Ce n'est pas une prédiction scientifique, ni une mesure d'un chien en particulier, et cela ne prétend à aucune certitude. Les chiens sont des individus ; deux chiens de la même race peuvent vivre très différemment. Pour un chien que tu connais déjà, nous évaluons ses propres caractéristiques observées plutôt que des suppositions sur sa race.",
    vetTitle: "Nous ne sommes pas ton vétérinaire",
    vetBody:
      "DoggMatch propose une éducation générale sur la vie avec un chien. Nous ne diagnostiquons pas, ne traitons pas, ne prescrivons pas, et nous ne remplaçons jamais les conseils d'un vétérinaire qualifié, d'un comportementaliste vétérinaire ou d'un éducateur qui a rencontré ton chien. Si quelque chose t'inquiète, appelle ton vétérinaire — et en cas d'urgence, rends-toi directement sur place.",
    borderTitle: "Les règles de voyage changent",
    borderBody:
      "Les exigences frontalières et d'importation sont fixées par les gouvernements et peuvent changer sans grand préavis. Nous renvoyons vers l'autorité de chaque pays et te disons clairement quand nous n'avons pas de règle vérifiée pour un trajet, plutôt que de deviner.",
    registryTitle: "Le registre des sources",
    registryBody:
      "Organisé par sujet. Chaque entrée renvoie vers la source d'origine. De nouvelles sources et dates de vérification sont ajoutées ici à mesure que le site évolue.",
    usedOn: "Utilisé sur",
    reviewedShort: "Vérifié",
    addTitle: "Tu as repéré une erreur ?",
    addBody:
      "Si tu trouves une affirmation non étayée, ou une source qui a déménagé ou changé, dis-le-nous et nous la corrigerons. Les corrections sont toujours les bienvenues.",
    contact: "Envoie-nous une correction",
  },
  nl: {
    eyebrow: "Transparantie",
    h1: "Waar onze informatie vandaan komt",
    intro:
      "We laten liever ons huiswerk zien dan slim te klinken. Alles wat feitelijk is op DoggMatch komt van met naam genoemde organisaties die je zelf kunt controleren, en alles wat we zelf berekenen is eenvoudige rekenkunde die we graag uitleggen.",
    reviewed: "Volledig register laatst gecontroleerd",
    twoKinds: "Twee soorten informatie",
    externalTitle: "Kennis van anderen",
    externalBody:
      "Rasstandaarden, gezondheids- en voedingsadvies, welzijnsregels en grensvereisten komen van diergeneeskundige organisaties, gepubliceerd onderzoek, overheidsinstanties, erkende kennelclubs en gevestigde dierenwelzijnsorganisaties. Ze staan hieronder per onderwerp, met een link naar de pagina die we hebben gelezen en de datum waarop we deze voor het laatst hebben gecontroleerd.",
    ownTitle: "Berekeningen die van ons zijn",
    ownBody:
      "Matchpercentages, portieschattingen, weekritmes en gereedheidsscores worden geproduceerd door onze eigen deterministische code. Dezelfde antwoorden geven altijd hetzelfde resultaat — Geen giswerk, geen zwarte doos van AI – heldere, vaste regels. Er verlaat geen persoonlijke data je apparaat om ze te berekenen.",
    methodTitle: "Zo werkt de matching echt",
    stageWord: "Stap",
    stages: [
      {
        t: "Jouw leefstijlgegevens",
        b: "Woonruimte, uren alleen, activiteitsniveau, ervaring en huishoudelijke details zoals kinderen, andere huisdieren, vachtverlies en allergieën.",
      },
      {
        t: "Uitsluiting op basis van ononderhandelbare criteria",
        b: "Ernstige allergieën, een niet-passend appartement en lange dagen alleen worden eerst gecontroleerd. Markeer er zelf een als ononderhandelbaar criterium, en een ras dat dit overschrijdt wordt volledig uit je resultaten verwijderd — niet alleen lager gescoord.",
      },
      {
        t: "Deterministische multidimensionale score",
        b: "Elk overgebleven ras wordt gescoord op alle 9 echte dimensies — levensstijl, huis, activiteit, temperament, trainbaarheid, gezelschap, allergie, welzijn en verzorging — en vervolgens gecombineerd met vaste gewichten.",
      },
      {
        t: "Transparant rapport over match en afwegingen",
        b: "Je ziet precies wat overeenkwam met je antwoorden en wat niet, naast elkaar — nooit slechts één ondoorzichtig getal.",
      },
    ],
    calloutEyebrow: "Een ononderhandelbaar criterium in de praktijk",
    calloutTitle: "Waarom een Border Collie kan worden uitgesloten bij 6+ uur alleen",
    calloutBody:
      "Een Border Collie scoort meestal uitstekend op activiteit en trainbaarheid — maar heeft weinig tolerantie voor alleen zijn. Markeer \"uren alleen\" als ononderhandelbaar criterium, en een lange dag alleen sluit hem volledig uit, hoe goed hij ook elders scoort.",
    calloutTrait1: "Hoge activiteitsscore",
    calloutTrait2: "Hoge trainbaarheidsscore",
    calloutEliminated: "Nog steeds uitgesloten",
    limitsTitle: "Wat een matchpercentage is — en niet is",
    limits:
      "Een DoggMatch-percentage is een algoritmische compatibiliteitsbeoordeling, gebaseerd op gestructureerde rasgegevens en de antwoorden die je ons hebt gegeven. Het is geen wetenschappelijke voorspelling, geen meting van een individuele hond, en het claimt geen zekerheid. Honden zijn individuen; twee honden van hetzelfde ras kunnen heel verschillend leven. Voor een hond die je al kent, scoren we de eigen waargenomen eigenschappen van de hond in plaats van aannames over het ras.",
    vetTitle: "Wij zijn niet je dierenarts",
    vetBody:
      "DoggMatch biedt algemene educatie over het leven met een hond. We stellen geen diagnoses, behandelen niet en schrijven niets voor, en we vervangen nooit het advies van een gekwalificeerde dierenarts, diergedragstherapeut of trainer die je hond heeft ontmoet. Als iets je zorgen baart, bel dan je dierenarts — en ga bij een noodgeval direct daarheen.",
    borderTitle: "Reisregels veranderen",
    borderBody:
      "Grens- en importvereisten worden vastgesteld door overheden en kunnen op korte termijn veranderen. We linken naar de instantie van elk land en vertellen je duidelijk wanneer we geen geverifieerde regel hebben voor een route, in plaats van te gokken.",
    registryTitle: "Het bronnenregister",
    registryBody:
      "Geordend per onderwerp. Elke vermelding linkt naar de oorspronkelijke bron. Nieuwe bronnen en controledatums worden hier toegevoegd naarmate de site groeit.",
    usedOn: "Gebruikt op",
    reviewedShort: "Gecontroleerd",
    addTitle: "Iets verkeerds gespot?",
    addBody:
      "Als je een bewering vindt die niet onderbouwd is, of een bron die verplaatst of veranderd is, laat het ons weten en we lossen het op. Correcties zijn altijd welkom.",
    contact: "Stuur ons een correctie",
  },
} as const;

function SourcesPage() {
  const c = useCopy(copy);
  const categories = resolvedSourceCategories();

  return (
    <div className="container-page max-w-4xl py-14 md:py-24">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h1 className="display-lg mt-6">{c.h1}</h1>
      <ShareBar className="mt-6" />
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
      <p className="mt-4 text-sm text-muted-foreground">
        {c.reviewed}: {lastReviewedAll()}
      </p>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight">{c.twoKinds}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card title={c.externalTitle} body={c.externalBody} />
          <Card title={c.ownTitle} body={c.ownBody} accent />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight">{c.methodTitle}</h2>
        <ol className="mt-6">
          {c.stages.map((s, i) => (
            <li key={s.t}>
              <div className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-strong bg-card text-xs font-semibold text-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="inline-flex items-center rounded-full border border-border-strong px-2.5 py-0.5 text-xs text-muted-foreground">
                    {c.stageWord} {i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg tracking-tight text-foreground">{s.t}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground">{s.b}</p>
                </div>
              </div>
              {i < c.stages.length - 1 && (
                <div className="flex justify-center py-1" aria-hidden="true">
                  <PipelineConnector />
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6">
          <p className="eyebrow">{c.calloutEyebrow}</p>
          <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground">
            {c.calloutTitle}
          </h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{c.calloutBody}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-border-strong px-3 py-1 text-xs text-muted-foreground">
              {c.calloutTrait1}
            </span>
            <span className="rounded-full border border-border-strong px-3 py-1 text-xs text-muted-foreground">
              {c.calloutTrait2}
            </span>
            <ArrowRightIcon />
            <span className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {c.calloutEliminated}
            </span>
          </div>
        </div>
      </section>

      <section className="mt-16 space-y-8">
        <Note title={c.limitsTitle} body={c.limits} />
        <Note title={c.vetTitle} body={c.vetBody} />
        <Note title={c.borderTitle} body={c.borderBody} />
      </section>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight">{c.registryTitle}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{c.registryBody}</p>

        <div className="mt-10 space-y-12">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-28">
              <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                {cat.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{cat.blurb}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {c.usedOn}: {cat.usedOn}
              </p>
              <ul className="mt-5 space-y-3">
                {cat.sources.map((s) => (
                  <li key={s.id} className="rounded-2xl border border-border bg-surface p-5">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer external"
                      className="font-medium text-foreground underline decoration-accent underline-offset-4 hover:text-accent"
                    >
                      {s.org}
                    </a>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {s.what}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {c.reviewedShort}: {s.lastReviewed}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-border bg-surface p-8">
        <h2 className="font-display text-xl font-semibold tracking-tight">{c.addTitle}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{c.addBody}</p>
        <a
          href="/contact"
          className="mt-5 inline-flex text-[0.9375rem] font-medium text-foreground underline decoration-accent underline-offset-4"
        >
          {c.contact}
        </a>
      </section>
    </div>
  );
}

function Card({ title, body, accent }: { title: string; body: string; accent?: boolean }) {
  return (
    <div
      className={
        accent
          ? "rounded-3xl border border-accent/30 bg-accent/5 p-6"
          : "rounded-3xl border border-border bg-surface p-6"
      }
    >
      <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function Note({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-l-2 border-accent pl-6">
      <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

/** A minimal connector between two pipeline stages. */
function PipelineConnector() {
  return (
    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true" className="text-border-strong">
      <path d="M8 0v16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 15l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-muted-foreground">
      <path d="M4 12h16M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
