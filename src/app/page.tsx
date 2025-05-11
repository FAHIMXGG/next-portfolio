"use client"

import { useState, useEffect } from "react"
import { Header } from "./components/header"
import { HeroSection } from "./components/sections/hero"
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)

  // Handle scroll to update active section
  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
    }
  }

  if (!mounted) return null
  return (

    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="container mx-auto px-4 pt-24">
        <HeroSection scrollToSection={scrollToSection} />
        
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
