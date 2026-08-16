import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalList, LegalPage, LegalSection } from "@/components/dogmatch/legal";
import { useCopy } from "@/i18n";
import { seoLinks, abs } from "@/lib/seo";

const title = "Privacy — how DoggMatch handles your data";
const description =
  "How DoggMatch collects, stores and protects your personal data, your rights under the GDPR, and who we share information with.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/privacy") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: seoLinks("/privacy"),
  }),
  component: PrivacyPage,
});

const copy = {
  en: {
    eyebrow: "Privacy",
    title: "Your data, handled with care",
    intro:
      "We ask for as little as we possibly can, we tell you plainly what we do with it, and you can ask us to delete it at any time. This page explains all of that in normal language.",
    updated: "16 August 2026",
    contactPage: "contact page",
    sections: {
      responsible: {
        title: "Who is responsible for your data",
        p1:
          "DoggMatch is built and run by KM TECH LABS, org.nr. 934 044 029, in Kristiansand, Norway. KM TECH LABS is the data controller for personal data processed through this website, and decides why and how that data is used.",
        p2:
          "Norway is part of the EEA, so the EU General Data Protection Regulation (GDPR) applies to us in full, along with the Norwegian Personal Data Act (personopplysningsloven). Our supervisory authority is the Norwegian Data Protection Authority (Datatilsynet).",
        p3Before: "The easiest way to reach us about anything on this page is through our",
        p3After: ".",
      },
      collect: {
        title: "What we collect, and why",
        p1:
          "Most of DoggMatch works without an account and without us storing anything about you. Your quiz answers, your dog profiles, your training progress and your care notes are kept in your own browser's local storage on your device — not on our servers.",
        items: [
          {
            strong: "Quiz answers and dog profiles.",
            rest:
              " Stored locally on your device so you can come back to them. We never see them. Clearing your browser data removes them.",
          },
          {
            strong: "Account details.",
            rest:
              " If you create an account, we store your email address and sign-in identity. Legal basis: performance of a contract (GDPR Art. 6(1)(b)).",
          },
          {
            strong: "Membership details.",
            rest:
              " For DoggMatch+ we store your subscription status, plan, member ID and valid-through date. Legal basis: performance of a contract.",
          },
          {
            strong: "Payment details.",
            rest:
              " Card data is handled entirely by Stripe. We never see or store your card number. We keep only the subscription reference we need to know whether your membership is active.",
          },
          {
            strong: "Messages you send us.",
            rest:
              " Your name, email, subject and message, so we can reply. Legal basis: legitimate interest in answering you (GDPR Art. 6(1)(f)).",
          },
          {
            strong: "Technical data.",
            rest:
              " Standard server logs such as IP address and browser type, kept briefly for security, abuse prevention and troubleshooting. Legal basis: legitimate interest in keeping the service safe.",
          },
        ],
      },
      notDo: {
        title: "What we do not do",
        items: [
          "We do not sell or rent your personal data to anyone.",
          "We do not use advertising trackers or third-party advertising cookies.",
          "We do not build behavioural profiles of you for marketing.",
          "We do not make automated decisions with legal or similarly significant effects. Your match result is a transparent calculation you can see the reasoning behind, and it has no legal consequences.",
        ],
      },
      cookies: {
        title: "Cookies and local storage",
        p1:
          "We only use what's strictly necessary to make the site work: a sign-in session, your light/dark preference, your language, and the local data described above. Under the ePrivacy Directive and Norwegian ekomlov, strictly necessary storage of this kind does not require consent, which is why you don't see a cookie banner. If we ever add analytics or marketing cookies, we will ask you first.",
      },
      processors: {
        title: "Who processes data on our behalf",
        p1:
          "We use a small number of carefully chosen providers, each bound by a data processing agreement under GDPR Art. 28:",
        items: [
          {
            strong: "Hosting, database and authentication.",
            rest: " Runs our servers, stores account and membership records, and handles sign-in.",
          },
          {
            strong: "Stripe.",
            rest: " Payments and subscription billing, as an independent controller for payment data.",
          },
          {
            strong: "Google.",
            rest: " Only if you choose to sign in with Google, and only for that sign-in.",
          },
          {
            strong: "Email delivery.",
            rest: " Used to send and receive the messages you write to us.",
          },
        ],
      },
      transfers: {
        title: "Where your data is stored, and transfers outside the EEA",
        p1:
          "We store personal data on servers within the EU/EEA wherever we can. Some of our providers are based in the United States. Where data does leave the EEA, the transfer relies on the European Commission's Standard Contractual Clauses, and where applicable the EU–US Data Privacy Framework, together with additional technical safeguards such as encryption in transit and at rest.",
      },
      retention: {
        title: "How long we keep things",
        items: [
          "Local data on your device: until you clear it. It is yours, on your machine.",
          "Account and membership data: for as long as your account exists, then deleted or anonymised within 90 days of you closing it.",
          "Contact messages: up to 24 months, so we have context if you write again.",
          "Payment and invoice records: kept for 5 years, as Norwegian bookkeeping law (bokføringsloven) requires. Legal basis: legal obligation (GDPR Art. 6(1)(c)).",
          "Security logs: normally 90 days or less.",
        ],
      },
      protect: {
        title: "How we protect it",
        p1:
          "Data is encrypted in transit (TLS) and at rest by our hosting provider. Database access is restricted by row-level security rules, so an account can only ever reach its own records. Access to production systems is limited to the people who genuinely need it. If a breach ever puts your rights at risk, we will notify Datatilsynet within 72 hours and tell you directly where the law requires it.",
      },
      rights: {
        title: "Your rights",
        intro: "Under the GDPR you can ask us to:",
        items: [
          "Tell you what we hold about you, and give you a copy (Art. 15).",
          "Correct anything that's wrong (Art. 16).",
          "Delete your data (Art. 17).",
          "Restrict how we use it (Art. 18).",
          "Send it to you or another provider in a portable format (Art. 20).",
          "Stop processing based on legitimate interest (Art. 21).",
          "Withdraw consent at any time, where processing is based on consent (Art. 7).",
        ],
        p2Before: "Write to us through the",
        p2Mid:
          "and we will respond within 30 days, free of charge. If you're not happy with how we handled it, you can complain to Datatilsynet or to the data protection authority in your own country.",
      },
      children: {
        title: "Children",
        p1:
          "DoggMatch isn't intended for children. You need to be at least 16 to create an account. If you believe a child has given us personal data, tell us and we will remove it.",
      },
      changes: {
        title: "Changes to this notice",
        p1:
          "If we change anything meaningful here, we'll update the date at the top of this page, and tell account holders by email when the change affects them.",
      },
    },
  },
  no: {
    eyebrow: "Personvern",
    title: "Dine data, behandlet med omtanke",
    intro:
      "Vi ber om så lite som mulig, vi forteller deg rett fram hva vi bruker det til, og du kan be oss slette det når som helst. Denne siden forklarer alt dette på vanlig norsk.",
    updated: "16. august 2026",
    contactPage: "kontaktsiden",
    sections: {
      responsible: {
        title: "Hvem er ansvarlig for dine data",
        p1:
          "DoggMatch er bygget og driftet av KM TECH LABS, org.nr. 934 044 029, i Kristiansand, Norge. KM TECH LABS er behandlingsansvarlig for personopplysninger som behandles gjennom denne nettsiden, og bestemmer hvorfor og hvordan dataene brukes.",
        p2:
          "Norge er en del av EØS, så EUs personvernforordning (GDPR) gjelder fullt ut for oss, sammen med den norske personopplysningsloven. Vårt tilsynsorgan er Datatilsynet.",
        p3Before: "Den enkleste måten å nå oss på om noe som helst på denne siden, er gjennom vår",
        p3After: ".",
      },
      collect: {
        title: "Hva vi samler inn, og hvorfor",
        p1:
          "Det meste av DoggMatch fungerer uten konto og uten at vi lagrer noe om deg. Svarene dine på quizen, hundeprofilene dine, treningsfremgangen din og omsorgsnotatene dine lagres i nettleserens lokale lager på din enhet — ikke på våre servere.",
        items: [
          {
            strong: "Quizsvar og hundeprofiler.",
            rest:
              " Lagres lokalt på din enhet slik at du kan komme tilbake til dem. Vi ser dem aldri. Sletter du nettleserdataene, forsvinner de.",
          },
          {
            strong: "Kontoopplysninger.",
            rest:
              " Hvis du oppretter en konto, lagrer vi e-postadressen din og innloggingsidentiteten din. Behandlingsgrunnlag: oppfyllelse av avtale (GDPR art. 6 nr. 1 bokstav b).",
          },
          {
            strong: "Medlemskapsopplysninger.",
            rest:
              " For DoggMatch+ lagrer vi abonnementsstatus, plan, medlems-ID og gyldighetsdato. Behandlingsgrunnlag: oppfyllelse av avtale.",
          },
          {
            strong: "Betalingsopplysninger.",
            rest:
              " Kortdata håndteres i sin helhet av Stripe. Vi ser eller lagrer aldri kortnummeret ditt. Vi beholder kun abonnementsreferansen vi trenger for å vite om medlemskapet er aktivt.",
          },
          {
            strong: "Meldinger du sender oss.",
            rest:
              " Navn, e-post, emne og melding, slik at vi kan svare deg. Behandlingsgrunnlag: berettiget interesse i å svare deg (GDPR art. 6 nr. 1 bokstav f).",
          },
          {
            strong: "Tekniske data.",
            rest:
              " Vanlige serverlogger som IP-adresse og nettlesertype, lagret kort for sikkerhet, misbruksforebygging og feilsøking. Behandlingsgrunnlag: berettiget interesse i å holde tjenesten trygg.",
          },
        ],
      },
      notDo: {
        title: "Hva vi ikke gjør",
        items: [
          "Vi selger eller leier ikke ut dine personopplysninger til noen.",
          "Vi bruker ikke annonsesporing eller tredjeparts markedsføringsinformasjonskapsler.",
          "Vi bygger ikke atferdsprofiler av deg til markedsføring.",
          "Vi tar ikke automatiske beslutninger med rettslig eller tilsvarende betydelig virkning. Matchresultatet ditt er en gjennomsiktig beregning der du kan se resonnementet, og det har ingen rettslige konsekvenser.",
        ],
      },
      cookies: {
        title: "Informasjonskapsler og lokal lagring",
        p1:
          "Vi bruker kun det som er strengt nødvendig for at siden skal fungere: en innloggingsøkt, ditt lys/mørk-valg, ditt språk, og de lokale dataene beskrevet over. Under ePrivacy-direktivet og den norske ekomloven krever ikke slik strengt nødvendig lagring samtykke, og det er derfor du ikke ser et cookie-banner. Hvis vi noen gang legger til analyse- eller markedsføringsinformasjonskapsler, spør vi deg først.",
      },
      processors: {
        title: "Hvem behandler data på våre vegne",
        p1:
          "Vi bruker et lite antall nøye utvalgte leverandører, alle bundet av en databehandleravtale under GDPR art. 28:",
        items: [
          {
            strong: "Hosting, database og autentisering.",
            rest: " Driver våre servere, lagrer konto- og medlemskapsdata, og håndterer innlogging.",
          },
          {
            strong: "Stripe.",
            rest: " Betalinger og abonnementsfakturering, som selvstendig behandlingsansvarlig for betalingsdata.",
          },
          {
            strong: "Google.",
            rest: " Kun hvis du velger å logge inn med Google, og kun for den innloggingen.",
          },
          {
            strong: "E-postlevering.",
            rest: " Brukes til å sende og motta meldingene du skriver til oss.",
          },
        ],
      },
      transfers: {
        title: "Hvor dine data lagres, og overføringer utenfor EØS",
        p1:
          "Vi lagrer personopplysninger på servere innenfor EU/EØS der vi kan. Noen av leverandørene våre er basert i USA. Der data forlater EØS, bygger overføringen på EU-kommisjonens standard personvernbestemmelser, og der det er relevant EU–USA Data Privacy Framework, sammen med ytterligere tekniske sikringstiltak som kryptering under overføring og i hvile.",
      },
      retention: {
        title: "Hvor lenge vi beholder ting",
        items: [
          "Lokale data på din enhet: til du sletter dem. De er dine, på din maskin.",
          "Konto- og medlemskapsdata: så lenge kontoen din eksisterer, deretter slettet eller anonymisert innen 90 dager etter at du avslutter den.",
          "Kontaktmeldinger: opptil 24 måneder, slik at vi har sammenheng dersom du skriver igjen.",
          "Betalings- og fakturaopplysninger: oppbevares i 5 år, som norsk bokføringslov krever. Behandlingsgrunnlag: rettslig forpliktelse (GDPR art. 6 nr. 1 bokstav c).",
          "Sikkerhetslogger: normalt 90 dager eller mindre.",
        ],
      },
      protect: {
        title: "Hvordan vi beskytter det",
        p1:
          "Data er kryptert under overføring (TLS) og i hvile hos vår hostingleverandør. Databasetilgang er begrenset av rad-nivå-sikkerhetsregler, slik at en konto kun kan nå sine egne data. Tilgang til produksjonssystemer er begrenset til dem som virkelig trenger det. Hvis et brudd noen gang setter dine rettigheter i fare, varsler vi Datatilsynet innen 72 timer og sier fra til deg direkte der loven krever det.",
      },
      rights: {
        title: "Dine rettigheter",
        intro: "Under GDPR kan du be oss om å:",
        items: [
          "Fortelle deg hva vi har om deg, og gi deg en kopi (art. 15).",
          "Rette opp i det som er feil (art. 16).",
          "Slette dine data (art. 17).",
          "Begrense hvordan vi bruker det (art. 18).",
          "Sende det til deg eller en annen leverandør i et portabelt format (art. 20).",
          "Stoppe behandling basert på berettiget interesse (art. 21).",
          "Trekke tilbake samtykke når som helst, der behandlingen bygger på samtykke (art. 7).",
        ],
        p2Before: "Skriv til oss gjennom",
        p2Mid:
          "så svarer vi innen 30 dager, kostnadsfritt. Hvis du ikke er fornøyd med hvordan vi håndterte det, kan du klage til Datatilsynet eller til personvernmyndigheten i ditt eget land.",
      },
      children: {
        title: "Barn",
        p1:
          "DoggMatch er ikke ment for barn. Du må være minst 16 år for å opprette en konto. Hvis du tror et barn har gitt oss personopplysninger, si fra til oss, så fjerner vi det.",
      },
      changes: {
        title: "Endringer i denne erklæringen",
        p1:
          "Hvis vi endrer noe vesentlig her, oppdaterer vi datoen øverst på denne siden, og sier fra til kontoinnehavere per e-post når endringen påvirker dem.",
      },
    },
  },
} as const;

