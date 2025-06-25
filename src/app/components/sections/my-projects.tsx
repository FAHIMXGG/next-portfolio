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
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export function ProjectsSection() {
  const [showPagination, setShowPagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [imageLoading, setImageLoading] = useState<Record<number, boolean>>({});

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
        "Explore chefs' recipes and save favorites in a recipe book.",
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
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA8pAOc7ldDvUhQVKfNCekItyGJwXWS2Hdxs5rT",
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
      id: 6,
      title: "CarRepairBook",
      description:
        "Car repair booking platform with admin and user dashboards.",
      image:
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA80XjQsx3pAuOtNPTFVbLHX9BzkjEfer7ndS1v",
      tags: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Tailwind CSS",
        "daisyui",
      ],
      link: "https://car-doctor-lyart.vercel.app/",
      github: "https://github.com/FAHIMXGG/car-doctor",
    },
    {
      id: 5,
      title: "BuySellCar",
      description:
        "Platform to buy, sell, and list cars with separate admin and user dashboards.",
      image:
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA8vaWXd241laORUxEAk4jgC8MKBro3yVY9iZz2",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Tailwind CSS",
        "daisyui",
      ],
      link: "https://graceful-pithivier-654561.netlify.app/",
      github: "https://github.com/FAHIMXGG/b2c-car-management",
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
      id: 7,
      title: "WebAnalyzer",
      description:
        "Tool to extract site metadata, links, images, and download them as ZIP.",
      image:
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA85kQx2jIE7myflD1Mi0jt3SR8O9kB64FGbaoh",
      tags: ["React", "Node.js", "Express.js", "Tailwind CSS", "Cheerio"],
      link: "https://web-scraping-client.vercel.app/",
      github: "https://github.com/FAHIMXGG/web-scraping-client",
    },
    {
      id: 8,
      title: "Amazon Price Tracker",
      description:
        "Tracks Amazon product prices and notifies users via email on price updates.",
      image:
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA8HML0jCExqVNMCeP7gcUO4fpwWHI0FEXzGmrA",
      tags: [
        "Next.js",
        "TypeScript",
        "Mongoose",
        "Tailwind CSS",
        "Nodemailer",
        "Axios",
      ],
      link: "https://price-tracker-wheat.vercel.app/",
      github: "https://github.com/FAHIMXGG/Price_Tracker",
    },
    {
      id: 11,
      title: "Safar",
      description:
        "Elementor template kit for travel agencies and tourism businesses.",
      image: "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA8Z5owNg6gWMN6jAs89xpfKOI1VHTmuLiF4Ghd",
      tags: ["Elementor", "WordPress", "Travel", "Tourism", "Template Kit"],
      link: "https://safar.kraito.com/",
      github: "",
    },
    {
      id: 9,
      title: "CasePython",
      description:
        "Create custom phone cases with image upload, drag-and-drop, Stripe checkout, and order tracking.",
      image:
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA8N83FG4HVCrUAi3dLK5eFGhBsnkq1Hx4tzMbg",
      tags: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "Resend",
        "Shadcn",
        "Stripe",
        "Framer Motion",
        "Dropzone",
        "Zod",
      ],
      link: "https://casepython.vercel.app/",
      github: "",
    },
    {
      id: 10,
      title: "Real estate",
      description: "Running...",
      image:
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA8aVC82URMU6o0S3kOD97NYGhZts5ujcfPm2qr",
      tags: ["Next.js", "TypeScript", "Running"],
      link: "",
      github: "",
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

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

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

  const handleImageLoad = (projectId: number) => {
    setImageLoading((prev) => ({ ...prev, [projectId]: false }));
  };

  const handleImageLoadStart = (projectId: number) => {
    setImageLoading((prev) => ({ ...prev, [projectId]: true }));
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
                {imageLoading[project.id] !== false && (
                  <Skeleton className="w-full h-48 absolute inset-0 z-[9999]" />
                )}
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  onLoadStart={() => handleImageLoadStart(project.id)}
                  onLoad={() => handleImageLoad(project.id)}
                  onError={() => handleImageLoad(project.id)}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Link
                    href={project.link}
                    className="rounded-full bg-white/20 backdrop-blur-sm p-2 hover:bg-primary hover:text-white transition-colors" target="blank"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  {project.github ? (
                    <Link
                      href={project.github}
                      className="rounded-full bg-white/20 backdrop-blur-sm p-2 hover:bg-primary hover:text-white transition-colors" target="blank"
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
                      className="inline-block px-2 py-1 text-xs font-extrabold rounded-full bg-primary/25 text-[#9346f8]"
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
      </motion.div>
    </section>
  );
}
