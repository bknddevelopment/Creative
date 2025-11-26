"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { navigationItems } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors bg-gray-200 text-black px-3 py-1.5 rounded-full hover:bg-gray-300",
                isActive ? "bg-gray-300" : "bg-gray-200"
              )}
            >
              {item.name}
            </Link>
          )
        })}
        <Button size="sm" className="bg-gray-200 text-black hover:bg-gray-300">
          Get Started
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden relative z-50 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-current origin-left transition-all"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-current"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-current origin-left transition-all"
          />
        </div>
      </button>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed md:hidden top-0 right-0 bottom-0 w-full bg-white z-40 pt-24 px-6"
      >
        <nav className="flex flex-col space-y-4">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-medium transition-colors bg-gray-200 text-black px-4 py-2 rounded-full hover:bg-gray-300 inline-block",
                  isActive ? "bg-gray-300" : "bg-gray-200"
                )}
              >
                {item.name}
              </Link>
            )
          })}
          <Button size="lg" className="mt-8 w-full bg-gray-200 text-black hover:bg-gray-300">
            Get Started
          </Button>
        </nav>
      </motion.div>
    </>
  )
}