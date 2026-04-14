'use client';

import React from 'react';
import Link from 'next/link';

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
    >
      <p
        style={{
          fontSize: '10px',
          letterSpacing: '0.12em',
          color: '#444',
          textTransform: 'uppercase',
          marginBottom: '4px',
        }}
      >
        YOUR EMAIL
      </p>
      <input
        type="email"
        placeholder="hello@example.com"
        aria-label="Email address"
        style={{
          background: '#111',
          border: '1px solid #2a2a2a',
          color: '#ededed',
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          padding: '14px 16px',
          outline: 'none',
          width: '100%',
          transition: 'border-color 0.2s ease',
        }}
        onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = '#c8f135')}
        onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = '#2a2a2a')}
      />
      <button
        type="submit"
        style={{
          background: '#c8f135',
          color: '#000',
          border: 'none',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '12px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '14px 24px',
          cursor: 'pointer',
          transition: 'background 0.2s ease',
          alignSelf: 'flex-start',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#d4ff3d')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#c8f135')}
      >
        SUBSCRIBE →
      </button>
      <p style={{ fontSize: '10px', color: '#333', lineHeight: '1.5' }}>
        No spam. Unsubscribe anytime. We respect your inbox.
      </p>
    </form>
  );
}
