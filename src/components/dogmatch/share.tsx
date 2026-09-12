import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useCopy, useLocale } from "@/i18n";
import { SITE_URL } from "@/lib/seo";

/**
 * A quiet, global way to pass a page — or one section of it — on to someone
 * else. Phones get the native share sheet; everywhere else gets the full set
 * of social buttons, e-mail and copy link. Shared links keep the language the
 * reader is in, so the preview card matches what they saw.
 */

const copy = {
  en: {
    share: "Share",
    shareThis: "Share this page",
    close: "Close",
    copy: "Copy link",
    copied: "Link copied",
    email: "E-mail",
    shareSection: "Share this section",
  },
  no: {
    share: "Del",
    shareThis: "Del denne siden",
    close: "Lukk",
    copy: "Kopier lenke",
    copied: "Lenke kopiert",
    email: "E-post",
    shareSection: "Del denne delen",
  },
  pl: {
    share: "Udostępnij",
    shareThis: "Udostępnij tę stronę",
    close: "Zamknij",
    copy: "Kopiuj link",
    copied: "Link skopiowany",
    email: "E-mail",
    shareSection: "Udostępnij tę sekcję",
  },
  dk: {
    share: "Del",
    shareThis: "Del denne side",
    close: "Luk",
    copy: "Kopiér link",
    copied: "Link kopieret",
    email: "E-mail",
    shareSection: "Del dette afsnit",
  },
  se: {
    share: "Dela",
    shareThis: "Dela den här sidan",
    close: "Stäng",
    copy: "Kopiera länk",
    copied: "Länk kopierad",
    email: "E-post",
    shareSection: "Dela det här avsnittet",
  },
  fi: {
    share: "Jaa",
    shareThis: "Jaa tämä sivu",
    close: "Sulje",
    copy: "Kopioi linkki",
    copied: "Linkki kopioitu",
    email: "Sähköposti",
    shareSection: "Jaa tämä osio",
  },
  de: {
    share: "Teilen",
    shareThis: "Diese Seite teilen",
    close: "Schließen",
    copy: "Link kopieren",
    copied: "Link kopiert",
    email: "E-Mail",
    shareSection: "Diesen Abschnitt teilen",
  },
  fr: {
    share: "Partager",
    shareThis: "Partager cette page",
    close: "Fermer",
    copy: "Copier le lien",
    copied: "Lien copié",
    email: "E-mail",
    shareSection: "Partager cette section",
  },
  nl: {
    share: "Delen",
    shareThis: "Deze pagina delen",
    close: "Sluiten",
    copy: "Link kopiëren",
    copied: "Link gekopieerd",
    email: "E-mail",
    shareSection: "Deze sectie delen",
  },
} as const;

function useShareUrl(path?: string, anchor?: string) {
  const { locale } = useLocale();
  const [href, setHref] = useState("");
  useEffect(() => {
    const rawPath = path ?? window.location.pathname;
    // Share links always keep the reader's language as a path prefix —
    // never a ?lang= query string.
    const prefixed =
      locale === "en" || rawPath.startsWith(`/${locale}/`) || rawPath === `/${locale}`
        ? rawPath
        : `/${locale}${rawPath === "/" ? "" : rawPath}`;
    const url = new URL(`${SITE_URL}${prefixed || "/"}`);
    if (anchor) url.hash = anchor;
    setHref(url.toString());
  }, [path, anchor, locale]);
  return href;
}

type Target = { id: string; label: string; href: string; brand: string; icon: ReactNode };

function useTargets(url: string, shareTitle: string, shareText: string): Target[] {
  const c = useCopy(copy);
  return useMemo(() => {
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(shareText);
    const ti = encodeURIComponent(shareTitle);
    return [
      {
        id: "facebook",
        label: "Facebook",
        brand: "#1877F2",
        href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
        icon: <FacebookIcon />,
      },
      {
        id: "x",
        label: "X",
        brand: "#0F1419",
        href: `https://x.com/intent/tweet?url=${u}&text=${t}`,
        icon: <XIcon />,
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        brand: "#25D366",
        href: `https://wa.me/?text=${t}%20${u}`,
        icon: <WhatsAppIcon />,
      },
      {
        id: "messenger",
        label: "Messenger",
        brand: "#0084FF",
        href: `https://www.facebook.com/dialog/send?link=${u}&app_id=0&redirect_uri=${u}`,
        icon: <MessengerIcon />,
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        brand: "#0A66C2",
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
        icon: <LinkedInIcon />,
      },
      {
        id: "pinterest",
        label: "Pinterest",
        brand: "#E60023",
        href: `https://pinterest.com/pin/create/button/?url=${u}&description=${t}`,
        icon: <PinterestIcon />,
      },
      {
        id: "reddit",
        label: "Reddit",
        brand: "#FF4500",
        href: `https://www.reddit.com/submit?url=${u}&title=${ti}`,
        icon: <RedditIcon />,
      },
      {
        id: "telegram",
        label: "Telegram",
        brand: "#26A5E4",
        href: `https://t.me/share/url?url=${u}&text=${t}`,
        icon: <TelegramIcon />,
      },
      {
        id: "email",
        label: c.email,
        brand: "#5B6472",
        href: `mailto:?subject=${ti}&body=${t}%0A%0A${u}`,
        icon: <MailIcon />,
      },
    ];
  }, [url, shareText, shareTitle, c]);
}

