"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const placeholder = "Search products (milk, bread, eggs...)";

export function SearchInput() {
  const [q, setQ] = useState("");
  const router = useRouter();

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = q.trim();
      if (trimmed) router.push(`/compare?q=${encodeURIComponent(trimmed)}`);
    },
    [q, router]
  );

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl">
      <label htmlFor="search-main" className="sr-only">
        Search products
      </label>
      <div className="flex gap-2 rounded-button border border-divider bg-neutral-100 overflow-hidden focus-within:ring-2 focus-within:ring-primary-hover focus-within:border-primary">
        <input
          id="search-main"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          className="flex-1 min-w-0 py-3 px-4 text-body placeholder:text-body/60 bg-transparent border-0 focus:ring-0 focus:outline-none"
          autoComplete="off"
        />
        <button
          type="submit"
          className="px-4 bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}
