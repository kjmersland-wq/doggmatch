import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { useMembership } from "@/hooks/use-membership";
import { openBillingPortal } from "@/lib/plus/stripe.functions";
import { Panel } from "@/components/dogmatch/care/parts";
import { Button, ButtonLink } from "@/components/dogmatch/ui";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-border/60 py-3 last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-right text-[0.9375rem]">{value}</span>
    </div>
  );
}

/** Who you are, and where your DoggMatch+ membership stands. */
export function AccountMembership() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { membership, loading } = useMembership();
  const toPortal = useServerFn(openBillingPortal);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function manage() {
    setError(null);
    setBusy(true);
    try {
      const { url } = await toPortal();
      window.location.href = url;
    } catch {
      setError("We couldn't open your billing page just then. Please try again.");
      setBusy(false);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    void navigate({ to: "/" });
  }

  const renews = membership.renewsAt
    ? new Date(membership.renewsAt).toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "—";

  return (
    <>
      <Panel title="You">
        <Row label="Email" value={user?.email ?? "Not signed in"} />
        <Row label="Language" value="English" />
        {user ? (
          <>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              You're signed in. Everything you've filled in about your dog is still saved on this
              device.
            </p>
            <Button tone="outline" onClick={signOut} className="mt-5">
              Sign out
            </Button>
          </>
        ) : (
          <>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              You don't need an account to use DoggMatch. You only need one for DoggMatch+.
            </p>
            <Button onClick={() => void navigate({ to: "/auth" })} className="mt-5">
              Sign in
            </Button>
          </>
        )}
      </Panel>

      <Panel title="Membership">
        <Row
          label="Plan"
          value={
            loading
              ? "Checking…"
              : membership.subscribed
                ? membership.plan === "yearly"
                  ? "DoggMatch+ yearly"
                  : "DoggMatch+ monthly"
                : "Free"
          }
        />
        <Row
          label={membership.cancelsAtPeriodEnd ? "Ends" : "Renews"}
          value={membership.subscribed ? renews : "—"}
        />
        {membership.subscribed ? (
          <>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {membership.cancelsAtPeriodEnd
                ? "Your membership is set to end, and you'll keep everything until then."
                : "Thank you for being a member. You can change or cancel this yourself at any time."}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink to="/member-card">Print my member card</ButtonLink>
              <Button tone="outline" onClick={manage} disabled={busy}>
                {busy ? "One moment…" : "Manage my membership"}
              </Button>
            </div>
          </>
        ) : (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Everything you can see today is free.{" "}
            <Link to="/plus" className="text-accent underline-offset-4 hover:underline">
              DoggMatch+
            </Link>{" "}
            adds the tools for daily life with your dog.
          </p>
        )}
        {error && (
          <p role="alert" className="mt-4 text-sm leading-relaxed text-accent">
            {error}
          </p>
        )}
      </Panel>
    </>
  );
}
