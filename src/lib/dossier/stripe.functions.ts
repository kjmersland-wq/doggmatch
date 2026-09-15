import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { getBreed, type BreedId } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n";
import { dossierPrice } from "./pricing";

/**
 * One-time Stripe Checkout for the paid "Complete Breed & Puppy Buyer
 * Dossier" add-on, sold straight off the free Find My Dog result. Unlike
 * DoggMatch+ (`src/lib/plus`), this needs no account — Stripe collects the
 * buyer's email on its own hosted page, and `session_id` on the success URL
 * is what proves the purchase.
 */

function originOf(): string {
  return (
    getRequestHeader("origin") ??
    (getRequestHeader("host") ? `https://${getRequestHeader("host")}` : "https://doggmatch.com")
  );
}

function langPath(locale: Locale, path: string): string {
  return locale === "en" ? path : `/${locale}${path}`;
}

function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as string[]).includes(value);
}

export const createDossierCheckout = createServerFn({ method: "POST" })
  .inputValidator((data: { breedId: string; locale: string }) => {
    if (!getBreed(data.breedId)) throw new Error("Unknown breed");
    if (!isLocale(data.locale)) throw new Error("Unknown locale");
    return { breedId: data.breedId as BreedId, locale: data.locale };
  })
  .handler(async ({ data }): Promise<{ url: string }> => {
    const { getStripe } = await import("@/lib/plus/stripe.server");
    const stripe = getStripe();
    const name = breedContent(data.locale)[data.breedId]?.displayName ?? data.breedId;
    const price = dossierPrice(data.locale);
    const origin = originOf();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_creation: "always",
      line_items: [
        {
          price_data: {
            currency: price.currency,
            unit_amount: price.amount,
            product_data: {
              name: `DoggMatch — Complete Breed & Puppy Buyer Dossier: ${name}`,
            },
          },
          quantity: 1,
        },
      ],
      metadata: { breedId: data.breedId, locale: data.locale },
      success_url: `${origin}${langPath(data.locale, "/quiz/success")}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}${langPath(data.locale, "/find-my-dog")}`,
    });

    if (!session.url) throw new Error("Stripe didn't return a checkout link.");
    return { url: session.url };
  });

export interface DossierSession {
  paid: boolean;
  breedId: BreedId | null;
}

/** Confirms a Stripe Checkout session actually paid before unlocking the dossier. */
export const verifyDossierCheckout = createServerFn({ method: "POST" })
  .inputValidator((data: { sessionId: string }) => {
    if (!data?.sessionId) throw new Error("Missing session id");
    return data;
  })
  .handler(async ({ data }): Promise<DossierSession> => {
    const { getStripe } = await import("@/lib/plus/stripe.server");
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(data.sessionId);
    const rawBreedId = session.metadata?.["breedId"];
    const breedId = rawBreedId && getBreed(rawBreedId) ? (rawBreedId as BreedId) : null;
    return { paid: session.payment_status === "paid", breedId };
  });