type ShareProps = {
  /** Page title used as the share text. Falls back to the document title. */
  title?: string | undefined;
  /** A sentence of context for e-mail and WhatsApp. */
  text?: string | undefined;
  /** Path to share. Defaults to the current page. */
  path?: string | undefined;
  /** Anchor id, so the reader lands on the right section. */
  anchor?: string | undefined;
  className?: string | undefined;
  /** Compact icon-only trigger, for use beside a section heading. */
  compact?: boolean | undefined;
  label?: string | undefined;
};

export function ShareBar({ title, text, path, anchor, className, compact, label }: ShareProps) {
  const c = useCopy(copy);
  const url = useShareUrl(path, anchor);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareTitle = title ?? (typeof document !== "undefined" ? document.title : "DoggMatch");
  const shareText = text ?? shareTitle;
  const targets = useTargets(url, shareTitle, shareText);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard blocked — the links are still there */
    }
  }, [url]);

  const onTrigger = useCallback(async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText, url });
        return;
      } catch {
        /* dismissed, or not allowed — fall through to the panel */
      }
    }
    setOpen((v) => !v);
  }, [shareTitle, shareText, url]);

  return (
    <div className={cn("relative inline-block print:hidden", className)}>
      <button
        type="button"
        onClick={onTrigger}
        aria-label={anchor ? c.shareSection : c.shareThis}
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-border-strong text-foreground transition-colors hover:bg-surface",
          compact ? "h-9 w-9 justify-center" : "h-10 px-4 text-sm font-medium",
        )}
      >
        <ShareIcon />
        {!compact && <span>{label ?? c.share}</span>}
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label={c.close}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default"
          />
          <div
            role="dialog"
            aria-label={c.shareThis}
            className="absolute right-0 z-50 mt-2 w-64 rounded-2xl border border-border bg-background p-2 shadow-[var(--shadow-lift)]"
          >
            {targets.map((tgt) => (
              <a
                key={tgt.id}
                href={tgt.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-surface"
              >
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: tgt.brand }}
                >
                  {tgt.icon}
                </span>
                {tgt.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onCopy}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-surface"
            >
              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-border-strong"
              >
                <LinkIcon />
              </span>
              {copied ? c.copied : c.copy}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

/**
 * A quiet, inline row for the end of long-form content: a muted label plus a
 * handful of low-contrast icon buttons (no popover), so sharing never reads
 * as a promotional interruption.
 */
export function InlineShare({ title, text, path, label, className }: ShareProps) {
  const c = useCopy(copy);
  const url = useShareUrl(path);
  const [copied, setCopied] = useState(false);
  const shareTitle = title ?? (typeof document !== "undefined" ? document.title : "DoggMatch");
  const shareText = text ?? shareTitle;
  const allTargets = useTargets(url, shareTitle, shareText);
  const targets = allTargets.filter((tgt) => tgt.id === "whatsapp" || tgt.id === "facebook" || tgt.id === "email");

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard blocked — the icons are still there */
    }
  }, [url]);

  return (
    <div className={cn("flex flex-wrap items-center gap-3 print:hidden", className)}>
      <span className="text-sm text-muted-foreground">{label ?? c.shareThis}</span>
      <div className="flex items-center gap-1">
        {targets.map((tgt) => (
          <a
            key={tgt.id}
            href={tgt.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tgt.label}
            title={tgt.label}
            className="grid h-9 w-9 place-items-center rounded-full text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
          >
            {tgt.icon}
          </a>
        ))}
        <button
          type="button"
          onClick={onCopy}
          aria-label={c.copy}
          title={copied ? c.copied : c.copy}
          className="grid h-9 w-9 place-items-center rounded-full text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
        >
          <LinkIcon />
        </button>
      </div>
    </div>
  );
}

/** A section heading with a stable anchor and its own share button. */
export function SectionShare({
  anchor,
  title,
  text,
  className,
}: {
  anchor: string;
  title?: string;
  text?: string;
  className?: string;
}) {
  return <ShareBar compact anchor={anchor} title={title} text={text} className={className} />;
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M12 15V3m0 0L8 7m4-4 4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10.8 5.14M14 11a5 5 0 0 0-7.07 0L4.8 13.12a5 5 0 0 0 7.07 7.07l1.3-1.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const S = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "currentColor" } as const;

