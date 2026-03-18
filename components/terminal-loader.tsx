"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

const terminalLines = [
  "> initializing profile...",
  "> loading security research logs...",
  "> reverse engineering binaries...",
  "> analyzing malware behavior...",
  "> decrypting secure channels...",
  "> welcome to GUnT_0x9 portfolio",
]

export function TerminalLoader() {
  const [mounted, setMounted] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const [showMainContent, setShowMainContent] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  // Typing effect - 30ms per character
  useEffect(() => {
    if (!mounted || currentLine >= terminalLines.length) return

    const line = terminalLines[currentLine]
    let charIndex = 0
    
    const typeInterval = setInterval(() => {
      if (charIndex <= line.length) {
        setCurrentText(line.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentLine(prev => prev + 1)
          setCurrentText("")
        }, 200)
      }
    }, 15)

    return () => clearInterval(typeInterval)
  }, [mounted, currentLine])

  // Check completion and show main content
  useEffect(() => {
    if (currentLine >= terminalLines.length && !isComplete) {
      setTimeout(() => {
        setIsComplete(true)
        setShowMainContent(true)
      }, 1000)
    }
  }, [currentLine, isComplete])

  // Reveal main content and scroll
  useEffect(() => {
    if (showMainContent) {
      const mainContent = document.getElementById("main-content")
      if (mainContent) {
        mainContent.classList.remove("opacity-0", "translate-y-8")
        mainContent.classList.add("opacity-100", "translate-y-0")
      }
      
      setTimeout(() => {
        const heroSection = document.getElementById("about")
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 500)
    }
  }, [showMainContent])

  if (!mounted) return null

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-all duration-1000",
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* Terminal Window */}
      <div className="w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 px-6 py-4 bg-secondary/50 border border-border rounded-t-lg">
          <span className={cn(
            "text-chart-3 text-xl",
            showCursor && currentLine < terminalLines.length ? "animate-pulse" : ""
          )}>●</span>
          <span className="text-muted-foreground font-mono text-lg font-bold">
            terminal@gunt_0x9:~$
          </span>
          <span className={cn(
            "text-chart-3 text-xl",
            showCursor && currentLine < terminalLines.length ? "animate-pulse" : ""
          )}>●</span>
        </div>

        {/* Terminal Body */}
        <div className="bg-card border-x border-b border-border rounded-b-lg p-6 min-h-[300px]">
          {/* Completed lines */}
          <div className="space-y-2 font-mono text-base">
            {terminalLines.slice(0, currentLine).map((line, index) => (
              <div 
                key={index}
                className={cn(
                  "transition-all duration-300",
                  index === terminalLines.length - 1 ? "text-chart-3 text-glow-green" : "text-primary"
                )}
              >
                {line}
              </div>
            ))}

            {/* Current typing line */}
            {currentLine < terminalLines.length && (
              <div className="flex items-center text-primary">
                <span>{currentText}</span>
                <span className={cn(
                  "inline-block w-2.5 h-5 bg-primary ml-1",
                  showCursor ? "opacity-100" : "opacity-0"
                )} />
              </div>
            )}
          </div>

          {/* Complete message */}
          {currentLine >= terminalLines.length && (
            <div className="mt-8 text-center">
              <span className="text-muted-foreground font-mono text-sm animate-pulse">
                Press any key to continue...
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
