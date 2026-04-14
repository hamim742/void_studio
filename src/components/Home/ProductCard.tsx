'use client';

import React from 'react';

function TShirtSVG({ fill, stroke }: { fill: string; stroke: string }) {
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 30 L20 60 L50 80 L50 170 L150 170 L150 80 L180 60 L140 30 C140 30 130 50 100 50 C70 50 60 30 60 30Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}

interface ProductCardProps {
  name: string;
  color: string;
  price: string;
  tag: string | null;
  bg: string;
  textColor: string;
  svgFill: string;
  svgStroke: string;
}

export default function ProductCard({ name, color, price, tag, bg, textColor, svgFill, svgStroke }: ProductCardProps) {
  return (
    <div
      style={{ position: 'relative', cursor: 'pointer', transition: 'transform 0.3s ease' }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.01)')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
    >
      <div
        style={{
          background: bg,
          aspectRatio: '3/4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <TShirtSVG fill={svgFill} stroke={svgStroke} />
        {tag && (
          <span
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              background: '#c8f135',
              color: '#000',
              fontSize: '9px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              padding: '3px 8px',
            }}
          >
            {tag}
          </span>
        )}
      </div>

      <div
        style={{
          background: '#fff',
          padding: '12px',
          borderTop: '1px solid #e8e8e8',
        }}
      >
        <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: '#111', marginBottom: '2px' }}>
          {name}
        </p>
        <p style={{ fontSize: '10px', color: '#aaa', marginBottom: '8px' }}>{color}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#111' }}>{price}</span>
          <button
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#333')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#111')}
            style={{
              background: '#111',
              color: '#fff',
              border: 'none',
              fontSize: '9px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              padding: '5px 10px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              transition: 'background 0.2s ease',
            }}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
