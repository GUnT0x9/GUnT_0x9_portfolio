"use client"

import { useEffect, useState } from "react"
import { useLanguage } from '@/hooks/use-language'

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
  const educationData = education[language] || education.en

  // Reset activeIndex when language changes
  useEffect(() => {
    setActiveIndex(-1)
  }, [language])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0")
            setTimeout(() => setActiveIndex(index), index * 100)
          }
        })
      },
      { threshold: 0.3 }
    )

    // Use a ref to store the observer and elements
    const elements = document.querySelectorAll("[data-education-item]")
    elements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [language]) // Add language dependency to re-render when language changes

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-center mb-4">
          <span className="text-primary text-glow-cyan">{"<"}</span>
          Education
          <span className="text-primary text-glow-cyan">{"/>"}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono text-sm">// Learning path</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {/* Timeline items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                data-education-item
                data-index={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 transition-all duration-700 ${
                  activeIndex >= index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Left content (odd items on desktop) */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:order-2"} pl-12 md:pl-0`}>
                  <div className={`p-6 bg-card border border-border rounded-lg hover:glow-cyan transition-all duration-300 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <h3 className="text-xl font-mono font-bold text-foreground mb-2">{t(item.school)}</h3>
                    <p className="font-mono text-primary mb-2">{t(item.period)}</p>
                    {item.field && (
                      <p className="text-sm text-chart-3 font-mono">{t(item.field)}</p>
                    )}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background glow-cyan md:-translate-x-1/2" />

                {/* Spacer for desktop layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
