"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "./components/sections/hero";
import { AboutSection } from "./components/sections/about";
import { ProjectsSection } from "./components/sections/my-projects";
import { SkillsSection } from "./components/sections/my-skills";
import { ContactSection } from "./components/sections/contact";
import { Footer } from "./components/footer";
import { useTheme } from "next-themes";
export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  // For scroll to section functionality
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const { theme } = useTheme();

  if (!mounted) return null;
  return (
    <div
      className={`min-h-screen text-foreground overflow-x-hidden ${
        theme === "dark" ? "bg-[#040014]" : "bg-background"
      }`}
    >
      <main className="container mx-auto px-4 pt-24">
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
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
