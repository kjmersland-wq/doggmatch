import { Link, createFileRoute } from "@tanstack/react-router";
import { LegalList, LegalPage, LegalSection } from "@/components/dogmatch/legal";
import { useCopy } from "@/i18n";
import { seoLinks, abs, localizedHead } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Terms of Service — DoggMatch";
const description =
  "The terms for using DoggMatch and DoggMatch+: what the service is, how membership and billing work, your right to cancel, and the limits of our advice.";

const seoCopy = {
  en: { title, description },
  no: {
    title: "Vilkår for bruk — DoggMatch",
    description:
      "Vilkårene for å bruke DoggMatch og DoggMatch+: hva tjenesten er, hvordan medlemskap og betaling fungerer, angreretten din, og grensene for rådene våre.",
  },
  pl: {
    title: "Regulamin — DoggMatch",
    description:
      "Zasady korzystania z DoggMatch i DoggMatch+: czym jest serwis, jak działa członkostwo i płatności, prawo do odstąpienia oraz granice naszych porad.",
  },
  dk: {
    title: "Servicevilkår — DoggMatch",
    description:
      "Vilkårene for at bruge DoggMatch og DoggMatch+: hvad tjenesten er, hvordan medlemskab og fakturering fungerer, din fortrydelsesret, og grænserne for vores råd.",
  },
  se: {
    title: "Användarvillkor — DoggMatch",
    description:
      "Villkoren för att använda DoggMatch och DoggMatch+: vad tjänsten är, hur medlemskap och fakturering fungerar, din ångerrätt, och gränserna för våra råd.",
  },
  fi: {
    title: "Käyttöehdot — DoggMatch",
    description:
      "DoggMatchin ja DoggMatch+:n käyttöehdot: mikä palvelu on, miten jäsenyys ja laskutus toimivat, peruuttamisoikeutesi ja neuvojemme rajat.",
  },
  de: {
    title: "Nutzungsbedingungen — DoggMatch",
    description:
      "Die Bedingungen für die Nutzung von DoggMatch und DoggMatch+: was der Dienst ist, wie Mitgliedschaft und Abrechnung funktionieren, dein Widerrufsrecht, und die Grenzen unserer Beratung.",
  },
  fr: {
    title: "Conditions d'utilisation — DoggMatch",
    description:
      "Les conditions d'utilisation de DoggMatch et DoggMatch+ : ce qu'est le service, comment fonctionnent l'adhésion et la facturation, votre droit de rétractation, et les limites de nos conseils.",
  },
  nl: {
    title: "Gebruiksvoorwaarden — DoggMatch",
    description:
      "De voorwaarden voor het gebruik van DoggMatch en DoggMatch+: wat de dienst is, hoe lidmaatschap en facturering werken, je herroepingsrecht, en de grenzen van ons advies.",
  },
};

