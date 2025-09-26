import { Hero } from "@/components/sections/hero"
import { ServiceTiers } from "@/components/sections/service-tiers"
import { Portfolio } from "@/components/sections/portfolio"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceTiers />
      <Portfolio />
    </>
  )
}