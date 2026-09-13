import { createFileRoute } from "@tanstack/react-router";
import { useT, useCopy } from "@/i18n";
import { Arrow, ButtonLink, Eyebrow } from "@/components/dogmatch/ui";
import { seoLinks, abs, localizedHead } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

const title = "About DoggMatch — a kinder way to choose a dog";
const description =
  "DoggMatch is a free, honest way to work out which dog might suit your life. We always show our reasoning, and we ask for as little about you as we can.";

const seoCopy = {
  en: { title, description },
  de: { title, description },
  fr: {
    title: "DoggMatch",
    description:
      "Trouvez le compagnon canin idéal pour votre style de vie grâce à DoggMatch. Notre application vous aide à découvrir des chiens à adopter en fonction de vos préférences, de votre niveau d'activité et de votre environnement familial. Que vous recherchiez un compagnon énergique pour vos aventures en plein air ou un toutou calme pour des câlins sur le canapé, DoggMatch est là pour vous guider vers votre nouveau meilleur ami.",
  },
  nl: {
    title: "DoggMatch",
    description:
      "Vind de perfecte match voor jouw hond. Ontdek nieuwe vrienden, speelmaatjes en potentiële partners voor je trouwe viervoeter.",
  },
  no: {
    title: "Om DoggMatch — en snillere måte å velge hund på",
    description:
      "DoggMatch er en gratis og ærlig måte å finne ut hvilken hund som kan passe livet ditt. Vi viser alltid hvordan vi tenker, og spør om minst mulig om deg.",
  },
  pl: {
    title: "O DoggMatch — łagodniejszy sposób wybierania psa",
    description:
      "DoggMatch to darmowy i uczciwy sposób, by ustalić, jaki pies może pasować do Twojego życia. Zawsze pokazujemy, jak liczymy, i pytamy o Ciebie tak mało, jak się da.",
  },
  dk: {
    title: "Om DoggMatch — en mildere måde at vælge hund på",
    description:
      "DoggMatch er en gratis og ærlig måde at finde ud af, hvilken hund der kan passe til dit liv. Vi viser altid, hvordan vi tænker, og spørger om så lidt om dig som muligt.",
  },
  se: {
    title: "Om DoggMatch — ett snällare sätt att välja hund",
    description:
      "DoggMatch är ett gratis och ärligt sätt att ta reda på vilken hund som kan passa ditt liv. Vi visar alltid hur vi tänker, och frågar om dig så lite som möjligt.",
  },
  fi: {
    title: "Tietoa DoggMatchista — lempeämpi tapa valita koira",
    description:
      "DoggMatch on ilmainen ja rehellinen tapa selvittää, mikä koira voisi sopia elämääsi. Näytämme aina, miten päättelemme asiat, ja kysymme sinusta mahdollisimman vähän.",
  },
};

export const Route = createFileRoute("/{-$lang}/about")({
  head: (ctx) => localizedHead(ctx, "/about", seoCopy),
  component: AboutPage,
});

