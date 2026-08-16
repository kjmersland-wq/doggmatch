import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useCopy, useLocale } from "@/i18n";
import { SITE_URL } from "@/lib/seo";

/**
 * A quiet, global way to pass a page — or one section of it — on to someone
 * else. Phones get the native share sheet; everywhere else falls back to
 * Facebook, WhatsApp, Messenger, e-mail and copy link.
 */

const copy = {
  en: {
    share: "Share",
    shareThis: "Share this",
    close: "Close",
    copy: "Copy link",
    copied: "Link copied",
    email: "E-mail",
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    messenger: "Messenger",
    shareSection: "Share this section",
  },
  no: {
    share: "Del",
    shareThis: "Del denne",
    close: "Lukk",
    copy: "Kopier lenke",
    copied: "Lenke kopiert",
    email: "E-post",
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    messenger: "Messenger",
    shareSection: "Del denne delen",
  },
} as const;

function useShareUrl(path?: string, anchor?: string) {
  const { locale } = useLocale();
  const [href, setHref] = useState("");
  useEffect(() => {
    const base = path ? `${SITE_URL}${path}` : `${SITE_URL}${window.location.pathname}`;
    const url = new URL(base);
    if (locale === "no") url.searchParams.set("lang", "no");
    if (anchor) url.hash = anchor;
    setHref(url.toString());
  }, [path, anchor, locale]);
  return href;
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

  const targets = useMemo(() => {
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(shareText);
    return [
      { id: "facebook", label: c.facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
      { id: "whatsapp", label: c.whatsapp, href: `https://wa.me/?text=${t}%20${u}` },
      { id: "messenger", label: c.messenger, href: `https://www.facebook.com/dialog/send?link=${u}&app_id=0&redirect_uri=${u}` },
      { id: "email", label: c.email, href: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${t}%0A%0A${u}` },
    ];
  }, [url, shareText, shareTitle, c]);

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
            className="absolute right-0 z-50 mt-2 w-60 rounded-2xl border border-border bg-background p-2 shadow-[var(--shadow-lift)]"
          >
            {targets.map((tgt) => (
              <a
                key={tgt.id}
                href={tgt.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-surface"
              >
                {tgt.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onCopy}
              className="flex w-full items-center rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-surface"
            >
              {copied ? c.copied : c.copy}
            </button>
          </div>
        </>
      )}
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
