import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";

/** The signed-in person, or null. Loading is true until we know. */
export function useAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    let unsubscribe: (() => void) | null = null;

    void (async () => {
      try {
        const { supabase } = await import("@/integrations/supabase/client");
        const { data } = await supabase.auth.getSession();
        if (!alive) return;
        setSession(data.session);
        setLoading(false);
        const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
          setSession(next);
          setLoading(false);
        });
        unsubscribe = () => sub.subscription.unsubscribe();
      } catch {
        // Sign-in simply isn't available here — the page should still work.
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
      if (unsubscribe) unsubscribe();
    };
  }, []);

  return { session, user: session?.user ?? null, loading };
}
