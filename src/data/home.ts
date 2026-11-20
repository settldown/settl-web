import type { Cta, Feature, Link, PageMeta, PhotoSlot } from "./types";

export const contactAnchor = "#contact";

export const homeMeta: PageMeta = {
  title: "Settl | AI help for local businesses",
  description:
    "We help local businesses save time with AI: inquiries, paperwork, marketing and more. Our help is free while we get started.",
};

/** Nav button on pages that have the “Let’s talk” section. */
export const homeNavCta: Link = { label: "Get in touch", href: contactAnchor };

export interface HeroContent {
  eyebrow: string;
  /** A fixed headline. Leave out to use `typing`. */
  heading?: string;
  typing?: { before: string; prefix: string; words: string[]; after: string };
  lead: string;
  photo: PhotoSlot;
}

export const heroLead = "We help local businesses save time with AI.";

export const heroPhoto: PhotoSlot = {
  label:
    "Photo: the two of you with a local business owner, or at work in the neighborhood",
  ratio: "hero",
};

export const homeHero: HeroContent = {
  eyebrow: "For neighborhood businesses",
  typing: {
    before: "AI that takes",
    prefix: "the",
    words: [
      "busywork",
      "bookkeeping",
      "paperwork",
      "scheduling",
      "invoicing",
      "data entry",
      "follow-ups",
    ],
    after: "off your plate.",
  },
  lead: heroLead,
  photo: heroPhoto,
};

export const helpHeading = {
  heading: "Where AI can help",
  intro: "A few of the everyday jobs we can take off your hands.",
};

/** Always the last item in a “Where AI can help” grid. */
export const anythingElse: Feature = {
  title: "Anything else",
  text: "Got a task that eats up your time? There’s a good chance we can make it faster.",
  link: { label: "Tell us about it", href: contactAnchor },
};

export const homeHelpItems: Feature[] = [
  {
    title: "Inquiries",
    text: "Calls, texts and DMs answered any time, with orders and bookings taken for you.",
  },
  {
    title: "Paperwork",
    text: "Invoices, receipts and forms read and entered automatically.",
  },
  {
    title: "Marketing",
    text: "Social posts, emails and review replies drafted for you to approve.",
  },
  {
    title: "Retention",
    text: "Reminders and follow-ups that bring customers back.",
  },
  {
    title: "Insights",
    text: "Plain-English reports on what’s selling, what’s slow and where your time goes.",
  },
];

export const homeBanner: Cta = {
  text: "We’ll come by, see how you work, and start with one small fix. While we’re getting started, our help is free.",
  button: { label: "Get in touch", href: contactAnchor },
};

export const homeTalk = {
  id: contactAnchor.slice(1),
  heading: "Let’s talk",
  text: "Tell us what takes up your time and we’ll reply to set up a quick visit. Or pick a time that suits you.",
};
