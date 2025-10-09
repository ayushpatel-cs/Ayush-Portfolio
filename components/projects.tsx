"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Crypto Trading Bot",
    description: "$2M volume, 58% win rate across 400 trades, 4bp avg profit per trade",
    tags: ["Python", "Trading", "Machine Learning"],
    // github: "https://github.com",
  },
  {
    title: "GPT-2 from Scratch",
    description: "Built and pretrained GPT-2 model implementing transformer architecture and training pipeline",
    tags: ["PyTorch", "Transformers", "NLP"],
    // github: "https://github.com",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="px-6 py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-20">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Projects</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-accent via-chart-2 to-chart-3 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`p-8 space-y-6 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-3 border-2 border-border hover:border-accent/50 group bg-card/50 backdrop-blur ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="font-mono text-xs px-3 py-1 hover:bg-accent/20 hover:text-accent transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:bg-accent/10 hover:border-accent transition-all flex-1 bg-transparent"
                  >
                    {/* <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a> */}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
