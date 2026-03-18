"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useLanguage } from '@/hooks/use-language'

export function HeroSection() {
  const { t } = useLanguage()
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "GUnT_0x9"

  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 150)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typeInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Glitch effect name */}
        <div className="relative mb-6 z-30">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-mono font-bold text-primary text-glow-cyan relative z-30">
            {displayText}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>_</span>
          </h1>
          {/* Glitch layers */}
          <h1 className="absolute inset-0 text-5xl sm:text-7xl lg:text-8xl font-mono font-bold text-accent opacity-50 animate-pulse z-0" style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)", transform: "translate(-22px, -2px)" }}>
            {displayText}
          </h1>
        </div>

        {/* Profile Image - Cyberpunk Style */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative group">
            {/* Glow effect ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-chart-3/30 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
            
            {/* Image container with border */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-primary/50 overflow-hidden bg-card/50 backdrop-blur-sm">
              <Image
                src="/placeholder-user.jpg"
                alt="GUnT_0x9 Profile"
                width={160}
                height={160}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              
              {/* Overlay scanline effect */}
              <div className="absolute inset-0 scanline opacity-20 pointer-events-none" />
              
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-accent/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-chart-3/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-chart-3 rounded-full border-2 border-background animate-pulse" />
          </div>
        </div>

        {/* Role badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full mb-8">
          <span className="w-2 h-2 bg-chart-3 rounded-full animate-pulse" />
          <span className="font-mono text-sm text-chart-3">{t('hero.role')}</span>
        </div>

        {/* Real name */}
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 font-mono">
          {t('hero.realName')}
        </p>

        {/* Description */}
        <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground">
          <p className="text-base sm:text-lg leading-relaxed">
            {t('hero.description1')}
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            {t('hero.description2')}
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            {t('hero.description3')}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
