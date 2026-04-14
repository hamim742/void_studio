import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import ShopShell from '@/components/Shop/ShopShell';

export const metadata: Metadata = {
  title: 'Shop — VOID_STUDIO',
  description: 'Browse the full VOID_STUDIO collection. Essential tees, hoodies, outerwear and archive pieces.',
};

export default function ShopPage() {
  return (
    <div className="font-['Inter',sans-serif] bg-[#0a0a0a] text-[#ededed] min-h-screen">

      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-14 flex items-end overflow-hidden bg-[#0d0d0d] border-b border-[#161616]"
        style={{ minHeight: 'clamp(260px, 32vw, 420px)' }}>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        {/* Accent gradient line */}
        <div
          className="absolute left-6 right-6 h-px pointer-events-none opacity-50"
          style={{ top: '76px', background: 'linear-gradient(90deg, #c8f135 0%, transparent 55%)' }}
        />

        {/* Big watermark label */}
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-0 font-black leading-none select-none pointer-events-none whitespace-nowrap text-white/[0.025]"
          style={{ fontSize: 'clamp(100px, 20vw, 260px)', letterSpacing: '-0.06em' }}
        >
          SHOP
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 pb-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 mb-5">
            <Link href="/" className="text-[10px] text-[#2a2a2a] tracking-widest uppercase hover:text-[#555] transition-colors">
              HOME
            </Link>
            <span className="text-[10px] text-[#1e1e1e]">/</span>
            <span className="text-[10px] text-[#444] tracking-widest uppercase">SHOP</span>
          </nav>

          <h1
            className="font-black uppercase text-[#ededed] leading-[0.88] mb-4 tracking-tight"
            style={{ fontSize: 'clamp(42px, 7.5vw, 96px)', letterSpacing: '-0.03em' }}
          >
            SHOP_ALL
          </h1>

          <div className="flex items-center flex-wrap gap-5">
            <p className="text-[12px] text-[#3a3a3a] tracking-wide">
              SS&apos;26 — Premium minimalist essentials
            </p>
            <div className="flex items-center gap-2">
              <div className="w-5 h-px bg-[#c8f135]" />
              <span className="text-[10px] text-[#c8f135] tracking-[0.15em] uppercase">
                Free shipping over $100
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FILTERS + GRID (CLIENT) ══════════ */}
      <ShopShell />

      {/* ══════════ ARCHIVE SALE BANNER ══════════ */}
      <section className="relative bg-[#111] border-t border-[#1a1a1a] overflow-hidden py-12 md:py-16 px-6">
        {/* Watermark */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none whitespace-nowrap text-white/[0.025]"
          style={{ fontSize: 'clamp(80px, 16vw, 180px)', letterSpacing: '-0.05em' }}
        >
          VOI
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto flex items-center justify-between gap-6 flex-wrap">
          <div>
            {/* Label */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-0.5 bg-[#c8f135]" />
              <span className="text-[10px] text-[#c8f135] tracking-[0.15em] uppercase">Archive Sale</span>
            </div>
            <h2
              className="font-black uppercase text-[#ededed] leading-[0.9] tracking-tight"
              style={{ fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: '-0.02em' }}
            >
              30% OFF_<br />
              <span className="text-[#333]">ARCHIVE ITEMS</span>
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#c8f135] text-black text-[11px] font-bold tracking-[0.12em] uppercase px-7 py-3.5 hover:bg-[#d4ff3d] transition-colors duration-200 shrink-0"
          >
            ACCESS ARCHIVE →
          </Link>
        </div>
      </section>

    </div>
  );
}