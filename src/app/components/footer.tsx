"use client"

import { Code, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import BlackHole from "./blackhole"

export function Footer() {
  return (
    <footer>
    <div className="flex fle-col justify-center"
    ><BlackHole/></div>
    
    <div className="border-t relative bg-card/90 z-20 backdrop-blur-sm mt-[-188px] h-[190px]">
      <div className="container mx-auto px-4 py-8 relative ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            <span className="font-bold">
              Dev<span className="text-primary">Portfolio</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ahasanul Haque. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}
