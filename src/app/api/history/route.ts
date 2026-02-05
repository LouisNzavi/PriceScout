import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/history?productId=...
 * Stub: returns mock 12-week history. Replace with Timescale/PostgreSQL or backend API.
 */
export async function GET(request: NextRequest) {
  const productId = request.nextUrl.searchParams.get("productId") ?? "";

  // Mock 12-week history
  const weeks = Array.from({ length: 12 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (11 - i) * 7);
    return d.toISOString().slice(0, 10);
  });
  const base = 1.2 + Math.random() * 0.5;
  const history = weeks.map((week, i) => ({
    week,
    avgPrice: Number((base + (i * 0.02) + (Math.random() - 0.5) * 0.1).toFixed(2)),
  }));

  return NextResponse.json({
    productId,
    name: "Product name",
    brand: "Brand",
    packSize: "500g",
    history,
  });
}
