"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Navigation } from "./navigation"

export function Header() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-brand-coral rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-coral via-brand-purple to-brand-green rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">
              Sincerely Creative
            </span>
          </Link>
          <Navigation />
        </div>
      </Container>
    </motion.header>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}