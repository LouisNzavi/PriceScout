import { SearchInput } from "@/components/ui/SearchInput";

export function Hero() {
  return (
    <section className="border-b border-divider bg-neutral-50">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16 md:px-6">
        <h1 className="text-ink font-bold text-h1 md:text-h1-lg mb-2 prose-readable">
          Which supermarket is cheapest this week?
        </h1>
        <p className="text-body text-base md:text-lg mb-8 max-w-[600px]">
          Track weekly price movements across Tesco, Sainsbury&apos;s and Asda.
          Compare pack and unit prices, and see the best store for your basket.
        </p>
        <SearchInput />
      </div>
    </section>
  );
}
