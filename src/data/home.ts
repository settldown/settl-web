import type { Cta, Faq, Feature, Link, PageMeta, PhotoSlot } from "./types";

export const contactAnchor = "#contact";

/**
 * How many clients get free help. Set this to the number you will
 * actually honor, and lower it as spots fill up.
 */
export const freeClientSpots = 10;

export const homeMeta: PageMeta = {
  title: "Settl | AI help for small businesses and nonprofits",
  description: `We set up AI that saves small businesses and nonprofits hours every week, in person on the East Coast or remotely anywhere. Free for our first ${freeClientSpots} clients.`,
};

/** Nav button on pages that have the “Let’s talk” section. */
export const homeNavCta: Link = { label: "Get in touch", href: contactAnchor };

export interface HeroContent {
  eyebrow: string;
  /** A fixed headline. Leave out to use `typing`. */
  heading?: string;
  typing?: { before: string; prefix: string; words: string[]; after: string };
  lead: string;
  /** No longer shown in the hero (the map replaced it). */
  photo?: PhotoSlot;
}

export const heroLead =
  "We set up AI tools that save your team hours every week.";

/** Unused since the map replaced the hero photo. Delete if nothing else imports it. */
export const heroPhoto: PhotoSlot = {
  label:
    "Photo: the two of you with a local business owner, or at work in the neighborhood",
  ratio: "hero",
};

export const homeHero: HeroContent = {
  eyebrow: "For small businesses and nonprofits",
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
    text: "Calls, texts and DMs answered any time, with bookings and requests taken for you.",
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
    title: "Follow-ups",
    text: "Reminders and check-ins that bring customers, clients and donors back.",
  },
  {
    title: "Insights",
    text: "Plain-English reports on what’s working, what’s slow and where your time goes.",
  },
];

export const homeBanner: Cta = {
  text: `We’ll visit or video call, see how you work, and start with one small fix. For our first ${freeClientSpots} clients, our help is free.`,
  button: { label: "Get in touch", href: contactAnchor },
};

export const howItWorks: { heading: string; intro: string; steps: Feature[] } =
  {
    heading: "How it works",
    intro:
      "We’re two software engineers in New York and Virginia. We work in person across the East Coast and remotely with teams anywhere.",
    steps: [
      {
        title: "Tell us what eats your time",
        text: "A 30-minute call or a quick visit. We ask how your day runs and where the hours go.",
      },
      {
        title: "We build one fix",
        text: "We pick the tool, set it up and connect it to what you already use. You approve everything before it goes live.",
      },
      {
        title: "Your team runs it",
        text: "We teach your team and stay a call away. If it saves you time, we can take on the next task.",
      },
    ],
  };

/* Review every answer before going live: each one is a promise. */
export const faq: { heading: string; intro: string; items: Faq[] } = {
  heading: "Questions",
  intro: "Straight answers before you get in touch.",
  items: [
    {
      question: "Is it really free? What’s the catch?",
      answer: `We’re new, and we’d rather earn your trust with results than with a sales pitch. For our first ${freeClientSpots} clients, our time is free. If a fix needs a paid tool, like a phone number or a software subscription, we’ll tell you the cost before setting it up, and you pay the provider directly.`,
    },
    {
      question: "What happens after the free period?",
      answer:
        "Nothing, unless you want to keep working with us. If you do, we’ll agree on a price together before any new work starts. The tools we set up stay yours either way.",
    },
    {
      question: "What do you need access to?",
      answer:
        "Only what the fix needs, such as an inbox, a calendar or a booking system. We set things up under your own accounts, so you stay in control and can remove our access at any time.",
    },
    {
      question: "Is our data safe with AI?",
      answer:
        "We connect only the information a fix needs, and before we start we’ll show you where it goes and who can see it. For medical practices, we stay away from patient records unless the tools are HIPAA-compliant.",
    },
    {
      question: "Do we need to be good with technology?",
      answer:
        "No. We set everything up and teach your team in plain language. If something stops working, you call us.",
    },
    {
      question: "Do you work outside the East Coast?",
      answer:
        "Yes. We visit in person across the East Coast and work by video call with teams anywhere in the world.",
    },
  ],
};

export const homeTalk = {
  id: contactAnchor.slice(1),
  heading: "Let’s talk",
  text: "Tell us what takes up your time and we’ll reply to set up a visit or video call. Or book a call at a time that suits you.",
};
