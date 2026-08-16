import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalList, LegalPage, LegalSection } from "@/components/dogmatch/legal";
import { useCopy } from "@/i18n";

const title = "Terms of Service — DoggMatch";
const description =
  "The terms for using DoggMatch and DoggMatch+: what the service is, how membership and billing work, your right to cancel, and the limits of our advice.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const copy = {
  en: {
    eyebrow: "Terms",
    title: "The terms, in plain language",
    intro:
      "These are the terms you agree to when you use DoggMatch. We've tried to write them the way we'd explain them to you in person, without hiding anything in the small print.",
    updated: "16 August 2026",
    contactPage: "contact page",
    privacyNotice: "privacy notice",
    writeToUs: "write to us",
    sections: {
      whoWeAre: {
        title: "Who we are",
        p1:
          "DoggMatch is built and run by KM TECH LABS, org.nr. 934 044 029, Kristiansand, Norway. When we say \"we\" or \"us\" below, that's who we mean. When we say \"you\", we mean whoever is using the site.",
      },
      whatItIs: {
        title: "What DoggMatch is",
        p1:
          "DoggMatch helps you work out which dog might suit your life, and helps you look after the dog you already have. Everything we show you comes from a transparent calculation based on what you tell us and what each breed typically needs. It is general guidance, not a professional assessment.",
      },
      notAdvice: {
        title: "Important: this is not veterinary or legal advice",
        p1:
          "Our health, nutrition, training and travel material is general information. Every dog is different. Always talk to your vet about anything medical, and always check the official rules of the countries you're travelling to and from — border and import requirements change, and only the authorities can confirm what applies to you. You are responsible for decisions you make about your dog.",
      },
      account: {
        title: "Your account",
        p1:
          "Most of DoggMatch works without an account. If you create one, keep your sign-in details to yourself, give us accurate information, and let us know if you think someone else has got into your account. You need to be at least 16 years old. You can close your account whenever you like.",
      },
      membership: {
        title: "DoggMatch+ membership and billing",
        items: [
          "DoggMatch+ costs €7.99 per month or €59.99 per year. Prices include VAT where it applies.",
          "Payments are handled by Stripe. We never see your card details.",
          "Membership renews automatically at the end of each period until you cancel.",
          "You can cancel at any time from your account. Your membership then stays active until the end of the period you've already paid for, and doesn't renew after that.",
          "If we change the price, we'll tell you at least 30 days before it affects you, and you can cancel before it takes effect.",
          "If a payment fails, we may pause membership features until it goes through.",
        ],
      },
      withdraw: {
        title: "Your right to withdraw (EU/EEA consumers)",
        p1Before:
          "As a consumer in the EU/EEA you have 14 days to withdraw from a purchase, under the Consumer Rights Directive and the Norwegian Right of Withdrawal Act (angrerettloven). To use it, just tell us through the",
        p1After: "within 14 days of subscribing, and we'll refund you.",
        p2:
          "Because DoggMatch+ gives you immediate access to digital content, you agree that we start delivering straight away. If you then withdraw within the 14 days, we may deduct a fair amount for the part of the period you've already used.",
      },
      use: {
        title: "How you may use the site",
        intro: "Please don't:",
        items: [
          "Scrape, copy or resell our content, breed data or matching results.",
          "Try to break, overload or get around the security of the service.",
          "Use the site for anything unlawful, or upload anything harmful.",
          "Present DoggMatch results as professional veterinary or breeding advice.",
        ],
      },
      content: {
        title: "Content and ownership",
        p1:
          "The DoggMatch name, logo, design, written material, breed content and matching logic belong to KM TECH LABS and are protected by copyright and trademark law. You may use them for your own personal, non-commercial use — including printing your own documents and member card. Anything you create in DoggMatch, such as your dog profiles and notes, stays yours.",
      },
      availability: {
        title: "Availability",
        p1:
          "We work hard to keep DoggMatch up, but we don't promise it will never be unavailable. We may update, change or discontinue features. If we ever shut down a paid feature you're subscribed to, we'll refund the unused part of your period.",
      },
      liability: {
        title: "Liability",
        p1:
          "Nothing here limits your statutory consumer rights, and nothing limits our liability for death, personal injury, gross negligence or intent. Beyond that, and to the extent the law allows, we're not liable for indirect or consequential loss, and our total liability is limited to what you've paid us in the 12 months before the claim.",
      },
      privacy: {
        title: "Privacy",
        p1Before: "How we handle your personal data is explained in our",
        p1After: ", which follows the GDPR.",
      },
      changes: {
        title: "Changes to these terms",
        p1:
          "If we change these terms in a way that matters to you, we'll let members know by email at least 30 days beforehand. Carrying on using DoggMatch after that means you accept the new terms.",
      },
      law: {
        title: "Law and disputes",
        p1:
          "These terms are governed by Norwegian law, with Kristiansand tingrett as the ordinary venue. If you're a consumer, you keep the protection of the mandatory law of the country you live in, and you can bring a case there.",
        p2Before: "You can also take a complaint to the Norwegian Consumer Authority (Forbrukertilsynet)/Forbrukerrådet, or use the European Commission's online dispute resolution platform. We'd much rather you just",
        p2After: "first — most things are easy to sort out.",
      },
    },
  },
  no: {
    eyebrow: "Vilkår",
    title: "Vilkårene, på vanlig norsk",
    intro:
      "Dette er vilkårene du godtar når du bruker DoggMatch. Vi har prøvd å skrive dem slik vi ville forklart dem til deg ansikt til ansikt, uten å gjemme noe i det små.",
    updated: "16. august 2026",
    contactPage: "kontaktsiden",
    privacyNotice: "personvernerklæring",
    writeToUs: "skrive til oss",
    sections: {
      whoWeAre: {
        title: "Hvem vi er",
        p1:
          "DoggMatch er bygget og driftet av KM TECH LABS, org.nr. 934 044 029, Kristiansand, Norge. Når vi sier «vi» eller «oss» under, er det dette vi mener. Når vi sier «du», mener vi den som bruker siden.",
      },
      whatItIs: {
        title: "Hva DoggMatch er",
        p1:
          "DoggMatch hjelper deg å finne ut hvilken hund som kan passe livet ditt, og hjelper deg å ta vare på hunden du allerede har. Alt vi viser deg kommer fra en gjennomsiktig beregning basert på det du forteller oss og hva hver rase normalt trenger. Det er generell veiledning, ikke en profesjonell vurdering.",
      },
      notAdvice: {
        title: "Viktig: dette er ikke veterinær- eller juridisk rådgivning",
        p1:
          "Vårt innhold om helse, ernæring, trening og reise er generell informasjon. Hver hund er forskjellig. Snakk alltid med veterinæren din om alt som er medisinsk, og sjekk alltid de offisielle reglene for landene du reiser til og fra — grense- og importkrav endrer seg, og bare myndighetene kan bekrefte hva som gjelder for deg. Du er selv ansvarlig for beslutninger du tar om hunden din.",
      },
      account: {
        title: "Din konto",
        p1:
          "Det meste av DoggMatch fungerer uten konto. Hvis du oppretter en, hold innloggingsopplysningene dine for deg selv, gi oss korrekt informasjon, og gi beskjed hvis du tror noen andre har fått tilgang til kontoen din. Du må være minst 16 år. Du kan avslutte kontoen din når du vil.",
      },
      membership: {
        title: "DoggMatch+ medlemskap og fakturering",
        items: [
          "DoggMatch+ koster €7,99 per måned eller €59,99 per år. Prisene inkluderer mva. der det gjelder.",
          "Betalinger håndteres av Stripe. Vi ser aldri kortopplysningene dine.",
          "Medlemskapet fornyes automatisk ved slutten av hver periode inntil du sier opp.",
          "Du kan si opp når som helst fra kontoen din. Medlemskapet ditt forblir da aktivt ut perioden du allerede har betalt for, og fornyes ikke etter det.",
          "Hvis vi endrer prisen, sier vi fra minst 30 dager før det påvirker deg, og du kan si opp før det trer i kraft.",
          "Hvis en betaling mislykkes, kan vi sette medlemskapsfunksjoner på pause til den går gjennom.",
        ],
      },
      withdraw: {
        title: "Din angrerett (EU/EØS-forbrukere)",
        p1Before:
          "Som forbruker i EU/EØS har du 14 dager til å angre et kjøp, i henhold til forbrukerrettighetsdirektivet og den norske angrerettloven. For å bruke den, si bare fra til oss gjennom",
        p1After: "innen 14 dager etter at du abonnerte, så refunderer vi deg.",
        p2:
          "Fordi DoggMatch+ gir deg umiddelbar tilgang til digitalt innhold, godtar du at vi begynner å levere med en gang. Hvis du deretter angrer innen 14-dagersfristen, kan vi trekke fra et rimelig beløp for den delen av perioden du allerede har brukt.",
      },
      use: {
        title: "Hvordan du kan bruke siden",
        intro: "Vennligst ikke:",
        items: [
          "Skrap, kopier eller videreselg innholdet vårt, rasedata eller matchresultater.",
          "Forsøk å bryte, overbelaste eller omgå sikkerheten til tjenesten.",
          "Bruk siden til noe ulovlig, eller last opp noe skadelig.",
          "Fremstill DoggMatch-resultater som profesjonell veterinær- eller avlsrådgivning.",
        ],
      },
      content: {
        title: "Innhold og eierskap",
        p1:
          "Navnet DoggMatch, logoen, designet, det skrevne materialet, raseinnholdet og matchlogikken tilhører KM TECH LABS og er beskyttet av opphavsrett og varemerkerett. Du kan bruke dem til din egen personlige, ikke-kommersielle bruk — inkludert å skrive ut dine egne dokumenter og medlemskort. Alt du lager i DoggMatch, som hundeprofilene og notatene dine, forblir ditt.",
      },
      availability: {
        title: "Tilgjengelighet",
        p1:
          "Vi jobber hardt for å holde DoggMatch oppe, men vi lover ikke at det aldri vil være utilgjengelig. Vi kan oppdatere, endre eller avvikle funksjoner. Hvis vi noen gang legger ned en betalt funksjon du abonnerer på, refunderer vi den ubrukte delen av perioden din.",
      },
      liability: {
        title: "Ansvar",
        p1:
          "Ingenting her begrenser dine lovbestemte forbrukerrettigheter, og ingenting begrenser vårt ansvar for død, personskade, grov uaktsomhet eller forsett. Utover det, og i den grad loven tillater det, er vi ikke ansvarlige for indirekte tap eller følgetap, og vårt totale ansvar er begrenset til det du har betalt oss i løpet av de 12 månedene før kravet.",
      },
      privacy: {
        title: "Personvern",
        p1Before: "Hvordan vi behandler dine personopplysninger er forklart i vår",
        p1After: ", som følger GDPR.",
      },
      changes: {
        title: "Endringer i disse vilkårene",
        p1:
          "Hvis vi endrer disse vilkårene på en måte som betyr noe for deg, gir vi medlemmer beskjed per e-post minst 30 dager i forveien. Fortsetter du å bruke DoggMatch etter det, betyr det at du godtar de nye vilkårene.",
      },
      law: {
        title: "Lovvalg og tvister",
        p1:
          "Disse vilkårene er underlagt norsk rett, med Kristiansand tingrett som ordinært verneting. Er du forbruker, beholder du beskyttelsen av ufravikelig lovgivning i landet du bor i, og du kan reise sak der.",
        p2Before: "Du kan også bringe en klage til Forbrukertilsynet/Forbrukerrådet, eller bruke EU-kommisjonens nettbaserte tvisteløsningsplattform. Vi vil mye heller at du bare",
        p2After: "først — det meste er enkelt å ordne opp i.",
      },
    },
  },
} as const;

