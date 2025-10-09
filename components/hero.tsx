"use client"

import { Github, Linkedin, Mail, ArrowDown, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"

function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const nodes: { x: number; y: number; vx: number; vy: number }[] = []
    const nodeCount = 50

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        const dx = mouseX - node.x
        const dy = mouseY - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 150) {
          node.x -= dx * 0.01
          node.y -= dy * 0.01
        }

        ctx.beginPath()
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(99, 102, 241, 0.6)"
        ctx.fill()

        nodes.forEach((otherNode, j) => {
          if (i === j) return

          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <NeuralNetwork />

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
              <div className="space-y-4">
                <p className="text-muted-foreground font-mono text-sm tracking-wider">AI Researcher</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Ayush Patel</h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Building the future with <span className="text-foreground font-medium">Artificial Intelligence</span>{" "}
                and Machine Learning
              </p>
            </div>

            <div
              className={`space-y-4 transition-all duration-1000 delay-200 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <p className="text-muted-foreground leading-relaxed">
                Passionate about building intelligent systems to solve real problems.
                Former intern at Jane Street & Meta. 
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-4 pt-4 transition-all duration-1000 delay-400 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <Button variant="default" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#experience">Experience</a>
              </Button>
            </div>

            <div
              className={`flex gap-6 pt-6 transition-all duration-1000 delay-600 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <a
                href="https://x.com/ayushp__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/patel--ayush"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/ayushpatel-cs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:ayushpatel@gatech.edu"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right side - Headshot */}
          <div
            className={`flex justify-center md:justify-end transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="./images/headshot.png"
                alt="Professional headshot"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-2 border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
