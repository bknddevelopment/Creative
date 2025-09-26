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
              Strategy → Design → Success
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-display-1 font-bold mb-6 leading-tight"
          >
            Creative Solutions,
            <br />
            <span className="text-gradient">Sincere Results</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            We transform ambitious ideas into exceptional digital experiences.
            From strategy to execution, we&apos;re your creative partner for growth.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="xl" variant="gradient">
              Start Your Project
            </Button>
            <Button size="xl" variant="outline">
              View Our Work
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeUp}
            className="mt-20 pt-20 border-t border-gray-200"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-brand-coral">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-purple">100+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-green">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue">15+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}