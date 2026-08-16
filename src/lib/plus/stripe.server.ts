import Stripe from "stripe";

let client: Stripe | undefined;

export function getStripe(): Stripe {
  const key = process.env["STRIPE_SECRET_KEY"];
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  if (!client) client = new Stripe(key, { apiVersion: "2026-07-29.dahlia" });
  return client;
}

/** Find an existing Stripe customer by email, if there is one. */
export async function findCustomerId(email: string): Promise<string | null> {
  const stripe = getStripe();
  const customers = await stripe.customers.list({ email, limit: 1 });
  return customers.data[0]?.id ?? null;
}
