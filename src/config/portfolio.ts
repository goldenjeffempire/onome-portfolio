/**
 * Portfolio Configuration
 * 
 * This file contains all the customizable content for your portfolio.
 * Update this file to personalize your portfolio with your own information.
 */

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Jeffery Onome Emuodafevware",
    firstName: "Jeffery",
    lastName: "Emuodafevware",
    tagline: "Software Engineer | AI/ML Expert | Full Stack Developer",
    shortBio: "Full Stack Software Engineer & AI/ML Expert. Building innovative solutions that make a difference.",
    availability: "Available for exciting projects",
  },

  // Hero Section
  hero: {
    greeting: "Available for exciting projects",
    name: "Jeffery Onome Emuodafevware",
    tagline: "Software Engineer | AI/ML Expert | Full Stack Developer",
    cta: {
      primary: "View My Work",
      secondary: "Let's Connect",
    },
  },

  // About Section
  about: {
    title: "About Me",
    image: "/profile.jpg",
    paragraphs: [
      "I'm <strong>Jeffery Onome Emuodafevware</strong>, a results-driven <strong>Software Engineer</strong> with <strong>3 years' experience</strong> in backend, frontend, and AI/ML development.",
      "Currently the <strong>Founder of OnomeLabs Technologies</strong>, I'm building <em>Echoverse</em>, an AI-powered platform integrating automation and machine learning. My passion lies in turning innovative ideas into impactful, real-world solutions.",
      "Skilled in building scalable systems, deploying machine learning models, and leading product development. I specialize in full-stack architecture, AI pipelines using TensorFlow & PyTorch, and driving product vision from concept to deployment.",
      "My work philosophy? <strong>Build things that matter.</strong> I combine technical excellence with strategic thinking to deliver solutions that drive real business value.",
    ],
    values: [
      {
        icon: "Code2",
        title: "Clean Code",
        description: "Scalable & Efficient",
      },
      {
        icon: "Rocket",
        title: "Innovation",
        description: "AI-Powered Solutions",
      },
      {
        icon: "Target",
        title: "Leadership",
        description: "Product-Focused",
      },
    ],
  },

  // Skills Configuration
  skills: {
    title: "Technical Skills",
    subtitle: "Technologies I work with to build amazing products",
    categories: [
      {
        name: "Frontend Development",
        color: "sky",
        skills: [
          { name: "React/Next.js", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "Tailwind CSS", level: 90 },
          { name: "Vue.js", level: 85 },
        ],
      },
      {
        name: "Backend Development",
        color: "purple",
        skills: [
          { name: "Node.js/Express", level: 90 },
          { name: "Python/Django", level: 95 },
          { name: "PostgreSQL", level: 85 },
          { name: "MongoDB", level: 80 },
        ],
      },
      {
        name: "AI/ML & Data Science",
        color: "sky",
        skills: [
          { name: "TensorFlow/PyTorch", level: 85 },
          { name: "NLP & Computer Vision", level: 80 },
          { name: "OpenAI API", level: 90 },
          { name: "Data Analysis", level: 85 },
        ],
      },
      {
        name: "DevOps & Cloud",
        color: "purple",
        skills: [
          { name: "Docker/Kubernetes", level: 80 },
          { name: "AWS/Azure/GCP", level: 85 },
          { name: "CI/CD Pipelines", level: 85 },
          { name: "Linux/Bash", level: 90 },
        ],
      },
    ],
  },

  // Experience Configuration
  experience: {
    title: "Professional Experience",
    subtitle: "My journey in software engineering and AI/ML",
    positions: [
      {
        role: "Founder & Lead Engineer",
        company: "OnomeLabs Technologies",
        period: "Jan 2025 — Present",
        location: "Remote",
        description: [
          "Building Echoverse, an AI-powered platform integrating automation & machine learning.",
          "Designed full-stack architecture and AI pipelines using TensorFlow & PyTorch.",
          "Driving product vision, development, and deployment strategies.",
        ],
      },
      {
        role: "AI/ML Engineer",
        company: "Freelance & Independent Projects",
        period: "Jan 2024 — Present",
        location: "Remote",
        description: [
          "Developed ML models for NLP & predictive analytics.",
          "Deployed AI models into production-ready APIs.",
          "Researched generative AI use cases for real-world applications.",
        ],
      },
      {
        role: "Lead Backend Developer",
        company: "GlobalXchange (ALX Capstone Project)",
        period: "Jun 2024 — Oct 2024",
        location: "Remote",
        description: [
          "Led backend engineering for a trading platform using Django & PostgreSQL.",
          "Optimized database performance, boosting efficiency by 40%.",
          "Built APIs supporting secure transactions and user features.",
        ],
      },
      {
        role: "Backend Software Engineer Intern",
        company: "ALX SE Program",
        period: "Aug 2023 — Oct 2024",
        location: "Remote",
        description: [
          "Built backend services with Django & REST APIs.",
          "Integrated secure authentication and database management.",
          "Collaborated with cross-functional teams on production-grade applications.",
        ],
      },
    ],
  },

  // CTA Section
  cta: {
    title: "Ready to Build Something",
    highlightedText: "Amazing?",
    description: "Let's collaborate and turn your innovative ideas into impactful, real-world solutions. Whether it's AI/ML integration or full-stack development, I'm here to help.",
    buttons: {
      primary: {
        text: "Let's Talk",
        action: "navigate",
        target: "/contact",
      },
      secondary: {
        text: "View Projects",
        action: "navigate",
        target: "/projects",
      },
    },
  },

  // Chatbot Configuration
  chatbot: {
    name: "JeffBot",
    greeting: "👋 Hi! I'm JeffBot, Jeffery's AI assistant! I'm here to help you explore his portfolio, skills, experience, and projects. Ask me anything!",
    suggestions: [
      "Tell me about your skills",
      "What projects have you built?",
      "How can I contact you?",
      "What's your experience?",
    ],
  },

  // Footer Configuration
  footer: {
    tagline: "Full Stack Software Engineer & AI/ML Expert. Building innovative solutions that make a difference.",
    copyright: "All rights reserved.",
    builtWith: "Built with React, TypeScript & Framer Motion",
  },

  // SEO & Meta
  seo: {
    title: "Jeffery Onome Emuodafevware | Software Engineer & AI/ML Expert",
    description: "Full Stack Software Engineer and AI/ML Expert specializing in building intelligent, scalable web applications. Expert in React, Node.js, Python, TensorFlow, and modern development tools.",
    keywords: "Software Engineer, AI/ML Expert, Full Stack Developer, React, Node.js, Python, TensorFlow, Machine Learning, Web Development, Lagos Nigeria",
    author: "Jeffery Onome Emuodafevware",
    ogImage: "/profile.jpg",
    twitterHandle: "@jefferyonome",
  },
} as const;

export type PortfolioConfig = typeof portfolioConfig;
