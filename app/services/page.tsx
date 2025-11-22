"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { serviceTiers } from "@/lib/constants"
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations"

const detailedFeatures = [
  { name: "Brand Strategy Workshop", strategy: true, design: true, fullService: true },
  { name: "Market Research", strategy: true, design: true, fullService: true },
  { name: "Competitive Analysis", strategy: true, design: true, fullService: true },
  { name: "Visual Identity Design", strategy: false, design: true, fullService: true },
  { name: "Website Design", strategy: false, design: true, fullService: true },
  { name: "Website Development", strategy: false, design: false, fullService: true },
  { name: "Content Creation", strategy: false, design: false, fullService: true },
  { name: "SEO Optimization", strategy: false, design: false, fullService: true },
  { name: "Analytics Setup", strategy: false, design: false, fullService: true },
  { name: "Ongoing Support", strategy: "30 days", design: "60 days", fullService: "90 days" },
  { name: "Strategy Reviews", strategy: false, design: false, fullService: "Quarterly" },
  { name: "Marketing Templates", strategy: false, design: true, fullService: true },
  { name: "Social Media Assets", strategy: false, design: true, fullService: true },
  { name: "Brand Guidelines", strategy: true, design: true, fullService: true },
  { name: "Performance Monitoring", strategy: false, design: false, fullService: true },
]

export default function ServicesPage() {
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
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-600">
            Expert project management and operations solutions designed to transform complex initiatives into successful outcomes.
            From strategic blueprints to full operational support.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 max-w-7xl mx-auto"
        >
          {serviceTiers.map((tier) => (
            <motion.div key={tier.id} variants={staggerItem}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white font-bold
                      ${tier.color === "brand-blue" && "bg-brand-blue"}
                      ${tier.color === "brand-purple" && "bg-brand-purple"}
                      ${tier.color === "brand-green" && "bg-brand-green"}
                      ${tier.color === "brand-coral" && "bg-brand-coral"}
                    `}
                  >
                    {tier.name.charAt(0)}
                  </div>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-base">{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-gray-600 ml-1">/{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {tier.features.slice(0, 6).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Check className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-brand-green" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={tier.id === "operations-partner" ? "gradient" : "outline"}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Approach Section */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Approach to Excellence
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-coral/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3>
              <p className="text-gray-600">
                We start by understanding your goals, challenges, and requirements to create a comprehensive project blueprint.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Execution & Management</h3>
              <p className="text-gray-600">
                Expert project managers guide every phase, ensuring on-time delivery and exceptional quality throughout.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch & Support</h3>
              <p className="text-gray-600">
                From go-live to post-launch optimization, we ensure smooth transitions and sustained success.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-24 py-16 bg-gradient-to-r from-brand-coral/10 via-brand-purple/10 to-brand-green/10 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your initiative and create a customized solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="gradient">
              Get Your Blueprint
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}