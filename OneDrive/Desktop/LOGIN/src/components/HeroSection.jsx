import React from 'react';
import { ShieldCheck, Share2, BarChart3 } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
      
      {/* Platform Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div
          style={{
            width: '40px',
            height: '4px',
            background: 'var(--boss-cyan)',
            boxShadow: '0 0 15px var(--boss-cyan)',
            borderRadius: '2px'
          }}
        />
        <span
          style={{
            color: 'var(--boss-blue-light)',
            fontWeight: 700,
            letterSpacing: '0.15em',
            fontSize: '14px',
            textTransform: 'uppercase'
          }}
        >
          BOSS PLATFORM
        </span>
      </div>

      {/* Main Headline */}
      <h1
        style={{
          fontSize: '64px',
          fontWeight: 800,
          color: '#FFFFFF',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          margin: 0,
          fontFamily: 'var(--font-heading)'
        }}
      >
        Everything your<br />
        business <span style={{ color: 'var(--boss-cyan)' }}>needs.</span>
      </h1>

      {/* Subtext Description */}
      <p
        style={{
          fontSize: '18px',
          color: 'var(--boss-text-gray)',
          lineHeight: 1.6,
          margin: '0 0 20px 0',
          fontWeight: 400
        }}
      >
        All-in-one business operations for MSME's<br />
        of defence, aerospace and advanced<br />
        manufacturing industries.
      </p>

      {/* Feature Blocks */}
      <div style={{ display: 'flex', gap: '32px', marginTop: '20px' }}>
        
        {/* SECURE Feature */}
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: '130px' }}>
          <div className="feature-icon-wrapper">
            <ShieldCheck size={24} />
          </div>
          <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 4px 0', letterSpacing: '0.05em' }}>SECURE</h3>
          <p style={{ fontSize: '13px', color: 'var(--boss-text-muted)', margin: 0, lineHeight: 1.4 }}>Enterprise grade<br />protection</p>
        </div>

        {/* Vertical Divider 1 */}
        <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)', height: '80px', marginTop: '10px' }} />

        {/* UNIFIED Feature */}
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: '130px' }}>
          <div className="feature-icon-wrapper">
            <Share2 size={24} />
          </div>
          <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 4px 0', letterSpacing: '0.05em' }}>UNIFIED</h3>
          <p style={{ fontSize: '13px', color: 'var(--boss-text-muted)', margin: 0, lineHeight: 1.4 }}>One workspace for<br />all operations</p>
        </div>

        {/* Vertical Divider 2 */}
        <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)', height: '80px', marginTop: '10px' }} />

        {/* GROWTH Feature */}
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: '130px' }}>
          <div className="feature-icon-wrapper">
            <BarChart3 size={24} />
          </div>
          <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 4px 0', letterSpacing: '0.05em' }}>GROWTH</h3>
          <p style={{ fontSize: '13px', color: 'var(--boss-text-muted)', margin: 0, lineHeight: 1.4 }}>Future ready<br />for tomorrow</p>
        </div>

      </div>
    </div>
  );
};
