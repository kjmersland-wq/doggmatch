import { useState } from "react";
import { Download } from "lucide-react";
import { interpolate, useCopy } from "@/i18n";
import { breedImages } from "@/data/breed-images";
import type { BreedId } from "@/data/breeds";
import { track } from "@/lib/analytics";
import { Button } from "./ui";

/**
 * A clean, shareable summary of the match: breed, percentage, the reasons it
 * fits, and the limits that ruled other breeds out. It is drawn twice from the
 * same data — as markup on the page and on a canvas for "Save as image" — with
 * fixed brand colours so the picture looks the same in light and dark mode.
 */

const copy = {
  en: {
    label: "Your DoggMatch",
    reasons: "Why it fits",
    limits: "Ruled out by your limits",
    limitsMore: "+{n} more breeds ruled out",
    tagline: "Matched on DoggMatch — rules you can see.",
    save: "Save as image",
    saved: "Image saved",
    match: "match",
  },
  no: {
    label: "Din DoggMatch",
    reasons: "Hvorfor den passer",
    limits: "Utelukket av dine grenser",
    limitsMore: "+{n} raser til utelukket",
    tagline: "Matchet på DoggMatch — regler du kan se.",
    save: "Lagre som bilde",
    saved: "Bilde lagret",
    match: "match",
  },
  pl: {
    label: "Twój DoggMatch",
    reasons: "Dlaczego pasuje",
    limits: "Odrzucone przez Twoje granice",
    limitsMore: "+{n} ras więcej odrzuconych",
    tagline: "Dopasowano w DoggMatch — zasady, które widzisz.",
    save: "Zapisz jako obraz",
    saved: "Obraz zapisany",
    match: "dopasowania",
  },
  dk: {
    label: "Dit DoggMatch",
    reasons: "Hvorfor den passer",
    limits: "Udelukket af dine grænser",
    limitsMore: "+{n} racer mere udelukket",
    tagline: "Matchet på DoggMatch — regler, du kan se.",
    save: "Gem som billede",
    saved: "Billede gemt",
    match: "match",
  },
  se: {
    label: "Din DoggMatch",
    reasons: "Varför den passar",
    limits: "Utesluten av dina gränser",
    limitsMore: "+{n} raser till uteslutna",
    tagline: "Matchad på DoggMatch — regler du kan se.",
    save: "Spara som bild",
    saved: "Bild sparad",
    match: "match",
  },
  fi: {
    label: "Sinun DoggMatchisi",
    reasons: "Miksi se sopii",
    limits: "Rajasi sulkivat pois",
    limitsMore: "+{n} rotua lisää suljettu pois",
    tagline: "Sovitettu DoggMatchissa — säännöt, jotka näet.",
    save: "Tallenna kuvana",
    saved: "Kuva tallennettu",
    match: "osuma",
  },
  de: {
    label: "Dein DoggMatch",
    reasons: "Warum er passt",
    limits: "Durch deine Grenzen ausgeschlossen",
    limitsMore: "+{n} weitere Rassen ausgeschlossen",
    tagline: "Gematcht auf DoggMatch — Regeln, die du sehen kannst.",
    save: "Als Bild speichern",
    saved: "Bild gespeichert",
    match: "Übereinstimmung",
  },
  fr: {
    label: "Votre DoggMatch",
    reasons: "Pourquoi il vous convient",
    limits: "Écartées par vos limites",
    limitsMore: "+{n} autres races écartées",
    tagline: "Trouvé sur DoggMatch — des règles que vous pouvez voir.",
    save: "Enregistrer en image",
    saved: "Image enregistrée",
    match: "de compatibilité",
  },
  nl: {
    label: "Jouw DoggMatch",
    reasons: "Waarom hij past",
    limits: "Uitgesloten door je grenzen",
    limitsMore: "+{n} rassen meer uitgesloten",
    tagline: "Gematcht op DoggMatch — regels die je kunt zien.",
    save: "Opslaan als afbeelding",
    saved: "Afbeelding opgeslagen",
    match: "match",
  },
} as const;

const NAVY = "#0f1f33";
const PAPER = "#f4efe6";
const MUTED = "#b8c2cf";
const ACCENT = "#f08a5d";

