import type { Feature, PageMeta } from "./types";

export interface Audience {
  slug: string;
  meta: PageMeta;
  label: string;
  headline: string;
  /** One sentence under the headline. Match it to the cold email that links here. */
  lead?: string;
  /** Five items. “Anything else” is added after them. */
  items: Feature[];
}

export const audiences: Audience[] = [
  /* ── Cold email targets ─────────────────────────────────────────────
     Each email links to its own page, e.g. /for/real-estate.
     The contact form already saves the page path, so every inquiry
     shows which group it came from. */
  {
    slug: "real-estate",
    meta: {
      title: "AI for real estate agents and brokerages | Settl",
      description:
        "New leads answered in minutes, showings booked, listings drafted and closing dates tracked with AI. Our help is free while we get started.",
    },
    label: "For real estate agents and brokerages",
    headline: "AI that answers every lead while you’re at a showing.",
    lead: "We set up AI that follows up with every lead, so none go cold while you’re with clients.",
    items: [
      {
        title: "New leads",
        text: "Inquiries from your site and listing portals answered within minutes, day or night.",
      },
      {
        title: "Showings",
        text: "Booked, confirmed and rescheduled by text without the back-and-forth.",
      },
      {
        title: "Listings",
        text: "Descriptions and social posts drafted from your photos and notes.",
      },
      {
        title: "Closing deadlines",
        text: "Inspection, appraisal and closing dates tracked, with reminders for everyone involved.",
      },
      {
        title: "Past clients",
        text: "Check-ins on home anniversaries and market updates that bring referrals back.",
      },
    ],
  },
  {
    slug: "nonprofits",
    meta: {
      title: "AI for nonprofits and community organizations | Settl",
      description:
        "Donor thank-yous, volunteer scheduling, grant deadlines and newsletters handled with AI, so your team can focus on the mission. Our help is free while we get started.",
    },
    label: "For nonprofits and community organizations",
    headline: "AI that gives your small team more time for the mission.",
    lead: "We set up AI that handles donor, volunteer and grant admin, so your team can focus on the work.",
    items: [
      {
        title: "Donor thank-yous",
        text: "Receipts and personal thank-you notes sent within a day of every gift.",
      },
      {
        title: "Volunteers",
        text: "Sign-ups, shift schedules and reminders handled in one place.",
      },
      {
        title: "Grants",
        text: "Deadlines tracked and first drafts of applications and reports ready for review.",
      },
      {
        title: "Newsletters",
        text: "Updates and social posts drafted from your program notes and photos.",
      },
      {
        title: "Impact reports",
        text: "Donor and program numbers pulled together in plain English for your board.",
      },
    ],
  },
  {
    slug: "medical",
    meta: {
      title: "AI for medical, dental and therapy practices | Settl",
      description:
        "Front-desk calls, appointment reminders, scheduling and office paperwork handled with AI. Our help is free while we get started.",
    },
    label: "For medical, dental and therapy practices",
    headline: "AI that takes the pressure off your front desk.",
    lead: "We set up AI that handles calls, reminders and scheduling, so your staff can focus on patients.",
    // Kept to front-desk and office work on purpose. Anything that touches
    // patient records needs HIPAA-compliant tools and a signed agreement first.
    items: [
      {
        title: "Calls and questions",
        text: "Hours, directions, insurance and booking questions answered any time.",
      },
      {
        title: "Appointment reminders",
        text: "Texts and emails that cut down on no-shows and late cancellations.",
      },
      {
        title: "Scheduling",
        text: "Cancellations filled from your waitlist without a round of phone calls.",
      },
      {
        title: "Reviews",
        text: "Patients asked for reviews after visits, with replies drafted for you.",
      },
      {
        title: "Office paperwork",
        text: "Supplier invoices, staff schedules and orders handled for you.",
      },
    ],
  },
  {
    slug: "logistics",
    meta: {
      title: "AI for logistics, trucking and delivery companies | Settl",
      description:
        "Delivery paperwork, shipment updates, dispatch and invoicing handled with AI. Our help is free while we get started.",
    },
    label: "For logistics, trucking and delivery companies",
    headline: "AI that turns paperwork into data before the truck is back.",
    lead: "We set up AI that reads paperwork, answers status calls and sends invoices, so your team can keep loads moving.",
    items: [
      {
        title: "Delivery paperwork",
        text: "Bills of lading, delivery receipts and rate confirmations read into your system.",
      },
      {
        title: "Shipment updates",
        text: "“Where’s my load?” questions answered automatically, with live status.",
      },
      {
        title: "Dispatch",
        text: "Driver schedules and load assignments kept on everyone’s phones.",
      },
      {
        title: "Invoicing",
        text: "Invoices sent as soon as proof of delivery comes in, with payment reminders.",
      },
      {
        title: "Quotes",
        text: "Quote requests answered fast, so you win the job before a competitor does.",
      },
    ],
  },

  /* ── Earlier audiences ───────────────────────────────────────────── */
  {
    slug: "restaurants",
    meta: {
      title: "AI for restaurants and cafés | Settl",
      description:
        "Orders, reservations, supplier invoices and menus handled with AI, so you can run the floor. Our help is free while we get started.",
    },
    label: "For restaurants and cafés",
    headline: "AI that handles the busywork, so you can run the floor.",
    lead: "We set up AI that handles orders, invoices and menus, so you can focus on your guests.",
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
    lead: "We set up AI that logs repairs and tracks deadlines, so nothing gets missed.",
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
    // Medical now has its own page, so this one covers law and accounting.
    slug: "offices",
    meta: {
      title: "AI for law and accounting offices | Settl",
      description:
        "Client intake, documents, appointment reminders and billing handled with AI. Our help is free while we get started.",
    },
    label: "For law and accounting offices",
    headline: "AI that handles intake, reminders and paperwork.",
    lead: "We set up AI that handles intake and paperwork, so you spend more time on client work.",
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
    lead: "We set up AI that lists products and answers customers, so you can spend more time in the shop.",
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
    lead: "We set up AI that takes bookings and cuts no-shows, so you can focus on the chair.",
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
