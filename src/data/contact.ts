import { formText } from "./forms";
import type { PageMeta, PhotoSlot } from "./types";

export const contactMeta: PageMeta = {
  title: "Contact | Settl",
  description:
    "Have a project in mind? Send us a quick note or email business@settlhere.com and we’ll set up a time to come by.",
};

export const contactHero = {
  heading: "Have a project in mind? Let’s talk.",
  leadBefore: "Send us a quick note, or email ",
  leadAfter: ". We’ll reply to set up a time to come by.",
  photo: {
    label: "Photo: a team member visiting a local business",
    ratio: "portrait",
  } satisfies PhotoSlot,
};

export const thanksMeta: PageMeta = {
  title: "Message sent | Settl",
  description: "Thanks for your message. We’ll reply soon.",
};

export const thanks = {
  heading: formText.messages.sent,
  text: formText.messages.sentText,
  button: { label: "Back to home", href: "/" },
};
