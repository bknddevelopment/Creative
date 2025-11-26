"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ProcessCTA() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-[#1a1a1a] mb-6">
            Ready to transform
            <br />
            your practice?
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Schedule a conversation to discuss your goals and explore how
            our process can help you build the advisory practice you envision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Schedule a Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
