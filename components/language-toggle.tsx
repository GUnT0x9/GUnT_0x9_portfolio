"use client"

import { useLanguage } from '@/hooks/use-language'
import { Languages } from 'lucide-react'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-20 right-4 z-40 flex items-center gap-2 px-3 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg hover:bg-card transition-all duration-200 group"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4 text-primary group-hover:text-primary transition-colors" />
      <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
        {language === 'en' ? 'KO' : 'EN'}
      </span>
    </button>
  )
}
