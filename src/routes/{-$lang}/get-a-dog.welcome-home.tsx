import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { CardGrid, Notice, SectionHead } from "@/components/dogmatch/journey/parts";
import { getDogContent } from "@/data/getdog/content";
import { useCopy } from "@/i18n";
import welcomeImage from "@/assets/welcome-home.jpg";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Welcome home — the first day and the first week | DoggMatch";
const description =
  "A calm, step-by-step guide to bringing your dog home: the journey, the first evening, sleep, the first small lessons, and settling into a routine together.";

export const Route = createFileRoute("/{-$lang}/get-a-dog/welcome-home")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: seoLinks("/get-a-dog/welcome-home"),
  }),
  component: WelcomeHomePage,
});

const copy = {
  en: {
    imgAlt: "A family sitting quietly on the floor as a newly arrived dog sniffs its new bed",
    eyebrow: "Welcome home",
    title: "The day they arrive.",
    intro:
      "Quieter than you're imagining, and slower than you'd like. That's exactly right. A new dog needs very little on day one beyond calm, water, and somewhere of their own.",
    firstDayEyebrow: "The first day",
    firstDayTitle: "Six things, and nothing else.",
    firstWeekEyebrow: "The first week",
    firstWeekTitle: "Then, gently, a rhythm.",
    firstWeekBody:
      "Most dogs need two or three weeks to show you who they really are. Don't judge anything in the first few days — not their appetite, not their toilet habits, not their character.",
    vetTitle: "When to ring the vet",
    vetBody:
      "Refusing food for more than a day, repeated vomiting or diarrhoea, laboured breathing, lethargy that doesn't lift, or any sign of pain. New dogs are often unsettled — but you know unwell when you see it, and it's never a waste of anyone's time to ask.",
    andThen: "And then",
    myDogTitle: "This is where My Dog begins.",
    myDogBody:
      "Everything from here — food and portions, training sessions, weight, vet visits, walks and the whole week — lives in one place, built around your actual dog. Set up their profile and anything you've already told us comes with you.",
    createCta: "Create my dog",
    packCta: "The printable Dog Pack",
  },
  no: {
    imgAlt: "En familie som sitter stille på gulvet mens en nyankommet hund snuser på sengen sin",
    eyebrow: "Velkommen hjem",
    title: "Dagen den kommer.",
    intro:
      "Roligere enn du tror, og saktere enn du kanskje vil. Det er akkurat riktig. En ny hund trenger svært lite den første dagen, bortsett fra ro, vann, og et sted som er dens eget.",
    firstDayEyebrow: "Den første dagen",
    firstDayTitle: "Seks ting, og ikke noe mer.",
    firstWeekEyebrow: "Den første uken",
    firstWeekTitle: "Så, forsiktig, en rytme.",
    firstWeekBody:
      "De fleste hunder trenger to eller tre uker på å vise deg hvem de egentlig er. Ikke døm noe i de første dagene — verken matlysten, toalettvanene eller karakteren deres.",
    vetTitle: "Når du bør ringe veterinæren",
    vetBody:
      "Nekter å spise i mer enn en dag, gjentatt oppkast eller diaré, tung pust, slapphet som ikke gir seg, eller tegn på smerte. Nye hunder er ofte urolige — men du kjenner igjen sykdom når du ser den, og det er aldri bortkastet tid å spørre.",
    andThen: "Og så",
    myDogTitle: "Her begynner Min hund.",
    myDogBody:
      "Alt herfra — mat og porsjoner, treningsøkter, vekt, veterinærbesøk, turer og hele uken — samles ett sted, bygget rundt din faktiske hund. Sett opp profilen deres, så blir alt du allerede har fortalt oss med videre.",
    createCta: "Opprett hunden min",
    packCta: "Den utskriftsvennlige hundepakken",
  },
  pl: {
    imgAlt: "Rodzina siedząca spokojnie na podłodze, gdy nowo przybyły pies obwąchuje swoje nowe legowisko",
    eyebrow: "Witaj w domu",
    title: "Dzień, w którym pies przyjeżdża.",
    intro:
      "Ciszej, niż sobie wyobrażasz, i wolniej, niż byś chciał. To dokładnie tak, jak powinno być. Nowy pies pierwszego dnia potrzebuje bardzo niewiele poza spokojem, wodą i własnym kącikiem.",
    firstDayEyebrow: "Pierwszy dzień",
    firstDayTitle: "Sześć rzeczy, i nic więcej.",
    firstWeekEyebrow: "Pierwszy tydzień",
    firstWeekTitle: "Potem, powoli, rytm.",
    firstWeekBody:
      "Większości psów potrzeba dwóch lub trzech tygodni, by pokazać, kim naprawdę są. Nie oceniaj niczego w pierwszych dniach — ani apetytu, ani nawyków toaletowych, ani charakteru.",
    vetTitle: "Kiedy zadzwonić do weterynarza",
    vetBody:
      "Odmawianie jedzenia przez ponad dzień, powtarzające się wymioty lub biegunka, utrudniony oddech, apatia, która nie mija, albo jakikolwiek objaw bólu. Nowe psy są często rozdrażnione — ale rozpoznasz chorobę, gdy ją zobaczysz, i pytanie nigdy nie jest stratą niczyjego czasu.",
    andThen: "A potem",
    myDogTitle: "Tutaj zaczyna się Mój pies.",
    myDogBody:
      "Wszystko od teraz — jedzenie i porcje, sesje treningowe, waga, wizyty u weterynarza, spacery i cały tydzień — mieszka w jednym miejscu, zbudowanym wokół Twojego rzeczywistego psa. Załóż jego profil, a wszystko, co już nam powiedziałeś, przejdzie razem z Tobą.",
    createCta: "Utwórz profil mojego psa",
    packCta: "Drukowalny Pakiet Psa",
  },
  dk: {
    imgAlt: "En familie der sidder stille på gulvet, mens en nyankommet hund snuser til sin nye seng",
    eyebrow: "Velkommen hjem",
    title: "Dagen den kommer.",
    intro:
      "Roligere end du forestiller dig, og langsommere end du måske vil. Det er helt rigtigt. En ny hund har brug for meget lidt den første dag, ud over ro, vand og et sted der er dens eget.",
    firstDayEyebrow: "Den første dag",
    firstDayTitle: "Seks ting, og ikke mere.",
    firstWeekEyebrow: "Den første uge",
    firstWeekTitle: "Så, forsigtigt, en rytme.",
    firstWeekBody:
      "De fleste hunde har brug for to eller tre uger til at vise dig, hvem de virkelig er. Døm ikke noget i de første dage — hverken appetitten, toiletvanerne eller karakteren.",
    vetTitle: "Hvornår du bør ringe til dyrlægen",
    vetBody:
      "Nægter at spise i mere end en dag, gentagne opkastninger eller diarré, besværet vejrtrækning, sløvhed der ikke letter, eller tegn på smerte. Nye hunde er ofte urolige — men du genkender sygdom, når du ser den, og det er aldrig spild af tid at spørge.",
    andThen: "Og så",
    myDogTitle: "Her begynder Min Hund.",
    myDogBody:
      "Alt herfra — mad og portioner, træningssessioner, vægt, dyrlægebesøg, gåture og hele ugen — samles ét sted, bygget omkring din faktiske hund. Opret dens profil, så følger alt det, du allerede har fortalt os, med.",
    createCta: "Opret min hund",
    packCta: "Den udskrivbare hundepakke",
  },
  se: {
    imgAlt: "En familj som sitter tyst på golvet medan en nyanländ hund undersöker sin nya bädd",
    eyebrow: "Välkommen hem",
    title: "Dagen den kommer.",
    intro:
      "Lugnare än du föreställer dig, och långsammare än du kanske vill. Det är precis rätt. En ny hund behöver väldigt lite den första dagen, förutom lugn, vatten och en egen plats.",
    firstDayEyebrow: "Den första dagen",
    firstDayTitle: "Sex saker, och inget annat.",
    firstWeekEyebrow: "Den första veckan",
    firstWeekTitle: "Sedan, försiktigt, en rytm.",
    firstWeekBody:
      "De flesta hundar behöver två eller tre veckor för att visa dig vem de verkligen är. Döm inget under de första dagarna — varken aptiten, toalettvanorna eller karaktären.",
    vetTitle: "När du bör ringa veterinären",
    vetBody:
      "Vägrar äta i mer än en dag, upprepade kräkningar eller diarré, ansträngd andning, slöhet som inte släpper, eller tecken på smärta. Nya hundar är ofta oroliga — men du känner igen sjukdom när du ser den, och det är aldrig bortkastad tid att fråga.",
    andThen: "Och sedan",
    myDogTitle: "Här börjar Min Hund.",
    myDogBody:
      "Allt härifrån — mat och portioner, träningspass, vikt, veterinärbesök, promenader och hela veckan — samlas på ett ställe, byggt kring din faktiska hund. Skapa dess profil, så följer allt du redan har berättat för oss med.",
    createCta: "Skapa min hund",
    packCta: "Det utskrivbara hundpaketet",
  },
  fi: {
    imgAlt: "Perhe istumassa hiljaa lattialla, kun juuri saapunut koira haistelee uutta petiään",
    eyebrow: "Tervetuloa kotiin",
    title: "Päivä, jolloin se saapuu.",
    intro:
      "Rauhallisempaa kuin kuvittelet, ja hitaampaa kuin ehkä haluaisit. Se on juuri oikein. Uusi koira tarvitsee ensimmäisenä päivänä hyvin vähän — rauhaa, vettä ja oman paikan.",
    firstDayEyebrow: "Ensimmäinen päivä",
    firstDayTitle: "Kuusi asiaa, ei muuta.",
    firstWeekEyebrow: "Ensimmäinen viikko",
    firstWeekTitle: "Sitten, varovasti, rytmi.",
    firstWeekBody:
      "Useimmat koirat tarvitsevat kaksi tai kolme viikkoa näyttääkseen, keitä ne todella ovat. Älä arvioi mitään ensimmäisinä päivinä — ei ruokahalua, ei WC-tottumuksia eikä luonnetta.",
    vetTitle: "Milloin soittaa eläinlääkärille",
    vetBody:
      "Ruoasta kieltäytyminen yli päivän ajan, toistuva oksentelu tai ripuli, raskas hengitys, väsymys joka ei helpotu, tai mikä tahansa kivun merkki. Uudet koirat ovat usein hämmentyneitä — mutta tunnistat sairauden, kun näet sen, eikä kysyminen ole koskaan kenenkään ajan hukkaa.",
    andThen: "Ja sitten",
    myDogTitle: "Tästä alkaa Oma koira.",
    myDogBody:
      "Kaikki tästä eteenpäin — ruokinta ja annokset, harjoitukset, paino, eläinlääkärikäynnit, lenkit ja koko viikko — kootaan yhteen paikkaan, rakennettuna juuri sinun koirasi ympärille. Luo sen profiili, niin kaikki jo kertomasi siirtyy mukana.",
    createCta: "Luo koirani profiili",
    packCta: "Tulostettava koirapaketti",
  },
  de: {
    imgAlt: "Eine Familie sitzt still auf dem Boden, während ein neu angekommener Hund an seinem neuen Bett schnuppert",
    eyebrow: "Willkommen zu Hause",
    title: "Der Tag, an dem er einzieht.",
    intro:
      "Ruhiger als du dir vorstellst, und langsamer, als dir lieb ist. Genau so soll es sein. Ein neuer Hund braucht am ersten Tag sehr wenig außer Ruhe, Wasser und einem eigenen Platz.",
    firstDayEyebrow: "Der erste Tag",
    firstDayTitle: "Sechs Dinge, und nichts weiter.",
    firstWeekEyebrow: "Die erste Woche",
    firstWeekTitle: "Dann, ganz sanft, ein Rhythmus.",
    firstWeekBody:
      "Die meisten Hunde brauchen zwei bis drei Wochen, um dir zu zeigen, wer sie wirklich sind. Beurteile in den ersten Tagen nichts — weder ihren Appetit, noch ihre Stubenreinheit, noch ihren Charakter.",
    vetTitle: "Wann du den Tierarzt anrufen solltest",
    vetBody:
      "Futterverweigerung über mehr als einen Tag, wiederholtes Erbrechen oder Durchfall, erschwerte Atmung, anhaltende Mattheit oder jedes Anzeichen von Schmerz. Neue Hunde sind oft aufgewühlt — aber du erkennst Krankheit, wenn du sie siehst, und nachzufragen ist nie Zeitverschwendung.",
    andThen: "Und dann",
    myDogTitle: "Hier beginnt Mein Hund.",
    myDogBody:
      "Alles von hier an — Futter und Portionen, Trainingseinheiten, Gewicht, Tierarztbesuche, Spaziergänge und die ganze Woche — findet sich an einem Ort, gebaut um deinen konkreten Hund. Richte sein Profil ein, und alles, was du uns schon erzählt hast, kommt mit.",
    createCta: "Meinen Hund anlegen",
    packCta: "Das druckbare Hundepaket",
  },
  fr: {
    imgAlt: "Une famille assise en silence sur le sol pendant qu'un chien tout juste arrivé renifle son nouveau panier",
    eyebrow: "Bienvenue à la maison",
    title: "Le jour de son arrivée.",
    intro:
      "Plus calme que vous ne l'imaginez, et plus lent que vous ne le voudriez. C'est exactement ce qu'il faut. Un nouveau chien a besoin de très peu le premier jour, à part du calme, de l'eau et un endroit bien à lui.",
    firstDayEyebrow: "Le premier jour",
    firstDayTitle: "Six choses, et rien d'autre.",
    firstWeekEyebrow: "La première semaine",
    firstWeekTitle: "Puis, doucement, un rythme.",
    firstWeekBody:
      "La plupart des chiens ont besoin de deux ou trois semaines pour vous montrer qui ils sont vraiment. Ne jugez rien les premiers jours — ni leur appétit, ni leur propreté, ni leur caractère.",
    vetTitle: "Quand appeler le vétérinaire",
    vetBody:
      "Refus de manger pendant plus d'un jour, vomissements ou diarrhée répétés, respiration difficile, léthargie qui ne passe pas, ou tout signe de douleur. Les nouveaux chiens sont souvent perturbés — mais vous reconnaîtrez le malaise quand vous le verrez, et demander n'est jamais une perte de temps.",
    andThen: "Et ensuite",
    myDogTitle: "C'est ici que commence Mon Chien.",
    myDogBody:
      "Tout à partir de maintenant — alimentation et portions, séances d'éducation, poids, visites vétérinaires, promenades et toute la semaine — vit au même endroit, construit autour de votre chien réel. Créez son profil, et tout ce que vous nous avez déjà confié vous suit.",
    createCta: "Créer mon chien",
    packCta: "Le Dog Pack imprimable",
  },
  nl: {
    imgAlt: "Een gezin zit stil op de vloer terwijl een net aangekomen hond aan zijn nieuwe mand snuffelt",
    eyebrow: "Welkom thuis",
    title: "De dag dat hij aankomt.",
    intro:
      "Rustiger dan je je voorstelt, en trager dan je zou willen. Dat klopt precies. Een nieuwe hond heeft de eerste dag heel weinig nodig, behalve rust, water en een eigen plekje.",
    firstDayEyebrow: "De eerste dag",
    firstDayTitle: "Zes dingen, en verder niets.",
    firstWeekEyebrow: "De eerste week",
    firstWeekTitle: "Dan, voorzichtig, een ritme.",
    firstWeekBody:
      "De meeste honden hebben twee tot drie weken nodig om te laten zien wie ze echt zijn. Oordeel de eerste dagen nergens over — niet over eetlust, niet over zindelijkheid, niet over karakter.",
    vetTitle: "Wanneer de dierenarts bellen",
    vetBody:
      "Meer dan een dag geen voer eten, herhaaldelijk braken of diarree, moeizame ademhaling, lusteloosheid die niet overgaat, of enig teken van pijn. Nieuwe honden zijn vaak van slag — maar je herkent ziek zijn wanneer je het ziet, en vragen is nooit tijdverspilling.",
    andThen: "En dan",
    myDogTitle: "Hier begint Mijn Hond.",
    myDogBody:
      "Alles vanaf hier — voeding en porties, trainingssessies, gewicht, dierenartsbezoeken, wandelingen en de hele week — komt op één plek samen, opgebouwd rond jouw eigen hond. Stel zijn profiel in, en alles wat je ons al hebt verteld gaat mee.",
    createCta: "Mijn hond aanmaken",
    packCta: "Het afdrukbare Hondenpakket",
  },
} as const;

