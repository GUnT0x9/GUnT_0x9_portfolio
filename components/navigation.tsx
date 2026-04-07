"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "About", href: "#about", key: "about" },
  { label: "Education", href: "#education", key: "education" },
  { label: "Skills", href: "#skills", key: "skills" },
  { label: "Projects", href: "#projects", key: "projects" },
  { label: "Awards", href: "#awards", key: "awards" },
  { label: "Contact", href: "#contact", key: "contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-strong py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="font-[family-name:var(--font-display)] text-xl font-bold gradient-text relative z-20 hover:opacity-80 transition-opacity"
          >
            GUnT_0x9
          </a>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-300 relative group",
                  activeSection === item.href.slice(1)
                    ? "text-[#9b59ff]"
                    : "text-white/60 hover:text-white"
                )}
              >
                <span className="relative z-10">{item.label}</span>
                <span 
                  className={cn(
                    "absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-[#9b59ff] to-[#00f5d4] transition-all duration-300",
                    activeSection === item.href.slice(1) 
                      ? "opacity-100 scale-x-100" 
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  )}
                />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-white/60 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
