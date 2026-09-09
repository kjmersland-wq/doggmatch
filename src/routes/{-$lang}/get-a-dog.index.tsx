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
