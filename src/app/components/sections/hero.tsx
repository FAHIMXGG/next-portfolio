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
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold backdrop-blur-sm">
                  Next.js Developer
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Hi, I'm <span className="text-primary">Ahasanul Haque</span>
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
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/100 to-primary/50 animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <Image
                src="/profile/profile.png"
                alt="Developer"
                width={370}
                height={370}
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
