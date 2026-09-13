import { Link } from "@tanstack/react-router";
import { activeBenefits, benefitCategories } from "@/data/plus/benefits";
import { Panel } from "@/components/dogmatch/care/parts";
import { useCopy } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";

const copy = {
  en: {
    title: "Member benefits",
    intro:
      "Small, useful savings from people we'd happily send a friend to — shops, groomers, trainers, insurers. We'd rather have five good ones than fifty forgettable ones.",
    emptyBody:
      "Nothing here yet. We're talking to the first partners now, and as soon as an offer is worth your time it will appear on this page — no email needed.",
    partnerCta: "Run a dog-related business?",
    partnerLink: "Become a DoggMatch Partner",
    code: "Code:",
    goTo: "Go to",
  },
  no: {
    title: "Medlemsfordeler",
    intro:
      "Små, nyttige besparelser fra folk vi gjerne ville sendt en venn til — butikker, groomere, trenere, forsikringsselskaper. Vi vil heller ha fem gode enn femti glemte.",
    emptyBody:
      "Ingenting her ennå. Vi snakker med de første partnerne nå, og så snart et tilbud er verdt tiden din dukker det opp her — ingen e-post nødvendig.",
    partnerCta: "Driver du en hundevirksomhet?",
    partnerLink: "Bli DoggMatch-partner",
    code: "Kode:",
    goTo: "Gå til",
  },
  pl: {
    title: "Korzyści dla członków",
    intro:
      "Małe, przydatne oszczędności od ludzi, których chętnie polecilibyśmy znajomemu — sklepy, groomerzy, trenerzy, ubezpieczyciele. Wolimy pięć dobrych ofert niż pięćdziesiąt zapomnianych.",
    emptyBody:
      "Nic tu jeszcze nie ma. Rozmawiamy teraz z pierwszymi partnerami i gdy tylko oferta będzie warta twojego czasu, pojawi się tutaj — bez potrzeby podawania e-maila.",
    partnerCta: "Prowadzisz biznes związany z psami?",
    partnerLink: "Zostań partnerem DoggMatch",
    code: "Kod:",
    goTo: "Przejdź do",
  },
  dk: {
    title: "Medlemsfordele",
    intro:
      "Små, nyttige besparelser fra folk, vi gerne ville sende en ven til — butikker, groomere, trænere, forsikringsselskaber. Vi vil hellere have fem gode end halvtreds glemte.",
    emptyBody:
      "Der er intet her endnu. Vi taler med de første partnere lige nu, og så snart et tilbud er noget værd, dukker det op her — ingen e-mail nødvendig.",
    partnerCta: "Driver du en hundevirksomhed?",
    partnerLink: "Bliv DoggMatch-partner",
    code: "Kode:",
    goTo: "Gå til",
  },
  se: {
    title: "Medlemsförmåner",
    intro:
      "Små, användbara rabatter från folk vi gärna skulle skicka en vän till — butiker, groomers, hundtränare, försäkringsbolag. Vi vill hellre ha fem bra än femtio bortglömda.",
    emptyBody:
      "Inget här ännu. Vi pratar med de första partnerna just nu, och så fort ett erbjudande är värt din tid dyker det upp här — inget mejl behövs.",
    partnerCta: "Driver du ett hundrelaterat företag?",
    partnerLink: "Bli DoggMatch-partner",
    code: "Kod:",
    goTo: "Gå till",
  },
  fi: {
    title: "Jäsenedut",
    intro:
      "Pieniä, käytännöllisiä säästöjä yrityksiltä, jotka suosittelisimme mielellämme kaverillekin — kaupat, trimmaajat, kouluttajat, vakuutusyhtiöt. Otamme mieluummin viisi hyvää etua kuin viisikymmentä unohdettua.",
    emptyBody:
      "Täällä ei ole vielä mitään. Neuvottelemme parhaillaan ensimmäisten kumppaneiden kanssa, ja heti kun tarjous on aikasi arvoinen, se ilmestyy tänne — ei sähköpostia tarvita.",
    partnerCta: "Pyöritätkö koiriin liittyvää yritystä?",
    partnerLink: "Ryhdy DoggMatch-kumppaniksi",
    code: "Koodi:",
    goTo: "Siirry",
  },
  de: {
    title: "Mitgliedervorteile",
    intro:
      "Kleine, nützliche Ersparnisse von Leuten, die wir einem Freund guten Gewissens empfehlen würden — Geschäfte, Hundefriseure, Trainer, Versicherer. Uns sind fünf gute Angebote lieber als fünfzig vergessene.",
    emptyBody:
      "Hier ist noch nichts. Wir sprechen gerade mit den ersten Partnern, und sobald ein Angebot Ihre Zeit wert ist, erscheint es auf dieser Seite — keine E-Mail nötig.",
    partnerCta: "Führen Sie ein Unternehmen rund um Hunde?",
    partnerLink: "Werden Sie DoggMatch-Partner",
    code: "Code:",
    goTo: "Gehe zu",
  },
  fr: {
    title: "Avantages membres",
    intro:
      "De petites économies utiles, venant de personnes que nous recommanderions volontiers à un ami — boutiques, toiletteurs, éducateurs, assureurs. Nous préférons cinq bonnes offres à cinquante oubliables.",
    emptyBody:
      "Rien ici pour l'instant. Nous parlons en ce moment avec les premiers partenaires, et dès qu'une offre vaudra votre temps, elle apparaîtra sur cette page — aucun e-mail nécessaire.",
    partnerCta: "Vous dirigez une entreprise liée aux chiens ?",
    partnerLink: "Devenez partenaire DoggMatch",
    code: "Code :",
    goTo: "Aller sur",
  },
  nl: {
    title: "Ledenvoordelen",
    intro:
      "Kleine, nuttige besparingen van mensen die we met een gerust hart bij een vriend zouden aanbevelen — winkels, trimsalons, trainers, verzekeraars. Wij hebben liever vijf goede aanbiedingen dan vijftig vergetelijke.",
    emptyBody:
      "Hier staat nog niets. We praten nu met de eerste partners, en zodra een aanbieding uw tijd waard is, verschijnt het op deze pagina — geen e-mail nodig.",
    partnerCta: "Runt u een hondengerelateerd bedrijf?",
    partnerLink: "Word DoggMatch-partner",
    code: "Code:",
    goTo: "Ga naar",
  },
} as const;

