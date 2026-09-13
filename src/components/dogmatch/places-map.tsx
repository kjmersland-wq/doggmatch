/// <reference types="google.maps" />
import { useEffect, useRef, useState } from "react";
import type { PlaceResult } from "@/lib/places/types";
import { getStaticMap } from "@/lib/places/staticmap.functions";

const BROWSER_KEY =
  (import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"] as string | undefined) ??
  (import.meta.env["VITE_GOOGLE_MAPS_API_KEY"] as string | undefined) ??
  "";

const TRACKING_ID =
  (import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID"] as string | undefined) ?? "";

const NAVY = "#071A2F";
const ORANGE = "#FF5A1F";
const IVORY = "#F7F3EC";

type Maps = typeof google.maps;

let loader: Promise<Maps> | null = null;

function loadMaps(): Promise<Maps> {
  if (typeof window === "undefined") return Promise.reject(new Error("no_window"));
  if (window.google?.maps) return Promise.resolve(window.google.maps);
  if (loader) return loader;

  loader = new Promise<Maps>((resolve, reject) => {
    if (!BROWSER_KEY) {
      reject(new Error("missing_browser_key"));
      return;
    }
    const callbackName = "__doggmatchMapsReady";
    (window as unknown as Record<string, unknown>)[callbackName] = () => {
      resolve(window.google.maps);
    };
    const script = document.createElement("script");
    const params = new URLSearchParams({
      key: BROWSER_KEY,
      loading: "async",
      callback: callbackName,
    });
    if (TRACKING_ID) params.set("channel", TRACKING_ID);
    script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
    script.async = true;
    script.onerror = () => reject(new Error("maps_script_failed"));
    document.head.appendChild(script);
  });
  return loader;
}

function distance(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLng / 2) ** 2 * Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180);
  return 2 * R * Math.asin(Math.sqrt(h));
}

function markerIcon(maps: Maps, highlighted: boolean) {
  return {
    path: maps.SymbolPath.CIRCLE,
    scale: highlighted ? 9 : 7,
    fillColor: highlighted ? ORANGE : IVORY,
    fillOpacity: 1,
    strokeColor: NAVY,
    strokeWeight: highlighted ? 3 : 2,
  };
}

type Props = {
  center: { lat: number; lng: number };
  places: PlaceResult[];
  activeId: string | null;
  onSelect: (id: string) => void;
  label: string;
  radiusKm?: number;
  standardLabel?: string;
  satelliteLabel?: string;
};

export default function PlacesMap({
  center,
  places,
  activeId,
  onSelect,
  label,
  radiusKm = 10,
  standardLabel = "Map",
  satelliteLabel = "Satellite",
}: Props) {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const [ready, setReady] = useState(false);
  const [fallback, setFallback] = useState<string | null>(null);
  const [satellite, setSatellite] = useState(false);
  const [satelliteBlocked, setSatelliteBlocked] = useState(false);

  useEffect(() => {
    let cancelled = false;
    if (BROWSER_KEY) return undefined;
    setFallback(null);
    getStaticMap({
      data: {
        center,
        points: places.slice(0, 24).map((place) => ({
          lat: place.lat,
          lng: place.lng,
          highlight: place.partner || place.id === activeId,
        })),
        width: 640,
        height: 360,
        radiusKm,
        mapType: satellite ? "satellite" : "roadmap",
      },
    })
      .then((response) => {
        if (cancelled || !response.ok || !response.image) return;
        setFallback(response.image);
        if (satellite && response.mapType !== "satellite") {
          setSatelliteBlocked(true);
          setSatellite(false);
        }
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [center, places, activeId, radiusKm, satellite]);

  useEffect(() => {
    let cancelled = false;
    if (!BROWSER_KEY) return undefined;
    loadMaps()
      .then((maps) => {
        if (cancelled || !nodeRef.current) return;
        if (!mapRef.current) {
          mapRef.current = new maps.Map(nodeRef.current, {
            center,
            zoom: 12,
            clickableIcons: false,
            disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: satellite ? "hybrid" : "roadmap",
            backgroundColor: NAVY,
            styles: [{ featureType: "poi", stylers: [{ visibility: "off" }] }],
          });
        } else {
          mapRef.current.panTo(center);
        }
        mapRef.current?.setMapTypeId(satellite ? "hybrid" : "roadmap");
        setReady(true);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [center, satellite]);

  useEffect(() => {
    const maps = typeof window !== "undefined" ? window.google?.maps : undefined;
    const map = mapRef.current;
    if (!maps || !map) return;

    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    const bounds = new maps.LatLngBounds();
    bounds.extend(center);

    places.forEach((place) => {
      if (distance(center, place) > radiusKm * 1.5) return;
      const marker = new maps.Marker({
        map,
        position: { lat: place.lat, lng: place.lng },
        title: place.name,
        icon: markerIcon(maps, place.partner || place.id === activeId),
        zIndex: place.partner ? 3 : place.id === activeId ? 2 : 1,
      });
      marker.addListener("click", () => onSelect(place.id));
      markersRef.current.push(marker);
      bounds.extend({ lat: place.lat, lng: place.lng });
    });

    if (places.length > 0) map.fitBounds(bounds, 48);
    else map.panTo(center);
  }, [places, activeId, center, onSelect, ready, radiusKm]);

  const toggle = (
    <div className="absolute right-3 top-3 z-10 flex overflow-hidden rounded-full border border-border bg-ink/85 text-xs backdrop-blur">
      <button
        type="button"
        onClick={() => setSatellite(false)}
        aria-pressed={!satellite}
        className={`px-3 py-1.5 ${satellite ? "text-cream/70" : "bg-cream text-ink"}`}
      >
        {standardLabel}
      </button>
      {satelliteBlocked ? null : (
      <button
        type="button"
        onClick={() => setSatellite(true)}
        aria-pressed={satellite}
        className={`px-3 py-1.5 ${satellite ? "bg-cream text-ink" : "text-cream/70"}`}
      >
        {satelliteLabel}
      </button>
      )}
    </div>
  );

  if (!BROWSER_KEY) {
    return (
      <div className="relative h-[22rem] w-full bg-ink md:h-[30rem]">
        {toggle}
        {fallback ? (
          <img
            src={fallback}
            alt={label}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : null}
      </div>
    );
  }

  return (
    <div className="relative h-[22rem] w-full md:h-[30rem]">
      {toggle}
      <div ref={nodeRef} role="application" aria-label={label} className="h-full w-full bg-ink" />
    </div>
  );
}
