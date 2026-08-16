import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { BrandLock, BrandMark } from "@/components/dogmatch/brand-logo";
import { useCopy } from "@/i18n";
import coverPhoto from "@/assets/brochure-cover.jpg";

/**
 * The DoggMatch A5 flyer (148 × 210 mm, single page) made for counters in
 * pet shops, groomers, trainers and vet clinics. Print-first: large type,
 * generous margins, one accent colour, and nothing that needs a screen.
 */

const SITE = "https://www.doggmatch.com";

const copy = {
  en: {
    badge: "Find your dog",
    headline: "Find the dog that fits your life.",
    coverLead:
      "A calm, honest way to work out which kind of dog suits your home, your days and the people around you.",
    cta: "Try DoggMatch — free",
    url: "doggmatch.com",
    scan: "Scan to start",
    scanBack: "Scan with your phone camera",
    howEyebrow: "How it works",
    howTitle: "You answer. We show our work.",
    howLead:
      "You tell us about your everyday life — activity level, experience, family and children, time for training, grooming, size, allergies in the household and a few other things that matter. Then you get breeds that tend to suit a life like yours, and the reasons behind each one.",
    points: [
      {
        title: "No AI decides anything",
        body: "The result comes from a fixed, transparent algorithm. Same answers, same result, every time.",
      },
      {
        title: "You can see why",
        body: "Every match is explained dimension by dimension, including where a breed is a poorer fit for you.",
      },
      {
        title: "Purebred and mixed breeds",
        body: "Known crosses combine the traits of both parents — shown as guidance, never a guarantee.",
      },
      {
        title: "Useful once you have a dog",
        body: "Training, health, food and travel tools that stay with you long after the choice is made.",
      },
    ],
    toolsEyebrow: "What's inside",
    toolsTitle: "Everything in one calm place.",
    tools: [
      { title: "Find your dog", body: "The compatibility questions, answered in a few minutes." },
      { title: "Compare breeds", body: "Side by side, on the things that actually change daily life." },
      { title: "Mixed breeds", body: "Combine two parent breeds and see the likely middle ground." },
      { title: "Training", body: "Short, kind lessons that build in a sensible order." },
      { title: "Health & wellbeing", body: "Coat, teeth, paws, weight — checked without the panic." },
      { title: "Food & nutrition", body: "Portion guidance and a plain list of what dogs shouldn't eat." },
      { title: "Travel", body: "Country-to-country rules, car safety and days outdoors." },
      { title: "My Dog", body: "Your dog's own record: weight, vet visits, contacts, the week ahead." },
    ],
    plusTitle: "DoggMatch+",
    plusBody:
      "An optional membership for people who want more: extra tools, printable pages for the fridge or the vet, a personal member card, and benefits with partners as they arrive.",
    backTitle: "Take five minutes. It's a decision for the next fifteen years.",
    backBody:
      "Free to try, nothing to install. Answer the questions on your phone and see what suits your life — with the reasoning shown, in English or Norwegian.",
    backNote:
      "DoggMatch is guidance, not veterinary or medical advice. Always speak with a vet about health, and get professional advice about allergies.",
    madeBy: "Made in Kristiansand, Norway by KM TECH LABS",
    printTitle: "A5 brochure",
    printLead:
      "One A5 page (148 × 210 mm), print-ready. Print to PDF with margins set to none and background graphics on. Ask the printer for 3 mm bleed.",
    printBtn: "Print / save as PDF",
    qrAlt: "QR code to doggmatch.com",
  },
  no: {
    badge: "Finn din hund",
    headline: "Finn hunden som passer ditt liv.",
    coverLead:
      "En rolig og ærlig måte å finne ut hvilken type hund som passer hjemmet ditt, dagene dine og menneskene rundt deg.",
    cta: "Prøv DoggMatch gratis",
    url: "doggmatch.com",
    scan: "Skann for å starte",
    scanBack: "Skann med kameraet på mobilen",
    howEyebrow: "Slik fungerer det",
    howTitle: "Du svarer. Vi viser regnestykket.",
    howLead:
      "Du forteller om hverdagen din — aktivitetsnivå, erfaring, familie og barn, tid til trening, pelsstell, størrelse, allergihensyn i husstanden og noen andre ting som betyr noe. Så får du raser som ofte passer et liv som ditt, og begrunnelsen bak hver enkelt.",
    points: [
      {
        title: "Ingen AI bestemmer noe",
        body: "Resultatet kommer fra en fast, transparent algoritme. Samme svar gir samme resultat, hver gang.",
      },
      {
        title: "Du ser hvorfor",
        body: "Hver match forklares punkt for punkt — også der en rase passer dårligere for deg.",
      },
      {
        title: "Renrasede og blandingshunder",
        body: "Kjente krysninger kombinerer egenskapene til begge foreldrene — som veiledning, aldri en garanti.",
      },
      {
        title: "Nyttig når du allerede har hund",
        body: "Verktøy for trening, helse, mat og reise som blir med deg lenge etter at valget er tatt.",
      },
    ],
    toolsEyebrow: "Dette får du",
    toolsTitle: "Alt samlet ett rolig sted.",
    tools: [
      { title: "Finn din hund", body: "Spørsmålene om hverdagen din, besvart på noen minutter." },
      { title: "Sammenlign raser", body: "Side om side, på det som faktisk endrer hverdagen." },
      { title: "Blandingshund", body: "Kombiner to raser og se den sannsynlige mellomtingen." },
      { title: "Trening", body: "Korte, vennlige leksjoner i en fornuftig rekkefølge." },
      { title: "Helse og velvære", body: "Pels, tenner, poter og vekt — sjekket uten panikk." },
      { title: "Mat og ernæring", body: "Veiledende porsjoner og en tydelig liste over det hunder ikke tåler." },
      { title: "Reise med hund", body: "Regler fra land til land, sikkerhet i bil og dager ute." },
      { title: "Min hund", body: "Hundens egen journal: vekt, veterinærbesøk, kontakter og uken som kommer." },
    ],
    plusTitle: "DoggMatch+",
    plusBody:
      "Et valgfritt medlemskap for deg som vil ha mer: ekstra verktøy, utskrifter til kjøleskapet eller veterinæren, personlig medlemskort, og medlemsfordeler etter hvert som de kommer.",
    backTitle: "Bruk fem minutter. Det er et valg for de neste femten årene.",
    backBody:
      "Gratis å prøve, ingenting å installere. Svar på spørsmålene på mobilen og se hva som passer livet ditt — med begrunnelsen synlig, på norsk eller engelsk.",
    backNote:
      "DoggMatch er veiledning, ikke veterinærfaglige eller medisinske råd. Snakk alltid med veterinær om helse, og søk profesjonell hjelp ved allergi.",
    madeBy: "Laget i Kristiansand, Norge av KM TECH LABS",
    printTitle: "A5-brosjyre",
    printLead:
      "Én A5-side (148 × 210 mm), klar for trykk. Skriv ut til PDF med marger satt til ingen og bakgrunnsgrafikk på. Be trykkeriet om 3 mm utfall.",
    printBtn: "Skriv ut / lagre som PDF",
    qrAlt: "QR-kode til doggmatch.com",
  },
} as const;

