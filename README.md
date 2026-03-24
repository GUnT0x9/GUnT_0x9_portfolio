# GUnT_0x9 Portfolio

A modern, cyberpunk-themed personal portfolio website built with Next.js, React, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.0-38B2AC?style=flat-square&logo=tailwind-css)

## 🚀 Live Demo

Visit the live portfolio at: [https://github.com/GUnT0x9/GUnT_0x9_portfolio](https://github.com/GUnT0x9/GUnT_0x9_portfolio)

## ✨ Features

- **Cyberpunk/Hacker Aesthetic** - Dark theme with neon accents and glitch effects
- **Terminal Loading Animation** - Immersive boot sequence with system initialization
- **Typing Effect** - Animated text typing in the hero section
- **Responsive Design** - Fully responsive across all device sizes
- **Multi-language Support** - Korean and English language toggle
- **Interactive UI Components** - Smooth animations and hover effects
- **Skill Visualizations** - Charts and progress indicators for technical skills
- **Project Showcase** - Grid layout for displaying projects
- **Timeline Component** - Education and experience timeline
- **Contact Section** - Easy ways to get in touch

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Accessible UI components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library

### Features & Utilities
- **next-themes** - Theme management
- **react-hook-form** - Form handling
- **zod** - Schema validation
- **recharts** - Data visualization
- **embla-carousel** - Carousel/slider functionality
- **Vercel Analytics** - Web analytics

## 📁 Project Structure

```
my_portfolio/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── diary/             # Diary section
│   └── timeline/          # Timeline section
├── components/            # React components
│   ├── ui/               # shadcn/ui components (57 items)
│   ├── hero-section.tsx   # Hero section with typing effect
│   ├── terminal-loader.tsx # Terminal boot animation
│   ├── education-timeline.tsx
│   ├── security-fields.tsx
│   ├── skill-chart.tsx
│   ├── dev-stack.tsx
│   ├── tools-section.tsx
│   ├── projects-section.tsx
│   ├── awards-section.tsx
│   ├── contact-section.tsx
│   ├── navigation.tsx
│   ├── grid-background.tsx
│   └── language-toggle.tsx
├── hooks/                 # Custom React hooks
│   └── use-language.ts    # Language context hook
├── lib/                   # Utility functions
├── locales/               # Translation files
├── public/                # Static assets
│   ├── icon.svg
│   ├── bug.jpg
│   ├── idapro_bro.jpg
│   └── placeholder images
├── styles/                # Additional styles
├── types/                 # TypeScript types
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Sections

1. **Hero Section** - Profile with typing animation and glitch effects
2. **Terminal Loader** - System boot sequence animation
3. **Education Timeline** - Academic background
4. **Security Fields** - Cybersecurity expertise areas
5. **Skill Chart** - Technical skills visualization
6. **Dev Stack** - Development tools and technologies
7. **Tools Section** - Security and development tools
8. **Projects Section** - Portfolio projects showcase
9. **Awards Section** - Achievements and certifications
10. **Contact Section** - Contact information and form

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm, npm, or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GUnT0x9/GUnT_0x9_portfolio.git
cd GUnT_0x9_portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
# or
npm run build
```

## 📝 Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint

## 🌐 Deployment

This project is configured for easy deployment on Vercel. Simply push to your GitHub repository and connect it to Vercel for automatic deployments.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**GUnT_0x9** - Security Researcher & Developer

---

Built with ❤️ using Next.js and Tailwind CSS
