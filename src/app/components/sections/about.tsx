"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Code, Layers, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey, experience, and passion for web development
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-[400px] rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden z-10 backdrop-blur-sm"
          >
            {/* Animated Code Editor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute top-8 left-8 right-8 bottom-8 bg-card/80 rounded-lg shadow-lg overflow-hidden border backdrop-blur-sm"
            >
              <div className="bg-muted p-2 flex items-center gap-2 border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <div className="text-xs text-muted-foreground ml-2">
                  developer-portfolio.tsx
                </div>
              </div>
              <div className="p-4 font-mono text-sm overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-muted-foreground"
                >
                  <span className="text-blue-500">import</span>{" "}
                  {" { useState, useEffect } "}{" "}
                  <span className="text-blue-500">from</span>{" "}
                  <span className="text-green-500">"react"</span>;
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="text-muted-foreground mt-2"
                >
                  <span className="text-blue-500">import</span> {" { motion } "}{" "}
                  <span className="text-blue-500">from</span>{" "}
                  <span className="text-green-500">"framer-motion"</span>;
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-muted-foreground mt-4"
                >
                  <span className="text-purple-500">const</span>{" "}
                  <span className="text-yellow-500">Portfolio</span> = () {"{"}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="text-muted-foreground mt-2 ml-4"
                >
                  <span className="text-purple-500">const</span> [
                  <span className="text-yellow-500">projects</span>,{" "}
                  <span className="text-yellow-500">setProjects</span>] ={" "}
                  <span className="text-yellow-500">useState</span>([]);
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="text-muted-foreground mt-4 ml-4"
                >
                  <span className="text-purple-500">return</span> (
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="text-muted-foreground mt-2 ml-8"
                >
                  {'<div className="portfolio">'}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                  className="text-muted-foreground mt-2 ml-12"
                >
                  {"<h1>My Amazing Work</h1>"}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                  className="text-muted-foreground mt-2 ml-8"
                >
                  {"</div>"}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                  className="text-muted-foreground mt-2 ml-4"
                >
                  );
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.6 }}
                  className="text-muted-foreground mt-2"
                >
                  {"};"}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.8 }}
                  className="text-muted-foreground mt-4"
                >
                  <span className="text-blue-500">export</span>{" "}
                  <span className="text-blue-500">default</span>{" "}
                  <span className="text-yellow-500">Portfolio</span>;
                </motion.div>

                {/* Animated cursor */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                  }}
                  className="w-2 h-5 bg-primary inline-block ml-1 mt-2"
                />
              </div>
            </motion.div>

            {/* Floating tech icons */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              }}
              className="absolute top-12 right-12 bg-card p-2 rounded-full shadow-lg border"
            >
              <div className="text-primary text-xl font-bold">⚛️</div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                transition: {
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                },
              }}
              className="absolute bottom-12 left-12 bg-card p-2 rounded-full shadow-lg border"
            >
              <div className="text-primary text-xl font-bold">🚀</div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -15, 0],
                transition: {
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                },
              }}
              className="absolute bottom-24 right-24 bg-card p-2 rounded-full shadow-lg border"
            >
              <div className="text-primary text-xl font-bold">💻</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">My Background</h3>
            <p className="text-muted-foreground">
              I'm a passionate Next.js developer with 2+ years of experience
              building modern web applications. I specialize in creating fast,
              responsive, and user-friendly interfaces that provide exceptional
              user experiences.
            </p>
            <p className="text-muted-foreground">
              My journey in web development started with HTML, CSS, and
              JavaScript, and I've since evolved to embrace modern frameworks
              and tools like React, Next.js, and TypeScript. I'm constantly
              learning and adapting to new technologies to stay at the forefront
              of web development.
            </p>

            {/* Animated timeline */}
            <div className="pt-6">
              <h4 className="font-medium mb-4">My Journey</h4>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-primary/0 before:h-full">
                {[
                  {
                    year: "2016",
                    title: "Started Web Development",
                    description:
                      "Began my journey with HTML, CSS, and JavaScript fundamentals. Built my first static websites and discovered my passion for creating on the web.",
                    icon: "Code",
                    delay: 0.3,
                  },
                  {
                    year: "2019",
                    title: "Learned Wordpress",
                    description:
                      "Built and customized responsive websites using WordPress and Elementor. Developed dynamic eCommerce sites with WooCommerce, focusing on user experience, product flow, and conversion optimization. Completed personal and client projects, including custom theme styling and plugin integration.",
                    icon: "Layers",
                    delay: 0.5,
                  },
                  {
                    year: "2023",
                    title: "Learned React",
                    description:
                      "Dove into React ecosystem and component-based architecture. Completed several personal projects and contributed to open source.",
                    icon: "Zap",
                    delay: 0.7,
                  },
                  {
                    year: "2023",
                    title: "Web Development Intern",
                    description:
                      "Worked as a MERN stack and WordPress developer. Contributed to full-stack features using MongoDB, Express, React, and Node.js, and built custom websites with WordPress and Elementor. Gained hands-on experience with WooCommerce and plugin customization.",
                    icon: "Award",
                    delay: 1.1,
                  },
                  {
                    year: "2024",
                    title: "Freelance Developer",
                    description:
                      "Started freelancing for clients worldwide. Delivered e-commerce sites, dashboards, and custom web applications for various industries.",
                    icon: "Briefcase",
                    delay: 1.1,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: item.delay }}
                    viewport={{ once: true }}
                    className="relative flex items-start gap-4 ml-2 "
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -50 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                        delay: item.delay + 0.2,
                      }}
                      viewport={{ once: true }}
                      className="relative flex items-center justify-center "
                    >
                      <div className="h-10 w-10 rounded-full border-2 border-primary bg-background flex items-center justify-center z-10">
                        <span className="text-xs font-bold">{item.year}</span>
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: item.delay + 0.4 }}
                        viewport={{ once: true }}
                        className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary z-20 "
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: item.delay + 0.3 }}
                      viewport={{ once: true }}
                      className="pt-1 border rounded-lg p-4 shadow-sm w-full relative bg-slate-950/10 backdrop-blur-sm z-10"
                      whileHover={{
                        y: -5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="absolute -left-2 top-5 w-0 h-0 border-t-8 border-r-8 border-b-0 border-l-0 border-r-card border-t-transparent" />
                      <div className="flex justify-between items-start">
                        <h5 className="font-bold text-lg">{item.title}</h5>
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                          className="p-2 rounded-full bg-primary/10 text-primary"
                        >
                          {item.icon === "Code" && <Code className="h-4 w-4" />}
                          {item.icon === "Layers" && (
                            <Layers className="h-4 w-4" />
                          )}
                          {item.icon === "Zap" && <Zap className="h-4 w-4" />}
                          {item.icon === "Briefcase" && (
                            <Briefcase className="h-4 w-4" />
                          )}
                          {item.icon === "Award" && (
                            <Award className="h-4 w-4" />
                          )}
                        </motion.div>
                      </div>
                      <p className="text-muted-foreground text-sm mt-2">
                        {item.description}
                      </p>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: item.delay + 0.5 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-gradient-to-r from-primary/50 to-primary/0 mt-3"
                      />
                      {index < 4 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            delay: item.delay + 0.7,
                          }}
                          viewport={{ once: true }}
                          className="absolute -bottom-4 right-8 h-8 w-8 flex items-center justify-center"
                        >
                          <div className="h-3 w-3 bg-primary/30 rounded-full animate-ping absolute" />
                          <div className="h-2 w-2 bg-primary rounded-full" />
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 bg">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg border bg-card/10 z-10 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg border bg-card/10 z-10 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg border bg-/10 z-10 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg border bg-/10 z-10 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-primary">12+</div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