const copy = {
  en: {
    p1: "Bringing a dog home is a big decision, and it deserves more thought than a list of the most popular breeds. Getting it right is better for you, and much better for the dog.",
    p2: "There's no guesswork here. Every match comes from what you've told us, held up against what each breed usually needs. If you tell us something is a hard limit, we take you at your word — even when that rules out a dog you had your heart set on.",
    p3: "We ask for as little as we can. You only share where you live if you want local suggestions, and you never need an account to get your result.",
  },
  de: {
    p1: "Einen Hund nach Hause zu holen, ist eine große Entscheidung und verdient mehr Überlegung als eine Liste der beliebtesten Rassen. Wenn es von Anfang an passt, ist das besser für Sie und viel besser für den Hund.",
    p2: "Hier gibt es kein Rätselraten. Jede Übereinstimmung basiert auf dem, was Sie uns erzählt haben, abgeglichen mit den üblichen Bedürfnissen jeder Rasse. Wenn Sie uns sagen, dass etwas eine absolute Grenze ist, nehmen wir Sie beim Wort – auch wenn das bedeutet, dass ein Hund, den Sie sich ins Herz geschlossen hatten, ausscheidet.",
    p3: "Wir fragen nur nach dem Nötigsten. Sie teilen Ihren Wohnort nur mit, wenn Sie lokale Vorschläge wünschen, und Sie benötigen niemals ein Konto, um Ihr Ergebnis zu erhalten.",
  },
  fr: {
    p1: "Adopter un chien est une décision importante qui mérite plus de réflexion qu'une simple liste des races les plus populaires. Bien choisir, c'est mieux pour vous, et tellement mieux pour le chien.",
    p2: "Pas de hasard ici. Chaque suggestion est basée sur ce que vous nous avez dit, comparé aux besoins habituels de chaque race. Si vous nous indiquez une contrainte absolue, nous vous prenons au mot — même si cela écarte un chien qui vous tenait à cœur.",
    p3: "Nous vous demandons le minimum. Vous ne partagez votre lieu de résidence que si vous souhaitez des suggestions locales, et vous n'avez jamais besoin de compte pour obtenir votre résultat.",
  },
  nl: {
    p1: "Een hond in huis nemen is een grote beslissing, en verdient meer aandacht dan alleen een lijstje met de populairste rassen. Als je de juiste keuze maakt, is dat beter voor jou, en nog veel beter voor de hond.",
    p2: "Hier komt geen giswerk aan te pas. Elke match is gebaseerd op wat je ons vertelt, afgezet tegen wat de meeste honden van een bepaald ras doorgaans nodig hebben. Als je aangeeft dat iets een absolute grens is, nemen we dat serieus – zelfs als dat betekent dat een hond die je op het oog had, toch afvalt.",
    p3: "We vragen zo min mogelijk. Je deelt alleen je woonplaats als je lokale suggesties wilt, en je hebt nooit een account nodig om je resultaat te krijgen.",
  },
  no: {
    p1: "Å ta med en hund hjem er en stor beslutning, og den fortjener mer omtanke enn en liste over de mest populære rasene. Å få det riktig er bedre for deg, og mye bedre for hunden.",
    p2: "Her er det ingen gjetting. Hver match kommer fra det du har fortalt oss, holdt opp mot det hver rase vanligvis trenger. Sier du at noe er en absolutt grense, tar vi deg på ordet — selv når det utelukker en hund du hadde satt deg fore.",
    p3: "Vi ber om så lite som mulig. Du deler bare hvor du bor hvis du vil ha lokale forslag, og du trenger aldri en konto for å få resultatet ditt.",
  },
  pl: {
    p1: "Zabranie psa do domu to poważna decyzja i zasługuje na więcej przemyśleń niż lista najpopularniejszych ras. Dobry wybór jest lepszy dla Ciebie i o wiele lepszy dla psa.",
    p2: "Nie ma tu zgadywania. Każde dopasowanie wynika z tego, co nam powiedziałeś, zestawionego z tym, czego zwykle potrzebuje dana rasa. Jeśli mówisz nam, że coś jest absolutną granicą, wierzymy Ci na słowo — nawet jeśli wyklucza to psa, na którym Ci zależało.",
    p3: "Prosimy o jak najmniej informacji. Podajesz miejsce zamieszkania tylko wtedy, gdy chcesz lokalnych podpowiedzi, a konto nigdy nie jest potrzebne, by uzyskać wynik.",
  },
  dk: {
    p1: "At tage en hund hjem er en stor beslutning, og den fortjener mere omtanke end en liste over de mest populære racer. At få det rigtigt er bedre for dig — og meget bedre for hunden.",
    p2: "Her er ingen gætterier. Hvert match bygger på det, du har fortalt os, holdt op mod det, den enkelte race normalt har brug for. Siger du, at noget er et ufravigeligt krav, tager vi dig på ordet — også når det udelukker en hund, du havde sat dit hjerte til.",
    p3: "Vi beder om så lidt som muligt. Du deler kun, hvor du bor, hvis du vil have lokale forslag, og du skal aldrig oprette en konto for at få dit resultat.",
  },
  se: {
    p1: "Att skaffa hund är ett stort beslut, och det förtjänar mer eftertanke än en lista över de mest populära raserna. Att få det rätt är bättre för dig — och mycket bättre för hunden.",
    p2: "Här finns inga gissningar. Varje matchning bygger på det du har berättat för oss, jämfört med vad varje ras vanligtvis behöver. Säger du att något är ett ofrånkomligt krav tar vi dig på orden — även när det utesluter en hund du hade fäst dig vid.",
    p3: "Vi frågar om så lite som möjligt. Du delar bara var du bor om du vill ha lokala förslag, och du behöver aldrig ett konto för att få ditt resultat.",
  },
  fi: {
    p1: "Koiran hankkiminen on iso päätös, ja se ansaitsee enemmän harkintaa kuin listan suosituimmista roduista. Oikea valinta on parempi sinulle — ja paljon parempi koiralle.",
    p2: "Täällä ei arvailla. Jokainen ehdotus perustuu siihen, mitä olet kertonut meille, verrattuna siihen, mitä kukin rotu yleensä tarvitsee. Jos kerrot meille, että jokin on ehdoton vaatimus, uskomme sanaasi — vaikka se sulkisi pois koiran, johon olit jo mieltynyt.",
    p3: "Kysymme sinusta mahdollisimman vähän. Kerrot asuinpaikkasi vain, jos haluat paikallisia vinkkejä, eikä tulosta varten tarvita koskaan tiliä.",
  },
} as const;

function AboutPage() {
  const t = useT();
  const c = useCopy(copy);
  return (
    <div className="container-page max-w-3xl py-14 md:py-24">
      <Eyebrow>{t.footer.about}</Eyebrow>
      <h1 className="display-lg mt-6">{t.brand.tagline}</h1>
      <ShareBar className="mt-6" />
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>{c.p1}</p>
        <p>{c.p2}</p>
        <p>{c.p3}</p>
        <p className="text-base">{t.footer.note}</p>
      </div>
      <div className="mt-12">
        <ButtonLink to={withLangPrefix("/find-my-dog")} size="lg">
          {t.nav.startMatching}
          <Arrow />
        </ButtonLink>
      </div>
    </div>
  );
}
