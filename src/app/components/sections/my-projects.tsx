"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  // Projects data
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with Next.js, Stripe, and Supabase",
      image: "/e1.jpg",
      tags: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered application that generates content using OpenAI's GPT-4",
      image: "/e1.jpg",
      tags: ["React", "Node.js", "OpenAI", "MongoDB"],
      link: "#",
      github: "#",
    },
    {
      title: "Real-time Dashboard",
      description: "A real-time analytics dashboard with WebSockets and data visualization",
      image: "/e1.jpg",
      tags: ["Next.js", "Socket.io", "D3.js", "PostgreSQL"],
      link: "#",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
              className="group rounded-lg overflow-hidden border bg-card/50 text-card-foreground shadow transition-all z-20 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden bg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Link
                    href={project.link}
                    className="rounded-full bg-white p-2 hover:bg-primary hover:text-white transition-colors"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href={project.github}
                    className="rounded-full bg-white p-2 hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" size="lg" className="z-20 backdrop-blur-sm bg-card/40 relative">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
