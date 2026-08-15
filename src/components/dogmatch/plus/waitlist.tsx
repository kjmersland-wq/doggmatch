import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { joinPlusWaitlist } from "@/lib/plus/waitlist.functions";
import type { WaitlistResult } from "@/lib/plus/waitlist.functions";
import { Arrow, Eyebrow } from "@/components/dogmatch/ui";

const fieldClass =
  "mt-2 h-14 w-full rounded-2xl border border-border bg-background px-5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-border-strong";

export function PlusWaitlist() {
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
      setResult({ ok: false, message: "Something went wrong on our side. Please try again." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-[2rem] border border-border bg-surface p-7 sm:p-10 md:p-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <div className="max-w-lg">
          <Eyebrow>The waitlist</Eyebrow>
          <h2 className="display-lg mt-6">Be first to know when DoggMatch+ opens.</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Leave your name and email and we'll send you one quiet message when membership opens.
            No newsletter, no noise, and you can ask us to remove you at any time.
          </p>
        </div>

        {done ? (
          <div
            role="status"
            className="rounded-[1.5rem] border border-border bg-background p-7 sm:p-9"
          >
            <p className="font-display text-2xl tracking-tight">You're on the list.</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We'll let you know when DoggMatch+ is ready.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="rounded-[1.5rem] border border-border bg-background p-6 sm:p-8">
            <div>
              <label htmlFor="wl-first-name" className="text-[0.9375rem] font-medium">
                First name
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
                placeholder="Kjell"
              />
              {result?.fieldErrors?.["firstName"] && (
                <p className="mt-2 text-sm text-accent">{result.fieldErrors["firstName"]}</p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="wl-email" className="text-[0.9375rem] font-medium">
                Email address
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
                placeholder="you@example.com"
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
              {busy ? "One moment…" : "Join the waitlist"}
              {!busy && <Arrow />}
            </button>

            {result && !result.ok && !result.fieldErrors && (
              <p role="alert" className="mt-4 text-sm text-accent">
                {result.message}
              </p>
            )}

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              By joining, you're happy for us to keep your name and email so we can tell you when
              DoggMatch+ opens. Nothing else, and never passed on. See our{" "}
              <Link to="/privacy" className="underline underline-offset-4 hover:text-foreground">
                privacy notice
              </Link>
              .
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