/** Partner offers for members. Empty until the first partners are in place. */
export function MemberBenefits() {
  const c = useCopy(copy);
  const list = activeBenefits();
  const categories = benefitCategories();

  return (
    <Panel title={c.title}>
      <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{c.intro}</p>

      {list.length === 0 ? (
        <div className="mt-6 rounded-[1.25rem] border border-dashed border-border p-6">
          <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">{c.emptyBody}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <li
                key={cat.id}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {cat.label}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {c.partnerCta}{" "}
            <Link to={withLangPrefix("/partners")} className="text-accent underline-offset-4 hover:underline">
              {c.partnerLink}
            </Link>
            .
          </p>
        </div>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {list.map((b) => (
            <li key={b.id} className="rounded-[1.25rem] border border-border p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {categories.find((cat) => cat.id === b.category)?.label ?? b.category}
              </p>
              <h3 className="mt-2 font-display text-lg tracking-tight">{b.partner}</h3>
              <p className="mt-1 text-[0.9375rem] leading-relaxed text-accent">{b.offer}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.detail}</p>
              {b.where && <p className="mt-2 text-sm text-muted-foreground">{b.where}</p>}
              {b.code && (
                <p className="mt-3 font-mono text-sm">
                  {c.code} <span className="text-foreground">{b.code}</span>
                </p>
              )}
              {b.url && (
                <a
                  href={b.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm text-accent underline-offset-4 hover:underline"
                >
                  {c.goTo} {b.partner}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
}