function WelcomeHomePage() {
  const c = useCopy(copy);
  const { firstDay, firstWeek } = getDogContent();

  return (
    <div className="pb-24">
      <section className="container-page pt-24 md:pt-32">
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src={welcomeImage}
            alt={c.imgAlt}
            width={1600}
            height={1008}
            fetchPriority="high"
            className="h-[22rem] w-full object-cover md:h-[30rem]"
          />
        </div>
        <div className="mt-12 max-w-2xl">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="display-xl mt-6">{c.title}</h1>
          <ShareBar className="mt-6" />
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
        </div>
      </section>

      <Section className="pt-16 md:pt-20">
        <div className="container-page">
          <SectionHead eyebrow={c.firstDayEyebrow} title={c.firstDayTitle} />
          <div className="mt-12">
            <CardGrid items={firstDay} />
          </div>
        </div>
      </Section>

      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <SectionHead eyebrow={c.firstWeekEyebrow} title={c.firstWeekTitle} body={c.firstWeekBody} />
          <div className="mt-12">
            <CardGrid items={firstWeek} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-page max-w-3xl">
          <Notice title={c.vetTitle}>{c.vetBody}</Notice>

          <div className="mt-12 rounded-[1.75rem] border border-border bg-card p-8 md:p-12">
            <p className="eyebrow">{c.andThen}</p>
            <h2 className="display-lg mt-4">{c.myDogTitle}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{c.myDogBody}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to={withLangPrefix("/my-dog/setup")} size="lg">
                {c.createCta}
                <Arrow />
              </ButtonLink>
              <ButtonLink to={withLangPrefix("/my-dog/pack")} tone="outline" size="lg">
                {c.packCta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
