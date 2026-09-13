import { Link, createFileRoute } from "@tanstack/react-router";
import { LegalList, LegalPage, LegalSection } from "@/components/dogmatch/legal";
import { useCopy } from "@/i18n";
import { seoLinks, abs, localizedHead } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Privacy — how DoggMatch handles your data";
const description =
  "How DoggMatch collects, stores and protects your personal data, your rights under the GDPR, and who we share information with.";

const seoCopy = {
  en: { title, description },
  no: {
    title: "Personvern — slik behandler DoggMatch dataene dine",
    description:
      "Hvordan DoggMatch samler inn, lagrer og beskytter personopplysningene dine, rettighetene dine etter GDPR, og hvem vi deler informasjon med.",
  },
  pl: {
    title: "Prywatność — jak DoggMatch obchodzi się z Twoimi danymi",
    description:
      "Jak DoggMatch zbiera, przechowuje i chroni Twoje dane osobowe, jakie masz prawa według RODO i z kim dzielimy się informacjami.",
  },
  dk: {
    title: "Privatliv — sådan håndterer DoggMatch dine data",
    description:
      "Hvordan DoggMatch indsamler, opbevarer og beskytter dine personoplysninger, dine rettigheder under GDPR, og hvem vi deler information med.",
  },
  se: {
    title: "Integritet — så här hanterar DoggMatch dina uppgifter",
    description:
      "Hur DoggMatch samlar in, lagrar och skyddar dina personuppgifter, dina rättigheter enligt GDPR, och vem vi delar information med.",
  },
  fi: {
    title: "Tietosuoja — näin DoggMatch käsittelee tietojasi",
    description:
      "Miten DoggMatch kerää, tallentaa ja suojaa henkilötietojasi, oikeutesi GDPR:n mukaan, ja kenen kanssa jaamme tietoja.",
  },
  de: {
    title: "Datenschutz — wie DoggMatch mit Ihren Daten umgeht",
    description:
      "Wie DoggMatch Ihre personenbezogenen Daten sammelt, speichert und schützt, Ihre Rechte nach der DSGVO, und mit wem wir Informationen teilen.",
  },
  fr: {
    title: "Confidentialité — comment DoggMatch traite vos données",
    description:
      "Comment DoggMatch collecte, stocke et protège vos données personnelles, vos droits au titre du RGPD, et avec qui nous partageons des informations.",
  },
  nl: {
    title: "Privacy — hoe DoggMatch met uw gegevens omgaat",
    description:
      "Hoe DoggMatch uw persoonsgegevens verzamelt, opslaat en beschermt, uw rechten onder de AVG, en met wie we informatie delen.",
  },
};

