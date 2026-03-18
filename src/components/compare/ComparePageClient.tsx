"use client";

import { useSearchParams } from "next/navigation";
import { SearchInput } from "@/components/ui/SearchInput";
import { BarcodeInput } from "@/components/compare/BarcodeInput";
import { BarcodeScannerButton } from "@/components/compare/BarcodeScannerButton";
import { CompareTable } from "@/components/compare/CompareTable";
import { Toggle } from "@/components/ui/Toggle";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { PREF_KEYS } from "@/lib/preferences";

export function ComparePageClient() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const barcode = searchParams.get("barcode") ?? "";
  const [loyaltyEnabled, setLoyaltyEnabled] = useLocalStorage<boolean>(
    PREF_KEYS.loyaltyEnabled,
    true
  );

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 md:px-6">
      <h1 className="text-ink font-bold text-h2 md:text-h2-lg mb-4">
        Compare prices
      </h1>
      <div className="mb-6">
        <Toggle
          id="loyalty-toggle"
          checked={loyaltyEnabled}
          onChange={setLoyaltyEnabled}
          label="Include loyalty prices"
          description="When available, show Clubcard/Nectar-style prices as the main price."
        />
      </div>
      <div className="mb-6 space-y-4">
        <SearchInput />
        <div id="barcode">
          <p className="text-ink font-semibold text-sm mb-2">Or search by barcode</p>
          <div className="flex flex-col gap-3">
            <BarcodeInput />
            <div className="flex items-center gap-2">
              <BarcodeScannerButton />
              <p className="text-body text-xs">
                Tip: hardware scanners work too (they type the code + press Enter).
              </p>
            </div>
          </div>
        </div>
      </div>
      <CompareTable query={q} barcode={barcode} loyaltyEnabled={loyaltyEnabled} />
    </div>
  );
}
