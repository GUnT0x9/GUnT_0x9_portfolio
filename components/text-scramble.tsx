"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

interface TextScrambleProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

export function TextScramble({ 
  text, 
  className, 
  delay = 0,
  duration = 2000 
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          setTimeout(() => {
            setIsAnimating(true)
          }, delay)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, hasAnimated])

  useEffect(() => {
    if (!isAnimating) return

    let iteration = 0
    const totalIterations = text.length * 3
    const intervalDuration = duration / totalIterations

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " "
            if (index < iteration / 3) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )

      iteration += 1

      if (iteration >= totalIterations) {
        setDisplayText(text)
        setIsAnimating(false)
        clearInterval(interval)
      }
    }, intervalDuration)

    return () => clearInterval(interval)
  }, [isAnimating, text, duration])

  return (
    <span ref={elementRef} className={cn("inline-block", className)}>
      {displayText}
    </span>
  )
}
