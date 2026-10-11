import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getMembership } from "@/lib/plus/paddle.functions";
import type { MembershipStatus } from "@/lib/plus/paddle.functions";
import { getPaddleEnvironment } from "@/lib/paddle";
import { useAuth } from "./use-auth";

const none: MembershipStatus = {
  subscribed: false,
  plan: null,
  renewsAt: null,
  cancelsAtPeriodEnd: false,
  lifetime: false,
};

/** DoggMatch+ status for the signed-in person, read from our subscriptions table. */
export function useMembership() {
  const { user, loading } = useAuth();
  const fetchMembership = useServerFn(getMembership);

  const query = useQuery({
    queryKey: ["membership", user?.id ?? "anonymous"],
    queryFn: () => fetchMembership({ data: { environment: getPaddleEnvironment() } }),
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
