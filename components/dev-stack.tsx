"use client"

import { cn } from "@/lib/utils"
import { useLanguage } from '@/hooks/use-language'
import { TextScramble } from "./text-scramble"

const devStack = [
  { name: "HTML", icon: "H", color: "chart-5" },
  { name: "CSS", icon: "C", color: "primary" },
  { name: "React", icon: "R", color: "primary" },
]

export function DevStack() {
  const { t } = useLanguage()
  
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#9b59ff] text-sm uppercase tracking-[0.3em] mb-4">Stack</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold">
            <TextScramble text="Dev Stack" />
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {devStack.map((tech, index) => (
            <div
              key={index}
              className={cn(
                "group relative px-8 py-6 bg-card border border-border rounded-lg",
                "hover:glow-cyan hover:border-primary transition-all duration-300",
                "cursor-pointer"
              )}
            >
              {/* Icon */}
              <div className={cn(
                "w-16 h-16 flex items-center justify-center rounded-lg mb-4 mx-auto",
                "bg-secondary text-2xl font-mono font-bold",
                "group-hover:scale-110 transition-transform duration-300",
                tech.color === "primary" ? "text-primary" :
                tech.color === "chart-5" ? "text-chart-5" :
                "text-foreground"
              )}>
                {tech.icon}
              </div>
              
              {/* Name */}
              <p className="font-mono text-center text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </p>

              {/* Hover decoration */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-lg transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
