import type { Cta, Feature, PageMeta, PhotoSlot } from "./types";

export const aboutMeta: PageMeta = {
  title: "About us | Settl",
  description:
    "We’re two software engineers helping the restaurants, shops, offices and buildings around us get simple, useful tools.",
};

export const aboutHero = {
  heading: "Making technology simple for the businesses around us",
  strong: "We’re two software engineers.",
  text: "We spent years building software for large companies. Now we use those skills closer to home, helping the restaurants, shops, offices and buildings in our neighborhood get the same kind of tools, explained in plain language.",
  photo: {
    label: "Photo: the two of you on a neighborhood street",
    ratio: "hero",
  } satisfies PhotoSlot,
};

export const aboutHow = {
  heading: "How we work",
  items: [
    {
      title: "We listen before we build",
      text: "We spend time in your business first. The right fix is often smaller than you’d expect.",
    },
    {
      title: "You own what we set up",
      text: "Your accounts, your data, your tools. If you ever stop working with us, everything keeps running.",
    },
    {
      title: "Free while we’re starting out",
      text: "We’re volunteering our time with our first businesses, so we can learn what really helps.",
    },
  ] satisfies Feature[],
};

export const aboutTeamHeading = "Who we are";

export const aboutCta: Cta = {
  heading: "Ready to start your project?",
  text: "Tell us about your business and we’ll come by to see how we can help.",
  button: { label: "Get in touch", href: "/contact" },
};
