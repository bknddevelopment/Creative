"use client"

import { motion } from "framer-motion"

export function ProcessHero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Our Process
          </p>
          <h1 className="text-[clamp(40px,5.5vw,72px)] font-medium leading-[1.1] tracking-tight text-[#1a1a1a] mb-6">
            Go from Improvised
            <br />
            to Intentional
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
            Transform your advisory practice with a systematic approach that aligns your services,
            team, and technology around delivering exceptional client experiences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