function PrivacyPage() {
  const c = useCopy(copy);
  const s = c.sections;
  return (
    <LegalPage eyebrow={c.eyebrow} title={c.title} intro={c.intro} updated={c.updated}>
      <LegalSection title={s.responsible.title}>
        <p>{s.responsible.p1}</p>
        <p>{s.responsible.p2}</p>
        <p>
          {s.responsible.p3Before}{" "}
          <Link to="/contact" className="text-foreground underline underline-offset-4">
            {c.contactPage}
          </Link>
          {s.responsible.p3After}
        </p>
      </LegalSection>

      <LegalSection title={s.collect.title}>
        <p>{s.collect.p1}</p>
        <LegalList
          items={s.collect.items.map((item, i) => (
            <span key={i}>
              <strong className="text-foreground">{item.strong}</strong>
              {item.rest}
            </span>
          ))}
        />
      </LegalSection>

      <LegalSection title={s.notDo.title}>
        <LegalList items={s.notDo.items} />
      </LegalSection>

      <LegalSection title={s.cookies.title}>
        <p>{s.cookies.p1}</p>
      </LegalSection>

      <LegalSection title={s.processors.title}>
        <p>{s.processors.p1}</p>
        <LegalList
          items={s.processors.items.map((item, i) => (
            <span key={i}>
              <strong className="text-foreground">{item.strong}</strong>
              {item.rest}
            </span>
          ))}
        />
      </LegalSection>

      <LegalSection title={s.transfers.title}>
        <p>{s.transfers.p1}</p>
      </LegalSection>

      <LegalSection title={s.retention.title}>
        <LegalList items={s.retention.items} />
      </LegalSection>

      <LegalSection title={s.protect.title}>
        <p>{s.protect.p1}</p>
      </LegalSection>

      <LegalSection title={s.rights.title}>
        <p>{s.rights.intro}</p>
        <LegalList items={s.rights.items} />
        <p>
          {s.rights.p2Before}{" "}
          <Link to="/contact" className="text-foreground underline underline-offset-4">
            {c.contactPage}
          </Link>{" "}
          {s.rights.p2Mid}
        </p>
      </LegalSection>

      <LegalSection title={s.children.title}>
        <p>{s.children.p1}</p>
      </LegalSection>

      <LegalSection title={s.changes.title}>
        <p>{s.changes.p1}</p>
      </LegalSection>
    </LegalPage>
  );
}
