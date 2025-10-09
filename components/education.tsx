"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const education = [
  {
    school: "Georgia Institute of Technology",
    degree: "Bachelor of Science in Computer Science",
    note: "Graduated in 2 years",
    logo: "/logos/gatech.jpg",
  },
  {
    school: "Georgia Institute of Technology",
    degree: "Master of Science in Computer Science",
    note: "Dropped out",
    logo: "/logos/gatech.jpg",
  },
]

export function Education() {
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
    <section ref={sectionRef} id="education" className="px-6 py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-chart-3/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-20">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Education</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-accent via-chart-2 to-chart-3 rounded-full"></div>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 border-2 border-border hover:border-accent/50 group bg-card/50 backdrop-blur ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 relative flex-shrink-0 rounded-lg overflow-hidden border border-border bg-background">
                    <Image
                      src={edu.logo || "/placeholder.svg"}
                      alt={`${edu.school} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-lg font-semibold text-muted-foreground">
                      <GraduationCap className="w-5 h-5" />
                      {edu.school}
                    </div>
                    <p className="text-muted-foreground">{edu.note}</p>
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
