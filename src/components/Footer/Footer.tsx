'use client';

import React from 'react';
import Link from 'next/link';

const footerLinks = {
  SHOP: ['New Arrivals', 'Essentials', 'Collections', 'Archive', 'Sale'],
  SUPPORT: ['FAQ', 'Shipping', 'Returns', 'Size Guide', 'Contact'],
  LEGAL: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid #1a1a1a',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Main Footer Grid */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '60px 24px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '40px',
        }}
      >
        {/* Brand Column */}
        <div style={{ gridColumn: 'span 1' }}>
          <Link
            href="/"
            style={{
              fontWeight: 800,
              fontSize: '13px',
              letterSpacing: '0.15em',
              color: '#ededed',
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            VOID_STUDIO
          </Link>
          <p
            style={{
              fontSize: '12px',
              color: '#555',
              lineHeight: '1.7',
              maxWidth: '220px',
              marginBottom: '24px',
            }}
          >
            Premium minimalist streetwear. Crafted with intentionality. Designed for those who understand that less is more.
          </p>
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '16px' }}>
            {[
              {
                label: 'Instagram',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                ),
              },
              {
                label: 'Twitter/X',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
            ].map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                style={{
                  color: '#444',
                  transition: 'color 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#ededed')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#444')}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#ededed',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              {heading}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    style={{
                      fontSize: '12px',
                      color: '#555',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#ededed')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#555')}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '20px 24px',
          borderTop: '1px solid #1a1a1a',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
        }}
      >
        <p style={{ fontSize: '11px', color: '#333' }}>
          © {new Date().getFullYear()} VOID_STUDIO. All rights reserved.
        </p>
        <p style={{ fontSize: '11px', color: '#333' }}>
          Designed with intentionality.
        </p>
      </div>
    </footer>
  );
}
