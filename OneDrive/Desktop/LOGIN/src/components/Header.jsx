import React from 'react';

export const Header = () => {
  return (
    <header
      style={{
        padding: '40px 60px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 10,
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Left side: BOSS Logo Image */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/src/assets/logo.jpeg"
          alt="BOSS - Build. Operate. Scale. Succeed."
          style={{
            height: '75px',
            width: 'auto',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </div>

      {/* Right side: Built for a stronger tomorrow */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginTop: '12px'
        }}
      >
        <div
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: '#94A3B8',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}
        >
          BUILT FOR A STRONGER TOMORROW
        </div>
        <div
          style={{
            width: '30px',
            height: '2px',
            backgroundColor: 'var(--boss-blue-primary)',
            boxShadow: '0 0 10px var(--boss-blue-primary)'
          }}
        />
      </div>
    </header>
  );
};
