"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Github,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ProjectsSection() {
  const [showPagination, setShowPagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const projects = [
    {
      id: 1,
      title: "DaimJobHub",
      description:
        "Job platform with 'Apply Now' and application tracking dashboard.",
      image:
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA8nyFwH3COoKCvjI2WEYb0uAFtGeahRfU5lTpr",
      tags: ["React", "Tailwind CSS", "Flowbite"],
      link: "https://imaginative-biscotti-36f3c1.netlify.app/",
      github: "https://github.com/FAHIMXGG/job-hub",
    },
    {
      id: 2,
      title: "Seoul Garden",
      description:
        "Explore chefs’ recipes and save favorites in a recipe book.",
      image:
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA8zF7iBP3fd2ZgbTxyeN5UHVGuIRSmCLv6FtYa",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Tailwind CSS",
        "Flowbite",
      ],
      link: "https://ass-10-eb539.web.app/",
      github: "https://github.com/FAHIMXGG/ass-10-chef-clint--",
    },
    {
      id: 3,
      title: "PlayfulParadise",
      description:
        "Users can add, remove, and manage toys via personal and public dashboards.",
      image:
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA8pAOc7ldDvUhQVKfNCekItyGJwXWS2Hdxs5rT", // Replace with actual image URL
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Tailwind CSS",
        "Flowbite",
      ],
      link: "https://ass-11-toys.web.app/",
      github: "https://github.com/FAHIMXGG/Ass11-toymarket",
    },

    {
      id: 4,
      title: "ThePencilPalette",
      description:
        "Platform for drawing courses with dashboards for admin, instructors, and users.",
      image:
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA8X28pEGTEzoByqxHPW8OmCYFQg2AV0di9DpaL",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Tailwind CSS",
        "daisyui",
        "Stripe",
      ],
      link: "https://ass-12-d2ded.web.app/",
      github: "https://github.com/FAHIMXGG/The_Pencil_Palette",
    },
    {
      id: 5,
      title: "BuySellCar",
      description:
        "Platform to buy, sell, and list cars with separate admin and user dashboards.",
      image: "",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Tailwind CSS",
        "daisyui",
      ],
      link: "#",
      github: "",
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media management and analytics platform",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Prisma", "tRPC", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      id: 7,
      title: "Cryptocurrency Tracker",
      description:
        "A real-time cryptocurrency price tracking and portfolio management app",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Redux", "CoinGecko API", "Chart.js"],
      link: "#",
      github: "#",
    },
    {
      id: 8,
      title: "Recipe Sharing Platform",
      description:
        "A community-driven platform for sharing and discovering recipes",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "MongoDB", "Cloudinary", "NextAuth"],
      link: "#",
      github: "#",
    },
    {
      id: 9,
      title: "Fitness Tracking App",
      description:
        "A comprehensive fitness tracking application with workout plans",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React Native", "SQLite", "Redux", "Expo"],
      link: "#",
      github: "#",
    },
    {
      id: 10,
      title: "Online Learning Platform",
      description: "An interactive online learning platform with video courses",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Supabase", "Stripe", "Video.js"],
      link: "#",
      github: "#",
    },
    {
      id: 11,
      title: "Chat Application",
      description:
        "A real-time chat application with file sharing and group chats",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Socket.io", "Node.js", "MongoDB", "React"],
      link: "#",
      github: "#",
    },
    {
      id: 12,
      title: "Portfolio Website",
      description: "A modern portfolio website with animations and dark mode",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS", "MDX"],
      link: "#",
      github: "#",
    },
    {
      id: 13,
      title: "Inventory Management System",
      description:
        "A comprehensive inventory tracking system for small businesses",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MySQL", "Express"],
      link: "#",
      github: "#",
    },
    {
      id: 14,
      title: "Music Streaming App",
      description: "A Spotify-like music streaming application with playlists",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Web Audio API", "Firebase", "Styled Components"],
      link: "#",
      github: "#",
    },
    {
      id: 15,
      title: "Travel Booking Platform",
      description:
        "A full-featured travel booking platform with payment integration",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      link: "#",
      github: "#",
    },
    {
      id: 16,
      title: "Code Editor",
      description:
        "A web-based code editor with syntax highlighting and themes",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Monaco Editor", "WebSockets", "Node.js"],
      link: "#",
      github: "#",
    },
    {
      id: 17,
      title: "Event Management System",
      description: "A comprehensive event planning and management platform",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Vue.js", "Laravel", "MySQL", "Bootstrap"],
      link: "#",
      github: "#",
    },
    {
      id: 18,
      title: "Blog CMS",
      description:
        "A headless CMS for managing blog content with rich text editor",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Sanity", "GraphQL", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
  ];

  // Function to handle "View More" button click
  const handleViewMore = () => {
    setShowPagination(true);
    setCurrentPage(1);
  };

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // Get projects to display
  const getDisplayedProjects = () => {
    if (!showPagination) {
      // Initially show first 3 projects
      return projects.reverse().slice(0, 3);
    }

    // In pagination mode: show 6 per page from ALL projects (don't skip first 3)
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // console.log("Pagination Debug:", {
    //   totalProjects: projects.length,
    //   currentPage,
    //   itemsPerPage,
    //   startIndex,
    //   endIndex,
    //   slicedProjects: projects.slice(startIndex, endIndex).length,
    //   projectIds: projects.slice(startIndex, endIndex).map((p) => p.id),
    // })

    return projects.reverse().slice(startIndex, endIndex);
  };

  const displayedProjects = getDisplayedProjects();

  // Pagination handlers
  const goToPage = (page: number) => {
    console.log("goToPage called with:", page);
    setCurrentPage(page);
  };

  const goToPrevious = () => {
    console.log("goToPrevious called, current page:", currentPage);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    console.log(
      "goToNext called, current page:",
      currentPage,
      "total pages:",
      totalPages
    );
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
              className="group rounded-lg overflow-hidden border bg-card/50 text-card-foreground shadow transition-all z-20 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
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
                    className="rounded-full bg-white/20 backdrop-blur-sm p-2 hover:bg-primary hover:text-white transition-colors"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  {project.github ? (
                    <Link
                      href={project.github}
                      className="rounded-full bg-white/20 backdrop-blur-sm p-2 hover:bg-primary hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  ) : (
                    <div
                      className="rounded-full bg-white/10 backdrop-blur-sm p-2 text-gray-400 cursor-not-allowed"
                      title="GitHub link not available"
                    >
                      <Github className="h-5 w-5" />
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs font-bold rounded-full bg-primary/25 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button or Pagination */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {!showPagination ? (
            <Button
              variant="outline"
              size="lg"
              onClick={handleViewMore}
              className="z-30 backdrop-blur-sm bg-card/40 relative group overflow-hidden hover:bg-card/60"
            >
              <motion.div
                className="flex items-center justify-center"
                whileTap={{ y: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                View More Projects{" "}
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </motion.div>
            </Button>
          ) : (
            <div className="flex items-center space-x-2 z-30 relative">
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log("Previous clicked, current page:", currentPage);
                  goToPrevious();
                }}
                disabled={currentPage === 1}
                className="backdrop-blur-sm bg-card/40 hover:bg-card/60 cursor-pointer"
                style={{ pointerEvents: "auto" }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log(
                        "Page clicked:",
                        page,
                        "current page:",
                        currentPage
                      );
                      goToPage(page);
                    }}
                    className={`backdrop-blur-sm cursor-pointer ${
                      currentPage === page
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-card/40 hover:bg-card/60"
                    }`}
                    style={{ pointerEvents: "auto" }}
                  >
                    {page}
                  </Button>
                )
              )}

              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log(
                    "Next clicked, current page:",
                    currentPage,
                    "total pages:",
                    totalPages
                  );
                  goToNext();
                }}
                disabled={currentPage === totalPages}
                className="backdrop-blur-sm bg-card/40 hover:bg-card/60 cursor-pointer"
                style={{ pointerEvents: "auto" }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </motion.div>

        {/* Page Info */}
        {showPagination && (
          <motion.div
            className="text-center text-sm text-muted-foreground z-30 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, projects.length)} of{" "}
            {projects.length} projects
            <br />
            <span className="text-xs">
              Current Page: {currentPage} | Total Pages: {totalPages} | Items
              per page: {itemsPerPage}
            </span>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
