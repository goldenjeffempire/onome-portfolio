import { Database } from '../db/database';
import { randomUUID } from 'crypto';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  size: string;
  order: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  image?: string;
  published: boolean;
  views: number;
  createdAt: string;
  updatedAt: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  tech: string[];
  order: number;
  createdAt: string;
  updatedAt: string;
}

interface Stat {
  id: string;
  key: string;
  label: string;
  value: string;
  icon?: string;
  order: number;
  updatedAt: string;
}

async function seed() {
  console.log('🌱 Seeding database...');

  // Seed Projects
  const projects: Project[] = [
    {
      id: randomUUID(),
      title: 'AI-Powered Content Generator',
      description: 'Advanced NLP application using GPT models to generate high-quality content. Features real-time streaming, context management, and multi-language support.',
      tech: ['React', 'Python', 'FastAPI', 'OpenAI', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
      featured: true,
      size: 'large',
      order: 1,
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: randomUUID(),
      title: 'Real-Time Analytics Dashboard',
      description: 'Full-stack analytics platform with live data visualization, custom reporting, and predictive analytics powered by machine learning models.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Chart.js', 'Docker'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      featured: true,
      size: 'medium',
      order: 2,
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: randomUUID(),
      title: 'E-Commerce Platform',
      description: 'Scalable online marketplace with advanced search, payment integration, inventory management, and AI-powered product recommendations.',
      tech: ['React', 'Express', 'MongoDB', 'Stripe', 'AWS'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop',
      featured: false,
      size: 'medium',
      order: 3,
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: randomUUID(),
      title: 'Computer Vision Object Detector',
      description: 'Deep learning model for real-time object detection and classification. Deployed with TensorFlow Lite for edge computing applications.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'Docker'],
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop',
      featured: false,
      size: 'small',
      order: 4,
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: randomUUID(),
      title: 'Social Media Management Tool',
      description: 'Comprehensive platform for scheduling posts, analyzing engagement metrics, and managing multiple social media accounts from one dashboard.',
      tech: ['TypeScript', 'React', 'Node.js', 'Redis', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
      featured: false,
      size: 'small',
      order: 5,
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: randomUUID(),
      title: 'Healthcare Appointment System',
      description: 'HIPAA-compliant patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
      tech: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
      featured: false,
      size: 'medium',
      order: 6,
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  for (const project of projects) {
    await Database.create('projects', project);
  }
  console.log(`✅ Created ${projects.length} projects`);

  // Seed Blog Posts
  const blogPosts: BlogPost[] = [
    {
      id: randomUUID(),
      title: 'The Rise of Artificial Intelligence in 2025',
      slug: 'rise-of-artificial-intelligence-2025',
      excerpt: 'Explore how AI is transforming industries and reshaping the future of technology.',
      content: `# The Rise of Artificial Intelligence in 2025

Artificial Intelligence has evolved from a futuristic concept to an integral part of our daily lives. In 2025, AI is transforming industries at an unprecedented pace.

## Key Developments

1. **Generative AI** - Tools like GPT-5 are revolutionizing content creation
2. **AI in Healthcare** - Diagnostic systems with 95%+ accuracy
3. **Autonomous Systems** - Self-driving vehicles are becoming mainstream

The future is here, and it's powered by AI.`,
      author: 'Jeffery Onome Emuodafevware',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Technology', 'Future', 'Innovation'],
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
      published: true,
      views: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: randomUUID(),
      title: 'Building Scalable Microservices with Node.js',
      slug: 'building-scalable-microservices-nodejs',
      excerpt: 'Learn best practices for designing and implementing microservices architecture using Node.js.',
      content: `# Building Scalable Microservices with Node.js

Microservices have become the de facto standard for building modern, scalable applications. This guide covers essential patterns and practices.

## Architecture Patterns

- Service Discovery
- API Gateway
- Circuit Breakers
- Event-Driven Communication

Building robust microservices requires careful planning and implementation of these patterns.`,
      author: 'Jeffery Onome Emuodafevware',
      category: 'Web Development',
      tags: ['Node.js', 'Microservices', 'Architecture', 'Backend'],
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
      published: true,
      views: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  for (const post of blogPosts) {
    await Database.create('blogPosts', post);
  }
  console.log(`✅ Created ${blogPosts.length} blog posts`);

  // Seed Experience
  const experiences: Experience[] = [
    {
      id: randomUUID(),
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
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      order: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: randomUUID(),
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
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  for (const exp of experiences) {
    await Database.create('experience', exp);
  }
  console.log(`✅ Created ${experiences.length} experience entries`);

  // Seed Stats
  const stats: Stat[] = [
    {
      id: randomUUID(),
      key: 'years_experience',
      label: 'Years Experience',
      value: '5+',
      icon: '💼',
      order: 1,
      updatedAt: new Date().toISOString(),
    },
    {
      id: randomUUID(),
      key: 'projects_completed',
      label: 'Projects Completed',
      value: '50+',
      icon: '🚀',
      order: 2,
      updatedAt: new Date().toISOString(),
    },
    {
      id: randomUUID(),
      key: 'happy_clients',
      label: 'Happy Clients',
      value: '30+',
      icon: '😊',
      order: 3,
      updatedAt: new Date().toISOString(),
    },
    {
      id: randomUUID(),
      key: 'code_commits',
      label: 'Code Commits',
      value: '10K+',
      icon: '💻',
      order: 4,
      updatedAt: new Date().toISOString(),
    },
  ];

  for (const stat of stats) {
    await Database.create('stats', stat);
  }
  console.log(`✅ Created ${stats.length} stats`);

  console.log('✅ Database seeded successfully!');
}

// Run seed if called directly
if (require.main === module) {
  seed()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('❌ Seed failed:', error);
      process.exit(1);
    });
}

export default seed;
