import { SectionHead } from "@/components/dogmatch/journey/parts";
import { Section } from "@/components/dogmatch/ui";
import { MemberCardBack, MemberCardFront } from "@/components/dogmatch/plus/member-card";
import { benefitCategories } from "@/data/plus/benefits";
import type { MemberCard } from "@/lib/plus/member-card.functions";
import { useCopy } from "@/i18n";

/** A made-up card, only for showing what members get. Not a real membership. */
const sampleCard: MemberCard = {
  memberId: "DM-4F7K-92QX",
  name: "Kari Nordmann",
  status: "active",
  plan: "yearly",
  validThrough: "2027-08-16T00:00:00.000Z",
};

const copy = {
  en: {
    eyebrow: "Yours as a member",
    title: "A member card you can actually hold",
    body: "Every member gets a personal DoggMatch+ card. Print it at real card size, keep it in your wallet, and anyone can scan the code on the back to see that it's genuine.",
    caption: "Example card. Names, ID and dates are made up.",
    features: [
      ["Your name and a unique member ID", "Something like DM-4F7K-92QX — yours alone."],
      ["Status and valid-through date", "So it's always clear the membership is live."],
      ["Your photo when we have one", "Taken from your account or your dog's profile."],
      ["A code on the back", "Scan it and a simple page confirms the card is real."],
      ["Printed at 85.6 × 54 mm", "Exactly the size of a bank card, on stiff paper."],
    ],
    comingSoon: "Coming soon",
    discountsTitle: "Member discounts",
    discountsBody:
      "We're talking to the first partners now, and member discounts will most likely land soon. When an offer is genuinely worth your time, it simply appears on your account page — no email, no fuss.",
  },
  no: {
    eyebrow: "Som medlem får du",
    title: "Et medlemskort du faktisk kan holde i hånden",
    body: "Alle medlemmer får sitt eget DoggMatch+-kort. Skriv det ut i ekte kortstørrelse, ha det i lommeboken, og hvem som helst kan skanne koden på baksiden for å se at det er ekte.",
    caption: "Eksempelkort. Navn, ID og datoer er oppdiktet.",
    features: [
      ["Navnet ditt og en unik medlems-ID", "Noe som DM-4F7K-92QX — bare din."],
      ["Status og gyldig til-dato", "Så det alltid er tydelig at medlemskapet er aktivt."],
      ["Bildet ditt når vi har et", "Hentet fra kontoen din eller hundens profil."],
      ["En kode på baksiden", "Skann den, og en enkel side bekrefter at kortet er ekte."],
      ["Trykket i 85,6 × 54 mm", "Nøyaktig størrelsen på et bankkort, på stivt papir."],
    ],
    comingSoon: "Kommer snart",
    discountsTitle: "Medlemsrabatter",
    discountsBody:
      "Vi snakker med de første partnerne nå, og medlemsrabatter kommer trolig snart. Når et tilbud er genuint verdt tiden din, dukker det ganske enkelt opp på kontosiden din — ingen e-post, ingen ståhei.",
  },
  pl: {
    eyebrow: "Jako członek otrzymujesz",
    title: "Kartę członkowską, którą naprawdę możesz trzymać w ręku",
    body: "Każdy członek otrzymuje osobistą kartę DoggMatch+. Wydrukuj ją w prawdziwym rozmiarze karty, trzymaj w portfelu, a każdy może zeskanować kod z tyłu, by sprawdzić, że jest prawdziwa.",
    caption: "Przykładowa karta. Imię, ID i daty są zmyślone.",
    features: [
      ["Twoje imię i unikalny numer ID", "Coś w stylu DM-4F7K-92QX — tylko twoje."],
      ["Status i data ważności", "Żeby zawsze było jasne, że członkostwo jest aktywne."],
      ["Twoje zdjęcie, jeśli je mamy", "Pobrane z twojego konta lub profilu psa."],
      ["Kod z tyłu karty", "Zeskanuj go, a prosta strona potwierdzi, że karta jest prawdziwa."],
      ["Wydrukowana w 85,6 × 54 mm", "Dokładnie w rozmiarze karty bankowej, na sztywnym papierze."],
    ],
    comingSoon: "Wkrótce",
    discountsTitle: "Zniżki dla członków",
    discountsBody:
      "Rozmawiamy teraz z pierwszymi partnerami i zniżki dla członków najprawdopodobniej pojawią się już wkrótce. Gdy oferta będzie naprawdę warta twojego czasu, po prostu pojawi się na stronie konta — bez e-maili, bez zamieszania.",
  },
  dk: {
    eyebrow: "Som medlem får du",
    title: "Et medlemskort, du rent faktisk kan holde i hånden",
    body: "Alle medlemmer får deres eget DoggMatch+-kort. Print det i ægte kortstørrelse, hav det i tegnebogen, og alle kan scanne koden på bagsiden for at se, at det er ægte.",
    caption: "Eksempelkort. Navn, ID og datoer er opdigtet.",
    features: [
      ["Dit navn og et unikt medlems-ID", "Noget i stil med DM-4F7K-92QX — kun dit eget."],
      ["Status og gyldig-til-dato", "Så det altid er tydeligt, at medlemskabet er aktivt."],
      ["Dit foto, når vi har et", "Hentet fra din konto eller din hunds profil."],
      ["En kode på bagsiden", "Scan den, og en enkel side bekræfter, at kortet er ægte."],
      ["Trykt i 85,6 × 54 mm", "Præcis størrelsen på et betalingskort, på stift papir."],
    ],
    comingSoon: "Kommer snart",
    discountsTitle: "Medlemsrabatter",
    discountsBody:
      "Vi taler med de første partnere lige nu, og medlemsrabatter lander højst sandsynligt snart. Når et tilbud er reelt værd din tid, dukker det ganske enkelt op på din kontoside — ingen e-mail, ingen ballade.",
  },
  se: {
    eyebrow: "Som medlem får du",
    title: "Ett medlemskort du faktiskt kan hålla i handen",
    body: "Alla medlemmar får ett eget DoggMatch+-kort. Skriv ut det i verklig kortstorlek, ha det i plånboken, och vem som helst kan skanna koden på baksidan för att se att det är äkta.",
    caption: "Exempelkort. Namn, ID och datum är påhittade.",
    features: [
      ["Ditt namn och ett unikt medlems-ID", "Något i stil med DM-4F7K-92QX — bara ditt."],
      ["Status och giltigt-till-datum", "Så det alltid är tydligt att medlemskapet är aktivt."],
      ["Ditt foto när vi har ett", "Hämtat från ditt konto eller din hunds profil."],
      ["En kod på baksidan", "Skanna den, så bekräftar en enkel sida att kortet är äkta."],
      ["Tryckt i 85,6 × 54 mm", "Exakt samma storlek som ett bankkort, på styvt papper."],
    ],
    comingSoon: "Kommer snart",
    discountsTitle: "Medlemsrabatter",
    discountsBody:
      "Vi pratar med de första partnerna just nu, och medlemsrabatter kommer sannolikt snart. När ett erbjudande verkligen är värt din tid dyker det helt enkelt upp på din kontosida — inga mejl, inget krångel.",
  },
  fi: {
    eyebrow: "Jäsenenä saat",
    title: "Jäsenkortin, jota voit oikeasti pidellä kädessäsi",
    body: "Jokainen jäsen saa oman DoggMatch+-korttinsa. Tulosta se oikeassa korttikoossa, pidä sitä lompakossa, ja kuka tahansa voi skannata takana olevan koodin nähdäkseen, että se on aito.",
    caption: "Esimerkkikortti. Nimi, ID ja päivämäärät ovat keksittyjä.",
    features: [
      ["Nimesi ja yksilöllinen jäsentunnus", "Jotain tyyliin DM-4F7K-92QX — vain sinun."],
      ["Tila ja voimassaolopäivä", "Jotta jäsenyyden voimassaolo on aina selvää."],
      ["Valokuvasi, kun meillä on sellainen", "Otettu tililtäsi tai koirasi profiilista."],
      ["Koodi kortin takana", "Skannaa se, ja yksinkertainen sivu vahvistaa kortin aitouden."],
      ["Painettu koossa 85,6 × 54 mm", "Täsmälleen pankkikortin kokoinen, jäykälle paperille."],
    ],
    comingSoon: "Tulossa pian",
    discountsTitle: "Jäsenalennukset",
    discountsBody:
      "Neuvottelemme parhaillaan ensimmäisten kumppaneiden kanssa, ja jäsenalennukset ovat todennäköisesti tulossa pian. Kun tarjous on aidosti aikasi arvoinen, se ilmestyy yksinkertaisesti tilisivullesi — ei sähköposteja, ei häslinkiä.",
  },
  de: {
    eyebrow: "Als Mitglied erhalten Sie",
    title: "Eine Mitgliedskarte, die Sie wirklich in der Hand halten können",
    body: "Jedes Mitglied bekommt eine persönliche DoggMatch+-Karte. Drucken Sie sie in echter Kartengröße aus, tragen Sie sie in Ihrem Portemonnaie, und jeder kann den Code auf der Rückseite scannen, um zu sehen, dass sie echt ist.",
    caption: "Beispielkarte. Name, ID und Daten sind erfunden.",
    features: [
      ["Ihr Name und eine eindeutige Mitglieds-ID", "So etwas wie DM-4F7K-92QX — nur Ihre."],
      ["Status und Gültigkeitsdatum", "Damit immer klar ist, dass die Mitgliedschaft aktiv ist."],
      ["Ihr Foto, sobald wir eines haben", "Aus Ihrem Konto oder dem Profil Ihres Hundes."],
      ["Ein Code auf der Rückseite", "Scannen Sie ihn, und eine einfache Seite bestätigt, dass die Karte echt ist."],
      ["Gedruckt in 85,6 × 54 mm", "Genau die Größe einer Bankkarte, auf festem Papier."],
    ],
    comingSoon: "Demnächst",
    discountsTitle: "Mitgliederrabatte",
    discountsBody:
      "Wir sprechen gerade mit den ersten Partnern, und Mitgliederrabatte kommen höchstwahrscheinlich bald. Sobald ein Angebot wirklich Ihre Zeit wert ist, erscheint es einfach auf Ihrer Kontoseite — keine E-Mail, kein Aufwand.",
  },
  fr: {
    eyebrow: "En tant que membre, vous recevez",
    title: "Une carte de membre que vous pouvez vraiment tenir en main",
    body: "Chaque membre reçoit sa carte DoggMatch+ personnelle. Imprimez-la à la taille réelle d'une carte, gardez-la dans votre portefeuille, et n'importe qui peut scanner le code au dos pour vérifier qu'elle est authentique.",
    caption: "Carte exemple. Nom, identifiant et dates sont fictifs.",
    features: [
      ["Votre nom et un identifiant de membre unique", "Quelque chose comme DM-4F7K-92QX — rien qu'à vous."],
      ["Statut et date de validité", "Pour que ce soit toujours clair que l'adhésion est active."],
      ["Votre photo dès que nous en avons une", "Tirée de votre compte ou du profil de votre chien."],
      ["Un code au dos", "Scannez-le, et une page simple confirme que la carte est authentique."],
      ["Imprimée en 85,6 × 54 mm", "Exactement la taille d'une carte bancaire, sur papier rigide."],
    ],
    comingSoon: "Bientôt disponible",
    discountsTitle: "Réductions membres",
    discountsBody:
      "Nous parlons en ce moment avec les premiers partenaires, et les réductions membres arriveront très probablement bientôt. Quand une offre vaut vraiment votre temps, elle apparaît simplement sur votre page de compte — sans e-mail, sans tracas.",
  },
  nl: {
    eyebrow: "Als lid krijgt u",
    title: "Een ledenpas die u echt in handen kunt houden",
    body: "Elk lid krijgt een persoonlijke DoggMatch+-pas. Print hem op echt pasformaat, bewaar hem in uw portemonnee, en iedereen kan de code op de achterkant scannen om te zien dat hij echt is.",
    caption: "Voorbeeldpas. Naam, ID en data zijn verzonnen.",
    features: [
      ["Uw naam en een unieke leden-ID", "Iets als DM-4F7K-92QX — alleen van u."],
      ["Status en geldig-tot-datum", "Zodat altijd duidelijk is dat het lidmaatschap actief is."],
      ["Uw foto zodra we die hebben", "Gehaald uit uw account of het profiel van uw hond."],
      ["Een code op de achterkant", "Scan hem, en een simpele pagina bevestigt dat de pas echt is."],
      ["Gedrukt op 85,6 × 54 mm", "Precies het formaat van een bankpas, op stevig papier."],
    ],
    comingSoon: "Binnenkort beschikbaar",
    discountsTitle: "Ledenkortingen",
    discountsBody:
      "We praten nu met de eerste partners, en ledenkortingen komen hoogstwaarschijnlijk binnenkort. Zodra een aanbieding echt uw tijd waard is, verschijnt hij gewoon op uw accountpagina — geen e-mail, geen gedoe.",
  },
} as const;

/** Shows the member card and the partner offers we're working on. */
export function MemberCardShowcase() {
  const c = useCopy(copy);
  const categories = benefitCategories();

  return (
    <Section className="container-page pt-0">
      <SectionHead eyebrow={c.eyebrow} title={c.title} body={c.body} />

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
        <div className="rounded-[2rem] border border-border bg-surface p-6 md:p-10">
          <div className="mc-sheet justify-center">
            <MemberCardFront card={sampleCard} />
            <MemberCardBack card={sampleCard} />
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">{c.caption}</p>
        </div>

        <div className="max-w-lg">
          <ul className="grid gap-4">
            {c.features.map(([head, body]) => (
              <li key={head} className="rounded-[1.25rem] border border-border p-5">
                <p className="font-display text-lg tracking-tight">{head}</p>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-[1.25rem] border border-dashed border-border p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">{c.comingSoon}</p>
            <h3 className="mt-2 font-display text-xl tracking-tight">{c.discountsTitle}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{c.discountsBody}</p>
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
          </div>
        </div>
      </div>
    </Section>
  );
}
