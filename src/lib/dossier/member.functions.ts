import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { getBreed, type BreedId } from "@/data/breeds";

export interface DossierSession {
  paid: boolean;
  breedId: BreedId | null;
}

/**
 * Founder accounts hold lifetime DoggMatch+ and open every dossier for free.
 * The email is read from the verified auth token, so it can't be faked.
 */
export const unlockDossierAsMember = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { breedId: string }) => {
    if (!getBreed(data.breedId)) throw new Error("Unknown breed");
    return { breedId: data.breedId as BreedId };
  })
  .handler(async ({ data, context }): Promise<DossierSession> => {
    const { founderEmailFromClaims, isFounderEmail } = await import("@/lib/plus/founder");
    if (!isFounderEmail(founderEmailFromClaims(context.claims))) return { paid: false, breedId: null };
    return { paid: true, breedId: data.breedId };
  });
