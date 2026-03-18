"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from '@/hooks/use-language'

const skills = [
  { name: "Python", level: 90, color: "primary" },
  { name: "C", level: 85, color: "accent" },
  { name: "Java", level: 65, color: "chart-3" },
  { name: "Assembly", level: 75, color: "chart-4" },
  { name: "JavaScript", level: 60, color: "chart-5" },
]

export function SkillChart() {
  const { t } = useLanguage()
  const [animated, setAnimated] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-center mb-4">
          <span className="text-primary text-glow-cyan">{"<"}</span>
          Programming Languages
          <span className="text-primary text-glow-cyan">{"/>"}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono text-sm">// Technical proficiency</p>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between mb-2">
                <span className={cn(
                  "font-mono font-bold transition-colors",
                  hoveredSkill === index ? (
                    skill.color === "primary" ? "text-primary text-glow-cyan" :
                    skill.color === "accent" ? "text-accent text-glow-purple" :
                    skill.color === "chart-3" ? "text-chart-3 text-glow-green" :
                    `text-${skill.color}`
                  ) : "text-foreground"
                )}>
                  {skill.name}
                </span>
                <span className="font-mono text-muted-foreground">{skill.level}%</span>
              </div>
              
              <div className="relative h-4 bg-secondary rounded-full overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-0 bottom-0 w-px bg-foreground/20"
                      style={{ left: `${(i + 1) * 5}%` }}
                    />
                  ))}
                </div>
                
                {/* Progress bar */}
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden",
                    skill.color === "primary" ? "bg-primary" :
                    skill.color === "accent" ? "bg-accent" :
                    skill.color === "chart-3" ? "bg-chart-3" :
                    skill.color === "chart-4" ? "bg-chart-4" :
                    "bg-chart-5"
                  )}
                  style={{
                    width: animated ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" style={{ animationDelay: `${index * 200}ms` }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Radar chart visual */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-64 h-64">
            {/* Pentagon background */}
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Grid lines */}
              {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
                <polygon
                  key={i}
                  points={skills.map((_, index) => {
                    const angle = (index * 72 - 90) * (Math.PI / 180)
                    const x = 100 + 80 * scale * Math.cos(angle)
                    const y = 100 + 80 * scale * Math.sin(angle)
                    return `${x},${y}`
                  }).join(" ")}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-border"
                />
              ))}
              
              {/* Axis lines */}
              {skills.map((_, index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180)
                const x = 100 + 80 * Math.cos(angle)
                const y = 100 + 80 * Math.sin(angle)
                return (
                  <line
                    key={index}
                    x1="100"
                    y1="100"
                    x2={x}
                    y2={y}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-border"
                  />
                )
              })}
              
              {/* Skill polygon */}
              <polygon
                points={skills.map((skill, index) => {
                  const angle = (index * 72 - 90) * (Math.PI / 180)
                  const scale = animated ? skill.level / 100 : 0
                  const x = 100 + 80 * scale * Math.cos(angle)
                  const y = 100 + 80 * scale * Math.sin(angle)
                  return `${x},${y}`
                }).join(" ")}
                fill="currentColor"
                fillOpacity="0.3"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary transition-all duration-1000"
              />
              
              {/* Skill points */}
              {skills.map((skill, index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180)
                const scale = animated ? skill.level / 100 : 0
                const x = 100 + 80 * scale * Math.cos(angle)
                const y = 100 + 80 * scale * Math.sin(angle)
                return (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="currentColor"
                    className="text-primary transition-all duration-1000"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  />
                )
              })}
            </svg>
            
            {/* Labels */}
            {skills.map((skill, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180)
              const x = 50 + 55 * Math.cos(angle)
              const y = 50 + 55 * Math.sin(angle)
              return (
                <span
                  key={index}
                  className="absolute font-mono text-xs text-muted-foreground transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {skill.name}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
