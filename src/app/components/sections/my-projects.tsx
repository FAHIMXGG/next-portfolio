"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect, useRef } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  brief_description?: string;
  tech?: string[];
  challenges?: string;
  improvements?: string;
};

export function ProjectsSection() {
  const [showPagination, setShowPagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [imageLoading, setImageLoading] = useState<Record<number, boolean>>({});
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const loadedImagesRef = useRef<Set<number>>(new Set());
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      id: 4,
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
      id: 6,
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
      id: 9,
      title: "Safar",
      description:
        "Elementor template kit for travel agencies and tourism businesses.",
      image:
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA8Z5owNg6gWMN6jAs89xpfKOI1VHTmuLiF4Ghd",
      tags: ["Elementor", "WordPress", "Travel", "Tourism", "Template Kit"],
      link: "https://safar.kraito.com/",
      github: "",
    },
    {
      id: 10,
      title: "DigitalWallet",
      description:
        "DigitalWallet is a secure digital wallet with real-time transactions and role-based access.",
      brief_description:
        "DigitalWallet is a comprehensive digital wallet platform designed for seamless and secure financial operations across multiple user roles. The platform allows users to send and receive money, manage wallet balances, and track transactions. Agents can process cash-in/cash-out operations, while administrators gain full oversight of the system, including user and wallet management. The application emphasizes real-time updates, guided onboarding, and responsive design with modern UI/UX practices, combining role-based dashboards, secure JWT authentication, and efficient state management for a scalable financial ecosystem.",
      challenges:
        "Implementing multi-role authentication and RBAC, handling complex state and API integration with Redux Toolkit and RTK Query, creating interactive guided tours, balancing client-side and server-side data processing, maintaining TypeScript type safety, optimizing bundle sizes with Vite, consistent form validation with React Hook Form + Zod, and ensuring responsive UI across devices.",
      improvements:
        "Remove debug code, implement server-side filtering and sorting, standardize error handling and loading states, introduce testing infrastructure, optimize performance (memoization, virtual scrolling, lazy loading), enhance security (CSRF, CSP, input sanitization), improve accessibility (ARIA, keyboard, screen reader support), add real-time features via WebSockets, multi-language support, advanced analytics, payment gateway integration, enhanced admin features, and develop a React Native mobile app.",
      image:
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA8RTPfAzdSqs4dFgHDt6XB1wou0UaK2kcyebV9",
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
      tech: [
        "React 19",
        "TypeScript 5",
        "Vite",
        "Redux Toolkit + RTK Query",
        "Axios",
        "React Router",
        "Tailwind CSS",
        "Shadcn/ui (Radix UI)",
        "Lucide React",
        "Driver.js",
        "Sonner",
        "React Hook Form",
        "Zod",
        "input-otp",
      ],
      link: "https://ass6-digital-wallet-client.vercel.app/",
      github: "https://github.com/FAHIMXGG/ass6-digital-wallet-client",
    },
    {
      id: 11,
      title: "Portify",
      description:
        "Portify is a full-stack portfolio and blog platform with rich editing and SEO-friendly pages.",
      brief_description:
        "Portify is a modern full-stack portfolio and blogging platform designed to showcase projects, skills, and technical experience while also providing a fully functional content management system. It allows authenticated users to create, edit, publish, and manage blog posts using a rich text editor, upload optimized media assets, and control content visibility through protected admin routes. The application leverages server-side rendering, incremental static regeneration, and SEO best practices to deliver fast, scalable, and search-engine-friendly pages, making it suitable for both personal branding and professional content publishing.",
      challenges:
        "Managing JWT authentication with an external backend, handling SSR incompatibilities of rich text editors, adapting to Next.js 15 breaking changes, maintaining type safety across API boundaries, optimizing images from multiple CDNs, and ensuring reliable error handling between frontend and backend services.",
      improvements:
        "Enhance database integration, improve error handling and testing, add advanced CMS features, optimize performance and SEO, strengthen security, introduce analytics and monitoring, improve accessibility, add internationalization, and reduce dependency on the external backend API.",
      image:
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA8ckvNLc5a2XCQiLN0kJjdUvuIVY75OzDTSxAZ",
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
      tech: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "Framer Motion",
        "NextAuth.js",
        "Prisma",
        "SQLite",
        "UploadThing",
        "Quill.js",
        "Axios",
      ],
      link: "https://a7-blog.vercel.app/",
      github: "https://github.com/FAHIMXGG/a7-blog",
    },
    {
        id: 12,
      title: "CasePython",
      description:
        "CasePython is a full-stack custom e-commerce platform for designing phone cases with real-time previews and secure Stripe payments",
      brief_description:
        "CasePython is a full-stack custom e-commerce platform that allows users to design personalized phone cases by uploading images, adjusting placement in real time, selecting phone models, materials, finishes, and colors, and completing secure purchases through Stripe. The system includes a customer dashboard for order tracking, discounts, and support tickets, as well as a powerful admin panel for managing orders, users, coupons, revenue analytics, and fulfillment workflows.",
      challenges: "Complex image manipulation, Stripe webhook syncing, auth + user sync, coupon validation, configuration state management, order lifecycle handling, and type safety across stack.",
      improvements: "Fix coupon bug, add RBAC, improve error logging and performance, testing, advanced design tools, shipping integration, analytics, multi-product support, AI features, and mobile app.",
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
      tech: [
        "Next.js 14",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "Prisma",
        "PostgreSQL",
        "Clerk",
        "Stripe",
        "UploadThing",
        "Sharp",
        "React Query",
      ],
      link: "https://casepython.vercel.app/",
      github: "https://github.com/FAHIMXGG/casepython",
    },
    {
      id: 13,
      title: "Travel Buddy",
      description:
        "Travel Buddy is a full-stack travel networking platform connecting travelers through trips, profiles, and social interactions.",
      brief_description:
        "Travel Buddy is a feature-rich full-stack travel networking platform that connects travelers based on destinations, interests, and travel plans. Users can create detailed profiles, publish and join trips, write blogs, upload galleries, subscribe to premium plans, and interact socially through reviews and ratings. The platform includes advanced search, role-based admin management, secure payments, and scalable architecture designed for a global travel community.",
      challenges: "Complex auth and session sync, inconsistent backend API responses, RBAC implementation, Stripe subscription flow, rich text editor with SSR, and advanced form validation.",
      improvements: "Standardize API responses, improve testing and performance, add real-time chat and notifications, enhance security, migrate fully to PostgreSQL, add mobile app and AI-based travel matching",
      image:
        "https://nhs4sxaav5.ufs.sh/f/tl0YFFZLZVA84mt2P1chNFL5iU8vGo2xRjCadWIgzVBK0s7M",
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
      tech: [
        "Next.js 14",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "Prisma",
        "PostgreSQL",
        "Clerk",
        "Stripe",
        "UploadThing",
        "Sharp",
        "React Query",
      ],
      link: "https://a8travel-client.vercel.app/",
      github: "https://github.com/FAHIMXGG/A8travel-client",
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

  // Initialize loading state only for new projects that haven't loaded yet
  useEffect(() => {
    displayedProjects.forEach((project) => {
      if (!loadedImagesRef.current.has(project.id)) {
        setImageLoading((prev) => {
          if (prev[project.id] === undefined) {
            return { ...prev, [project.id]: true };
          }
          return prev;
        });
      }
    });
  }, [displayedProjects]);

  const handleImageLoad = (projectId: number) => {
    loadedImagesRef.current.add(projectId);
    setImageLoaded((prev) => ({ ...prev, [projectId]: true }));
    setImageLoading((prev) => ({ ...prev, [projectId]: false }));
  };

  const handleImageLoadStart = (projectId: number) => {
    // Only set loading if image hasn't been loaded before
    if (!loadedImagesRef.current.has(projectId)) {
      setImageLoading((prev) => ({ ...prev, [projectId]: true }));
    }
  };

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
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
              onClick={() => handleCardClick(project)}
              className="group rounded-lg overflow-hidden border bg-card/50 text-card-foreground shadow transition-all z-20 backdrop-blur-sm cursor-pointer"
            >
              <div className="relative overflow-hidden bg-muted">
                {imageLoading[project.id] && !imageLoaded[project.id] && (
                  <Skeleton className="w-full h-48 absolute inset-0 z-10" />
                )}
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  loading="lazy"
                  className={`w-full h-48 object-cover transition-opacity duration-300 group-hover:scale-105 ${
                    imageLoaded[project.id] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoadStart={() => handleImageLoadStart(project.id)}
                  onLoad={() => handleImageLoad(project.id)}
                  onError={() => handleImageLoad(project.id)}
                />
                <div 
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 pointer-events-none"
                >
                  <Link
                    href={project.link}
                    className="rounded-full bg-white/20 backdrop-blur-sm p-2 hover:bg-primary hover:text-white transition-colors pointer-events-auto"
                    target="blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  {project.github ? (
                    <Link
                      href={project.github}
                      className="rounded-full bg-white/20 backdrop-blur-sm p-2 hover:bg-primary hover:text-white transition-colors pointer-events-auto"
                      target="blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  ) : (
                    <div
                      className="rounded-full bg-white/10 backdrop-blur-sm p-2 text-gray-400 cursor-not-allowed pointer-events-auto"
                      title="GitHub link not available"
                    >
                      <Github className="h-5 w-5" />
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6 space-y-4">
                {imageLoading[project.id] && !imageLoaded[project.id] ? (
                  <>
                    <Skeleton className="h-7 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <div className="flex flex-wrap gap-2">
                      <Skeleton className="h-6 w-16 rounded-full" />
                      <Skeleton className="h-6 w-20 rounded-full" />
                      <Skeleton className="h-6 w-24 rounded-full" />
                    </div>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog
          open={isModalOpen}
          onOpenChange={(open) => {
            setIsModalOpen(open);
            if (!open) {
              setSelectedProject(null);
            }
          }}
        >
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-sm">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">
                      {selectedProject.brief_description ||
                        selectedProject.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {(selectedProject.tech || selectedProject.tags).map(
                        (tech) => (
                          <span
                            key={tech}
                            className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/25 text-[#9346f8]"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Links</h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Project
                      </Link>
                      {selectedProject.github && (
                        <Link
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          GitHub Repository
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Challenges */}
                  {selectedProject.challenges && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Challenges Faced While Developing the Project
                      </h3>
                      <p className="text-muted-foreground">
                        {selectedProject.challenges}
                      </p>
                    </div>
                  )}

                  {/* Improvements */}
                  {selectedProject.improvements && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Future Improvements
                      </h3>
                      <p className="text-muted-foreground">
                        {selectedProject.improvements}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

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
