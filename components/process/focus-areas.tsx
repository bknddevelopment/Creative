"use client"

import { motion } from "framer-motion"
import {
  Calendar,
  Users,
  FileText,
  Monitor,
  Clock,
  Settings,
  Star,
  DollarSign,
  ArrowRight
} from "lucide-react"

const focusAreas = [
  {
    icon: Calendar,
    number: "01",
    title: "Service Calendar",
    description: "Transition from ad-hoc client engagement to a structured, iterative service calendar that ensures consistent value delivery throughout the year."
  },
  {
    icon: Users,
    number: "02",
    title: "Client Segmentation",
    description: "Develop a clear understanding of your client base to ensure services and resources are appropriately aligned with client needs and firm capacity."
  },
  {
    icon: FileText,
    number: "03",
    title: "Client Deliverables",
    description: "Create tangible outputs that reinforce your value, from comprehensive financial plans to quarterly reviews and annual summaries."
  },
  {
    icon: Monitor,
    number: "04",
    title: "Tech Stack",
    description: "Build an integrated platform that reduces friction, eliminates redundancy, and creates a seamless experience for both your team and clients."
  },
  {
    icon: Clock,
    number: "05",
    title: "Institutionalized Advice",
    description: "Implement planning tools and processes that capture your firm's collective wisdom, ensuring consistent advice delivery across your team."
  },
  {
    icon: Settings,
    number: "06",
    title: "Operating System",
    description: "Establish standardized processes for every aspect of client service, from onboarding to ongoing relationship management."
  },
  {
    icon: Star,
    number: "07",
    title: "Value Proposition",
    description: "Articulate and demonstrate how your ongoing advice creates lasting impact, moving beyond product placement to comprehensive wealth management."
  },
  {
    icon: DollarSign,
    number: "08",
    title: "Fee Structure",
    description: "Optimize your pricing model to reflect the true value of your services while remaining competitive and sustainable for long-term growth."
  }
]

export function FocusAreas() {
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
            What We Focus On
          </p>
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#1a1a1a]">
            Eight Core Areas of
            <br />
            Practice Optimization
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#FAFAFA] p-8 lg:p-10 rounded-lg border border-gray-200/50 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E5E3DE] text-gray-700">
                  <area.icon className="w-5 h-5" />
                </div>
                <span className="text-sm text-gray-400 font-medium">{area.number}</span>
              </div>
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-3 flex items-center gap-2 group-hover:gap-3 transition-all">
                {area.title}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
