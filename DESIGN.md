# DESIGN.md — Settl website pages

- This file describes every page: its sections, their order and the exact copy.
- It follows the current design canvas: https://claude.ai/artifact/YRGQzBLRszQKB9N3QnrcxY
- When the design changes, update this file first, then the code.
- Colors and fonts live in `src/styles/tokens.css`. Rules for code live in `CLAUDE.md`.

## Home (`index.astro`)

1. Nav: Settl wordmark, links to Services, About, Contact, and a "Get in touch" button to `#contact`.
2. Hero: label "For neighborhood businesses", headline "AI that takes the [word] off your plate.", line "We help local businesses save time with AI.", photo on the right.
   - The word types and deletes in a loop: busywork, bookkeeping, paperwork, scheduling, invoicing, data entry, follow-ups.
   - The full sentence with "busywork" must be real text in the HTML. The animation is added on top by a script.
   - Visitors with reduced motion see the words swap with no typing.
3. Where AI can help: intro "A few of the everyday jobs we can take off your hands." then six items in a 3 x 2 grid:
   - Inquiries: Calls, texts and DMs answered any time, with orders and bookings taken for you.
   - Paperwork: Invoices, receipts and forms read and entered automatically.
   - Marketing: Social posts, emails and review replies drafted for you to approve.
   - Retention: Reminders and follow-ups that bring customers back.
   - Insights: Plain-English reports on what’s selling, what’s slow and where your time goes.
   - Anything else: Got a task that eats up your time? There’s a good chance we can make it faster. Link "Tell us about it" to `#contact`.
4. Free banner (dark): "We’ll come by, see how you work, and start with one small fix. While we’re getting started, our help is free." Button "Get in touch".
5. Let’s talk (`#contact`): "Tell us what takes up your time and we’ll reply to set up a quick visit. Or pick a time that suits you." Button "Book a 30-minute call" (Calendly). Form: name, email, message.
6. Footer: wordmark, tagline "Tech help for local businesses", email.

## Audience pages (`for/[audience].astro`)

- Same layout as Home, built from `audiences.ts` with `getStaticPaths`.
- Each page has its own title, meta description, label, fixed headline (no typing) and five items, plus "Anything else".

| Slug        | Label                                   | Headline                                                | Items                                                                               |
| ----------- | --------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| restaurants | For restaurants and cafés               | AI that handles the busywork, so you can run the floor. | Orders and reservations, Supplier invoices, Menus and listings, Marketing, Insights |
| property    | For landlords and property managers     | AI that keeps repairs and deadlines on track.           | Repair requests, City deadlines, Tenant questions, Marketing, Rent tracking         |
| offices     | For law, accounting and medical offices | AI that handles intake, reminders and paperwork.        | Client intake, Documents, Appointments, Marketing, Billing                          |
| shops       | For shops, boutiques and galleries      | AI that gets your stock online in minutes.              | Listings, Inventory, Customer messages, Marketing, Insights                         |
| salons      | For salons, barbers and studios         | AI that keeps your book full while you work.            | Bookings, No-shows, Regulars, Marketing, Insights                                   |

- Item descriptions are in the design file. Copy them into `audiences.ts` word for word.

## Services (`services.astro`)

- Wide photo, then "What we do": "We pick the right tools for your business, set them up, connect them to what you already use, and teach your team to run them."
- "What we can set up for you": "Our services include, but aren’t limited to, the following. You can start with whichever one would save you the most time."
- Checklist in three columns, one short line each:
  - AI call and message assistant: Answers questions and takes bookings, any hour.
  - Online booking and ordering: Every request in one place, with fewer no-shows.
  - Bookkeeping automation: Invoices and receipts entered for you.
  - Forms and documents: Intake collected online and chased automatically.
  - Marketing content: Posts, newsletters and review replies drafted for you.
  - Customer follow-ups: Reminders and offers that bring people back.
  - Inventory and listings: Photo in, product listing out, stock kept in sync.
  - Staff scheduling: Shifts, swaps and checklists on your team’s phones.
  - Deadline tracking: Permits, inspections and filings, with early reminders.
  - Weekly reports: What sold, your busy hours and where time goes.
  - Website and Google listing: Easy for nearby customers to find you.
  - Training and support: We teach your team and stay a call away.
- Dark banner: "Have something else in mind? If a task is repetitive and eats up your time, we can probably automate it. Tell us about it." Button "Book a 30-minute call".

## About (`about.astro`)

- Headline "Making technology simple for the businesses around us", then "We’re two software engineers." and the intro paragraph.
- How we work: "We listen before we build", "You own what we set up", "Free while we’re starting out".
- Who we are: two profiles (headshot, name, "Co-founder, software engineer", one-line bio).
- Closing band: "Ready to start your project?" with a "Get in touch" button to the Contact page.

## Contact (`contact.astro`)

- Headline "Have a project in mind? Let’s talk." and the email address.
- Form: first name, last name, email, business name, type of business (Restaurant or café, Building or property management, Office or clinic, Shop or gallery, Salon or studio, Something else), message.
- Reuse the same form component as Home, with extra fields turned on by props.

## Thanks (`thanks.astro`)

- Shown after a form is sent without JavaScript.
- Heading "Message sent", then "Thanks for reaching out. We’ll reply by email soon."
- A "Back to home" button.
