"use client"

import { cn } from "@/lib/utils"
import { useLanguage } from '@/hooks/use-language'

const awards = {
  en: [
    {
      title: "2nd Place",
      event: "Semyung Computer High School Department Project Presentation",
      icon: "🥈",
      color: "primary",
    },
    {
      title: "Silver Medal",
      event: "Semyung Computer High School CTF",
      icon: "🥈",
      color: "accent",
    },
    {
      title: "Finalist",
      event: "Ajou University CTF",
      icon: "🏆",
      color: "chart-3",
    },
  ],
  ko: [
    {
      title: "2nd Place",
      event: "세명컴퓨터고등학교 과제 발표대회",
      icon: "🥈",
      color: "primary",
    },
    {
      title: "Silver Medal",
      event: "세명컴퓨터고등학교 CTF",
      icon: "🥈",
      color: "accent",
    },
    {
      title: "Finalist",
      event: "아주대학교 CTF",
      icon: "🏆",
      color: "chart-3",
    },
  ]
}

export function AwardsSection() {
  const { language, t } = useLanguage()
  const currentAwards = awards[language]

  return (
    <section id="awards" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-center mb-4">
          <span className="text-primary text-glow-cyan">{"<"}</span>
          Awards
          <span className="text-primary text-glow-cyan">{"/>"}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono text-sm">// Achievements unlocked</p>

        <div className="grid md:grid-cols-3 gap-6">
          {currentAwards.map((award, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-6 bg-card border border-border rounded-lg text-center",
                "transition-all duration-300",
                award.color === "primary" ? "hover:glow-cyan hover:border-primary" :
                award.color === "accent" ? "hover:glow-purple hover:border-accent" :
                "hover:glow-green hover:border-chart-3"
              )}
            >
              {/* Trophy icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {award.icon}
              </div>
              
              {/* Title */}
              <h3 className={cn(
                "text-xl font-mono font-bold mb-2 transition-colors",
                award.color === "primary" ? "group-hover:text-primary group-hover:text-glow-cyan" :
                award.color === "accent" ? "group-hover:text-accent group-hover:text-glow-purple" :
                "group-hover:text-chart-3 group-hover:text-glow-green"
              )}>
                {award.title}
              </h3>
              
              {/* Event */}
              <p className="text-muted-foreground text-sm font-mono leading-relaxed">
                {award.event}
              </p>

              {/* Corner decorations */}
              <div className={cn(
                "absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity",
                award.color === "primary" ? "border-primary" :
                award.color === "accent" ? "border-accent" :
                "border-chart-3"
              )} />
              <div className={cn(
                "absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity",
                award.color === "primary" ? "border-primary" :
                award.color === "accent" ? "border-accent" :
                "border-chart-3"
              )} />
              <div className={cn(
                "absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 opacity-0 group-hover:opacity-100 transition-opacity",
                award.color === "primary" ? "border-primary" :
                award.color === "accent" ? "border-accent" :
                "border-chart-3"
              )} />
              <div className={cn(
                "absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 opacity-0 group-hover:opacity-100 transition-opacity",
                award.color === "primary" ? "border-primary" :
                award.color === "accent" ? "border-accent" :
                "border-chart-3"
              )} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
