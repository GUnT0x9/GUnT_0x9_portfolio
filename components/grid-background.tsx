"use client"

export function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient - deep dark navy/purple */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at top, #1a1a2e 0%, #0a0a0f 50%, #000000 100%)'
        }}
      />
      
      {/* Ambient Orbs */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full animate-float"
        style={{
          background: '#9b59ff',
          filter: 'blur(80px)',
          opacity: 0.4,
          top: '-100px',
          right: '-100px',
          animationDelay: '0s'
        }}
      />
      <div 
        className="absolute w-[300px] h-[300px] rounded-full animate-float"
        style={{
          background: '#00f5d4',
          filter: 'blur(80px)',
          opacity: 0.3,
          bottom: '-50px',
          left: '-50px',
          animationDelay: '-7s'
        }}
      />
      <div 
        className="absolute w-[250px] h-[250px] rounded-full animate-float"
        style={{
          background: '#6b5ce7',
          filter: 'blur(80px)',
          opacity: 0.35,
          top: '50%',
          left: '30%',
          animationDelay: '-14s'
        }}
      />
      
      {/* Dot Grid Pattern */}
      <div 
        className="absolute inset-0 dot-grid"
        style={{ opacity: 0.03 }}
      />
    </div>
  )
}
