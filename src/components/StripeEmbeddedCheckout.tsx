import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { getStripe } from "@/lib/stripe";
import { PURCHASES_ENABLED } from "@/lib/purchases";

interface StripeEmbeddedCheckoutProps {
  clientSecret: string;
}

/** Mounts Stripe's embedded checkout form inline for an existing session. */
export function StripeEmbeddedCheckout({ clientSecret }: StripeEmbeddedCheckoutProps) {
  if (!PURCHASES_ENABLED) return null;
  return (
    <div id="checkout" className="w-full">
      <EmbeddedCheckoutProvider stripe={getStripe()} options={{ clientSecret }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
