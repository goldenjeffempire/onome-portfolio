# Jeffery Onome Emuodafevware - Portfolio Website

## Overview
A modern, responsive portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. This is a personal portfolio showcasing the work of a Full Stack Software Engineer & AI/ML Expert.

## Current State
- **Status**: Successfully configured for Replit environment
- **Last Updated**: October 16, 2025
- **Frontend**: React 19 with TypeScript running on Vite

## Recent Changes
- **2025-10-16**: Initial import from GitHub and Replit environment setup
  - Removed husky git hook from prepare script (incompatible with Replit git)
  - Configured Vite to run on port 5000 with host 0.0.0.0
  - Added HMR configuration for Replit proxy support
  - Fixed CSS import order (moved @import before Tailwind directives)
  - Updated TypeScript moduleResolution to "bundler"
  - Created dev server workflow
  - Configured deployment for autoscale with build step

## Project Architecture

### Tech Stack
- **Frontend Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 7.1.9
- **Styling**: Tailwind CSS with custom gradients and glassmorphism
- **Animations**: Framer Motion 12.23.24
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React

### Project Structure
```
onome-portfolio/
├── src/
│   ├── components/        # React components (Hero, About, Skills, etc.)
│   ├── styles/           # Global CSS styles
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies
```

### Key Features
- Single-page application with smooth scroll navigation
- Animated sections with Framer Motion
- Responsive design with mobile-first approach
- Glassmorphism UI effects
- Fixed navigation header

## Development

### Running the Project
The project runs automatically via the "Dev Server" workflow on port 5000.

### Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Configuration Notes

### Vite Configuration
- Port: 5000 (required for Replit)
- Host: 0.0.0.0 (allows external access)
- HMR clientPort: 443 (for Replit proxy)
- Build output: dist/
- Code splitting configured for React, Framer Motion, and Three.js

### Path Aliases
- `@/` → `./src/`
- `@components/` → `./src/components/`
- `@styles/` → `./src/styles/`
- `@data/` → `./src/data/`
- `@utils/` → `./src/utils/`
