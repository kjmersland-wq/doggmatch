import { Link, createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { SectionHead } from "@/components/dogmatch/journey/parts";
import { getDogContent } from "@/data/getdog/content";
import { useCopy } from "@/i18n";
import heroImage from "@/assets/get-a-dog-hero.jpg";
import puppyImage from "@/assets/puppy.jpg";
import adultImage from "@/assets/adult-dog.jpg";
import welcomeImage from "@/assets/welcome-home.jpg";
import { seoLinks, localizedHead } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Get a dog — the whole journey, from thinking about it to bringing them home | DoggMatch";
const description =
  "Thinking about getting a dog? Work out whether now is the right time, find the dogs that suit your life, choose carefully, understand the costs and get your home ready.";

const seoCopy = {
  en: { title, description },
  no: {
    title: "Skaffe hund — hele veien, fra tanken til de er hjemme | DoggMatch",
    description:
      "Vurderer du å skaffe hund? Finn ut om tiden er riktig nå, finn hundene som passer livet ditt, velg med omhu, forstå kostnadene og gjør hjemmet klart.",
  },
  pl: {
    title: "Zanim weźmiesz psa — cała droga, od pomysłu po powrót do domu | DoggMatch",
    description:
      "Myślisz o psie? Sprawdź, czy to dobry moment, znajdź psy pasujące do Twojego życia, wybieraj rozważnie, poznaj koszty i przygotuj dom.",
  },
  dk: {
    title: "Skaf hund — hele vejen, fra tanken til de er hjemme | DoggMatch",
    description:
      "Overvejer du at skaffe en hund? Find ud af om tidspunktet er rigtigt, find hundene der passer til dit liv, vælg med omtanke, forstå omkostningerne, og gør hjemmet klar.",
  },
  se: {
    title: "Skaffa hund — hela vägen, från tanken till de är hemma | DoggMatch",
    description:
      "Funderar du på att skaffa hund? Ta reda på om tiden är rätt, hitta hundarna som passar ditt liv, välj med omsorg, förstå kostnaderna och gör hemmet redo.",
  },
  fi: {
    title: "Koiran hankinta — koko matka, ajatuksesta kotiin tuloon | DoggMatch",
    description:
      "Harkitsetko koiran hankintaa? Selvitä, onko ajankohta oikea, löydä elämääsi sopivat koirat, valitse harkiten, ymmärrä kustannukset ja valmistele kotisi.",
  },
  de: {
    title: "Einen Hund holen — der ganze Weg, vom ersten Gedanken bis zum Einzug | DoggMatch",
    description:
      "Denkst du darüber nach, einen Hund zu holen? Finde heraus, ob der Zeitpunkt richtig ist, finde die Hunde, die zu deinem Leben passen, wähle mit Bedacht, verstehe die Kosten und mach dein Zuhause bereit.",
  },
  fr: {
    title: "Adopter un chien — tout le parcours, de l'idée à son arrivée | DoggMatch",
    description:
      "Vous pensez à adopter un chien ? Découvrez si le moment est venu, trouvez les chiens qui conviennent à votre vie, choisissez avec soin, comprenez les coûts et préparez votre maison.",
  },
  nl: {
    title: "Een hond nemen — het hele traject, van gedachte tot thuiskomst | DoggMatch",
    description:
      "Denk je erover na om een hond te nemen? Ontdek of het juiste moment is aangebroken, vind de honden die bij je leven passen, kies zorgvuldig, begrijp de kosten en maak je huis klaar.",
  },
};

export const Route = createFileRoute("/{-$lang}/get-a-dog/")({
  head: (ctx) => localizedHead(ctx, "/get-a-dog", seoCopy),
  component: GetADogPage,
});

const copy = {
  en: {
    eyebrow: "Get a dog",
    heroTitle: "Thinking about getting a dog?",
    heroBody:
      "A dog can change your everyday life in wonderful ways. It can also be a big commitment. Let's make sure you're ready for the right one.",
    ctaReady: "Am I Ready?",
    ctaFind: "Find My Dog",
    heroFootnote: "Free, all of it. No account, and nothing kept anywhere but this device.",
    heroAlt: "An older man sitting on his front steps with his arm around a scruffy mixed-breed dog",
    journeyEyebrow: "The journey",
    journeyTitle: "One decision, taken one step at a time.",
    journeyBody:
      "Getting a dog is exciting. It's also a big decision. Here's the whole path, in the order it usually happens — start anywhere, and come back whenever you like.",
    open: "Open",
    choiceEyebrow: "A first big choice",
    choiceTitle: "Puppy, or a dog who's already grown up?",
    choiceBody:
      "Two quite different first years. Neither is better — the right one depends far more on your life than on the dog.",
    puppyAlt: "A cocker spaniel puppy sitting beside a chewed slipper",
    puppyLabel: "A puppy",
    puppyBody: "Sleepless months, and you shape almost everything.",
    adultAlt: "A calm adult dog resting on a sofa in a sunlit flat",
    adultLabel: "An adult dog",
    adultBody: "Much more of what you see is what you get.",
    compare: "Compare them properly",
    welcomeAlt: "A family sitting quietly on the floor as a newly arrived dog sniffs its new bed",
    welcomeEyebrow: "The end of this journey",
    welcomeTitle: "And the beginning of the far longer one.",
    welcomeBody:
      "When your dog comes home, everything you've told us moves across into My Dog — food, training, health, walks and paperwork, all in one place.",
    welcomeCta: "See the first week",
  },
  no: {
    eyebrow: "Skaff hund",
    heroTitle: "Går du og tenker på å skaffe hund?",
    heroBody:
      "En hund kan gjøre hverdagen din bedre på fantastiske måter. Det er også en stor forpliktelse. La oss sørge for at du er klar for den rette.",
    ctaReady: "Er jeg klar?",
    ctaFind: "Finn min hund",
    heroFootnote: "Alt sammen gratis. Ingen konto, og ingenting lagres andre steder enn på denne enheten.",
    heroAlt: "En eldre mann som sitter på trappen med armen rundt en raggete blandingshund",
    journeyEyebrow: "Reisen",
    journeyTitle: "Én beslutning, tatt ett steg av gangen.",
    journeyBody:
      "Å skaffe hund er spennende. Det er også en stor avgjørelse. Her er hele veien, i den rekkefølgen den vanligvis skjer — start hvor som helst, og kom tilbake når du vil.",
    open: "Åpne",
    choiceEyebrow: "Et første, stort valg",
    choiceTitle: "Valp, eller en hund som allerede er voksen?",
    choiceBody:
      "To ganske forskjellige første år. Ingen av delene er best — hva som passer avhenger langt mer av livet ditt enn av hunden.",
    puppyAlt: "En cocker spaniel-valp som sitter ved siden av en tygget tøffel",
    puppyLabel: "En valp",
    puppyBody: "Søvnløse måneder, og du former nesten alt selv.",
    adultAlt: "En rolig voksen hund som hviler i en sofa i en solfylt leilighet",
    adultLabel: "En voksen hund",
    adultBody: "Mye mer av det du ser, er det du får.",
    compare: "Sammenlign dem ordentlig",
    welcomeAlt: "En familie som sitter stille på gulvet mens en nyankommet hund snuser på sengen sin",
    welcomeEyebrow: "Slutten på denne reisen",
    welcomeTitle: "Og begynnelsen på den langt lengre.",
    welcomeBody:
      "Når hunden din kommer hjem, flyttes alt du har fortalt oss over i Min hund — mat, trening, helse, turer og papirer, samlet ett sted.",
    welcomeCta: "Se den første uken",
  },
  pl: {
    eyebrow: "Zdobądź psa",
    heroTitle: "Zastanawiasz się nad zabraniem psa do domu?",
    heroBody:
      "Pies potrafi wspaniale odmienić Twoją codzienność. Może też być dużym zobowiązaniem. Upewnijmy się, że jesteś gotowy na tego właściwego.",
    ctaReady: "Czy jestem gotowy?",
    ctaFind: "Znajdź mojego psa",
    heroFootnote: "Wszystko za darmo. Bez konta, i nic nie jest przechowywane nigdzie poza tym urządzeniem.",
    heroAlt: "Starszy mężczyzna siedzący na schodach z ręką wokół kudłatego psa mieszańca",
    journeyEyebrow: "Podróż",
    journeyTitle: "Jedna decyzja, podejmowana krok po kroku.",
    journeyBody:
      "Zabranie psa do domu to ekscytująca sprawa. To też ważna decyzja. Oto cała droga, w kolejności, w jakiej zwykle przebiega — zacznij, gdziekolwiek chcesz, i wracaj, kiedy tylko masz ochotę.",
    open: "Otwórz",
    choiceEyebrow: "Pierwszy duży wybór",
    choiceTitle: "Szczeniak, czy pies, który jest już dorosły?",
    choiceBody:
      "Dwa zupełnie inne pierwsze lata. Żadne z nich nie jest lepsze — to, co pasuje, zależy dużo bardziej od Twojego życia niż od psa.",
    puppyAlt: "Szczeniak cocker spaniela siedzący obok pogryzionego kapcia",
    puppyLabel: "Szczeniak",
    puppyBody: "Nieprzespane miesiące, i to Ty kształtujesz niemal wszystko.",
    adultAlt: "Spokojny dorosły pies odpoczywający na kanapie w słonecznym mieszkaniu",
    adultLabel: "Dorosły pies",
    adultBody: "O wiele więcej z tego, co widzisz, to naprawdę to, co dostajesz.",
    compare: "Porównaj je dokładnie",
    welcomeAlt: "Rodzina siedząca spokojnie na podłodze, gdy nowo przybyły pies obwąchuje swoje nowe legowisko",
    welcomeEyebrow: "Koniec tej podróży",
    welcomeTitle: "I początek tej znacznie dłuższej.",
    welcomeBody:
      "Gdy Twój pies trafi do domu, wszystko, co nam powiedziałeś, przechodzi do Mój pies — jedzenie, trening, zdrowie, spacery i dokumenty, wszystko w jednym miejscu.",
    welcomeCta: "Zobacz pierwszy tydzień",
  },
  dk: {
    eyebrow: "Skaf hund",
    heroTitle: "Går du og overvejer at skaffe en hund?",
    heroBody:
      "En hund kan gøre din hverdag bedre på fantastiske måder. Det er også en stor forpligtelse. Lad os sikre, at du er klar til den rigtige.",
    ctaReady: "Er jeg klar?",
    ctaFind: "Find min hund",
    heroFootnote: "Det hele er gratis. Ingen konto, og intet gemmes andre steder end på denne enhed.",
    heroAlt: "En ældre mand siddende på sin trappesten med armen om en langhåret blandingshund",
    journeyEyebrow: "Rejsen",
    journeyTitle: "Én beslutning, taget ét skridt ad gangen.",
    journeyBody:
      "At skaffe en hund er spændende. Det er også en stor beslutning. Her er hele vejen, i den rækkefølge det plejer at ske — start hvor som helst, og kom tilbage når du har lyst.",
    open: "Åbn",
    choiceEyebrow: "Et første, stort valg",
    choiceTitle: "Hvalp, eller en hund der allerede er voksen?",
    choiceBody:
      "To ret forskellige første år. Ingen af delene er bedre — det rigtige valg afhænger langt mere af dit liv end af hunden.",
    puppyAlt: "En cocker spaniel-hvalp siddende ved siden af en tygget hjemmesko",
    puppyLabel: "En hvalp",
    puppyBody: "Søvnløse måneder, og du former næsten alt selv.",
    adultAlt: "En rolig voksen hund der hviler på en sofa i en solbeskinnet lejlighed",
    adultLabel: "En voksen hund",
    adultBody: "Meget mere af det du ser, er det du får.",
    compare: "Sammenlign dem ordentligt",
    welcomeAlt: "En familie der sidder stille på gulvet, mens en nyankommet hund snuser til sin nye seng",
    welcomeEyebrow: "Slutningen på denne rejse",
    welcomeTitle: "Og begyndelsen på den langt længere.",
    welcomeBody:
      "Når din hund kommer hjem, flytter alt det du har fortalt os over i Min Hund — mad, træning, sundhed, gåture og papirer, samlet ét sted.",
    welcomeCta: "Se den første uge",
  },
  se: {
    eyebrow: "Skaffa hund",
    heroTitle: "Funderar du på att skaffa hund?",
    heroBody:
      "En hund kan förändra din vardag på fantastiska sätt. Det är också ett stort åtagande. Låt oss se till att du är redo för den rätta.",
    ctaReady: "Är jag redo?",
    ctaFind: "Hitta min hund",
    heroFootnote: "Allt är gratis. Inget konto, och inget sparas någon annanstans än på den här enheten.",
    heroAlt: "En äldre man som sitter på sin trappa med armen om en raggig blandhund",
    journeyEyebrow: "Resan",
    journeyTitle: "Ett beslut, taget ett steg i taget.",
    journeyBody:
      "Att skaffa hund är spännande. Det är också ett stort beslut. Här är hela vägen, i den ordning det brukar ske — börja var som helst, och kom tillbaka när du vill.",
    open: "Öppna",
    choiceEyebrow: "Ett första, stort val",
    choiceTitle: "Valp, eller en hund som redan är vuxen?",
    choiceBody:
      "Två ganska olika första år. Inget alternativ är bättre — vad som passar beror mycket mer på ditt liv än på hunden.",
    puppyAlt: "En cocker spaniel-valp som sitter bredvid en tuggad toffel",
    puppyLabel: "En valp",
    puppyBody: "Sömnlösa månader, och du formar nästan allt själv.",
    adultAlt: "En lugn vuxen hund som vilar i en soffa i en solig lägenhet",
    adultLabel: "En vuxen hund",
    adultBody: "Mycket mer av det du ser är det du får.",
    compare: "Jämför dem ordentligt",
    welcomeAlt: "En familj som sitter tyst på golvet medan en nyanländ hund undersöker sin nya bädd",
    welcomeEyebrow: "Slutet på den här resan",
    welcomeTitle: "Och början på den betydligt längre.",
    welcomeBody:
      "När din hund kommer hem flyttas allt du har berättat för oss över till Min Hund — mat, träning, hälsa, promenader och papper, samlat på ett ställe.",
    welcomeCta: "Se den första veckan",
  },
  fi: {
    eyebrow: "Hanki koira",
    heroTitle: "Harkitsetko koiran hankkimista?",
    heroBody:
      "Koira voi muuttaa arkesi upealla tavalla. Se on myös iso sitoumus. Varmistetaan, että olet valmis juuri oikeaan koiraan.",
    ctaReady: "Olenko valmis?",
    ctaFind: "Löydä koirani",
    heroFootnote: "Kaikki tämä on ilmaista. Ei tiliä, eikä mitään tallenneta muualle kuin tälle laitteelle.",
    heroAlt: "Vanhempi mies istumassa kotinsa portailla käsi sekarotuisen, pörröisen koiran ympärillä",
    journeyEyebrow: "Matka",
    journeyTitle: "Yksi päätös, askel kerrallaan.",
    journeyBody:
      "Koiran hankkiminen on jännittävää. Se on myös iso päätös. Tässä koko matka siinä järjestyksessä kuin se yleensä etenee — aloita mistä vain ja palaa takaisin, milloin haluat.",
    open: "Avaa",
    choiceEyebrow: "Ensimmäinen iso valinta",
    choiceTitle: "Pentu vai jo aikuinen koira?",
    choiceBody:
      "Kaksi melko erilaista ensimmäistä vuotta. Kumpikaan ei ole parempi — oikea valinta riippuu paljon enemmän elämästäsi kuin koirasta.",
    puppyAlt: "Cockerspanielin pentu istumassa pureskellun tohvelin vieressä",
    puppyLabel: "Pentu",
    puppyBody: "Unettomia kuukausia, ja muovaat lähes kaiken itse.",
    adultAlt: "Rauhallinen aikuinen koira lepäämässä sohvalla aurinkoisessa asunnossa",
    adultLabel: "Aikuinen koira",
    adultBody: "Paljon enemmän sitä, mitä näet, on sitä, mitä saat.",
    compare: "Vertaa niitä kunnolla",
    welcomeAlt: "Perhe istumassa hiljaa lattialla, kun juuri saapunut koira haistelee uutta petiään",
    welcomeEyebrow: "Tämän matkan loppu",
    welcomeTitle: "Ja alku paljon pidemmälle matkalle.",
    welcomeBody:
      "Kun koirasi tulee kotiin, kaikki kertomasi siirtyy Oma koira -osioon — ruokinta, koulutus, terveys, lenkit ja paperityöt, kaikki yhdessä paikassa.",
    welcomeCta: "Katso ensimmäinen viikko",
  },
  de: {
    eyebrow: "Einen Hund holen",
    heroTitle: "Denkst du darüber nach, einen Hund zu holen?",
    heroBody:
      "Ein Hund kann deinen Alltag auf wunderbare Weise verändern. Er ist aber auch eine große Verpflichtung. Lass uns sicherstellen, dass du bereit bist für den richtigen.",
    ctaReady: "Bin ich bereit?",
    ctaFind: "Meinen Hund finden",
    heroFootnote: "Alles davon ist kostenlos. Kein Konto, und nichts wird irgendwo gespeichert außer auf diesem Gerät.",
    heroAlt: "Ein älterer Mann sitzt auf seiner Eingangstreppe, den Arm um einen struppigen Mischlingshund gelegt",
    journeyEyebrow: "Der Weg",
    journeyTitle: "Eine Entscheidung, Schritt für Schritt getroffen.",
    journeyBody:
      "Einen Hund zu holen ist aufregend. Es ist auch eine große Entscheidung. Hier ist der ganze Weg, in der Reihenfolge, wie er meist verläuft — fang an, wo du willst, und komm zurück, wann immer du möchtest.",
    open: "Öffnen",
    choiceEyebrow: "Eine erste große Wahl",
    choiceTitle: "Welpe oder ein bereits erwachsener Hund?",
    choiceBody:
      "Zwei ziemlich unterschiedliche erste Jahre. Keines ist besser — was passt, hängt viel mehr von deinem Leben ab als vom Hund.",
    puppyAlt: "Ein Cocker-Spaniel-Welpe sitzt neben einem zerkauten Hausschuh",
    puppyLabel: "Ein Welpe",
    puppyBody: "Schlaflose Monate, und du prägst fast alles selbst.",
    adultAlt: "Ein ruhiger erwachsener Hund ruht auf einem Sofa in einer sonnigen Wohnung",
    adultLabel: "Ein erwachsener Hund",
    adultBody: "Viel mehr von dem, was du siehst, ist auch das, was du bekommst.",
    compare: "Richtig vergleichen",
    welcomeAlt: "Eine Familie sitzt still auf dem Boden, während ein neu angekommener Hund an seinem neuen Bett schnuppert",
    welcomeEyebrow: "Das Ende dieser Reise",
    welcomeTitle: "Und der Beginn der viel längeren.",
    welcomeBody:
      "Wenn dein Hund einzieht, wandert alles, was du uns erzählt hast, hinüber zu Mein Hund — Futter, Training, Gesundheit, Spaziergänge und Papierkram, alles an einem Ort.",
    welcomeCta: "Die erste Woche ansehen",
  },
  fr: {
    eyebrow: "Adopter un chien",
    heroTitle: "Vous pensez à adopter un chien ?",
    heroBody:
      "Un chien peut transformer votre quotidien de façon merveilleuse. C'est aussi un engagement important. Assurons-nous que vous êtes prêt pour le bon compagnon.",
    ctaReady: "Suis-je prêt ?",
    ctaFind: "Trouver mon chien",
    heroFootnote: "Tout est gratuit. Pas de compte, et rien n'est conservé ailleurs que sur cet appareil.",
    heroAlt: "Un homme âgé assis sur son perron, le bras autour d'un chien croisé au poil hirsute",
    journeyEyebrow: "Le parcours",
    journeyTitle: "Une décision, prise pas à pas.",
    journeyBody:
      "Adopter un chien, c'est excitant. C'est aussi une grande décision. Voici tout le chemin, dans l'ordre où il se déroule habituellement — commencez où vous voulez, et revenez quand cela vous chante.",
    open: "Ouvrir",
    choiceEyebrow: "Un premier grand choix",
    choiceTitle: "Chiot, ou chien déjà adulte ?",
    choiceBody:
      "Deux premières années bien différentes. Aucune n'est meilleure — ce qui convient dépend bien plus de votre vie que du chien.",
    puppyAlt: "Un chiot cocker spaniel assis à côté d'une pantoufle mâchouillée",
    puppyLabel: "Un chiot",
    puppyBody: "Des mois sans sommeil, et c'est vous qui façonnez presque tout.",
    adultAlt: "Un chien adulte calme se reposant sur un canapé dans un appartement ensoleillé",
    adultLabel: "Un chien adulte",
    adultBody: "Ce que vous voyez est bien plus souvent ce que vous obtenez.",
    compare: "Les comparer sérieusement",
    welcomeAlt: "Une famille assise en silence sur le sol pendant qu'un chien tout juste arrivé renifle son nouveau panier",
    welcomeEyebrow: "La fin de ce parcours",
    welcomeTitle: "Et le début d'un bien plus long.",
    welcomeBody:
      "Quand votre chien arrive chez vous, tout ce que vous nous avez confié passe dans Mon Chien — alimentation, éducation, santé, promenades et papiers, tout au même endroit.",
    welcomeCta: "Voir la première semaine",
  },
  nl: {
    eyebrow: "Een hond nemen",
    heroTitle: "Denk je erover na om een hond te nemen?",
    heroBody:
      "Een hond kan je dagelijks leven op prachtige manieren veranderen. Het is ook een grote verantwoordelijkheid. Laten we ervoor zorgen dat je klaar bent voor de juiste.",
    ctaReady: "Ben ik er klaar voor?",
    ctaFind: "Vind mijn hond",
    heroFootnote: "Helemaal gratis. Geen account, en niets wordt ergens anders bewaard dan op dit apparaat.",
    heroAlt: "Een oudere man zit op zijn stoep met zijn arm om een ruige gemengde hond",
    journeyEyebrow: "De reis",
    journeyTitle: "Eén beslissing, stap voor stap genomen.",
    journeyBody:
      "Een hond nemen is spannend. Het is ook een grote beslissing. Hier is het hele traject, in de volgorde waarin het meestal verloopt — begin waar je wilt, en kom terug wanneer je wilt.",
    open: "Openen",
    choiceEyebrow: "Een eerste grote keuze",
    choiceTitle: "Puppy, of een hond die al volwassen is?",
    choiceBody:
      "Twee heel verschillende eerste jaren. Geen van beide is beter — wat past hangt veel meer af van jouw leven dan van de hond.",
    puppyAlt: "Een cockerspaniël-puppy zit naast een kapotgekauwde pantoffel",
    puppyLabel: "Een puppy",
    puppyBody: "Slapeloze maanden, en jij vormt bijna alles zelf.",
    adultAlt: "Een rustige volwassen hond rust op een bank in een zonnig appartement",
    adultLabel: "Een volwassen hond",
    adultBody: "Veel meer van wat je ziet, is ook wat je krijgt.",
    compare: "Vergelijk ze goed",
    welcomeAlt: "Een gezin zit stil op de vloer terwijl een net aangekomen hond aan zijn nieuwe mand snuffelt",
    welcomeEyebrow: "Het einde van deze reis",
    welcomeTitle: "En het begin van de veel langere.",
    welcomeBody:
      "Wanneer je hond thuiskomt, verhuist alles wat je ons hebt verteld naar Mijn Hond — voeding, training, gezondheid, wandelingen en papierwerk, allemaal op één plek.",
    welcomeCta: "Bekijk de eerste week",
  },
} as const;

function GetADogPage() {
  const c = useCopy(copy);
  const { journey } = getDogContent();

  return (
    <div className="pb-24">
      <section className="container-page pt-24 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="animate-rise max-w-xl">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="display-xl mt-7">{c.heroTitle}</h1>
            <ShareBar className="mt-6" />
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{c.heroBody}</p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink to={withLangPrefix("/get-a-dog/ready")} size="lg">
                {c.ctaReady}
                <Arrow />
              </ButtonLink>
              <ButtonLink to={withLangPrefix("/find-my-dog")} tone="outline" size="lg">
                {c.ctaFind}
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{c.heroFootnote}</p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-surface">
            <img
              src={heroImage}
              alt={c.heroAlt}
              width={1600}
              height={1104}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- The flow */}
      <Section>
        <div className="container-page">
          <SectionHead eyebrow={c.journeyEyebrow} title={c.journeyTitle} body={c.journeyBody} />

          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {journey.map((step) => (
              <li key={step.id} className="bg-background">
                <Link to={step.to as never} className="group flex h-full flex-col p-8">
                  <span className="font-display text-sm tabular-nums text-accent">{step.no}</span>
                  <h3 className="display-md mt-4">{step.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium">
                    {c.open}
                    <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ------------------------------------------------- Puppy or adult */}
      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <SectionHead eyebrow={c.choiceEyebrow} title={c.choiceTitle} body={c.choiceBody} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { img: puppyImage, alt: c.puppyAlt, label: c.puppyLabel, body: c.puppyBody },
              { img: adultImage, alt: c.adultAlt, label: c.adultLabel, body: c.adultBody },
            ].map((card) => (
              <Link key={card.label} to={"/get-a-dog/choose" as never} className="group block overflow-hidden rounded-[1.75rem] bg-background">
                <img src={card.img} alt={card.alt} width={1200} height={1504} loading="lazy" className="aspect-[5/4] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]" />
                <div className="p-8">
                  <h3 className="display-md">{card.label}</h3>
                  <p className="mt-3 text-muted-foreground">{card.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium">
                    {c.compare}
                    <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------ Welcome home */}
      <Section className="pt-0">
        <div className="container-page pt-20 md:pt-28">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={welcomeImage}
              alt={c.welcomeAlt}
              width={1600}
              height={1008}
              loading="lazy"
              className="h-[24rem] w-full object-cover md:h-[32rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-14">
              <p className="eyebrow text-primary-foreground/70">{c.welcomeEyebrow}</p>
              <h2 className="display-lg mt-4 max-w-xl text-primary-foreground">{c.welcomeTitle}</h2>
              <p className="mt-4 max-w-lg leading-relaxed text-primary-foreground/80">{c.welcomeBody}</p>
              <div className="mt-8">
                <ButtonLink to={withLangPrefix("/get-a-dog/welcome-home")} tone="accent" size="lg">
                  {c.welcomeCta}
                  <Arrow />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