export interface CardLimit {
  breedName: string;
  reason: string;
}

interface Props {
  breedId: BreedId;
  breedName: string;
  score: number;
  reasons: string[];
  /** Breeds a hard limit removed, most relevant first. */
  limits: CardLimit[];
  /** Total number of breeds ruled out, which may exceed `limits.length`. */
  limitsTotal: number;
}

const MAX_REASONS = 3;
const MAX_LIMITS = 2;

export function MatchCard({ breedId, breedName, score, reasons, limits, limitsTotal }: Props) {
  const c = useCopy(copy);
  const [saved, setSaved] = useState(false);
  const shownReasons = reasons.slice(0, MAX_REASONS);
  const shownLimits = limits.slice(0, MAX_LIMITS);
  const more = Math.max(0, limitsTotal - shownLimits.length);

  async function saveImage() {
    try {
      const blob = await drawCard({
        image: breedImages[breedId],
        breedName,
        score,
        reasons: shownReasons,
        limits: shownLimits,
        more: more > 0 ? interpolate(c.limitsMore, { n: more }) : "",
        copy: c,
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `doggmatch-${breedId}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 4000);
      setSaved(true);
      track("result_shared", { kind: "image", breed: breedId });
      window.setTimeout(() => setSaved(false), 2200);
    } catch {
      /* canvas or download blocked — the card on screen is still there to screenshot */
    }
  }

  return (
    <div className="max-w-md">
      <figure
        className="overflow-hidden rounded-[1.5rem] shadow-[var(--shadow-soft)]"
        style={{ background: NAVY, color: PAPER }}
      >
        <div className="relative">
          <img
            src={breedImages[breedId]}
            alt={breedName}
            width={1024}
            height={1280}
            className="aspect-[16/10] w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to top, ${NAVY} 0%, transparent 60%)` }}
          />
        </div>
        <div className="-mt-10 relative px-6 pb-6">
          <p
            className="text-xs font-semibold uppercase tracking-[0.14em]"
            style={{ color: ACCENT }}
          >
            {c.label}
          </p>
          <div className="mt-1 flex items-end justify-between gap-4">
            <p className="font-display text-2xl leading-tight">{breedName}</p>
            <p className="shrink-0 text-right" style={{ color: ACCENT }}>
              <span className="font-display text-4xl font-semibold tabular-nums">{score}%</span>
              <span className="block text-xs" style={{ color: MUTED }}>
                {c.match}
              </span>
            </p>
          </div>

          <p
            className="mt-5 text-xs font-semibold uppercase tracking-[0.12em]"
            style={{ color: MUTED }}
          >
            {c.reasons}
          </p>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed">
            {shownReasons.map((r) => (
              <li key={r} className="flex gap-2">
                <span aria-hidden="true" style={{ color: ACCENT }}>
                  ✓
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ul>

          {shownLimits.length > 0 && (
            <>
              <p
                className="mt-5 text-xs font-semibold uppercase tracking-[0.12em]"
                style={{ color: MUTED }}
              >
                {c.limits}
              </p>
              <ul className="mt-2 space-y-1.5 text-sm leading-relaxed">
                {shownLimits.map((l) => (
                  <li key={l.breedName}>
                    <span className="font-medium">{l.breedName}</span>
                    <span style={{ color: MUTED }}> — {l.reason}</span>
                  </li>
                ))}
                {more > 0 && (
                  <li className="text-xs" style={{ color: MUTED }}>
                    {interpolate(c.limitsMore, { n: more })}
                  </li>
                )}
              </ul>
            </>
          )}

          <p
            className="mt-6 border-t pt-4 text-xs"
            style={{ borderColor: "#ffffff24", color: MUTED }}
          >
            {c.tagline}
          </p>
        </div>
      </figure>

      <Button tone="outline" className="mt-4" onClick={() => void saveImage()}>
        <Download className="h-4 w-4" aria-hidden="true" />
        {saved ? c.saved : c.save}
      </Button>
    </div>
  );
}

/* ---------- canvas drawing: the same card, as a 1080-wide PNG ---------- */

interface DrawInput {
  image: string;
  breedName: string;
  score: number;
  reasons: string[];
  limits: CardLimit[];
  more: string;
  copy: (typeof copy)[keyof typeof copy];
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("image failed"));
    img.src = src;
  });
}

/** Splits text into lines that fit `maxWidth` at the context's current font. */
function wrap(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    const next = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(next).width > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

async function drawCard(input: DrawInput): Promise<Blob> {
  const W = 1080;
  const pad = 64;
  const textW = W - pad * 2;
  const sans = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";
  const photo = await loadImage(input.image);
  const photoH = Math.round(W * 0.56);

  // Measure first so the canvas is exactly as tall as its content.
  const probe = document.createElement("canvas").getContext("2d")!;
  probe.font = `34px ${sans}`;
  const reasonLines = input.reasons.map((r) => wrap(probe, r, textW - 44));
  const limitLines = input.limits.map((l) => wrap(probe, `${l.breedName} — ${l.reason}`, textW));
  const lineH = 46;
  const count = (rows: string[][]) => rows.reduce((n, r) => n + r.length, 0);
  const height =
    photoH +
    260 +
    count(reasonLines) * lineH +
    input.reasons.length * 14 +
    (input.limits.length
      ? 90 + count(limitLines) * lineH + input.limits.length * 14 + (input.more ? lineH : 0)
      : 0) +
    130;

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = NAVY;
  ctx.fillRect(0, 0, W, height);

  // Photo, cropped to fill, fading into the card.
  const scale = Math.max(W / photo.width, photoH / photo.height);
  const dw = photo.width * scale;
  const dh = photo.height * scale;
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 0, W, photoH);
  ctx.clip();
  ctx.drawImage(photo, (W - dw) / 2, (photoH - dh) / 2, dw, dh);
  ctx.restore();
  const fade = ctx.createLinearGradient(0, photoH * 0.4, 0, photoH);
  fade.addColorStop(0, "rgba(15,31,51,0)");
  fade.addColorStop(1, NAVY);
  ctx.fillStyle = fade;
  ctx.fillRect(0, 0, W, photoH);

  let y = photoH - 20;
  ctx.textBaseline = "alphabetic";

  ctx.fillStyle = ACCENT;
  ctx.font = `600 28px ${sans}`;
  ctx.fillText(input.copy.label.toUpperCase(), pad, y);

  y += 78;
  ctx.fillStyle = PAPER;
  ctx.font = `600 60px ${sans}`;
  ctx.fillText(input.breedName, pad, y);

  ctx.textAlign = "right";
  ctx.fillStyle = ACCENT;
  ctx.font = `700 84px ${sans}`;
  ctx.fillText(`${input.score}%`, W - pad, y + 4);
  ctx.textAlign = "left";

  y += 90;
  ctx.fillStyle = MUTED;
  ctx.font = `600 26px ${sans}`;
  ctx.fillText(input.copy.reasons.toUpperCase(), pad, y);

  y += 56;
  ctx.font = `34px ${sans}`;
  reasonLines.forEach((lines) => {
    ctx.fillStyle = ACCENT;
    ctx.fillText("✓", pad, y);
    ctx.fillStyle = PAPER;
    lines.forEach((line) => {
      ctx.fillText(line, pad + 44, y);
      y += lineH;
    });
    y += 14;
  });

  if (input.limits.length) {
    y += 30;
    ctx.fillStyle = MUTED;
    ctx.font = `600 26px ${sans}`;
    ctx.fillText(input.copy.limits.toUpperCase(), pad, y);
    y += 56;
    ctx.font = `34px ${sans}`;
    ctx.fillStyle = PAPER;
    limitLines.forEach((lines) => {
      lines.forEach((line) => {
        ctx.fillText(line, pad, y);
        y += lineH;
      });
      y += 14;
    });
    if (input.more) {
      ctx.fillStyle = MUTED;
      ctx.font = `28px ${sans}`;
      ctx.fillText(input.more, pad, y);
      y += lineH;
    }
  }

  ctx.fillStyle = "rgba(255,255,255,0.14)";
  ctx.fillRect(pad, height - 100, textW, 2);
  ctx.fillStyle = MUTED;
  ctx.font = `28px ${sans}`;
  ctx.fillText(`${input.copy.tagline}  doggmatch.com`, pad, height - 48);

  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("no blob"))), "image/png"),
  );
}
