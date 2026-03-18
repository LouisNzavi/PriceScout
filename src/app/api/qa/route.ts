import { NextResponse } from "next/server";
import { CATALOG } from "@/app/api/search/catalog";

/**
 * Simple data QA endpoint for MVP.
 * In production this becomes Great Expectations checks + pipeline monitoring.
 */

type Issue = { level: "error" | "warn"; message: string };

export async function GET() {
  const issues: Issue[] = [];

  for (const p of CATALOG) {
    if (!p.productId || !p.name) {
      issues.push({ level: "error", message: "Product missing productId/name" });
      continue;
    }
    if (!p.retailers?.length) {
      issues.push({ level: "error", message: `${p.productId} has no retailer prices` });
      continue;
    }
    for (const r of p.retailers) {
      if (r.packPrice == null || r.packPrice < 0) {
        issues.push({ level: "error", message: `${p.productId}:${r.retailerId} invalid packPrice` });
      }
      if (r.unitPrice == null || r.unitPrice < 0) {
        issues.push({ level: "error", message: `${p.productId}:${r.retailerId} invalid unitPrice` });
      }
      if (!r.unit) {
        issues.push({ level: "warn", message: `${p.productId}:${r.retailerId} missing unit` });
      }
      if (r.loyaltyPrice != null && r.loyaltyPrice > r.packPrice) {
        issues.push({ level: "warn", message: `${p.productId}:${r.retailerId} loyaltyPrice > packPrice` });
      }
    }
  }

  const ok = issues.every((i) => i.level !== "error");
  return NextResponse.json({ ok, issueCount: issues.length, issues });
}

