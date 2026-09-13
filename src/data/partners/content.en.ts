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
  {
    id: "equipment",
    label: "Pet & dog equipment",
    blurb: "Harnesses, leads, beds, toys and the everyday things that wear out.",
  },
  {
    id: "grooming",
    label: "Grooming",
    blurb: "Salons and mobile groomers who take their time with nervous dogs.",
  },
  {
    id: "training",
    label: "Training",
    blurb: "Puppy classes, one-to-one help and reward-based behaviour work.",
  },
  {
    id: "vet",
    label: "Veterinary & health",
    blurb: "Clinics, physios, dentists and anyone keeping dogs well.",
  },
  {
    id: "insurance",
    label: "Insurance",
    blurb: "Cover that's clear about what it does and doesn't pay for.",
  },
  {
    id: "boarding",
    label: "Boarding & daycare",
    blurb: "Kennels, home boarders, daycare and trusted sitters.",
  },
  {
    id: "food",
    label: "Food & nutrition",
    blurb: "Food, treats and supplements you'd feed your own dog.",
  },
  {
    id: "travel",
    label: "Travel & activities",
    blurb: "Dog-friendly stays, car kit, hikes, swimming and days out.",
  },
];

export const partnerBenefits = [
  {
    id: "exposure",
    title: "Reach owners who are actually looking",
    body: "People come to DoggMatch while they're choosing a dog, settling one in, or finding help with food, training and travel. You get a thoughtful introduction at the moment they genuinely need you.",
  },
  {
    id: "listing",
    title: "Your own place in Member Benefits",
    body: "A proper listing inside the members' area: who you are, what you offer, where it can be used, and a link straight to you. More useful than a logo in a wall of logos.",
  },
  {
    id: "offer",
    title: "An offer that's yours to shape",
    body: "A percentage off, a free first session, an upgrade or a bundle — whatever feels right for your business. You decide every detail, and you can change or pause it whenever you like.",
  },
  {
    id: "branding",
    title: "Partner branding you can use",
    body: "A DoggMatch Partner badge for your window, website and social channels, so customers can recognise a business we're happy to stand beside.",
  },
  {
    id: "verification",
    title: "Verification that takes two seconds",
    body: "Members carry a DoggMatch+ card with a QR code. Scan it, see whether the membership is active, and welcome them in. No app, no login, no paperwork.",
  },
  {
    id: "no-cost",
    title: "A benefit for your customers too",
    body: "We give your customers 25% off DoggMatch+ for their first year. It costs you nothing, and you still decide completely what benefit you offer our members. There is no listing fee or commission.",
  },
] as const;

export const partnerSteps = [
  {
    no: "01",
    title: "Tell us about your business",
    body: "The short form below is plenty to start. Tell us who you are, where you're based, and any early thoughts you have about an offer — it doesn't need to be final.",
  },
  {
    no: "02",
    title: "We have a proper conversation",
    body: "A real person reads your note and replies. We'll talk through the details and make sure it feels like a good fit both ways — for you and for our members.",
  },
  {
    no: "03",
    title: "We write your listing together",
    body: "We put the words, offer and practical details together with you. You approve everything before it goes live, and nothing is published without your say-so.",
  },
  {
    no: "04",
    title: "We introduce you to members",
    body: "Your offer appears in Member Benefits, you receive the partner badge and your customer code, and members can show their QR card when they visit.",
  },
] as const;

export const partnerFaq = [
  {
    q: "What does it cost to become a partner?",
    a: "Nothing. There's no listing fee and no commission. The discount or benefit you give members is what you contribute.",
  },
  {
    q: "What does the 25% discount for my customers cost me?",
    a: "Nothing. We give your customers a first-year discount on DoggMatch+. You still decide completely what benefit you want to offer our members.",
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
