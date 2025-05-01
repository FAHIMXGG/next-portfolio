"use client";
import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { motion } from "framer-motion";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Disable animation below 1024px
    };

    handleResize(); // Initial check
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-[#0f1729e9] bg-[#0f1729] backdrop-blur-lg transition-all text-white">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-[#0f1729e9]">
          <div
            className={`transition-all duration-300 ${
              scrolled ? "w-0 opacity-0" : "w-auto opacity-100"
            }`}
          >
            <Link href="/" className="font-semibold">
              Logo
            </Link>
          </div>

          {isDesktop ? (
            <motion.div
              className="flex items-center space-x-4"
              initial={{ x: 0 }}
              animate={{
                x: scrolled ? "-225%" : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              <Link href="/">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#skill">Skill</Link>
              <Link href="/">Projects</Link>
            </motion.div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Skill</Link>
              <Link href="/">Projects</Link>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;