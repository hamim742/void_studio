'use client';

import React, { useState, useEffect, useCallback } from 'react';

/* ─── PRODUCT DATA ─── */
export interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  priceDisplay: string;
  category: string;
  tag: string | null;
  isNew: boolean;
  bgColor: string;
  svgFill: string;
  svgStroke: string;
  sizes: string[];
}

export const ALL_PRODUCTS: Product[] = [
  { id: 1,  name: 'NORDIC WHITE',      subtitle: 'Ultra White Heavyweight',    price: 28,  priceDisplay: '$28.00',  category: 'TEES',        tag: 'BESTSELLER', isNew: false, bgColor: '#f0f0f0', svgFill: '#e0e0e0', svgStroke: '#ccc',    sizes: ['XS','S','M','L','XL'] },
  { id: 2,  name: 'VOID BLACK',         subtitle: 'Ink Black Essential',         price: 28,  priceDisplay: '$28.00',  category: 'TEES',        tag: null,         isNew: true,  bgColor: '#161616', svgFill: '#242424', svgStroke: '#2e2e2e', sizes: ['S','M','L','XL','XXL'] },
  { id: 3,  name: 'CHARCOAL ESSENTIAL', subtitle: 'Deep Charcoal Structure',     price: 32,  priceDisplay: '$32.00',  category: 'TEES',        tag: null,         isNew: false, bgColor: '#242424', svgFill: '#303030', svgStroke: '#3a3a3a', sizes: ['XS','S','M','L'] },
  { id: 4,  name: 'VOID TAN',           subtitle: 'Archive Sand Tone',           price: 35,  priceDisplay: '$35.00',  category: 'TEES',        tag: 'ARCHIVE',    isNew: false, bgColor: '#c4a882', svgFill: '#b09060', svgStroke: '#9a7a50', sizes: ['S','M','L','XL'] },
  { id: 5,  name: 'NOIR HOODIE',        subtitle: 'Brushed Fleece Interior',     price: 68,  priceDisplay: '$68.00',  category: 'HOODIES',     tag: 'NEW',        isNew: true,  bgColor: '#111111', svgFill: '#1c1c1c', svgStroke: '#252525', sizes: ['S','M','L','XL'] },
  { id: 6,  name: 'SLATE HOODIE',       subtitle: 'Pigment Dyed Fleece',         price: 72,  priceDisplay: '$72.00',  category: 'HOODIES',     tag: null,         isNew: true,  bgColor: '#3d3d4a', svgFill: '#45455a', svgStroke: '#35354a', sizes: ['XS','S','M','L','XL'] },
  { id: 7,  name: 'VOID COACH',         subtitle: 'Ripstop Outerwear',           price: 118, priceDisplay: '$118.00', category: 'OUTERWEAR',   tag: 'NEW',        isNew: true,  bgColor: '#1a1a1a', svgFill: '#252525', svgStroke: '#2e2e2e', sizes: ['S','M','L','XL'] },
  { id: 8,  name: 'ARCHIVE BOMBER',     subtitle: 'Satin Shell Construction',    price: 145, priceDisplay: '$145.00', category: 'OUTERWEAR',   tag: 'ARCHIVE',    isNew: false, bgColor: '#2a2018', svgFill: '#302518', svgStroke: '#282015', sizes: ['M','L','XL'] },
  { id: 9,  name: 'VOID CAP',           subtitle: '6-Panel Structured',          price: 38,  priceDisplay: '$38.00',  category: 'ACCESSORIES', tag: null,         isNew: false, bgColor: '#141414', svgFill: '#1e1e1e', svgStroke: '#282828', sizes: ['ONE SIZE'] },
  { id: 10, name: 'TOTE NOIR',          subtitle: 'Heavy Canvas Tote',          price: 42,  priceDisplay: '$42.00',  category: 'ACCESSORIES', tag: 'NEW',        isNew: true,  bgColor: '#0f0f0f', svgFill: '#1a1a1a', svgStroke: '#222222', sizes: ['ONE SIZE'] },
  { id: 11, name: 'ARCHIVE TEE 001',    subtitle: 'SS23 Limited Edition',        price: 22,  priceDisplay: '$22.00',  category: 'ARCHIVE',     tag: 'ARCHIVE',    isNew: false, bgColor: '#d4c4a8', svgFill: '#c8b898', svgStroke: '#b8a888', sizes: ['S','M','L'] },
  { id: 12, name: 'ARCHIVE TEE 002',    subtitle: 'SS24 Deadstock',              price: 24,  priceDisplay: '$24.00',  category: 'ARCHIVE',     tag: 'ARCHIVE',    isNew: false, bgColor: '#8a9a88', svgFill: '#7a8a78', svgStroke: '#6a7a68', sizes: ['XS','S','M'] },
];

