"use client"

import { useLanguage } from '@/hooks/use-language'
import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { TextScramble } from "./text-scramble"

const socialLinks = [
  { 
    name: "GitHub", 
    url: "https://github.com/GUnT0x9",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  },
  { 
    name: "Email", 
    url: "mailto:gunt0x9@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    name: "LinkedIn", 
    url: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  { 
    name: "Twitter", 
    url: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
]

export function ContactSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('contact')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <p className="text-[#9b59ff] text-sm uppercase tracking-[0.3em] mb-4">Connect</p>
          <h2 className={cn(
            "font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <TextScramble text="Let's Work Together" />
          </h2>
        </div>

        {/* Contact Card */}
        <div 
          className={cn(
            "relative max-w-md mx-auto rounded-3xl p-8 transition-all duration-1000 overflow-hidden",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ 
            transitionDelay: "0.2s",
            background: 'linear-gradient(135deg, rgba(155, 89, 255, 0.1), rgba(0, 245, 212, 0.1))',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Shimmer */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            <div 
              className="absolute inset-0 -translate-x-full animate-shimmer"
              style={{
                background: 'linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)'
              }}
            />
          </div>
          
          <div className="relative text-center">
            {/* Avatar */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden glass glow-violet">
              <Image
                src="/idapro_bro.jpg"
                alt="GUnT_0x9 Profile"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name */}
            <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold gradient-text mb-2">
              GUnT_0x9
            </h3>
            
            {/* Roles */}
            <div className="space-y-1 mb-6">
              <p className="text-white/60">{t('contact.role1')}</p>
              <p className="text-[#00f5d4]">{t('contact.role2')}</p>
              <p className="text-[#9b59ff]">{t('contact.role3')}</p>
            </div>

            {/* Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f5d4]/10 border border-[#00f5d4]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-pulse" />
              <span className="text-sm text-[#00f5d4]">{t('contact.status')}</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-left">
              <a 
                href="mailto:gunt0x9@gmail.com" 
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="text-white/40">{t('contact.emailLabel')}</span>
                <span className="text-white ml-auto">gunt0x9@gmail.com</span>
              </a>
              <a 
                href="https://github.com/GUnT0x9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="text-white/40">{t('contact.githubLabel')}</span>
                <span className="text-white ml-auto">github.com/GUnT0x9</span>
              </a>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                <span className="text-white/40">{t('contact.locationLabel')}</span>
                <span className="text-white ml-auto">{t('contact.location')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div 
          className={cn(
            "flex justify-center gap-4 mt-10 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "0.4s" }}
        >
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-gradient-to-br hover:from-[#9b59ff] hover:to-[#00f5d4] hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_30px_rgba(155,89,255,0.4)]"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <p className="text-white/40 text-sm mb-2">
            Built with passion for security
          </p>
          <p className="text-white/30 text-xs">
            &copy; 2025 GUnT_0x9. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  )
}
