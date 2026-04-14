import React from 'react';
import Link from 'next/link';
import CountdownTimer from '@/components/Home/CountdownTimer';
import NewsletterForm from '@/components/Home/NewsletterForm';
import ProductCard from '@/components/Home/ProductCard';

/* ─── PRODUCT DATA ─── */
const products = [
  {
    id: 1,
    name: 'NORDIC WHITE',
    color: 'Ultra White',
    price: '$28.00',
    tag: 'BESTSELLER',
    bg: '#f5f5f5',
    textColor: '#111',
    svgFill: '#e0e0e0',
    svgStroke: '#ccc',
  },
  {
    id: 2,
    name: 'VOID BLACK',
    color: 'Ink Black',
    price: '$28.00 – $35.00',
    tag: null,
    bg: '#1a1a1a',
    textColor: '#ededed',
    svgFill: '#2a2a2a',
    svgStroke: '#333',
  },
  {
    id: 3,
    name: 'CHARCOAL ESSENTIAL',
    color: 'Deep Charcoal',
    price: '$32.00 – $38.50',
    tag: null,
    bg: '#2d2d2d',
    textColor: '#ededed',
    svgFill: '#3a3a3a',
    svgStroke: '#444',
  },
  {
    id: 4,
    name: 'VOID TAN',
    color: 'Archive Tan',
    price: '$35.00',
    tag: null,
    bg: '#c4a882',
    textColor: '#111',
    svgFill: '#b89060',
    svgStroke: '#a07840',
  },
];

