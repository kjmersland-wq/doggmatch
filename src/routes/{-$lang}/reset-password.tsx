import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { Arrow, Button, Eyebrow, Section } from "@/components/dogmatch/ui";
import { useCopy } from "@/i18n";
import { abs, noindexMeta } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";
import { resetCopy } from "@/lib/auth/reset-copy";

const title = "Choose a new password | DoggMatch";
const description = "Set a new password for your DoggMatch account.";

export const Route = createFileRoute("/{-$lang}/reset-password")({
  ssr: false,
  head: () => ({
    meta: [
      ...noindexMeta,
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: abs("/reset-password") }],
  }),
  component: ResetPasswordPage,
});

const fieldClass =
  "mt-2 h-14 w-full rounded-2xl border border-border bg-background px-5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-border-strong";

function ResetPasswordPage() {
  const c = useCopy(resetCopy);
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    void supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setReady(Boolean(data.session));
      if (!data.session) setMessage(c.invalid);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setReady(true);
        setMessage(null);
      }
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [c.invalid]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setMessage(null);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      setDone(true);
      setPassword("");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : c.error);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-2xl">{c.heading}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
      </section>

      <Section className="container-page">
        <div className="max-w-md rounded-[1.5rem] border border-border bg-surface p-6 sm:p-8">
          {done ? (
            <>
              <p role="status" className="text-base leading-relaxed">
                {c.done}
              </p>
              <a
                href={withLangPrefix("/account")}
                className="mt-6 inline-flex items-center gap-2 text-sm underline underline-offset-4"
              >
                {c.backToAccount}
              </a>
            </>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <label htmlFor="new-password" className="text-[0.9375rem] font-medium">
                {c.label}
              </label>
              <input
                id="new-password"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={fieldClass}
                placeholder={c.placeholder}
              />
              <Button type="submit" size="lg" disabled={busy || !ready} className="mt-7 w-full">
                {busy ? c.saving : c.save}
                {!busy && <Arrow />}
              </Button>
            </form>
          )}

          {message && (
            <p role="alert" className="mt-5 text-sm leading-relaxed text-accent">
              {message}
            </p>
          )}
        </div>
      </Section>
    </div>
  );
}
