export const siteConfig = {
  name: "Sincerely Creative Solutions",
  description: "Strategic design and full-service creative solutions",
  url: "https://sincerelycreative.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/sincerelycreative",
    linkedin: "https://linkedin.com/company/sincerelycreative",
    instagram: "https://instagram.com/sincerelycreative",
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
    id: "strategy",
    name: "Strategy First",
    price: "$2,500",
    period: "project",
    color: "brand-blue",
    description: "Perfect for startups and small businesses needing strategic direction",
    features: [
      "Brand strategy workshop",
      "Market research & analysis",
      "Competitive positioning",
      "Messaging framework",
      "Visual identity guidelines",
      "30-day support",
    ],
  },
  {
    id: "design",
    name: "Design Forward",
    price: "$5,000",
    period: "project",
    color: "brand-purple",
    description: "Ideal for businesses ready to elevate their visual presence",
    features: [
      "Everything in Strategy First",
      "Custom website design (up to 5 pages)",
      "Brand identity system",
      "Marketing collateral templates",
      "Social media templates",
      "60-day support",
    ],
  },
  {
    id: "full-service",
    name: "Full Service",
    price: "$10,000+",
    period: "project",
    color: "brand-green",
    description: "Comprehensive solutions for ambitious brands",
    features: [
      "Everything in Design Forward",
      "Custom website development",
      "Content strategy & creation",
      "SEO optimization",
      "Analytics setup",
      "90-day support",
      "Quarterly strategy reviews",
    ],
  },
]

export const portfolioCategories = [
  "All",
  "Branding",
  "Web Design",
  "Marketing",
  "Strategy",
] as const

export type PortfolioCategory = typeof portfolioCategories[number]

export const portfolioItems = [
  {
    id: 1,
    title: "TechStart Rebrand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
    description: "Complete brand transformation for a SaaS startup",
    slug: "techstart-rebrand",
  },
  {
    id: 2,
    title: "EcoLife Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
    description: "Sustainable living platform design and development",
    slug: "ecolife-website",
  },
  {
    id: 3,
    title: "HealthHub Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "Integrated marketing campaign for healthcare app",
    slug: "healthhub-campaign",
  },
  {
    id: 4,
    title: "FinanceFlow Strategy",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Market positioning for fintech startup",
    slug: "financeflow-strategy",
  },
  {
    id: 5,
    title: "Artisan Coffee Co.",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    description: "Boutique coffee shop brand identity",
    slug: "artisan-coffee",
  },
  {
    id: 6,
    title: "FitLife App",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    description: "Fitness tracking application UI/UX design",
    slug: "fitlife-app",
  },
]

export const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "15+ years crafting brand stories that resonate",
  },
  {
    name: "Marcus Johnson",
    role: "Strategy Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Former Fortune 500 strategist with startup soul",
  },
  {
    name: "Elena Rodriguez",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Award-winning designer obsessed with pixels",
  },
  {
    name: "James Park",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Full-stack developer who speaks human",
  },
]

export const companyMilestones = [
  {
    year: "2018",
    title: "Founded",
    description: "Started with a vision to blend strategy and creativity",
  },
  {
    year: "2020",
    title: "50+ Clients",
    description: "Helped transform brands across industries",
  },
  {
    year: "2022",
    title: "Award Recognition",
    description: "Named Top Creative Agency by Design Weekly",
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Serving clients in 15+ countries",
  },
]