export type PlaceCategory = "parks" | "walks" | "vets" | "stores";

export const PLACE_CATEGORIES: PlaceCategory[] = ["parks", "walks", "vets", "stores"];

export type PlaceResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating: number | null;
  ratingCount: number | null;
  openNow: boolean | null;
  distanceKm: number;
  category: PlaceCategory;
  partner: boolean;
  partnerBenefit: string | null;
};

export type Suggestion = { placeId: string; label: string };

export type NearbyResult = {
  center: { lat: number; lng: number };
  radiusKm: number;
  places: Record<PlaceCategory, PlaceResult[]>;
};
