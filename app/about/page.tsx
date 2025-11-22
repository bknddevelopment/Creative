"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { teamMembers, companyMilestones } from "@/lib/constants"
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations"

export default function AboutPage() {
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
            About <span className="text-gradient">project</span>
          </h1>
          <p className="text-xl text-gray-600">
            We&apos;re a team of project managers, operations specialists, and strategic consultants passionate about
            transforming complex initiatives into successful outcomes that drive measurable results.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To simplify complexity through expert project management and operational excellence, delivering
              solutions that transform ambitious initiatives into measurable success.
            </p>
            <p className="text-gray-600">
              We believe in the power of structured processes, transparent communication, and
              strategic execution. Every project is an opportunity to demonstrate how proper
              planning and management drives exceptional outcomes.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-16 h-16 bg-brand-coral/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-gray-600">
                Every decision is backed by data and aligned with measurable project outcomes.
              </p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Operational Excellence</h3>
              <p className="text-gray-600">
                We optimize processes and workflows to deliver maximum efficiency and quality.
              </p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">True Partnership</h3>
              <p className="text-gray-600">
                Your success is our success. We integrate seamlessly as an extension of your team.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                className="group"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-brand-coral text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {companyMilestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex items-start mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <span className="text-brand-coral font-bold">{milestone.year}</span>
                </div>
                <div className="relative flex-grow pl-8 pb-8 last:pb-0">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-brand-coral rounded-full" />
                  {index !== companyMilestones.length - 1 && (
                    <div className="absolute left-1.5 top-5 bottom-0 w-px bg-gray-300" />
                  )}
                  <h3 className="font-semibold text-lg mb-1">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Section */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center py-16 bg-gradient-to-r from-brand-coral/10 via-brand-purple/10 to-brand-green/10 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the organizations that trust us with their most critical initiatives.
            Let&apos;s turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="gradient">
              Get Your Blueprint
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}