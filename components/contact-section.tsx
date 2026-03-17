"use client"

import { useLanguage } from '@/hooks/use-language'
import Image from "next/image"

export function ContactSection() {
  const { t } = useLanguage()
  
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-center mb-4">
          <span className="text-primary text-glow-cyan">{"<"}</span>
          Contact
          <span className="text-primary text-glow-cyan">{"/>"}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono text-sm">// Get in touch</p>

        {/* Identity card */}
        <div className="relative max-w-md mx-auto p-8 bg-card border border-primary/50 rounded-lg glow-cyan">
          {/* Scanline effect */}
          <div className="absolute inset-0 scanline opacity-10 rounded-lg" />
          
          {/* Content */}
          <div className="relative text-center">
            {/* Avatar */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary border-2 border-primary flex items-center justify-center overflow-hidden">
              <Image
                src="/idapro_bro.jpg"
                alt="GUnT_0x9 Profile"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name */}
            <h3 className="text-2xl font-mono font-bold text-primary text-glow-cyan mb-2">
              GUnT_0x9
            </h3>
            
            {/* Titles */}
            <div className="space-y-1 mb-6">
              <p className="font-mono text-foreground">{t('contact.role1')}</p>
              <p className="font-mono text-accent">{t('contact.role2')}</p>
              <p className="font-mono text-chart-3">{t('contact.role3')}</p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground font-mono text-xs">SYSTEM_STATUS</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Status */}
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-chart-3 rounded-full animate-pulse" />
              <span className="font-mono text-sm text-chart-3">{t('contact.status')}</span>
            </div>

            {/* Personal Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground font-mono text-sm">{t('contact.emailLabel')}:</span>
                <a href="mailto:gunwoo@example.com" className="font-mono text-primary hover:text-primary/80 transition-colors">
                  gunt0x9@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground font-mono text-sm">{t('contact.githubLabel')}:</span>
                <a href="https://github.com/GUnT0x9" target="_blank" rel="noopener noreferrer" className="font-mono text-primary hover:text-primary/80 transition-colors">
                  github.com/GUnT0x9
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground font-mono text-sm">{t('contact.locationLabel')}:</span>
                <span className="font-mono text-primary">
                  {t('contact.location')}
                </span>
              </div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary" />
          <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary" />
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <p className="font-mono text-muted-foreground text-sm">
            {"/* "} Built with passion for security {"*/"}
          </p>
          <p className="font-mono text-muted-foreground text-xs mt-2">
            © 2025 GUnT_0x9. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  )
}
