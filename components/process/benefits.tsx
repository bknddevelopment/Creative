"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const benefits = [
  "A clear, differentiated service model that sets you apart",
  "Streamlined operations that reduce costs and increase capacity",
  "Improved client satisfaction and retention rates",
  "Scalable systems that support sustainable growth",
  "Enhanced team alignment and reduced key-person risk",
  "Increased confidence in your value proposition and pricing"
]

export function Benefits() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#1a1a1a] text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              The Outcome
            </p>
            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6">
              What You&apos;ll Achieve
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Our process is designed to deliver measurable improvements across your practice,
              setting you up for sustainable growth and enhanced client relationships.
            </p>
          </motion.div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 py-4 border-b border-gray-800"
              >
                <span className="text-green-400 mt-0.5">
                  <Check className="w-5 h-5" />
                </span>
                <p className="text-gray-200">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
