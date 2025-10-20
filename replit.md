# Jeffery Onome Emuodafevware - Portfolio Website

## Overview
A modern, fully interactive, and production-ready portfolio website showcasing the work of a Full Stack Software Engineer & AI/ML Expert. It features advanced animations, interactive components, and a professional design, built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. The project is production-ready with full interactivity and animations, configured for autoscale deployment.

## User Preferences
- **Design Style**: Modern, professional, with glassmorphism and gradients
- **Color Scheme**: Dark theme with sky-blue and purple accents
- **Animation Style**: Smooth, professional, not overwhelming
- **Content Focus**: Full-stack development and AI/ML expertise

## System Architecture

### UI/UX Decisions
- **Visual Design**: Glassmorphism effects, dynamic sky-to-purple gradient theme, parallax effects, floating elements, and progress indicators.
- **User Experience**: Animated splash screen, smooth scroll navigation, mobile responsiveness, and interactive animations powered by Framer Motion.
- **Professional Features**: Portfolio showcase grid with project details, functional contact form, social integration, and SEO optimization.

### Technical Implementations
- **Frontend Framework**: React 19.2.0 with TypeScript.
- **Build Tool**: Vite 7.1.9.
- **Styling**: Tailwind CSS with custom gradients and glassmorphism.
- **Animations**: Framer Motion 12.23.24.
- **Icons**: Lucide React.
- **Routing**: React Router DOM for client-side routing between pages.
- **Core Features**:
    - **Contact Form**: Implemented as a mailto-based form with validation and professional error handling.
    - **Profile Image Integration**: Professional profile photo in the About section with hover effects.
    - **Hero Section**: Interactive floating emoji icons, mouse-tracking parallax, animated availability badge, and functional navigation buttons (scroll to About, navigate to Contact).
    - **About Section**: Two-column layout, icon cards for key values, and staggered entrance animations.
    - **Skills Section**: Animated progress bars categorized by domain (Frontend, Backend, AI/ML, DevOps).
    - **Projects Portfolio Section**: Comprehensive project showcase grid with high-quality images, technology stack badges, interactive hover effects, and professional handling of showcase projects (with "Contact for details" messaging for projects without public URLs).
    - **Navigation**: Mobile-responsive navigation with hamburger menu, React Router integration, sticky header, and smooth page transitions. All navigation links are fully functional.
    - **Footer**: Functional navigation links, social media integration with centralized config, and scroll-to-top button.
    - **CTA Section**: Call-to-action buttons navigate to Contact and Projects pages.
    - **Global Enhancements**: Loading splash screen, scroll progress indicator, global CSS optimizations, accessibility improvements (skip-to-content link), and keyboard navigation support.

### System Design Choices
- **Build Configuration**: Vite configured for Replit, including port 5000, host 0.0.0.0, and HMR with WSS protocol. Optimized with code splitting.
- **SEO & Performance**: Comprehensive meta tags (Open Graph, Twitter Cards), sitemap.xml, robots.txt, Google Fonts optimization, responsive images, and reduced motion support.
- **Deployment**: Configured for autoscale deployment via Replit, Vercel, Netlify, and GitHub Pages.
- **Backend Architecture**: An optional backend server exists in `/server` but is not actively integrated. The frontend utilizes local data for better performance and SEO, and the contact form uses mailto links. The chatbot uses a client-side engine.

## External Dependencies
- **Vite**: Build tool for development and production.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Animation library for React.
- **Lucide React**: Icon library.
- **Google Fonts (Inter)**: Used for typography, with preconnect optimization.
- **Unsplash**: Source for high-quality project images.