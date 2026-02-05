"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";

type ProductState = {
  name: string;
  brand?: string;
  packSize?: string;
  history?: { week: string; avgPrice: number }[];
} | null;

export function ProductPageClient({ productId }: { productId: string }) {
  const [product, setProduct] = useState<ProductState>(null);

  useEffect(() => {
    fetch(`/api/history?productId=${productId}`)
      .then((r) => r.json())
      .then(setProduct)
      .catch(() => setProduct(null));
  }, [productId]);

  if (!product) {
    return (
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        <Panel>
          <p className="text-body">Loading...</p>
        </Panel>
      </div>
    );
  }

  const hist = product.history ?? [];
  const maxPrice = hist.length > 0 ? Math.max(...hist.map((x) => x.avgPrice)) : 1;

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 md:px-6">
      <Link href="/compare" className="text-primary text-sm font-medium hover:underline mb-4 inline-block">
        Back to compare
      </Link>
      <h1 className="text-ink font-bold text-h2 md:text-h2-lg mb-2">{product.name}</h1>
      {(product.brand || product.packSize) && (
        <p className="text-body text-sm mb-6">
          {[product.brand, product.packSize].filter(Boolean).join(" / ")}
        </p>
      )}

      <section className="mb-8">
        <h2 className="text-ink font-semibold text-h3 mb-3">12-week price trend</h2>
        <Panel>
          {hist.length > 0 ? (
            <div className="h-48 flex items-end gap-1">
              {hist.map((h) => (
                <div
                  key={h.week}
                  className="flex-1 bg-primary/20 rounded-t min-h-[4px]"
                  style={{ height: `${Math.max(4, (h.avgPrice / maxPrice) * 100)}%` }}
                  title={`${h.week}: £${h.avgPrice.toFixed(2)}`}
                />
              ))}
            </div>
          ) : (
            <p className="text-body text-sm">Price history will appear here once data is available.</p>
          )}
        </Panel>
      </section>

      <section className="mb-8">
        <h2 className="text-ink font-semibold text-h3 mb-3">Alternatives</h2>
        <Panel>
          <p className="text-body text-sm">Similar products and swap suggestions will be shown here.</p>
        </Panel>
      </section>

      <Panel>
        <h2 className="text-ink font-semibold text-h3 mb-2">Price alerts</h2>
        <p className="text-body text-sm mb-4">Get notified when this product drops in price (1 free alert per user).</p>
        <Button>Subscribe to alert</Button>
      </Panel>
    </div>
  );
}
