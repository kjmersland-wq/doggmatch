import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useRef, useState } from "react";
import {
  Check,
  Handshake,
  QrCode,
  ShoppingBag,
  Scissors,
  GraduationCap,
  Stethoscope,
  ShieldCheck,
  Home,
  Bone,
  Mountain,
} from "lucide-react";
import { Button, Eyebrow, Section, Arrow } from "@/components/dogmatch/ui";
import { partnersContent } from "@/data/partners/content";
import { sendPartnerEnquiry } from "@/lib/partners/partner.functions";
import { cn } from "@/lib/utils";
import { useCopy } from "@/i18n";
import partnerHero from "@/assets/partner-hero.jpg";
import partnerGrooming from "@/assets/partner-grooming.jpg";
import partnerVet from "@/assets/partner-vet.jpg";
import partnerTraining from "@/assets/partner-training.jpg";
import partnerOutdoors from "@/assets/partner-outdoors.jpg";
import partnerMoment from "@/assets/partner-moment.jpg";

const title = "Become a DoggMatch Partner";
const description =
  "Offer an exclusive discount or benefit to DoggMatch+ members. No listing fee, no commission — just your business in front of dog owners who are already looking.";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/partners" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: PartnersPage,
});

const categoryIcons: Record<string, typeof ShoppingBag> = {
  equipment: ShoppingBag,
  grooming: Scissors,
  training: GraduationCap,
  vet: Stethoscope,
  insurance: ShieldCheck,
  boarding: Home,
  food: Bone,
  travel: Mountain,
};

