import { localizedHead } from "@/lib/seo";
import { pageSeo } from "@/lib/seo/pages";
import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { CardGrid, Checklist, Notice, PointList, SectionHead } from "@/components/dogmatch/journey/parts";
import { getDogContent } from "@/data/getdog/content";
import { useCopy } from "@/i18n";
import puppyImage from "@/assets/puppy.jpg";
import adultImage from "@/assets/adult-dog.jpg";
import breederImage from "@/assets/breeder.jpg";
import adoptionImage from "@/assets/adoption.jpg";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Puppy or adult, breeder or rescue — choosing carefully | DoggMatch";
const description =
  "An honest comparison of puppies and adult dogs, what to ask a breeder, the red flags worth noticing, and what to think about when you adopt.";

export const Route = createFileRoute("/{-$lang}/get-a-dog/choose")({
  head: (ctx) => localizedHead(ctx, "/get-a-dog/choose", pageSeo.getDogChoose),
  component: ChoosePage,
});

const copy = {
  en: {
    eyebrow: "Choose carefully",
    puppyAlt: "A cocker spaniel puppy sitting beside a chewed slipper",
    adultAlt: "A calm adult dog resting on a sofa in a sunlit flat",
    whatsGood: "What's good",
    whatsHard: "What's hard",
    whereFrom: "Where from",
    breederAlt: "A mother dog resting with her puppies on a blanket in a family living room",
    rescueAlt: "A woman crouching to greet an adult rescue dog at a shelter",
    whatsGoodAbout: "What's good about it",
    worthLookingInto: "Worth looking into",
    meetingBreederEyebrow: "Meeting a breeder",
    meetingBreederTitle: "What to ask, and what to notice.",
    meetingBreederBody:
      "Tick these off as you go. A good breeder will be pleased you asked — most of them wish more people did.",
    questionsWorthAsking: "Questions worth asking",
    thingsGivePause: "Things that give us pause",
    pauseBody:
      "None of these prove anything on their own. Two or three together are usually a reason to take your time, or walk away — and it's always fine to walk away.",
    adoptionEyebrow: "Adoption",
    adoptionTitle: "Thinking about adoption?",
    adoptionBody:
      "Rescue dogs aren't damaged goods. Most are perfectly ordinary dogs whose people ran out of time, money or health. Here's what's worth talking through.",
    costsCta: "What will a dog really cost?",
    findMyDog: "Find My Dog",
  },
  no: {
    eyebrow: "Velg med omhu",
    puppyAlt: "En cocker spaniel-valp som sitter ved siden av en tygget tøffel",
    adultAlt: "En rolig voksen hund som hviler i en sofa i en solfylt leilighet",
    whatsGood: "Hva som er bra",
    whatsHard: "Hva som er tøft",
    whereFrom: "Hvor fra",
    breederAlt: "En mor-hund som hviler med valpene sine på et teppe i en familiestue",
    rescueAlt: "En kvinne som huker seg ned for å hilse på en voksen omplasseringshund på et internat",
    whatsGoodAbout: "Hva som er bra med det",
    worthLookingInto: "Verdt å undersøke",
    meetingBreederEyebrow: "Å møte en oppdretter",
    meetingBreederTitle: "Hva du bør spørre om, og hva du bør legge merke til.",
    meetingBreederBody:
      "Kryss av etter hvert som du går gjennom dem. En god oppdretter blir glad for at du spurte — de fleste skulle ønske flere gjorde det.",
    questionsWorthAsking: "Spørsmål verdt å stille",
    thingsGivePause: "Ting som gjør oss usikre",
    pauseBody:
      "Ingen av disse beviser noe alene. To eller tre sammen er som regel en grunn til å ta det med ro, eller gå videre — og det er alltid greit å gå videre.",
    adoptionEyebrow: "Omplassering",
    adoptionTitle: "Går du og tenker på omplassering?",
    adoptionBody:
      "Omplasseringshunder er ikke skadevare. De fleste er helt vanlige hunder hvis mennesker gikk tom for tid, penger eller helse. Her er det som er verdt å snakke gjennom.",
    costsCta: "Hva koster en hund egentlig?",
    findMyDog: "Finn min hund",
  },
  pl: {
    eyebrow: "Wybieraj z rozwagą",
    puppyAlt: "Szczeniak cocker spaniela siedzący obok pogryzionego kapcia",
    adultAlt: "Spokojny dorosły pies odpoczywający na kanapie w słonecznym mieszkaniu",
    whatsGood: "Co jest dobre",
    whatsHard: "Co jest trudne",
    whereFrom: "Skąd wziąć psa",
    breederAlt: "Suka odpoczywająca ze szczeniakami na kocu w rodzinnym salonie",
    rescueAlt: "Kobieta kucająca, by przywitać się z dorosłym psem ze schroniska",
    whatsGoodAbout: "Co jest w tym dobrego",
    worthLookingInto: "Warto sprawdzić",
    meetingBreederEyebrow: "Spotkanie z hodowcą",
    meetingBreederTitle: "O co zapytać, i na co zwrócić uwagę.",
    meetingBreederBody:
      "Odhaczaj po kolei. Dobry hodowca ucieszy się, że pytasz — większość z nich chciałaby, żeby więcej osób to robiło.",
    questionsWorthAsking: "Pytania warte zadania",
    thingsGivePause: "Rzeczy, które budzą naszą czujność",
    pauseBody:
      "Żadna z nich sama w sobie niczego nie dowodzi. Dwie lub trzy razem to zwykle powód, by zwolnić tempo albo się wycofać — a wycofanie się zawsze jest w porządku.",
    adoptionEyebrow: "Adopcja",
    adoptionTitle: "Myślisz o adopcji?",
    adoptionBody:
      "Psy ze schronisk nie są uszkodzonym towarem. Większość to zupełnie zwyczajne psy, których ludziom zabrakło czasu, pieniędzy lub zdrowia. Oto, co warto sobie przemyśleć.",
    costsCta: "Ile naprawdę kosztuje pies?",
    findMyDog: "Znajdź mojego psa",
  },
  dk: {
    eyebrow: "Vælg med omtanke",
    puppyAlt: "En cocker spaniel-hvalp siddende ved siden af en tygget hjemmesko",
    adultAlt: "En rolig voksen hund der hviler på en sofa i en solbeskinnet lejlighed",
    whatsGood: "Hvad der er godt",
    whatsHard: "Hvad der er svært",
    whereFrom: "Hvor de kommer fra",
    breederAlt: "En hundemor der hviler med sine hvalpe på et tæppe i en familiestue",
    rescueAlt: "En kvinde der hugger sig ned for at hilse på en voksen hund fra et internat",
    whatsGoodAbout: "Det gode ved det",
    worthLookingInto: "Værd at undersøge",
    meetingBreederEyebrow: "At møde en opdrætter",
    meetingBreederTitle: "Hvad du bør spørge om, og hvad du bør lægge mærke til.",
    meetingBreederBody:
      "Kryds dem af undervejs. En god opdrætter bliver glad for at du spørger — de fleste ville ønske flere gjorde det.",
    questionsWorthAsking: "Spørgsmål værd at stille",
    thingsGivePause: "Ting der bør gøre dig eftertænksom",
    pauseBody:
      "Ingen af dem beviser noget alene. To eller tre sammen er som regel en grund til at tage det roligt, eller gå videre — og det er altid fint at gå videre.",
    adoptionEyebrow: "Adoption",
    adoptionTitle: "Overvejer du adoption?",
    adoptionBody:
      "Adoptionshunde er ikke beskadiget vare. De fleste er helt almindelige hunde, hvis mennesker løb tør for tid, penge eller helbred. Her er det, der er værd at tale igennem.",
    costsCta: "Hvad koster en hund egentlig?",
    findMyDog: "Find min hund",
  },
  se: {
    eyebrow: "Välj med omtanke",
    puppyAlt: "En cocker spaniel-valp som sitter bredvid en tuggad toffel",
    adultAlt: "En lugn vuxen hund som vilar i en soffa i en solig lägenhet",
    whatsGood: "Vad som är bra",
    whatsHard: "Vad som är svårt",
    whereFrom: "Varifrån",
    breederAlt: "En hundmamma som vilar med sina valpar på en filt i ett familjevardagsrum",
    rescueAlt: "En kvinna som hukar sig för att hälsa på en vuxen hund på ett omplaceringshem",
    whatsGoodAbout: "Vad som är bra med det",
    worthLookingInto: "Värt att undersöka",
    meetingBreederEyebrow: "Att träffa en uppfödare",
    meetingBreederTitle: "Vad du ska fråga om, och vad du ska lägga märke till.",
    meetingBreederBody:
      "Bocka av dem allt eftersom. En bra uppfödare blir glad att du frågar — de flesta önskar att fler gjorde det.",
    questionsWorthAsking: "Frågor värda att ställa",
    thingsGivePause: "Saker som gör oss fundersamma",
    pauseBody:
      "Ingen av dem bevisar något på egen hand. Två eller tre tillsammans är oftast ett skäl att ta det lugnt, eller gå vidare — och det är alltid okej att gå vidare.",
    adoptionEyebrow: "Omplacering",
    adoptionTitle: "Funderar du på en omplaceringshund?",
    adoptionBody:
      "Omplaceringshundar är inte skadat gods. De flesta är helt vanliga hundar vars människor fick slut på tid, pengar eller hälsa. Här är vad som är värt att prata igenom.",
    costsCta: "Vad kostar en hund egentligen?",
    findMyDog: "Hitta min hund",
  },
  fi: {
    eyebrow: "Valitse harkiten",
    puppyAlt: "Cockerspanielin pentu istumassa pureskellun tohvelin vieressä",
    adultAlt: "Rauhallinen aikuinen koira lepäämässä sohvalla aurinkoisessa asunnossa",
    whatsGood: "Mikä on hyvää",
    whatsHard: "Mikä on vaikeaa",
    whereFrom: "Mistä koira hankitaan",
    breederAlt: "Emokoira lepäämässä pentujensa kanssa peitolla perheen olohuoneessa",
    rescueAlt: "Nainen kyykistymässä tervehtimään aikuista löytökoiraa löytökodissa",
    whatsGoodAbout: "Mikä siinä on hyvää",
    worthLookingInto: "Kannattaa selvittää",
    meetingBreederEyebrow: "Kasvattajan tapaaminen",
    meetingBreederTitle: "Mitä kysyä ja mihin kiinnittää huomiota.",
    meetingBreederBody:
      "Käy nämä läpi yksi kerrallaan. Hyvä kasvattaja ilahtuu kysymyksistäsi — useimmat toivoisivat useamman kysyvän.",
    questionsWorthAsking: "Kysymyksiä, jotka kannattaa esittää",
    thingsGivePause: "Asioita, jotka herättävät epäilyksiä",
    pauseBody:
      "Mikään näistä ei yksin todista mitään. Kaksi tai kolme yhdessä on yleensä syy hidastaa vauhtia tai perääntyä — ja perääntyminen on aina ihan sallittua.",
    adoptionEyebrow: "Adoptio",
    adoptionTitle: "Harkitsetko adoptiokoiraa?",
    adoptionBody:
      "Adoptiokoirat eivät ole viallista tavaraa. Useimmat ovat aivan tavallisia koiria, joiden ihmisiltä loppui aika, raha tai terveys. Tässä on, mistä kannattaa keskustella.",
    costsCta: "Mitä koira todella maksaa?",
    findMyDog: "Löydä koirani",
  },
  de: {
    eyebrow: "Mit Bedacht wählen",
    puppyAlt: "Ein Cocker-Spaniel-Welpe sitzt neben einem zerkauten Hausschuh",
    adultAlt: "Ein ruhiger erwachsener Hund ruht auf einem Sofa in einer sonnigen Wohnung",
    whatsGood: "Was gut ist",
    whatsHard: "Was schwer ist",
    whereFrom: "Woher",
    breederAlt: "Eine Hundemutter ruht mit ihren Welpen auf einer Decke in einem familiären Wohnzimmer",
    rescueAlt: "Eine Frau kniet sich hin, um einen erwachsenen Tierheimhund zu begrüßen",
    whatsGoodAbout: "Was daran gut ist",
    worthLookingInto: "Wert, genauer hinzuschauen",
    meetingBreederEyebrow: "Einen Züchter treffen",
    meetingBreederTitle: "Was zu fragen ist, und worauf zu achten ist.",
    meetingBreederBody:
      "Hake diese nacheinander ab. Ein guter Züchter wird sich freuen, dass du fragst — die meisten wünschen sich, dass es mehr Menschen tun.",
    questionsWorthAsking: "Fragen, die sich zu stellen lohnen",
    thingsGivePause: "Dinge, die uns zögern lassen",
    pauseBody:
      "Keines davon beweist für sich allein etwas. Zwei oder drei zusammen sind meist ein Grund, sich Zeit zu nehmen oder zu gehen — und es ist immer in Ordnung zu gehen.",
    adoptionEyebrow: "Vermittlung",
    adoptionTitle: "Denkst du über eine Vermittlung nach?",
    adoptionBody:
      "Vermittlungshunde sind keine beschädigte Ware. Die meisten sind ganz gewöhnliche Hunde, deren Menschen die Zeit, das Geld oder die Gesundheit ausgegangen ist. Hier ist, was es sich zu besprechen lohnt.",
    costsCta: "Was kostet ein Hund wirklich?",
    findMyDog: "Meinen Hund finden",
  },
  fr: {
    eyebrow: "Choisir avec soin",
    puppyAlt: "Un chiot cocker spaniel assis à côté d'une pantoufle mâchouillée",
    adultAlt: "Un chien adulte calme se reposant sur un canapé dans un appartement ensoleillé",
    whatsGood: "Ce qui est bon",
    whatsHard: "Ce qui est difficile",
    whereFrom: "D'où vient-il",
    breederAlt: "Une chienne se reposant avec ses chiots sur une couverture dans un salon familial",
    rescueAlt: "Une femme s'accroupissant pour saluer un chien adulte dans un refuge",
    whatsGoodAbout: "Ce qui est bon là-dedans",
    worthLookingInto: "À approfondir",
    meetingBreederEyebrow: "Rencontrer un éleveur",
    meetingBreederTitle: "Quoi demander, et à quoi faire attention.",
    meetingBreederBody:
      "Cochez-les au fur et à mesure. Un bon éleveur sera content que vous posiez ces questions — la plupart aimeraient que plus de gens le fassent.",
    questionsWorthAsking: "Questions qui valent la peine d'être posées",
    thingsGivePause: "Des choses qui doivent alerter",
    pauseBody:
      "Aucune d'elles ne prouve quoi que ce soit à elle seule. Deux ou trois ensemble sont généralement une raison de prendre son temps, ou de partir — et il est toujours acceptable de partir.",
    adoptionEyebrow: "Adoption",
    adoptionTitle: "Vous pensez à l'adoption ?",
    adoptionBody:
      "Les chiens de refuge ne sont pas des marchandises abîmées. La plupart sont des chiens tout à fait ordinaires dont les maîtres ont manqué de temps, d'argent ou de santé. Voici ce qui mérite d'être discuté.",
    costsCta: "Combien coûte vraiment un chien ?",
    findMyDog: "Trouver mon chien",
  },
  nl: {
    eyebrow: "Zorgvuldig kiezen",
    puppyAlt: "Een cockerspaniël-puppy zit naast een kapotgekauwde pantoffel",
    adultAlt: "Een rustige volwassen hond rust op een bank in een zonnig appartement",
    whatsGood: "Wat goed is",
    whatsHard: "Wat lastig is",
    whereFrom: "Waarvandaan",
    breederAlt: "Een moederhond rust met haar puppy's op een deken in een gezinswoonkamer",
    rescueAlt: "Een vrouw hurkt neer om een volwassen asielhond te begroeten",
    whatsGoodAbout: "Wat er goed aan is",
    worthLookingInto: "Het waard om uit te zoeken",
    meetingBreederEyebrow: "Een fokker ontmoeten",
    meetingBreederTitle: "Wat te vragen, en waarop te letten.",
    meetingBreederBody:
      "Vink deze een voor een af. Een goede fokker is blij dat je het vraagt — de meesten zouden willen dat meer mensen dat deden.",
    questionsWorthAsking: "Vragen die het stellen waard zijn",
    thingsGivePause: "Dingen die ons doen aarzelen",
    pauseBody:
      "Geen van deze bewijst iets op zichzelf. Twee of drie samen zijn meestal een reden om de tijd te nemen, of weg te lopen — en het is altijd oké om weg te lopen.",
    adoptionEyebrow: "Adoptie",
    adoptionTitle: "Denk je aan adoptie?",
    adoptionBody:
      "Asielhonden zijn geen beschadigde waar. De meesten zijn heel gewone honden van wie de mensen tijd, geld of gezondheid tekortkwamen. Hier is wat het waard is om te bespreken.",
    costsCta: "Wat kost een hond echt?",
    findMyDog: "Vind mijn hond",
  },
} as const;

