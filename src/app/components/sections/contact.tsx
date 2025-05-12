"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, Github, Linkedin, Loader2, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

// Form submission status type
type FormStatus = "idle" | "submitting" | "success" | "error"

// Form data type
type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactSection() {
  // Form state
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({})

  // Form input change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  // Form validation
  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email"
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Form submission handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setFormStatus("submitting")

    // Simulate API call with timeout
    try {
      // In a real app, you would send the form data to your API here
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setFormStatus("success")

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 3000)
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus("error")

      // Reset error state after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 3000)
    }
  }

  return (
    <section id="contact" className=" relative overflow-hidden">
      {/* Animated Block Background for Contact Section */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-full"
        >
          {Array.from({ length: 40 }).map((_, index) => {
            // Generate random positions and sizes
            const size = Math.floor(Math.random() * 50) + 15
            const left = Math.floor(Math.random() * 100)
            const top = Math.floor(Math.random() * 100)
            const delay = Math.random() * 5
            const duration = Math.random() * 8 + 8
            const opacity = Math.random() * 0.05 + 0.02
            const rotate = Math.floor(Math.random() * 360)

            return (
              <motion.div
                key={`contact-block-${index}`}
                className="absolute rounded-md bg-primary"
                initial={{
                  width: size,
                  height: size,
                  x: `${left}%`,
                  y: `${top}%`,
                  opacity: opacity,
                  rotate: 0,
                }}
                animate={{
                  rotate: rotate,
                  opacity: [opacity, opacity * 2, opacity],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: duration,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: delay,
                }}
              />
            )
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12 relative z-10"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 bg-background/80 backdrop-blur-sm p-6 rounded-lg border shadow-sm"
          >
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-muted-foreground">
              Feel free to reach out to me through any of the following channels. I'm always open to discussing new
              projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">hello@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-muted-foreground">linkedin.com/in/yourname</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-muted-foreground">github.com/yourname</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 bg-background/80 backdrop-blur-sm p-6 rounded-lg border shadow-sm relative"
          >
            <h3 className="text-2xl font-bold">Send Me a Message</h3>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md bg-background transition-colors ${
                      formErrors.name ? "border-destructive" : "focus:border-primary"
                    }`}
                    disabled={formStatus === "submitting" || formStatus === "success"}
                  />
                  {formErrors.name && <p className="text-xs text-destructive mt-1">{formErrors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md bg-background transition-colors ${
                      formErrors.email ? "border-destructive" : "focus:border-primary"
                    }`}
                    disabled={formStatus === "submitting" || formStatus === "success"}
                  />
                  {formErrors.email && <p className="text-xs text-destructive mt-1">{formErrors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md bg-background transition-colors ${
                    formErrors.subject ? "border-destructive" : "focus:border-primary"
                  }`}
                  disabled={formStatus === "submitting" || formStatus === "success"}
                />
                {formErrors.subject && <p className="text-xs text-destructive mt-1">{formErrors.subject}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md bg-background resize-none transition-colors ${
                    formErrors.message ? "border-destructive" : "focus:border-primary"
                  }`}
                  disabled={formStatus === "submitting" || formStatus === "success"}
                />
                {formErrors.message && <p className="text-xs text-destructive mt-1">{formErrors.message}</p>}
              </div>
              <Button
                type="submit"
                className="w-full group"
                disabled={formStatus === "submitting" || formStatus === "success"}
              >
                {formStatus === "idle" && (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                {formStatus === "submitting" && (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                )}
                {formStatus === "success" && (
                  <>
                    <Check className="mr-2 h-4 w-4" /> Sent Successfully
                  </>
                )}
                {formStatus === "error" && (
                  <>
                    Try Again <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            {/* Success Animation Overlay */}
            <AnimatePresence>
              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", damping: 15, stiffness: 300 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm rounded-lg z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, times: [0, 0.6, 1] }}
                    className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4"
                  >
                    <motion.div
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-primary"
                    >
                      <svg
                        className="w-10 h-10 stroke-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="text-xl font-bold mb-2"
                  >
                    Message Sent!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="text-muted-foreground text-center max-w-xs"
                  >
                    Thank you for reaching out. I'll get back to you as soon as possible!
                  </motion.p>

                  {/* Animated particles */}
                  {Array.from({ length: 20 }).map((_, i) => {
                    const size = Math.random() * 8 + 4
                    const angle = Math.random() * Math.PI * 2
                    const distance = Math.random() * 100 + 50
                    const x = Math.cos(angle) * distance
                    const y = Math.sin(angle) * distance
                    const delay = Math.random() * 0.2

                    return (
                      <motion.div
                        key={`particle-${i}`}
                        initial={{
                          x: 0,
                          y: 0,
                          opacity: 1,
                          scale: 0,
                        }}
                        animate={{
                          x: x,
                          y: y,
                          opacity: 0,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.3 + delay,
                          ease: "easeOut",
                        }}
                        className="absolute top-1/2 left-1/2 rounded-full bg-primary"
                        style={{
                          width: size,
                          height: size,
                        }}
                      />
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Message */}
            <AnimatePresence>
              {formStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3 rounded-md bg-destructive/10 text-destructive text-sm mt-4"
                >
                  There was an error sending your message. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
