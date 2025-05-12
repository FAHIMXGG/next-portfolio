"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "./components/sections/hero"
import { AboutSection } from "./components/sections/about"
export default function Portfolio() {
   const [mounted, setMounted] = useState(false)

  // For scroll to section functionality
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (

    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 pt-24">
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection/>
      </main>
    </div>
    // <div className="bg-slate-50">
    //   <div className="text-white">
    //     <Cover />
    //     <Skills/>
    //     <Projects/>
    //   </div>
    // </div>
  );
}
