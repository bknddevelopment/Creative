"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { portfolioItems, portfolioCategories, type PortfolioCategory } from "@/lib/constants"
import { fadeUp, scaleIn, staggerContainer, staggerItem } from "@/lib/animations"
import { cn } from "@/lib/utils"

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>("All")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <div className="pt-32 pb-24">
      <Container>
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-display-2 font-bold mb-4">
            Our <span className="text-gradient">Work</span>
          </h1>
          <p className="text-xl text-gray-600">
            Explore our portfolio of transformative projects that have helped businesses
            achieve their creative vision and business goals.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                selectedCategory === category
                  ? "bg-gradient-to-r from-brand-coral to-brand-purple text-white shadow-lg"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-brand-coral hover:text-brand-coral"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid - Masonry Layout */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                variants={scaleIn}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={cn(
                  "relative group",
                  index % 5 === 0 && "lg:col-span-2", // Make some items larger
                  index % 7 === 0 && "lg:row-span-2"
                )}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={`/work/${item.slug}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                    <div className={cn(
                      "relative",
                      index % 5 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                    )}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        style={{
                          filter: hoveredItem === item.id ? "grayscale(0)" : "grayscale(100%)",
                        }}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono text-brand-coral">
                            {item.category}
                          </span>
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-200 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-24 py-16 bg-gradient-to-r from-brand-coral/5 via-brand-purple/5 to-brand-green/5 rounded-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div variants={staggerItem}>
              <div className="text-4xl font-bold text-brand-coral mb-2">100+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="text-4xl font-bold text-brand-purple mb-2">50+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="text-4xl font-bold text-brand-green mb-2">15+</div>
              <div className="text-sm text-gray-600">Industry Awards</div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="text-4xl font-bold text-brand-blue mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate on your next project and bring your vision to life.
          </p>
          <Button size="xl" variant="gradient">
            Start Your Project
          </Button>
        </motion.div>
      </Container>
    </div>
  )
}