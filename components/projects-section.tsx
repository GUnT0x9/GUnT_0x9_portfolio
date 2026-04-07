"use client"

import { cn } from "@/lib/utils"
import { useLanguage } from '@/hooks/use-language'
import { useEffect, useState } from "react"
import { TiltCard } from "./tilt-card"
import { TextScramble } from "./text-scramble"

const projects = [
  {
    title: "Minesweeper Game Hacking",
    description: "Reverse engineering and app hacking project analyzing the classic Minesweeper game mechanics and implementing automated solving techniques.",
    icon: "🎮",
    tags: ["Reverse Engineering", "App Hacking"],
    link: "https://canva.link/xefom8yml5zctzd",
  },
  {
    title: "Algorithm Analysis", 
    description: "In-depth study and implementation of LCA (Lowest Common Ancestor) algorithm with performance optimization and practical applications.",
    icon: "🧮",
    tags: ["Algorithm", "LCA"],
    link: "https://www.miricanvas.com/login?redirect=%2Fv2%2Fko%2Fdesign%2F14eszb2%3Flocation%3Ddesign%26type%3Dcopy_link%26access%3Dlink%26permission%3Dviewer",
  },
  {
    title: "DreamHack Wargame Solving",
    description: "Solving various security challenges on DreamHack platform covering web, reversing, pwnable, and cryptography categories.",
    icon: "🏴‍☠️",
    tags: ["Wargame", "Security"],
    link: "https://dreamhack.io/users/67108/wargame",
  },
  {
    title: "DreamHack Problem Development",
    description: "Creating original security challenges for DreamHack CTF and wargame platform with detailed writeups and solutions.",
    icon: "✍️",
    tags: ["CTF Development", "Problem Solving"],
    link: "https://dreamhack.io/users/67108/wargame?scope=author",
  },
  {
    title: "CTF Participation",
    description: "Active participation in various Capture The Flag competitions including local and international cybersecurity contests.",
    icon: "🏆",
    tags: ["CTF", "Competition"],
  },
  {
    title: "Web Development",
    description: "Full-stack web development projects including personal portfolio, security tools dashboard, and interactive applications.",
    icon: "💻",
    tags: ["Web", "Full-Stack"],
  },
]

export function ProjectsSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('projects')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#9b59ff] text-sm uppercase tracking-[0.3em] mb-4">Portfolio</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold">
            <TextScramble text="Featured Projects" />
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <TiltCard
              key={index}
              className={cn(
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative glass rounded-2xl p-6 block h-full transition-all duration-500 hover:border-[#9b59ff]/30" 
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-[#9b59ff]/10 text-[#9b59ff] border border-[#9b59ff]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Icon */}
                <span className="text-3xl mb-4 block">{project.icon}</span>
                
                {/* Title */}
                <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-white group-hover:text-[#9b59ff] transition-colors mb-3">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                  <svg className="w-5 h-5 text-[#9b59ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
