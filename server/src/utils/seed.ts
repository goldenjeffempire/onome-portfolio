import prisma from '../config/database';
import { logger } from './logger';
import bcrypt from 'bcrypt';

async function seed() {
  logger.info('Starting database seed...');

  try {
    // Clear existing data
    await prisma.chatMessage.deleteMany();
    await prisma.chatConversation.deleteMany();
    await prisma.contactInquiry.deleteMany();
    await prisma.testimonial.deleteMany();
    await prisma.education.deleteMany();
    await prisma.experience.deleteMany();
    await prisma.blogPost.deleteMany();
    await prisma.project.deleteMany();
    await prisma.stat.deleteMany();
    await prisma.user.deleteMany();

    logger.info('Cleared existing data');

    // Create admin user
    const passwordHash = await bcrypt.hash('admin123', 10);
    await prisma.user.create({
      data: {
        email: 'jeffemuodafe124@gmail.com',
        passwordHash,
        name: 'Jeffery Onome Emuodafevware',
        role: 'ADMIN',
      },
    });

    logger.info('Created admin user');

    // Seed Projects
    const projects = [
      {
        title: 'AI-Powered Content Generator',
        description: 'Advanced NLP application using GPT models to generate high-quality content. Features real-time streaming, context management, and multi-language support.',
        tech: ['React', 'Python', 'FastAPI', 'OpenAI', 'TailwindCSS'],
        image: '/images/ai-content-generator.jpg',
        featured: true,
        size: 'large',
        published: true,
        order: 1,
      },
      {
        title: 'Real-Time Analytics Dashboard',
        description: 'Full-stack analytics platform with live data visualization, custom reporting, and predictive analytics powered by machine learning models.',
        tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Chart.js', 'Docker'],
        featured: true,
        size: 'medium',
        published: true,
        order: 2,
      },
      {
        title: 'E-Commerce Platform',
        description: 'Scalable online marketplace with advanced search, payment integration, inventory management, and AI-powered product recommendations.',
        tech: ['React', 'Express', 'MongoDB', 'Stripe', 'AWS'],
        image: '/images/ecommerce-platform.jpg',
        size: 'medium',
        published: true,
        order: 3,
      },
      {
        title: 'Computer Vision Object Detector',
        description: 'Deep learning model for real-time object detection and classification. Deployed with TensorFlow Lite for edge computing applications.',
        tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'Docker'],
        image: '/images/computer-vision.jpg',
        size: 'small',
        published: true,
        order: 4,
      },
      {
        title: 'Social Media Management Tool',
        description: 'Comprehensive platform for scheduling posts, analyzing engagement metrics, and managing multiple social media accounts from one dashboard.',
        tech: ['TypeScript', 'React', 'Node.js', 'Redis', 'PostgreSQL'],
        image: '/images/social-media-tool.jpg',
        size: 'small',
        published: true,
        order: 5,
      },
      {
        title: 'Healthcare Appointment System',
        description: 'Patient management system with appointment scheduling, medical records, telemedicine integration, and automated reminders.',
        tech: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS'],
        image: '/images/healthcare-system.jpg',
        size: 'medium',
        published: true,
        order: 6,
      },
    ];

    for (const project of projects) {
      await prisma.project.create({ data: project });
    }

    logger.info(`Created ${projects.length} projects`);

    // Seed Stats
    const stats = [
      { key: 'yearsExperience', label: 'Years Experience', value: '5+', icon: '🚀', order: 1 },
      { key: 'projectsCompleted', label: 'Projects Completed', value: '50+', icon: '💼', order: 2 },
      { key: 'happyClients', label: 'Happy Clients', value: '30+', icon: '😊', order: 3 },
      { key: 'codeCommits', label: 'Code Commits', value: '10K+', icon: '💻', order: 4 },
    ];

    for (const stat of stats) {
      await prisma.stat.create({ data: stat });
    }

    logger.info(`Created ${stats.length} stats`);

    // Seed Experiences
    const experiences = [
      {
        company: 'Tech Innovations Inc.',
        position: 'Senior Full Stack Developer',
        location: 'Remote',
        startDate: '2022-01',
        current: true,
        description: [
          'Led development of microservices architecture serving 1M+ users',
          'Implemented CI/CD pipelines reducing deployment time by 60%',
          'Mentored junior developers and conducted code reviews',
        ],
        tech: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
        order: 1,
      },
      {
        company: 'DataCorp Solutions',
        position: 'AI/ML Engineer',
        location: 'Lagos, Nigeria',
        startDate: '2020-06',
        endDate: '2021-12',
        current: false,
        description: [
          'Developed machine learning models for predictive analytics',
          'Built data pipelines processing 10TB+ daily',
          'Improved model accuracy by 25% through feature engineering',
        ],
        tech: ['Python', 'TensorFlow', 'PyTorch', 'AWS SageMaker', 'Apache Spark'],
        order: 2,
      },
    ];

    for (const exp of experiences) {
      await prisma.experience.create({ data: exp });
    }

    logger.info(`Created ${experiences.length} experiences`);

    // Seed Education
    const education = [
      {
        institution: 'University of Technology',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        location: 'Lagos, Nigeria',
        startDate: '2016',
        endDate: '2020',
        current: false,
        description: 'First Class Honours - Focus on AI and Software Engineering',
        achievements: [
          'Dean\'s List all semesters',
          'Best Final Year Project Award',
          'Published research on ML algorithms',
        ],
        order: 1,
      },
    ];

    for (const edu of education) {
      await prisma.education.create({ data: edu });
    }

    logger.info(`Created ${education.length} education entries`);

    // Seed Testimonials
    const testimonials = [
      {
        name: 'Sarah Johnson',
        position: 'CEO',
        company: 'TechStart Solutions',
        content: 'Jeffery is an exceptional developer who delivered our AI-powered analytics platform ahead of schedule. His expertise in full-stack development and machine learning was invaluable.',
        rating: 5,
        published: true,
        order: 1,
      },
      {
        name: 'Michael Chen',
        position: 'CTO',
        company: 'DataFlow Inc.',
        content: 'Working with Jeffery was a game-changer for our project. He built a scalable microservices architecture that handles millions of requests daily without breaking a sweat.',
        rating: 5,
        published: true,
        order: 2,
      },
      {
        name: 'Emily Rodriguez',
        position: 'Product Manager',
        company: 'InnovateHub',
        content: 'Jeffery\'s ability to understand complex requirements and translate them into elegant solutions is remarkable. He\'s not just a developer; he\'s a problem solver.',
        rating: 5,
        published: true,
        order: 3,
      },
    ];

    for (const testimonial of testimonials) {
      await prisma.testimonial.create({ data: testimonial });
    }

    logger.info(`Created ${testimonials.length} testimonials`);

    // Seed Blog Posts (sample posts)
    const blogPosts = [
      {
        title: 'Building Scalable AI Systems with Modern Architecture',
        slug: 'building-scalable-ai-systems',
        excerpt: 'Explore the latest patterns and best practices for designing scalable AI/ML systems that can handle production workloads efficiently.',
        content: `# Building Scalable AI Systems with Modern Architecture

In today's rapidly evolving tech landscape, building scalable AI systems requires careful architectural planning and implementation. This article explores key principles and patterns for creating robust AI/ML infrastructure.

## Key Architecture Patterns

### 1. Microservices for ML Models
Breaking down your ML pipeline into microservices allows for independent scaling and deployment.

### 2. Event-Driven Architecture
Implement event-driven patterns to handle asynchronous processing and real-time data streams.

### 3. Model Versioning and Registry
Maintain a centralized model registry to track different versions of your ML models.

## Conclusion
Building scalable AI systems is a journey that requires continuous optimization.`,
        author: 'Jeffery Onome Emuodafevware',
        category: 'AI/ML',
        tags: ['AI', 'Machine Learning', 'Architecture', 'Scalability'],
        readTime: '8 min read',
        published: true,
        views: 0,
      },
      {
        title: 'Full-Stack Development Best Practices 2025',
        slug: 'fullstack-best-practices-2025',
        excerpt: 'A comprehensive guide to modern full-stack development practices, from React to Node.js and everything in between.',
        content: `# Full-Stack Development Best Practices 2025

Modern full-stack development has evolved significantly. Here are the best practices for 2025.

## Frontend Excellence
- Component-based architecture
- State management patterns
- Performance optimization

## Backend Robustness
- API design principles
- Database optimization
- Security best practices

## Conclusion
Following these practices ensures production-ready applications.`,
        author: 'Jeffery Onome Emuodafevware',
        category: 'Web Development',
        tags: ['Full Stack', 'React', 'Node.js', 'Best Practices'],
        readTime: '10 min read',
        published: true,
        views: 0,
      },
    ];

    for (const post of blogPosts) {
      await prisma.blogPost.create({ data: post });
    }

    logger.info(`Created ${blogPosts.length} blog posts`);

    logger.info('✅ Database seeded successfully!');
  } catch (error) {
    logger.error('Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

seed()
  .catch((error) => {
    logger.error('Seed script failed:', error);
    process.exit(1);
  });