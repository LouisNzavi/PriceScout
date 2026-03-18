# PriceScout

**PriceScout** is a consumer web app that tracks weekly price movements across major UK supermarkets and shows the cheapest store per item and basket, with transparent unit pricing and loyalty toggle support.

- **MVP retailers:** Tesco, Sainsbury's, Asda, Aldi (expand to Morrisons after launch).
- **Data:** Blends first-party scraping with trusted third-party data collectors for speed, then migrates to in-house pipelines.

## Stack

- **Frontend:** Next.js 14 (App Router) + Tailwind CSS
- **Design:** Light Blue / Apple Blue design system (WCAG AA)
- **API:** Next.js API routes (stubs); backend can be FastAPI or NestJS with `/search`, `/compare`, `/history`, `/basket`, `/alerts`

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` – App Router pages (home, compare, product/[id], basket) and API routes
- `src/components/` – UI (design system) and feature components (home, compare, product, basket)
- `src/types/` – Shared TypeScript types

## Feature list (UI-focused)

### Search + scan

- **Product search**: fast search box with query persistence via URL (`/compare?q=...`).
- **Barcode lookup**: enter/scan **EAN-13/GTIN** and jump straight to an exact match (`/compare?barcode=...`).
- **Zero-friction empty states**: clear guidance when no query is present; helpful message when nothing matches.

### Compare (core experience)

- **Per-retailer columns**: pack price + unit price shown together for quick scan.
- **Loyalty price slot**: dedicated space for Clubcard/Nectar-style pricing (badge-style in UI; wire-ready).
- **Week-over-week movement**: WoW change chip (mint for ↓ cheaper, coral for ↑ pricier).
- **Numbers are readable**: tabular numerals, right-aligned numeric columns, zebra rows for scanning.

### Home (discovery)

- **“Cheapest this week” strip**: quick cards that deep-link into compare.
- **Risers & fallers tables**: trend-led entry points for PR/SEO-style weekly digest content.

### Product details

- **12-week trend**: lightweight trend visual that can be replaced with a proper chart later.
- **Alternatives + swaps**: placeholder section for future “swap to save” recommendations.
- **Alerts CTA**: “Subscribe to alert” entry point (MVP: 1 free alert per user).

### Basket (next step)

- **Cheapest store summary**: structure ready for per-store totals and savings vs next best.
- **Swap suggestions**: placeholder for “keep store / change item” style savings suggestions.

### Trust, clarity, accessibility

- **Unit pricing foregrounded**: designed to keep unit price visible and comparable.
- **Accessible focus + contrast**: WCAG AA target; consistent focus ring and readable typography.
- **Provenance ready**: API stubs are set up to attach “Observed online at {retailer} on {date}”.

## Screens

- **Home:** Hero, search, "Cheapest this week" cards, "Risers & Fallers" tables
- **Compare:** Search-driven product rows with pack price, unit price, loyalty badge, WoW chip per retailer
- **Product:** 12-week price trend, alternatives, subscribe for alerts
- **Basket:** Cheapest store summary, per-store totals, savings (MVP: top 20 staples)

## Barcode lookup

Users can **scan or type a barcode** (EAN-13/GTIN) on the Compare page to see which supermarket is cheaper for that exact product.

- **Compare page:** “Or search by barcode” – enter 13 digits or scan (camera/scanner can fill the input).
- **API:** `GET /api/search?barcode=5000112548167` returns exact product + retailer prices.
- **Adding products:** In production, store `barcode` on `CanonicalProduct` and query by it. For the mock, add entries to `MOCK_BARCODE_PRODUCTS` in `src/app/api/search/route.ts` (e.g. `"5000112548167": { name: "Coca-Cola Classic", ... }`).
- **Validation:** `src/lib/barcode.ts` – `normaliseBarcode`, `isValidEan13`, `formatBarcode`.

## Design system

- **Primary:** #0077FF (hover #0A84FF)
- **Typography:** Inter; headings 700, body 400/500
- **Components:** Buttons (primary/secondary/tertiary), panels, cards, tables, WoW chips (mint = down, coral = up)

## Roadmap

- Week 1–2 (MVP α): 50 SKUs, daily ingestion, compare + history + 1 free alert
- Week 3–4 (MVP β): Weekly digest, loyalty toggle, basket compare, QA
- Week 5–8: Morrisons + Aldi, 200 SKUs, category pages, SEO
- Week 9–12: Postcode localisation, charts, shareable widgets

## License

Private. See product & engineering blueprint for full scope and compliance (CMA unit pricing, robots, attribution).
