import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/alerts – subscribe to price alert (1 free per user in MVP)
 * Stub: replace with email queue and user/alert storage.
 */
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const { productId, email } = body as { productId?: string; email?: string };
  if (!productId || !email) {
    return NextResponse.json(
      { error: "productId and email required" },
      { status: 400 }
    );
  }
  return NextResponse.json({
    ok: true,
    message: "Alert registered (stub). One free alert per user.",
  });
}
