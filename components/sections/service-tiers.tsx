"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { serviceTiers } from "@/lib/constants"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { cn } from "@/lib/utils"

export function ServiceTiers() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-display-2 font-bold mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-lg text-gray-600">
            Flexible service tiers designed to match your ambitions and budget
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {serviceTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              variants={staggerItem}
              className="relative"
            >
              <Card
                className={cn(
                  "relative h-full transition-all duration-300 hover:scale-105 hover:shadow-xl",
                  index === 2 && "border-brand-green border-2"
                )}
              >
                {index === 2 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-green text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div
                    className={cn(
                      "w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl",
                      tier.color === "brand-blue" && "bg-brand-blue",
                      tier.color === "brand-purple" && "bg-brand-purple",
                      tier.color === "brand-green" && "bg-brand-green"
                    )}
                  >
                    {tier.name.charAt(0)}
                  </div>
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-600 ml-2">/{tier.period}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check
                          className={cn(
                            "w-5 h-5 mr-3 flex-shrink-0 mt-0.5",
                            tier.color === "brand-blue" && "text-brand-blue",
                            tier.color === "brand-purple" && "text-brand-purple",
                            tier.color === "brand-green" && "text-brand-green"
                          )}
                        />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    variant={index === 2 ? "gradient" : "outline"}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}