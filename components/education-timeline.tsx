"use client"

import { useEffect, useState } from "react"
import { useLanguage } from '@/hooks/use-language'
import { cn } from "@/lib/utils"
import { TextScramble } from "./text-scramble"

const education = {
  en: [
    {
      school: "education.school1",
      period: "education.period1",
      field: null,
    },
    {
      school: "education.school2",
      period: "education.period2", 
      field: null,
    },
    {
      school: "education.school3",
      period: "education.period3",
      field: "education.field1",
    },
  ],
  ko: [
    {
      school: "education.school1",
      period: "education.period1",
      field: null,
    },
    {
      school: "education.school2",
      period: "education.period2", 
      field: null,
    },
    {
      school: "education.school3",
      period: "education.period3",
      field: "education.field1",
    },
  ]
}

export function EducationTimeline() {
  const { language, t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(-1)
  const [progress, setProgress] = useState(0)
  const educationData = education[language] || education.en

  useEffect(() => {
    setActiveIndex(-1)
  }, [language])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0")
            setTimeout(() => setActiveIndex(index), index * 150)
          }
        })
      },
      { threshold: 0.3 }
    )

    const elements = document.querySelectorAll("[data-education-item]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [language])

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('education')
      if (section) {
        const rect = section.getBoundingClientRect()
        const windowHeight = window.innerHeight
        if (rect.top < windowHeight && rect.bottom > 0) {
          const newProgress = Math.min(100, Math.max(0, ((windowHeight - rect.top) / (rect.height + windowHeight)) * 100 * 1.5))
          setProgress(newProgress)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#9b59ff] text-sm uppercase tracking-[0.3em] mb-4">Journey</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold">
            <TextScramble text="Education" />
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line with progress */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />
          <div 
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-[#9b59ff] to-[#00f5d4] md:-translate-x-px transition-all duration-300"
            style={{ height: `${progress}%` }}
          />

          {/* Timeline items */}
          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div
                key={index}
                data-education-item
                data-index={index}
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 transition-all duration-700",
                  activeIndex >= index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                {/* Content card */}
                <div className={cn(
                  "flex-1 pl-12 md:pl-0",
                  index % 2 === 0 ? "md:text-right" : "md:order-2 md:text-left"
                )}>
                  <div className={cn(
                    "glass p-6 rounded-2xl transition-all duration-500 hover:border-[#9b59ff]/30",
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  )}>
                    <p className="text-[#00f5d4] text-sm font-medium mb-2">{t(item.period)}</p>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white mb-2">
                      {t(item.school)}
                    </h3>
                    {item.field && (
                      <p className="text-white/50 text-sm">{t(item.field)}</p>
                    )}
                  </div>
                </div>

                {/* Timeline dot */}
                <div 
                  className={cn(
                    "absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 border-[#0a0a0f] md:-translate-x-1/2 transition-all duration-500",
                    activeIndex >= index 
                      ? "bg-[#9b59ff] shadow-[0_0_15px_#9b59ff]" 
                      : "bg-white/20"
                  )}
                />

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
