import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { BrandLock, BrandMark } from "@/components/dogmatch/brand-logo";
import type { MemberCard } from "@/lib/plus/member-card.functions";

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

function formatDate(value: string | null) {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

/** Front of the card: who you are, and that you're a member. */
export function MemberCardFront({ card, photo }: { card: MemberCard; photo?: string | undefined }) {
  return (
    <div className="mc-card mc-front">
      <div className="mc-top">
        <BrandLock markClassName="h-6 w-6" wordmarkClassName="text-[11pt]" />
        <span className="mc-plus">+ Member</span>
      </div>

      <div className="mc-middle">
        {photo ? <img src={photo} alt="" className="mc-photo" /> : null}
        <div>
          <p className="mc-label">Member</p>
          <p className="mc-name">{card.name}</p>
        </div>
      </div>

      <div className="mc-bottom">
        <div>
          <p className="mc-label">Member ID</p>
          <p className="mc-mono">{card.memberId}</p>
        </div>
        <div>
          <p className="mc-label">Status</p>
          <p className="mc-mono mc-status">{card.status === "active" ? "Active" : "Ended"}</p>
        </div>
        <div>
          <p className="mc-label">Valid through</p>
          <p className="mc-mono">{formatDate(card.validThrough)}</p>
        </div>
      </div>
    </div>
  );
}

/** Back of the card: the code someone can scan to check it's real. */
export function MemberCardBack({ card }: { card: MemberCard }) {
  const url = verifyUrl(card.memberId);
  const qr = useQr(url);

  return (
    <div className="mc-card mc-back">
      <div className="mc-back-inner">
        {qr ? <img src={qr} alt={`Verification code for ${card.memberId}`} className="mc-qr" /> : <span className="mc-qr" />}
        <div className="mc-back-text">
          <BrandMark className="h-5 w-5" />
          <p className="mc-back-title">Check this card</p>
          <p className="mc-back-body">
            Scan the code, or visit doggmatch.com/verify and type in the member ID below.
          </p>
          <p className="mc-mono">{card.memberId}</p>
        </div>
      </div>
      <p className="mc-fineprint">
        This card belongs to the person named on the front. It isn't a payment card.
      </p>
    </div>
  );
}