export const Route = createFileRoute("/{-$lang}/privacy")({
  head: (ctx) => localizedHead(ctx, "/privacy", seoCopy),
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
  pl: {
    eyebrow: "Prywatność",
    title: "Twoje dane, traktowane z troską",
    intro:
      "Prosimy o jak najmniej danych, jasno mówimy, co z nimi robimy, i możesz w każdej chwili poprosić nas o ich usunięcie. Ta strona wyjaśnia to wszystko zwykłym językiem.",
    updated: "16 sierpnia 2026",
    contactPage: "stronę kontaktową",
    sections: {
      responsible: {
        title: "Kto odpowiada za twoje dane",
        p1:
          "DoggMatch jest budowany i prowadzony przez KM TECH LABS, nr org. 934 044 029, w Kristiansand, w Norwegii. KM TECH LABS jest administratorem danych osobowych przetwarzanych za pośrednictwem tej strony i decyduje, dlaczego i jak te dane są wykorzystywane.",
        p2:
          "Norwegia jest częścią EOG, więc unijne ogólne rozporządzenie o ochronie danych (RODO) obowiązuje nas w pełni, wraz z norweską ustawą o danych osobowych (personopplysningsloven). Naszym organem nadzorczym jest norweski Urząd Ochrony Danych Osobowych (Datatilsynet).",
        p3Before: "Najprostszym sposobem skontaktowania się z nami w sprawie czegokolwiek na tej stronie jest",
        p3After: ".",
      },
      collect: {
        title: "Co zbieramy i dlaczego",
        p1:
          "Większość funkcji DoggMatch działa bez konta i bez zapisywania przez nas czegokolwiek na twój temat. Twoje odpowiedzi z quizu, profile psów, postępy w szkoleniu i notatki o opiece są przechowywane w lokalnej pamięci twojej przeglądarki na twoim urządzeniu — nie na naszych serwerach.",
        items: [
          {
            strong: "Odpowiedzi z quizu i profile psów.",
            rest:
              " Przechowywane lokalnie na twoim urządzeniu, żebyś mógł do nich wrócić. Nigdy ich nie widzimy. Wyczyszczenie danych przeglądarki je usuwa.",
          },
          {
            strong: "Dane konta.",
            rest:
              " Jeśli zakładasz konto, przechowujemy twój adres e-mail i tożsamość logowania. Podstawa prawna: wykonanie umowy (art. 6 ust. 1 lit. b RODO).",
          },
          {
            strong: "Dane członkostwa.",
            rest:
              " Dla DoggMatch+ przechowujemy status subskrypcji, plan, ID członka i datę ważności. Podstawa prawna: wykonanie umowy.",
          },
          {
            strong: "Dane płatnicze.",
            rest:
              " Dane karty są obsługiwane w całości przez Stripe. Nigdy nie widzimy ani nie przechowujemy numeru twojej karty. Zachowujemy jedynie odniesienie do subskrypcji potrzebne do wiedzy, czy członkostwo jest aktywne.",
          },
          {
            strong: "Wiadomości, które do nas wysyłasz.",
            rest:
              " Twoje imię, e-mail, temat i wiadomość, abyśmy mogli odpowiedzieć. Podstawa prawna: prawnie uzasadniony interes w udzieleniu odpowiedzi (art. 6 ust. 1 lit. f RODO).",
          },
          {
            strong: "Dane techniczne.",
            rest:
              " Standardowe logi serwera, takie jak adres IP i typ przeglądarki, przechowywane krótko dla bezpieczeństwa, zapobiegania nadużyciom i rozwiązywania problemów. Podstawa prawna: prawnie uzasadniony interes w utrzymaniu bezpieczeństwa usługi.",
          },
        ],
      },
      notDo: {
        title: "Czego nie robimy",
        items: [
          "Nie sprzedajemy ani nie wynajmujemy nikomu twoich danych osobowych.",
          "Nie używamy trackerów reklamowych ani reklamowych plików cookie firm trzecich.",
          "Nie budujemy profili behawioralnych na potrzeby marketingu.",
          "Nie podejmujemy zautomatyzowanych decyzji o skutkach prawnych ani podobnie istotnych. Wynik dopasowania to przejrzyste obliczenie, którego uzasadnienie możesz zobaczyć, i nie wywołuje ono żadnych skutków prawnych.",
        ],
      },
      cookies: {
        title: "Pliki cookie i lokalna pamięć",
        p1:
          "Używamy wyłącznie tego, co jest absolutnie niezbędne do działania strony: sesji logowania, twojego wyboru jasnego/ciemnego motywu, twojego języka oraz opisanych powyżej danych lokalnych. Zgodnie z dyrektywą ePrivacy i norweską ustawą ekomlov, tego rodzaju niezbędne przechowywanie danych nie wymaga zgody, dlatego nie widzisz baneru cookie. Jeśli kiedykolwiek dodamy pliki cookie analityczne lub marketingowe, najpierw cię o to zapytamy.",
      },
      processors: {
        title: "Kto przetwarza dane w naszym imieniu",
        p1:
          "Korzystamy z niewielkiej liczby starannie wybranych dostawców, z których każdy jest związany umową powierzenia przetwarzania danych na podstawie art. 28 RODO:",
        items: [
          {
            strong: "Hosting, baza danych i uwierzytelnianie.",
            rest: " Obsługuje nasze serwery, przechowuje dane konta i członkostwa oraz obsługuje logowanie.",
          },
          {
            strong: "Stripe.",
            rest: " Płatności i rozliczenia subskrypcji, jako niezależny administrator danych płatniczych.",
          },
          {
            strong: "Google.",
            rest: " Tylko jeśli wybierzesz logowanie przez Google, i tylko na potrzeby tego logowania.",
          },
          {
            strong: "Dostarczanie e-maili.",
            rest: " Używane do wysyłania i odbierania wiadomości, które do nas piszesz.",
          },
        ],
      },
      transfers: {
        title: "Gdzie przechowywane są twoje dane i przekazywanie ich poza EOG",
        p1:
          "Przechowujemy dane osobowe na serwerach w UE/EOG, gdziekolwiek to możliwe. Niektórzy z naszych dostawców mają siedzibę w Stanach Zjednoczonych. Tam, gdzie dane opuszczają EOG, przekazanie opiera się na standardowych klauzulach umownych Komisji Europejskiej, a tam, gdzie to ma zastosowanie, na ramach EU–US Data Privacy Framework, wraz z dodatkowymi zabezpieczeniami technicznymi, takimi jak szyfrowanie podczas przesyłania i przechowywania.",
      },
      retention: {
        title: "Jak długo przechowujemy dane",
        items: [
          "Dane lokalne na twoim urządzeniu: do momentu ich wyczyszczenia. Są twoje, na twoim urządzeniu.",
          "Dane konta i członkostwa: przez cały czas istnienia konta, a następnie usuwane lub anonimizowane w ciągu 90 dni od jego zamknięcia.",
          "Wiadomości kontaktowe: do 24 miesięcy, abyśmy mieli kontekst, jeśli napiszesz ponownie.",
          "Zapisy płatności i faktur: przechowywane przez 5 lat, zgodnie z wymogami norweskiej ustawy o rachunkowości (bokføringsloven). Podstawa prawna: obowiązek prawny (art. 6 ust. 1 lit. c RODO).",
          "Logi bezpieczeństwa: zwykle 90 dni lub mniej.",
        ],
      },
      protect: {
        title: "Jak to chronimy",
        p1:
          "Dane są szyfrowane podczas przesyłania (TLS) i w spoczynku u naszego dostawcy hostingu. Dostęp do bazy danych jest ograniczony regułami bezpieczeństwa na poziomie wiersza, więc konto może dotrzeć wyłącznie do własnych danych. Dostęp do systemów produkcyjnych mają wyłącznie osoby, które rzeczywiście go potrzebują. Jeśli naruszenie kiedykolwiek narazi twoje prawa na ryzyko, powiadomimy Datatilsynet w ciągu 72 godzin i poinformujemy cię bezpośrednio tam, gdzie wymaga tego prawo.",
      },
      rights: {
        title: "Twoje prawa",
        intro: "Zgodnie z RODO możesz poprosić nas o:",
        items: [
          "Poinformowanie cię, jakie dane o tobie posiadamy, i przekazanie ich kopii (art. 15).",
          "Poprawienie tego, co jest błędne (art. 16).",
          "Usunięcie twoich danych (art. 17).",
          "Ograniczenie sposobu ich wykorzystywania (art. 18).",
          "Przesłanie ich do ciebie lub innego dostawcy w formacie umożliwiającym przenoszenie (art. 20).",
          "Zaprzestanie przetwarzania opartego na prawnie uzasadnionym interesie (art. 21).",
          "Wycofanie zgody w dowolnym momencie, tam gdzie przetwarzanie opiera się na zgodzie (art. 7).",
        ],
        p2Before: "Napisz do nas przez",
        p2Mid:
          "a odpowiemy w ciągu 30 dni, bezpłatnie. Jeśli nie jesteś zadowolony z naszego sposobu rozpatrzenia sprawy, możesz złożyć skargę do Datatilsynet lub do organu ochrony danych w twoim kraju.",
      },
      children: {
        title: "Dzieci",
        p1:
          "DoggMatch nie jest przeznaczony dla dzieci. Musisz mieć co najmniej 16 lat, aby założyć konto. Jeśli uważasz, że dziecko przekazało nam dane osobowe, poinformuj nas, a je usuniemy.",
      },
      changes: {
        title: "Zmiany w niniejszej informacji",
        p1:
          "Jeśli zmienimy tu coś istotnego, zaktualizujemy datę na górze tej strony i poinformujemy posiadaczy kont e-mailem, gdy zmiana ich dotyczy.",
      },
    },
  },
  dk: {
    eyebrow: "Privatliv",
    title: "Dine data, behandlet med omhu",
    intro:
      "Vi beder om så lidt som muligt, vi fortæller dig ligeud, hvad vi bruger det til, og du kan bede os om at slette det når som helst. Denne side forklarer alt det i almindeligt sprog.",
    updated: "16. august 2026",
    contactPage: "kontaktsiden",
    sections: {
      responsible: {
        title: "Hvem er ansvarlig for dine data",
        p1:
          "DoggMatch er bygget og drevet af KM TECH LABS, CVR-nr. 934 044 029, i Kristiansand, Norge. KM TECH LABS er dataansvarlig for personoplysninger, der behandles gennem denne hjemmeside, og bestemmer hvorfor og hvordan disse data bruges.",
        p2:
          "Norge er en del af EØS, så EU's generelle forordning om databeskyttelse (GDPR) gælder fuldt ud for os, sammen med den norske persondatalov (personopplysningsloven). Vores tilsynsmyndighed er det norske Datatilsyn (Datatilsynet).",
        p3Before: "Den nemmeste måde at kontakte os på om noget som helst på denne side er gennem vores",
        p3After: ".",
      },
      collect: {
        title: "Hvad vi indsamler, og hvorfor",
        p1:
          "Det meste af DoggMatch fungerer uden en konto og uden at vi gemmer noget om dig. Dine quizsvar, dine hundeprofiler, dine træningsfremskridt og dine plejenoter opbevares i din egen browsers lokale lager på din enhed — ikke på vores servere.",
        items: [
          {
            strong: "Quizsvar og hundeprofiler.",
            rest:
              " Gemmes lokalt på din enhed, så du kan vende tilbage til dem. Vi ser dem aldrig. Rydder du browserdata, forsvinder de.",
          },
          {
            strong: "Kontooplysninger.",
            rest:
              " Opretter du en konto, gemmer vi din e-mailadresse og login-identitet. Retsgrundlag: opfyldelse af en kontrakt (GDPR art. 6, stk. 1, litra b).",
          },
          {
            strong: "Medlemskabsoplysninger.",
            rest:
              " For DoggMatch+ gemmer vi din abonnementsstatus, plan, medlems-id og gyldighedsdato. Retsgrundlag: opfyldelse af en kontrakt.",
          },
          {
            strong: "Betalingsoplysninger.",
            rest:
              " Kortdata håndteres udelukkende af Stripe. Vi ser eller gemmer aldrig dit kortnummer. Vi beholder kun den abonnementsreference, vi har brug for, for at vide om dit medlemskab er aktivt.",
          },
          {
            strong: "Beskeder du sender os.",
            rest:
              " Dit navn, e-mail, emne og besked, så vi kan svare dig. Retsgrundlag: legitim interesse i at svare dig (GDPR art. 6, stk. 1, litra f).",
          },
          {
            strong: "Tekniske data.",
            rest:
              " Standard serverlogfiler som IP-adresse og browsertype, gemt kortvarigt af hensyn til sikkerhed, misbrugsforebyggelse og fejlfinding. Retsgrundlag: legitim interesse i at holde tjenesten sikker.",
          },
        ],
      },
      notDo: {
        title: "Hvad vi ikke gør",
        items: [
          "Vi sælger eller udlejer ikke dine personoplysninger til nogen.",
          "Vi bruger ikke annoncesporing eller tredjeparts marketingcookies.",
          "Vi opbygger ikke adfærdsprofiler af dig til markedsføring.",
          "Vi træffer ikke automatiske afgørelser med retlig eller tilsvarende betydelig virkning. Dit matchresultat er en gennemsigtig beregning, hvor du kan se begrundelsen, og det har ingen retlige konsekvenser.",
        ],
      },
      cookies: {
        title: "Cookies og lokal lagring",
        p1:
          "Vi bruger kun det, der er strengt nødvendigt for at få siden til at fungere: en login-session, din lys/mørk-præference, dit sprog, og de lokale data beskrevet ovenfor. Under ePrivacy-direktivet og den norske ekomlov kræver denne slags strengt nødvendige lagring ikke samtykke, hvilket er derfor du ikke ser et cookie-banner. Hvis vi nogensinde tilføjer analyse- eller marketingcookies, spørger vi dig først.",
      },
      processors: {
        title: "Hvem behandler data på vores vegne",
        p1:
          "Vi bruger et lille antal omhyggeligt udvalgte udbydere, hver bundet af en databehandleraftale under GDPR art. 28:",
        items: [
          {
            strong: "Hosting, database og autentificering.",
            rest: " Driver vores servere, gemmer konto- og medlemskabsdata, og håndterer login.",
          },
          {
            strong: "Stripe.",
            rest: " Betalinger og abonnementsfakturering, som selvstændig dataansvarlig for betalingsdata.",
          },
          {
            strong: "Google.",
            rest: " Kun hvis du vælger at logge ind med Google, og kun til det login.",
          },
          {
            strong: "E-mail-levering.",
            rest: " Bruges til at sende og modtage de beskeder, du skriver til os.",
          },
        ],
      },
      transfers: {
        title: "Hvor dine data opbevares, og overførsler uden for EØS",
        p1:
          "Vi opbevarer personoplysninger på servere inden for EU/EØS, hvor vi kan. Nogle af vores udbydere er baseret i USA. Hvor data forlader EØS, bygger overførslen på EU-Kommissionens standardkontraktbestemmelser, og hvor det er relevant, EU-USA Data Privacy Framework, sammen med yderligere tekniske sikkerhedsforanstaltninger som kryptering under overførsel og i hvile.",
      },
      retention: {
        title: "Hvor længe vi opbevarer ting",
        items: [
          "Lokale data på din enhed: indtil du rydder dem. De er dine, på din maskine.",
          "Konto- og medlemskabsdata: så længe din konto findes, derefter slettet eller anonymiseret inden for 90 dage efter du lukker den.",
          "Kontaktbeskeder: op til 24 måneder, så vi har kontekst, hvis du skriver igen.",
          "Betalings- og fakturaoplysninger: opbevares i 5 år, som norsk bogføringslov (bokføringsloven) kræver. Retsgrundlag: retlig forpligtelse (GDPR art. 6, stk. 1, litra c).",
          "Sikkerhedslogfiler: normalt 90 dage eller mindre.",
        ],
      },
      protect: {
        title: "Hvordan vi beskytter det",
        p1:
          "Data krypteres under overførsel (TLS) og i hvile hos vores hostingudbyder. Databaseadgang er begrænset af rækkeniveau-sikkerhedsregler, så en konto kun nogensinde kan nå sine egne data. Adgang til produktionssystemer er begrænset til dem, der reelt har brug for det. Hvis et brud nogensinde bringer dine rettigheder i fare, underretter vi Datatilsynet inden for 72 timer og fortæller dig det direkte, hvor loven kræver det.",
      },
      rights: {
        title: "Dine rettigheder",
        intro: "Under GDPR kan du bede os om at:",
        items: [
          "Fortælle dig, hvad vi har om dig, og give dig en kopi (art. 15).",
          "Rette alt, der er forkert (art. 16).",
          "Slette dine data (art. 17).",
          "Begrænse, hvordan vi bruger det (art. 18).",
          "Sende det til dig eller en anden udbyder i et bærbart format (art. 20).",
          "Stoppe behandling baseret på legitim interesse (art. 21).",
          "Trække samtykke tilbage når som helst, hvor behandlingen er baseret på samtykke (art. 7).",
        ],
        p2Before: "Skriv til os gennem",
        p2Mid:
          "og vi svarer inden for 30 dage, gratis. Er du ikke tilfreds med, hvordan vi håndterede det, kan du klage til Datatilsynet eller til databeskyttelsesmyndigheden i dit eget land.",
      },
      children: {
        title: "Børn",
        p1:
          "DoggMatch er ikke beregnet til børn. Du skal være mindst 16 år for at oprette en konto. Hvis du tror, et barn har givet os personoplysninger, så sig til, og vi fjerner det.",
      },
      changes: {
        title: "Ændringer af denne meddelelse",
        p1:
          "Hvis vi ændrer noget væsentligt her, opdaterer vi datoen øverst på denne side og fortæller kontoindehavere det via e-mail, når ændringen påvirker dem.",
      },
    },
  },
  se: {
    eyebrow: "Integritet",
    title: "Dina uppgifter, hanterade med omsorg",
    intro:
      "Vi ber om så lite som möjligt, vi berättar rakt på sak vad vi använder det till, och du kan be oss radera det när som helst. Den här sidan förklarar allt det på vanlig svenska.",
    updated: "16 augusti 2026",
    contactPage: "kontaktsidan",
    sections: {
      responsible: {
        title: "Vem som ansvarar för dina uppgifter",
        p1:
          "DoggMatch byggs och drivs av KM TECH LABS, org.nr 934 044 029, i Kristiansand, Norge. KM TECH LABS är personuppgiftsansvarig för personuppgifter som behandlas genom denna webbplats, och bestämmer varför och hur dessa uppgifter används.",
        p2:
          "Norge är en del av EES, så EU:s allmänna dataskyddsförordning (GDPR) gäller fullt ut för oss, tillsammans med den norska personuppgiftslagen (personopplysningsloven). Vår tillsynsmyndighet är den norska Datainspektionen (Datatilsynet).",
        p3Before: "Det enklaste sättet att nå oss om något på den här sidan är genom vår",
        p3After: ".",
      },
      collect: {
        title: "Vad vi samlar in, och varför",
        p1:
          "Det mesta av DoggMatch fungerar utan konto och utan att vi lagrar något om dig. Dina quizsvar, dina hundprofiler, dina träningsframsteg och dina omsorgsanteckningar sparas i din egen webbläsares lokala lagring på din enhet — inte på våra servrar.",
        items: [
          {
            strong: "Quizsvar och hundprofiler.",
            rest:
              " Sparas lokalt på din enhet så att du kan komma tillbaka till dem. Vi ser dem aldrig. Rensar du webbläsardata försvinner de.",
          },
          {
            strong: "Kontouppgifter.",
            rest:
              " Om du skapar ett konto sparar vi din e-postadress och inloggningsidentitet. Rättslig grund: fullgörande av avtal (GDPR art. 6.1 b).",
          },
          {
            strong: "Medlemskapsuppgifter.",
            rest:
              " För DoggMatch+ sparar vi din prenumerationsstatus, plan, medlems-ID och giltighetsdatum. Rättslig grund: fullgörande av avtal.",
          },
          {
            strong: "Betalningsuppgifter.",
            rest:
              " Kortdata hanteras helt av Stripe. Vi ser eller sparar aldrig ditt kortnummer. Vi behåller endast den prenumerationsreferens vi behöver för att veta om ditt medlemskap är aktivt.",
          },
          {
            strong: "Meddelanden du skickar till oss.",
            rest:
              " Ditt namn, e-post, ämne och meddelande, så att vi kan svara dig. Rättslig grund: berättigat intresse av att svara dig (GDPR art. 6.1 f).",
          },
          {
            strong: "Teknisk data.",
            rest:
              " Standardserverloggar som IP-adress och webbläsartyp, sparade kortvarigt för säkerhet, missbruksförebyggande och felsökning. Rättslig grund: berättigat intresse av att hålla tjänsten säker.",
          },
        ],
      },
      notDo: {
        title: "Vad vi inte gör",
        items: [
          "Vi säljer eller hyr inte ut dina personuppgifter till någon.",
          "Vi använder inte annonsspårning eller tredjepartscookies för marknadsföring.",
          "Vi bygger inte beteendeprofiler av dig för marknadsföring.",
          "Vi fattar inte automatiserade beslut med rättslig eller liknande betydande verkan. Ditt matchresultat är en transparent beräkning där du kan se resonemanget, och det har inga rättsliga konsekvenser.",
        ],
      },
      cookies: {
        title: "Cookies och lokal lagring",
        p1:
          "Vi använder bara det som är absolut nödvändigt för att sidan ska fungera: en inloggningssession, ditt ljus/mörk-val, ditt språk, och de lokala data som beskrivs ovan. Enligt ePrivacy-direktivet och den norska ekomlagen kräver den här sortens strikt nödvändiga lagring inget samtycke, vilket är varför du inte ser en cookiebanner. Om vi någonsin lägger till analys- eller marknadsföringscookies frågar vi dig först.",
      },
      processors: {
        title: "Vem som behandlar data å våra vägnar",
        p1:
          "Vi använder ett litet antal noggrant utvalda leverantörer, var och en bunden av ett personuppgiftsbiträdesavtal enligt GDPR art. 28:",
        items: [
          {
            strong: "Hosting, databas och autentisering.",
            rest: " Driver våra servrar, lagrar konto- och medlemskapsuppgifter, och hanterar inloggning.",
          },
          {
            strong: "Stripe.",
            rest: " Betalningar och prenumerationsfakturering, som självständigt personuppgiftsansvarig för betalningsdata.",
          },
          {
            strong: "Google.",
            rest: " Endast om du väljer att logga in med Google, och endast för den inloggningen.",
          },
          {
            strong: "E-postleverans.",
            rest: " Används för att skicka och ta emot meddelandena du skriver till oss.",
          },
        ],
      },
      transfers: {
        title: "Var dina uppgifter lagras, och överföringar utanför EES",
        p1:
          "Vi lagrar personuppgifter på servrar inom EU/EES där vi kan. Några av våra leverantörer finns i USA. Där data lämnar EES bygger överföringen på EU-kommissionens standardavtalsklausuler, och där det är tillämpligt EU-USA Data Privacy Framework, tillsammans med ytterligare tekniska skyddsåtgärder som kryptering under överföring och i vila.",
      },
      retention: {
        title: "Hur länge vi behåller saker",
        items: [
          "Lokal data på din enhet: tills du rensar den. Den är din, på din maskin.",
          "Konto- och medlemskapsdata: så länge ditt konto finns, sedan raderad eller anonymiserad inom 90 dagar efter att du stänger det.",
          "Kontaktmeddelanden: upp till 24 månader, så vi har sammanhang om du skriver igen.",
          "Betalnings- och fakturaposter: sparas i 5 år, enligt norsk bokföringslag (bokføringsloven). Rättslig grund: rättslig förpliktelse (GDPR art. 6.1 c).",
          "Säkerhetsloggar: normalt 90 dagar eller mindre.",
        ],
      },
      protect: {
        title: "Hur vi skyddar det",
        p1:
          "Data krypteras under överföring (TLS) och i vila hos vår hostingleverantör. Databasåtkomst begränsas av radnivåsäkerhetsregler, så ett konto kan bara nå sina egna uppgifter. Åtkomst till produktionssystem är begränsad till dem som verkligen behöver det. Om ett intrång någonsin äventyrar dina rättigheter meddelar vi Datatilsynet inom 72 timmar och berättar det direkt för dig där lagen kräver det.",
      },
      rights: {
        title: "Dina rättigheter",
        intro: "Enligt GDPR kan du be oss att:",
        items: [
          "Berätta vad vi har om dig, och ge dig en kopia (art. 15).",
          "Rätta det som är fel (art. 16).",
          "Radera dina uppgifter (art. 17).",
          "Begränsa hur vi använder det (art. 18).",
          "Skicka det till dig eller en annan leverantör i ett portabelt format (art. 20).",
          "Sluta behandla baserat på berättigat intresse (art. 21).",
          "Återkalla samtycke när som helst, där behandlingen bygger på samtycke (art. 7).",
        ],
        p2Before: "Skriv till oss genom",
        p2Mid:
          "så svarar vi inom 30 dagar, kostnadsfritt. Om du inte är nöjd med hur vi hanterade det kan du klaga till Datatilsynet eller till dataskyddsmyndigheten i ditt eget land.",
      },
      children: {
        title: "Barn",
        p1:
          "DoggMatch är inte avsett för barn. Du måste vara minst 16 år för att skapa ett konto. Om du tror att ett barn har gett oss personuppgifter, säg till så tar vi bort det.",
      },
      changes: {
        title: "Ändringar i detta meddelande",
        p1:
          "Om vi ändrar något väsentligt här uppdaterar vi datumet högst upp på den här sidan, och meddelar kontoinnehavare via e-post när ändringen påverkar dem.",
      },
    },
  },
  fi: {
    eyebrow: "Tietosuoja",
    title: "Tietosi, käsiteltynä huolella",
    intro:
      "Pyydämme mahdollisimman vähän tietoja, kerromme suoraan, mihin niitä käytämme, ja voit pyytää meitä poistamaan ne milloin tahansa. Tämä sivu selittää kaiken sen tavallisella kielellä.",
    updated: "16. elokuuta 2026",
    contactPage: "yhteydenottosivun",
    sections: {
      responsible: {
        title: "Kuka vastaa tiedoistasi",
        p1:
          "DoggMatchin rakentaa ja sitä ylläpitää KM TECH LABS, y-tunnus 934 044 029, Kristiansandissa, Norjassa. KM TECH LABS on tämän verkkosivuston kautta käsiteltävien henkilötietojen rekisterinpitäjä ja päättää, miksi ja miten näitä tietoja käytetään.",
        p2:
          "Norja kuuluu ETA-alueeseen, joten EU:n yleinen tietosuoja-asetus (GDPR) koskee meitä täysimääräisesti, yhdessä Norjan henkilötietolain (personopplysningsloven) kanssa. Valvova viranomaisemme on Norjan tietosuojaviranomainen (Datatilsynet).",
        p3Before: "Helpoin tapa ottaa meihin yhteyttä mistä tahansa tällä sivulla on",
        p3After: ".",
      },
      collect: {
        title: "Mitä keräämme ja miksi",
        p1:
          "Suurin osa DoggMatchista toimii ilman tiliä ja ilman että tallennamme mitään sinusta. Kyselyvastauksesi, koiraprofiilisi, koulutuksen edistymisesi ja hoitomuistiinpanosi säilyvät oman selaimesi paikallisessa tallennustilassa laitteellasi — ei palvelimillamme.",
        items: [
          {
            strong: "Kyselyvastaukset ja koiraprofiilit.",
            rest:
              " Tallennetaan paikallisesti laitteellesi, jotta voit palata niihin. Emme koskaan näe niitä. Selaimen tietojen tyhjentäminen poistaa ne.",
          },
          {
            strong: "Tilitiedot.",
            rest:
              " Jos luot tilin, tallennamme sähköpostiosoitteesi ja kirjautumistunnisteesi. Oikeusperuste: sopimuksen täyttäminen (GDPR 6 art. 1 kohta b alakohta).",
          },
          {
            strong: "Jäsenyystiedot.",
            rest:
              " DoggMatch+:aa varten tallennamme tilauksesi tilan, suunnitelman, jäsentunnuksen ja voimassaolopäivän. Oikeusperuste: sopimuksen täyttäminen.",
          },
          {
            strong: "Maksutiedot.",
            rest:
              " Korttitiedot käsittelee kokonaan Stripe. Emme koskaan näe tai tallenna korttinumeroasi. Säilytämme vain tilausviitteen, jonka tarvitsemme tietääksemme, onko jäsenyytesi aktiivinen.",
          },
          {
            strong: "Meille lähettämäsi viestit.",
            rest:
              " Nimesi, sähköpostisi, aiheen ja viestin, jotta voimme vastata sinulle. Oikeusperuste: oikeutettu etu vastata sinulle (GDPR 6 art. 1 kohta f alakohta).",
          },
          {
            strong: "Tekniset tiedot.",
            rest:
              " Vakiomuotoiset palvelinlokit, kuten IP-osoite ja selaintyyppi, säilytettynä lyhyesti turvallisuutta, väärinkäytösten estämistä ja vianmääritystä varten. Oikeusperuste: oikeutettu etu pitää palvelu turvallisena.",
          },
        ],
      },
      notDo: {
        title: "Mitä emme tee",
        items: [
          "Emme myy tai vuokraa henkilötietojasi kenellekään.",
          "Emme käytä mainosseurantaa tai kolmansien osapuolten markkinointievästeitä.",
          "Emme rakenna käyttäytymisprofiileja sinusta markkinointia varten.",
          "Emme tee automatisoituja päätöksiä, joilla on oikeudellisia tai vastaavia merkittäviä vaikutuksia. Täsmäystuloksesi on läpinäkyvä laskelma, jonka perustelut näet, eikä sillä ole oikeudellisia seurauksia.",
        ],
      },
      cookies: {
        title: "Evästeet ja paikallinen tallennus",
        p1:
          "Käytämme vain sitä, mikä on ehdottoman välttämätöntä sivuston toiminnalle: kirjautumisistuntoa, vaalea/tumma-valintaasi, kieltäsi, ja edellä kuvattuja paikallisia tietoja. ePrivacy-direktiivin ja Norjan sähköisen viestinnän lain (ekomlov) mukaan tällainen ehdottoman välttämätön tallennus ei vaadi suostumusta, minkä vuoksi et näe evästebanneria. Jos joskus lisäämme analytiikka- tai markkinointievästeitä, kysymme siitä ensin.",
      },
      processors: {
        title: "Kuka käsittelee tietoja puolestamme",
        p1:
          "Käytämme pientä joukkoa huolellisesti valittuja palveluntarjoajia, joista jokainen on sidottu tietojenkäsittelysopimukseen GDPR:n 28 artiklan mukaisesti:",
        items: [
          {
            strong: "Hosting, tietokanta ja todennus.",
            rest: " Pyörittää palvelimiamme, tallentaa tili- ja jäsenyystietoja ja hoitaa kirjautumisen.",
          },
          {
            strong: "Stripe.",
            rest: " Maksut ja tilauslaskutus, itsenäisenä rekisterinpitäjänä maksutiedoille.",
          },
          {
            strong: "Google.",
            rest: " Vain jos valitset kirjautua Googlella, ja vain kyseistä kirjautumista varten.",
          },
          {
            strong: "Sähköpostin toimitus.",
            rest: " Käytetään lähettämään ja vastaanottamaan meille kirjoittamiasi viestejä.",
          },
        ],
      },
      transfers: {
        title: "Missä tietosi säilytetään, ja siirrot ETA-alueen ulkopuolelle",
        p1:
          "Säilytämme henkilötietoja EU:n/ETA-alueen sisällä sijaitsevilla palvelimilla aina kun mahdollista. Osa palveluntarjoajistamme sijaitsee Yhdysvalloissa. Kun tietoja siirretään ETA-alueen ulkopuolelle, siirto perustuu Euroopan komission vakiosopimuslausekkeisiin ja soveltuvin osin EU:n ja Yhdysvaltojen tietosuojakehykseen, yhdessä lisäteknisten suojatoimien, kuten siirron ja tallennuksen aikaisen salauksen, kanssa.",
      },
      retention: {
        title: "Kuinka kauan säilytämme tietoja",
        items: [
          "Paikalliset tiedot laitteellasi: kunnes tyhjennät ne. Ne ovat sinun, omalla laitteellasi.",
          "Tili- ja jäsenyystiedot: niin kauan kuin tilisi on olemassa, sitten poistettuna tai anonymisoituna 90 päivän kuluessa tilin sulkemisesta.",
          "Yhteydenottoviestit: enintään 24 kuukautta, jotta meillä on asiayhteys, jos kirjoitat uudelleen.",
          "Maksu- ja laskutustiedot: säilytetään 5 vuotta Norjan kirjanpitolain (bokføringsloven) vaatimalla tavalla. Oikeusperuste: lakisääteinen velvoite (GDPR 6 art. 1 kohta c alakohta).",
          "Turvallisuuslokit: yleensä 90 päivää tai vähemmän.",
        ],
      },
      protect: {
        title: "Miten suojaamme sitä",
        p1:
          "Tiedot salataan siirron aikana (TLS) ja levossa hosting-palveluntarjoajamme toimesta. Tietokantaan pääsyä rajoittavat rivitason suojaussäännöt, joten tili voi tavoittaa vain omat tietonsa. Pääsy tuotantojärjestelmiin on rajattu niille, jotka aidosti tarvitsevat sitä. Jos tietoturvaloukkaus koskaan vaarantaa oikeutesi, ilmoitamme siitä Datatilsynetille 72 tunnin kuluessa ja kerromme siitä sinulle suoraan, jos laki sitä edellyttää.",
      },
      rights: {
        title: "Oikeutesi",
        intro: "GDPR:n mukaan voit pyytää meitä:",
        items: [
          "Kertomaan, mitä tietoja meillä on sinusta, ja antamaan sinulle niistä kopion (15 art.).",
          "Korjaamaan kaiken, mikä on väärin (16 art.).",
          "Poistamaan tietosi (17 art.).",
          "Rajoittamaan, miten käytämme niitä (18 art.).",
          "Lähettämään ne sinulle tai toiselle palveluntarjoajalle siirrettävässä muodossa (20 art.).",
          "Lopettamaan oikeutettuun etuun perustuvan käsittelyn (21 art.).",
          "Peruuttamaan suostumuksen milloin tahansa, kun käsittely perustuu suostumukseen (7 art.).",
        ],
        p2Before: "Kirjoita meille",
        p2Mid:
          "kautta, niin vastaamme 30 päivän kuluessa, veloituksetta. Jos et ole tyytyväinen siihen, miten käsittelimme asian, voit valittaa Datatilsynetille tai oman maasi tietosuojaviranomaiselle.",
      },
      children: {
        title: "Lapset",
        p1:
          "DoggMatch ei ole tarkoitettu lapsille. Sinun on oltava vähintään 16-vuotias luodaksesi tilin. Jos uskot lapsen antaneen meille henkilötietoja, kerro meille, niin poistamme ne.",
      },
      changes: {
        title: "Muutokset tähän ilmoitukseen",
        p1:
          "Jos muutamme täällä jotain merkittävää, päivitämme tämän sivun yläreunassa olevan päivämäärän ja kerromme siitä tilinhaltijoille sähköpostitse, kun muutos koskee heitä.",
      },
    },
  },
  de: {
    eyebrow: "Datenschutz",
    title: "Ihre Daten, mit Sorgfalt behandelt",
    intro:
      "Wir fragen nach so wenig wie möglich, wir erklären Ihnen offen, wofür wir es verwenden, und Sie können uns jederzeit bitten, es zu löschen. Diese Seite erklärt das alles in normaler Sprache.",
    updated: "16. August 2026",
    contactPage: "Kontaktseite",
    sections: {
      responsible: {
        title: "Wer für Ihre Daten verantwortlich ist",
        p1:
          "DoggMatch wird von KM TECH LABS betrieben, Org.-Nr. 934 044 029, in Kristiansand, Norwegen. KM TECH LABS ist der Verantwortliche für personenbezogene Daten, die über diese Website verarbeitet werden, und entscheidet, warum und wie diese Daten verwendet werden.",
        p2:
          "Norwegen gehört zum EWR, daher gilt die Datenschutz-Grundverordnung (DSGVO) der EU vollumfänglich für uns, zusammen mit dem norwegischen Datenschutzgesetz (personopplysningsloven). Unsere Aufsichtsbehörde ist die norwegische Datenschutzbehörde (Datatilsynet).",
        p3Before: "Der einfachste Weg, uns wegen irgendetwas auf dieser Seite zu erreichen, ist über unsere",
        p3After: ".",
      },
      collect: {
        title: "Was wir sammeln, und warum",
        p1:
          "Der größte Teil von DoggMatch funktioniert ohne Konto und ohne dass wir irgendetwas über Sie speichern. Ihre Quiz-Antworten, Ihre Hundeprofile, Ihr Trainingsfortschritt und Ihre Pflegenotizen werden im lokalen Speicher Ihres eigenen Browsers auf Ihrem Gerät aufbewahrt — nicht auf unseren Servern.",
        items: [
          {
            strong: "Quiz-Antworten und Hundeprofile.",
            rest:
              " Lokal auf Ihrem Gerät gespeichert, damit Sie später darauf zurückgreifen können. Wir sehen sie nie. Löschen Sie Ihre Browserdaten, verschwinden sie.",
          },
          {
            strong: "Kontodaten.",
            rest:
              " Wenn Sie ein Konto erstellen, speichern wir Ihre E-Mail-Adresse und Ihre Anmeldeidentität. Rechtsgrundlage: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).",
          },
          {
            strong: "Mitgliedschaftsdaten.",
            rest:
              " Für DoggMatch+ speichern wir Ihren Abonnementstatus, Ihren Plan, Ihre Mitglieds-ID und das Gültigkeitsdatum. Rechtsgrundlage: Vertragserfüllung.",
          },
          {
            strong: "Zahlungsdaten.",
            rest:
              " Kartendaten werden vollständig von Stripe verarbeitet. Wir sehen oder speichern Ihre Kartennummer nie. Wir behalten nur die Abonnement-Referenz, die wir brauchen, um zu wissen, ob Ihre Mitgliedschaft aktiv ist.",
          },
          {
            strong: "Nachrichten, die Sie uns senden.",
            rest:
              " Ihr Name, Ihre E-Mail, Betreff und Nachricht, damit wir antworten können. Rechtsgrundlage: berechtigtes Interesse, Ihnen zu antworten (Art. 6 Abs. 1 lit. f DSGVO).",
          },
          {
            strong: "Technische Daten.",
            rest:
              " Übliche Serverprotokolle wie IP-Adresse und Browsertyp, kurzzeitig gespeichert für Sicherheit, Missbrauchsprävention und Fehlerbehebung. Rechtsgrundlage: berechtigtes Interesse daran, den Dienst sicher zu halten.",
          },
        ],
      },
      notDo: {
        title: "Was wir nicht tun",
        items: [
          "Wir verkaufen oder vermieten Ihre personenbezogenen Daten an niemanden.",
          "Wir verwenden keine Werbetracker oder Werbe-Cookies von Drittanbietern.",
          "Wir erstellen keine Verhaltensprofile von Ihnen für Marketingzwecke.",
          "Wir treffen keine automatisierten Entscheidungen mit rechtlicher oder ähnlich bedeutender Wirkung. Ihr Match-Ergebnis ist eine transparente Berechnung, deren Begründung Sie einsehen können, und sie hat keine rechtlichen Folgen.",
        ],
      },
      cookies: {
        title: "Cookies und lokaler Speicher",
        p1:
          "Wir verwenden nur das, was für das Funktionieren der Seite unbedingt notwendig ist: eine Anmeldesitzung, Ihre Hell/Dunkel-Einstellung, Ihre Sprache und die oben beschriebenen lokalen Daten. Nach der ePrivacy-Richtlinie und dem norwegischen Telekommunikationsgesetz (ekomlov) erfordert eine derart unbedingt notwendige Speicherung keine Einwilligung, weshalb Sie kein Cookie-Banner sehen. Sollten wir jemals Analyse- oder Marketing-Cookies hinzufügen, fragen wir Sie vorher.",
      },
      processors: {
        title: "Wer Daten in unserem Auftrag verarbeitet",
        p1:
          "Wir nutzen eine kleine Anzahl sorgfältig ausgewählter Anbieter, die jeweils durch einen Auftragsverarbeitungsvertrag nach Art. 28 DSGVO gebunden sind:",
        items: [
          {
            strong: "Hosting, Datenbank und Authentifizierung.",
            rest: " Betreibt unsere Server, speichert Konto- und Mitgliedschaftsdaten und übernimmt die Anmeldung.",
          },
          {
            strong: "Stripe.",
            rest: " Zahlungen und Abonnementabrechnung, als eigenständiger Verantwortlicher für Zahlungsdaten.",
          },
          {
            strong: "Google.",
            rest: " Nur wenn Sie sich für die Anmeldung mit Google entscheiden, und nur für diese Anmeldung.",
          },
          {
            strong: "E-Mail-Zustellung.",
            rest: " Wird verwendet, um die Nachrichten, die Sie uns schreiben, zu senden und zu empfangen.",
          },
        ],
      },
      transfers: {
        title: "Wo Ihre Daten gespeichert werden, und Übermittlungen außerhalb des EWR",
        p1:
          "Wir speichern personenbezogene Daten, wo immer möglich, auf Servern innerhalb der EU/des EWR. Einige unserer Anbieter haben ihren Sitz in den Vereinigten Staaten. Wo Daten den EWR verlassen, stützt sich die Übermittlung auf die Standardvertragsklauseln der Europäischen Kommission und, wo anwendbar, auf das EU-US Data Privacy Framework, zusammen mit zusätzlichen technischen Schutzmaßnahmen wie Verschlüsselung während der Übertragung und im Ruhezustand.",
      },
      retention: {
        title: "Wie lange wir Dinge aufbewahren",
        items: [
          "Lokale Daten auf Ihrem Gerät: bis Sie sie löschen. Sie gehören Ihnen, auf Ihrem Gerät.",
          "Konto- und Mitgliedschaftsdaten: solange Ihr Konto besteht, danach gelöscht oder anonymisiert innerhalb von 90 Tagen nach Ihrer Kontoschließung.",
          "Kontaktnachrichten: bis zu 24 Monate, damit wir Zusammenhang haben, falls Sie erneut schreiben.",
          "Zahlungs- und Rechnungsunterlagen: 5 Jahre aufbewahrt, wie es das norwegische Buchführungsgesetz (bokføringsloven) verlangt. Rechtsgrundlage: rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO).",
          "Sicherheitsprotokolle: in der Regel 90 Tage oder weniger.",
        ],
      },
      protect: {
        title: "Wie wir es schützen",
        p1:
          "Daten werden während der Übertragung (TLS) und im Ruhezustand von unserem Hosting-Anbieter verschlüsselt. Der Datenbankzugriff ist durch Sicherheitsregeln auf Zeilenebene beschränkt, sodass ein Konto immer nur auf seine eigenen Daten zugreifen kann. Der Zugang zu Produktionssystemen ist auf diejenigen beschränkt, die ihn wirklich brauchen. Sollte jemals eine Verletzung Ihre Rechte gefährden, benachrichtigen wir das Datatilsynet innerhalb von 72 Stunden und informieren Sie direkt, wo das Gesetz dies verlangt.",
      },
      rights: {
        title: "Ihre Rechte",
        intro: "Nach der DSGVO können Sie uns bitten:",
        items: [
          "Ihnen mitzuteilen, was wir über Sie gespeichert haben, und Ihnen eine Kopie zu geben (Art. 15).",
          "Alles zu berichtigen, was falsch ist (Art. 16).",
          "Ihre Daten zu löschen (Art. 17).",
          "Die Verarbeitung einzuschränken (Art. 18).",
          "Sie Ihnen oder einem anderen Anbieter in einem übertragbaren Format zu senden (Art. 20).",
          "Die auf berechtigtem Interesse beruhende Verarbeitung zu stoppen (Art. 21).",
          "Ihre Einwilligung jederzeit zu widerrufen, sofern die Verarbeitung auf Einwilligung beruht (Art. 7).",
        ],
        p2Before: "Schreiben Sie uns über unsere",
        p2Mid:
          "und wir antworten innerhalb von 30 Tagen, kostenlos. Wenn Sie mit unserer Bearbeitung nicht zufrieden sind, können Sie sich beim Datatilsynet oder bei der Datenschutzbehörde Ihres eigenen Landes beschweren.",
      },
      children: {
        title: "Kinder",
        p1:
          "DoggMatch ist nicht für Kinder gedacht. Sie müssen mindestens 16 Jahre alt sein, um ein Konto zu erstellen. Wenn Sie glauben, dass ein Kind uns personenbezogene Daten gegeben hat, sagen Sie uns Bescheid, und wir entfernen sie.",
      },
      changes: {
        title: "Änderungen dieser Erklärung",
        p1:
          "Wenn wir hier etwas Wesentliches ändern, aktualisieren wir das Datum oben auf dieser Seite und informieren Kontoinhaber per E-Mail, wenn die Änderung sie betrifft.",
      },
    },
  },
  fr: {
    eyebrow: "Confidentialité",
    title: "Vos données, traitées avec soin",
    intro:
      "Nous demandons le moins de données possible, nous vous disons clairement ce que nous en faisons, et vous pouvez nous demander de les supprimer à tout moment. Cette page explique tout cela en langage courant.",
    updated: "16 août 2026",
    contactPage: "page de contact",
    sections: {
      responsible: {
        title: "Qui est responsable de vos données",
        p1:
          "DoggMatch est conçu et exploité par KM TECH LABS, n° d'entreprise 934 044 029, à Kristiansand, en Norvège. KM TECH LABS est le responsable du traitement des données personnelles traitées via ce site, et décide pourquoi et comment ces données sont utilisées.",
        p2:
          "La Norvège fait partie de l'EEE, le règlement général sur la protection des données (RGPD) de l'UE s'applique donc pleinement à nous, ainsi que la loi norvégienne sur les données personnelles (personopplysningsloven). Notre autorité de contrôle est l'autorité norvégienne de protection des données (Datatilsynet).",
        p3Before: "Le moyen le plus simple de nous contacter à propos de quoi que ce soit sur cette page est via notre",
        p3After: ".",
      },
      collect: {
        title: "Ce que nous collectons, et pourquoi",
        p1:
          "La majeure partie de DoggMatch fonctionne sans compte et sans que nous stockions quoi que ce soit à votre sujet. Vos réponses au quiz, vos profils de chien, votre progression d'entraînement et vos notes de soins sont conservés dans le stockage local de votre propre navigateur, sur votre appareil — pas sur nos serveurs.",
        items: [
          {
            strong: "Réponses au quiz et profils de chien.",
            rest:
              " Stockés localement sur votre appareil afin que vous puissiez y revenir. Nous ne les voyons jamais. Effacer les données de votre navigateur les supprime.",
          },
          {
            strong: "Informations de compte.",
            rest:
              " Si vous créez un compte, nous conservons votre adresse e-mail et votre identité de connexion. Base légale : exécution d'un contrat (art. 6.1.b du RGPD).",
          },
          {
            strong: "Informations d'adhésion.",
            rest:
              " Pour DoggMatch+, nous conservons votre statut d'abonnement, votre formule, votre identifiant de membre et votre date de validité. Base légale : exécution d'un contrat.",
          },
          {
            strong: "Informations de paiement.",
            rest:
              " Les données de carte sont entièrement traitées par Stripe. Nous ne voyons ni ne stockons jamais votre numéro de carte. Nous conservons uniquement la référence d'abonnement nécessaire pour savoir si votre adhésion est active.",
          },
          {
            strong: "Messages que vous nous envoyez.",
            rest:
              " Votre nom, votre e-mail, l'objet et le message, afin que nous puissions vous répondre. Base légale : intérêt légitime à vous répondre (art. 6.1.f du RGPD).",
          },
          {
            strong: "Données techniques.",
            rest:
              " Journaux de serveur standards tels que l'adresse IP et le type de navigateur, conservés brièvement pour la sécurité, la prévention des abus et le dépannage. Base légale : intérêt légitime à assurer la sécurité du service.",
          },
        ],
      },
      notDo: {
        title: "Ce que nous ne faisons pas",
        items: [
          "Nous ne vendons ni ne louons vos données personnelles à personne.",
          "Nous n'utilisons pas de traceurs publicitaires ni de cookies publicitaires tiers.",
          "Nous ne construisons pas de profils comportementaux à des fins marketing.",
          "Nous ne prenons pas de décisions automatisées ayant des effets juridiques ou significatifs similaires. Votre résultat de correspondance est un calcul transparent dont vous pouvez voir le raisonnement, et il n'a aucune conséquence juridique.",
        ],
      },
      cookies: {
        title: "Cookies et stockage local",
        p1:
          "Nous n'utilisons que ce qui est strictement nécessaire au fonctionnement du site : une session de connexion, votre préférence clair/sombre, votre langue, et les données locales décrites ci-dessus. En vertu de la directive ePrivacy et de la loi norvégienne sur les communications électroniques (ekomlov), ce type de stockage strictement nécessaire ne requiert pas de consentement, c'est pourquoi vous ne voyez pas de bannière de cookies. Si nous ajoutons un jour des cookies d'analyse ou marketing, nous vous demanderons d'abord votre accord.",
      },
      processors: {
        title: "Qui traite les données en notre nom",
        p1:
          "Nous utilisons un petit nombre de prestataires soigneusement choisis, chacun lié par un contrat de sous-traitance conforme à l'art. 28 du RGPD :",
        items: [
          {
            strong: "Hébergement, base de données et authentification.",
            rest: " Fait fonctionner nos serveurs, stocke les données de compte et d'adhésion, et gère la connexion.",
          },
          {
            strong: "Stripe.",
            rest: " Paiements et facturation des abonnements, en tant que responsable indépendant pour les données de paiement.",
          },
          {
            strong: "Google.",
            rest: " Uniquement si vous choisissez de vous connecter avec Google, et uniquement pour cette connexion.",
          },
          {
            strong: "Livraison des e-mails.",
            rest: " Utilisé pour envoyer et recevoir les messages que vous nous écrivez.",
          },
        ],
      },
      transfers: {
        title: "Où vos données sont stockées, et les transferts hors de l'EEE",
        p1:
          "Nous stockons les données personnelles sur des serveurs situés dans l'UE/l'EEE dans la mesure du possible. Certains de nos prestataires sont basés aux États-Unis. Lorsque des données quittent l'EEE, le transfert s'appuie sur les clauses contractuelles types de la Commission européenne et, le cas échéant, sur le cadre de protection des données UE-États-Unis, ainsi que sur des mesures de sécurité techniques supplémentaires telles que le chiffrement en transit et au repos.",
      },
      retention: {
        title: "Combien de temps nous conservons les choses",
        items: [
          "Données locales sur votre appareil : jusqu'à ce que vous les effaciez. Elles vous appartiennent, sur votre machine.",
          "Données de compte et d'adhésion : tant que votre compte existe, puis supprimées ou anonymisées dans les 90 jours suivant sa fermeture.",
          "Messages de contact : jusqu'à 24 mois, afin que nous ayons du contexte si vous nous réécrivez.",
          "Registres de paiement et de facturation : conservés 5 ans, comme l'exige la loi norvégienne sur la comptabilité (bokføringsloven). Base légale : obligation légale (art. 6.1.c du RGPD).",
          "Journaux de sécurité : normalement 90 jours ou moins.",
        ],
      },
      protect: {
        title: "Comment nous le protégeons",
        p1:
          "Les données sont chiffrées en transit (TLS) et au repos chez notre hébergeur. L'accès à la base de données est limité par des règles de sécurité au niveau des lignes, de sorte qu'un compte ne peut jamais atteindre que ses propres données. L'accès aux systèmes de production est limité aux personnes qui en ont réellement besoin. Si une violation venait un jour à mettre vos droits en danger, nous en informerions le Datatilsynet dans les 72 heures et vous le dirions directement là où la loi l'exige.",
      },
      rights: {
        title: "Vos droits",
        intro: "En vertu du RGPD, vous pouvez nous demander de :",
        items: [
          "Vous dire ce que nous détenons à votre sujet, et vous en donner une copie (art. 15).",
          "Corriger tout ce qui est inexact (art. 16).",
          "Supprimer vos données (art. 17).",
          "Restreindre la façon dont nous les utilisons (art. 18).",
          "Vous les transmettre, ou à un autre prestataire, dans un format portable (art. 20).",
          "Cesser un traitement fondé sur l'intérêt légitime (art. 21).",
          "Retirer votre consentement à tout moment, lorsque le traitement repose sur le consentement (art. 7).",
        ],
        p2Before: "Écrivez-nous via notre",
        p2Mid:
          "et nous vous répondrons sous 30 jours, gratuitement. Si vous n'êtes pas satisfait de la façon dont nous avons traité votre demande, vous pouvez déposer une plainte auprès du Datatilsynet ou de l'autorité de protection des données de votre propre pays.",
      },
      children: {
        title: "Enfants",
        p1:
          "DoggMatch n'est pas destiné aux enfants. Vous devez avoir au moins 16 ans pour créer un compte. Si vous pensez qu'un enfant nous a communiqué des données personnelles, dites-le-nous et nous les supprimerons.",
      },
      changes: {
        title: "Modifications de cet avis",
        p1:
          "Si nous modifions quelque chose d'important ici, nous mettrons à jour la date en haut de cette page, et informerons les titulaires de compte par e-mail lorsque le changement les concerne.",
      },
    },
  },
  nl: {
    eyebrow: "Privacy",
    title: "Uw gegevens, met zorg behandeld",
    intro:
      "We vragen zo weinig mogelijk, we vertellen u eerlijk wat we ermee doen, en u kunt ons op elk moment vragen het te verwijderen. Deze pagina legt dat allemaal uit in gewone taal.",
    updated: "16 augustus 2026",
    contactPage: "contactpagina",
    sections: {
      responsible: {
        title: "Wie verantwoordelijk is voor uw gegevens",
        p1:
          "DoggMatch wordt gebouwd en beheerd door KM TECH LABS, ondernemingsnummer 934 044 029, in Kristiansand, Noorwegen. KM TECH LABS is de verwerkingsverantwoordelijke voor persoonsgegevens die via deze website worden verwerkt, en bepaalt waarom en hoe die gegevens worden gebruikt.",
        p2:
          "Noorwegen maakt deel uit van de EER, dus de Algemene Verordening Gegevensbescherming (AVG) van de EU is volledig op ons van toepassing, samen met de Noorse wet op persoonsgegevens (personopplysningsloven). Onze toezichthouder is de Noorse gegevensbeschermingsautoriteit (Datatilsynet).",
        p3Before: "De makkelijkste manier om ons over iets op deze pagina te bereiken is via onze",
        p3After: ".",
      },
      collect: {
        title: "Wat we verzamelen, en waarom",
        p1:
          "Het grootste deel van DoggMatch werkt zonder account en zonder dat wij iets over u opslaan. Uw quizantwoorden, uw hondprofielen, uw trainingsvoortgang en uw verzorgingsnotities worden bewaard in de lokale opslag van uw eigen browser, op uw apparaat — niet op onze servers.",
        items: [
          {
            strong: "Quizantwoorden en hondprofielen.",
            rest:
              " Lokaal opgeslagen op uw apparaat zodat u er later op kunt terugkomen. Wij zien ze nooit. Als u uw browsergegevens wist, verdwijnen ze.",
          },
          {
            strong: "Accountgegevens.",
            rest:
              " Als u een account aanmaakt, bewaren we uw e-mailadres en inlogidentiteit. Rechtsgrond: uitvoering van een overeenkomst (art. 6, lid 1, onder b AVG).",
          },
          {
            strong: "Lidmaatschapsgegevens.",
            rest:
              " Voor DoggMatch+ bewaren we uw abonnementsstatus, plan, lid-ID en geldigheidsdatum. Rechtsgrond: uitvoering van een overeenkomst.",
          },
          {
            strong: "Betaalgegevens.",
            rest:
              " Kaartgegevens worden volledig door Stripe verwerkt. Wij zien of bewaren uw kaartnummer nooit. We houden alleen de abonnementsreferentie bij die we nodig hebben om te weten of uw lidmaatschap actief is.",
          },
          {
            strong: "Berichten die u ons stuurt.",
            rest:
              " Uw naam, e-mail, onderwerp en bericht, zodat we kunnen reageren. Rechtsgrond: gerechtvaardigd belang om u te antwoorden (art. 6, lid 1, onder f AVG).",
          },
          {
            strong: "Technische gegevens.",
            rest:
              " Standaard serverlogs zoals IP-adres en browsertype, kort bewaard voor veiligheid, misbruikpreventie en probleemoplossing. Rechtsgrond: gerechtvaardigd belang bij het veilig houden van de dienst.",
          },
        ],
      },
      notDo: {
        title: "Wat we niet doen",
        items: [
          "We verkopen of verhuren uw persoonsgegevens aan niemand.",
          "We gebruiken geen advertentietrackers of advertentiecookies van derden.",
          "We bouwen geen gedragsprofielen van u op voor marketingdoeleinden.",
          "We nemen geen geautomatiseerde beslissingen met juridische of vergelijkbare ingrijpende gevolgen. Uw matchresultaat is een transparante berekening waarvan u de redenering kunt zien, en het heeft geen juridische gevolgen.",
        ],
      },
      cookies: {
        title: "Cookies en lokale opslag",
        p1:
          "We gebruiken alleen wat strikt noodzakelijk is om de site te laten werken: een inlogsessie, uw licht/donker-voorkeur, uw taal, en de hierboven beschreven lokale gegevens. Onder de ePrivacy-richtlijn en de Noorse telecommunicatiewet (ekomlov) is voor dit soort strikt noodzakelijke opslag geen toestemming vereist, en daarom ziet u geen cookiebanner. Als we ooit analytische of marketingcookies toevoegen, vragen we u dat eerst.",
      },
      processors: {
        title: "Wie namens ons gegevens verwerkt",
        p1:
          "We gebruiken een klein aantal zorgvuldig gekozen leveranciers, elk gebonden aan een verwerkersovereenkomst onder art. 28 AVG:",
        items: [
          {
            strong: "Hosting, database en authenticatie.",
            rest: " Draait onze servers, bewaart account- en lidmaatschapsgegevens, en verzorgt het inloggen.",
          },
          {
            strong: "Stripe.",
            rest: " Betalingen en abonnementsfacturatie, als zelfstandige verwerkingsverantwoordelijke voor betaalgegevens.",
          },
          {
            strong: "Google.",
            rest: " Alleen als u ervoor kiest om met Google in te loggen, en alleen voor die inlog.",
          },
          {
            strong: "E-mailbezorging.",
            rest: " Wordt gebruikt om de berichten die u ons schrijft te versturen en te ontvangen.",
          },
        ],
      },
      transfers: {
        title: "Waar uw gegevens worden opgeslagen, en overdrachten buiten de EER",
        p1:
          "Wij slaan persoonsgegevens waar mogelijk op servers binnen de EU/EER op. Sommige van onze leveranciers zijn gevestigd in de Verenigde Staten. Waar gegevens de EER verlaten, is de overdracht gebaseerd op de standaardcontractbepalingen van de Europese Commissie en, waar van toepassing, het EU-VS Data Privacy Framework, samen met aanvullende technische waarborgen zoals versleuteling tijdens verzending en opslag.",
      },
      retention: {
        title: "Hoe lang we dingen bewaren",
        items: [
          "Lokale gegevens op uw apparaat: totdat u ze wist. Ze zijn van u, op uw eigen apparaat.",
          "Account- en lidmaatschapsgegevens: zolang uw account bestaat, daarna verwijderd of geanonimiseerd binnen 90 dagen na sluiting.",
          "Contactberichten: tot 24 maanden, zodat we context hebben als u opnieuw schrijft.",
          "Betalings- en factuurgegevens: 5 jaar bewaard, zoals de Noorse boekhoudwet (bokføringsloven) vereist. Rechtsgrond: wettelijke verplichting (art. 6, lid 1, onder c AVG).",
          "Beveiligingslogs: doorgaans 90 dagen of minder.",
        ],
      },
      protect: {
        title: "Hoe we het beschermen",
        p1:
          "Gegevens worden versleuteld tijdens verzending (TLS) en in rust bij onze hostingprovider. Databasetoegang is beperkt door beveiligingsregels op rijniveau, zodat een account alleen ooit bij zijn eigen gegevens kan komen. Toegang tot productiesystemen is beperkt tot wie het echt nodig heeft. Mocht een datalek ooit uw rechten in gevaar brengen, dan melden we dit binnen 72 uur bij Datatilsynet en informeren we u rechtstreeks waar de wet dat vereist.",
      },
      rights: {
        title: "Uw rechten",
        intro: "Onder de AVG kunt u ons vragen om:",
        items: [
          "U te vertellen wat we over u hebben, en u er een kopie van te geven (art. 15).",
          "Alles wat onjuist is te corrigeren (art. 16).",
          "Uw gegevens te verwijderen (art. 17).",
          "Te beperken hoe we ze gebruiken (art. 18).",
          "Ze naar u of een andere aanbieder te sturen in een overdraagbaar formaat (art. 20).",
          "Te stoppen met verwerking op basis van gerechtvaardigd belang (art. 21).",
          "Toestemming op elk moment in te trekken, waar de verwerking op toestemming is gebaseerd (art. 7).",
        ],
        p2Before: "Schrijf ons via onze",
        p2Mid:
          "en we reageren binnen 30 dagen, kosteloos. Bent u niet tevreden met hoe we het hebben afgehandeld, dan kunt u een klacht indienen bij Datatilsynet of bij de gegevensbeschermingsautoriteit in uw eigen land.",
      },
      children: {
        title: "Kinderen",
        p1:
          "DoggMatch is niet bedoeld voor kinderen. U moet minstens 16 jaar oud zijn om een account aan te maken. Als u denkt dat een kind ons persoonsgegevens heeft gegeven, laat het ons weten, dan verwijderen we ze.",
      },
      changes: {
        title: "Wijzigingen in deze verklaring",
        p1:
          "Als we hier iets wezenlijks veranderen, werken we de datum bovenaan deze pagina bij en informeren we accounthouders per e-mail wanneer de wijziging hen betreft.",
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
          <Link to={withLangPrefix("/contact")} className="text-foreground underline underline-offset-4">
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
          <Link to={withLangPrefix("/contact")} className="text-foreground underline underline-offset-4">
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
