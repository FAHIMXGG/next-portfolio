"use client"

import { useState, useEffect } from "react"
import { Header } from "./header"

export function HeaderWrapper() {
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

  return <Header activeSection={activeSection} scrollToSection={scrollToSection} />
}
