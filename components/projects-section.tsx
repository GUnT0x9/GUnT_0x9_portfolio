"use client"

import { cn } from "@/lib/utils"
import { useLanguage } from '@/hooks/use-language'

const projects = [
  {
    title: "projects.title1",
    description: "projects.description1",
    icon: "🎯",
  },
  {
    title: "projects.title2", 
    description: "projects.description2",
    icon: "🔍",
  },
  {
    title: "projects.title3",
    description: "projects.description3",
    icon: "⚙️",
  },
  {
    title: "projects.title4",
    description: "projects.description4", 
    icon: "🌐",
  },
  {
    title: "projects.title5",
    description: "projects.description5",
    icon: "💻",
  },
  {
    title: "projects.title6",
    description: "projects.description6",
    icon: "🛠️",
  },
  {
    title: "projects.title7",
    description: "projects.description7",
    icon: "🏆",
  },
]

export function ProjectsSection() {
  const { t } = useLanguage()
  
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-center mb-4">
          <span className="text-primary text-glow-cyan">{"<"}</span>
          Projects
          <span className="text-primary text-glow-cyan">{"/>"}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono text-sm">// Portfolio showcase</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-5 bg-card border border-border rounded-lg",
                "hover:border-primary hover:glow-cyan transition-all duration-300",
                "cursor-pointer"
              )}
            >
              {/* Icon */}
              <span className="text-2xl mb-3 block">{project.icon}</span>
              
              {/* Title */}
              <h3 className="font-mono font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                {t(project.title)}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm font-mono leading-relaxed">
                {t(project.description)}
              </p>

              {/* Hover arrow */}
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
