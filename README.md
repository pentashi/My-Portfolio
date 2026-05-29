# My Portfolio

A production-ready personal portfolio application built with React, TypeScript, and Vite.  
The project is designed to present professional experience, featured work, and technical capabilities through a performant, responsive, and maintainable frontend architecture.

## Executive Summary

This repository contains the source code for a modern portfolio platform with:

- Responsive, mobile-first user experience
- Component-based UI architecture for scalability
- Type-safe development workflow with TypeScript
- Fast local development and optimized production builds
- Structured styling using Tailwind CSS and reusable UI primitives

## Key Capabilities

- Professional profile and project showcase
- Clean and consistent design system implementation
- Reusable UI components for rapid content evolution
- Performance-focused frontend delivery via Vite
- Easy deployment to modern static hosting platforms

## Technology Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS
- **UI Primitives:** Radix UI + shadcn/ui patterns
- **Routing:** React Router
- **Data Utilities:** TanStack React Query, Zod, React Hook Form

## Local Development

### Prerequisites

- Node.js (LTS recommended)
- npm

### Setup

```bash
git clone https://github.com/pentashi/My-Portfolio.git
cd My-Portfolio
npm install
```

### Run Development Server

```bash
npm run dev
```

Default local URL: `http://localhost:8080`

## Build and Quality Commands

```bash
# Start local development server
npm run dev

# Create production build
npm run build

# Build with development mode config
npm run build:dev

# Lint project files
npm run lint

# Preview production build locally
npm run preview
```

## Deployment

The project is deployment-ready for platforms such as Vercel, Netlify, and Cloudflare Pages.

- **Build command:** `npm run build`
- **Output directory:** `dist`

## Repository Structure

```text
My-Portfolio/
├── public/            # Static assets
├── src/               # Application source code
├── package.json       # Scripts and dependency manifest
├── vite.config.ts     # Build and dev server configuration
└── tailwind.config.ts # Styling system configuration
```

## Engineering Standards

- Strong typing and maintainability through TypeScript
- Linting-based code quality enforcement via ESLint
- Modular architecture to support long-term extensibility
- Consistent UI behavior using standardized component primitives

## License

This project is provided for portfolio and professional presentation purposes.