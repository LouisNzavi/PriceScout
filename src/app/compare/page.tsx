import { Suspense } from "react";
import { ComparePageClient } from "@/components/compare/ComparePageClient";

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-[1200px] px-4 py-8">Loading...</div>}>
      <ComparePageClient />
    </Suspense>
  );
}
