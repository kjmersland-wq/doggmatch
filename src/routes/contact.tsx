import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useRef, useState } from "react";
import { Check, Mail } from "lucide-react";
import { Button, Eyebrow, Arrow } from "@/components/dogmatch/ui";
import { sendContactMessage } from "@/lib/contact/contact.functions";
import { cn } from "@/lib/utils";
import { useCopy } from "@/i18n";
import { seoLinks, abs } from "@/lib/seo";

const title = "Contact DoggMatch";
const description =
  "Get in touch with DoggMatch. We're here to help with questions about finding the right dog, training, health, travel and life with your dog.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/contact") },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: seoLinks("/contact"),
  }),
  component: ContactPage,
});

const reasonKeys = [
  "general",
  "matching",
  "training",
  "health",
  "myDog",
  "technical",
  "partnership",
  "other",
] as const;

const fieldClass =
  "w-full rounded-2xl border border-border-strong bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

const copy = {
  en: {
    eyebrow: "Contact",
    heading: "We'd love to hear from you.",
    intro:
      "A question about finding the right dog, training, food, health or travelling together — or something that isn't working as it should. Write to us and a real person will answer.",
    doneHeading: "Thank you. Your message has been sent.",
    doneBody:
      "We'll get back to you as soon as we can. Keep an eye on your inbox — we've sent you a short note confirming it arrived.",
    writeAnother: "Write another message",
    nameLabel: "Your name",
    namePlaceholder: "Kari Nordmann",
    emailLabel: "Your email",
    emailPlaceholder: "you@example.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "What's it about?",
    reasonLabel: "What's it about?",
    reasonHint: "Optional",
    reasonPlaceholder: "Choose one, if you like",
    reasons: {
      general: "General question",
      matching: "Dog matching",
      training: "Training",
      health: "Health & Nutrition",
      myDog: "My Dog",
      technical: "Technical problem",
      partnership: "Partnership",
      other: "Other",
    },
    messageLabel: "Your message",
    messagePlaceholder: "Tell us as much or as little as you like.",
    send: "Send Message",
    sending: "Sending…",
    onlyUse: "We only use your details to answer you. Nothing else.",
    sendError: "Sorry, we couldn't send your message right now. Please try again in a moment.",
  },
  no: {
    eyebrow: "Kontakt",
    heading: "Vi vil gjerne høre fra deg.",
    intro:
      "Et spørsmål om å finne riktig hund, trening, mat, helse eller reise sammen — eller noe som ikke virker som det skal. Skriv til oss, så svarer et ekte menneske.",
    doneHeading: "Takk. Meldingen din er sendt.",
    doneBody:
      "Vi svarer så snart vi kan. Følg med i innboksen din — vi har sendt deg en kort bekreftelse på at den kom fram.",
    writeAnother: "Skriv en ny melding",
    nameLabel: "Navnet ditt",
    namePlaceholder: "Kari Nordmann",
    emailLabel: "E-posten din",
    emailPlaceholder: "du@eksempel.no",
    subjectLabel: "Emne",
    subjectPlaceholder: "Hva gjelder det?",
    reasonLabel: "Hva gjelder det?",
    reasonHint: "Valgfritt",
    reasonPlaceholder: "Velg gjerne ett",
    reasons: {
      general: "Generelt spørsmål",
      matching: "Hundematching",
      training: "Trening",
      health: "Helse og ernæring",
      myDog: "Min hund",
      technical: "Teknisk problem",
      partnership: "Samarbeid",
      other: "Annet",
    },
    messageLabel: "Meldingen din",
    messagePlaceholder: "Fortell oss så mye eller så lite du vil.",
    send: "Send melding",
    sending: "Sender …",
    onlyUse: "Vi bruker opplysningene dine bare til å svare deg. Ikke noe annet.",
    sendError: "Beklager, vi klarte ikke å sende meldingen din akkurat nå. Prøv gjerne igjen om litt.",
  },
} as const;

function ContactPage() {
  const c = useCopy(copy);
  const send = useServerFn(sendContactMessage);
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
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      reason: String(fd.get("reason") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
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
      setFormError(c.sendError);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container-page max-w-3xl py-14 md:py-24">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h1 className="display-lg mt-6">{c.heading}</h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>

      {done ? (
        <div className="animate-fade mt-10 rounded-3xl border border-border bg-surface p-8 md:p-10">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground">
            <Check className="h-6 w-6" strokeWidth={2} aria-hidden />
          </span>
          <h2 className="mt-6 font-display text-2xl tracking-tight text-foreground">
            {c.doneHeading}
          </h2>
          <p className="mt-3 text-muted-foreground">{c.doneBody}</p>
          <Button
            tone="outline"
            className="mt-7"
            onClick={() => setDone(false)}
            type="button"
          >
            {c.writeAnother}
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

          <Field label={c.nameLabel} id="name" error={errors["name"]}>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder={c.namePlaceholder}
              aria-invalid={!!errors["name"]}
              aria-describedby={errors["name"] ? "name-error" : undefined}
              className={fieldClass}
            />
          </Field>

          <Field label={c.emailLabel} id="email" error={errors["email"]}>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              maxLength={255}
              placeholder={c.emailPlaceholder}
              aria-invalid={!!errors["email"]}
              aria-describedby={errors["email"] ? "email-error" : undefined}
              className={fieldClass}
            />
          </Field>

          <Field label={c.subjectLabel} id="subject" error={errors["subject"]}>
            <input
              id="subject"
              name="subject"
              required
              maxLength={150}
              placeholder={c.subjectPlaceholder}
              aria-invalid={!!errors["subject"]}
              aria-describedby={errors["subject"] ? "subject-error" : undefined}
              className={fieldClass}
            />
          </Field>

          <Field label={c.reasonLabel} id="reason" hint={c.reasonHint} error={errors["reason"]}>
            <select id="reason" name="reason" defaultValue="" className={cn(fieldClass, "appearance-none")}>
              <option value="">{c.reasonPlaceholder}</option>
              {reasonKeys.map((r) => (
                <option key={r} value={c.reasons[r]}>
                  {c.reasons[r]}
                </option>
              ))}
            </select>
          </Field>

          <Field label={c.messageLabel} id="message" error={errors["message"]}>
            <textarea
              id="message"
              name="message"
              required
              rows={7}
              maxLength={4000}
              placeholder={c.messagePlaceholder}
              aria-invalid={!!errors["message"]}
              aria-describedby={errors["message"] ? "message-error" : undefined}
              className={cn(fieldClass, "resize-y leading-relaxed")}
            />
          </Field>

          {/* Honeypot — hidden from people, catnip for bots. */}
          <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="website">Leave this empty</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <Button type="submit" size="lg" disabled={busy} className="w-full sm:w-auto">
              <Mail className="h-4 w-4" aria-hidden />
              {busy ? c.sending : c.send}
            </Button>
            <p className="text-sm text-muted-foreground">{c.onlyUse}</p>
          </div>
        </form>
      )}
    </div>
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
      <label htmlFor={id} className="mb-2 flex items-baseline gap-2 text-sm font-medium text-foreground">
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
