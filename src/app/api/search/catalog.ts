export type RetailerId = "tesco" | "sainsburys" | "asda" | "aldi";

export type RetailerPrice = {
  retailerId: RetailerId;
  retailerName: string;
  packPrice: number;
  unitPrice: number;
  unit: string; // e.g. "per kg", "per L", "each"
  loyaltyPrice?: number;
  wowDelta?: number;
};

export type CatalogProduct = {
  productId: string;
  name: string;
  brand?: string;
  packSize?: string;
  barcode?: string;
  synonyms?: string[];
  retailers: RetailerPrice[];
};

export const CATALOG: CatalogProduct[] = [
  {
    productId: "egg-6-free-range",
    name: "Free range eggs",
    brand: "Mixed brands",
    packSize: "6 pack",
    synonyms: ["eggs", "egg", "free range eggs", "x6 eggs", "6 eggs"],
    retailers: [
      {
        retailerId: "tesco",
        retailerName: "Tesco",
        packPrice: 1.75,
        unitPrice: 0.29,
        unit: "each",
        loyaltyPrice: 1.55,
        wowDelta: -1.2,
      },
      {
        retailerId: "sainsburys",
        retailerName: "Sainsbury's",
        packPrice: 1.85,
        unitPrice: 0.31,
        unit: "each",
        loyaltyPrice: 1.65,
        wowDelta: 0.4,
      },
      {
        retailerId: "asda",
        retailerName: "Asda",
        packPrice: 1.69,
        unitPrice: 0.28,
        unit: "each",
        wowDelta: -0.5,
      },
      {
        retailerId: "aldi",
        retailerName: "Aldi",
        packPrice: 1.49,
        unitPrice: 0.25,
        unit: "each",
        wowDelta: -1.8,
      },
    ],
  },
  {
    productId: "steak-rump-300g",
    name: "Beef rump steak",
    brand: "Own brand",
    packSize: "300g",
    synonyms: ["steak", "beef steak", "rump steak", "beef rump"],
    retailers: [
      {
        retailerId: "tesco",
        retailerName: "Tesco",
        packPrice: 4.25,
        unitPrice: 14.17,
        unit: "per kg",
        loyaltyPrice: 3.85,
        wowDelta: 0.6,
      },
      {
        retailerId: "sainsburys",
        retailerName: "Sainsbury's",
        packPrice: 4.49,
        unitPrice: 14.97,
        unit: "per kg",
        loyaltyPrice: 3.99,
        wowDelta: 1.1,
      },
      {
        retailerId: "asda",
        retailerName: "Asda",
        packPrice: 3.99,
        unitPrice: 13.3,
        unit: "per kg",
        wowDelta: -0.3,
      },
      {
        retailerId: "aldi",
        retailerName: "Aldi",
        packPrice: 3.79,
        unitPrice: 12.63,
        unit: "per kg",
        wowDelta: -0.7,
      },
    ],
  },
  {
    productId: "milk-semi-2l",
    name: "Semi-skimmed milk",
    brand: "Own brand",
    packSize: "2L",
    barcode: "5010027000952",
    synonyms: ["milk", "semi skimmed milk", "semi-skimmed milk", "2l milk"],
    retailers: [
      {
        retailerId: "tesco",
        retailerName: "Tesco",
        packPrice: 1.45,
        unitPrice: 0.73,
        unit: "per L",
        loyaltyPrice: 1.35,
        wowDelta: 0.1,
      },
      {
        retailerId: "sainsburys",
        retailerName: "Sainsbury's",
        packPrice: 1.55,
        unitPrice: 0.78,
        unit: "per L",
        loyaltyPrice: 1.45,
        wowDelta: 0.4,
      },
      {
        retailerId: "asda",
        retailerName: "Asda",
        packPrice: 1.39,
        unitPrice: 0.7,
        unit: "per L",
        wowDelta: -0.2,
      },
      {
        retailerId: "aldi",
        retailerName: "Aldi",
        packPrice: 1.29,
        unitPrice: 0.65,
        unit: "per L",
        wowDelta: -0.5,
      },
    ],
  },
  {
    productId: "bread-white-800g",
    name: "White bread loaf",
    brand: "Warburtons",
    packSize: "800g",
    barcode: "8710448032082",
    synonyms: ["bread", "white bread", "loaf", "800g bread"],
    retailers: [
      {
        retailerId: "tesco",
        retailerName: "Tesco",
        packPrice: 1.55,
        unitPrice: 1.94,
        unit: "per kg",
        loyaltyPrice: 1.35,
        wowDelta: 0.2,
      },
      {
        retailerId: "sainsburys",
        retailerName: "Sainsbury's",
        packPrice: 1.59,
        unitPrice: 1.99,
        unit: "per kg",
        wowDelta: 0.0,
      },
      {
        retailerId: "asda",
        retailerName: "Asda",
        packPrice: 1.49,
        unitPrice: 1.86,
        unit: "per kg",
        wowDelta: -0.1,
      },
      {
        retailerId: "aldi",
        retailerName: "Aldi",
        packPrice: 1.35,
        unitPrice: 1.69,
        unit: "per kg",
        wowDelta: -0.3,
      },
    ],
  },
  {
    productId: "coke-500ml",
    name: "Coca-Cola Classic",
    brand: "Coca-Cola",
    packSize: "500ml",
    barcode: "5000112548167",
    synonyms: ["coke", "coca cola", "cola", "coca-cola", "coca cola classic"],
    retailers: [
      {
        retailerId: "tesco",
        retailerName: "Tesco",
        packPrice: 1.75,
        unitPrice: 3.5,
        unit: "per L",
        loyaltyPrice: 1.5,
        wowDelta: 0.0,
      },
      {
        retailerId: "sainsburys",
        retailerName: "Sainsbury's",
        packPrice: 1.85,
        unitPrice: 3.7,
        unit: "per L",
        loyaltyPrice: 1.55,
        wowDelta: 0.4,
      },
      {
        retailerId: "asda",
        retailerName: "Asda",
        packPrice: 1.65,
        unitPrice: 3.3,
        unit: "per L",
        wowDelta: -0.2,
      },
      {
        retailerId: "aldi",
        retailerName: "Aldi",
        packPrice: 1.59,
        unitPrice: 3.18,
        unit: "per L",
        wowDelta: -0.1,
      },
    ],
  },
];

