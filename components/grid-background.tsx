"use client"

export function GridBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      {/* Radial glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-chart-3/10 rounded-full blur-[80px]" />
      
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline opacity-30" />
    </div>
  )
}
