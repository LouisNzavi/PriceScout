/**
 * Barcode (EAN-13 / GTIN-13) validation and normalisation.
 * UK products typically use 13-digit EAN.
 */

const EAN13_LEN = 13;
const BARCODE_ONLY_DIGITS = /^\d+$/;

/** Normalise barcode: digits only, pad to 13 from left if 12 digits (UPC-A). */
export function normaliseBarcode(input: string): string {
  const digits = input.replace(/\s/g, "").replace(/^0+/, "");
  if (digits.length === 12) return digits.padStart(13, "0");
  return digits;
}

/** Check if string looks like a valid EAN-13 (13 digits; checksum optional for MVP). */
export function isValidEan13(barcode: string): boolean {
  const s = normaliseBarcode(barcode);
  return s.length === EAN13_LEN && BARCODE_ONLY_DIGITS.test(s);
}

/** Format for display (e.g. 5000 1125 4816 7). */
export function formatBarcode(barcode: string): string {
  const s = normaliseBarcode(barcode);
  if (s.length !== 13) return barcode;
  return `${s.slice(0, 4)} ${s.slice(4, 8)} ${s.slice(8, 12)} ${s.slice(12)}`;
}
