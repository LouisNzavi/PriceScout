"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-neutral-100/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 focus-visible:rounded-md">
          <Logo className="h-8 w-8" />
          <span className="text-ink font-bold text-lg">PriceScout</span>
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main">
          <Link
            href="/compare"
            className="text-body hover:text-primary text-sm font-medium transition-colors focus-visible:rounded"
          >
            Compare
          </Link>
          <Link
            href="/basket"
            className="text-body hover:text-primary text-sm font-medium transition-colors focus-visible:rounded"
          >
            Basket
          </Link>
        </nav>
      </div>
    </header>
  );
}
