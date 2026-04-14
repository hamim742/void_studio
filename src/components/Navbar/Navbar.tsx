'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
            fontSize: '14px',
            letterSpacing: '0.15em',
            color: '#ededed',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          VOID_STUDIO
        </Link>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {['SHOP', 'ABOUT', 'LOGIN', 'SIGNUP'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '12px',
                letterSpacing: '0.12em',
                color: '#888',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ededed')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#888')}
            >
              {item}
            </Link>
          ))}

          {/* Cart Icon */}
          <button
            aria-label="Open cart"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              position: 'relative',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ededed" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span
              style={{
                position: 'absolute',
                top: '-2px',
                right: '-4px',
                background: '#c8f135',
                color: '#000',
                fontSize: '9px',
                fontWeight: 700,
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              0
            </span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1.5px',
              background: '#ededed',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1.5px',
              background: '#ededed',
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '1.5px',
              background: '#ededed',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className="mobile-dropdown"
        style={{
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          background: '#0a0a0a',
          borderTop: '1px solid #1a1a1a',
          padding: '8px 0',
        }}
      >
        {['SHOP', 'ABOUT', 'LOGIN', 'SIGNUP'].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              letterSpacing: '0.12em',
              color: '#888',
              textDecoration: 'none',
              textTransform: 'uppercase',
              padding: '12px 24px',
              borderBottom: '1px solid #1a1a1a',
              transition: 'color 0.2s ease, background 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#ededed';
              (e.currentTarget as HTMLElement).style.background = '#1a1a1a';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#888';
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
          >
            {item}
          </Link>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
