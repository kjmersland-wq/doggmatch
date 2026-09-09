import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { joinPlusWaitlist } from "@/lib/plus/waitlist.functions";
import type { WaitlistResult } from "@/lib/plus/waitlist.functions";
import { Arrow, Eyebrow } from "@/components/dogmatch/ui";
import { useCopy } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";

const fieldClass =
  "mt-2 h-14 w-full rounded-2xl border border-border bg-background px-5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-border-strong";

const copy = {
  en: {
    eyebrow: "The waitlist",
    title: "Be first to know when DoggMatch+ opens.",
    body: "Leave your name and email and we'll send you one quiet message when membership opens. No newsletter, no noise, and you can ask us to remove you at any time.",
    doneTitle: "You're on the list.",
    doneBody: "We'll let you know when DoggMatch+ is ready.",
    firstName: "First name",
    firstNamePlaceholder: "Kjell",
    email: "Email address",
    emailPlaceholder: "you@example.com",
    submit: "Join the waitlist",
    submitBusy: "One moment…",
    consentPrefix:
      "By joining, you're happy for us to keep your name and email so we can tell you when DoggMatch+ opens. Nothing else, and never passed on. See our",
    consentLink: "privacy notice on our About page",
    error: "Something went wrong on our side. Please try again.",
  },
  no: {
    eyebrow: "Venteliste",
    title: "Vær først til å høre når DoggMatch+ åpner.",
    body: "Legg igjen navn og e-post, så sender vi deg én stille beskjed når medlemskap åpner. Ikke noe nyhetsbrev, ikke noe mas, og du kan be oss fjerne deg når som helst.",
    doneTitle: "Du står på listen.",
    doneBody: "Vi gir deg beskjed når DoggMatch+ er klar.",
    firstName: "Fornavn",
    firstNamePlaceholder: "Kjell",
    email: "E-postadresse",
    emailPlaceholder: "du@eksempel.no",
    submit: "Bli med på ventelisten",
    submitBusy: "Ett øyeblikk …",
    consentPrefix:
      "Ved å bli med er du innforstått med at vi lagrer navn og e-post slik at vi kan fortelle deg når DoggMatch+ åpner. Ikke noe annet, og vi gir det aldri videre. Se",
    consentLink: "personvernerklæringen på Om oss-siden",
    error: "Noe gikk galt hos oss. Prøv gjerne igjen.",
  },
  pl: {
    eyebrow: "Lista oczekujących",
    title: "Dowiedz się jako pierwszy, kiedy otworzymy DoggMatch+.",
    body: "Zostaw imię i e-mail, a wyślemy ci jedną spokojną wiadomość, gdy członkostwo zostanie otwarte. Żadnego newslettera, żadnego zamieszania — w każdej chwili możesz poprosić nas o usunięcie.",
    doneTitle: "Jesteś na liście.",
    doneBody: "Damy ci znać, gdy DoggMatch+ będzie gotowy.",
    firstName: "Imię",
    firstNamePlaceholder: "Kasia",
    email: "Adres e-mail",
    emailPlaceholder: "ty@przyklad.pl",
    submit: "Dołącz do listy oczekujących",
    submitBusy: "Chwileczkę…",
    consentPrefix:
      "Dołączając, zgadzasz się, że zachowamy twoje imię i e-mail, aby powiadomić cię o otwarciu DoggMatch+. Nic więcej i nigdy nie przekazujemy tego dalej. Zobacz naszą",
    consentLink: "politykę prywatności na stronie O nas",
    error: "Coś poszło nie tak po naszej stronie. Spróbuj ponownie.",
  },
} as const;

export function PlusWaitlist() {
  const c = useCopy(copy);
  const join = useServerFn(joinPlusWaitlist);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [result, setResult] = useState<WaitlistResult | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setResult(null);
    try {
      const res = await join({ data: { firstName, email, website } });
      setResult(res);
      if (res.ok) setDone(true);
    } catch {
      setResult({ ok: false, message: c.error });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-border bg-surface p-7 sm:p-10 md:p-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <div className="max-w-lg">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="display-lg mt-6">{c.title}</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">{c.body}</p>
        </div>

        {done ? (
          <div
            role="status"
            className="rounded-[1.5rem] border border-border bg-background p-7 sm:p-9"
          >
            <p className="font-display text-2xl tracking-tight">{c.doneTitle}</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">{c.doneBody}</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="rounded-[1.5rem] border border-border bg-background p-6 sm:p-8">
            <div>
              <label htmlFor="wl-first-name" className="text-[0.9375rem] font-medium">
                {c.firstName}
              </label>
              <input
                id="wl-first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                maxLength={100}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={fieldClass}
                placeholder={c.firstNamePlaceholder}
              />
              {result?.fieldErrors?.["firstName"] && (
                <p className="mt-2 text-sm text-accent">{result.fieldErrors["firstName"]}</p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="wl-email" className="text-[0.9375rem] font-medium">
                {c.email}
              </label>
              <input
                id="wl-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={fieldClass}
                placeholder={c.emailPlaceholder}
              />
              {result?.fieldErrors?.["email"] && (
                <p className="mt-2 text-sm text-accent">{result.fieldErrors["email"]}</p>
              )}
            </div>

            {/* Honeypot — hidden from people, tempting to bots. */}
            <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="wl-website">Website</label>
              <input
                id="wl-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={busy}
              className="group mt-7 inline-flex h-14 w-full select-none items-center justify-center gap-2.5 rounded-full bg-primary px-6 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[var(--shadow-lift)] disabled:pointer-events-none disabled:opacity-60"
            >
              {busy ? c.submitBusy : c.submit}
              {!busy && <Arrow />}
            </button>

            {result && !result.ok && !result.fieldErrors && (
              <p role="alert" className="mt-4 text-sm text-accent">
                {result.message}
              </p>
            )}

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {c.consentPrefix}{" "}
              <Link to={withLangPrefix("/about")} className="underline underline-offset-4 hover:text-foreground">
                {c.consentLink}
              </Link>
              .
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
