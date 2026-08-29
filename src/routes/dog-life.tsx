import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useT, pick } from "@/i18n";
import { Button, Eyebrow } from "@/components/dogmatch/ui";
import dogLifeImage from "@/assets/dog-life.jpg";
import { seoLinks, abs, localizedHead } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

const title = "Dog Life — dog-friendly places where you live | DoggMatch";
const description =
  "Parks, good walks, training classes, vets, groomers and places that welcome dogs. Just tell us where you live.";

const seoCopy = {
  en: { title, description },
  no: {
    title: "Hundeliv — hundevennlige steder der du bor | DoggMatch",
    description:
      "Parker, fine turer, hundekurs, veterinærer, hundefrisører og steder som tar godt imot hunder. Bare fortell oss hvor du bor.",
  },
  pl: {
    title: "Psie życie — miejsca przyjazne psom w Twojej okolicy | DoggMatch",
    description:
      "Parki, dobre spacery, szkolenia, weterynarze, groomerzy i miejsca, które lubią psy. Wystarczy, że powiesz nam, gdzie mieszkasz.",
  },
};

export const Route = createFileRoute("/dog-life")({
  head: (ctx) => localizedHead(ctx, "/dog-life", seoCopy),
  component: DogLifePage,
});

/** Practical, honest guidance for each category, in the same order as t.dogLife.categories. */
const tipCopy = {
  en: {
    lead: "We're building the local listings city by city. Until yours is ready, here's what we'd look for in each — it's the same checklist we use ourselves.",
    tips: [
      "Fenced, with a separate area for small dogs, and never so crowded that your dog can't leave a situation.",
      "Loops of 30-45 minutes with soft ground and shade. Vary the route — new smells tire a dog more than new distance.",
      "Check the local rules and the season; ground-nesting birds mean leads in spring almost everywhere.",
      "Ask which methods they use. Reward-based, small groups, and you should be allowed to watch a class before booking.",
      "Register before you need one, and note the nearest out-of-hours emergency clinic on the fridge.",
      "Ask to see how they handle a nervous dog. A good groomer will happily do a short first visit with no clipping at all.",
      "Insurance, references and a meeting on your dog's terms. Ask how many dogs they walk at once.",
      "Water bowl outside is a good sign; a bowl and a treat behind the counter is a better one.",
      "Phone ahead — dog-friendly often means the terrace only, and that matters in February.",
      "Check seasonal dog bans, currents and blue-green algae warnings before letting a dog swim.",
      "Somewhere that will order your food in and knows the breed-specific bits beats the cheapest shelf price.",
    ],
    searching: (place: string) => `Looking around ${place}`,
    notReady: (place: string) =>
      `We don't have verified places for ${place} yet. Tell us and we'll prioritise it — the checklist below works anywhere in the meantime.`,
  },
  no: {
    lead: "Vi bygger de lokale oversiktene by for by. Til din er klar, er dette vi ville sett etter — samme sjekkliste som vi bruker selv.",
    tips: [
      "Inngjerdet, med eget område for små hunder, og aldri så fullt at hunden din ikke kan komme seg unna.",
      "Runder på 30-45 minutter med mykt underlag og skygge. Varier ruta — nye lukter sliter ut en hund mer enn nye kilometer.",
      "Sjekk lokale regler og årstid; båndtvang gjelder om våren de fleste steder.",
      "Spør hvilke metoder de bruker. Belønningsbasert, små grupper, og du bør få se en time før du melder deg på.",
      "Registrer deg før du trenger det, og heng opp nærmeste vaktveterinær på kjøleskapet.",
      "Be om å se hvordan de håndterer en usikker hund. En god groomer tar gjerne et kort førstebesøk uten klipping.",
      "Forsikring, referanser og et møte på hundens premisser. Spør hvor mange hunder de går med om gangen.",
      "Vannbolle utenfor er et godt tegn; bolle og godbit bak disken er et bedre.",
      "Ring først — hundevennlig betyr ofte bare uteserveringen, og det merkes i februar.",
      "Sjekk hundeforbud i sesongen, strøm og varsler om blågrønnalger før hunden får bade.",
      "Et sted som bestiller inn fôret ditt og kan de rasespesifikke tingene slår den billigste hyllprisen.",
    ],
    searching: (place: string) => `Ser rundt ${place}`,
    notReady: (place: string) =>
      `Vi har ikke verifiserte steder for ${place} ennå. Si fra, så prioriterer vi det — sjekklisten under fungerer overalt i mellomtiden.`,
  },
  pl: {
    lead: "Budujemy lokalne zestawienia miasto po mieście. Zanim twoje będzie gotowe, oto na co sami zwracamy uwagę.",
    tips: [
      "Ogrodzony, z osobną częścią dla małych psów i nigdy tak zatłoczony, żeby pies nie mógł się wycofać.",
      "Pętle po 30-45 minut, miękkie podłoże i cień. Zmieniaj trasę — nowe zapachy męczą psa bardziej niż nowe kilometry.",
      "Sprawdź lokalne przepisy i porę roku; wiosną w wielu miejscach obowiązuje smycz.",
      "Zapytaj o metody. Szkolenie na nagrodach, małe grupy i możliwość obejrzenia zajęć przed zapisem.",
      "Zarejestruj się, zanim będzie potrzebny, i zapisz najbliższą całodobową lecznicę.",
      "Poproś, żeby pokazali, jak pracują z niepewnym psem. Dobry groomer chętnie zrobi krótką pierwszą wizytę bez strzyżenia.",
      "Ubezpieczenie, referencje i spotkanie na warunkach psa. Zapytaj, ile psów prowadzi naraz.",
      "Miska z wodą przed wejściem to dobry znak; miska i smakołyk za ladą — jeszcze lepszy.",
      "Zadzwoń wcześniej — „przyjazne psom” często oznacza tylko ogródek, a to ma znaczenie w lutym.",
      "Sprawdź sezonowe zakazy, prądy i ostrzeżenia o sinicach, zanim pies wejdzie do wody.",
      "Sklep, który zamówi twoją karmę i zna specyfikę rasy, jest wart więcej niż najniższa cena na półce.",
    ],
    searching: (place: string) => `Szukamy w okolicy: ${place}`,
    notReady: (place: string) =>
      `Nie mamy jeszcze zweryfikowanych miejsc dla ${place}. Daj znać, a zajmiemy się tym wcześniej — lista poniżej sprawdza się wszędzie.`,
  },
} as const;

