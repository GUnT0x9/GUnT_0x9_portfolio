"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useLanguage } from '@/hooks/use-language'
import { cn } from "@/lib/utils"
import { MagneticButton } from "./magnetic-button"

const floatingTags = [
  { text: "Reverse Engineering", top: "15%", left: "10%", delay: "0s" },
  { text: "Malware Analysis", top: "25%", right: "15%", delay: "-2s" },
  { text: "Penetration Testing", bottom: "30%", left: "12%", delay: "-4s" },
  { text: "Binary Exploitation", bottom: "20%", right: "10%", delay: "-6s" },
  { text: "CTF Player", top: "60%", left: "5%", delay: "-1s" },
  { text: "Assembly", top: "20%", left: "55%", delay: "-3s" },
]

const typingTexts = [
  "Cybersecurity Student",
  "Reverse Engineer", 
  "Malware Analyst",
  "Binary Exploiter"
]

export function HeroSection() {
  const { t } = useLanguage()
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [typingIndex, setTypingIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const fullText = "GUnT_0x9"

  // Initial reveal animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Name typing effect
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

  // Role typing effect
  useEffect(() => {
    const currentText = typingTexts[typingIndex]
    
    if (isDeleting) {
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setCharIndex(prev => prev - 1)
        }, 50)
        return () => clearTimeout(timer)
      } else {
        setIsDeleting(false)
        setTypingIndex((prev) => (prev + 1) % typingTexts.length)
      }
    } else {
      if (charIndex < currentText.length) {
        const timer = setTimeout(() => {
          setCharIndex(prev => prev + 1)
        }, 100)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
        return () => clearTimeout(timer)
      }
    }
  }, [charIndex, isDeleting, typingIndex])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Floating Tags */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingTags.map((tag, i) => (
          <div
            key={i}
            className={cn(
              "absolute px-4 py-2 glass rounded-full text-sm text-white/60 animate-float-tag transition-all duration-1000",
              isVisible ? "opacity-100" : "opacity-0"
            )}
            style={{
              top: tag.top,
              left: tag.left,
              right: tag.right,
              bottom: tag.bottom,
              animationDelay: tag.delay,
              transitionDelay: `${i * 0.1}s`
            }}
          >
            {tag.text}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Subtitle */}
        <p 
          className={cn(
            "text-sm uppercase tracking-[0.3em] text-white/50 mb-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "0.2s" }}
        >
          Creative Developer & Security Researcher
        </p>

        {/* Glitch effect name with gradient */}
        <div className="relative mb-8">
          <h1 
            className={cn(
              "font-[family-name:var(--font-display)] text-5xl sm:text-7xl lg:text-8xl font-bold gradient-text relative transition-all duration-700",
              isVisible ? "opacity-100 blur-0" : "opacity-0 blur-sm"
            )}
            style={{ transitionDelay: "0.4s" }}
          >
            {displayText}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity text-[#00f5d4]`}>_</span>
          </h1>
        </div>

        {/* Profile Image - Glassmorphism Style */}
        <div 
          className={cn(
            "relative mb-8 flex justify-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="relative group">
            {/* Glow effect ring */}
            <div 
              className="absolute inset-0 rounded-full animate-pulse-glow"
              style={{
                background: 'linear-gradient(135deg, rgba(155, 89, 255, 0.4), rgba(0, 245, 212, 0.4))',
                filter: 'blur(20px)'
              }}
            />
            
            {/* Glass card container */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden glass glow-violet transition-all duration-500 group-hover:glow-cyan">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9b59ff]/20 to-[#00f5d4]/20" />
              <Image
                src="/placeholder-user.jpg"
                alt="GUnT_0x9 Profile"
                width={160}
                height={160}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
              
              {/* Shimmer effect */}
              <div 
                className="absolute inset-0 animate-shimmer"
                style={{
                  background: 'linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)'
                }}
              />
            </div>
            
            {/* Status indicator */}
            <div 
              className="absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-[#0a0a0f] animate-pulse"
              style={{ background: '#00f5d4' }}
            />
          </div>
        </div>

        {/* Role badge - Glass card */}
        <div 
          className={cn(
            "inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full mb-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "0.7s" }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00f5d4' }} />
          <span className="text-sm font-medium text-[#00f5d4]">
            {typingTexts[typingIndex].slice(0, charIndex)}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Real name */}
        <p 
          className={cn(
            "text-xl sm:text-2xl text-white/60 mb-6 font-[family-name:var(--font-display)] transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "0.8s" }}
        >
          {t('hero.realName')}
        </p>

        {/* Description - Glass cards */}
        <div 
          className={cn(
            "max-w-2xl mx-auto space-y-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "0.9s" }}
        >
          <p className="text-base sm:text-lg leading-relaxed text-white/60">
            {t('hero.description1')}
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-white/60">
            {t('hero.description2')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div 
          className={cn(
            "flex gap-4 justify-center mt-10 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "1s" }}
        >
          <MagneticButton strength={0.2}>
            <a 
              href="#projects" 
              className="inline-block px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #9b59ff, #00f5d4)',
                color: '#0a0a0f',
                boxShadow: '0 4px 30px rgba(155, 89, 255, 0.3)'
              }}
            >
              View My Work
            </a>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 rounded-full font-semibold text-sm border border-white/10 text-white hover:bg-white/5 transition-all duration-300"
            >
              Get In Touch
            </a>
          </MagneticButton>
        </div>

        {/* Scroll indicator */}
        <div 
          className={cn(
            "mt-16 transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: "1.2s" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-white/40">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
              <div 
                className="w-1 h-2 rounded-full animate-[scroll-wheel_2s_infinite]"
                style={{ background: '#9b59ff' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
