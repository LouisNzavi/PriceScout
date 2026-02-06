/** PriceScout shared types – aligned with API and data model */

export type RetailerId = "tesco" | "sainsburys" | "asda" | "morrisons" | "aldi";

export interface Retailer {
  id: RetailerId;
  name: string;
  slug: string;
}

export interface PriceObservation {
  retailerId: RetailerId;
  packPrice: number;
  unitPrice: number;
  unit: string; // e.g. "per kg", "per L"
  loyaltyPrice?: number;
  observedAt: string; // ISO date
  wowDelta?: number; // week-over-week change
}

/** EAN-13 / GTIN-13 barcode (e.g. 5000112548167). Used for exact product lookup and scan. */
export type Barcode = string;

export interface CanonicalProduct {
  id: string;
  name: string;
  brand?: string;
  packSize?: string;
  imageUrl?: string;
  category?: string;
  /** Exact barcode (EAN-13/GTIN) for scan & compare. */
  barcode?: Barcode;
}

export interface ProductCompareRow extends CanonicalProduct {
  retailers: PriceObservation[];
}

export interface BasketStoreSummary {
  retailerId: RetailerId;
  totalPack: number;
  totalSavingsVsNext?: number;
  itemCount: number;
}

export interface Alert {
  id: string;
  productId: string;
  email: string;
  targetPrice?: number;
  createdAt: string;
}
