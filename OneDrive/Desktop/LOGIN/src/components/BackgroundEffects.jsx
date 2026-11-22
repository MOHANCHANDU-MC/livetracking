import React from 'react';

export const BackgroundEffects = () => {
  return (
    <>
      {/* 1. Base Dark Navy Gradient */}
      {/* Applied via body styling in index.css */}

      {/* 2. Background Perspective Floor Grid */}
      <div className="perspective-floor" />

      {/* 3. Background Flat Grid overlay for top area */}
      <div className="bg-grid" />

      {/* 4. Large Atmospheric Blue Glow (Top Left) */}
      <div className="glowing-sphere-large" />

      {/* 5. Orbital Curves (Top Right) */}
      <div className="orbital-curves" />

      {/* 6. Industrial Skyline Silhouette (Bottom) */}
      <div className="skyline-silhouette" />

      {/* 7. Light Particles */}
      {/* Example particles scattered around */}
      <div className="light-particle" style={{ width: '4px', height: '4px', top: '25%', left: '40%' }} />
      <div className="light-particle" style={{ width: '6px', height: '6px', top: '45%', right: '20%' }} />
      <div className="light-particle" style={{ width: '3px', height: '3px', bottom: '30%', left: '10%' }} />
      <div className="light-particle" style={{ width: '5px', height: '5px', bottom: '20%', right: '35%' }} />
      <div className="light-particle" style={{ width: '4px', height: '4px', top: '15%', right: '45%' }} />
    </>
  );
};