function FacebookIcon() {
  return (
    <svg {...S}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6A21 21 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg {...S}>
      <path d="M17.7 3h3l-6.55 7.5L21.9 21h-6l-4.7-6.15L5.8 21h-3l7-8L2.4 3h6.15l4.25 5.6zm-1.05 16.2h1.65L7.45 4.7H5.7z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg {...S}>
      <path d="M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.33A10 10 0 1 0 12 2m0 1.8a8.2 8.2 0 1 1-4.2 15.24l-.3-.18-3.03.79.8-2.95-.2-.31A8.2 8.2 0 0 1 12 3.8m-3.7 4.1c-.18 0-.47.07-.72.34s-.94.92-.94 2.24.96 2.6 1.1 2.78 1.9 2.9 4.6 3.96c2.24.88 2.7.7 3.19.66.48-.05 1.56-.64 1.78-1.25s.22-1.14.16-1.25-.18-.18-.38-.28-1.56-.77-1.8-.86-.42-.13-.6.14-.68.86-.84 1.04-.31.2-.57.07a7.4 7.4 0 0 1-2.17-1.34 8.2 8.2 0 0 1-1.5-1.87c-.16-.27 0-.42.12-.55l.4-.47c.13-.16.17-.27.26-.45s.05-.34-.02-.48-.6-1.47-.83-2c-.21-.5-.43-.44-.6-.45z" />
    </svg>
  );
}
function MessengerIcon() {
  return (
    <svg {...S}>
      <path d="M12 2C6.3 2 2 6.2 2 11.8c0 3.2 1.4 6 3.7 7.8V23l3.4-1.9c.9.25 1.9.4 2.9.4 5.7 0 10-4.2 10-9.7S17.7 2 12 2m1 12.8-2.6-2.75L5.4 14.8l5.5-5.85 2.6 2.75 4.95-2.75z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg {...S}>
      <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0M3.3 8.9h3.4V21H3.3zm5.6 0h3.25v1.65h.05c.45-.85 1.56-1.75 3.2-1.75 3.43 0 4.06 2.25 4.06 5.18V21h-3.4v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H8.9z" />
    </svg>
  );
}
function PinterestIcon() {
  return (
    <svg {...S}>
      <path d="M12 2a10 10 0 0 0-3.65 19.3c-.09-.79-.17-2 .03-2.87l1.16-4.9s-.29-.6-.29-1.48c0-1.38.8-2.42 1.8-2.42.85 0 1.26.64 1.26 1.4 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.57 0-2.39-1.72-4.06-4.17-4.06-2.84 0-4.5 2.12-4.5 4.32 0 .85.32 1.77.73 2.27a.3.3 0 0 1 .07.28l-.28 1.1c-.04.19-.14.23-.33.14-1.25-.58-2.03-2.4-2.03-3.86 0-3.14 2.28-6.03 6.58-6.03 3.45 0 6.14 2.46 6.14 5.75 0 3.43-2.17 6.2-5.17 6.2-1.01 0-1.96-.53-2.28-1.15l-.62 2.37c-.23.86-.83 1.94-1.24 2.6A10 10 0 1 0 12 2" />
    </svg>
  );
}
function RedditIcon() {
  return (
    <svg {...S}>
      <path d="M22 12.2a2.15 2.15 0 0 0-3.64-1.54 10.6 10.6 0 0 0-5.7-1.8l.97-4.57 3.18.68a1.85 1.85 0 1 0 .2-1.3l-3.72-.8a.66.66 0 0 0-.78.5l-1.1 5.48a10.6 10.6 0 0 0-5.76 1.8A2.15 2.15 0 1 0 3.4 14.3a4.2 4.2 0 0 0-.05.65C3.35 18.1 7.2 20.6 12 20.6s8.65-2.5 8.65-5.65c0-.22-.02-.44-.05-.65A2.15 2.15 0 0 0 22 12.2M7.6 13.7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m8.15 4.06c-1 1-2.93 1.07-3.75 1.07s-2.75-.08-3.75-1.07a.4.4 0 0 1 .57-.57c.63.63 1.98.86 3.18.86s2.55-.23 3.18-.86a.4.4 0 1 1 .57.57m-.35-2.56a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </svg>
  );
}
function TelegramIcon() {
  return (
    <svg {...S}>
      <path d="M21.7 4.3 2.9 11.6c-.9.35-.9 1.6.02 1.9l4.7 1.5 1.8 5.4c.24.7 1.1.9 1.6.36l2.6-2.6 4.6 3.4c.66.5 1.6.13 1.77-.68l3.2-15c.17-.8-.63-1.5-1.5-1.16M9.6 14.4l8.6-5.3-6.9 6.4-.2 3z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4.5 7.5 7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
