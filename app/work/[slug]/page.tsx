import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { portfolioItems } from "@/lib/constants"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = portfolioItems.find((item) => item.slug === params.slug)

  if (!project) {
    notFound()
  }

  const currentIndex = portfolioItems.findIndex((item) => item.slug === params.slug)
  const nextProject = portfolioItems[currentIndex + 1] || portfolioItems[0]
  const prevProject = portfolioItems[currentIndex - 1] || portfolioItems[portfolioItems.length - 1]

  return (
    <div className="pt-32 pb-24">
      <Container>
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center text-gray-600 hover:text-brand-coral transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="text-brand-coral font-mono text-sm mb-4">
            {project.category}
          </div>
          <h1 className="text-display-2 font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-16">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
              <p className="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">The Results</h2>
              <p className="text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-sm text-gray-500 mb-2">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">Brand Strategy</li>
                <li className="text-gray-700">Visual Identity</li>
                <li className="text-gray-700">Web Design</li>
                <li className="text-gray-700">Development</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-500 mb-2">Timeline</h3>
              <p className="text-gray-700">12 weeks</p>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-500 mb-2">Year</h3>
              <p className="text-gray-700">2024</p>
            </div>
          </div>
        </div>

        {/* Additional Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} - Detail 1`}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} - Detail 2`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Project Navigation */}
        <div className="flex items-center justify-between border-t pt-12">
          <Link
            href={`/work/${prevProject.slug}`}
            className="group flex items-center space-x-4"
          >
            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-brand-coral transition-colors" />
            <div>
              <div className="text-sm text-gray-500">Previous Project</div>
              <div className="font-semibold group-hover:text-brand-coral transition-colors">
                {prevProject.title}
              </div>
            </div>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center space-x-4"
          >
            <div className="text-right">
              <div className="text-sm text-gray-500">Next Project</div>
              <div className="font-semibold group-hover:text-brand-coral transition-colors">
                {nextProject.title}
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-coral transition-colors" />
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24 py-16 bg-gradient-to-r from-brand-coral/10 via-brand-purple/10 to-brand-green/10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Like What You See?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help transform your brand and achieve similar results.
          </p>
          <Button size="lg" variant="gradient">
            Start Your Project
          </Button>
        </div>
      </Container>
    </div>
  )
}