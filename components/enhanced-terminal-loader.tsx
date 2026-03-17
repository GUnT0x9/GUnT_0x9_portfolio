"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TerminalLine {
  text: string
  delay?: number
  className?: string
}

const terminalLines: TerminalLine[] = [
  { text: "> initializing profile...", delay: 500 },
  { text: "> loading security research logs...", delay: 800 },
  { text: "> reverse engineering binaries...", delay: 1200 },
  { text: "> analyzing malware behavior...", delay: 1600 },
  { text: "> decrypting secure channels...", delay: 2000 },
  { text: "> welcome to GUnT_0x9 portfolio", delay: 2500 },
]

export function TerminalLoader() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [currentText, setCurrentText] = useState("")
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const line = terminalLines[currentLineIndex]
      setIsTyping(true)
      setCurrentText("")
      setCharIndex(0)
      
      // Type out the current line
      const typeInterval = setInterval(() => {
        if (charIndex < line.text.length) {
          setCurrentText(line.text.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          clearInterval(typeInterval)
          setIsTyping(false)
          setDisplayedLines(prev => [...prev, line.text])
          setCurrentLineIndex(currentLineIndex + 1)
        }
      }, 50)

      return () => clearInterval(typeInterval)
    }
  }, [currentLineIndex])

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-mono font-bold text-center mb-4">
          <span className="text-primary text-glow-cyan">{"<"}</span>
          Terminal Loader
          <span className="text-primary text-glow-cyan">{"/>"}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono text-sm">// System initialization sequence</p>

        <div className="relative max-w-4xl mx-auto p-8 bg-card border border-primary/30 rounded-lg glow-cyan">
          {/* Scanline effect */}
          <div className="absolute inset-0 scanline opacity-10 rounded-lg" />
          
          {/* Terminal content */}
          <div className="relative">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-chart-3 font-mono text-sm animate-pulse">●</span>
              <span className="text-muted-foreground font-mono text-sm">SECURE_TERMINAL_v2.0</span>
              <span className="text-chart-3 font-mono text-sm animate-pulse">●</span>
            </div>

            {/* Terminal output */}
            <div className="space-y-2 font-mono text-sm">
              {/* Previous lines */}
              {displayedLines.map((line, index) => (
                <div key={index} className="text-muted-foreground">
                  {line}
                </div>
              ))}

              {/* Current typing line */}
              <div className="flex items-center">
                <span className="text-primary">$</span>
                <span className="ml-2">{currentText}</span>
                <span className={cn(
                  "inline-block w-2 h-4 bg-primary ml-1",
                  showCursor && !isTyping ? "animate-pulse" : ""
                )}>
                  <span className="block w-full h-full bg-foreground"></span>
                </span>
              </div>
            </div>

            {/* Input area */}
            <div className="mt-6 flex items-center gap-2">
              <span className="text-muted-foreground font-mono text-sm">Type to interact...</span>
              <div className="flex-1 h-px bg-border"></div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary" />
          <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary" />
        </div>
      </div>
    </section>
  )
}
