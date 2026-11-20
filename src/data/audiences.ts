import type { Feature, PageMeta } from "./types";

export interface Audience {
  slug: string;
  meta: PageMeta;
  label: string;
  headline: string;
  /** Five items. “Anything else” is added after them. */
  items: Feature[];
}

export const audiences: Audience[] = [
  {
    slug: "restaurants",
    meta: {
      title: "AI for restaurants and cafés | Settl",
      description:
        "Orders, reservations, supplier invoices and menus handled with AI, so you can run the floor. Our help is free while we get started.",
    },
    label: "For restaurants and cafés",
    headline: "AI that handles the busywork, so you can run the floor.",
    items: [
      {
        title: "Orders and reservations",
        text: "Phone and online requests handled during the rush.",
      },
      {
        title: "Supplier invoices",
        text: "Read and entered into your books automatically.",
      },
      {
        title: "Menus and listings",
        text: "Kept up to date everywhere with one change.",
      },
      {
        title: "Marketing",
        text: "Posts about specials and replies to reviews, ready to approve.",
      },
      {
        title: "Insights",
        text: "See which dishes sell, when you’re busiest and where food goes to waste.",
      },
    ],
  },
  {
    slug: "property",
    meta: {
      title: "AI for landlords and property managers | Settl",
      description:
        "Repair requests, city deadlines, tenant questions and rent tracking kept on track with AI. Our help is free while we get started.",
    },
    label: "For landlords and property managers",
    headline: "AI that keeps repairs and deadlines on track.",
    items: [
      {
        title: "Repair requests",
        text: "Tenants text in, and every job is logged and tracked.",
      },
      {
        title: "City deadlines",
        text: "Reminders before inspections and filings are due.",
      },
      {
        title: "Tenant questions",
        text: "Common questions answered instantly, any hour.",
      },
      {
        title: "Marketing",
        text: "Apartment listings written and posted as soon as units open up.",
      },
      {
        title: "Rent tracking",
        text: "Payments and late notices tracked without the spreadsheets.",
      },
    ],
  },
  {
    slug: "offices",
    meta: {
      title: "AI for law, accounting and medical offices | Settl",
      description:
        "Client intake, documents, appointment reminders and billing handled with AI. Our help is free while we get started.",
    },
    label: "For law, accounting and medical offices",
    headline: "AI that handles intake, reminders and paperwork.",
    items: [
      {
        title: "Client intake",
        text: "Forms filled in and organized, in your clients’ languages.",
      },
      {
        title: "Documents",
        text: "Collected and sorted, with automatic follow-ups.",
      },
      { title: "Appointments", text: "Reminders that cut down on no-shows." },
      {
        title: "Marketing",
        text: "Newsletters and review replies drafted in your voice.",
      },
      {
        title: "Billing",
        text: "Time and invoices tracked, with payment reminders sent for you.",
      },
    ],
  },
  {
    slug: "shops",
    meta: {
      title: "AI for shops, boutiques and galleries | Settl",
      description:
        "Product listings, inventory, customer messages and marketing handled with AI. Our help is free while we get started.",
    },
    label: "For shops, boutiques and galleries",
    headline: "AI that gets your stock online in minutes.",
    items: [
      {
        title: "Listings",
        text: "Snap a photo and get a description and price draft.",
      },
      { title: "Inventory", text: "Kept in sync between the shop and online." },
      {
        title: "Customer messages",
        text: "Questions answered quickly, even after hours.",
      },
      {
        title: "Marketing",
        text: "Posts and emails about new arrivals, written from your photos.",
      },
      {
        title: "Insights",
        text: "See what sells, what sits on the shelf and when to reorder.",
      },
    ],
  },
  {
    slug: "salons",
    meta: {
      title: "AI for salons, barbers and studios | Settl",
      description:
        "Bookings, no-show reminders, rebooking nudges and marketing handled with AI. Our help is free while we get started.",
    },
    label: "For salons, barbers and studios",
    headline: "AI that keeps your book full while you work.",
    items: [
      {
        title: "Bookings",
        text: "Taken from calls, texts and DMs while you’re with a client.",
      },
      {
        title: "No-shows",
        text: "Fewer of them, with reminders and deposits.",
      },
      { title: "Regulars", text: "Rebooking nudges that bring them back." },
      {
        title: "Marketing",
        text: "Posts and offers that help fill quiet days, ready to approve.",
      },
      {
        title: "Insights",
        text: "See your busiest hours, top services and the quiet days to fill.",
      },
    ],
  },
];
