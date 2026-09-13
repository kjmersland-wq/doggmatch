import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useLocale } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";
import { getSendCopy } from "@/lib/places/send-copy";
import { coordsText, mapsLink, savedPlaces, useSavedPlaces } from "@/lib/places/saved";
import type { PlaceResult } from "@/lib/places/types";
import { useMembership } from "@/hooks/use-membership";

type Props = { place: PlaceResult };

export function PlaceSend({ place }: Props) {
  const locale = useLocale();
  const c = getSendCopy(locale);
  const [open, setOpen] = useState(false);
  const [qr, setQr] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const saved = useSavedPlaces();
  const { membership } = useMembership();
  const isSaved = saved.some((p) => p.id === place.id);
  const link = mapsLink(place);
  const coords = coordsText(place);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!open || qr) return;
    let cancelled = false;
    void import("qrcode").then(async (mod) => {
      const url = await mod.default.toDataURL(link, {
        margin: 1,
        width: 320,
        color: { dark: "#071A2F", light: "#F7F3EC" },
      });
      if (!cancelled) setQr(url);
    });
    return () => {
      cancelled = true;
    };
  }, [open, qr, link]);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copyCoords() {
    try {
      await navigator.clipboard.writeText(`${place.name} — ${coords}\n${link}`);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* some browsers refuse; the text is on screen anyway */
    }
  }

  async function shareLink() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: place.name, text: place.address, url: link });
        return;
      } catch {
        /* the person changed their mind */
      }
    }
    await copyCoords();
  }

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        {open ? c.close : c.send}
      </button>

      {open && (
        <div className="mt-4 rounded-2xl border border-border bg-card p-5">
          <p className="font-display text-lg tracking-tight">{c.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.intro}</p>

          <div className="mt-5 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start">
            <div className="w-36 shrink-0 rounded-xl bg-[#F7F3EC] p-2">
              {qr ? (
                <img src={qr} alt={`${c.scanTitle}: ${place.name}`} className="h-full w-full" />
              ) : (
                <div className="aspect-square w-full animate-pulse rounded-lg bg-muted" />
              )}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold">{c.scanTitle}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.scanBody}</p>
              <p className="mt-4 text-sm font-semibold">{c.carTitle}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.carBody}</p>
              <p className="mt-3 text-sm">
                <span className="text-muted-foreground">{c.coords}: </span>
                <span className="font-mono">{coords}</span>
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => void copyCoords()}
                  className="rounded-full border border-border px-4 py-2 text-sm hover:border-primary"
                >
                  {copied ? c.copied : c.copy}
                </button>
                <button
                  type="button"
                  onClick={() => void shareLink()}
                  className="rounded-full border border-border px-4 py-2 text-sm hover:border-primary"
                >
                  {c.shareToPhone}
                </button>
                {membership.subscribed ? (
                  <button
                    type="button"
                    onClick={() =>
                      savedPlaces.toggle({
                        id: place.id,
                        name: place.name,
                        address: place.address,
                        lat: place.lat,
                        lng: place.lng,
                        category: place.category,
                      })
                    }
                    className={`rounded-full px-4 py-2 text-sm ${
                      isSaved
                        ? "bg-primary text-primary-foreground"
                        : "border border-border hover:border-primary"
                    }`}
                  >
                    {isSaved ? c.saved : c.save}
                  </button>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {c.plusHint}{" "}
                    <Link
                      to={withLangPrefix("/plus", locale)}
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      {c.plusLink}
                    </Link>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** The places a member has kept, shown above the results. */
export function SavedPlacesPanel() {
  const locale = useLocale();
  const c = getSendCopy(locale);
  const saved = useSavedPlaces();
  const { membership } = useMembership();
  if (!membership.subscribed || saved.length === 0) return null;

  return (
    <section className="container-page mt-10">
      <h2 className="font-display text-2xl tracking-tight">{c.savedTitle}</h2>
      <ul className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {saved.map((place) => (
          <li key={place.id} className="flex items-start justify-between gap-4 bg-background p-5">
            <div className="min-w-0">
              <p className="font-display text-base leading-tight tracking-tight">{place.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{place.address}</p>
              <a
                className="mt-2 inline-block text-sm text-primary underline-offset-4 hover:underline"
                href={mapsLink(place)}
                target="_blank"
                rel="noreferrer"
              >
                {coordsText(place)}
              </a>
            </div>
            <button
              type="button"
              onClick={() => savedPlaces.remove(place.id)}
              className="shrink-0 text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              {c.remove}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
