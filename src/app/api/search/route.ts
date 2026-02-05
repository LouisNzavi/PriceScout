import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/search?q=...
 * Stub: returns mock compare rows. Replace with FastAPI/backend or serverless DB.
 */
export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim() ?? "";
  if (!q) {
    return NextResponse.json({ results: [] });
  }

  // Mock data for MVP – replace with real search/matching pipeline
  const mockResults = [
    {
      productId: "mock-1",
      name: `${q} (example result)`,
      brand: "Brand",
      packSize: "500g",
      retailers: [
        { retailerId: "tesco", retailerName: "Tesco", packPrice: 1.25, unitPrice: 2.5, unit: "per kg", loyaltyPrice: 1.15, wowDelta: -2.1 },
        { retailerId: "sainsburys", retailerName: "Sainsbury's", packPrice: 1.35, unitPrice: 2.7, unit: "per kg", loyaltyPrice: 1.25, wowDelta: 0.5 },
        { retailerId: "asda", retailerName: "Asda", packPrice: 1.19, unitPrice: 2.38, unit: "per kg", wowDelta: -1.0 },
      ],
    },
  ];

  return NextResponse.json({ results: mockResults });
}
