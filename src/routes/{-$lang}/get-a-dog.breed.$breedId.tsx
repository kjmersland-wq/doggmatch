import { createFileRoute, notFound } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { Notice, SectionHead } from "@/components/dogmatch/journey/parts";
import { getBreed } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { costRange, prepCards } from "@/lib/getdog/prep";
import { getDogStore } from "@/lib/getdog/store";
import { useCopy } from "@/i18n";
import { useEffect } from "react";
import { seoLinks, abs, breadcrumbLd, headLocale, langUrl, ogLocaleTag } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

export const Route = createFileRoute("/{-$lang}/get-a-dog/breed/$breedId")({
  loader: ({ params }) => {
    const breed = getBreed(params.breedId);
    if (!breed) throw notFound();
    return { breedId: breed.id };
  },
  head: (ctx) => {
    const { loaderData } = ctx;
    const locale = headLocale(ctx);
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable | DoggMatch" }, { name: "robots", content: "noindex" }],
      };
    }
    const name = breedContent()[loaderData.breedId].displayName;
    const title = `Getting ready for a ${name} — what to know before you commit | DoggMatch`;
    const description = `What a ${name} will actually ask of you: exercise, training, grooming, being alone, cost and the first weeks — drawn from their real traits, not a sales pitch.`;
    const path = `/get-a-dog/breed/${loaderData.breedId}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: langUrl(path, locale) },
        { property: "og:locale", content: ogLocaleTag(locale) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: seoLinks(path).map((l) =>
        l.rel === "canonical" ? { rel: "canonical", href: langUrl(path, locale) } : l,
      ),
      scripts: [
        breadcrumbLd(
          [
            { name: "DoggMatch", path: "/" },
            { name: "Get a dog", path: "/get-a-dog" },
            { name, path },
          ],
          locale,
        ),
      ],
    };
  },
  component: BreedPrepPage,
});

const copy = {
  en: {
    eyebrow: "I'm interested — what should I know?",
    heading: (name: string) => `Getting ready for a ${name}.`,
    intro:
      "Everything below comes from this breed's own traits in our library — what they'll ask of " +
      "you week after week, including the parts people wish they'd known.",
    askEyebrow: "What this dog will ask of you",
    askTitle: "Honestly, week after week.",
    moneyEyebrow: "The money",
    moneyTitle: (name: string) => `What a ${name} tends to cost`,
    moneyBody:
      "Per year, once they're settled — food, insurance, routine vet care and grooming. Wide on " +
      "purpose: prices differ enormously by country and city, and this is not a quote.",
    noticeTitle: "Before you say yes",
    noticeBody:
      "Meet the dog more than once if you possibly can, on a normal day rather than a special one. " +
      "Ask what they're like at six in the morning and at ten at night. The honest answer to that " +
      "question tells you more than any breed description, including this one.",
    prepareCta: "Get my home ready",
    profileCta: "The full breed profile",
    costsCta: "Costs in full",
  },
  no: {
    eyebrow: "Jeg er interessert — hva bør jeg vite?",
    heading: (name: string) => `Gjør deg klar for en ${name}.`,
    intro:
      "Alt under kommer fra denne rasens egne egenskaper i biblioteket vårt — hva den vil be deg om " +
      "uke etter uke, inkludert det folk skulle ønske de visste på forhånd.",
    askEyebrow: "Det denne hunden vil be deg om",
    askTitle: "Ærlig talt, uke etter uke.",
    moneyEyebrow: "Pengene",
    moneyTitle: (name: string) => `Hva en ${name} pleier å koste`,
    moneyBody:
      "Per år, når hunden har slått seg til — mat, forsikring, rutinemessig veterinærbesøk og stell. " +
      "Bevisst bredt: prisene varierer enormt fra land til land og by til by, og dette er ikke et tilbud.",
    noticeTitle: "Før du sier ja",
    noticeBody:
      "Møt hunden mer enn én gang hvis du i det hele tatt kan, på en vanlig dag heller enn en spesiell. " +
      "Spør hvordan den er klokken seks om morgenen og klokken ti om kvelden. Det ærlige svaret på det " +
      "spørsmålet forteller deg mer enn noen rasebeskrivelse, denne inkludert.",
    prepareCta: "Gjør hjemmet mitt klart",
    profileCta: "Hele raseprofilen",
    costsCta: "Kostnader i sin helhet",
  },
  pl: {
    eyebrow: "Jestem zainteresowany — co powinienem wiedzieć?",
    heading: (name: string) => `Przygotuj się na ${name}.`,
    intro:
      "Wszystko poniżej pochodzi z cech tej rasy w naszej bibliotece — czego będzie od Ciebie wymagać " +
      "tydzień po tygodniu, w tym rzeczy, o których ludzie chcieliby wiedzieć wcześniej.",
    askEyebrow: "Czego ten pies będzie od Ciebie wymagał",
    askTitle: "Szczerze, tydzień po tygodniu.",
    moneyEyebrow: "Pieniądze",
    moneyTitle: (name: string) => `Ile zwykle kosztuje ${name}`,
    moneyBody:
      "Rocznie, gdy pies się już zadomowi — jedzenie, ubezpieczenie, rutynowa opieka weterynaryjna i pielęgnacja. " +
      "Celowo szeroki przedział: ceny bardzo różnią się w zależności od kraju i miasta, i to nie jest wycena.",
    noticeTitle: "Zanim powiesz tak",
    noticeBody:
      "Spotkaj się z psem więcej niż raz, jeśli tylko możesz, w zwykły dzień, a nie wyjątkowy. " +
      "Zapytaj, jaki jest o szóstej rano i o dziesiątej wieczorem. Szczera odpowiedź na to pytanie " +
      "powie Ci więcej niż jakikolwiek opis rasy, łącznie z tym.",
    prepareCta: "Przygotuj mój dom",
    profileCta: "Pełny profil rasy",
    costsCta: "Koszty w pełnym zakresie",
  },
  dk: {
    eyebrow: "Jeg er interesseret — hvad bør jeg vide?",
    heading: (name: string) => `Gør dig klar til en ${name}.`,
    intro:
      "Alt nedenfor kommer fra denne races egne egenskaber i vores bibliotek — hvad den vil bede dig om " +
      "uge efter uge, inklusive det folk skulle ønske de vidste på forhånd.",
    askEyebrow: "Det denne hund vil bede dig om",
    askTitle: "Ærligt talt, uge efter uge.",
    moneyEyebrow: "Pengene",
    moneyTitle: (name: string) => `Hvad en ${name} plejer at koste`,
    moneyBody:
      "Per år, når hunden har sat sig til rette — mad, forsikring, rutinemæssigt dyrlægebesøg og pleje. " +
      "Bevidst bredt: priserne varierer enormt fra land til land og by til by, og dette er ikke et tilbud.",
    noticeTitle: "Før du siger ja",
    noticeBody:
      "Mød hunden mere end én gang, hvis du overhovedet kan, på en almindelig dag frem for en særlig. " +
      "Spørg, hvordan den er klokken seks om morgenen og klokken ti om aftenen. Det ærlige svar på det " +
      "spørgsmål fortæller dig mere end nogen racebeskrivelse, denne inklusive.",
    prepareCta: "Gør mit hjem klar",
    profileCta: "Hele raceprofilen",
    costsCta: "Omkostninger i fuld længde",
  },
  se: {
    eyebrow: "Jag är intresserad — vad bör jag veta?",
    heading: (name: string) => `Att göra sig redo för en ${name}.`,
    intro:
      "Allt nedan kommer från den här rasens egna egenskaper i vårt bibliotek — vad den kommer be dig om " +
      "vecka efter vecka, inklusive det folk önskar de visste i förväg.",
    askEyebrow: "Vad den här hunden kommer be dig om",
    askTitle: "Ärligt talat, vecka efter vecka.",
    moneyEyebrow: "Pengarna",
    moneyTitle: (name: string) => `Vad en ${name} brukar kosta`,
    moneyBody:
      "Per år, när hunden har kommit till ro — mat, försäkring, rutinmässig veterinärvård och skötsel. " +
      "Medvetet brett: priserna varierar enormt mellan länder och städer, och det här är ingen offert.",
    noticeTitle: "Innan du säger ja",
    noticeBody:
      "Träffa hunden mer än en gång om du överhuvudtaget kan, en vanlig dag snarare än en speciell. " +
      "Fråga hur den är klockan sex på morgonen och klockan tio på kvällen. Det ärliga svaret på den " +
      "frågan säger dig mer än någon rasbeskrivning, den här inkluderad.",
    prepareCta: "Gör mitt hem redo",
    profileCta: "Hela rasprofilen",
    costsCta: "Kostnader i sin helhet",
  },
  fi: {
    eyebrow: "Olen kiinnostunut — mitä minun pitäisi tietää?",
    heading: (name: string) => `Valmistaudu ${name}an.`,
    intro:
      "Kaikki alla tuleva perustuu tämän rodun omiin ominaisuuksiin kirjastossamme — mitä se pyytää sinulta " +
      "viikko toisensa jälkeen, mukaan lukien asiat, joita ihmiset toivoisivat tienneensä etukäteen.",
    askEyebrow: "Mitä tämä koira pyytää sinulta",
    askTitle: "Rehellisesti, viikko toisensa jälkeen.",
    moneyEyebrow: "Raha",
    moneyTitle: (name: string) => `Mitä ${name} yleensä maksaa`,
    moneyBody:
      "Vuodessa, kun koira on asettunut arkeen — ruoka, vakuutus, rutiinieläinlääkärikäynnit ja hoito. " +
      "Tarkoituksella laaja: hinnat vaihtelevat valtavasti maan ja kaupungin mukaan, eikä tämä ole tarjous.",
    noticeTitle: "Ennen kuin sanot kyllä",
    noticeBody:
      "Tapaa koira useammin kuin kerran, jos suinkin voit, tavallisena päivänä erikoisen sijaan. " +
      "Kysy, millainen se on kello kuusi aamulla ja kello kymmenen illalla. Rehellinen vastaus siihen " +
      "kysymykseen kertoo sinulle enemmän kuin mikään rotukuvaus, tämä mukaan lukien.",
    prepareCta: "Valmistele kotini",
    profileCta: "Koko rotuprofiili",
    costsCta: "Kustannukset kokonaisuudessaan",
  },
  de: {
    eyebrow: "Ich interessiere mich — was sollte ich wissen?",
    heading: (name: string) => `Bereit werden für einen ${name}.`,
    intro:
      "Alles unten stammt aus den eigenen Merkmalen dieser Rasse in unserer Bibliothek — was sie Woche für Woche von dir verlangt, " +
      "einschließlich der Dinge, von denen sich Menschen wünschen, sie hätten sie vorher gewusst.",
    askEyebrow: "Was dieser Hund von dir verlangen wird",
    askTitle: "Ehrlich gesagt, Woche für Woche.",
    moneyEyebrow: "Das Geld",
    moneyTitle: (name: string) => `Was ein ${name} in der Regel kostet`,
    moneyBody:
      "Pro Jahr, sobald er sich eingelebt hat — Futter, Versicherung, routinemäßige Tierarztkosten und Pflege. Bewusst breit gefasst: " +
      "Preise unterscheiden sich enorm nach Land und Stadt, und dies ist kein Angebot.",
    noticeTitle: "Bevor du Ja sagst",
    noticeBody:
      "Triff den Hund wenn möglich mehr als einmal, an einem ganz normalen Tag statt an einem besonderen. " +
      "Frag, wie er um sechs Uhr morgens und um zehn Uhr abends ist. Die ehrliche Antwort darauf " +
      "sagt dir mehr als jede Rassebeschreibung, auch diese hier.",
    prepareCta: "Mein Zuhause vorbereiten",
    profileCta: "Das vollständige Rasseprofil",
    costsCta: "Kosten im Detail",
  },
  fr: {
    eyebrow: "Je suis intéressé — que devrais-je savoir ?",
    heading: (name: string) => `Se préparer pour un ${name}.`,
    intro:
      "Tout ce qui suit provient des traits propres à cette race dans notre bibliothèque — ce qu'elle vous demandera " +
      "semaine après semaine, y compris ce que les gens auraient aimé savoir à l'avance.",
    askEyebrow: "Ce que ce chien vous demandera",
    askTitle: "Honnêtement, semaine après semaine.",
    moneyEyebrow: "L'argent",
    moneyTitle: (name: string) => `Ce que coûte généralement un ${name}`,
    moneyBody:
      "Par an, une fois qu'il est installé — nourriture, assurance, soins vétérinaires courants et toilettage. Volontairement large : " +
      "les prix varient énormément selon le pays et la ville, et ceci n'est pas un devis.",
    noticeTitle: "Avant de dire oui",
    noticeBody:
      "Rencontrez le chien plus d'une fois si possible, un jour ordinaire plutôt qu'un jour spécial. " +
      "Demandez comment il est à six heures du matin et à dix heures du soir. La réponse honnête à cette " +
      "question vous en dira plus que n'importe quelle description de race, y compris celle-ci.",
    prepareCta: "Préparer ma maison",
    profileCta: "Le profil complet de la race",
    costsCta: "Les coûts en détail",
  },
  nl: {
    eyebrow: "Ik ben geïnteresseerd — wat moet ik weten?",
    heading: (name: string) => `Je klaarmaken voor een ${name}.`,
    intro:
      "Alles hieronder komt uit de eigen eigenschappen van dit ras in onze bibliotheek — wat het week na week " +
      "van je zal vragen, inclusief de dingen waarvan mensen achteraf wensten dat ze ze eerder wisten.",
    askEyebrow: "Wat deze hond van je zal vragen",
    askTitle: "Eerlijk gezegd, week na week.",
    moneyEyebrow: "Het geld",
    moneyTitle: (name: string) => `Wat een ${name} doorgaans kost`,
    moneyBody:
      "Per jaar, zodra hij is ingeburgerd — voeding, verzekering, routine dierenartszorg en verzorging. Bewust breed: " +
      "prijzen verschillen enorm per land en stad, en dit is geen offerte.",
    noticeTitle: "Voordat je ja zegt",
    noticeBody:
      "Ontmoet de hond meer dan eens als je kunt, op een gewone dag in plaats van een bijzondere. " +
      "Vraag hoe hij is om zes uur 's ochtends en om tien uur 's avonds. Het eerlijke antwoord op die " +
      "vraag vertelt je meer dan welke rassenbeschrijving dan ook, ook deze.",
    prepareCta: "Mijn huis klaarmaken",
    profileCta: "Het volledige rasprofiel",
    costsCta: "Kosten in detail",
  },
} as const;

function BreedPrepPage() {
  const c = useCopy(copy);
  const { breedId } = Route.useLoaderData();
  const breed = getBreed(breedId)!;
  const content = breedContent()[breed.id];
  const cards = prepCards(breed);

  useEffect(() => {
    getDogStore.setInterest(breed.id);
  }, [breed.id]);

  return (
    <div className="pb-24">
      <section className="container-page pt-24 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="max-w-xl">
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 className="display-xl mt-6">{c.heading(content.displayName)}</h1>
            <ShareBar className="mt-6" />
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{content.summary}</p>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground">{c.intro}</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-surface">
            <img
              src={breedImages[breed.id]}
              alt={content.displayName}
              width={1024}
              height={1280}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Section className="pt-16 md:pt-24">
        <div className="container-page">
          <SectionHead eyebrow={c.askEyebrow} title={c.askTitle} />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <li key={card.id} className="bg-background p-8">
                <p className="eyebrow">{card.title}</p>
                <h3 className="display-md mt-4">{card.headline}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHead eyebrow={c.moneyEyebrow} title={c.moneyTitle(content.displayName)} />
              <p className="mt-6 font-display text-4xl tracking-tight text-accent">
                {costRange(breed)}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{c.moneyBody}</p>
            </div>
            <Notice title={c.noticeTitle}>{c.noticeBody}</Notice>
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            <ButtonLink to={withLangPrefix("/get-a-dog/prepare")} size="lg">
              {c.prepareCta}
              <Arrow />
            </ButtonLink>
            <ButtonLink to={`/breeds/${breed.id}` as never} tone="outline" size="lg">
              {c.profileCta}
            </ButtonLink>
            <ButtonLink to={withLangPrefix("/get-a-dog/costs")} tone="ghost" size="lg">
              {c.costsCta}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