function TermsPage() {
  const c = useCopy(copy);
  const s = c.sections;
  return (
    <LegalPage eyebrow={c.eyebrow} title={c.title} intro={c.intro} updated={c.updated}>
      <LegalSection title={s.whoWeAre.title}>
        <p>{s.whoWeAre.p1}</p>
      </LegalSection>

      <LegalSection title={s.whatItIs.title}>
        <p>{s.whatItIs.p1}</p>
      </LegalSection>

      <LegalSection title={s.notAdvice.title}>
        <p>{s.notAdvice.p1}</p>
      </LegalSection>

      <LegalSection title={s.account.title}>
        <p>{s.account.p1}</p>
      </LegalSection>

      <LegalSection title={s.membership.title}>
        <LegalList items={s.membership.items} />
      </LegalSection>

      <LegalSection title={s.withdraw.title}>
        <p>
          {s.withdraw.p1Before}{" "}
          <Link to="/contact" className="text-foreground underline underline-offset-4">
            {c.contactPage}
          </Link>{" "}
          {s.withdraw.p1After}
        </p>
        <p>{s.withdraw.p2}</p>
      </LegalSection>

      <LegalSection title={s.use.title}>
        <p>{s.use.intro}</p>
        <LegalList items={s.use.items} />
      </LegalSection>

      <LegalSection title={s.content.title}>
        <p>{s.content.p1}</p>
      </LegalSection>

      <LegalSection title={s.availability.title}>
        <p>{s.availability.p1}</p>
      </LegalSection>

      <LegalSection title={s.liability.title}>
        <p>{s.liability.p1}</p>
      </LegalSection>

      <LegalSection title={s.privacy.title}>
        <p>
          {s.privacy.p1Before}{" "}
          <Link to="/privacy" className="text-foreground underline underline-offset-4">
            {c.privacyNotice}
          </Link>
          {s.privacy.p1After}
        </p>
      </LegalSection>

      <LegalSection title={s.changes.title}>
        <p>{s.changes.p1}</p>
      </LegalSection>

      <LegalSection title={s.law.title}>
        <p>{s.law.p1}</p>
        <p>
          {s.law.p2Before}{" "}
          <Link to="/contact" className="text-foreground underline underline-offset-4">
            {c.writeToUs}
          </Link>{" "}
          {s.law.p2After}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
