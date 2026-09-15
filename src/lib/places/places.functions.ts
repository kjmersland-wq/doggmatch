import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";
import { PLACE_CATEGORIES, type NearbyResult, type PlaceCategory, type PlaceResult, type Suggestion } from "./types";

const LOCALES = ["en", "no", "pl", "dk", "se", "fi", "de", "fr", "nl"] as const;

const suggestSchema = z.object({
  input: z.string().trim().min(2).max(120),
  locale: z.enum(LOCALES).default("en"),
  sessionToken: z.string().trim().min(8).max(60),
});

const nearbySchema = z.object({
  locale: z.enum(LOCALES).default("en"),
  radiusKm: z.number().min(1).max(50).default(10),
  placeId: z.string().trim().min(3).max(300).optional(),
  sessionToken: z.string().trim().min(8).max(60).optional(),
  query: z.string().trim().min(2).max(120).optional(),
  lat: z.number().min(-90).max(90).optional(),
  lng: z.number().min(-180).max(180).optional(),
});

function clientKey(): string {
  return (
    getRequestHeader("cf-connecting-ip") ??
    getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

export const suggestPlaces = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => suggestSchema.parse(data))
  .handler(async ({ data }): Promise<{ ok: boolean; suggestions: Suggestion[] }> => {
    const { checkPlacesRate } = await import("./rate-limit.server");
    if (!checkPlacesRate(clientKey())) return { ok: false, suggestions: [] };
    try {
      const { autocomplete } = await import("./places.server");
      return { ok: true, suggestions: await autocomplete(data.input, data.locale, data.sessionToken) };
    } catch (error) {
      console.error("[places] suggest failed", error);
      return { ok: false, suggestions: [] };
    }
  });

function normalise(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export const findNearbyPlaces = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => nearbySchema.parse(data))
  .handler(
    async ({
      data,
    }): Promise<{ ok: boolean; error?: string; result?: NearbyResult; label?: string }> => {
      const { checkPlacesRate } = await import("./rate-limit.server");
      if (!checkPlacesRate(clientKey())) return { ok: false, error: "busy" };

      const { placeLocation, searchLocation, fetchCategory, approvedPartners } = await import(
        "./places.server"
      );

      // Partner lookup is an enhancement, not a requirement. If it fails, keep searching.
      let partners: Array<{ name: string; benefit: string | null }> = [];
      try {
        partners = await approvedPartners();
      } catch (error) {
        console.error("[places] partner lookup failed, continuing without partners", error);
      }

      try {
        let center: { lat: number; lng: number } | null = null;
        let label = "";

        if (data.placeId) {
          const located = await placeLocation(data.placeId, data.locale, data.sessionToken);
          center = { lat: located.lat, lng: located.lng };
          label = located.label;
        } else if (typeof data.lat === "number" && typeof data.lng === "number") {
          center = { lat: data.lat, lng: data.lng };
        } else if (data.query) {
          const located = await searchLocation(data.query, data.locale);
          if (!located) return { ok: false, error: "not_found" };
          center = { lat: located.lat, lng: located.lng };
          label = located.label;
        }

        if (!center) return { ok: false, error: "not_found" };

        const lists = await Promise.all(
          PLACE_CATEGORIES.map((category) => fetchCategory(category, center!, data.radiusKm, data.locale)),
        );

        const partnerIndex = new Map(
          partners.filter((p) => p.name.trim().length > 1).map((p) => [normalise(p.name), p]),
        );

        const places = {} as Record<PlaceCategory, PlaceResult[]>;
        PLACE_CATEGORIES.forEach((category, index) => {
          const list = (lists[index] ?? []).map((place) => {
            const match = partnerIndex.get(normalise(place.name));
            return match ? { ...place, partner: true, partnerBenefit: match.benefit } : place;
          });
          list.sort((a, b) => {
            if (a.partner !== b.partner) return a.partner ? -1 : 1;
            return a.distanceKm - b.distanceKm;
          });
          places[category] = list;
        });

        return {
          ok: true,
          label,
          result: { center, radiusKm: data.radiusKm, places },
        };
      } catch (error) {
        console.error("[places] nearby failed", error);
        return { ok: false, error: "unavailable" };
      }
    },
  );
