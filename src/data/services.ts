import type { Cta, Feature, PageMeta, PhotoSlot } from "./types";
import { site } from "./site";

export const servicesMeta: PageMeta = {
  title: "Services | Settl",
  description:
    "We pick the right tools for your business, set them up, connect them to what you already use, and teach your team to run them.",
};

export const servicesBanner: PhotoSlot = {
  label: "Photo: a team member setting up a tablet at a shop counter",
  ratio: "banner",
};

export const servicesIntro = {
  heading: "What we do",
  text: "We pick the right tools for your business, set them up, connect them to what you already use, and teach your team to run them.",
};

export const servicesListIntro = {
  heading: "What we can set up for you",
  intro:
    "Our services include, but aren’t limited to, the following. You can start with whichever one would save you the most time.",
};

export const services: Feature[] = [
  {
    title: "AI call and message assistant",
    text: "Answers questions and takes bookings, any hour.",
  },
  {
    title: "Online booking and ordering",
    text: "Every request in one place, with fewer no-shows.",
  },
  {
    title: "Bookkeeping automation",
    text: "Invoices and receipts entered for you.",
  },
  {
    title: "Forms and documents",
    text: "Intake collected online and chased automatically.",
  },
  {
    title: "Marketing content",
    text: "Posts, newsletters and review replies drafted for you.",
  },
  {
    title: "Customer follow-ups",
    text: "Reminders and offers that bring people back.",
  },
  {
    title: "Inventory and listings",
    text: "Photo in, product listing out, stock kept in sync.",
  },
  {
    title: "Staff scheduling",
    text: "Shifts, swaps and checklists on your team’s phones.",
  },
  {
    title: "Deadline tracking",
    text: "Permits, inspections and filings, with early reminders.",
  },
  {
    title: "Weekly reports",
    text: "What sold, your busy hours and where time goes.",
  },
  {
    title: "Website and Google listing",
    text: "Easy for nearby customers to find you.",
  },
  {
    title: "Training and support",
    text: "We teach your team and stay a call away.",
  },
];

export const servicesCta: Cta = {
  heading: "Have something else in mind?",
  text: "If a task is repetitive and eats up your time, we can probably automate it. Tell us about it.",
  button: site.bookCall,
};
