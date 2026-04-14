'use client';

import React, { useState } from 'react';

const CATEGORIES = ['ALL', 'TEES', 'HOODIES', 'OUTERWEAR', 'ACCESSORIES', 'ARCHIVE'];
const SORTS = ['FEATURED', 'NEW ARRIVALS', 'PRICE: LOW–HIGH', 'PRICE: HIGH–LOW'];

interface ShopFiltersProps {
  onCategoryChange: (cat: string) => void;
  onSortChange: (sort: string) => void;
  activeCategory: string;
  activeSort: string;
  totalCount: number;
}

export default function ShopFilters({
  onCategoryChange,
  onSortChange,
  activeCategory,
  activeSort,
  totalCount,
}: ShopFiltersProps) {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="sticky top-14 z-50 bg-[rgba(10,10,10,0.97)] backdrop-blur-md border-b border-[#161616] px-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 py-3 flex-wrap">

        {/* Category pills */}
        <div className="flex items-center gap-1 flex-wrap">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`text-[10px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 border transition-all duration-200 ${
                  active
                    ? 'bg-[#c8f135] text-black border-[#c8f135]'
                    : 'bg-transparent text-[#444] border-[#1e1e1e] hover:text-[#ededed] hover:border-[#333]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Right side: count + sort */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-[#2e2e2e] tracking-wide tabular-nums">
            {totalCount} ITEMS
          </span>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen((o) => !o)}
              className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.12em] uppercase text-[#444] border border-[#1e1e1e] px-3 py-1.5 hover:text-[#ededed] hover:border-[#333] transition-all duration-200"
            >
              {activeSort}
              <svg
                className={`transition-transform duration-200 ${sortOpen ? 'rotate-180' : 'rotate-0'}`}
                width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {sortOpen && (
              <div className="absolute top-[calc(100%+4px)] right-0 bg-[#111] border border-[#1e1e1e] min-w-[200px] z-50 overflow-hidden shadow-2xl">
                {SORTS.map((s) => (
                  <button
                    key={s}
                    onClick={() => { onSortChange(s); setSortOpen(false); }}
                    className={`w-full text-left text-[10px] font-semibold tracking-[0.1em] uppercase px-4 py-2.5 border-b border-[#1a1a1a] transition-colors duration-150 ${
                      activeSort === s
                        ? 'bg-[#1a1a1a] text-[#c8f135]'
                        : 'text-[#444] hover:bg-[#1a1a1a] hover:text-[#ededed]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