/* ─── PRODUCT SVG ICONS ─── */
function ProductSVG({ fill, stroke, category }: { fill: string; stroke: string; category: string }) {
  if (category === 'HOODIES') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <path d="M55 25 L15 65 L45 85 L45 175 L155 175 L155 85 L185 65 L145 25 C145 25 132 48 100 55 C68 48 55 25 55 25Z" fill={fill} stroke={stroke} strokeWidth="2" />
        <rect x="80" y="25" width="40" height="20" rx="4" fill={stroke} />
      </svg>
    );
  }
  if (category === 'ACCESSORIES') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <ellipse cx="100" cy="80" rx="55" ry="30" fill={fill} stroke={stroke} strokeWidth="2" />
        <rect x="45" y="80" width="110" height="8" rx="2" fill={stroke} />
        <path d="M45 88 C45 88 30 100 30 115 L170 115 C170 100 155 88 155 88Z" fill={fill} stroke={stroke} strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <path d="M60 30 L20 60 L50 80 L50 170 L150 170 L150 80 L180 60 L140 30 C140 30 130 50 100 50 C70 50 60 30 60 30Z" fill={fill} stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

/* ─── PRODUCT CARD ─── */
function ProductCard({ product, index }: { product: Product; index: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 55 + 80);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      className="group flex flex-col bg-[#0d0d0d] border border-[#161616] overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#2a2a2a]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(20px)',
        transition: `opacity 0.45s ease ${index * 40}ms, transform 0.45s ease ${index * 40}ms, border-color 0.2s ease`,
      }}
    >
      {/* ── Image Area ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: product.bgColor, aspectRatio: '4/5' }}
      >
        {/* Hover dark overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10" />

        {/* Product graphic */}
        <div className="absolute inset-[12%] transition-transform duration-500 ease-out group-hover:scale-105">
          <ProductSVG fill={product.svgFill} stroke={product.svgStroke} category={product.category} />
        </div>

        {/* Badges top-left */}
        <div className="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-[#c8f135] text-black text-[8px] font-black tracking-widest px-1.5 py-0.5 uppercase">
              NEW
            </span>
          )}
          {product.tag && product.tag !== 'NEW' && (
            <span
              className={`text-[8px] font-black tracking-widest px-1.5 py-0.5 uppercase border ${
                product.tag === 'ARCHIVE'
                  ? 'bg-[#111] text-[#555] border-[#2a2a2a]'
                  : 'bg-[#ededed] text-black border-transparent'
              }`}
            >
              {product.tag}
            </span>
          )}
        </div>

        {/* Wishlist top-right */}
        <button
          aria-label="Wishlist"
          className="absolute top-2.5 right-2.5 z-20 w-7 h-7 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ededed" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Quick-add slide up */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-[rgba(10,10,10,0.95)] px-3 py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <p className="text-[8px] tracking-widest text-[#444] mb-1.5 uppercase">Quick Add</p>
          <div className="flex flex-wrap gap-1">
            {product.sizes.map((sz) => (
              <button
                key={sz}
                className="text-[9px] font-semibold text-[#bbb] border border-[#2a2a2a] px-2 py-1 tracking-wide hover:bg-[#c8f135] hover:text-black hover:border-[#c8f135] transition-all duration-150"
              >
                {sz}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Info Area ── */}
      <div className="flex flex-col px-3 pt-2.5 pb-3 gap-0.5 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="text-[11px] font-bold tracking-wide text-[#d0d0d0] uppercase leading-tight">
            {product.name}
          </p>
          <span className="text-[12px] font-bold text-[#ededed] whitespace-nowrap">{product.priceDisplay}</span>
        </div>
        <p className="text-[10px] text-[#3a3a3a] tracking-wide">{product.subtitle}</p>

        {/* Size dots */}
        <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
          {product.sizes.slice(0, 5).map((sz) => (
            <span key={sz} className="text-[9px] text-[#2e2e2e] tracking-widest font-medium">
              {sz}
            </span>
          ))}
        </div>

        {/* Add to Cart button – appears on hover */}
        <button className="mt-2 w-full py-2 text-[10px] font-bold tracking-[0.12em] uppercase bg-transparent border border-[#1e1e1e] text-[#3a3a3a] hover:bg-[#c8f135] hover:text-black hover:border-[#c8f135] transition-all duration-200 opacity-0 group-hover:opacity-100">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

/* ─── GRID ─── */
interface ShopProductGridProps {
  category: string;
  sort: string;
  onCountChange: (n: number) => void;
}

export default function ShopProductGrid({ category, sort, onCountChange }: ShopProductGridProps) {
  const filtered = ALL_PRODUCTS.filter((p) => category === 'ALL' || p.category === category);

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'PRICE: LOW–HIGH') return a.price - b.price;
    if (sort === 'PRICE: HIGH–LOW') return b.price - a.price;
    if (sort === 'NEW ARRIVALS') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return 0;
  });

  useEffect(() => {
    onCountChange(sorted.length);
  }, [sorted.length, onCountChange]);

  if (sorted.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-3">
        <div className="w-8 h-px bg-[#2a2a2a]" />
        <p className="text-[11px] tracking-widest text-[#333] uppercase">No products found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#0a0a0a]">
      {sorted.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  );
}
