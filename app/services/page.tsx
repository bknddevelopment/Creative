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
            Comprehensive creative solutions tailored to your business needs.
            Choose the perfect tier for your growth journey.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-3 gap-8 mb-24"
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
                  <Button className="w-full" variant={tier.id === "full-service" ? "gradient" : "outline"}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Detailed Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4">Features</th>
                  <th className="text-center py-4 px-4">
                    <div className="text-brand-blue font-semibold">Strategy First</div>
                    <div className="text-sm text-gray-600">$2,500</div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="text-brand-purple font-semibold">Design Forward</div>
                    <div className="text-sm text-gray-600">$5,000</div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="text-brand-green font-semibold">Full Service</div>
                    <div className="text-sm text-gray-600">$10,000+</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {detailedFeatures.map((feature, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.strategy === "boolean" ? (
                        feature.strategy ? (
                          <Check className="w-5 h-5 text-brand-green mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.strategy}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.design === "boolean" ? (
                        feature.design ? (
                          <Check className="w-5 h-5 text-brand-green mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.design}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.fullService === "boolean" ? (
                        feature.fullService ? (
                          <Check className="w-5 h-5 text-brand-green mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.fullService}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            Ready to Transform Your Brand?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and find the perfect solution for your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="gradient">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              Download Service Guide
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}