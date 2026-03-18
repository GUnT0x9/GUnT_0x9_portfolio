"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from '@/hooks/use-language'

const securityFields = {
  en: [
    {
      title: "Reverse Engineering",
      icon: "🔧",
      color: "primary",
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
      color: "accent",
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
      color: "chart-3",
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
      color: "primary",
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
      color: "accent",
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
      color: "chart-3",
      items: [
        "해시 분석",
        "CTF 암호 챌린지 해결",
        "암호화 알고리즘",
        "키 교환 프로토콜",
      ],
    },
  ]
}

export function SecurityFields() {
  const { t, language } = useLanguage()
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const currentFields = securityFields[language] || securityFields.en

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-center mb-4">
          <span className="text-primary text-glow-cyan">{"<"}</span>
          Security Fields
          <span className="text-primary text-glow-cyan">{"/>"}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono text-sm">// Expertise domains</p>

        <div className="grid md:grid-cols-3 gap-6">
          {currentFields.map((field, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-6 bg-card border border-border rounded-lg cursor-pointer transition-all duration-300",
                activeCard === index ? (
                  field.color === "primary" ? "glow-cyan border-primary" :
                  field.color === "accent" ? "glow-purple border-accent" :
                  "glow-green border-chart-3"
                ) : "hover:border-primary/50"
              )}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{field.icon}</span>
                <h3 className={cn(
                  "text-xl font-mono font-bold transition-colors",
                  field.color === "primary" ? "text-primary" :
                  field.color === "accent" ? "text-accent" :
                  "text-chart-3"
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
                      "flex items-center gap-2 text-muted-foreground transition-all duration-300",
                      activeCard === index ? "translate-x-2" : ""
                    )}
                    style={{ transitionDelay: `${itemIndex * 50}ms` }}
                  >
                    <span className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      field.color === "primary" ? "bg-primary" :
                      field.color === "accent" ? "bg-accent" :
                      "bg-chart-3"
                    )} />
                    <span className="font-mono text-sm">{t(item)}</span>
                  </li>
                ))}
              </ul>

              {/* Corner decoration */}
              <div className={cn(
                "absolute top-0 right-0 w-16 h-16 opacity-10",
                field.color === "primary" ? "bg-primary" :
                field.color === "accent" ? "bg-accent" :
                "bg-chart-3"
              )} style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
