"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'en' | 'ko'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [translationsData, setTranslationsData] = useState<any>({})

  const setLanguage = async (lang: Language) => {
    setLanguageState(lang)
    try {
      const module = await import(`../locales/${lang}-full.json`)
      setTranslationsData(module.default)
    } catch (error) {
      console.error('Failed to load translations:', error)
    }
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value = translationsData
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  useEffect(() => {
    setLanguage(language)
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
