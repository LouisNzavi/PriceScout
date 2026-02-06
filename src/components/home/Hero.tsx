import { SearchInput } from "@/components/ui/SearchInput";

export function Hero() {
  return (
    <section className="border-b border-divider bg-neutral-50">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16 md:px-6">
        <h1 className="text-ink font-bold text-h1 md:text-h1-lg mb-2 prose-readable">
          Which supermarket is cheapest this week?
        </h1>
        <p className="text-body text-base md:text-lg mb-8 max-w-[600px]">
          Track weekly price movements across Tesco, Sainsbury&apos;s, Asda and Aldi.
          Compare pack and unit prices, and see the best store for your basket.
        </p>
        <SearchInput />
        <p className="text-body text-sm mt-4">
          Or{" "}
          <a href="/compare#barcode" className="text-primary font-medium hover:underline">
            scan a barcode
          </a>{" "}
          to see which supermarket is cheaper for that exact product.
        </p>
      </div>
    </section>
  );
}
