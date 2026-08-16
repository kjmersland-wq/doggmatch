import { useEffect, useState } from "react";
import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/use-auth";
import { Arrow, Button, Eyebrow, Section } from "@/components/dogmatch/ui";

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
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/auth" }],
  }),
  component: AuthPage,
});

const fieldClass =
  "mt-2 h-14 w-full rounded-2xl border border-border bg-background px-5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-border-strong";

function AuthPage() {
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
        setNotice("Almost there — check your inbox and confirm your email address.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function onGoogle() {
    setMessage(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result?.error) setMessage("We couldn't sign you in with Google just then. Please try again.");
  }

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>Your account</Eyebrow>
        <h1 className="display-xl mt-6 max-w-2xl">
          {mode === "signin" ? "Welcome back" : "Let's get you set up"}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          You only need an account for DoggMatch+ and anything we keep for you. Everything else on
          DoggMatch stays free and open.
        </p>
      </section>

      <Section className="container-page">
        <div className="max-w-md rounded-[1.5rem] border border-border bg-surface p-6 sm:p-8">
          <button
            type="button"
            onClick={onGoogle}
            className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full border border-border-strong px-6 text-base font-medium transition-colors hover:bg-background"
          >
            Continue with Google
          </button>

          <div className="my-7 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            or with email
            <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={onSubmit} noValidate>
            <label htmlFor="auth-email" className="text-[0.9375rem] font-medium">
              Email address
            </label>
            <input
              id="auth-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
              placeholder="you@example.com"
            />

            <div className="mt-5">
              <label htmlFor="auth-password" className="text-[0.9375rem] font-medium">
                Password
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
                placeholder="At least 8 characters"
              />
            </div>

            <Button type="submit" size="lg" disabled={busy} className="mt-7 w-full">
              {busy ? "One moment…" : mode === "signin" ? "Sign in" : "Create my account"}
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
            {mode === "signin" ? "No account yet?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setMode(mode === "signin" ? "signup" : "signin");
                setMessage(null);
                setNotice(null);
              }}
              className="underline underline-offset-4 hover:text-foreground"
            >
              {mode === "signin" ? "Create one" : "Sign in instead"}
            </button>
          </p>
        </div>
      </Section>
    </div>
  );
}