export default function Home() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0a', color: '#ededed' }}>

      {/* ══════════ HERO SECTION ══════════ */}
      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(180deg, #111 0%, #0a0a0a 60%, #0a0a0a 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(ellipse 80% 60% at 65% 40%, rgba(255,255,255,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Abstract figure silhouette */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '55%',
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, #0a0a0a 0%, transparent 40%)',
              zIndex: 1,
            }}
          />
          <svg
            viewBox="0 0 600 800"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            style={{ opacity: 0.22 }}
          >
            <defs>
              <radialGradient id="figGrad" cx="50%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#aaa" />
                <stop offset="100%" stopColor="#111" />
              </radialGradient>
            </defs>
            <ellipse cx="300" cy="120" rx="70" ry="85" fill="url(#figGrad)" />
            <rect x="270" y="195" width="60" height="40" fill="#888" />
            <path d="M180 235 L120 500 L480 500 L420 235 Z" fill="url(#figGrad)" />
            <path d="M180 240 L60 450 L100 470 L200 280Z" fill="#666" />
            <path d="M420 240 L540 450 L500 470 L400 280Z" fill="#666" />
            <path d="M200 500 L160 780 L250 780 L290 560Z" fill="#555" />
            <path d="M400 500 L440 780 L350 780 L310 560Z" fill="#555" />
            <ellipse cx="270" cy="100" rx="12" ry="8" fill="#111" />
            <ellipse cx="330" cy="100" rx="12" ry="8" fill="#111" />
            <ellipse cx="270" cy="100" rx="5" ry="5" fill="#000" />
            <ellipse cx="330" cy="100" rx="5" ry="5" fill="#000" />
          </svg>
        </div>

        {/* Hero Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '120px 24px 80px',
            width: '100%',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#555',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            ss_26 collection
          </p>
          <h1
            style={{
              fontSize: 'clamp(52px, 9vw, 108px)',
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: '#ededed',
              marginBottom: '28px',
            }}
          >
            THE<br />ABSENCE<br />OF EXCESS
          </h1>
          <p
            style={{
              fontSize: '13px',
              color: '#555',
              lineHeight: '1.7',
              maxWidth: '300px',
              marginBottom: '40px',
            }}
          >
            Lightweight. Structural. Intentional. A wardrobe built for those who choose quality over quantity.
          </p>
          <Link
            href="/shop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#c8f135',
              color: '#000',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 28px',
            }}
          >
            SHOP NOW
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ══════════ ESSENTIALS COLLECTION ══════════ */}
      <section
        id="essentials"
        style={{
          background: '#f5f5f5',
          padding: 'clamp(48px, 8vw, 80px) 24px',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '36px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <h2
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#111',
              }}
            >
              ESSENTIALS_01
            </h2>
            <Link
              href="/shop"
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#888',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              VIEW COLLECTION →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '2px',
            }}
          >
            {products.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COLLECTIONS GRID ══════════ */}
      <section id="collections" style={{ background: '#0a0a0a' }}>
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
          }}
        >
          {/* MEN */}
          <div
            style={{
              background: '#111',
              aspectRatio: '3/4',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '16px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.35,
              }}
            >
              <svg viewBox="0 0 200 350" width="70%" height="90%">
                <ellipse cx="100" cy="50" rx="30" ry="35" fill="#888" />
                <rect x="70" y="80" width="60" height="20" fill="#777" />
                <path d="M55 100 L30 220 L80 220 L95 160 L105 160 L120 220 L170 220 L145 100Z" fill="#666" />
                <path d="M55 105 L20 190 L45 200 L75 130Z" fill="#555" />
                <path d="M145 105 L180 190 L155 200 L125 130Z" fill="#555" />
                <path d="M80 220 L65 340 L95 340 L100 260Z" fill="#444" />
                <path d="M120 220 L135 340 L105 340 L100 260Z" fill="#444" />
              </svg>
            </div>
            <span
              style={{
                position: 'relative',
                zIndex: 1,
                background: '#fff',
                color: '#000',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                padding: '5px 12px',
                textTransform: 'uppercase',
              }}
            >
              MEN
            </span>
          </div>

          {/* NEW Badge */}
          <div
            style={{
              background: '#1a1a1a',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              minHeight: '200px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                fontSize: 'clamp(60px, 12vw, 120px)',
                fontWeight: 900,
                letterSpacing: '-0.05em',
                color: 'rgba(255,255,255,0.05)',
                userSelect: 'none',
              }}
            >
              NEW
            </div>
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                background: '#c8f135',
                color: '#000',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                padding: '8px 20px',
                textTransform: 'uppercase',
              }}
            >
              NEW
            </div>
            <span
              style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                fontSize: '9px',
                color: '#2a2a2a',
                letterSpacing: '0.1em',
              }}
            >
              NEW_ARRIVALS
            </span>
          </div>

          {/* VOID_NOIR */}
          <div
            style={{
              background: '#141414',
              aspectRatio: '3/4',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '16px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(135deg, #1c1c1c 0%, #080808 100%)',
              }}
            />
            <svg
              viewBox="0 0 200 350"
              width="100%"
              height="100%"
              style={{ position: 'absolute', inset: 0, opacity: 0.3 }}
              preserveAspectRatio="xMidYMid slice"
            >
              <rect x="60" y="50" width="80" height="300" fill="#444" />
              <rect x="70" y="60" width="20" height="30" fill="#222" />
              <rect x="110" y="60" width="20" height="30" fill="#222" />
              <rect x="70" y="110" width="20" height="30" fill="#222" />
              <rect x="110" y="110" width="20" height="30" fill="#222" />
              <rect x="70" y="160" width="20" height="30" fill="#222" />
              <rect x="110" y="160" width="20" height="30" fill="#222" />
              <rect x="80" y="250" width="40" height="100" fill="#333" />
            </svg>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: '9px', letterSpacing: '0.1em', color: '#444', marginBottom: '4px' }}>ARCHIVE</p>
              <span
                style={{
                  background: '#fff',
                  color: '#000',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  padding: '5px 12px',
                  textTransform: 'uppercase',
                }}
              >
                VOID_NOIR
              </span>
            </div>
          </div>

          {/* WOMEN_COLLECTION – full width */}
          <div
            style={{
              gridColumn: '1 / -1',
              background: '#181818',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '160px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTop: '2px solid #0a0a0a',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(90deg, #111 0%, #1a1a1a 50%, #111 100%)',
              }}
            />
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: `${(i + 1) * 12.5}%`,
                  width: '1px',
                  background: 'rgba(255,255,255,0.025)',
                }}
              />
            ))}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <p style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#444', textTransform: 'uppercase' }}>
                new collection
              </p>
              <div
                style={{
                  background: '#ededed',
                  color: '#000',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  padding: '10px 28px',
                  textTransform: 'uppercase',
                }}
              >
                WOMEN_COLLECTION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ DISCOUNT BANNER ══════════ */}
      <section
        id="discount"
        style={{
          background: '#111',
          padding: 'clamp(48px, 8vw, 80px) 24px',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid #1a1a1a',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: '-40px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(80px, 18vw, 200px)',
            fontWeight: 900,
            letterSpacing: '-0.05em',
            color: 'rgba(255,255,255,0.025)',
            userSelect: 'none',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}
        >
          VOI
        </div>

        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '40px',
          }}
        >
          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '32px', height: '3px', background: '#c8f135' }} />
              <span style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#c8f135', textTransform: 'uppercase' }}>
                Limited Time
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(36px, 6vw, 72px)',
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#ededed',
                marginBottom: '16px',
              }}
            >
              30% OFF_<br />
              <span style={{ color: '#444' }}>ARCHIVE ITEMS</span>
            </h2>
            <p style={{ fontSize: '12px', color: '#555', maxWidth: '280px', lineHeight: '1.7', marginBottom: '28px' }}>
              Our archive season in minimal. Limited stock. Wardrobe of the future starts here.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link
                href="/shop"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#c8f135',
                  color: '#000',
                  fontWeight: 700,
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '12px 24px',
                }}
              >
                ACCESS ARCHIVE
              </Link>
              <Link
                href="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'transparent',
                  color: '#555',
                  fontWeight: 600,
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '12px 24px',
                  border: '1px solid #2a2a2a',
                }}
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Right – Live Countdown */}
          <CountdownTimer initialSeconds={12 * 60 + 45} />
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section
        id="testimonials"
        style={{
          background: '#f5f5f5',
          padding: 'clamp(60px, 10vw, 100px) 24px',
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '28px' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#111">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>

          <blockquote
            style={{
              fontSize: 'clamp(18px, 3vw, 26px)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.55,
              color: '#111',
              marginBottom: '32px',
              letterSpacing: '-0.01em',
            }}
          >
            &ldquo;The quality of the heavyweight cotton is unmatched. It feels structural yet breathable.
            VOID_STUDIO is my new uniform.&rdquo;
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            {['@vogué', '@hype_beast', '@hal_mann', '@men_identity'].map((handle) => (
              <span
                key={handle}
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: '#888',
                  textTransform: 'uppercase',
                }}
              >
                {handle}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ JOIN THE VOID (Newsletter) ══════════ */}
      <section
        id="newsletter"
        style={{
          background: '#0a0a0a',
          padding: 'clamp(60px, 10vw, 100px) 24px',
          borderTop: '1px solid #1a1a1a',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: '#444',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              EXCLUSIVE ACCESS
            </p>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#ededed',
                marginBottom: '16px',
                lineHeight: 1,
              }}
            >
              JOIN THE_VOID
            </h2>
            <p
              style={{
                fontSize: '12px',
                color: '#555',
                lineHeight: '1.7',
                maxWidth: '320px',
              }}
            >
              Subscribe to early access drops, archive sales, and exclusive members-only offers. No filler. No noise.
            </p>
          </div>

          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
