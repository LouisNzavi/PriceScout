"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { normaliseBarcode } from "@/lib/barcode";

const placeholder = "Enter or scan barcode (e.g. 5000112548167)";

export function BarcodeInput() {
  const [barcode, setBarcode] = useState("");
  const router = useRouter();

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const raw = barcode.replace(/\s/g, "").trim();
      if (!raw) return;
      const normalised = normaliseBarcode(raw);
      router.push(`/compare?barcode=${encodeURIComponent(normalised)}`);
    },
    [barcode, router]
  );

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl">
      <label htmlFor="barcode-input" className="sr-only">
        Search by barcode
      </label>
      <div className="flex gap-2 rounded-button border border-divider bg-neutral-100 overflow-hidden focus-within:ring-2 focus-within:ring-primary-hover focus-within:border-primary">
        <input
          id="barcode-input"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value.replace(/\D/g, "").slice(0, 13))}
          placeholder={placeholder}
          className="flex-1 min-w-0 py-3 px-4 text-body placeholder:text-body/60 bg-transparent border-0 focus:ring-0 focus:outline-none font-mono tabular-nums"
        />
        <button
          type="submit"
          className="px-4 bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
        >
          Look up
        </button>
      </div>
      <p className="text-body text-xs mt-1.5">
        Use your phone camera or type the 13-digit barcode (EAN) to see which supermarket is cheaper.
      </p>
    </form>
  );
}
