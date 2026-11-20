# CLAUDE.md — Settl website

## About the project

- Settl is two software engineers helping local small businesses save time with AI.
- The help is free while we get started. We volunteer with our first businesses to learn what they need.
- The site's job is to explain what we do and get owners to contact us or book a call.
- Contact email: business@settlhere.com
- Booking link (Calendly): https://calendly.com/business-settlhere/30min
- The domain is registered on Squarespace. The site is hosted elsewhere and the domain points to it with DNS records.

## Chat answer rules

- Answer my questions in bullet points only.
- Give the shortest answer that fully answers the question.
- Use simple English. No jargon unless I ask for it.
- Only explain more when I ask for more detail.
- These rules apply to chat answers, not to code, comments, or docs.

## File size rules

- No file may be longer than 400 lines. This includes tests.
- If a file is getting close to 400 lines, split it before adding more.
- Check line counts with `wc -l` after editing a file.
- This file (CLAUDE.md) follows the same limit.

## Reuse rules

- Make sure to reuse components wherever fits.
- Make sure to make common files for reusable components and css.
- Before writing a new component, check `src/components/` for one that already does the job.
- If the same markup appears twice, turn it into a component.
- If the same CSS value appears twice, turn it into a variable in `src/styles/tokens.css`.

## Tech stack

- Framework: Astro, static output only. Every page is built to plain HTML ahead of time.
- Styling: plain CSS. Global tokens and base styles in `src/styles/`, everything else in scoped `<style>` blocks inside components.
- Do not use Tailwind, Bootstrap, styled-components or any CSS-in-JS library.
- Language: TypeScript for data files, props and scripts.
- No React, Vue or other UI framework. Use Astro components and small vanilla `<script>` blocks.
- Fonts: Manrope (headings) and Nunito Sans (body), self-hosted with Fontsource. No Google Fonts requests.
- Sitemap: `@astrojs/sitemap`.
- Hosting: Vercel (likely). Connect the Squarespace domain with the DNS records Vercel provides.
- Form handling: Google Apps Script web app that saves each message to a Google Sheet and emails a copy. Details in the Forms section.
- Analytics: not decided yet. Do not add any tracking script until we choose one.
- Do not add a new dependency without asking first.

## Project structure

