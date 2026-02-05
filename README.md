# PriceScout

**PriceScout** is a consumer web app that tracks weekly price movements across major UK supermarkets and shows the cheapest store per item and basket, with transparent unit pricing and loyalty toggle support.

- **MVP retailers:** Tesco, Sainsbury's, Asda (expand to Morrisons and Aldi after launch).
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

## Screens

- **Home:** Hero, search, "Cheapest this week" cards, "Risers & Fallers" tables
- **Compare:** Search-driven product rows with pack price, unit price, loyalty badge, WoW chip per retailer
- **Product:** 12-week price trend, alternatives, subscribe for alerts
- **Basket:** Cheapest store summary, per-store totals, savings (MVP: top 20 staples)

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
