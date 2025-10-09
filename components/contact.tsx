"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, FileText } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Contact() {
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
    <section ref={sectionRef} id="contact" className="px-6 py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-glow" />
        <div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-chart-2/10 rounded-full blur-[120px] animate-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="space-y-20">
          <div
            className={`space-y-6 text-center transition-all duration-700 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Let's Connect</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-accent via-chart-2 to-chart-3 mx-auto rounded-full"></div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, research opportunities, or collaborations in AI and machine
              learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className={`p-8 text-center space-y-6 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-3 border-2 border-accent/30 hover:border-accent group bg-card/50 backdrop-blur ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex justify-center">
                <div className="p-4 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-all group-hover:scale-110 duration-300">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-xl">Email</h3>
                <a
                  href="mailto:alex.chen@stanford.edu"
                  className="text-muted-foreground hover:text-accent transition-colors block text-base"
                >
                  alex.chen@stanford.edu
                </a>
              </div>
            </Card>

            <Card
              className={`p-8 text-center space-y-6 hover:shadow-2xl hover:shadow-chart-2/20 transition-all duration-500 hover:-translate-y-3 border-2 border-chart-2/30 hover:border-chart-2 group bg-card/50 backdrop-blur ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex justify-center">
                <div className="p-4 bg-chart-2/20 rounded-xl group-hover:bg-chart-2/30 transition-all group-hover:scale-110 duration-300">
                  <MapPin className="w-8 h-8 text-chart-2" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-xl">Location</h3>
                <p className="text-muted-foreground text-base">Stanford, CA</p>
              </div>
            </Card>

            <Card
              className={`p-8 text-center space-y-6 hover:shadow-2xl hover:shadow-chart-3/20 transition-all duration-500 hover:-translate-y-3 border-2 border-chart-3/30 hover:border-chart-3 group bg-card/50 backdrop-blur ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex justify-center">
                <div className="p-4 bg-chart-3/20 rounded-xl group-hover:bg-chart-3/30 transition-all group-hover:scale-110 duration-300">
                  <FileText className="w-8 h-8 text-chart-3" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-xl">Resume</h3>
                <a
                  href="/resume.pdf"
                  className="text-muted-foreground hover:text-accent transition-colors block text-base"
                >
                  Download PDF
                </a>
              </div>
            </Card>
          </div>

          <div
            className={`text-center pt-8 transition-all duration-700 delay-500 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 h-auto font-semibold"
            >
              <a href="mailto:alex.chen@stanford.edu">Send me a message</a>
            </Button>
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto pt-24 pb-8 relative z-10">
        <div className="border-t border-border/50 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Alex Chen. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </section>
  )
}
