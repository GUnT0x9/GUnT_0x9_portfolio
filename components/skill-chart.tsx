"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from '@/hooks/use-language'
import { TextScramble } from "./text-scramble"

const skills = [
  { name: "Python", level: 90, color: "#9b59ff" },
  { name: "C", level: 85, color: "#00f5d4" },
  { name: "Java", level: 65, color: "#6b5ce7" },
  { name: "Assembly", level: 75, color: "#ff6b6b" },
  { name: "JavaScript", level: 60, color: "#ffd93d" },
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
        <div className="text-center mb-16">
          <p className="text-[#9b59ff] text-sm uppercase tracking-[0.3em] mb-4">Proficiency</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold">
            <TextScramble text="Programming Languages" />
          </h2>
        </div>

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
                  "font-bold transition-colors",
                  hoveredSkill === index ? "text-white" : "text-white/80"
                )}>
                  {skill.name}
                </span>
                <span className="text-white/50">{skill.level}%</span>
              </div>
              
              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                {/* Progress bar */}
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{
                    width: animated ? `${skill.level}%` : "0%",
                    backgroundColor: skill.color,
                    transitionDelay: `${index * 100}ms`,
                    boxShadow: `0 0 10px ${skill.color}40`,
                  }}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" style={{ animationDelay: `${index * 200}ms` }} />
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
                fill={skills[0].color + "40"}
                stroke={skills[0].color}
                strokeWidth="2"
                className="transition-all duration-1000"
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
                    className="transition-all duration-1000"
                    style={{ 
                      fill: skills[index].color,
                      transitionDelay: `${index * 100}ms` 
                    }}
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
                  className="absolute text-xs text-white/50 transform -translate-x-1/2 -translate-y-1/2"
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
