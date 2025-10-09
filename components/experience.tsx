"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const experiences = [
  {
    company: "Jane Street",
    role: "Quantitative Trading Intern",
    logo: "/images/jane_street_logo.png",
    description: ["Rotated on Equities and Options trading desks"],
    tags: ["Quantitative Trading", "Python", "Financial Markets"],
  },
  {
    company: "Meta",
    role: "Software Engineering Intern",
    logo: "/images/meta_logo.png",
    description: ["Enhanced caching mechanisms for Facebook's CDN", "Developed real-time hotness tracking system"],
    tags: ["Distributed Systems", "C++", "CDN"],
  },
  {
    company: "Georgia Institute of Technology",
    role: "Graduate Teaching Assistant",
    logo: "/images/georgia_tech_logo.png",
    description: ["CS 7643 - Deep Learning", "CS 2200 - Computer Systems & Networks"],
    tags: ["Teaching", "Deep Learning", "Computer Systems"],
  },
  {
    company: "MIT Haystack Observatory",
    role: "Research Assistant",
    logo: "/images/mit_haystack_logo.png",
    description: ["Conducted research on star formation using radio telescope data"],
    tags: ["Astrophysics", "Data Analysis", "Python"],
  },
]

export function Experience() {
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
    <section ref={sectionRef} id="experience" className="px-6 py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-chart-2/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-20">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Experience</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-accent via-chart-2 to-chart-3 rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 border-2 border-border hover:border-accent/50 group bg-card/50 backdrop-blur ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 relative flex-shrink-0 rounded-lg overflow-hidden border border-border bg-background">
                      <Image
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-lg font-semibold text-muted-foreground">
                        <Briefcase className="w-5 h-5" />
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="font-mono text-xs px-3 py-1 hover:bg-accent/20 hover:text-accent transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
