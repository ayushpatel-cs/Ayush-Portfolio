"use client"

import { Card } from "@/components/ui/card"
import { Brain, Code2, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function About() {
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
    <section ref={sectionRef} id="about" className="px-6 py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl animate-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-20">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-chart-2 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div
              className={`space-y-8 transition-all duration-700 delay-200 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
            >
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
                I&apos;m a third-year <span className="text-accent font-semibold">Computer Science student</span> at Stanford
                University, specializing in Artificial Intelligence.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently researching deep learning architectures at the{" "}
                <span className="text-foreground font-medium">Stanford AI Lab</span>, focusing on transformer models and
                their applications in computer vision. I&apos;m also a teaching assistant for CS229: Machine Learning.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I&apos;m not coding, you&apos;ll find me contributing to open-source AI projects, reading research papers, or
                exploring the latest developments in generative AI.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-chart-2">3</div>
                  <div className="text-sm text-muted-foreground">Publications</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-chart-3">2k+</div>
                  <div className="text-sm text-muted-foreground">GitHub Stars</div>
                </div>
              </div>
            </div>

            <div
              className={`space-y-6 transition-all duration-700 delay-400 ${
                isVisible ? "animate-slide-in-right" : "opacity-0"
              }`}
            >
              <Card className="p-8 space-y-4 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all">
                    <Brain className="w-7 h-7 text-accent" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-bold text-xl">AI Research</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Deep learning, NLP, computer vision, and reinforcement learning
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg hover:shadow-chart-2/10 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-chart-2/10 rounded-lg group-hover:bg-chart-2/20 transition-all">
                    <Code2 className="w-7 h-7 text-chart-2" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-bold text-xl">Development</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Python, PyTorch, TensorFlow, React, Node.js, and cloud platforms
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg hover:shadow-chart-3/10 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-chart-3/10 rounded-lg group-hover:bg-chart-3/20 transition-all">
                    <Sparkles className="w-7 h-7 text-chart-3" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-bold text-xl">Interests</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Generative AI, ethical AI, MLOps, and AI for social good
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
