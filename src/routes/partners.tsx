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
import {
  partnerBenefits,
  partnerCategories,
  partnerFaq,
  partnerSteps,
} from "@/data/partners/content.en";
import { sendPartnerEnquiry } from "@/lib/partners/partner.functions";
import { cn } from "@/lib/utils";
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
  return (
    <section className="container-page pt-12 pb-6 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <Eyebrow>Partners</Eyebrow>
          <h1 className="display-lg mt-6 text-balance">
            Put your business in front of people who've just got a dog.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            DoggMatch helps people choose the right dog and then live well with them. Our members
            are buying beds, booking groomers, finding a vet and planning their first trip away.
            As a partner, you're the one they find — with an offer that makes them come to you.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#enquiry"
              className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[var(--shadow-lift)]"
            >
              Become a DoggMatch Partner
              <Arrow />
            </a>
            <p className="text-sm text-muted-foreground">
              No listing fee. No commission. A real person replies.
            </p>
          </div>
        </div>

        <figure className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border">
            <img
              src={partnerHero}
              alt="A dog owner and her golden retriever browsing the shelves of an independent pet shop"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-4 text-sm text-muted-foreground">
            The moment a member walks into your shop is the whole point.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Why */

function Why() {
  return (
    <Section className="container-page">
      <Eyebrow>What you get</Eyebrow>
      <h2 className="display-md mt-6 max-w-2xl text-balance">
        Six honest reasons to be listed with us.
      </h2>

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
          alt="A groomer gently brushing a small terrier in a bright salon"
          loading="lazy"
          width={1200}
          height={912}
          className="h-64 w-full rounded-[1.75rem] border border-border object-cover md:h-80"
        />
        <img
          src={partnerVet}
          alt="A veterinarian listening to a labrador's heart while the owner sits nearby"
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
  return (
    <Section className="border-y border-border bg-surface">
      <div className="container-page">
        <Eyebrow>Who we're looking for</Eyebrow>
        <h2 className="display-md mt-6 max-w-2xl text-balance">
          Eight kinds of business our members ask about most.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          If your work touches a dog's everyday life and you'd be happy for us to send a friend to
          you, you belong here.
        </p>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partnerCategories.map((c) => {
            const Icon = categoryIcons[c.id] ?? ShoppingBag;
            return (
              <li
                key={c.id}
                className="rounded-[1.5rem] border border-border bg-background p-6 transition-colors hover:border-foreground/20"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border border-border-strong text-foreground">
                  <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg tracking-tight">{c.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-14 grid gap-5 md:grid-cols-[1.3fr_1fr]">
          <img
            src={partnerOutdoors}
            alt="A hiker on a coastal trail at sunrise with his australian shepherd"
            loading="lazy"
            width={1600}
            height={912}
            className="h-64 w-full rounded-[1.75rem] border border-border object-cover md:h-96"
          />
          <img
            src={partnerTraining}
            alt="A trainer kneeling beside a border collie during an outdoor class"
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
  return (
    <Section className="container-page">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>At the counter</Eyebrow>
          <h2 className="display-md mt-6 text-balance">
            One scan, and you know they're a member.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every DoggMatch+ member carries a card with a QR code. Point any phone camera at it and
            a page opens showing whether the membership is active and until when. That's all it
            shows — no names, no addresses, nothing you have to store or look after.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Nothing to install, and no partner login to remember.",
              "Works from a printed card or the card on their phone.",
              "No personal data passes through your till.",
              "A DoggMatch Partner badge for your window and website.",
            ].map((line) => (
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
          <h3 className="mt-6 font-display text-2xl tracking-tight">How it goes, in practice</h3>
          <ol className="mt-6 space-y-5">
            {[
              "The member mentions DoggMatch+ and shows their card.",
              "You scan the QR code with any phone.",
              "The page says Active, with the date it runs until.",
              "You apply your offer. Done in about five seconds.",
            ].map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <span className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {step}
                </span>
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
  return (
    <Section className="border-y border-border bg-surface">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="display-md mt-6 text-balance">
              Four steps, and no small print to wade through.
            </h2>
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
              alt="A smiling owner with her rescue dog leaning against her outside a café"
              loading="lazy"
              width={1200}
              height={912}
              className="w-full rounded-[2rem] border border-border object-cover"
            />
            <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We'd rather have a short list of partners we genuinely trust than a long one nobody
              reads.
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ FAQ */

function Faq() {
  return (
    <Section className="container-page">
      <Eyebrow>Questions</Eyebrow>
      <h2 className="display-md mt-6 max-w-2xl text-balance">
        The things most businesses ask us first.
      </h2>
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
      setFormError("Sorry, we couldn't send your enquiry right now. Please try again in a moment.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Section id="enquiry" className="border-t border-border bg-surface scroll-mt-24">
      <div className="container-page max-w-3xl">
        <Eyebrow>Get in touch</Eyebrow>
        <h2 className="display-md mt-6 text-balance">Become a DoggMatch Partner.</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Tell us a little about your business and what you'd like to offer. Nothing here commits
          you to anything — it's the start of a conversation.
        </p>

        {done ? (
          <div className="animate-fade mt-10 rounded-3xl border border-border bg-background p-8 md:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground">
              <Check className="h-6 w-6" strokeWidth={2} aria-hidden />
            </span>
            <h3 className="mt-6 font-display text-2xl tracking-tight text-foreground">
              Thank you. Your enquiry is on its way.
            </h3>
            <p className="mt-3 text-muted-foreground">
              We've sent a short note to your inbox confirming it arrived, and a real person will
              read it and reply as soon as we can.
            </p>
            <Button tone="outline" className="mt-7" type="button" onClick={() => setDone(false)}>
              Send another enquiry
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
              <Field label="Company" id="company" error={errors["company"]}>
                <input
                  id="company"
                  name="company"
                  required
                  maxLength={150}
                  autoComplete="organization"
                  placeholder="Your business name"
                  className={fieldClass}
                />
              </Field>

              <Field label="Contact person" id="contact" error={errors["contact"]}>
                <input
                  id="contact"
                  name="contact"
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder="Who we'll be talking to"
                  className={fieldClass}
                />
              </Field>

              <Field label="Email" id="email" error={errors["email"]}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  required
                  maxLength={255}
                  autoComplete="email"
                  placeholder="you@yourbusiness.com"
                  className={fieldClass}
                />
              </Field>

              <Field label="Country" id="country" error={errors["country"]}>
                <input
                  id="country"
                  name="country"
                  required
                  maxLength={80}
                  autoComplete="country-name"
                  placeholder="Where you're based"
                  className={fieldClass}
                />
              </Field>

              <Field label="Website" id="website" hint="Optional" error={errors["website"]}>
                <input
                  id="website"
                  name="website"
                  maxLength={200}
                  autoComplete="url"
                  placeholder="yourbusiness.com"
                  className={fieldClass}
                />
              </Field>

              <Field label="Category" id="category" error={errors["category"]}>
                <select
                  id="category"
                  name="category"
                  required
                  defaultValue=""
                  className={cn(fieldClass, "appearance-none")}
                >
                  <option value="" disabled>
                    Pick the closest one
                  </option>
                  {partnerCategories.map((c) => (
                    <option key={c.id} value={c.label}>
                      {c.label}
                    </option>
                  ))}
                  <option value="Something else">Something else</option>
                </select>
              </Field>
            </div>

            <Field
              label="Proposed discount or benefit"
              id="offer"
              hint="A rough idea is fine"
              error={errors["offer"]}
            >
              <input
                id="offer"
                name="offer"
                required
                maxLength={300}
                placeholder="e.g. 15% off harnesses and leads, or a free first grooming consultation"
                className={fieldClass}
              />
            </Field>

            <Field label="Message" id="message" error={errors["message"]}>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                maxLength={4000}
                placeholder="Tell us about your business, who you look after, and anything you'd like to know."
                className={cn(fieldClass, "resize-y leading-relaxed")}
              />
            </Field>

            {/* Honeypot — hidden from people, catnip for bots. */}
            <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="fax">Leave this empty</label>
              <input id="fax" name="fax" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <Button type="submit" size="lg" disabled={busy} className="w-full sm:w-auto">
                <Handshake className="h-4 w-4" aria-hidden />
                {busy ? "Sending…" : "Become a DoggMatch Partner"}
              </Button>
              <p className="text-sm text-muted-foreground">
                We only use your details to reply to you. Nothing else.
              </p>
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