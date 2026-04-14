'use client';

import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ initialSeconds }: { initialSeconds: number }) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timeLeft]);

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  const units = [
    { val: String(h).padStart(2, '0'), label: 'HRS' },
    { val: String(m).padStart(2, '0'), label: 'MIN' },
    { val: String(s).padStart(2, '0'), label: 'SEC' },
  ];

  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'stretch' }}>
      {units.map(({ val, label }, i) => (
        <React.Fragment key={label}>
          {i > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', color: '#333', fontSize: '24px', fontWeight: 700 }}>
              :
            </div>
          )}
          <div
            style={{
              background: '#0a0a0a',
              border: '1px solid #1a1a1a',
              padding: '16px',
              minWidth: '72px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
            }}
          >
            <span
              style={{
                fontSize: 'clamp(28px, 5vw, 48px)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                color: '#ededed',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {val}
            </span>
            <span style={{ fontSize: '9px', letterSpacing: '0.15em', color: '#333', textTransform: 'uppercase' }}>
              {label}
            </span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
