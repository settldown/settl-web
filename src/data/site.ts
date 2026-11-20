import type { Link, SocialLink } from "./types";

const email = "business@settlhere.com";
const calendly = "https://calendly.com/business-settlhere/30min";

export const site = {
  name: "Settl",
  url: "https://settlhere.com",
  tagline: "Tech help for local businesses",
  description:
    "Settl is two software engineers helping local small businesses save time with AI. Our help is free while we get started.",
  email,
  emailHref: `mailto:${email}`,
  calendly,
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? "",
  nav: [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies Link[],
  navCta: { label: "Talk to us", href: "/contact" } satisfies Link,
  bookCall: {
    label: "Book a 30-minute call",
    href: calendly,
    external: true,
  } satisfies Link,
  socials: [
    { label: "Settl on X", href: "https://x.com/settlhere", icon: "x" },
    {
      label: "Settl on Instagram",
      href: "https://www.instagram.com/settlhere/",
      icon: "instagram",
    },
  ] satisfies SocialLink[],
  skipLink: "Skip to content",
};
