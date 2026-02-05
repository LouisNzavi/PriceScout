"use client";

import { Panel } from "@/components/ui/Panel";

/** Basket: cheapest store summary; per-store totals; savings vs next best; swap suggestions. */
export function BasketPageClient() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 md:px-6">
      <h1 className="text-ink font-bold text-h2 md:text-h2-lg mb-4">
        Basket compare
      </h1>
      <Panel>
        <p className="text-body mb-4">
          Add items from the Compare page to your basket, then see which supermarket is cheapest for your full shop.
        </p>
        <p className="text-body text-sm text-body/80">
          Basket and per-store totals will appear here. MVP: top 20 staples basket compare.
        </p>
      </Panel>
    </div>
  );
}