const copy = {
  en: {
    hero: {
      eyebrow: "Partners",
      title: "Put your business in front of people who've just got a dog.",
      body: "DoggMatch helps people choose the right dog and then live well with them. Our members are buying beds, booking groomers, finding a vet and planning their first trip away. As a partner, you're the one they find — with an offer that makes them come to you.",
      cta: "Become a DoggMatch Partner",
      note: "No listing fee. No commission. A real person replies.",
      imgAlt: "A dog owner and her golden retriever browsing the shelves of an independent pet shop",
      caption: "The moment a member walks into your shop is the whole point.",
    },
    why: {
      eyebrow: "What you get",
      title: "Six honest reasons to be listed with us.",
      groomingAlt: "A groomer gently brushing a small terrier in a bright salon",
      vetAlt: "A veterinarian listening to a labrador's heart while the owner sits nearby",
    },
    categories: {
      eyebrow: "Who we're looking for",
      title: "Eight kinds of business our members ask about most.",
      body: "If your work touches a dog's everyday life and you'd be happy for us to send a friend to you, you belong here.",
      outdoorsAlt: "A hiker on a coastal trail at sunrise with his australian shepherd",
      trainingAlt: "A trainer kneeling beside a border collie during an outdoor class",
    },
    verification: {
      eyebrow: "At the counter",
      title: "One scan, and you know they're a member.",
      body: "Every DoggMatch+ member carries a card with a QR code. Point any phone camera at it and a page opens showing whether the membership is active and until when. That's all it shows — no names, no addresses, nothing you have to store or look after.",
      points: [
        "Nothing to install, and no partner login to remember.",
        "Works from a printed card or the card on their phone.",
        "No personal data passes through your till.",
        "A DoggMatch Partner badge for your window and website.",
      ],
      howTitle: "How it goes, in practice",
      steps: [
        "The member mentions DoggMatch+ and shows their card.",
        "You scan the QR code with any phone.",
        "The page says Active, with the date it runs until.",
        "You apply your offer. Done in about five seconds.",
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "Four steps, and no small print to wade through.",
      momentAlt: "A smiling owner with her rescue dog leaning against her outside a café",
      caption: "We'd rather have a short list of partners we genuinely trust than a long one nobody reads.",
    },
    faq: {
      eyebrow: "Questions",
      title: "The things most businesses ask us first.",
    },
    enquiry: {
      eyebrow: "Get in touch",
      title: "Become a DoggMatch Partner.",
      body: "Tell us a little about your business and what you'd like to offer. Nothing here commits you to anything — it's the start of a conversation.",
      thanksTitle: "Thank you. Your enquiry is on its way.",
      thanksBody: "We've sent a short note to your inbox confirming it arrived, and a real person will read it and reply as soon as we can.",
      again: "Send another enquiry",
      genericError: "Sorry, we couldn't send your enquiry right now. Please try again in a moment.",
      fields: {
        company: { label: "Company", placeholder: "Your business name" },
        contact: { label: "Contact person", placeholder: "Who we'll be talking to" },
        email: { label: "Email", placeholder: "you@yourbusiness.com" },
        country: { label: "Country", placeholder: "Where you're based" },
        website: { label: "Website", hint: "Optional", placeholder: "yourbusiness.com" },
        category: { label: "Category", placeholder: "Pick the closest one", other: "Something else" },
        offer: { label: "Proposed discount or benefit", hint: "A rough idea is fine", placeholder: "e.g. 15% off harnesses and leads, or a free first grooming consultation" },
        message: { label: "Message", placeholder: "Tell us about your business, who you look after, and anything you'd like to know." },
        honeypot: "Leave this empty",
      },
      sending: "Sending…",
      submit: "Become a DoggMatch Partner",
      privacy: "We only use your details to reply to you. Nothing else.",
    },
  },
  no: {
    hero: {
      eyebrow: "Partnere",
      title: "Vis bedriften din frem for folk som nettopp har fått hund.",
      body: "DoggMatch hjelper folk å velge riktig hund, og deretter leve godt sammen med den. Medlemmene våre kjøper senger, bestiller time hos groomer, finner veterinær og planlegger den første turen bort. Som partner er det deg de finner — med et tilbud som får dem til å komme til deg.",
      cta: "Bli DoggMatch-partner",
      note: "Ingen oppføringsavgift. Ingen provisjon. Et ekte menneske svarer.",
      imgAlt: "En hundeeier og gullhunden hennes ser gjennom hyllene i en lokal dyrebutikk",
      caption: "Øyeblikket et medlem går inn i butikken din, er hele poenget.",
    },
    why: {
      eyebrow: "Det du får",
      title: "Seks ærlige grunner til å bli listet hos oss.",
      groomingAlt: "En groomer børster en liten terrier forsiktig i en lys salong",
      vetAlt: "En veterinær som lytter på hjertet til en labrador mens eieren sitter ved siden av",
    },
    categories: {
      eyebrow: "Hvem vi ser etter",
      title: "Åtte typer bedrifter medlemmene våre spør oftest om.",
      body: "Jobber du med noe som berører hundens hverdag, og setter du pris på at vi sender en venn din vei, hører du hjemme her.",
      outdoorsAlt: "En turgåer på en kyststi ved soloppgang sammen med sin australske gjeterhund",
      trainingAlt: "En trener som sitter på huk ved siden av en border collie under en utekurs",
    },
    verification: {
      eyebrow: "Ved disken",
      title: "Ett skann, og du vet at de er medlem.",
      body: "Hvert DoggMatch+-medlem har et kort med en QR-kode. Hold et vilkårlig telefonkamera mot den, og en side åpnes som viser om medlemskapet er aktivt og til når. Det er alt den viser — ingen navn, ingen adresser, ingenting du må lagre eller passe på.",
      points: [
        "Ingenting å installere, og ingen partnerinnlogging å huske.",
        "Fungerer fra et utskrevet kort eller kortet på telefonen deres.",
        "Ingen personopplysninger går gjennom kassen din.",
        "Et DoggMatch-partnermerke til vinduet og nettsiden din.",
      ],
      howTitle: "Slik går det til, i praksis",
      steps: [
        "Medlemmet nevner DoggMatch+ og viser kortet sitt.",
        "Du skanner QR-koden med en vilkårlig telefon.",
        "Siden viser Aktiv, med datoen det gjelder til.",
        "Du gir tilbudet ditt. Unnagjort på rundt fem sekunder.",
      ],
    },
    how: {
      eyebrow: "Slik fungerer det",
      title: "Fire steg, uten liten skrift å vasse gjennom.",
      momentAlt: "En smilende eier med redningshunden sin lent inntil seg utenfor en kafé",
      caption: "Vi vil heller ha en kort liste med partnere vi virkelig stoler på enn en lang ingen leser.",
    },
    faq: {
      eyebrow: "Spørsmål",
      title: "Det de fleste bedrifter spør oss om først.",
    },
    enquiry: {
      eyebrow: "Ta kontakt",
      title: "Bli DoggMatch-partner.",
      body: "Fortell oss litt om bedriften din og hva du ønsker å tilby. Ingenting her forplikter deg til noe — det er starten på en samtale.",
      thanksTitle: "Takk. Henvendelsen din er på vei.",
      thanksBody: "Vi har sendt en kort bekreftelse til innboksen din, og et ekte menneske vil lese den og svare så fort vi kan.",
      again: "Send en ny henvendelse",
      genericError: "Beklager, vi klarte ikke å sende henvendelsen din akkurat nå. Prøv gjerne igjen om et lite øyeblikk.",
      fields: {
        company: { label: "Bedrift", placeholder: "Navnet på bedriften din" },
        contact: { label: "Kontaktperson", placeholder: "Hvem vi kommer til å snakke med" },
        email: { label: "E-post", placeholder: "deg@bedriften.no" },
        country: { label: "Land", placeholder: "Hvor dere holder til" },
        website: { label: "Nettside", hint: "Valgfritt", placeholder: "bedriften.no" },
        category: { label: "Kategori", placeholder: "Velg det som passer best", other: "Noe annet" },
        offer: { label: "Foreslått rabatt eller fordel", hint: "En omtrentlig idé holder", placeholder: "f.eks. 15 % rabatt på seler og bånd, eller en gratis første time hos groomer" },
        message: { label: "Melding", placeholder: "Fortell oss om bedriften din, hvem dere er til for, og alt du lurer på." },
        honeypot: "La dette stå tomt",
      },
      sending: "Sender…",
      submit: "Bli DoggMatch-partner",
      privacy: "Vi bruker opplysningene dine kun til å svare deg. Ikke til noe annet.",
    },
  },
} as const;

function PartnersPage() {
  return (
    <div>
      <Hero />
      <Why />
      <Categories />
      <Verification />
      <How />
      <Faq />
      <EnquirySection />
    </div>
  );
}

/* ------------------------------------------------------------------ Hero */

function Hero() {
  const c = useCopy(copy).hero;
  return (
    <section className="container-page pt-12 pb-6 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h1 className="display-lg mt-6 text-balance">{c.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.body}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#enquiry"
              className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[var(--shadow-lift)]"
            >
              {c.cta}
              <Arrow />
            </a>
            <p className="text-sm text-muted-foreground">{c.note}</p>
          </div>
        </div>

        <figure className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border">
            <img
              src={partnerHero}
              alt={c.imgAlt}
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 text-sm text-muted-foreground">{c.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Why */

function Why() {
  const c = useCopy(copy).why;
  const { partnerBenefits } = partnersContent();
  return (
    <Section className="container-page">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h2 className="display-md mt-6 max-w-2xl text-balance">{c.title}</h2>

      <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {partnerBenefits.map((b) => (
          <article key={b.id}>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/10 text-accent">
              <Handshake className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-xl tracking-tight text-foreground">{b.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{b.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        <img
          src={partnerGrooming}
          alt={c.groomingAlt}
          loading="lazy"
          width={1200}
          height={912}
          className="h-64 w-full rounded-[1.75rem] border border-border object-cover md:h-80"
        />
        <img
          src={partnerVet}
          alt={c.vetAlt}
          loading="lazy"
          width={1200}
          height={912}
          className="h-64 w-full rounded-[1.75rem] border border-border object-cover md:h-80"
        />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------ Categories */

function Categories() {
  const c = useCopy(copy).categories;
  const { partnerCategories } = partnersContent();
  return (
    <Section className="border-y border-border bg-surface">
      <div className="container-page">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="display-md mt-6 max-w-2xl text-balance">{c.title}</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.body}</p>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partnerCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] ?? ShoppingBag;
            return (
              <li
                key={cat.id}
                className="rounded-[1.5rem] border border-border bg-background p-6 transition-colors hover:border-foreground/20"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border border-border-strong text-foreground">
                  <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg tracking-tight">{cat.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.blurb}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-14 grid gap-5 md:grid-cols-[1.3fr_1fr]">
          <img
            src={partnerOutdoors}
            alt={c.outdoorsAlt}
            loading="lazy"
            width={1600}
            height={912}
            className="h-64 w-full rounded-[1.75rem] border border-border object-cover md:h-96"
          />
          <img
            src={partnerTraining}
            alt={c.trainingAlt}
            loading="lazy"
            width={1200}
            height={912}
            className="h-64 w-full rounded-[1.75rem] border border-border object-cover md:h-96"
          />
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------- Verification */

function Verification() {
  const c = useCopy(copy).verification;
  return (
    <Section className="container-page">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="display-md mt-6 text-balance">{c.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.body}</p>
          <ul className="mt-8 space-y-4">
            {c.points.map((line) => (
              <li key={line} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={2.4} aria-hidden />
                <span className="text-muted-foreground">{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-border bg-surface p-8 md:p-10">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
            <QrCode className="h-6 w-6" aria-hidden />
          </span>
          <h3 className="mt-6 font-display text-2xl tracking-tight">{c.howTitle}</h3>
          <ol className="mt-6 space-y-5">
            {c.steps.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <span className="text-[0.9375rem] leading-relaxed text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ How */

function How() {
  const c = useCopy(copy).how;
  const { partnerSteps } = partnersContent();
  return (
    <Section className="border-y border-border bg-surface">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="display-md mt-6 text-balance">{c.title}</h2>
            <ol className="mt-12 space-y-10">
              {partnerSteps.map((s) => (
                <li key={s.no} className="grid grid-cols-[auto_1fr] gap-6">
                  <span className="font-mono text-sm text-accent">{s.no}</span>
                  <div>
                    <h3 className="font-display text-xl tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <figure className="lg:sticky lg:top-28 lg:self-start">
            <img
              src={partnerMoment}
              alt={c.momentAlt}
              loading="lazy"
              width={1200}
              height={912}
              className="w-full rounded-[2rem] border border-border object-cover"
            />
            <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.caption}</figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ FAQ */

function Faq() {
  const c = useCopy(copy).faq;
  const { partnerFaq } = partnersContent();
  return (
    <Section className="container-page">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h2 className="display-md mt-6 max-w-2xl text-balance">{c.title}</h2>
      <dl className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {partnerFaq.map((f) => (
          <div key={f.q}>
            <dt className="font-display text-lg tracking-tight text-foreground">{f.q}</dt>
            <dd className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{f.a}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

/* -------------------------------------------------------------- Enquiry */

const fieldClass =
  "w-full rounded-2xl border border-border-strong bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

function EnquirySection() {
  const c = useCopy(copy).enquiry;
  const { partnerCategories } = partnersContent();
  const send = useServerFn(sendPartnerEnquiry);
  const formRef = useRef<HTMLFormElement>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setFormError(null);
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload = {
      company: String(fd.get("company") ?? ""),
      contact: String(fd.get("contact") ?? ""),
      email: String(fd.get("email") ?? ""),
      country: String(fd.get("country") ?? ""),
      website: String(fd.get("website") ?? ""),
      category: String(fd.get("category") ?? ""),
      offer: String(fd.get("offer") ?? ""),
      message: String(fd.get("message") ?? ""),
      fax: String(fd.get("fax") ?? ""),
    };

    try {
      const res = await send({ data: payload });
      if (res.ok) {
        formRef.current?.reset();
        setDone(true);
      } else {
        setErrors(res.fieldErrors ?? {});
        setFormError(res.message);
      }
    } catch {
      setFormError(c.genericError);
    } finally {
      setBusy(false);
    }
  }

  return (
    <Section id="enquiry" className="border-t border-border bg-surface scroll-mt-24">
      <div className="container-page max-w-3xl">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="display-md mt-6 text-balance">{c.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{c.body}</p>

        {done ? (
          <div className="animate-fade mt-10 rounded-3xl border border-border bg-background p-8 md:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground">
              <Check className="h-6 w-6" strokeWidth={2} aria-hidden />
            </span>
            <h3 className="mt-6 font-display text-2xl tracking-tight text-foreground">{c.thanksTitle}</h3>
            <p className="mt-3 text-muted-foreground">{c.thanksBody}</p>
            <Button tone="outline" className="mt-7" type="button" onClick={() => setDone(false)}>
              {c.again}
              <Arrow />
            </Button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={onSubmit} noValidate className="mt-10 space-y-6">
            {formError && (
              <p
                role="alert"
                className="animate-fade rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground"
              >
                {formError}
              </p>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label={c.fields.company.label} id="company" error={errors["company"]}>
                <input
                  id="company"
                  name="company"
                  required
                  maxLength={150}
                  autoComplete="organization"
                  placeholder={c.fields.company.placeholder}
                  className={fieldClass}
                />
              </Field>

              <Field label={c.fields.contact.label} id="contact" error={errors["contact"]}>
                <input
                  id="contact"
                  name="contact"
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder={c.fields.contact.placeholder}
                  className={fieldClass}
                />
              </Field>

              <Field label={c.fields.email.label} id="email" error={errors["email"]}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  required
                  maxLength={255}
                  autoComplete="email"
                  placeholder={c.fields.email.placeholder}
                  className={fieldClass}
                />
              </Field>

              <Field label={c.fields.country.label} id="country" error={errors["country"]}>
                <input
                  id="country"
                  name="country"
                  required
                  maxLength={80}
                  autoComplete="country-name"
                  placeholder={c.fields.country.placeholder}
                  className={fieldClass}
                />
              </Field>

              <Field label={c.fields.website.label} id="website" hint={c.fields.website.hint} error={errors["website"]}>
                <input
                  id="website"
                  name="website"
                  maxLength={200}
                  autoComplete="url"
                  placeholder={c.fields.website.placeholder}
                  className={fieldClass}
                />
              </Field>

              <Field label={c.fields.category.label} id="category" error={errors["category"]}>
                <select
                  id="category"
                  name="category"
                  required
                  defaultValue=""
                  className={cn(fieldClass, "appearance-none")}
                >
                  <option value="" disabled>
                    {c.fields.category.placeholder}
                  </option>
                  {partnerCategories.map((cat) => (
                    <option key={cat.id} value={cat.label}>
                      {cat.label}
                    </option>
                  ))}
                  <option value="Something else">{c.fields.category.other}</option>
                </select>
              </Field>
            </div>

            <Field
              label={c.fields.offer.label}
              id="offer"
              hint={c.fields.offer.hint}
              error={errors["offer"]}
            >
              <input
                id="offer"
                name="offer"
                required
                maxLength={300}
                placeholder={c.fields.offer.placeholder}
                className={fieldClass}
              />
            </Field>

            <Field label={c.fields.message.label} id="message" error={errors["message"]}>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                maxLength={4000}
                placeholder={c.fields.message.placeholder}
                className={cn(fieldClass, "resize-y leading-relaxed")}
              />
            </Field>

            {/* Honeypot — hidden from people, catnip for bots. */}
            <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="fax">{c.fields.honeypot}</label>
              <input id="fax" name="fax" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <Button type="submit" size="lg" disabled={busy} className="w-full sm:w-auto">
                <Handshake className="h-4 w-4" aria-hidden />
                {busy ? c.sending : c.submit}
              </Button>
              <p className="text-sm text-muted-foreground">{c.privacy}</p>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}

function Field({
  label,
  id,
  hint,
  error,
  children,
}: {
  label: string;
  id: string;
  hint?: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 flex items-baseline gap-2 text-sm font-medium text-foreground"
      >
        {label}
        {hint && <span className="text-xs font-normal text-muted-foreground">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
