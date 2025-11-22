"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { fadeUp, staggerContainer } from "@/lib/animations"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/10 via-brand-purple/10 to-brand-green/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-coral/20 via-transparent to-transparent" />

        {/* Animated mesh gradient circles */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-coral/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl"
        />
      </div>

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block px-4 py-2 bg-brand-coral/10 text-brand-coral rounded-full text-sm font-medium">
              Plan → Execute → Deliver
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-display-1 font-bold mb-6 leading-tight"
          >
            Project Excellence,
            <br />
            <span className="text-gradient">Operational Clarity</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            We transform complex initiatives into successful outcomes.
            From blueprint to launch, we&apos;re your partner in project and operations excellence.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="xl" variant="gradient">
              Get Your Blueprint
            </Button>
            <Button size="xl" variant="outline">
              Explore Services
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeUp}
            className="mt-20 pt-20 border-t border-gray-200"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-brand-coral">150+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-purple">98%</div>
                <div className="text-sm text-gray-600">On-Time Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-green">6+</div>
                <div className="text-sm text-gray-600">Years Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">$50M+</div>
                <div className="text-sm text-gray-600">Projects Managed</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}