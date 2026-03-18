import { NextRequest, NextResponse } from "next/server";
import { normaliseBarcode } from "@/lib/barcode";
import { CATALOG, type CatalogProduct } from "@/app/api/search/catalog";

/**
 * GET /api/search?q=...  (text search)
 * GET /api/search?barcode=...  (exact lookup by EAN-13/GTIN)
 * MVP: searches an in-repo product catalog. Replace with DB + ingestion pipelines.
 */

function toRow(p: CatalogProduct) {
  return {
    productId: p.productId,
    name: p.name,
    brand: p.brand,
    packSize: p.packSize,
    barcode: p.barcode,
    retailers: p.retailers,
  };
}

function normaliseQuery(q: string) {
  return q.toLowerCase().trim().replace(/\s+/g, " ");
}

function tokenize(q: string) {
  return normaliseQuery(q)
    .split(" ")
    .filter((t) => t.length >= 2 && !["the", "and", "for", "with", "pack"].includes(t));
}

function scoreProduct(qTokens: string[], p: CatalogProduct) {
  const hay = normaliseQuery(
    [p.name, p.brand, p.packSize, ...(p.synonyms ?? [])].filter(Boolean).join(" ")
  );
  let score = 0;
  for (const t of qTokens) {
    if (hay.includes(t)) score += 2;
  }
  // Prefix boost
  if (hay.startsWith(qTokens.join(" "))) score += 2;
  return score;
}

export async function GET(request: NextRequest) {
  const barcodeParam = request.nextUrl.searchParams.get("barcode")?.trim() ?? "";
  const q = request.nextUrl.searchParams.get("q")?.trim() ?? "";

  // Exact barcode lookup (takes precedence)
  if (barcodeParam) {
    const barcode = normaliseBarcode(barcodeParam);
    const hit = CATALOG.find((p) => p.barcode === barcode);
    return NextResponse.json(
      { results: hit ? [toRow(hit)] : [], barcode },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  }

  // Text search
  if (!q) return NextResponse.json({ results: [] });

  const tokens = tokenize(q);
  const results = CATALOG.map((p) => ({ p, score: scoreProduct(tokens, p) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map((x) => toRow(x.p));

  return NextResponse.json(
    { results },
    { headers: { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=120" } }
  );
}
