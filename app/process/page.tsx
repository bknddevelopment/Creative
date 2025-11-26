import { Metadata } from "next"
import { ProcessHero } from "@/components/process/process-hero"
import { FocusAreas } from "@/components/process/focus-areas"
import { TwoStageSystem } from "@/components/process/two-stage-system"
import { Benefits } from "@/components/process/benefits"
import { ProcessCTA } from "@/components/process/process-cta"

export const metadata: Metadata = {
  title: "Our Process",
  description: "Transform your practice with a systematic approach. Go from improvised to intentional with our two-stage system for lasting transformation.",
}

export default function ProcessPage() {
  return (
    <div className="bg-white">
      <ProcessHero />
      <FocusAreas />
      <TwoStageSystem />
      <Benefits />
      <ProcessCTA />
    </div>
  )
}
