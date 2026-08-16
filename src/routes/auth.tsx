import { useEffect, useState } from "react";
import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/use-auth";
import { Arrow, Button, Eyebrow, Section } from "@/components/dogmatch/ui";
import { useCopy } from "@/i18n";
import { abs, noindexMeta } from "@/lib/seo";

const title = "Sign in — Your DoggMatch account | DoggMatch";
const description =
  "Sign in to DoggMatch to look after your membership, your dog's pages and everything you've saved.";

type Search = { next?: string };

export const Route = createFileRoute("/auth")({
  validateSearch: (search: Record<string, unknown>): Search =>
    typeof search["next"] === "string" && search["next"].startsWith("/")
      ? { next: search["next"] }
      : {},
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
    links: [{ rel: "canonical", href: abs("/auth") }],
  }),
  component: AuthPage,
});

const fieldClass =
  "mt-2 h-14 w-full rounded-2xl border border-border bg-background px-5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-border-strong";

const copy = {
  en: {
    eyebrow: "Your account",
    welcomeBack: "Welcome back",
    letsSetUp: "Let's get you set up",
    intro:
      "You only need an account for DoggMatch+ and anything we keep for you. Everything else on DoggMatch stays free and open.",
    google: "Continue with Google",
    orWithEmail: "or with email",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "At least 8 characters",
    signingIn: "One moment…",
    signIn: "Sign in",
    createAccount: "Create my account",
    noAccount: "No account yet?",
    haveAccount: "Already have an account?",
    createOne: "Create one",
    signInInstead: "Sign in instead",
    signUpNotice: "Almost there — check your inbox and confirm your email address.",
    genericError: "Something went wrong. Please try again.",
    googleError: "We couldn't sign you in with Google just then. Please try again.",
  },
  no: {
    eyebrow: "Kontoen din",
    welcomeBack: "Velkommen tilbake",
    letsSetUp: "La oss sette deg opp",
    intro:
      "Du trenger bare en konto for DoggMatch+ og alt vi lagrer for deg. Alt annet på DoggMatch er fortsatt gratis og åpent.",
    google: "Fortsett med Google",
    orWithEmail: "eller med e-post",
    emailLabel: "E-postadresse",
    emailPlaceholder: "du@eksempel.no",
    passwordLabel: "Passord",
    passwordPlaceholder: "Minst 8 tegn",
    signingIn: "Ett øyeblikk …",
    signIn: "Logg inn",
    createAccount: "Opprett kontoen min",
    noAccount: "Har du ikke konto ennå?",
    haveAccount: "Har du allerede konto?",
    createOne: "Opprett en",
    signInInstead: "Logg inn i stedet",
    signUpNotice: "Nesten der — sjekk innboksen din og bekreft e-postadressen.",
    genericError: "Noe gikk galt. Prøv gjerne igjen.",
    googleError: "Vi klarte ikke å logge deg inn med Google akkurat nå. Prøv gjerne igjen.",
  },
} as const;

function AuthPage() {
  const c = useCopy(copy);
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const search = useSearch({ from: "/auth" });
  const next = search.next ?? "/account";

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && user) void navigate({ to: next });
  }, [loading, user, next, navigate]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setMessage(null);
    setNotice(null);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}${next}` },
        });
        if (error) throw error;
        setNotice(c.signUpNotice);
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : c.genericError);
    } finally {
      setBusy(false);
    }
  }

  async function onGoogle() {
    setMessage(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result?.error) setMessage(c.googleError);
  }

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-2xl">
          {mode === "signin" ? c.welcomeBack : c.letsSetUp}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
      </section>

      <Section className="container-page">
        <div className="max-w-md rounded-[1.5rem] border border-border bg-surface p-6 sm:p-8">
          <button
            type="button"
            onClick={onGoogle}
            className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full border border-border-strong px-6 text-base font-medium transition-colors hover:bg-background"
          >
            {c.google}
          </button>

          <div className="my-7 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            {c.orWithEmail}
            <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={onSubmit} noValidate>
            <label htmlFor="auth-email" className="text-[0.9375rem] font-medium">
              {c.emailLabel}
            </label>
            <input
              id="auth-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
              placeholder={c.emailPlaceholder}
            />

            <div className="mt-5">
              <label htmlFor="auth-password" className="text-[0.9375rem] font-medium">
                {c.passwordLabel}
              </label>
              <input
                id="auth-password"
                type="password"
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={fieldClass}
                placeholder={c.passwordPlaceholder}
              />
            </div>

            <Button type="submit" size="lg" disabled={busy} className="mt-7 w-full">
              {busy ? c.signingIn : mode === "signin" ? c.signIn : c.createAccount}
              {!busy && <Arrow />}
            </Button>
          </form>

          {notice && (
            <p role="status" className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {notice}
            </p>
          )}
          {message && (
            <p role="alert" className="mt-5 text-sm leading-relaxed text-accent">
              {message}
            </p>
          )}

          <p className="mt-6 text-sm text-muted-foreground">
            {mode === "signin" ? c.noAccount : c.haveAccount}{" "}
            <button
              type="button"
              onClick={() => {
                setMode(mode === "signin" ? "signup" : "signin");
                setMessage(null);
                setNotice(null);
              }}
              className="underline underline-offset-4 hover:text-foreground"
            >
              {mode === "signin" ? c.createOne : c.signInInstead}
            </button>
          </p>
        </div>
      </Section>
    </div>
  );
}