function DogLifePage() {
  const t = useT();
  const c = useCopy(tipCopy);
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  return (
    <div className="pb-24">
      <section className="container-page py-14 md:py-20">
        <Eyebrow>{t.home.lifeEyebrow}</Eyebrow>
        <h1 className="display-lg mt-6 max-w-2xl">{t.dogLife.title}</h1>
        <ShareBar className="mt-6" />
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{t.dogLife.subtitle}</p>

        <form
          className="mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(location.trim() || null);
          }}
        >
          <label htmlFor="location" className="sr-only">
            {t.dogLife.placeholder}
          </label>
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder={t.dogLife.placeholder}
            autoComplete="address-level2"
            className="h-14 flex-1 rounded-full border border-border bg-card px-6 outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
          <Button size="lg" type="submit">
            {t.dogLife.search}
          </Button>
        </form>
        <p className="mt-4 text-sm text-muted-foreground">{t.dogLife.optional}</p>
      </section>

      <section className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] border border-border">
          <img
            src={dogLifeImage}
            alt="Aerial view of a park with walking paths at dawn"
            width={1600}
            height={1008}
            loading="lazy"
            className="h-[22rem] w-full object-cover md:h-[30rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
            <p className="font-display text-2xl text-primary-foreground">
              {submitted
                ? c.searching(submitted)
                : pick({ en: "Wherever you are", no: "Uansett hvor du er", pl: "Gdziekolwiek jesteś" })}
            </p>
            <p className="mt-2 max-w-md text-sm text-primary-foreground/80">
              {submitted ? c.notReady(submitted) : c.lead}
            </p>
          </div>
        </div>
      </section>

      <section className="container-page mt-16">
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.dogLife.categories.map((category, index) => (
            <li key={category} className="bg-background p-7">
              <p className="font-display text-lg leading-tight tracking-tight">{category}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.tips[index] ?? c.lead}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
