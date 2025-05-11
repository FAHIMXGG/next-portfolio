"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col justify-center relative overflow-hidden">
      {/* Animated Block Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full"
        >
          {Array.from({ length: 30 }).map((_, index) => {
            // Generate random positions and sizes
            const size = Math.floor(Math.random() * 80) + 40
            const left = Math.floor(Math.random() * 100)
            const top = Math.floor(Math.random() * 100)
            const delay = Math.random() * 3
            const duration = Math.random() * 8 + 8
            const opacity = Math.random() * 0.15 + 0.05
            const rotate = Math.floor(Math.random() * 360)

            return (
              <motion.div
                key={`hero-block-${index}`}
                className="absolute rounded-md bg-primary"
                initial={{
                  width: size,
                  height: size,
                  x: `${left}%`,
                  y: `${top}%`,
                  opacity: opacity,
                  rotate: 0,
                }}
                animate={{
                  rotate: rotate,
                  opacity: [opacity, opacity * 2, opacity],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: duration,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: delay,
                }}
              />
            )
          })}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium backdrop-blur-sm">
                  Next.js Developer
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Hi, I'm <span className="text-primary">Your Name</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                Building modern web experiences with Next.js
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground max-w-lg backdrop-blur-sm bg-background/30 p-4 rounded-lg"
            >
              I specialize in creating fast, responsive, and user-friendly web applications using the latest
              technologies in the React ecosystem.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <Button onClick={() => scrollToSection("contact")}>
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => scrollToSection("projects")}>
                View Projects
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-4 pt-4"
            >
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Developer"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
