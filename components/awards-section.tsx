"use client"

import { cn } from "@/lib/utils"
import { useLanguage } from '@/hooks/use-language'
import { useEffect, useState } from "react"
import { TiltCard } from "./tilt-card"
import { TextScramble } from "./text-scramble"

const awards = {
  en: [
    {
      title: "2nd Place",
      event: "Semyung Computer High School Department Project Presentation",
      icon: "🥈",
      color: "violet",
    },
    {
      title: "Silver Medal",
      event: "Semyung Computer High School CTF",
      icon: "🥈",
      color: "cyan",
    },
    {
      title: "Finalist",
      event: "Ajou University CTF",
      icon: "🏆",
      color: "purple",
    },
  ],
  ko: [
    {
      title: "2nd Place",
      event: "세명컴퓨터고등학교 과제 발표대회",
      icon: "🥈",
      color: "violet",
    },
    {
      title: "Silver Medal",
      event: "세명컴퓨터고등학교 CTF",
      icon: "🥈",
      color: "cyan",
    },
    {
      title: "Finalist",
      event: "아주대학교 CTF",
      icon: "🏆",
      color: "purple",
    },
  ]
}

const securityFields = {
  en: [
    {
      title: "Reverse Engineering",
      icon: "🔧",
      color: "violet",
      items: [
        "Binary analysis",
        "ELF reversing",
        "VM-based challenge analysis",
        "Low-level debugging",
      ],
    },
    {
      title: "Web Security",
      icon: "🌐",
      color: "cyan",
      items: [
        "Web vulnerability analysis",
        "Authentication logic analysis",
        "SQL Injection / XSS",
        "API security testing",
      ],
    },
    {
      title: "Cryptography",
      icon: "🔐",
      color: "purple",
      items: [
        "Hash analysis",
        "Crypto challenge solving in CTF",
        "Encryption algorithms",
        "Key exchange protocols",
      ],
    },
  ],
  ko: [
    {
      title: "리버스 엔지니어링",
      icon: "🔧",
      color: "violet",
      items: [
        "바이너리 분석",
        "ELF 리버싱",
        "VM 기반 챌린지 분석",
        "저수준 디버깅",
      ],
    },
    {
      title: "웹 보안",
      icon: "🌐",
      color: "cyan",
      items: [
        "웹 취약점 분석",
        "인증 로직 분석",
        "SQL 인젝션 / XSS",
        "API 보안 테스팅",
      ],
    },
    {
      title: "암호학",
      icon: "🔐",
      color: "purple",
      items: [
        "해시 분석",
        "CTF 암호 챌린지 해결",
        "암호화 알고리즘",
        "키 교환 프로토콜",
      ],
    },
  ]
}

const colorMap = {
  violet: { border: "border-[#9b59ff]/30", glow: "hover:shadow-[0_0_30px_rgba(155,89,255,0.3)]", text: "text-[#9b59ff]" },
  cyan: { border: "border-[#00f5d4]/30", glow: "hover:shadow-[0_0_30px_rgba(0,245,212,0.3)]", text: "text-[#00f5d4]" },
  purple: { border: "border-[#6b5ce7]/30", glow: "hover:shadow-[0_0_30px_rgba(107,92,231,0.3)]", text: "text-[#6b5ce7]" },
}

export function AwardsSection() {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const currentAwards = awards[language]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('awards')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="awards" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#9b59ff] text-sm uppercase tracking-[0.3em] mb-4">Achievements</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold">
            <TextScramble text="Awards" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {currentAwards.map((award, index) => {
            const colors = colorMap[award.color as keyof typeof colorMap]
            return (
              <TiltCard
                key={index}
                className={cn(
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                <div
                  className={cn(
                    "group relative glass rounded-2xl p-8 text-center h-full transition-all duration-500",
                    "hover:-translate-y-2 hover:border-opacity-50",
                    colors.border,
                    colors.glow
                  )}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  {/* Trophy icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {award.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className={cn(
                    "text-xl font-[family-name:var(--font-display)] font-bold mb-2 transition-colors",
                    colors.text
                  )}>
                    {award.title}
                  </h3>
                  
                  {/* Event */}
                  <p className="text-white/50 text-sm leading-relaxed">
                    {award.event}
                  </p>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div 
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                      }}
                    />
                  </div>
                </div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function SecurityFields() {
  const { language } = useLanguage()
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const currentFields = securityFields[language] || securityFields.en

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('skills')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#9b59ff] text-sm uppercase tracking-[0.3em] mb-4">Expertise</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold">
            <TextScramble text="Security Fields" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {currentFields.map((field, index) => {
            const colors = colorMap[field.color as keyof typeof colorMap]
            return (
              <TiltCard
                key={index}
                className={cn(
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                <div
                  className={cn(
                    "group relative glass rounded-2xl p-6 cursor-pointer h-full transition-all duration-500",
                    "hover:-translate-y-2",
                    activeCard === index ? cn(colors.border, colors.glow) : "hover:border-white/20"
                  )}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{field.icon}</span>
                    <h3 className={cn(
                      "text-xl font-[family-name:var(--font-display)] font-bold",
                      colors.text
                    )}>
                      {field.title}
                    </h3>
                  </div>

                  {/* Items */}
                  <ul className="space-y-3">
                    {field.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={cn(
                          "flex items-center gap-3 text-white/50 transition-all duration-300",
                          activeCard === index ? "translate-x-2" : ""
                        )}
                        style={{ transitionDelay: `${itemIndex * 50}ms` }}
                      >
                        <span className={cn("w-1.5 h-1.5 rounded-full", colors.text)} />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div 
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                      }}
                    />
                  </div>
                </div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
