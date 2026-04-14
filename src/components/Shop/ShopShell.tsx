'use client';

import React, { useState, useCallback } from 'react';
import ShopFilters from './ShopFilters';
import ShopProductGrid from './ShopProductGrid';

export default function ShopShell() {
  const [category, setCategory] = useState('ALL');
  const [sort, setSort] = useState('FEATURED');
  const [count, setCount] = useState(12);

  const handleCountChange = useCallback((n: number) => setCount(n), []);

  return (
    <>
      <ShopFilters
        activeCategory={category}
        activeSort={sort}
        totalCount={count}
        onCategoryChange={setCategory}
        onSortChange={setSort}
      />
      <div className="max-w-[1400px] mx-auto px-6 py-8 pb-20">
        <ShopProductGrid
          category={category}
          sort={sort}
          onCountChange={handleCountChange}
        />
      </div>
    </>
  );
}