function ChoosePage() {
  const c = useCopy(copy);
  const { adoptionConsiderations, breederQuestions, breederRedFlags, puppyVsAdult, sources } = getDogContent();

  return (
    <div className="pb-24">
      <section className="container-page max-w-3xl pt-28 md:pt-36">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="display-xl mt-6">{puppyVsAdult.title}</h1>
        <ShareBar className="mt-6" />
        <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{puppyVsAdult.body}</p>
      </section>

      {/* ---------------------------------------------------- Puppy / adult */}
      <Section className="pt-16 md:pt-20">
        <div className="container-page grid gap-8 md:grid-cols-2">
          {[
            { data: puppyVsAdult.puppy, img: puppyImage, alt: c.puppyAlt },
            { data: puppyVsAdult.adult, img: adultImage, alt: c.adultAlt },
          ].map(({ data, img, alt }) => (
            <article key={data.title} className="overflow-hidden rounded-[1.75rem] border border-border bg-card">
              <img src={img} alt={alt} width={1200} height={1504} loading="lazy" className="aspect-[5/4] w-full object-cover" />
              <div className="p-8 md:p-10">
                <h2 className="display-md">{data.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{data.lead}</p>
                <p className="eyebrow mt-8">{c.whatsGood}</p>
                <div className="mt-4">
                  <PointList items={data.good} />
                </div>
                <p className="eyebrow mt-8">{c.whatsHard}</p>
                <div className="mt-4">
                  <PointList items={data.hard} tone="watch" />
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="container-page mt-10 max-w-3xl">
          <Notice>{puppyVsAdult.closing}</Notice>
        </div>
      </Section>

      {/* --------------------------------------------------------- Sources */}
      <Section className="bg-surface">
        <div className="container-page">
          <SectionHead eyebrow={c.whereFrom} title={sources.title} body={sources.body} />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              { data: sources.breeder, img: breederImage, alt: c.breederAlt },
              { data: sources.rescue, img: adoptionImage, alt: c.rescueAlt },
            ].map(({ data, img, alt }) => (
              <article key={data.title} className="overflow-hidden rounded-[1.75rem] border border-border bg-background">
                <img src={img} alt={alt} width={1408} height={1056} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-8 md:p-10">
                  <h3 className="display-md">{data.title}</h3>
                  <p className="eyebrow mt-6">{c.whatsGoodAbout}</p>
                  <div className="mt-4">
                    <PointList items={data.good} />
                  </div>
                  <p className="eyebrow mt-8">{c.worthLookingInto}</p>
                  <div className="mt-4">
                    <PointList items={data.check} tone="watch" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------------- Breeder */}
      <Section>
        <div className="container-page">
          <SectionHead
            eyebrow={c.meetingBreederEyebrow}
            title={c.meetingBreederTitle}
            body={c.meetingBreederBody}
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="eyebrow">{c.questionsWorthAsking}</p>
              <div className="mt-6">
                <Checklist
                  listId="breeder"
                  columns={1}
                  items={breederQuestions.map((q, i) => ({ id: `q${i}`, label: q }))}
                />
              </div>
            </div>
            <div>
              <p className="eyebrow">{c.thingsGivePause}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.pauseBody}</p>
              <div className="mt-6 rounded-2xl border border-border bg-card p-7">
                <PointList items={breederRedFlags} tone="watch" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------- Adoption */}
      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <SectionHead eyebrow={c.adoptionEyebrow} title={c.adoptionTitle} body={c.adoptionBody} />
          <div className="mt-12">
            <CardGrid items={adoptionConsiderations} />
          </div>
        </div>
      </Section>

      <div className="container-page mt-4 flex flex-wrap gap-3">
        <ButtonLink to={withLangPrefix("/get-a-dog/costs")} size="lg">
          {c.costsCta}
          <Arrow />
        </ButtonLink>
        <ButtonLink to={withLangPrefix("/find-my-dog")} tone="outline" size="lg">
          {c.findMyDog}
        </ButtonLink>
      </div>
    </div>
  );
}
