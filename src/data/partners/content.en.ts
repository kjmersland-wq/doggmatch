/**
 * Copy for the "Become a DoggMatch Partner" page.
 * English is the source language — a sibling file per locale keeps the same shape.
 * Voice: warm, honest, human. Never salesy.
 */
export type PartnerCategory = {
  id: string;
  label: string;
  blurb: string;
};

export const partnerCategories: PartnerCategory[] = [
  { id: "equipment", label: "Pet & dog equipment", blurb: "Harnesses, leads, beds, toys and the everyday things that wear out." },
  { id: "grooming", label: "Grooming", blurb: "Salons and mobile groomers who take their time with nervous dogs." },
  { id: "training", label: "Training", blurb: "Puppy classes, one-to-one help and reward-based behaviour work." },
  { id: "vet", label: "Veterinary & health", blurb: "Clinics, physios, dentists and anyone keeping dogs well." },
  { id: "insurance", label: "Insurance", blurb: "Cover that's clear about what it does and doesn't pay for." },
  { id: "boarding", label: "Boarding & daycare", blurb: "Kennels, home boarders, daycare and trusted sitters." },
  { id: "food", label: "Food & nutrition", blurb: "Food, treats and supplements you'd feed your own dog." },
  { id: "travel", label: "Travel & activities", blurb: "Dog-friendly stays, car kit, hikes, swimming and days out." },
];

export const partnerBenefits = [
  {
    id: "exposure",
    title: "Reach owners who are actually looking",
    body: "People come to DoggMatch while they're choosing a dog, settling one in, or working out food, training and travel. They're already spending — you simply get to be the shop they find.",
  },
  {
    id: "listing",
    title: "Your own place in Member Benefits",
    body: "A proper listing inside the members' area: who you are, what you offer, where it can be used, and a link straight to you. Not a logo in a wall of logos.",
  },
  {
    id: "offer",
    title: "An offer that's yours to shape",
    body: "A percentage off, a free first session, an upgrade, a bundle — whatever makes sense for your business. You set it, and you can change or pause it whenever you like.",
  },
  {
    id: "branding",
    title: "Partner branding you can use",
    body: "A DoggMatch Partner badge for your window, your website and your socials, so customers recognise you before they walk in.",
  },
  {
    id: "verification",
    title: "Verification that takes two seconds",
    body: "Members carry a DoggMatch+ card with a QR code. Scan it, see whether the membership is active, and serve the customer. No app, no logins, no paperwork.",
  },
  {
    id: "no-cost",
    title: "No listing fee, no commission",
    body: "We don't charge you to be listed and we don't take a cut of your sales. The offer you give members is the whole arrangement.",
  },
] as const;

export const partnerSteps = [
  {
    no: "01",
    title: "Tell us about your business",
    body: "The short form below is enough to start. Who you are, where you are, and roughly what you'd like to offer.",
  },
  {
    no: "02",
    title: "We have a proper conversation",
    body: "A real person reads it and replies. We'll ask a few questions and make sure it's a good fit both ways — for you and for our members.",
  },
  {
    no: "03",
    title: "We write your listing together",
    body: "You approve the wording, the offer and the details before anything goes live. Nothing is published without your say-so.",
  },
  {
    no: "04",
    title: "Members start turning up",
    body: "Your offer appears in Member Benefits, you get the partner badge, and you scan cards at the counter as people arrive.",
  },
] as const;

export const partnerFaq = [
  {
    q: "What does it cost to become a partner?",
    a: "Nothing. There's no listing fee and no commission. The discount or benefit you give members is what you contribute.",
  },
  {
    q: "How do I check someone is really a member?",
    a: "Every DoggMatch+ member has a card with a QR code. Scanning it opens a page that shows only whether the membership is active and until when — no personal details.",
  },
  {
    q: "Can I change or stop my offer later?",
    a: "Yes, whenever you like. Write to us and we'll update or pause your listing. We'd just ask that you honour anything already promised.",
  },
  {
    q: "We're not in Norway — can we still join?",
    a: "Yes. DoggMatch is used internationally and Member Benefits are shown with the country they apply to. Online shops that ship widely are very welcome too.",
  },
  {
    q: "How many members will see it?",
    a: "We won't quote you a number we can't stand behind. DoggMatch+ is young and growing, and we'd rather be honest about that than oversell it.",
  },
  {
    q: "What kind of businesses do you say no to?",
    a: "Anything built on aversive training methods, or products we wouldn't be comfortable recommending to a friend with a dog. We'd rather have a short list we trust.",
  },
] as const;