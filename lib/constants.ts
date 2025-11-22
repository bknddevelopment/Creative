export const siteConfig = {
  name: "project",
  description: "Expert project management, operations, and strategic solutions for ambitious brands",
  url: "https://project.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/project",
    linkedin: "https://linkedin.com/company/project",
    instagram: "https://instagram.com/project",
  },
}

export const navigationItems = [
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

export const serviceTiers = [
  {
    id: "project-blueprint",
    name: "Project Blueprint",
    price: "Custom",
    period: "project",
    color: "brand-blue",
    description: "A structured plan for any initiative",
    features: [
      "Discovery workshop",
      "Goals & scope definition",
      "Timeline & milestones",
      "Budget outline",
      "Risk management plan",
      "30/60/90 roadmap",
    ],
  },
  {
    id: "project-management",
    name: "Project Management & Execution",
    price: "Custom",
    period: "project",
    color: "brand-purple",
    description: "Full leadership from planning to delivery",
    features: [
      "Weekly PM calls",
      "Timeline tracking",
      "Vendor coordination",
      "Deliverable management",
      "Progress reporting",
      "Launch preparation",
    ],
  },
  {
    id: "operations-workflow",
    name: "Operations & Workflow Design",
    price: "Custom",
    period: "project",
    color: "brand-green",
    description: "Build systems that improve how teams work",
    features: [
      "Standard operating procedures",
      "Workflow mapping",
      "KPI setup & tracking",
      "Process redesign",
      "Training plans",
      "Implementation support",
    ],
  },
  {
    id: "launch-management",
    name: "Launch Management",
    price: "Custom",
    period: "project",
    color: "brand-coral",
    description: "Turn initiatives into launch-ready outcomes",
    features: [
      "Launch roadmap development",
      "Testing oversight",
      "Team coordination",
      "Communication planning",
      "Go-live execution",
      "Post-launch monitoring",
    ],
  },
  {
    id: "operations-partner",
    name: "Project Operations Partner",
    price: "Custom",
    period: "monthly",
    color: "brand-blue",
    description: "Ongoing project & operations leadership",
    features: [
      "Up to two active projects",
      "SOP updates & maintenance",
      "PM support & oversight",
      "Vendor management",
      "Priority response",
      "Strategic guidance",
    ],
  },
  {
    id: "brand-strategy",
    name: "Brand Strategy & Consulting",
    price: "Custom",
    period: "project",
    color: "brand-purple",
    description: "Strategic positioning and brand development",
    features: [
      "Positioning & storytelling",
      "Identity direction",
      "Market insights",
      "Competitive analysis",
      "Messaging frameworks",
      "Strategic planning",
    ],
  },
  {
    id: "design-identity",
    name: "Design & Visual Identity",
    price: "Custom",
    period: "project",
    color: "brand-green",
    description: "Visual design excellence for your brand",
    features: [
      "Logos & brand kits",
      "Style guides",
      "Presentation decks",
      "Pitch materials",
      "Digital design",
      "Print design",
    ],
  },
]

export const portfolioCategories = [
  "All",
  "Project Management",
  "Operations",
  "Launch Management",
  "Strategy",
  "Design",
] as const

export type PortfolioCategory = typeof portfolioCategories[number]

export const portfolioItems = [
  {
    id: 1,
    title: "SaaS Product Launch",
    category: "Launch Management",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
    description: "Complete go-to-market strategy and launch execution for tech startup",
    slug: "saas-product-launch",
  },
  {
    id: 2,
    title: "Enterprise Operations Redesign",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
    description: "Workflow optimization and SOP development for 200+ employee organization",
    slug: "enterprise-operations",
  },
  {
    id: 3,
    title: "Healthcare System Implementation",
    category: "Project Management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "End-to-end project management for healthcare platform rollout",
    slug: "healthcare-implementation",
  },
  {
    id: 4,
    title: "Fintech Market Strategy",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Market positioning and strategic roadmap for fintech startup",
    slug: "fintech-strategy",
  },
  {
    id: 5,
    title: "Retail Brand Development",
    category: "Design",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    description: "Complete brand identity and visual system for retail chain",
    slug: "retail-branding",
  },
  {
    id: 6,
    title: "E-commerce Platform Migration",
    category: "Project Management",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    description: "Complex platform migration with zero downtime",
    slug: "ecommerce-migration",
  },
]

export const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "15+ years optimizing operations and driving efficiency",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Project Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Former Fortune 500 PM delivering complex initiatives on time",
  },
  {
    name: "Elena Rodriguez",
    role: "Brand Strategy Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Award-winning strategist building memorable brands",
  },
  {
    name: "James Park",
    role: "Operations Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Systems thinker who designs workflows that scale",
  },
]

export const companyMilestones = [
  {
    year: "2018",
    title: "Founded",
    description: "Started with a vision to simplify complex project execution",
  },
  {
    year: "2020",
    title: "100+ Projects Delivered",
    description: "Successfully managed initiatives across diverse industries",
  },
  {
    year: "2022",
    title: "Operations Excellence",
    description: "Recognized for workflow optimization and process innovation",
  },
  {
    year: "2024",
    title: "Enterprise Scale",
    description: "Supporting organizations from startups to Fortune 500",
  },
]