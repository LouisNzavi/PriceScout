"use client";

import { useEffect, useState } from "react";
import { Panel } from "@/components/ui/Panel";
import { WoWChip } from "@/components/ui/WoWChip";

/** Compare: product photo, brand, pack size, columns per retailer (pack price, unit price, loyalty badge, WoW chip). */
interface CompareRow {
  productId: string;
  name: string;
  brand?: string;
  packSize?: string;
  imageUrl?: string;
  retailers: {
    retailerId: string;
    retailerName: string;
    packPrice: number;
    unitPrice: number;
    unit: string;
    loyaltyPrice?: number;
    wowDelta?: number;
  }[];
}

export function CompareTable({ query }: { query: string }) {
  const [rows, setRows] = useState<CompareRow[]>([]);
  const [loading, setLoading] = useState(!!query);

  useEffect(() => {
    if (!query) {
      setRows([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then((r) => r.json())
      .then((data) => {
        setRows(data.results ?? []);
      })
      .catch(() => setRows([]))
      .finally(() => setLoading(false));
  }, [query]);

  if (!query) {
    return (
      <Panel>
        <p className="text-body">Enter a product name above to compare prices across Tesco, Sainsbury&apos;s and Asda.</p>
      </Panel>
    );
  }

  if (loading) {
    return (
      <Panel>
        <p className="text-body">Searching…</p>
      </Panel>
    );
  }

  if (rows.length === 0) {
    return (
      <Panel>
        <p className="text-body">No results for &quot;{query}&quot;. Try another search.</p>
      </Panel>
    );
  }

  const retailers = rows[0]?.retailers ?? [];
  return (
    <Panel className="overflow-x-auto">
      <table className="w-full text-sm border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b border-divider">
            <th className="py-3 px-4 text-left font-semibold text-ink">Product</th>
            {retailers.map((r) => (
              <th key={r.retailerId} className="py-3 px-4 text-right font-semibold text-ink">
                {r.retailerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.productId} className="border-b border-divider/80 hover:bg-table-zebra">
              <td className="py-3 px-4">
                <div className="font-medium text-ink">{row.name}</div>
                {row.brand && <div className="text-body text-xs">{row.brand}</div>}
                {row.packSize && <div className="text-body text-xs">{row.packSize}</div>}
              </td>
              {row.retailers.map((r) => (
                <td key={r.retailerId} className="py-3 px-4 text-right">
                  <div className="tabular-nums font-semibold">£{r.packPrice.toFixed(2)}</div>
                  <div className="text-body text-xs">{r.unitPrice.toFixed(2)} {r.unit}</div>
                  {r.loyaltyPrice != null && (
                    <div className="text-success text-xs">Loyalty £{r.loyaltyPrice.toFixed(2)}</div>
                  )}
                  {r.wowDelta != null && <WoWChip delta={r.wowDelta} />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}
