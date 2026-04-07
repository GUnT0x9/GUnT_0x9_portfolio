"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useLanguage } from '@/hooks/use-language'
import { TextScramble } from "./text-scramble"

const tools = [
  {
    name: "IDA Pro",
    description: "Static binary analysis",
    icon: "/idapro_bro.jpg",
    color: "accent",
  },
  {
    name: "x64dbg",
    description: "Dynamic debugging and runtime analysis",
    icon: "/bug.jpg",
    color: "chart-3",
  },
]

export function ToolsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#9b59ff] text-sm uppercase tracking-[0.3em] mb-4">Toolkit</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold">
            <TextScramble text="Reverse Tools" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-6 bg-card border border-border rounded-lg",
                "hover:border-primary transition-all duration-300",
                tool.color === "accent" ? "hover:glow-purple" : "hover:glow-green"
              )}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={cn(
                  "w-16 h-16 flex items-center justify-center rounded-lg flex-shrink-0 overflow-hidden",
                  "bg-secondary group-hover:scale-110 transition-transform duration-300"
                )}>
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className={cn(
                    "text-xl font-mono font-bold mb-2 transition-colors",
                    tool.color === "accent" ? "group-hover:text-accent" : "group-hover:text-chart-3"
                  )}>
                    {tool.name}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    {tool.description}
                  </p>
                </div>
              </div>

              {/* Status indicator */}
              <div className={cn(
                "absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse",
                tool.color === "accent" ? "bg-accent" : "bg-chart-3"
              )} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
