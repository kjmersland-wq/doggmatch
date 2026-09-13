import type { PlaceCategory, PlaceResult, Suggestion } from "./types";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";

function credentials() {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const mapsKey = process.env["GOOGLE_MAPS_API_KEY"];
  if (!lovableKey || !mapsKey) throw new Error("places_not_configured");
  return { lovableKey, mapsKey };
}

function headers(fieldMask?: string) {
  const { lovableKey, mapsKey } = credentials();
  const base: Record<string, string> = {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": mapsKey,
    "Content-Type": "application/json",
  };
  if (fieldMask) base["X-Goog-FieldMask"] = fieldMask;
  return base;
}

async function call(path: string, init: RequestInit) {
  const response = await fetch(`${GATEWAY_URL}${path}`, init);
  if (!response.ok) {
    const body = await response.text();
    console.error(`[places] ${path} failed [${response.status}]: ${body}`);
    throw new Error(`places_request_failed_${response.status}`);
  }
  return (await response.json()) as Record<string, unknown>;
}

const LANGUAGE: Record<string, string> = {
  en: "en",
  no: "no",
  pl: "pl",
  dk: "da",
  se: "sv",
  fi: "fi",
  de: "de",
  fr: "fr",
  nl: "nl",
};

export function languageCode(locale: string): string {
  return LANGUAGE[locale] ?? "en";
}

export function distanceKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 + Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  return Math.round(2 * R * Math.asin(Math.sqrt(h)) * 10) / 10;
}

export async function autocomplete(
  input: string,
  locale: string,
  sessionToken: string,
): Promise<Suggestion[]> {
  const data = await call("/places/v1/places:autocomplete", {
    method: "POST",
    headers: headers("suggestions.placePrediction.placeId,suggestions.placePrediction.text.text"),
    body: JSON.stringify({
      input,
      sessionToken,
      languageCode: languageCode(locale),
      includedPrimaryTypes: ["(cities)"],
    }),
  });
  const suggestions = (data["suggestions"] ?? []) as Array<{
    placePrediction?: { placeId?: string; text?: { text?: string } };
  }>;
  return suggestions
    .slice(0, 6)
    .map((s) => ({
      placeId: s.placePrediction?.placeId ?? "",
      label: s.placePrediction?.text?.text ?? "",
    }))
    .filter((s) => s.placeId && s.label);
}

export async function placeLocation(
  placeId: string,
  locale: string,
  sessionToken?: string,
): Promise<{ lat: number; lng: number; label: string }> {
  const query = new URLSearchParams({ languageCode: languageCode(locale) });
  if (sessionToken) query.set("sessionToken", sessionToken);
  const data = await call(`/places/v1/places/${encodeURIComponent(placeId)}?${query}`, {
    method: "GET",
    headers: headers("location,displayName,formattedAddress"),
  });
  const location = data["location"] as { latitude?: number; longitude?: number } | undefined;
  if (!location?.latitude || !location?.longitude) throw new Error("places_no_location");
  const displayName = data["displayName"] as { text?: string } | undefined;
  return {
    lat: location.latitude,
    lng: location.longitude,
    label: displayName?.text ?? (data["formattedAddress"] as string) ?? "",
  };
}

/** Falls back to text search when someone types a place we have no suggestion for. */
export async function searchLocation(
  text: string,
  locale: string,
): Promise<{ lat: number; lng: number; label: string } | null> {
  const data = await call("/places/v1/places:searchText", {
    method: "POST",
    headers: headers("places.location,places.displayName,places.formattedAddress"),
    body: JSON.stringify({ textQuery: text, languageCode: languageCode(locale), pageSize: 1 }),
  });
  const places = (data["places"] ?? []) as Array<{
    location?: { latitude?: number; longitude?: number };
    displayName?: { text?: string };
    formattedAddress?: string;
  }>;
  const first = places[0];
  if (!first?.location?.latitude || !first.location.longitude) return null;
  return {
    lat: first.location.latitude,
    lng: first.location.longitude,
    label: first.displayName?.text ?? first.formattedAddress ?? text,
  };
}

const SEARCH_MASK = [
  "places.id",
  "places.displayName",
  "places.formattedAddress",
  "places.location",
  "places.rating",
  "places.userRatingCount",
  "places.currentOpeningHours.openNow",
].join(",");

type RawPlace = {
  id?: string;
  displayName?: { text?: string };
  formattedAddress?: string;
  location?: { latitude?: number; longitude?: number };
  rating?: number;
  userRatingCount?: number;
  currentOpeningHours?: { openNow?: boolean };
};

