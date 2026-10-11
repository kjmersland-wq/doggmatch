import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { getBreed, type BreedId } from "@/data/breeds";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n";
import { PURCHASES_ENABLED, PURCHASES_PAUSED_ERROR } from "@/lib/purchases";
import type { PaddleEnv } from "@/lib/paddle.server";

/**
 * One-time Paddle checkout for the paid "Complete Breed & Puppy Buyer
 * Dossier" add-on, sold straight off the free Find My Dog result. Unlike
 * DoggMatch+ (`src/lib/plus`), this needs no account — Paddle collects the
 * buyer's email in its own checkout overlay, and the `_ptxn` transaction id
 * on the success URL is what proves the purchase.
 */

function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as string[]).includes(value);
}

/** Validates the dossier request before the browser opens Paddle's checkout. */
export const prepareDossierCheckout = createServerFn({ method: "POST" })
  .inputValidator((data: { breedId: string; locale: string }) => {
    if (!getBreed(data.breedId)) throw new Error("Unknown breed");
    if (!isLocale(data.locale)) throw new Error("Unknown locale");
    return { breedId: data.breedId as BreedId, locale: data.locale };
  })
  .handler(async ({ data }): Promise<{ priceId: string; breedId: BreedId; locale: Locale }> => {
    if (!PURCHASES_ENABLED) throw new Error(PURCHASES_PAUSED_ERROR);
    return { priceId: "dossier_once", breedId: data.breedId, locale: data.locale };
  });

export interface DossierSession {
  paid: boolean;
  breedId: BreedId | null;
}

/** Confirms a Paddle transaction actually completed before unlocking the dossier. */
export const verifyDossierCheckout = createServerFn({ method: "POST" })
  .inputValidator((data: { transactionId: string; environment?: PaddleEnv }) => {
    if (!data?.transactionId) throw new Error("Missing transaction id");
    return {
      transactionId: data.transactionId,
      environment: data.environment === "live" ? ("live" as const) : ("sandbox" as const),
    };
  })
  .handler(async ({ data }): Promise<DossierSession> => {
    const { gatewayFetch } = await import("@/lib/paddle.server");
    const response = await gatewayFetch(
      data.environment,
      `/transactions/${encodeURIComponent(data.transactionId)}`,
    );
    if (!response.ok) return { paid: false, breedId: null };
    const result = await response.json();
    const txn = result.data;
    const rawBreedId = txn?.custom_data?.breedId ?? txn?.customData?.breedId;
    const breedId = rawBreedId && getBreed(rawBreedId) ? (rawBreedId as BreedId) : null;
    const paid = txn?.status === "completed" || txn?.status === "paid";
    return { paid, breedId };
  });

/**
 * Founder accounts hold lifetime DoggMatch+ and never pay for a dossier.
 * The email is read from the verified auth token, so this can't be faked
 * by passing an address from the browser.
 */
export const unlockDossierAsMember = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { breedId: string }) => {
    if (!getBreed(data.breedId)) throw new Error("Unknown breed");
    return { breedId: data.breedId as BreedId };
  })
  .handler(async ({ data, context }): Promise<DossierSession> => {
    const { founderEmailFromClaims, isFounderEmail } = await import("@/lib/plus/founder");
    const email = founderEmailFromClaims(context.claims);
    if (!isFounderEmail(email)) return { paid: false, breedId: null };
    return { paid: true, breedId: data.breedId };
  });
