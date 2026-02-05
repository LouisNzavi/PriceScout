import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/basket – add/update basket items
 * GET /api/basket – get basket and per-store totals
 * Stub: replace with session/DB and basket compare logic.
 */
export async function GET() {
  return NextResponse.json({
    items: [],
    stores: [],
    cheapestStoreId: null,
    savingsVsNext: null,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({ ok: true, message: "Basket updated (stub)" });
}