export const Route = createFileRoute("/{-$lang}/terms")({
  head: (ctx) => localizedHead(ctx, "/terms", seoCopy),
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
  pl: {
    eyebrow: "Warunki",
    title: "Warunki, prostym językiem",
    intro:
      "To są warunki, które akceptujesz, korzystając z DoggMatch. Staraliśmy się napisać je tak, jak wyjaśnilibyśmy je tobie osobiście, nie ukrywając niczego w drobnym druku.",
    updated: "16 sierpnia 2026",
    contactPage: "stronę kontaktową",
    privacyNotice: "informację o prywatności",
    writeToUs: "napisz do nas",
    sections: {
      whoWeAre: {
        title: "Kim jesteśmy",
        p1:
          "DoggMatch jest budowany i prowadzony przez KM TECH LABS, nr org. 934 044 029, Kristiansand, Norwegia. Gdy poniżej mówimy „my” lub „nas”, mamy na myśli właśnie ich. Gdy mówimy „ty”, mamy na myśli osobę korzystającą ze strony.",
      },
      whatItIs: {
        title: "Czym jest DoggMatch",
        p1:
          "DoggMatch pomaga ci ustalić, jaki pies mógłby pasować do twojego życia, oraz pomaga zająć się psem, którego już masz. Wszystko, co ci pokazujemy, pochodzi z przejrzystego obliczenia opartego na tym, co nam powiesz, i na tym, czego zwykle potrzebuje dana rasa. To ogólne wskazówki, a nie profesjonalna ocena.",
      },
      notAdvice: {
        title: "Ważne: to nie jest porada weterynaryjna ani prawna",
        p1:
          "Nasze materiały dotyczące zdrowia, żywienia, szkolenia i podróży to informacje ogólne. Każdy pies jest inny. Zawsze rozmawiaj ze swoim weterynarzem w sprawach medycznych i zawsze sprawdzaj oficjalne przepisy krajów, do których i z których podróżujesz — wymagania graniczne i importowe się zmieniają, a tylko władze mogą potwierdzić, co dotyczy ciebie. Ty ponosisz odpowiedzialność za decyzje dotyczące twojego psa.",
      },
      account: {
        title: "Twoje konto",
        p1:
          "Większość funkcji DoggMatch działa bez konta. Jeśli je założysz, zachowaj dane logowania dla siebie, podaj nam dokładne informacje i poinformuj nas, jeśli podejrzewasz, że ktoś inny uzyskał dostęp do twojego konta. Musisz mieć co najmniej 16 lat. Możesz zamknąć konto w dowolnym momencie.",
      },
      membership: {
        title: "Członkostwo DoggMatch+ i rozliczenia",
        items: [
          "DoggMatch+ kosztuje 7,99 € miesięcznie lub 59,99 € rocznie. Ceny zawierają VAT tam, gdzie ma on zastosowanie.",
          "Płatności obsługuje Stripe. Nigdy nie widzimy danych twojej karty.",
          "Członkostwo odnawia się automatycznie na koniec każdego okresu, dopóki go nie anulujesz.",
          "Możesz anulować w dowolnym momencie ze swojego konta. Twoje członkostwo pozostaje wtedy aktywne do końca opłaconego już okresu i nie odnawia się później.",
          "Jeśli zmienimy cenę, poinformujemy cię co najmniej 30 dni przed tym, zanim to na ciebie wpłynie, i możesz anulować, zanim zmiana wejdzie w życie.",
          "Jeśli płatność się nie powiedzie, możemy zawiesić funkcje członkostwa do czasu jej zrealizowania.",
        ],
      },
      withdraw: {
        title: "Twoje prawo do odstąpienia (konsumenci z UE/EOG)",
        p1Before:
          "Jako konsument w UE/EOG masz 14 dni na odstąpienie od zakupu, zgodnie z dyrektywą o prawach konsumentów i norweską ustawą o prawie do odstąpienia (angrerettloven). Aby z tego skorzystać, po prostu poinformuj nas przez",
        p1After: "w ciągu 14 dni od subskrypcji, a my zwrócimy ci pieniądze.",
        p2:
          "Ponieważ DoggMatch+ daje ci natychmiastowy dostęp do treści cyfrowych, zgadzasz się, że zaczynamy dostarczać usługę od razu. Jeśli następnie odstąpisz w ciągu 14 dni, możemy potrącić uczciwą kwotę za tę część okresu, z której już skorzystałeś.",
      },
      use: {
        title: "Jak możesz korzystać ze strony",
        intro: "Prosimy, nie:",
        items: [
          "Nie skrobaj, nie kopiuj ani nie odsprzedawaj naszych treści, danych o rasach ani wyników dopasowania.",
          "Nie próbuj łamać, przeciążać ani obchodzić zabezpieczeń usługi.",
          "Nie używaj strony do niczego niezgodnego z prawem ani nie przesyłaj niczego szkodliwego.",
          "Nie przedstawiaj wyników DoggMatch jako profesjonalnej porady weterynaryjnej lub hodowlanej.",
        ],
      },
      content: {
        title: "Treść i własność",
        p1:
          "Nazwa DoggMatch, logo, wygląd, materiały pisemne, treści o rasach i logika dopasowania należą do KM TECH LABS i są chronione prawem autorskim i prawem znaków towarowych. Możesz z nich korzystać do własnego, osobistego, niekomercyjnego użytku — w tym drukować własne dokumenty i kartę członkowską. Wszystko, co tworzysz w DoggMatch, takie jak profile psów i notatki, pozostaje twoje.",
      },
      availability: {
        title: "Dostępność",
        p1:
          "Ciężko pracujemy, aby DoggMatch działał, ale nie obiecujemy, że nigdy nie będzie niedostępny. Możemy aktualizować, zmieniać lub wycofywać funkcje. Jeśli kiedykolwiek zamkniemy płatną funkcję, na którą jesteś zapisany, zwrócimy niewykorzystaną część twojego okresu.",
      },
      liability: {
        title: "Odpowiedzialność",
        p1:
          "Nic tutaj nie ogranicza twoich ustawowych praw konsumenckich, i nic nie ogranicza naszej odpowiedzialności za śmierć, uszkodzenie ciała, rażące niedbalstwo lub umyślne działanie. Poza tym, w zakresie dozwolonym przez prawo, nie ponosimy odpowiedzialności za szkody pośrednie lub następcze, a nasza całkowita odpowiedzialność jest ograniczona do kwoty, którą zapłaciłeś nam w ciągu 12 miesięcy poprzedzających roszczenie.",
      },
      privacy: {
        title: "Prywatność",
        p1Before: "Sposób, w jaki traktujemy twoje dane osobowe, wyjaśniony jest w naszej",
        p1After: ", która jest zgodna z RODO.",
      },
      changes: {
        title: "Zmiany tych warunków",
        p1:
          "Jeśli zmienimy te warunki w sposób, który ma dla ciebie znaczenie, poinformujemy członków e-mailem co najmniej 30 dni wcześniej. Dalsze korzystanie z DoggMatch po tym czasie oznacza akceptację nowych warunków.",
      },
      law: {
        title: "Prawo właściwe i spory",
        p1:
          "Niniejsze warunki podlegają prawu norweskiemu, z sądem Kristiansand tingrett jako właściwym sądem zwyczajnym. Jeśli jesteś konsumentem, zachowujesz ochronę wynikającą z bezwzględnie obowiązujących przepisów kraju, w którym mieszkasz, i możesz tam wnieść sprawę.",
        p2Before: "Możesz też złożyć skargę do norweskiego Urzędu Ochrony Konsumentów (Forbrukertilsynet)/Forbrukerrådet lub skorzystać z internetowej platformy rozstrzygania sporów Komisji Europejskiej. Wolelibyśmy jednak, żebyś po prostu",
        p2After: "najpierw do nas napisał — większość spraw da się łatwo rozwiązać.",
      },
    },
  },
  dk: {
    eyebrow: "Vilkår",
    title: "Vilkårene, i klart sprog",
    intro:
      "Det her er vilkårene, du accepterer, når du bruger DoggMatch. Vi har forsøgt at skrive dem, som vi ville forklare dem til dig ansigt til ansigt, uden at gemme noget i det med småt.",
    updated: "16. august 2026",
    contactPage: "kontaktsiden",
    privacyNotice: "privatlivspolitik",
    writeToUs: "skriv til os",
    sections: {
      whoWeAre: {
        title: "Hvem vi er",
        p1:
          "DoggMatch er bygget og drevet af KM TECH LABS, CVR-nr. 934 044 029, Kristiansand, Norge. Når vi siger \"vi\" eller \"os\" nedenfor, er det dem, vi mener. Når vi siger \"du\", mener vi den, der bruger siden.",
      },
      whatItIs: {
        title: "Hvad DoggMatch er",
        p1:
          "DoggMatch hjælper dig med at finde ud af, hvilken hund der kan passe til dit liv, og hjælper dig med at passe på den hund, du allerede har. Alt, hvad vi viser dig, kommer fra en gennemsigtig beregning baseret på det, du fortæller os, og hvad hver race typisk har brug for. Det er generel vejledning, ikke en professionel vurdering.",
      },
      notAdvice: {
        title: "Vigtigt: dette er ikke veterinær- eller juridisk rådgivning",
        p1:
          "Vores materiale om sundhed, ernæring, træning og rejser er generel information. Hver hund er forskellig. Tal altid med din dyrlæge om alt medicinsk, og tjek altid de officielle regler for de lande, du rejser til og fra — grænse- og indførselskrav ændrer sig, og kun myndighederne kan bekræfte, hvad der gælder for dig. Du er selv ansvarlig for beslutninger, du træffer om din hund.",
      },
      account: {
        title: "Din konto",
        p1:
          "Det meste af DoggMatch fungerer uden en konto. Opretter du en, så hold dine login-oplysninger for dig selv, giv os korrekte oplysninger, og fortæl os det, hvis du tror, nogen andre er kommet ind på din konto. Du skal være mindst 16 år. Du kan lukke din konto, når du vil.",
      },
      membership: {
        title: "DoggMatch+ medlemskab og fakturering",
        items: [
          "DoggMatch+ koster 7,99 € om måneden eller 59,99 € om året. Priserne inkluderer moms, hvor det gælder.",
          "Betalinger håndteres af Stripe. Vi ser aldrig dine kortoplysninger.",
          "Medlemskabet fornyes automatisk ved udgangen af hver periode, indtil du opsiger det.",
          "Du kan opsige når som helst fra din konto. Dit medlemskab forbliver derefter aktivt ud den periode, du allerede har betalt for, og fornyes ikke derefter.",
          "Hvis vi ændrer prisen, fortæller vi dig det mindst 30 dage før det påvirker dig, og du kan opsige, før det træder i kraft.",
          "Hvis en betaling mislykkes, kan vi sætte medlemskabsfunktioner på pause, indtil den går igennem.",
        ],
      },
      withdraw: {
        title: "Din fortrydelsesret (EU/EØS-forbrugere)",
        p1Before:
          "Som forbruger i EU/EØS har du 14 dage til at fortryde et køb, i henhold til forbrugerrettighedsdirektivet og den norske fortrydelseslov (angrerettloven). For at bruge den, så sig bare til os gennem",
        p1After: "inden for 14 dage efter, du abonnerede, så refunderer vi dig.",
        p2:
          "Fordi DoggMatch+ giver dig øjeblikkelig adgang til digitalt indhold, accepterer du, at vi begynder at levere med det samme. Hvis du derefter fortryder inden for de 14 dage, kan vi trække et rimeligt beløb fra for den del af perioden, du allerede har brugt.",
      },
      use: {
        title: "Sådan må du bruge siden",
        intro: "Undlad venligst at:",
        items: [
          "Scrape, kopiere eller videresælge vores indhold, racedata eller matchresultater.",
          "Forsøge at bryde, overbelaste eller omgå tjenestens sikkerhed.",
          "Bruge siden til noget ulovligt, eller uploade noget skadeligt.",
          "Fremstille DoggMatch-resultater som professionel veterinær- eller avlsrådgivning.",
        ],
      },
      content: {
        title: "Indhold og ejerskab",
        p1:
          "Navnet DoggMatch, logoet, designet, det skrevne materiale, raceindholdet og matchlogikken tilhører KM TECH LABS og er beskyttet af ophavsret og varemærkeret. Du må bruge dem til din egen personlige, ikke-kommercielle brug — herunder at udskrive dine egne dokumenter og medlemskort. Alt, du skaber i DoggMatch, såsom dine hundeprofiler og noter, forbliver dit.",
      },
      availability: {
        title: "Tilgængelighed",
        p1:
          "Vi arbejder hårdt for at holde DoggMatch oppe, men vi lover ikke, at det aldrig vil være utilgængeligt. Vi kan opdatere, ændre eller nedlægge funktioner. Hvis vi nogensinde lukker en betalt funktion, du abonnerer på, refunderer vi den ubrugte del af din periode.",
      },
      liability: {
        title: "Ansvar",
        p1:
          "Intet her begrænser dine lovbestemte forbrugerrettigheder, og intet begrænser vores ansvar for død, personskade, grov uagtsomhed eller forsæt. Ud over det, og i det omfang loven tillader det, er vi ikke ansvarlige for indirekte tab eller følgeskader, og vores samlede ansvar er begrænset til det, du har betalt os i de 12 måneder før kravet.",
      },
      privacy: {
        title: "Privatliv",
        p1Before: "Hvordan vi håndterer dine personoplysninger er forklaret i vores",
        p1After: ", som følger GDPR.",
      },
      changes: {
        title: "Ændringer af disse vilkår",
        p1:
          "Hvis vi ændrer disse vilkår på en måde, der betyder noget for dig, giver vi medlemmer besked via e-mail mindst 30 dage i forvejen. Fortsætter du med at bruge DoggMatch derefter, betyder det, at du accepterer de nye vilkår.",
      },
      law: {
        title: "Lovvalg og tvister",
        p1:
          "Disse vilkår er underlagt norsk ret, med Kristiansand tingrett som ordinært værneting. Er du forbruger, beholder du beskyttelsen af ufravigelig lovgivning i det land, du bor i, og du kan anlægge sag der.",
        p2Before: "Du kan også indgive en klage til det norske Forbrugertilsyn (Forbrukertilsynet)/Forbrukerrådet, eller bruge EU-Kommissionens onlineplatform for tvistbilæggelse. Vi vil meget hellere have, at du bare",
        p2After: "til os først — de fleste ting er nemme at ordne.",
      },
    },
  },
  se: {
    eyebrow: "Villkor",
    title: "Villkoren, i klarspråk",
    intro:
      "Det här är villkoren du godkänner när du använder DoggMatch. Vi har försökt skriva dem som vi skulle förklara dem för dig personligen, utan att gömma något i det finstilta.",
    updated: "16 augusti 2026",
    contactPage: "kontaktsidan",
    privacyNotice: "integritetspolicy",
    writeToUs: "skriv till oss",
    sections: {
      whoWeAre: {
        title: "Vilka vi är",
        p1:
          "DoggMatch byggs och drivs av KM TECH LABS, org.nr 934 044 029, Kristiansand, Norge. När vi säger \"vi\" eller \"oss\" nedan menar vi dem. När vi säger \"du\" menar vi den som använder sidan.",
      },
      whatItIs: {
        title: "Vad DoggMatch är",
        p1:
          "DoggMatch hjälper dig att ta reda på vilken hund som kan passa ditt liv, och hjälper dig att ta hand om hunden du redan har. Allt vi visar dig kommer från en transparent beräkning baserad på vad du berättar för oss och vad varje ras vanligtvis behöver. Det är allmän vägledning, inte en professionell bedömning.",
      },
      notAdvice: {
        title: "Viktigt: det här är inte veterinär- eller juridisk rådgivning",
        p1:
          "Vårt material om hälsa, näring, träning och resor är allmän information. Varje hund är olik. Prata alltid med din veterinär om allt medicinskt, och kontrollera alltid de officiella reglerna för länderna du reser till och från — gräns- och importkrav ändras, och bara myndigheterna kan bekräfta vad som gäller för dig. Du ansvarar själv för beslut du fattar om din hund.",
      },
      account: {
        title: "Ditt konto",
        p1:
          "Det mesta av DoggMatch fungerar utan konto. Om du skapar ett, håll dina inloggningsuppgifter för dig själv, ge oss korrekt information, och meddela oss om du tror att någon annan har kommit åt ditt konto. Du måste vara minst 16 år. Du kan stänga ditt konto när du vill.",
      },
      membership: {
        title: "DoggMatch+ medlemskap och fakturering",
        items: [
          "DoggMatch+ kostar 7,99 € per månad eller 59,99 € per år. Priserna inkluderar moms där det gäller.",
          "Betalningar hanteras av Stripe. Vi ser aldrig dina kortuppgifter.",
          "Medlemskapet förnyas automatiskt vid slutet av varje period tills du säger upp det.",
          "Du kan säga upp när som helst från ditt konto. Ditt medlemskap förblir då aktivt ut den period du redan har betalat för, och förnyas inte därefter.",
          "Om vi ändrar priset meddelar vi dig minst 30 dagar innan det påverkar dig, och du kan säga upp innan det träder i kraft.",
          "Om en betalning misslyckas kan vi pausa medlemskapsfunktioner tills den går igenom.",
        ],
      },
      withdraw: {
        title: "Din ångerrätt (EU/EES-konsumenter)",
        p1Before:
          "Som konsument inom EU/EES har du 14 dagar att ångra ett köp, enligt konsumenträttighetsdirektivet och den norska ångerrättslagen (angrerettloven). För att använda den, säg bara till oss genom",
        p1After: "inom 14 dagar efter att du prenumererade, så återbetalar vi dig.",
        p2:
          "Eftersom DoggMatch+ ger dig omedelbar tillgång till digitalt innehåll godkänner du att vi börjar leverera direkt. Om du sedan ångrar dig inom 14 dagar kan vi dra av ett skäligt belopp för den del av perioden du redan har använt.",
      },
      use: {
        title: "Hur du får använda sidan",
        intro: "Vänligen avstå från att:",
        items: [
          "Skrapa, kopiera eller sälja vidare vårt innehåll, rasdata eller matchresultat.",
          "Försöka bryta, överbelasta eller kringgå tjänstens säkerhet.",
          "Använda sidan till något olagligt, eller ladda upp något skadligt.",
          "Framställa DoggMatch-resultat som professionell veterinär- eller avelsrådgivning.",
        ],
      },
      content: {
        title: "Innehåll och ägarskap",
        p1:
          "Namnet DoggMatch, logotypen, designen, det skrivna materialet, rasinnehållet och matchningslogiken tillhör KM TECH LABS och skyddas av upphovsrätt och varumärkesrätt. Du får använda dem för din egen personliga, icke-kommersiella användning — inklusive att skriva ut dina egna dokument och medlemskort. Allt du skapar i DoggMatch, som dina hundprofiler och anteckningar, förblir ditt.",
      },
      availability: {
        title: "Tillgänglighet",
        p1:
          "Vi arbetar hårt för att hålla DoggMatch igång, men vi lovar inte att det aldrig blir otillgängligt. Vi kan uppdatera, ändra eller avveckla funktioner. Om vi någonsin stänger ner en betald funktion du prenumererar på, återbetalar vi den oanvända delen av din period.",
      },
      liability: {
        title: "Ansvar",
        p1:
          "Inget här begränsar dina lagstadgade konsumenträttigheter, och inget begränsar vårt ansvar för dödsfall, personskada, grov vårdslöshet eller uppsåt. Utöver det, och i den mån lagen tillåter, ansvarar vi inte för indirekta skador eller följdskador, och vårt totala ansvar är begränsat till vad du har betalat oss under de 12 månaderna före kravet.",
      },
      privacy: {
        title: "Integritet",
        p1Before: "Hur vi hanterar dina personuppgifter förklaras i vår",
        p1After: ", som följer GDPR.",
      },
      changes: {
        title: "Ändringar av dessa villkor",
        p1:
          "Om vi ändrar dessa villkor på ett sätt som spelar roll för dig meddelar vi medlemmar via e-post minst 30 dagar i förväg. Att fortsätta använda DoggMatch därefter innebär att du godkänner de nya villkoren.",
      },
      law: {
        title: "Lagval och tvister",
        p1:
          "Dessa villkor styrs av norsk lag, med Kristiansand tingrett som ordinarie forum. Är du konsument behåller du skyddet av tvingande lagstiftning i landet du bor i, och du kan väcka talan där.",
        p2Before: "Du kan också klaga till den norska Konsumentmyndigheten (Forbrukertilsynet)/Forbrukerrådet, eller använda EU-kommissionens plattform för onlinetvistlösning. Vi föredrar mycket hellre att du bara",
        p2After: "till oss först — det mesta går lätt att lösa.",
      },
    },
  },
  fi: {
    eyebrow: "Käyttöehdot",
    title: "Ehdot selkokielellä",
    intro:
      "Nämä ovat ehdot, jotka hyväksyt käyttäessäsi DoggMatchia. Olemme yrittäneet kirjoittaa ne niin kuin selittäisimme ne sinulle kasvokkain, piilottamatta mitään pieneen präntätekstiin.",
    updated: "16. elokuuta 2026",
    contactPage: "yhteydenottosivun",
    privacyNotice: "tietosuojaselosteessamme",
    writeToUs: "kirjoita meille",
    sections: {
      whoWeAre: {
        title: "Keitä olemme",
        p1:
          "DoggMatchin rakentaa ja sitä ylläpitää KM TECH LABS, y-tunnus 934 044 029, Kristiansand, Norja. Kun sanomme jäljempänä \"me\" tai \"meidän\", tarkoitamme heitä. Kun sanomme \"sinä\", tarkoitamme sivustoa käyttävää henkilöä.",
      },
      whatItIs: {
        title: "Mikä DoggMatch on",
        p1:
          "DoggMatch auttaa sinua selvittämään, mikä koira voisi sopia elämääsi, ja auttaa sinua huolehtimaan jo omistamastasi koirasta. Kaikki näyttämämme perustuu läpinäkyvään laskelmaan, joka pohjautuu kertomiisi tietoihin ja siihen, mitä kukin rotu tyypillisesti tarvitsee. Se on yleistä ohjeistusta, ei ammatillista arviota.",
      },
      notAdvice: {
        title: "Tärkeää: tämä ei ole eläinlääketieteellistä tai oikeudellista neuvontaa",
        p1:
          "Terveys-, ravitsemus-, koulutus- ja matkustusaineistomme on yleistä tietoa. Jokainen koira on erilainen. Keskustele aina eläinlääkärisi kanssa kaikesta lääketieteellisestä, ja tarkista aina niiden maiden viralliset säännöt, joihin ja joista matkustat — raja- ja tuontivaatimukset muuttuvat, ja vain viranomaiset voivat vahvistaa, mitä sinuun sovelletaan. Olet itse vastuussa koiraasi koskevista päätöksistäsi.",
      },
      account: {
        title: "Tilisi",
        p1:
          "Suurin osa DoggMatchista toimii ilman tiliä. Jos luot sellaisen, pidä kirjautumistietosi itselläsi, anna meille oikeat tiedot, ja kerro meille, jos epäilet jonkun muun päässeen tilillesi. Sinun on oltava vähintään 16-vuotias. Voit sulkea tilisi milloin tahansa.",
      },
      membership: {
        title: "DoggMatch+ -jäsenyys ja laskutus",
        items: [
          "DoggMatch+ maksaa 7,99 € kuukaudessa tai 59,99 € vuodessa. Hinnat sisältävät alv:n siellä, missä se on sovellettavissa.",
          "Maksut hoitaa Stripe. Emme koskaan näe korttitietojasi.",
          "Jäsenyys uusiutuu automaattisesti jokaisen jakson lopussa, kunnes peruutat sen.",
          "Voit peruuttaa milloin tahansa tililtäsi. Jäsenyytesi pysyy tämän jälkeen voimassa jo maksamasi jakson loppuun, eikä se uusiudu sen jälkeen.",
          "Jos muutamme hintaa, kerromme siitä vähintään 30 päivää ennen kuin se vaikuttaa sinuun, ja voit peruuttaa ennen kuin se astuu voimaan.",
          "Jos maksu epäonnistuu, saatamme keskeyttää jäsenyyden ominaisuudet, kunnes se onnistuu.",
        ],
      },
      withdraw: {
        title: "Peruuttamisoikeutesi (EU/ETA-kuluttajat)",
        p1Before:
          "EU:n/ETA-alueen kuluttajana sinulla on 14 päivää aikaa peruuttaa ostos kuluttajansuojadirektiivin ja Norjan peruuttamislain (angrerettloven) mukaisesti. Käyttääksesi tätä oikeutta, kerro meille asiasta",
        p1After: "14 päivän kuluessa tilaamisesta, niin palautamme rahasi.",
        p2:
          "Koska DoggMatch+ antaa sinulle välittömän pääsyn digitaaliseen sisältöön, hyväksyt, että aloitamme toimituksen heti. Jos sitten peruutat 14 päivän kuluessa, saatamme vähentää kohtuullisen summan siitä osasta jaksoa, jonka olet jo käyttänyt.",
      },
      use: {
        title: "Miten saat käyttää sivustoa",
        intro: "Älä ystävällisesti:",
        items: [
          "Kaavi, kopioi tai jälleenmyy sisältöämme, rotutietojamme tai täsmäystuloksiamme.",
          "Yritä murtaa, ylikuormittaa tai kiertää palvelun turvallisuutta.",
          "Käytä sivustoa mihinkään laittomaan, tai lataa mitään haitallista.",
          "Esitä DoggMatchin tuloksia ammatillisena eläinlääketieteellisenä tai jalostusneuvontana.",
        ],
      },
      content: {
        title: "Sisältö ja omistajuus",
        p1:
          "DoggMatch-nimi, logo, ulkoasu, kirjoitettu materiaali, rotusisältö ja täsmäyslogiikka kuuluvat KM TECH LABSille ja ovat tekijänoikeuden ja tavaramerkkioikeuden suojaamia. Voit käyttää niitä omaan henkilökohtaiseen, ei-kaupalliseen käyttöösi — mukaan lukien omien asiakirjojesi ja jäsenkorttisi tulostaminen. Kaikki DoggMatchissa luomasi, kuten koiraprofiilisi ja muistiinpanosi, pysyy sinun omanasi.",
      },
      availability: {
        title: "Saatavuus",
        p1:
          "Teemme kovasti töitä pitääksemme DoggMatchin toiminnassa, mutta emme lupaa, ettei se koskaan olisi poissa käytöstä. Saatamme päivittää, muuttaa tai lopettaa ominaisuuksia. Jos joskus lopetamme maksullisen ominaisuuden, johon olet tilannut, palautamme jaksosi käyttämättömän osan.",
      },
      liability: {
        title: "Vastuu",
        p1:
          "Mikään tässä ei rajoita lakisääteisiä kuluttajanoikeuksiasi, eikä mikään rajoita vastuutamme kuolemasta, henkilövahingosta, törkeästä huolimattomuudesta tai tahallisuudesta. Sen lisäksi, ja lain sallimissa rajoissa, emme ole vastuussa välillisistä tai seurannaisvahingoista, ja kokonaisvastuumme rajoittuu siihen, mitä olet maksanut meille vaatimusta edeltäneiden 12 kuukauden aikana.",
      },
      privacy: {
        title: "Tietosuoja",
        p1Before: "Miten käsittelemme henkilötietojasi, selitetään",
        p1After: ", joka noudattaa GDPR:ää.",
      },
      changes: {
        title: "Muutokset näihin ehtoihin",
        p1:
          "Jos muutamme näitä ehtoja tavalla, joka on sinulle merkityksellinen, kerromme jäsenille siitä sähköpostitse vähintään 30 päivää etukäteen. DoggMatchin käytön jatkaminen tämän jälkeen tarkoittaa, että hyväksyt uudet ehdot.",
      },
      law: {
        title: "Sovellettava laki ja riidat",
        p1:
          "Näihin ehtoihin sovelletaan Norjan lakia, ja Kristiansandin käräjäoikeus (tingrett) on tavanomainen oikeuspaikka. Jos olet kuluttaja, säilytät asuinmaasi pakottavan lainsäädännön suojan, ja voit nostaa kanteen siellä.",
        p2Before: "Voit myös viedä valituksen Norjan kuluttajaviranomaiselle (Forbrukertilsynet)/Forbrukerrådetille, tai käyttää Euroopan komission verkkovälitteistä riidanratkaisualustaa. Toivoisimme kuitenkin paljon mieluummin, että",
        p2After: " meille ensin — useimmat asiat on helppo selvittää.",
      },
    },
  },
  de: {
    eyebrow: "Bedingungen",
    title: "Die Bedingungen, in einfacher Sprache",
    intro:
      "Dies sind die Bedingungen, denen du zustimmst, wenn du DoggMatch nutzt. Wir haben versucht, sie so zu schreiben, wie wir sie dir persönlich erklären würden, ohne etwas im Kleingedruckten zu verstecken.",
    updated: "16. August 2026",
    contactPage: "Kontaktseite",
    privacyNotice: "Datenschutzerklärung",
    writeToUs: "schreib uns",
    sections: {
      whoWeAre: {
        title: "Wer wir sind",
        p1:
          "DoggMatch wird von KM TECH LABS, Org.-Nr. 934 044 029, Kristiansand, Norwegen, entwickelt und betrieben. Wenn wir unten „wir“ oder „uns“ sagen, meinen wir sie. Wenn wir „du“ sagen, meinen wir, wer auch immer die Website nutzt.",
      },
      whatItIs: {
        title: "Was DoggMatch ist",
        p1:
          "DoggMatch hilft dir herauszufinden, welcher Hund zu deinem Leben passen könnte, und hilft dir, dich um den Hund zu kümmern, den du bereits hast. Alles, was wir dir zeigen, stammt aus einer transparenten Berechnung, die auf dem basiert, was du uns erzählst, und dem, was jede Rasse typischerweise braucht. Es ist eine allgemeine Orientierung, keine professionelle Beurteilung.",
      },
      notAdvice: {
        title: "Wichtig: dies ist keine tierärztliche oder rechtliche Beratung",
        p1:
          "Unsere Inhalte zu Gesundheit, Ernährung, Training und Reisen sind allgemeine Informationen. Jeder Hund ist anders. Sprich immer mit deiner Tierärztin oder deinem Tierarzt über medizinische Belange, und überprüfe immer die offiziellen Regeln der Länder, in die und aus denen du reist — Grenz- und Einfuhrbestimmungen ändern sich, und nur die Behörden können bestätigen, was für dich gilt. Du bist selbst verantwortlich für Entscheidungen, die du über deinen Hund triffst.",
      },
      account: {
        title: "Dein Konto",
        p1:
          "Der Großteil von DoggMatch funktioniert ohne Konto. Erstellst du eines, behalte deine Anmeldedaten für dich, gib uns korrekte Informationen, und sag uns Bescheid, wenn du glaubst, dass jemand anderes Zugriff auf dein Konto erlangt hat. Du musst mindestens 16 Jahre alt sein. Du kannst dein Konto jederzeit schließen.",
      },
      membership: {
        title: "DoggMatch+ Mitgliedschaft und Abrechnung",
        items: [
          "DoggMatch+ kostet 7,99 € pro Monat oder 59,99 € pro Jahr. Die Preise enthalten die Mehrwertsteuer, wo sie anfällt.",
          "Zahlungen werden von Stripe abgewickelt. Wir sehen deine Kartendaten nie.",
          "Die Mitgliedschaft verlängert sich automatisch am Ende jedes Zeitraums, bis du sie kündigst.",
          "Du kannst jederzeit über dein Konto kündigen. Deine Mitgliedschaft bleibt dann bis zum Ende des bereits bezahlten Zeitraums aktiv und verlängert sich danach nicht mehr.",
          "Wenn wir den Preis ändern, sagen wir dir das mindestens 30 Tage bevor es dich betrifft, und du kannst kündigen, bevor es in Kraft tritt.",
          "Schlägt eine Zahlung fehl, können wir Mitgliedschaftsfunktionen pausieren, bis sie durchgeht.",
        ],
      },
      withdraw: {
        title: "Dein Widerrufsrecht (EU/EWR-Verbraucher)",
        p1Before:
          "Als Verbraucher in der EU/im EWR hast du gemäß der Verbraucherrechterichtlinie und dem norwegischen Widerrufsgesetz (angrerettloven) 14 Tage Zeit, einen Kauf zu widerrufen. Um es zu nutzen, sag uns einfach über die",
        p1After: "innerhalb von 14 Tagen nach dem Abonnieren Bescheid, und wir erstatten dir das Geld.",
        p2:
          "Da dir DoggMatch+ sofortigen Zugang zu digitalen Inhalten gewährt, stimmst du zu, dass wir sofort mit der Bereitstellung beginnen. Widerrufst du dann innerhalb der 14 Tage, können wir einen angemessenen Betrag für den Teil des Zeitraums abziehen, den du bereits genutzt hast.",
      },
      use: {
        title: "Wie du die Website nutzen darfst",
        intro: "Bitte tu Folgendes nicht:",
        items: [
          "Unsere Inhalte, Rassedaten oder Match-Ergebnisse abgreifen, kopieren oder weiterverkaufen.",
          "Versuchen, die Sicherheit des Dienstes zu brechen, zu überlasten oder zu umgehen.",
          "Die Website für etwas Rechtswidriges nutzen oder etwas Schädliches hochladen.",
          "DoggMatch-Ergebnisse als professionelle tierärztliche oder zuchtbezogene Beratung darstellen.",
        ],
      },
      content: {
        title: "Inhalte und Eigentum",
        p1:
          "Der Name DoggMatch, das Logo, das Design, die schriftlichen Materialien, die Rasseinhalte und die Matching-Logik gehören KM TECH LABS und sind durch Urheber- und Markenrecht geschützt. Du darfst sie für deinen eigenen persönlichen, nicht-kommerziellen Gebrauch nutzen — einschließlich des Ausdruckens eigener Dokumente und deiner Mitgliedskarte. Alles, was du in DoggMatch erstellst, wie deine Hundeprofile und Notizen, bleibt dein Eigentum.",
      },
      availability: {
        title: "Verfügbarkeit",
        p1:
          "Wir arbeiten hart daran, DoggMatch verfügbar zu halten, versprechen aber nicht, dass es niemals ausfällt. Wir können Funktionen aktualisieren, ändern oder einstellen. Sollten wir jemals eine kostenpflichtige Funktion einstellen, die du abonniert hast, erstatten wir dir den ungenutzten Teil deines Zeitraums.",
      },
      liability: {
        title: "Haftung",
        p1:
          "Nichts hier schränkt deine gesetzlichen Verbraucherrechte ein, und nichts schränkt unsere Haftung für Tod, Personenschäden, grobe Fahrlässigkeit oder Vorsatz ein. Darüber hinaus, und soweit gesetzlich zulässig, haften wir nicht für indirekte oder Folgeschäden, und unsere Gesamthaftung ist auf den Betrag begrenzt, den du uns in den 12 Monaten vor dem Anspruch gezahlt hast.",
      },
      privacy: {
        title: "Datenschutz",
        p1Before: "Wie wir mit deinen personenbezogenen Daten umgehen, erklären wir in unserer",
        p1After: ", die der DSGVO folgt.",
      },
      changes: {
        title: "Änderungen dieser Bedingungen",
        p1:
          "Ändern wir diese Bedingungen auf eine Weise, die für dich von Bedeutung ist, informieren wir Mitglieder mindestens 30 Tage vorher per E-Mail. Nutzt du DoggMatch danach weiter, bedeutet das, dass du die neuen Bedingungen akzeptierst.",
      },
      law: {
        title: "Recht und Streitigkeiten",
        p1:
          "Diese Bedingungen unterliegen norwegischem Recht, mit dem Kristiansand tingrett als ordentlichem Gerichtsstand. Bist du Verbraucher, behältst du den Schutz des zwingenden Rechts deines Wohnsitzlandes, und du kannst dort klagen.",
        p2Before: "Du kannst dich auch bei der norwegischen Verbraucherbehörde (Forbrukertilsynet)/Forbrukerrådet beschweren oder die Online-Streitbeilegungsplattform der Europäischen Kommission nutzen. Uns wäre es viel lieber, wenn du zuerst",
        p2After: "kontaktierst — die meisten Dinge lassen sich leicht klären.",
      },
    },
  },
  fr: {
    eyebrow: "Conditions",
    title: "Les conditions, en langage clair",
    intro:
      "Voici les conditions que vous acceptez en utilisant DoggMatch. Nous avons essayé de les rédiger comme nous vous les expliquerions en personne, sans rien cacher dans les petits caractères.",
    updated: "16 août 2026",
    contactPage: "page de contact",
    privacyNotice: "politique de confidentialité",
    writeToUs: "écrivez-nous",
    sections: {
      whoWeAre: {
        title: "Qui nous sommes",
        p1:
          "DoggMatch est conçu et exploité par KM TECH LABS, n° d'organisation 934 044 029, Kristiansand, Norvège. Quand nous disons « nous » ci-dessous, c'est de cette entité qu'il s'agit. Quand nous disons « vous », nous désignons quiconque utilise le site.",
      },
      whatItIs: {
        title: "Ce qu'est DoggMatch",
        p1:
          "DoggMatch vous aide à déterminer quel chien pourrait convenir à votre vie, et vous aide à prendre soin du chien que vous avez déjà. Tout ce que nous vous montrons provient d'un calcul transparent basé sur ce que vous nous dites et sur ce dont chaque race a généralement besoin. Il s'agit d'une orientation générale, pas d'une évaluation professionnelle.",
      },
      notAdvice: {
        title: "Important : ceci n'est pas un avis vétérinaire ou juridique",
        p1:
          "Notre contenu sur la santé, la nutrition, l'éducation et les voyages est une information générale. Chaque chien est différent. Parlez toujours à votre vétérinaire de toute question médicale, et vérifiez toujours les règles officielles des pays vers et depuis lesquels vous voyagez — les exigences frontalières et d'importation évoluent, et seules les autorités peuvent confirmer ce qui s'applique à vous. Vous êtes responsable des décisions que vous prenez concernant votre chien.",
      },
      account: {
        title: "Votre compte",
        p1:
          "La majeure partie de DoggMatch fonctionne sans compte. Si vous en créez un, gardez vos identifiants de connexion pour vous, fournissez-nous des informations exactes, et prévenez-nous si vous pensez que quelqu'un d'autre a accédé à votre compte. Vous devez avoir au moins 16 ans. Vous pouvez fermer votre compte quand vous le souhaitez.",
      },
      membership: {
        title: "Adhésion DoggMatch+ et facturation",
        items: [
          "DoggMatch+ coûte 7,99 € par mois ou 59,99 € par an. Les prix incluent la TVA lorsqu'elle s'applique.",
          "Les paiements sont traités par Stripe. Nous ne voyons jamais vos coordonnées bancaires.",
          "L'adhésion se renouvelle automatiquement à la fin de chaque période jusqu'à ce que vous l'annuliez.",
          "Vous pouvez annuler à tout moment depuis votre compte. Votre adhésion reste alors active jusqu'à la fin de la période déjà payée, et ne se renouvelle pas ensuite.",
          "Si nous modifions le prix, nous vous en informerons au moins 30 jours avant que cela ne vous affecte, et vous pourrez annuler avant que cela ne prenne effet.",
          "En cas d'échec d'un paiement, nous pouvons suspendre les fonctionnalités de l'adhésion jusqu'à ce qu'il soit effectué.",
        ],
      },
      withdraw: {
        title: "Votre droit de rétractation (consommateurs UE/EEE)",
        p1Before:
          "En tant que consommateur dans l'UE/EEE, vous disposez de 14 jours pour vous rétracter d'un achat, en vertu de la directive relative aux droits des consommateurs et de la loi norvégienne sur le droit de rétractation (angrerettloven). Pour l'exercer, informez-nous simplement via la",
        p1After: "dans les 14 jours suivant votre abonnement, et nous vous rembourserons.",
        p2:
          "Comme DoggMatch+ vous donne un accès immédiat au contenu numérique, vous acceptez que nous commencions à le fournir immédiatement. Si vous vous rétractez ensuite dans les 14 jours, nous pourrons déduire un montant raisonnable pour la partie de la période déjà utilisée.",
      },
      use: {
        title: "Comment vous pouvez utiliser le site",
        intro: "Merci de ne pas :",
        items: [
          "Extraire, copier ou revendre notre contenu, nos données sur les races ou nos résultats de correspondance.",
          "Tenter de casser, surcharger ou contourner la sécurité du service.",
          "Utiliser le site à des fins illégales, ou téléverser quoi que ce soit de nuisible.",
          "Présenter les résultats DoggMatch comme un avis professionnel vétérinaire ou d'élevage.",
        ],
      },
      content: {
        title: "Contenu et propriété",
        p1:
          "Le nom DoggMatch, le logo, le design, le matériel écrit, le contenu sur les races et la logique de correspondance appartiennent à KM TECH LABS et sont protégés par le droit d'auteur et le droit des marques. Vous pouvez les utiliser pour votre usage personnel et non commercial — y compris pour imprimer vos propres documents et votre carte de membre. Tout ce que vous créez dans DoggMatch, comme vos profils de chiens et vos notes, reste à vous.",
      },
      availability: {
        title: "Disponibilité",
        p1:
          "Nous travaillons dur pour maintenir DoggMatch disponible, mais nous ne promettons pas qu'il ne sera jamais indisponible. Nous pouvons mettre à jour, modifier ou interrompre des fonctionnalités. Si nous fermons un jour une fonctionnalité payante à laquelle vous êtes abonné, nous vous rembourserons la partie non utilisée de votre période.",
      },
      liability: {
        title: "Responsabilité",
        p1:
          "Rien ici ne limite vos droits légaux de consommateur, et rien ne limite notre responsabilité en cas de décès, de dommage corporel, de faute lourde ou intentionnelle. Au-delà, et dans la mesure permise par la loi, nous ne sommes pas responsables des pertes indirectes ou consécutives, et notre responsabilité totale est limitée au montant que vous nous avez payé au cours des 12 mois précédant la réclamation.",
      },
      privacy: {
        title: "Confidentialité",
        p1Before: "La manière dont nous traitons vos données personnelles est expliquée dans notre",
        p1After: ", qui respecte le RGPD.",
      },
      changes: {
        title: "Modifications de ces conditions",
        p1:
          "Si nous modifions ces conditions d'une manière qui vous concerne, nous en informerons les membres par e-mail au moins 30 jours à l'avance. Continuer à utiliser DoggMatch après cela signifie que vous acceptez les nouvelles conditions.",
      },
      law: {
        title: "Droit applicable et litiges",
        p1:
          "Ces conditions sont régies par le droit norvégien, avec le tribunal de Kristiansand (tingrett) comme juridiction ordinaire. Si vous êtes consommateur, vous conservez la protection des dispositions impératives du pays où vous résidez, et vous pouvez y intenter une action.",
        p2Before: "Vous pouvez également porter plainte auprès de l'autorité norvégienne de la consommation (Forbrukertilsynet)/Forbrukerrådet, ou utiliser la plateforme de règlement en ligne des litiges de la Commission européenne. Nous préférerions cependant de loin que vous",
        p2After: "d'abord — la plupart des choses se règlent facilement.",
      },
    },
  },
  nl: {
    eyebrow: "Voorwaarden",
    title: "De voorwaarden, in gewone taal",
    intro:
      "Dit zijn de voorwaarden die je accepteert wanneer je DoggMatch gebruikt. We hebben geprobeerd ze zo te schrijven als we ze persoonlijk aan je zouden uitleggen, zonder iets te verbergen in de kleine lettertjes.",
    updated: "16 augustus 2026",
    contactPage: "contactpagina",
    privacyNotice: "privacyverklaring",
    writeToUs: "schrijf ons",
    sections: {
      whoWeAre: {
        title: "Wie wij zijn",
        p1:
          "DoggMatch wordt gebouwd en beheerd door KM TECH LABS, org.nr. 934 044 029, Kristiansand, Noorwegen. Wanneer we hieronder \"wij\" of \"ons\" zeggen, bedoelen we hen. Wanneer we \"jij\" zeggen, bedoelen we wie de site ook gebruikt.",
      },
      whatItIs: {
        title: "Wat DoggMatch is",
        p1:
          "DoggMatch helpt je bepalen welke hond bij jouw leven zou kunnen passen, en helpt je zorgen voor de hond die je al hebt. Alles wat we je laten zien komt voort uit een transparante berekening op basis van wat je ons vertelt en wat elk ras doorgaans nodig heeft. Het is algemene begeleiding, geen professionele beoordeling.",
      },
      notAdvice: {
        title: "Belangrijk: dit is geen diergeneeskundig of juridisch advies",
        p1:
          "Ons materiaal over gezondheid, voeding, training en reizen is algemene informatie. Elke hond is anders. Praat altijd met je dierenarts over medische zaken, en controleer altijd de officiële regels van de landen waar je heen en vandaan reist — grens- en importvereisten veranderen, en alleen de autoriteiten kunnen bevestigen wat voor jou geldt. Je bent zelf verantwoordelijk voor beslissingen die je over je hond neemt.",
      },
      account: {
        title: "Jouw account",
        p1:
          "Het grootste deel van DoggMatch werkt zonder account. Als je er een aanmaakt, houd je inloggegevens voor jezelf, geef ons juiste informatie, en laat het ons weten als je denkt dat iemand anders toegang heeft gekregen tot je account. Je moet minstens 16 jaar oud zijn. Je kunt je account op elk moment sluiten.",
      },
      membership: {
        title: "DoggMatch+ lidmaatschap en facturering",
        items: [
          "DoggMatch+ kost € 7,99 per maand of € 59,99 per jaar. Prijzen zijn inclusief btw waar van toepassing.",
          "Betalingen worden verwerkt door Stripe. Wij zien je kaartgegevens nooit.",
          "Het lidmaatschap wordt automatisch verlengd aan het einde van elke periode totdat je opzegt.",
          "Je kunt op elk moment opzeggen via je account. Je lidmaatschap blijft dan actief tot het einde van de reeds betaalde periode, en wordt daarna niet verlengd.",
          "Als we de prijs wijzigen, laten we het je minstens 30 dagen van tevoren weten, en je kunt opzeggen voordat het van kracht wordt.",
          "Als een betaling mislukt, kunnen we lidmaatschapsfuncties pauzeren totdat deze slaagt.",
        ],
      },
      withdraw: {
        title: "Je herroepingsrecht (EU/EER-consumenten)",
        p1Before:
          "Als consument in de EU/EER heb je 14 dagen om een aankoop te herroepen, onder de Richtlijn consumentenrechten en de Noorse herroepingswet (angrerettloven). Om dit te gebruiken, laat het ons gewoon weten via de",
        p1After: "binnen 14 dagen na je abonnement, en we betalen je terug.",
        p2:
          "Omdat DoggMatch+ je onmiddellijke toegang geeft tot digitale content, ga je ermee akkoord dat we direct beginnen met leveren. Als je vervolgens binnen de 14 dagen herroept, kunnen we een redelijk bedrag aftrekken voor het deel van de periode dat je al hebt gebruikt.",
      },
      use: {
        title: "Hoe je de site mag gebruiken",
        intro: "Doe alsjeblieft het volgende niet:",
        items: [
          "Onze content, rasgegevens of matchresultaten scrapen, kopiëren of doorverkopen.",
          "Proberen de beveiliging van de dienst te doorbreken, te overbelasten of te omzeilen.",
          "De site gebruiken voor iets onwettigs, of iets schadelijks uploaden.",
          "DoggMatch-resultaten presenteren als professioneel diergeneeskundig of fokkerijadvies.",
        ],
      },
      content: {
        title: "Content en eigendom",
        p1:
          "De naam DoggMatch, het logo, het ontwerp, het geschreven materiaal, de rasinhoud en de matchlogica zijn eigendom van KM TECH LABS en worden beschermd door auteursrecht en merkenrecht. Je mag ze gebruiken voor je eigen persoonlijke, niet-commerciële gebruik — inclusief het afdrukken van je eigen documenten en ledenkaart. Alles wat je in DoggMatch maakt, zoals je hondprofielen en notities, blijft van jou.",
      },
      availability: {
        title: "Beschikbaarheid",
        p1:
          "We werken hard om DoggMatch beschikbaar te houden, maar beloven niet dat het nooit uitvalt. We kunnen functies bijwerken, wijzigen of stopzetten. Als we ooit een betaalde functie waarop je bent geabonneerd stopzetten, betalen we het ongebruikte deel van je periode terug.",
      },
      liability: {
        title: "Aansprakelijkheid",
        p1:
          "Niets hier beperkt je wettelijke consumentenrechten, en niets beperkt onze aansprakelijkheid voor overlijden, persoonlijk letsel, grove nalatigheid of opzet. Daarbuiten, en voor zover de wet dit toestaat, zijn we niet aansprakelijk voor indirecte of gevolgschade, en is onze totale aansprakelijkheid beperkt tot wat je ons hebt betaald in de 12 maanden voorafgaand aan de claim.",
      },
      privacy: {
        title: "Privacy",
        p1Before: "Hoe we met je persoonsgegevens omgaan, wordt uitgelegd in onze",
        p1After: ", die de AVG volgt.",
      },
      changes: {
        title: "Wijzigingen in deze voorwaarden",
        p1:
          "Als we deze voorwaarden op een manier wijzigen die voor jou van belang is, laten we leden dit minstens 30 dagen van tevoren per e-mail weten. Als je DoggMatch daarna blijft gebruiken, betekent dit dat je de nieuwe voorwaarden accepteert.",
      },
      law: {
        title: "Recht en geschillen",
        p1:
          "Deze voorwaarden worden beheerst door Noors recht, met de Kristiansand tingrett als gewone bevoegde rechtbank. Als je consument bent, behoud je de bescherming van het dwingende recht van het land waarin je woont, en kun je daar een zaak aanspannen.",
        p2Before: "Je kunt ook een klacht indienen bij de Noorse consumentenautoriteit (Forbrukertilsynet)/Forbrukerrådet, of het onlineplatform voor geschillenbeslechting van de Europese Commissie gebruiken. We zouden het echter veel liever hebben dat je eerst",
        p2After: "contact met ons opneemt — de meeste dingen zijn eenvoudig op te lossen.",
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
          <Link to={withLangPrefix("/contact")} className="text-foreground underline underline-offset-4">
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
          <Link to={withLangPrefix("/privacy")} className="text-foreground underline underline-offset-4">
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
          <Link to={withLangPrefix("/contact")} className="text-foreground underline underline-offset-4">
            {c.writeToUs}
          </Link>{" "}
          {s.law.p2After}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
