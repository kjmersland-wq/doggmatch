import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getMembership } from "@/lib/plus/stripe.functions";
import type { MembershipStatus } from "@/lib/plus/stripe.functions";
import { useAuth } from "./use-auth";

const none: MembershipStatus = {
  subscribed: false,
  plan: null,
  renewsAt: null,
  cancelsAtPeriodEnd: false,
  lifetime: false,
};

/** DoggMatch+ status for the signed-in person, read from Stripe. */
export function useMembership() {
  const { user, loading } = useAuth();
  const fetchMembership = useServerFn(getMembership);

  const query = useQuery({
    queryKey: ["membership", user?.id ?? "anonymous"],
    queryFn: () => fetchMembership(),
    enabled: Boolean(user),
    staleTime: 30_000,
  });

  return {
    membership: user ? (query.data ?? none) : none,
    loading: loading || (Boolean(user) && query.isLoading),
    refetch: query.refetch,
    signedIn: Boolean(user),
  };
}
