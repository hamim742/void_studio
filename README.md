# VOID_STUDIO — _The Absence of Excess_

> Premium minimalist streetwear storefront built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages & Routing](#pages--routing)
- [Components](#components)
- [Design System](#design-system)
- [Architecture Decisions](#architecture-decisions)
- [Scripts](#scripts)

---

## Overview

VOID_STUDIO is a dark-themed e-commerce frontend for a minimalist streetwear brand. The UI is inspired by high-end editorial fashion sites and features:

- **Hero section** with large typography and an animated silhouette figure
- **Product collection grid** (`ESSENTIALS_01`) with hover effects
- **Collections grid** — MEN / NEW / WOMEN sections
- **Archive sale banner** with a live countdown timer
- **Testimonial** section
- **Newsletter signup** form
- **Full `/shop` page** with category filters, sort dropdown, animated product cards, and quick-add overlays

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.3 | Full-stack React framework, App Router |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first CSS framework |
| [@tailwindcss/postcss](https://tailwindcss.com/docs/installation/using-postcss) | ^4 | PostCSS integration for Tailwind v4 |
| [Inter](https://fonts.google.com/specimen/Inter) | — | Primary typeface (via `next/font/google`) |
| [React Compiler](https://react.dev/learn/react-compiler) | 1.0.0 | Automatic memoization (enabled in `next.config.ts`) |

---

## Getting Started

### Prerequisites

- Node.js **18+**
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/HamimBhai742/void_studio.git
cd void_studio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
client/
├── public/                        # Static assets
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx             # Root layout — Inter font, metadata, HTML shell
│   │   ├── globals.css            # Global CSS (Tailwind import, CSS variables, keyframes)
│   │   ├── favicon.ico
│   │   └── (commonLayout)/        # Route group with shared Navbar + Footer
│   │       ├── layout.tsx         # Wraps pages with <Navbar /> and <Footer />
│   │       ├── page.tsx           # Homepage (Server Component)
│   │       └── shop/
│   │           └── page.tsx       # Shop page (Server Component)
│   │
│   └── components/
│       ├── Navbar/
│       │   └── Navbar.tsx         # Fixed nav — scroll-aware, mobile hamburger
│       ├── Footer/
│       │   └── Footer.tsx         # Multi-column footer with social links
│       ├── Home/
│       │   ├── ProductCard.tsx    # Single product card for homepage grid
│       │   ├── CountdownTimer.tsx # Live countdown HH:MM:SS timer
│       │   └── NewsletterForm.tsx # Email subscription form
│       └── Shop/
│           ├── ShopShell.tsx      # Client shell — manages filter/sort state
│           ├── ShopFilters.tsx    # Sticky filter bar + sort dropdown
│           └── ShopProductGrid.tsx# Product data, cards, and responsive grid
│
├── next.config.ts                 # Next.js config (React Compiler enabled)
├── tsconfig.json                  # TypeScript config (@/* path alias)
├── postcss.config.mjs             # PostCSS + Tailwind v4 plugin
├── eslint.config.mjs              # ESLint config
└── package.json
```

---

## Pages & Routing

The project uses the **Next.js App Router** with a [route group](https://nextjs.org/docs/app/building-your-application/routing/route-groups) `(commonLayout)` to share the Navbar and Footer across all pages without adding to the URL path.

| Route | File | Description |
|---|---|---|
| `/` | `app/(commonLayout)/page.tsx` | Homepage — hero, essentials, collections, sale banner, testimonials, newsletter |
| `/shop` | `app/(commonLayout)/shop/page.tsx` | Shop page — hero, filter bar, product grid, archive banner |

> **Note:** Both page files are **pure Server Components** — no `'use client'` directive. All interactivity is delegated to dedicated client sub-components.

---

## Components

### `Navbar` · `'use client'`

Fixed-position top navigation bar.

- **Scroll detection** — becomes frosted glass (`backdrop-blur`) on scroll
- **Desktop links** — SHOP, ABOUT, LOGIN, SIGNUP with hover colour transitions
- **Cart icon** with badge counter
- **Mobile hamburger** — animated ☰ → ✕ toggle, dropdown menu below 768px

---

### `Footer` · `'use client'`

Full-width site footer with:

- VOID_STUDIO brand blurb
- Social icon links (Instagram, X/Twitter)
- Three link columns: **SHOP**, **SUPPORT**, **LEGAL**
- Copyright bottom bar
- Responsive via CSS Grid `auto-fit`

---

### `Home/ProductCard` · `'use client'`

Reusable card used in the homepage essentials grid. Renders a t-shirt SVG with a customisable fill/stroke colour and product metadata.

---

### `Home/CountdownTimer` · `'use client'`

Accepts `initialSeconds` prop and counts down in real time. Displays `HH : MM : SS` in large tabular-numeral type. Used on the homepage archive sale banner.

---

### `Home/NewsletterForm` · `'use client'`

Email subscription form with:
- Focus ring animation on input
- Hover highlight on submit button
- Privacy note copy

---

### `Shop/ShopShell` · `'use client'`

Thin state-orchestration wrapper that holds shared `category`, `sort`, and `count` state, passing them down as props to `ShopFilters` and `ShopProductGrid`. This is the single boundary imported by the Server Component shop page.

---

### `Shop/ShopFilters` · `'use client'`

Sticky filter bar positioned directly below the Navbar (`top-14`).

- **Category pills** — ALL · TEES · HOODIES · OUTERWEAR · ACCESSORIES · ARCHIVE
- **Item count** display
- **Sort dropdown** — FEATURED · NEW ARRIVALS · PRICE: LOW–HIGH · PRICE: HIGH–LOW

Active category highlighted in `#c8f135` (lime-green accent).

---

### `Shop/ShopProductGrid` · `'use client'`

Contains all product data and renders the responsive grid.

**Product catalogue (12 items):**

| ID | Name | Category | Price |
|---|---|---|---|
| 1 | NORDIC WHITE | TEES | $28 |
| 2 | VOID BLACK | TEES | $28 |
| 3 | CHARCOAL ESSENTIAL | TEES | $32 |
| 4 | VOID TAN | TEES | $35 |
| 5 | NOIR HOODIE | HOODIES | $68 |
| 6 | SLATE HOODIE | HOODIES | $72 |
| 7 | VOID COACH | OUTERWEAR | $118 |
| 8 | ARCHIVE BOMBER | OUTERWEAR | $145 |
| 9 | VOID CAP | ACCESSORIES | $38 |
| 10 | TOTE NOIR | ACCESSORIES | $42 |
| 11 | ARCHIVE TEE 001 | ARCHIVE | $22 |
| 12 | ARCHIVE TEE 002 | ARCHIVE | $24 |

**Card features:**

- `aspect-[4/5]` image area with unique background colour per product
- SVG product illustration (tee / hoodie / accessory shape variants)
- `NEW` / `ARCHIVE` / `BESTSELLER` badge overlays
- **Hover effects:**
  - Image scales up (`group-hover:scale-105`)
  - Dark overlay fades in
  - Wishlist heart icon appears top-right
  - Quick-add size panel slides up from bottom
  - "Add to Cart" button reveals in the info area
- **Staggered entrance animation** — each card fades up with a 40ms offset per index

**Responsive grid:**

| Breakpoint | Columns |
|---|---|
| Mobile (`<sm`) | 2 |
| Tablet (`sm`) | 2 |
| Laptop (`md`) | 3 |
| Desktop (`lg+`) | 4 |

---

## Design System

### Colour Palette

| Variable | Hex | Usage |
|---|---|---|
| `--background` | `#0a0a0a` | Base page background |
| `--foreground` | `#ededed` | Primary text |
| `--accent` | `#c8f135` | Lime-green CTAs, active states, accents |
| `--gray-dark` | `#1a1a1a` | Card backgrounds, borders |
| `--gray-mid` | `#2a2a2a` | Subtle borders, dividers |
| `--gray-light` | `#888888` | Secondary text, nav links |
| `--border` | `#2a2a2a` | Default border colour |

### Typography

- **Font:** [Inter](https://fonts.google.com/specimen/Inter) — loaded via `next/font/google` at root layout level
- **Weights used:** 300, 400, 500, 600, 700, 800, 900
- **Headings:** `font-weight: 900`, `letter-spacing: -0.03em`, `text-transform: uppercase`
- **Body / labels:** `font-size: 10–13px`, wide `letter-spacing`

### CSS Keyframes

Defined in `globals.css`:

```css
@keyframes fadeUp  { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
```

### Scrollbar

Custom thin scrollbar (`width: 4px`) styled to match the dark theme.

---

## Architecture Decisions

### Server vs Client Components

Next.js 16 defaults all components to **Server Components**. Client-side state and browser APIs require `'use client'`.

The pattern used throughout this project:

```
page.tsx (Server Component)
  └── ShopShell.tsx ('use client') ← single client boundary
        ├── ShopFilters.tsx ('use client')
        └── ShopProductGrid.tsx ('use client')
```

This keeps pages SEO-friendly (server-rendered HTML) while isolating interactivity to the minimum required surface.

### Route Groups

`(commonLayout)` is a [Next.js route group](https://nextjs.org/docs/app/building-your-application/routing/route-groups). The parentheses mean it does **not** appear in the URL. All routes inside share the same Navbar + Footer layout without any path prefix.

### React Compiler

Enabled via `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  reactCompiler: true,
};
```

This automatically optimises re-renders without manual `useMemo` / `useCallback` in most cases.

### Path Alias

`@/` maps to `./src/` via `tsconfig.json`:

```json
"paths": { "@/*": ["./src/*"] }
```

Example usage: `import Navbar from '@/components/Navbar/Navbar'`

---

## Scripts

```bash
npm run dev      # Start Next.js development server (Turbopack)
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## GitHub Repository

[https://github.com/HamimBhai742/void_studio](https://github.com/HamimBhai742/void_studio)

---

<p align="center">
  Built with intentionality · VOID_STUDIO © 2026
</p>