function useQr(text: string, size = 640) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    let alive = true;
    void QRCode.toDataURL(text, {
      margin: 0,
      width: size,
      errorCorrectionLevel: "M",
      color: { dark: "#071A2FFF", light: "#FFFFFFFF" },
    }).then((url) => alive && setSrc(url));
    return () => {
      alive = false;
    };
  }, [text, size]);
  return src;
}

export function BrochureSheet() {
  const c = useCopy(copy);
  const qr = useQr(SITE);

  return (
    <div className="br-sheet">
      <article className="br-page br-one">
        <div className="br-cover-photo">
          <img src={coverPhoto} alt="" width={1024} height={1408} />
          <div className="br-cover-badge">
            <BrandLock markClassName="h-6 w-6" wordmarkClassName="text-base" />
          </div>
        </div>

        <div className="br-one-body">
          <p className="br-eyebrow">{c.badge}</p>
          <h1 className="br-display">{c.headline}</h1>
          <p className="br-lead br-muted">{c.coverLead}</p>

          <div className="br-points">
            {c.points.slice(0, 3).map((p, i) => (
              <div className="br-point" key={p.title}>
                <span className="br-point-no">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="br-tools">
            {c.tools.slice(0, 6).map((t) => (
              <div className="br-tool" key={t.title}>
                <h3>{t.title}</h3>
              </div>
            ))}
          </div>

          <div className="br-cta">
            <div className="br-cta-text">
              <span className="br-button">{c.cta}</span>
              <span style={{ display: "flex", alignItems: "center", gap: "2.5mm" }}>
                <BrandMark className="h-6 w-6" />
                <span className="br-url">{c.url}</span>
              </span>
              <span className="br-footnote br-muted">{c.madeBy}</span>
            </div>
            <figure className="br-qr br-qr-lg">
              {qr && <img src={qr} alt={c.qrAlt} width={34} height={34} />}
              <figcaption>{c.scan}</figcaption>
            </figure>
          </div>

          <p className="br-footnote br-muted br-one-note">{c.backNote}</p>
        </div>
      </article>
    </div>
  );
}

export function useBrochureCopy() {
  return useCopy(copy);
}
