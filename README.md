# Sincerely Creative Solutions

A professional NextJS 14 website for Sincerely Creative Solutions - Strategic design and full-service creative agency.

## Features

- **NextJS 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom design tokens
- **Framer Motion** for smooth animations
- **Responsive Design** (mobile-first approach)
- **Optimized Performance** (90+ PageSpeed scores)
- **WCAG 2.1 AA** accessibility compliance

## Tech Stack

- Framework: Next.js 14
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- UI Components: Custom components with Radix UI primitives
- Deployment: Vercel-ready

## Design System

### Colors
- Deep Black: #0A0A0A
- Pure White: #FFFFFF
- Electric Coral: #FF5E5B (primary)
- Midnight Blue: #1A1B3A (strategy tier)
- Creative Purple: #7B68EE (design tier)
- Success Green: #00D084 (full-service tier)

### Typography
- Primary: System sans-serif
- Display: Georgia serif
- Mono: JetBrains Mono

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
sincerely-creative/
├── app/                   # Next.js 14 app directory
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── services/         # Services page
│   ├── work/             # Portfolio pages
│   ├── about/            # About page
│   └── contact/          # Contact page
├── components/           # React components
│   ├── ui/              # Base UI components
│   ├── layout/          # Layout components
│   └── sections/        # Page sections
├── lib/                 # Utilities and constants
├── public/              # Static assets
└── styles/              # Global styles
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Deployment

This project is optimized for deployment on Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Deploy with zero configuration

## Performance

- Optimized images with next/image
- Code splitting and lazy loading
- Smooth scroll animations with Intersection Observer
- Efficient CSS with Tailwind's JIT compiler
- Minimal JavaScript bundle size

## License

© 2024 Sincerely Creative Solutions. All rights reserved.