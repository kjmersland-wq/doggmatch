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
      "Matchprosenter, porsjonsanslag, ukerytmer og readiness-poeng lages av vår egen deterministiske kode. De samme svarene gir alltid det samme resultatet — ingen AI som gjetter underveis, og ingen personopplysninger forlater enheten din for å regne det ut.",
    methodTitle: "Slik fungerer matchingen faktisk",
    stageWord: "Steg",
    stages: [
      {
        t: "Livsstilsinnspill fra deg",
        b: "Bolig, timer alene, aktivitetsnivå, erfaring og forhold i hjemmet som barn, andre dyr, pelsfelling og allergier.",
      },
      {
        t: "Fjerning av absolutte grenser",
        b: "Alvorlig allergi, dårlig match med leilighet og lange dager alene sjekkes først. Merk noen av disse som en absolutt grense selv, og en rase som bryter den, fjernes helt fra resultatene dine — ikke bare nedjustert.",
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
    calloutEyebrow: "En absolutt grense i praksis",
    calloutTitle: "Hvorfor en border collie kan bli utelukket ved 6+ timer alene",
    calloutBody:
      "En border collie scorer som regel strålende på aktivitet og lærevillighet — men tåler dårlig å være alene. Merk «timer alene» som en absolutt grense, og en lang dag alene utelukker den helt, uansett hvor godt den gjør det andre steder.",
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
      "Procenty dopasowania, szacunki porcji, rytmy tygodniowe i wyniki gotowości powstają dzięki naszemu własnemu, deterministycznemu kodowi. Te same odpowiedzi zawsze dają ten sam wynik — nie ma tu żadnego zgadywania po drodze, a żadne dane osobowe nie opuszczają Twojego urządzenia, by je policzyć.",
    methodTitle: "Jak naprawdę działa dopasowywanie",
    stageWord: "Etap",
    stages: [
      {
        t: "Twoje dane o stylu życia",
        b: "Przestrzeń życiowa, godziny spędzane samodzielnie przez psa, poziom aktywności, doświadczenie oraz szczegóły domowe, takie jak dzieci, inne zwierzęta, linienie i alergie.",
      },
      {
        t: "Eliminacja twardych ograniczeń",
        b: "Poważne alergie, niedopasowanie do mieszkania i długie dni w samotności są sprawdzane najpierw. Oznacz dowolne z nich jako twardą granicę, a rasa, która ją przekracza, zostaje całkowicie usunięta z wyników — a nie tylko obniżona w ocenie.",
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
    calloutEyebrow: "Twarda granica w praktyce",
    calloutTitle: "Dlaczego border collie może zostać wyeliminowany przy 6+ godzinach samotności",
    calloutBody:
      "Border collie zwykle świetnie wypada pod względem aktywności i podatności na trening — ale słabo znosi samotność. Oznacz „godziny samodzielnie” jako twardą granicę, a długi dzień w samotności całkowicie go wyklucza, niezależnie od tego, jak dobrze wypada gdzie indziej.",
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
