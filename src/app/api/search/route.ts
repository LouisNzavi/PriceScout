import { NextRequest, NextResponse } from "next/server";
import { normaliseBarcode } from "@/lib/barcode";

/**
 * GET /api/search?q=...  (text search)
 * GET /api/search?barcode=...  (exact lookup by EAN-13/GTIN)
 * Stub: returns mock compare rows. Replace with FastAPI/backend or DB keyed by barcode.
 */

const RETAILERS = [
  { retailerId: "tesco", retailerName: "Tesco", packPrice: 1.25, unitPrice: 2.5, unit: "per kg", loyaltyPrice: 1.15, wowDelta: -2.1 },
  { retailerId: "sainsburys", retailerName: "Sainsbury's", packPrice: 1.35, unitPrice: 2.7, unit: "per kg", loyaltyPrice: 1.25, wowDelta: 0.5 },
  { retailerId: "asda", retailerName: "Asda", packPrice: 1.19, unitPrice: 2.38, unit: "per kg", wowDelta: -1.0 },
  { retailerId: "aldi", retailerName: "Aldi", packPrice: 1.09, unitPrice: 2.18, unit: "per kg", wowDelta: -3.2 },
] as const;

/** Mock: exact barcode → product. In production, query CanonicalProduct + RetailerProduct by barcode. */
const MOCK_BARCODE_PRODUCTS: Record<string, { name: string; brand?: string; packSize?: string }> = {
  "5000112548167": { name: "Coca-Cola Classic", brand: "Coca-Cola", packSize: "500ml" },
  "5010027000952": { name: "Semi-skimmed milk", brand: "Own brand", packSize: "2L" },
  "8710448032082": { name: "White bread loaf", brand: "Warburtons", packSize: "800g" },
};

function mockRow(productId: string, name: string, brand?: string, packSize?: string, retailers = RETAILERS) {
  return { productId, name, brand, packSize, retailers: retailers as unknown as typeof RETAILERS };
}

export async function GET(request: NextRequest) {
  const barcodeParam = request.nextUrl.searchParams.get("barcode")?.trim() ?? "";
  const q = request.nextUrl.searchParams.get("q")?.trim() ?? "";

  // Exact barcode lookup (takes precedence)
  if (barcodeParam) {
    const barcode = normaliseBarcode(barcodeParam);
    const product = MOCK_BARCODE_PRODUCTS[barcode];
    if (product) {
      return NextResponse.json({
        results: [mockRow(`barcode-${barcode}`, product.name, product.brand, product.packSize)],
        barcode,
      });
    }
    return NextResponse.json({ results: [], barcode });
  }

  // Text search
  if (!q) return NextResponse.json({ results: [] });

  const mockResults = [
    mockRow("mock-1", `${q} (example result)`, "Brand", "500g"),
  ];

  return NextResponse.json({ results: mockResults });
}
