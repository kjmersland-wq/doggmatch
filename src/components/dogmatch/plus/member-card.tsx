import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { BrandLock, BrandMark } from "@/components/dogmatch/brand-logo";
import type { MemberCard } from "@/lib/plus/member-card.functions";
import { useCopy, useLocale } from "@/i18n";

/** The verification link the code on the back points at. */
export function verifyUrl(memberId: string) {
  const origin = typeof window === "undefined" ? "https://doggmatch.com" : window.location.origin;
  return `${origin}/verify/${memberId}`;
}

function useQr(text: string) {
  const [src, setSrc] = useState<string>("");
  useEffect(() => {
    let alive = true;
    void QRCode.toDataURL(text, { margin: 0, width: 320, errorCorrectionLevel: "M" }).then((url) => {
      if (alive) setSrc(url);
    });
    return () => {
      alive = false;
    };
  }, [text]);
  return src;
}

function formatDate(value: string | null, locale: "en" | "no") {
  if (!value) return "—";
  return new Date(value).toLocaleDateString(locale === "no" ? "nb-NO" : "en-GB", {
    month: "short",
    year: "numeric",
  });
}

const copy = {
  en: {
    plusMember: "+ Member",
    member: "Member",
    memberId: "Member ID",
    status: "Status",
    active: "Active",
    ended: "Ended",
    validThrough: "Valid through",
    checkThisCard: "Check this card",
    backBody: "Scan the code, or visit doggmatch.com/verify and type in the member ID below.",
    fineprint: "This card belongs to the person named on the front. It isn't a payment card.",
    verifyAlt: (id: string) => `Verification code for ${id}`,
  },
  no: {
    plusMember: "+ Medlem",
    member: "Medlem",
    memberId: "Medlems-ID",
    status: "Status",
    active: "Aktivt",
    ended: "Avsluttet",
    validThrough: "Gyldig til",
    checkThisCard: "Sjekk dette kortet",
    backBody: "Skann koden, eller gå til doggmatch.com/verify og skriv inn medlems-ID-en under.",
    fineprint: "Dette kortet tilhører personen navngitt på forsiden. Det er ikke et betalingskort.",
    verifyAlt: (id: string) => `Verifiseringskode for ${id}`,
  },
} as const;

/** Front of the card: who you are, and that you're a member. */
export function MemberCardFront({ card, photo }: { card: MemberCard; photo?: string | undefined }) {
  const c = useCopy(copy);
  const { locale } = useLocale();
  return (
    <div className="mc-card mc-front">
      <div className="mc-top">
        <BrandLock markClassName="h-6 w-6" wordmarkClassName="text-[11pt]" />
        <span className="mc-plus">{c.plusMember}</span>
      </div>

      <div className="mc-middle">
        {photo ? <img src={photo} alt="" className="mc-photo" /> : null}
        <div>
          <p className="mc-label">{c.member}</p>
          <p className="mc-name">{card.name}</p>
        </div>
      </div>

      <div className="mc-bottom">
        <div>
          <p className="mc-label">{c.memberId}</p>
          <p className="mc-mono">{card.memberId}</p>
        </div>
        <div>
          <p className="mc-label">{c.status}</p>
          <p className="mc-mono mc-status">{card.status === "active" ? c.active : c.ended}</p>
        </div>
        <div>
          <p className="mc-label">{c.validThrough}</p>
          <p className="mc-mono">{formatDate(card.validThrough, locale)}</p>
        </div>
      </div>
    </div>
  );
}

/** Back of the card: the code someone can scan to check it's real. */
export function MemberCardBack({ card }: { card: MemberCard }) {
  const c = useCopy(copy);
  const url = verifyUrl(card.memberId);
  const qr = useQr(url);

  return (
    <div className="mc-card mc-back">
      <div className="mc-back-inner">
        {qr ? <img src={qr} alt={c.verifyAlt(card.memberId)} className="mc-qr" /> : <span className="mc-qr" />}
        <div className="mc-back-text">
          <BrandMark className="h-5 w-5" />
          <p className="mc-back-title">{c.checkThisCard}</p>
          <p className="mc-back-body">{c.backBody}</p>
          <p className="mc-mono">{card.memberId}</p>
        </div>
      </div>
      <p className="mc-fineprint">{c.fineprint}</p>
    </div>
  );
}
