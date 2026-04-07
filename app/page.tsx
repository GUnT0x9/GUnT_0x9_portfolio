"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { TerminalLoader } from "@/components/terminal-loader"
import { EducationTimeline } from "@/components/education-timeline"
import { SecurityFields } from "@/components/security-fields"
import { SkillChart } from "@/components/skill-chart"
import { DevStack } from "@/components/dev-stack"
import { ToolsSection } from "@/components/tools-section"
import { ProjectsSection } from "@/components/projects-section"
import { AwardsSection } from "@/components/awards-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { GridBackground } from "@/components/grid-background"
import { ParticleBackground } from "@/components/particle-background"
import { LanguageToggle } from "@/components/language-toggle"
import { cn } from "@/lib/utils"

const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
]

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxScroll) * 100
      setScrollProgress(progress)

      // Active section detection
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Section Dots */}
      <div className="section-dots hidden lg:flex">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={cn(
              "section-dot",
              activeSection === section.id && "active"
            )}
            aria-label={`Go to ${section.label}`}
          />
        ))}
      </div>

      <GridBackground />
      <ParticleBackground />
      <Navigation />
      <LanguageToggle />
      
      <div className="relative z-10">
        <TerminalLoader />
        <div id="main-content" className="opacity-0 translate-y-8 transition-all duration-1000">
          <HeroSection />
          <EducationTimeline />
          <SecurityFields />
          <SkillChart />
          <DevStack />
          <ToolsSection />
          <ProjectsSection />
          <AwardsSection />
          <ContactSection />
        </div>
      </div>
    </main>
  )
}
