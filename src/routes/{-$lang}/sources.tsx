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
    steps: [
      {
        t: "You describe your everyday life",
        b: "Home, hours alone, activity, children, other pets, experience, grooming and shedding limits.",
      },
      {
        t: "Hard limits are respected first",
        b: "If you tell us something is a real constraint, any dog that clashes with it is capped — it can't climb the list by scoring well elsewhere.",
      },
      {
        t: "Seven areas are scored and weighted",
        b: "Lifestyle, home, activity, temperament, trainability, companionship and upkeep. Each is a number out of 100, then combined with fixed weights.",
      },
      {
        t: "You see the reasoning, not just the number",
        b: "Every result shows what fits, what doesn't and why, so you can disagree with us in an informed way.",
      },
    ],
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
      "Matchprosenter, porsjonsanslag, ukerytmer og readiness-poeng lages av vår egen deterministiske kode. De samme svarene gir alltid det samme resultatet — ingen AI som gjetter underveis, og ingen personopplysninger forlater enheten din for å regne det ut.",
    methodTitle: "Slik fungerer matchingen faktisk",
    steps: [
      {
        t: "Du beskriver hverdagen din",
        b: "Bolig, timer alene, aktivitetsnivå, barn, andre dyr, erfaring og grenser for pelsstell og hårfelling.",
      },
      {
        t: "Absolutte grenser går først",
        b: "Sier du at noe er en reell begrensning, får hunder som kolliderer med den et tak — de kan ikke klatre på listen ved å score godt andre steder.",
      },
      {
        t: "Sju områder scores og vektes",
        b: "Livsstil, bolig, aktivitet, temperament, lærevillighet, selskap og stell. Hvert område blir et tall av 100, som så settes sammen med faste vekter.",
      },
      {
        t: "Du ser begrunnelsen, ikke bare tallet",
        b: "Hvert resultat viser hva som passer, hva som ikke gjør det, og hvorfor — så du kan være uenig med oss på et opplyst grunnlag.",
      },
    ],
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
      "Procenty dopasowania, szacunki porcji, rytmy tygodniowe i wyniki gotowości powstają dzięki naszemu własnemu, deterministycznemu kodowi. Te same odpowiedzi zawsze dają ten sam wynik — nie ma tu żadnego zgadywania po drodze, a żadne dane osobowe nie opuszczają Twojego urządzenia, by je policzyć.",
    methodTitle: "Jak naprawdę działa dopasowywanie",
    steps: [
      {
        t: "Opisujesz swoje codzienne życie",
        b: "Dom, godziny spędzane samodzielnie przez psa, aktywność, dzieci, inne zwierzęta, doświadczenie, pielęgnacja i granice dotyczące linienia.",
      },
      {
        t: "Twarde ograniczenia są respektowane w pierwszej kolejności",
        b: "Jeśli mówisz nam, że coś jest realnym ograniczeniem, każdy pies, który w to koliduje, ma ustalony pułap — nie może wspiąć się na listę, dobrze wypadając gdzie indziej.",
      },
      {
        t: "Siedem obszarów jest ocenianych i ważonych",
        b: "Styl życia, dom, aktywność, temperament, podatność na trening, towarzystwo i pielęgnacja. Każdy to liczba w skali do 100, potem łączona ze stałymi wagami.",
      },
      {
        t: "Widzisz uzasadnienie, nie tylko liczbę",
        b: "Każdy wynik pokazuje, co pasuje, co nie i dlaczego — dzięki czemu możesz się z nami nie zgadzać w sposób świadomy.",
      },
    ],
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
        <ol className="mt-6 space-y-4">
          {c.steps.map((s, i) => (
            <li key={s.t} className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                {i + 1}
              </span>
              <div>
                <h3 className="font-medium text-foreground">{s.t}</h3>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>
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
