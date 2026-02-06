"use client";

import { useSearchParams } from "next/navigation";
import { SearchInput } from "@/components/ui/SearchInput";
import { BarcodeInput } from "@/components/compare/BarcodeInput";
import { CompareTable } from "@/components/compare/CompareTable";

export function ComparePageClient() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const barcode = searchParams.get("barcode") ?? "";

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 md:px-6">
      <h1 className="text-ink font-bold text-h2 md:text-h2-lg mb-4">
        Compare prices
      </h1>
      <div className="mb-6 space-y-4">
        <SearchInput />
        <div id="barcode">
          <p className="text-ink font-semibold text-sm mb-2">Or search by barcode</p>
          <BarcodeInput />
        </div>
      </div>
      <CompareTable query={q} barcode={barcode} />
    </div>
  );
}
