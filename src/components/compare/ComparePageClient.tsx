"use client";

import { useSearchParams } from "next/navigation";
import { SearchInput } from "@/components/ui/SearchInput";
import { CompareTable } from "@/components/compare/CompareTable";

export function ComparePageClient() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 md:px-6">
      <h1 className="text-ink font-bold text-h2 md:text-h2-lg mb-4">
        Compare prices
      </h1>
      <div className="mb-6">
        <SearchInput />
      </div>
      <CompareTable query={q} />
    </div>
  );
}
