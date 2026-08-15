import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useRef, useState } from "react";
import { Check, Mail } from "lucide-react";
import { Button, Eyebrow, Arrow } from "@/components/dogmatch/ui";
import { sendContactMessage } from "@/lib/contact/contact.functions";
import { cn } from "@/lib/utils";

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
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const reasons = [
  "General question",
  "Dog matching",
  "Training",
  "Health & Nutrition",
  "My Dog",
  "Technical problem",
  "Partnership",
  "Other",
];

const fieldClass =
  "w-full rounded-2xl border border-border-strong bg-background px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

function ContactPage() {
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
      setFormError("Sorry, we couldn't send your message right now. Please try again in a moment.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container-page max-w-3xl py-14 md:py-24">
      <Eyebrow>Contact</Eyebrow>
      <h1 className="display-lg mt-6">We'd love to hear from you.</h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
        A question about finding the right dog, training, food, health or travelling together —
        or something that isn't working as it should. Write to us and a real person will answer.
      </p>

      {done ? (
        <div className="animate-fade mt-10 rounded-3xl border border-border bg-surface p-8 md:p-10">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground">
            <Check className="h-6 w-6" strokeWidth={2} aria-hidden />
          </span>
          <h2 className="mt-6 font-display text-2xl tracking-tight text-foreground">
            Thank you. Your message has been sent.
          </h2>
          <p className="mt-3 text-muted-foreground">
            We'll get back to you as soon as we can. Keep an eye on your inbox — we've sent you a
            short note confirming it arrived.
          </p>
          <Button
            tone="outline"
            className="mt-7"
            onClick={() => setDone(false)}
            type="button"
          >
            Write another message
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

          <Field label="Your name" id="name" error={errors["name"]}>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Kari Nordmann"
              aria-invalid={!!errors["name"]}
              aria-describedby={errors["name"] ? "name-error" : undefined}
              className={fieldClass}
            />
          </Field>

          <Field label="Your email" id="email" error={errors["email"]}>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              maxLength={255}
              placeholder="you@example.com"
              aria-invalid={!!errors["email"]}
              aria-describedby={errors["email"] ? "email-error" : undefined}
              className={fieldClass}
            />
          </Field>

          <Field label="Subject" id="subject" error={errors["subject"]}>
            <input
              id="subject"
              name="subject"
              required
              maxLength={150}
              placeholder="What's it about?"
              aria-invalid={!!errors["subject"]}
              aria-describedby={errors["subject"] ? "subject-error" : undefined}
              className={fieldClass}
            />
          </Field>

          <Field label="What's it about?" id="reason" hint="Optional" error={errors["reason"]}>
            <select id="reason" name="reason" defaultValue="" className={cn(fieldClass, "appearance-none")}>
              <option value="">Choose one, if you like</option>
              {reasons.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Your message" id="message" error={errors["message"]}>
            <textarea
              id="message"
              name="message"
              required
              rows={7}
              maxLength={4000}
              placeholder="Tell us as much or as little as you like."
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
              {busy ? "Sending…" : "Send Message"}
            </Button>
            <p className="text-sm text-muted-foreground">
              We only use your details to answer you. Nothing else.
            </p>
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
