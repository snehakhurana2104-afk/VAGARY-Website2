# VAGARY — Premium Website

A premium, editorial website for VAGARY, a sustainable lifestyle brand,
built with React + Vite + React Router.

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build      # production build
npm run preview    # preview the production build locally
```

## Pages / routes

| Route            | Page                                          |
|-------------------|-----------------------------------------------|
| `/`               | Home — hero, collections, featured products, sustainability teaser, bags teaser, gifting, custom branding, final CTA |
| `/about`          | Brand story                                    |
| `/collections`    | Full catalog for Drinkware, Bottles, Gardenware, Bags (`#drinkware`, `#bottles`, `#gardenware`, `#bags` anchors jump to each) |
| `/bags`           | Dedicated Bags collection page                 |
| `/sustainability` | Full BioDur / farm-leftovers story             |
| `/contact`        | Working enquiry form                           |
| any other path    | 404 page with a link back home                 |

Every "Enquire Now", "Explore Collections", "Shop Bags", "Learn More",
"Create Your Gift Set", "Request a Catalogue" and "Talk to Our Team"
button across the site is a real link to one of these routes — nothing
points at a dead `#` anchor.

If you deploy this as a static site, configure your host to redirect all
unmatched paths to `index.html` (standard for any SPA) so refreshing
`/contact` etc. doesn't 404 at the server level — Vercel/Netlify do this
automatically for Vite projects; a plain static file host will need a
rewrite rule.

## The enquiry form

`/contact` and collection enquiry forms validate customer details, contact
number, product, quantity, message, and selected cart items. They POST the
structured enquiry to `VITE_ENQUIRY_ENDPOINT`; that server endpoint must
deliver the message to `info@vagaryonline.com` using its server-side email
provider credentials. Copy `.env.example` to `.env` and replace the example
endpoint before deployment. No email API secret is exposed in the browser.

## Project structure

```
package.json
index.html
public/
  images/
    products/        individual featured-product photography
    collections/       the 3 photographed collection-card images
    gifting/            gift-box, tea-set, and Inspiration Chess Set photography
    bags/                empty — no bag photos were supplied (see its README)
    sustainability/      empty — no raw-material photo was supplied (see its README)
src/
  App.jsx             route definitions
  main.jsx            entry point, wraps App in BrowserRouter
  app.css             design tokens + all styles (page-level styles included)
  pages/              one file per route
  components/         shared layout + one file per homepage section
    Layout.jsx          announcement bar + nav + footer wrapper used by every page
    ScrollToTop.jsx      resets scroll position on route change
  data/
    products.js         collections, featured products, gifting data, catalog lists
  assets/              for build-time assets (see its own README) — currently unused
```

## Images — what's real vs. placeholder

All photography under `public/images/` (bottles, cups, planters, tea
sets, the chess set) is unedited product photography you supplied — no
VAGARY branding or "Thoughtful" text was added onto any physical
product. Brand copy only appears in navigation, footer, and page text,
never baked into a product photo.

Two folders are intentionally empty because no matching photography was
supplied — each has its own `README.md` explaining what to drop in and
which component to update:

- `public/images/bags/`
- `public/images/sustainability/`

## Sustainability content

The BioDur / farm-leftovers story on the homepage teaser and the full
`/sustainability` page both follow the same facts: rice/wheat husks and
stalks are normally thrown away or burned; they're combined with a small
amount of strong material to make BioDur; BioDur becomes gardenware,
drinkware and tableware; the result is strong, durable, recyclable
products with less waste and less reliance on new plastic. No claims
beyond that were added.

## A note on `package-lock.json`

This build environment has no network access, so a genuine lockfile
can't be generated here (a fabricated one with made-up integrity hashes
would break `npm ci` for you, which is worse than no lockfile at all).
`package.json` has exact dependency versions pinned — running
`npm install` on your machine resolves and writes an accurate
`package-lock.json` automatically on first install.

## Verification performed before packaging

This environment also has no network access, so I couldn't run a live
`npm install` + `npm run dev` here. Instead I verified the project two
ways:

1. **Static analysis** — every relative import resolves to a real file,
   every named import (icons, data exports) has a matching export, and
   every `/images/...` path referenced in code has a matching file on
   disk.
2. **Real compilation** — I ran the actual project entry point
   (`src/main.jsx`) through esbuild (the same bundler Vite uses
   internally) with React/React Router marked as external dependencies,
   and confirmed it bundles with zero errors, and that every page and
   component function (Home, About, CollectionsPage, BagsPage,
   SustainabilityPage, ContactPage, NotFound, Navbar, Footer, Layout,
   and all homepage sections) is present in the compiled output.
   `src/app.css` was compiled the same way with zero errors.

Content checks also confirmed: no "Best Sellers" section anywhere, no
"Corporate" collection card, and the Collections grid is exactly
Drinkware → Bottles → Gardenware → Bags, in that order.

I'd still recommend running `npm install && npm run dev` yourself as a
final check — a bundler pass catches real syntax/resolution errors, but
only booting the dev server and clicking through will catch a runtime
UI glitch.

## Content

Product names, descriptions, catalog lists, and gifting combinations in
`src/data/products.js` reflect the specifications and photography you
supplied. Update that file to add real pricing, additional SKUs, or swap
content — components read from it directly, so most content changes
don't need any JSX edits.
