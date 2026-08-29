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
