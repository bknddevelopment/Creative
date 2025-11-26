"use client"

import { motion } from "framer-motion"

const workshops = [
  {
    number: "Workshop 1",
    title: "Planning Style Discovery",
    description: "Uncover your firm's unique approach to financial planning and client relationships through guided exercises and discussion."
  },
  {
    number: "Workshop 2",
    title: "Service Model Design",
    description: "Design your ideal client experience, mapping out touchpoints, deliverables, and the systems needed to support them."
  },
  {
    number: "Workshop 3",
    title: "Action Planning",
    description: "Prioritize initiatives and create a realistic implementation roadmap with clear milestones and accountability measures."
  }
]

export function TwoStageSystem() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            How We Work
          </p>
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#1a1a1a]">
            A Two-Stage System for
            <br />
            Lasting Transformation
          </h2>
        </motion.div>

        {/* Stage 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium bg-[#1a1a1a] text-white px-4 py-1.5 rounded-full">
              Stage 1
            </span>
            <h3 className="text-2xl font-medium text-[#1a1a1a]">Discovery & Design</h3>
          </div>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Three intensive workshops over 6-8 weeks to understand your current state,
            design your ideal future, and create a roadmap to get there.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAFAFA] p-8 rounded-lg"
              >
                <span className="text-sm text-gray-500 mb-3 block">{workshop.number}</span>
                <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">{workshop.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{workshop.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stage 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium bg-[#1a1a1a] text-white px-4 py-1.5 rounded-full">
              Stage 2
            </span>
            <h3 className="text-2xl font-medium text-[#1a1a1a]">Implementation & Support</h3>
          </div>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Ongoing partnership to ensure successful execution of your transformation roadmap,
            with regular check-ins and adaptive guidance.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FAFAFA] p-8 rounded-lg"
            >
              <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">Weekly Implementation Calls</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Regular touchpoints to track progress, troubleshoot challenges,
                and ensure momentum on your transformation journey.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#FAFAFA] p-8 rounded-lg"
            >
              <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">Quarterly Strategic Reviews</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deep-dive sessions to assess progress, celebrate wins,
                and recalibrate priorities based on evolving business needs.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
