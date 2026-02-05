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

export interface CanonicalProduct {
  id: string;
  name: string;
  brand?: string;
  packSize?: string;
  imageUrl?: string;
  category?: string;
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