```
settl/
├── apps-script/
│   └── Code.gs            form handler, deployed to Google Apps Script
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/            images Astro should optimize
│   ├── components/
│   │   ├── layout/        Nav, Footer, Container, Section
│   │   ├── ui/            Button, PhotoPlaceholder, CheckList
│   │   └── sections/      Hero, HelpGrid, FreeBanner, ContactSection, ServicesList
│   ├── data/
│   │   ├── site.ts        name, email, Calendly link, nav links
│   │   ├── audiences.ts   audience versions for /for/[audience]
│   │   ├── services.ts    the services checklist
│   │   └── team.ts        the two team members
│   ├── layouts/
│   │   └── BaseLayout.astro   <head>, SEO tags, JSON-LD, Nav, Footer
│   ├── pages/
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── thanks.astro
│   │   └── for/[audience].astro
│   ├── scripts/           small shared client scripts (for example the typing effect)
│   └── styles/
│       ├── tokens.css     colors, fonts, spacing, sizes
│       └── global.css     reset, base elements, .container, .button
├── .env.example
├── CLAUDE.md              rules for working on the code
├── DESIGN.md              page sections and copy
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

- `src/pages/` only arranges sections. Pages should be short.
- All copy lives in `src/data/`. Components receive it through props. Do not hard-code copy inside components.
- One component per file. Each component does one job.
- Component files use PascalCase (`HelpGrid.astro`). Data and script files use camelCase (`audiences.ts`).

## Component rules

- Every component declares its props with `interface Props`.
- Give props sensible defaults so a component never breaks when a prop is missing.
- Build pages from shared pieces: `Section` for spacing and background, `Container` for max width, `Button` for every button and button-styled link.
- `Button` supports these variants: `primary` (dark green), `accent` (lime on dark), `outline`.
- Use `PhotoPlaceholder` until real photos exist. It takes a `label` describing the photo needed.
- Use `<a>` for navigation and `<button>` for actions. Never put click handlers on a `div` or `span`.

## CSS rules

- `tokens.css` holds every color, font, size and spacing value. Components use `var(--...)` only. No raw hex codes or font names in components.
- `global.css` holds only the reset, base element styles (body, headings, links, form fields) and shared classes (`.container`, `.button`, `.visually-hidden`).
- No inline `style` attributes.
- Layout with flexbox and grid plus `gap`. Prefer `flex-wrap` and `auto-fit` grids over media queries.
- Use `clamp()` for headings and section padding so they scale with screen size.
- Mobile first. Every page must work at 360px wide with no sideways scrolling.

### Design tokens

```css
:root {
  --color-lime: #e9ff6c;
  --color-lime-soft: #f4ffb8; /* form fields on lime */
  --color-beige: #e1d6c2; /* main background, footers */
  --color-cream: #f2f3e5; /* alternate sections, Services background */
  --color-ink: #1d2a20; /* text, buttons, dark bands */
  --color-muted: #4e4a3e; /* secondary text */
  --color-divider: #cfc8b3;
  --color-placeholder: #d6cbb5;
  --font-heading: "Manrope", "Helvetica Neue", Arial, sans-serif;
  --font-body: "Nunito Sans", "Helvetica Neue", Arial, sans-serif;
  --max-width: 1280px;
  --radius-pill: 999px;
  --radius-field: 10px;
  --tap-target: 44px;
}
```

## Content rules

- Never mention prices, fees or contracts. Our help is free for now.
- Never name a specific city, neighborhood or address on the site.
- Never invent clients, results, numbers or testimonials. We have no clients yet.
- Avoid lines that imply past clients, such as "most clients start with".
- Write for busy owners: short sentences, plain words, no tech jargon.
- Use curly apostrophes and quotes in site copy (’ “ ”). Keep straight quotes in code.
- Do not change approved copy without asking. If wording seems off, suggest the change.

## Pages

- Page content and layout live in `DESIGN.md`. Read it before building or changing any page.
- The design can change. When `DESIGN.md` and this file disagree about page content, `DESIGN.md` wins.
- Copy from `DESIGN.md` goes into `src/data/`, never straight into components.

## SEO rules

- Every page sets a unique `<title>` and meta description through `BaseLayout` props.
- One `<h1>` per page. Headings go in order (h1, h2, h3) with no skipped levels.
- Use semantic HTML: `header`, `nav`, `main`, `section`, `footer`, lists for lists.
- `BaseLayout` adds a canonical URL, Open Graph tags and LocalBusiness JSON-LD (name, email, URL, services).
- Set `site` in `astro.config.mjs` so the sitemap and canonical URLs are correct.
- `robots.txt` points to the sitemap.
- Every image has useful `alt` text, or `alt=""` if it is decoration.
- Use Astro's `<Image>` from `astro:assets` for photos in `src/assets/` so they are resized and compressed.
- Clean, readable URLs: `/services`, `/about`, `/for/restaurants`.

## Accessibility rules

- Every form field has a visible `<label>`.
- Text contrast at least 4.5:1. Check muted text on every background it sits on.
- Visible focus styles on links, buttons and fields. Never remove outlines without a replacement.
- Respect `prefers-reduced-motion` for every animation.
- Add a "Skip to content" link at the top of `BaseLayout`.
- Icon-only links get an `aria-label`. Decorative SVGs get `aria-hidden="true"`.

## Performance rules

- Ship zero JavaScript unless a feature needs it. Today only the typing headline and form feedback do.
- Client scripts are plain TypeScript in `<script>` tags or `src/scripts/`. No libraries.
- No third-party scripts. Analytics may be added later.
- Preload the heading font. Use `font-display: swap`.
- Keep each page light: aim for a Lighthouse score of 95 or more on mobile for performance, accessibility and SEO.

## Forms

- Forms post to a Google Apps Script web app. Its URL lives in `PUBLIC_FORM_ENDPOINT`.
- The script saves each message as a row in a Google Sheet (date, page, name, email, business, type, message) and emails a copy to business@settlhere.com.
- Keep the Apps Script code in the repo at `apps-script/Code.gs` so it is versioned. Deploy it as a web app that anyone can access.
- With JavaScript: submit with `fetch`, show "Sending…" while waiting (Apps Script can take a few seconds), then an inline "Message sent" note or an error.
- Without JavaScript: the form still posts normally, and the script responds by sending the visitor to a `/thanks` page on our site.
- Show clear error messages next to the field that needs fixing.
- Add a hidden honeypot field. The script ignores any message where it is filled in.
- The script never loads on page view. It only runs when someone submits.

## Environment and secrets

- Keep secrets and endpoints in `.env`. Never commit `.env`.
- Keep `.env.example` up to date with every variable name and no real values.

## Checks before finishing a task

- Run `wc -l` on every file you changed. Split any file near 400 lines.
- Run `npx astro check` and fix every error.
- Run `npm run build` and make sure it passes.
- Format with Prettier (with `prettier-plugin-astro`).
- Look for repeated markup or CSS you added, and move it into a shared component or token.
- If you add a test, it follows the 400-line limit like every other file.

## Git

- Small commits, one change each, with a clear message (for example "Add services checklist component").
- Do not commit build output (`dist/`), `node_modules/` or `.env`.

## Still open

- Real photos: home hero, services banner, about photo, two headshots, contact photo.
- Team names and bios.
- Confirm Vercel as the host.
- Set up the Google Sheet and deploy the Apps Script web app.
- Analytics tool (discuss later).
- Rename the Calendly event to something like "Settl intro call".
- Decide whether to name a service area for local SEO (site copy currently names no location).