function toResults(
  raw: RawPlace[],
  center: { lat: number; lng: number },
  category: PlaceCategory,
  maxKm: number,
): PlaceResult[] {
  const seen = new Set<string>();
  const out: PlaceResult[] = [];
  for (const place of raw) {
    const lat = place.location?.latitude;
    const lng = place.location?.longitude;
    if (!place.id || !lat || !lng || seen.has(place.id)) continue;
    // Text search only biases by location, so drop anything outside the search radius.
    if (distanceKm(center, { lat, lng }) > maxKm) continue;
    seen.add(place.id);
    out.push({
      id: place.id,
      name: place.displayName?.text ?? "",
      address: place.formattedAddress ?? "",
      lat,
      lng,
      rating: typeof place.rating === "number" ? place.rating : null,
      ratingCount: typeof place.userRatingCount === "number" ? place.userRatingCount : null,
      openNow:
        typeof place.currentOpeningHours?.openNow === "boolean"
          ? place.currentOpeningHours.openNow
          : null,
      distanceKm: distanceKm(center, { lat, lng }),
      category,
      partner: false,
      partnerBenefit: null,
    });
  }
  return out.sort((a, b) => a.distanceKm - b.distanceKm).slice(0, 12);
}

async function nearby(
  center: { lat: number; lng: number },
  radiusMeters: number,
  types: string[],
  locale: string,
): Promise<RawPlace[]> {
  const data = await call("/places/v1/places:searchNearby", {
    method: "POST",
    headers: headers(SEARCH_MASK),
    body: JSON.stringify({
      includedTypes: types,
      maxResultCount: 20,
      languageCode: languageCode(locale),
      locationRestriction: { circle: { center: { latitude: center.lat, longitude: center.lng }, radius: radiusMeters } },
    }),
  });
  return (data["places"] ?? []) as RawPlace[];
}

async function textNearby(
  center: { lat: number; lng: number },
  radiusMeters: number,
  query: string,
  locale: string,
): Promise<RawPlace[]> {
  const data = await call("/places/v1/places:searchText", {
    method: "POST",
    headers: headers(SEARCH_MASK),
    body: JSON.stringify({
      textQuery: query,
      pageSize: 20,
      languageCode: languageCode(locale),
      locationBias: { circle: { center: { latitude: center.lat, longitude: center.lng }, radius: radiusMeters } },
    }),
  });
  return (data["places"] ?? []) as RawPlace[];
}

const WALK_QUERY: Record<string, string> = {
  en: "walking trail",
  no: "turløype",
  pl: "szlak spacerowy",
  dk: "vandresti",
  se: "vandringsled",
  fi: "ulkoilureitti",
  de: "Wanderweg",
  fr: "sentier de randonnée",
  nl: "wandelroute",
};

const DOG_PARK_QUERY: Record<string, string> = {
  en: "dog park",
  no: "hundepark",
  pl: "wybieg dla psów",
  dk: "hundepark",
  se: "hundrastgård",
  fi: "koirapuisto",
  de: "Hundewiese",
  fr: "parc canin",
  nl: "hondenlosloopgebied",
};

export async function fetchCategory(
  category: PlaceCategory,
  center: { lat: number; lng: number },
  radiusKm: number,
  locale: string,
): Promise<PlaceResult[]> {
  const radius = Math.min(Math.max(radiusKm, 1), 50) * 1000;
  try {
    if (category === "parks") {
      const [dogParks, parks] = await Promise.all([
        textNearby(center, radius, DOG_PARK_QUERY[locale] ?? DOG_PARK_QUERY["en"]!, locale),
        nearby(center, radius, ["dog_park", "park"], locale),
      ]);
      return toResults([...dogParks, ...parks], center, category, radiusKm);
    }
    if (category === "walks") {
      const raw = await textNearby(
        center,
        radius,
        WALK_QUERY[locale] ?? WALK_QUERY["en"]!,
        locale,
      );
      return toResults(raw, center, category, radiusKm);
    }
    if (category === "vets") {
      return toResults(await nearby(center, radius, ["veterinary_care"], locale), center, category, radiusKm);
    }
    return toResults(await nearby(center, radius, ["pet_store"], locale), center, category, radiusKm);
  } catch (error) {
    console.error(`[places] category ${category} failed`, error);
    return [];
  }
}

/** Approved partners, by company name only — nothing personal leaves the server. */
export async function approvedPartners(): Promise<Array<{ name: string; benefit: string | null }>> {
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data } = await supabaseAdmin
      .from("partners")
      .select("company,benefit,status")
      .eq("status", "approved")
      .limit(500);
    return (data ?? []).map((row) => ({
      name: String(row.company ?? ""),
      benefit: (row.benefit as string | null) ?? null,
    }));
  } catch (error) {
    console.error("[places] partner lookup failed", error);
    return [];
  }
}
