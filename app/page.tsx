"use client"

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
import { LanguageToggle } from "@/components/language-toggle"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <GridBackground />
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
