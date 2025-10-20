export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatResponse {
  response: string;
  confidence: number;
}

export class LocalChatbot {
  private knowledgeBase: { keywords: string[]; response: string; category: string }[];

  constructor() {
    this.knowledgeBase = [
      {
        keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
        response: "👋 Hello! I'm JeffBot, your friendly AI guide to Jeffery's portfolio. I can help you learn about his skills, projects, and experience. How can I assist you today?",
        category: 'greeting'
      },
      {
        keywords: ['skills', 'technologies', 'tech stack', 'expertise', 'what can you do', 'capabilities', 'technical skills', 'programming languages'],
        response: "💻 Jeffery's Technical Expertise:\n\n**Languages**: JavaScript/TypeScript, Python, Java, C++, SQL\n**Frontend**: React, Vue.js, Next.js, Tailwind CSS, Framer Motion, HTML5/CSS3\n**Backend**: Node.js, Express, Django, Flask, FastAPI, RESTful APIs, GraphQL\n**AI/ML**: TensorFlow, PyTorch, scikit-learn, OpenAI API, Hugging Face, NLP, Computer Vision\n**Cloud**: AWS (EC2, S3, Lambda), Azure, Google Cloud Platform\n**DevOps**: Docker, Kubernetes, CI/CD (GitHub Actions, Jenkins), Terraform\n**Databases**: PostgreSQL, MongoDB, MySQL, Redis, Vector Databases\n**Tools**: Git, VS Code, Jupyter, Postman, Figma\n\nHe's constantly learning and staying updated with the latest technologies!",
        category: 'skills'
      },
      {
        keywords: ['experience', 'work', 'background', 'career', 'professional experience', 'work history', 'employment', 'jobs', 'roles'],
        response: "📊 Jeffery's Professional Background:\n\nJeffery is a Full Stack Software Engineer & AI/ML Expert with years of experience in:\n\n• **Enterprise Applications**: Built scalable web applications serving thousands of users\n• **AI/ML Solutions**: Developed and deployed machine learning models for production use\n• **Cloud Architecture**: Designed and managed cloud infrastructure on AWS, Azure, and GCP\n• **Team Leadership**: Led development teams and mentored junior developers\n• **Client Projects**: Delivered successful projects for clients across various industries\n\nHe has worked on projects in fintech, healthcare, e-commerce, and SaaS platforms. Scroll down to the Experience section for detailed work history and achievements!",
        category: 'experience'
      },
      {
        keywords: ['projects', 'portfolio', 'work samples', 'what have you built', 'showcase', 'examples', 'case studies', 'demos'],
        response: "🚀 Jeffery's Notable Projects:\n\n• **AI-Powered Applications**: Built intelligent systems using machine learning, NLP, and computer vision\n• **Full-Stack Web Platforms**: Created responsive, scalable web applications with modern frameworks\n• **E-commerce Solutions**: Developed complete online shopping platforms with payment integration\n• **Real-time Chat Applications**: Built messaging systems with WebSocket technology\n• **Data Analytics Dashboards**: Created interactive visualization tools for business intelligence\n• **API Development**: Designed robust RESTful and GraphQL APIs for mobile and web clients\n• **Cloud-Native Apps**: Deployed microservices architectures on AWS and Azure\n\nVisit the Projects section to see detailed case studies, live demos, and GitHub repositories!",
        category: 'projects'
      },
      {
        keywords: ['contact', 'email', 'reach', 'get in touch', 'hire', 'reach out', 'connect', 'message', 'talk', 'discuss', 'consultation'],
        response: "📧 Get In Touch With Jeffery:\n\nJeffery is always open to discussing:\n• New project opportunities\n• Technical collaborations\n• Consulting engagements\n• Full-time positions\n• Freelance projects\n• Speaking engagements\n• Technical mentorship\n\nScroll down to the Contact section to send a direct message through the contact form. You can also find his LinkedIn, GitHub, and other professional profiles there. He typically responds within 24-48 hours!",
        category: 'contact'
      },
      {
        keywords: ['education', 'degree', 'university', 'study', 'learning'],
        response: "Jeffery has a strong educational background in Computer Science and continuously updates his skills through certifications and courses. Check the Education section for details.",
        category: 'education'
      },
      {
        keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning', 'neural networks', 'nlp', 'computer vision', 'llm', 'gpt', 'chatgpt', 'openai'],
        response: "🤖 AI/ML Expertise:\n\nJeffery has comprehensive experience in:\n\n**Machine Learning**:\n• Supervised & Unsupervised Learning\n• Classification, Regression, Clustering\n• Model Training, Evaluation & Optimization\n• Feature Engineering & Selection\n\n**Deep Learning**:\n• Neural Networks (CNNs, RNNs, Transformers)\n• TensorFlow, PyTorch, Keras\n• Transfer Learning & Fine-tuning\n\n**Natural Language Processing**:\n• Text Classification & Sentiment Analysis\n• Named Entity Recognition (NER)\n• Chatbots & Conversational AI\n• OpenAI API, Hugging Face Transformers\n• RAG (Retrieval-Augmented Generation)\n\n**Computer Vision**:\n• Image Classification & Object Detection\n• Image Segmentation\n• Face Recognition\n• OCR (Optical Character Recognition)\n\n**MLOps**:\n• Model Deployment (Flask, FastAPI)\n• Cloud ML Services (AWS SageMaker, Azure ML)\n• Model Monitoring & Versioning\n• Docker Containerization for ML\n\nHe builds production-ready AI solutions that deliver real business value!",
        category: 'ai'
      },
      {
        keywords: ['web development', 'frontend', 'backend', 'fullstack', 'react', 'node', 'javascript', 'typescript', 'next.js', 'vue', 'responsive', 'spa'],
        response: "🌐 Full-Stack Web Development:\n\n**Frontend Mastery**:\n• React 18+ with Hooks & Context API\n• Next.js for SSR/SSG applications\n• Vue.js 3 with Composition API\n• TypeScript for type-safe code\n• Responsive Design (Mobile-First)\n• Tailwind CSS, Material-UI, Ant Design\n• State Management (Redux, Zustand, Pinia)\n• Framer Motion for animations\n• Progressive Web Apps (PWA)\n\n**Backend Excellence**:\n• Node.js with Express.js\n• RESTful API Design\n• GraphQL with Apollo Server\n• Authentication (JWT, OAuth 2.0, Auth0)\n• Python (Django, Flask, FastAPI)\n• Microservices Architecture\n• WebSockets for Real-time Features\n• API Rate Limiting & Security\n\n**Best Practices**:\n• Clean Code & SOLID Principles\n• Test-Driven Development (TDD)\n• Performance Optimization\n• SEO Best Practices\n• Accessibility (WCAG Standards)\n• Security (XSS, CSRF Protection)\n\nJeffery builds modern, fast, and user-friendly web applications!",
        category: 'web'
      },
      {
        keywords: ['cloud', 'aws', 'azure', 'gcp', 'devops', 'kubernetes', 'docker', 'deployment', 'infrastructure', 'serverless', 'lambda', 'ec2', 'cicd'],
        response: "☁️ Cloud & DevOps Expertise:\n\n**AWS (Amazon Web Services)**:\n• EC2, S3, Lambda (Serverless)\n• RDS, DynamoDB\n• CloudFront (CDN)\n• API Gateway\n• CloudWatch (Monitoring)\n• IAM (Security)\n\n**Azure & GCP**:\n• Virtual Machines & App Services\n• Cloud Storage Solutions\n• Serverless Functions\n• Database Services\n\n**DevOps & CI/CD**:\n• Docker Containerization\n• Kubernetes Orchestration\n• GitHub Actions, Jenkins, CircleCI\n• Automated Testing & Deployment\n• Blue-Green & Canary Deployments\n• Infrastructure as Code (Terraform, CloudFormation)\n\n**Monitoring & Logging**:\n• Prometheus, Grafana\n• ELK Stack (Elasticsearch, Logstash, Kibana)\n• Application Performance Monitoring\n\nJeffery designs scalable, reliable, and cost-effective cloud architectures!",
        category: 'cloud'
      },
      {
        keywords: ['blog', 'articles', 'writing', 'posts'],
        response: "Jeffery regularly writes about technology, software engineering, AI, and industry trends. Check out the Blog section to read his latest insights on tech topics!",
        category: 'blog'
      },
      {
        keywords: ['database', 'sql', 'nosql', 'mongodb', 'postgresql', 'mysql', 'redis', 'data', 'storage', 'orm', 'prisma', 'sequelize'],
        response: "🗄️ Database & Data Management:\n\n**SQL Databases**:\n• PostgreSQL (Advanced queries, indexing)\n• MySQL / MariaDB\n• SQLite for lightweight apps\n• Query Optimization & Performance Tuning\n• Database Normalization & Schema Design\n• Complex Joins, Subqueries, CTEs\n• Stored Procedures & Triggers\n\n**NoSQL Databases**:\n• MongoDB (Document-based)\n• Redis (Caching & Session Storage)\n• Firebase Firestore\n• Cassandra for distributed systems\n\n**ORMs & Query Builders**:\n• Prisma, Sequelize, TypeORM\n• Mongoose for MongoDB\n• SQLAlchemy (Python)\n\n**Data Engineering**:\n• ETL Pipelines\n• Data Warehousing\n• Database Migration Strategies\n• Backup & Recovery Solutions\n• Database Security & Encryption\n\n**Vector Databases** (for AI):\n• Pinecone, Weaviate, ChromaDB\n• Embedding storage for semantic search\n\nJeffery ensures data integrity, security, and optimal performance!",
        category: 'database'
      },
      {
        keywords: ['mobile', 'app', 'ios', 'android', 'react native'],
        response: "Jeffery has experience building cross-platform mobile applications using React Native and Flutter, delivering native-like experiences for both iOS and Android.",
        category: 'mobile'
      },
      {
        keywords: ['api', 'rest', 'graphql', 'microservices'],
        response: "Jeffery designs and implements RESTful APIs, GraphQL endpoints, and microservices architectures. He focuses on scalability, security, and performance in API development.",
        category: 'api'
      },
      {
        keywords: ['testing', 'qa', 'quality', 'jest', 'cypress'],
        response: "Jeffery follows test-driven development practices using Jest, React Testing Library, Cypress, and other testing frameworks to ensure code quality and reliability.",
        category: 'testing'
      },
      {
        keywords: ['security', 'authentication', 'authorization', 'oauth'],
        response: "Security is a priority in Jeffery's work. He implements secure authentication (JWT, OAuth), data encryption, and follows security best practices to protect applications.",
        category: 'security'
      },
      {
        keywords: ['performance', 'optimization', 'speed', 'fast'],
        response: "Jeffery optimizes applications for performance through code splitting, lazy loading, caching strategies, and efficient algorithms. He monitors and improves Core Web Vitals.",
        category: 'performance'
      },
      {
        keywords: ['available', 'hire', 'freelance', 'consultant', 'availability', 'free', 'working on'],
        response: "✅ Availability & Engagement:\n\nJeffery is currently available for:\n• **Full-time positions** (Remote or Hybrid)\n• **Freelance projects** (Short-term & Long-term)\n• **Contract work** (3-12 months)\n• **Consulting engagements** (Technical advisory)\n• **Part-time collaborations**\n\nHe's flexible with working hours and can accommodate different time zones. For specific availability and project timelines, please reach out through the Contact form!",
        category: 'availability'
      },
      {
        keywords: ['pricing', 'rate', 'cost', 'price', 'how much', 'fees', 'budget', 'payment', 'charge'],
        response: "💰 Pricing & Engagement:\n\nJeffery's rates are competitive and depend on:\n• Project scope and complexity\n• Timeline and urgency\n• Technology stack required\n• Ongoing support needs\n\n**Typical Engagement Models**:\n• Hourly rate for consulting\n• Fixed price for defined projects\n• Monthly retainer for ongoing work\n• Equity/partnership for startups\n\nFor a detailed quote tailored to your project, please contact Jeffery through the Contact form with your requirements. He'll provide a transparent breakdown and timeline estimate within 24 hours!",
        category: 'pricing'
      },
      {
        keywords: ['timeline', 'delivery', 'how long', 'duration', 'deadline', 'fast', 'quick', 'turnaround', 'when'],
        response: "⏱️ Project Timelines:\n\nDelivery times vary by project:\n\n**Small Projects** (Landing pages, simple APIs):\n• 1-2 weeks\n\n**Medium Projects** (Full web apps, dashboards):\n• 3-6 weeks\n\n**Large Projects** (Complex platforms, AI systems):\n• 2-4 months\n\n**Factors affecting timeline**:\n• Scope and feature complexity\n• Design requirements\n• Third-party integrations\n• Testing and quality assurance\n• Your feedback response time\n\nJeffery follows Agile methodology with:\n✓ Weekly sprints\n✓ Regular progress updates\n✓ Iterative development\n✓ Continuous client feedback\n\nRush projects available with adjusted timelines. Contact him to discuss your specific deadline!",
        category: 'timeline'
      },
      {
        keywords: ['methodology', 'process', 'workflow', 'agile', 'scrum', 'how do you work', 'development process'],
        response: "⚙️ Development Methodology:\n\nJeffery follows industry best practices:\n\n**Agile/Scrum Framework**:\n• 2-week sprints\n• Daily standups (for teams)\n• Sprint planning & retrospectives\n• Continuous delivery\n\n**Project Workflow**:\n1. **Discovery** - Requirements gathering & planning\n2. **Design** - Wireframes, mockups, architecture\n3. **Development** - Iterative coding with reviews\n4. **Testing** - Unit, integration & E2E tests\n5. **Deployment** - CI/CD pipeline setup\n6. **Maintenance** - Ongoing support & updates\n\n**Communication**:\n• Regular progress updates (Slack, Email)\n• Weekly demos of working features\n• Collaborative tools (Jira, Trello, GitHub)\n• Video calls for complex discussions\n\n**Quality Assurance**:\n• Code reviews\n• Automated testing\n• Performance monitoring\n• Security audits\n\nTransparent, collaborative, and results-driven!",
        category: 'methodology'
      },
      {
        keywords: ['ecommerce', 'e-commerce', 'online store', 'shop', 'shopping cart', 'payment', 'stripe', 'paypal', 'checkout'],
        response: "🛒 E-commerce Development:\n\nJeffery builds complete e-commerce solutions:\n\n**Features**:\n• Product catalog with search & filters\n• Shopping cart & wishlist\n• Secure checkout process\n• Payment integration (Stripe, PayPal, Razorpay)\n• Order management system\n• Inventory tracking\n• Customer accounts & profiles\n• Admin dashboard\n• Email notifications\n• Shipping calculator integration\n• Discount codes & promotions\n• Analytics & reporting\n\n**Platforms & Technologies**:\n• Custom builds (React + Node.js)\n• Shopify customization\n• WooCommerce (WordPress)\n• Headless commerce (Contentful, Sanity)\n\n**Additional Services**:\n• SEO optimization\n• Mobile responsive design\n• Payment gateway integration\n• SSL & PCI compliance\n• Multi-currency support\n\nReady to launch your online store? Get in touch!",
        category: 'ecommerce'
      },
      {
        keywords: ['startup', 'mvp', 'minimum viable product', 'prototype', 'launch', 'idea', 'new business'],
        response: "🚀 Startup & MVP Development:\n\nJeffery helps startups bring ideas to life:\n\n**MVP Development**:\n• Rapid prototyping (2-4 weeks)\n• Core feature prioritization\n• Scalable architecture from day one\n• Cost-effective tech stack\n• User feedback integration\n\n**Startup Services**:\n• **Technical Consultation** - Tech stack selection, architecture planning\n• **Full-Stack Development** - Web & mobile applications\n• **AI Integration** - Add intelligent features to your product\n• **Cloud Setup** - Scalable, secure infrastructure\n• **MVP to Scale** - Growing from prototype to production\n\n**Flexible Engagement**:\n• Equity partnerships considered\n• Fractional CTO services\n• Technical co-founder collaboration\n• Pay-as-you-grow models\n\n**Experience with**:\n• SaaS platforms\n• Fintech applications\n• Healthcare tech\n• EdTech solutions\n• Marketplace platforms\n\nLet's validate your idea and get to market fast!",
        category: 'startup'
      },
      {
        keywords: ['industry', 'sector', 'domain', 'fintech', 'healthcare', 'education', 'edtech', 'saas'],
        response: "🏢 Industry Experience:\n\nJeffery has worked across multiple industries:\n\n**Fintech**:\n• Payment processing systems\n• Banking applications\n• Cryptocurrency platforms\n• Financial dashboards\n• Compliance & security\n\n**Healthcare**:\n• Patient management systems\n• Telemedicine platforms\n• Health data analytics\n• HIPAA-compliant applications\n• Medical imaging (AI/ML)\n\n**E-commerce & Retail**:\n• Online marketplaces\n• Inventory management\n• Point of sale (POS) systems\n• Customer analytics\n\n**Education (EdTech)**:\n• Learning management systems (LMS)\n• Online course platforms\n• Student portals\n• Interactive learning tools\n\n**SaaS**:\n• B2B platforms\n• Multi-tenant architecture\n• Subscription management\n• Analytics dashboards\n\n**Real Estate**:\n• Property listing platforms\n• CRM systems\n• Virtual tours integration\n\nAdaptable to any industry's unique requirements!",
        category: 'industry'
      },
      {
        keywords: ['team', 'collaborate', 'collaboration', 'remote', 'work with team', 'communication'],
        response: "👥 Team Collaboration:\n\nJeffery integrates seamlessly with teams:\n\n**Communication Tools**:\n• Slack, Microsoft Teams, Discord\n• Email updates & reports\n• Video calls (Zoom, Google Meet)\n• Project management (Jira, Asana, Trello)\n\n**Version Control**:\n• Git & GitHub/GitLab/Bitbucket\n• Pull request reviews\n• Branching strategies\n• Code documentation\n\n**Remote Work**:\n• Experienced remote developer\n• Flexible timezone accommodation\n• Async communication proficiency\n• Regular status updates\n\n**Collaboration Style**:\n• Pair programming available\n• Code reviews and mentoring\n• Knowledge sharing\n• Documentation-first approach\n• Team player mentality\n\n**Can work with**:\n• Designers (Figma collaboration)\n• Product managers\n• Other developers\n• QA teams\n• DevOps engineers\n\nWorks independently or as part of your existing team!",
        category: 'team'
      },
      {
        keywords: ['location', 'where', 'based', 'live'],
        response: "Jeffery is based in Lagos, Nigeria, and is available for both remote and on-site opportunities globally.",
        category: 'location'
      },
      {
        keywords: ['github', 'code', 'repository', 'open source', 'portfolio code', 'source code'],
        response: "💻 GitHub & Open Source:\n\nJeffery actively contributes to open source and maintains public repositories:\n\n• Clean, well-documented code\n• Real-world project examples\n• Reusable components & libraries\n• Active maintenance and updates\n\nYou can find his GitHub profile in the Contact section below to review:\n• Code quality and style\n• Project architecture\n• Contribution history\n• Technical skills in practice\n\nHe believes in open source collaboration and knowledge sharing!",
        category: 'github'
      },
      {
        keywords: ['support', 'maintenance', 'bug fix', 'updates', 'after launch', 'warranty', 'ongoing'],
        response: "🔧 Support & Maintenance:\n\nJeffery provides comprehensive post-launch support:\n\n**Included Support**:\n• Bug fixes for 30-90 days (depending on project)\n• Deployment assistance\n• Initial troubleshooting\n• Documentation handoff\n\n**Ongoing Maintenance Plans**:\n• **Basic**: Monthly check-ins, critical bug fixes\n• **Standard**: Regular updates, security patches, minor features\n• **Premium**: Priority support, regular enhancements, 24/7 monitoring\n\n**Services Include**:\n• Performance monitoring\n• Security updates\n• Dependency updates\n• Feature enhancements\n• Database optimization\n• Server maintenance\n• Backup management\n• Technical support\n\n**Response Times**:\n• Critical issues: Within 24 hours\n• Standard requests: 2-3 business days\n• Scheduled maintenance: As agreed\n\nYour application stays secure, fast, and up-to-date!",
        category: 'support'
      },
      {
        keywords: ['certifications', 'certified', 'credentials', 'courses', 'training', 'qualifications'],
        response: "🎓 Certifications & Continuous Learning:\n\nJeffery stays current through:\n\n**Certifications**:\n• AWS Certified Solutions Architect\n• Google Cloud Professional\n• Machine Learning Specializations\n• Full-Stack Development Certifications\n\n**Continuous Learning**:\n• Regular course updates (Udemy, Coursera, Pluralsight)\n• Tech conferences & workshops\n• Industry blogs & publications\n• Open source contributions\n• Personal R&D projects\n\n**Areas of Recent Focus**:\n• Latest AI/ML advancements (LLMs, GPT-4, etc.)\n• Modern React patterns (Server Components, Suspense)\n• Cloud-native architectures\n• Edge computing\n• Web3 technologies\n\nCommitted to delivering solutions using the latest best practices!",
        category: 'certifications'
      },
      {
        keywords: ['quality', 'clean code', 'best practices', 'standards', 'coding standards', 'code review'],
        response: "✨ Code Quality & Standards:\n\nJeffery maintains high code quality:\n\n**Coding Practices**:\n• SOLID principles\n• DRY (Don't Repeat Yourself)\n• Clean Code methodology\n• Meaningful naming conventions\n• Comprehensive comments & documentation\n\n**Code Review Process**:\n• Self-review before submission\n• Peer review integration\n• Automated linting (ESLint, Prettier)\n• Static code analysis\n• Security scanning\n\n**Testing Standards**:\n• Unit tests (Jest, Vitest)\n• Integration tests\n• End-to-end tests (Cypress, Playwright)\n• Test coverage monitoring (>80%)\n• Performance testing\n\n**Documentation**:\n• README with setup instructions\n• API documentation (Swagger/OpenAPI)\n• Code comments for complex logic\n• Architecture diagrams\n• Deployment guides\n\n**Version Control**:\n• Semantic versioning\n• Meaningful commit messages\n• Feature branching\n• Pull request templates\n\nProduction-ready code that's maintainable and scalable!",
        category: 'quality'
      },
      {
        keywords: ['integration', 'integrate', 'api integration', 'third party', 'connect', 'plugin'],
        response: "🔌 Integration Capabilities:\n\nJeffery integrates various third-party services:\n\n**Payment Gateways**:\n• Stripe, PayPal, Square\n• Razorpay, Paystack\n• Cryptocurrency payments\n\n**Authentication**:\n• Auth0, Firebase Auth\n• OAuth (Google, Facebook, GitHub)\n• SAML, LDAP\n\n**Communication**:\n• SendGrid, Mailgun (Email)\n• Twilio (SMS, Voice)\n• Slack, Discord APIs\n\n**AI & ML Services**:\n• OpenAI API (GPT, DALL-E)\n• Google Cloud AI\n• AWS ML services\n• Hugging Face\n\n**Analytics**:\n• Google Analytics\n• Mixpanel, Amplitude\n• Custom analytics dashboards\n\n**Cloud Storage**:\n• AWS S3, Google Cloud Storage\n• Cloudinary (Media)\n• DigitalOcean Spaces\n\n**CRM & Business Tools**:\n• Salesforce, HubSpot\n• Zapier, Make (automation)\n• Notion, Airtable APIs\n\n**Social Media**:\n• Twitter, Instagram APIs\n• LinkedIn integration\n• Social sharing\n\nAny API can be integrated into your application!",
        category: 'integration'
      },
      {
        keywords: ['migration', 'migrate', 'upgrade', 'modernize', 'legacy', 'rewrite', 'refactor'],
        response: "🔄 Migration & Modernization:\n\nJeffery helps modernize existing applications:\n\n**Migration Services**:\n• Legacy to modern tech stack\n• Monolith to microservices\n• On-premise to cloud\n• Database migrations\n• Framework upgrades (React 16 → 18, etc.)\n• Language migrations (JavaScript → TypeScript)\n\n**Modernization Approach**:\n1. **Assessment** - Audit current system\n2. **Planning** - Migration strategy & timeline\n3. **Incremental Migration** - Phased approach\n4. **Testing** - Ensure feature parity\n5. **Deployment** - Zero-downtime migration\n6. **Optimization** - Performance improvements\n\n**Common Migrations**:\n• WordPress to modern frontend\n• PHP to Node.js/Python\n• jQuery to React/Vue\n• REST API to GraphQL\n• MySQL to PostgreSQL\n• Server-based to serverless\n\n**Benefits**:\n• Improved performance\n• Better maintainability\n• Enhanced security\n• Reduced technical debt\n• Modern user experience\n• Cost optimization\n\nPreserve your business logic while modernizing technology!",
        category: 'migration'
      },
      {
        keywords: ['seo', 'search engine', 'google', 'ranking', 'optimization', 'visibility'],
        response: "🔍 SEO & Performance Optimization:\n\nJeffery builds SEO-friendly applications:\n\n**Technical SEO**:\n• Server-side rendering (SSR) with Next.js\n• Static site generation (SSG)\n• Proper meta tags & schema markup\n• XML sitemaps & robots.txt\n• Semantic HTML structure\n• Clean URL structure\n\n**Performance Optimization**:\n• Image optimization & lazy loading\n• Code splitting & lazy loading\n• CDN integration\n• Caching strategies\n• Core Web Vitals optimization (LCP, FID, CLS)\n• Mobile-first responsive design\n\n**Accessibility**:\n• WCAG 2.1 compliance\n• ARIA labels\n• Keyboard navigation\n• Screen reader compatibility\n\n**Analytics Integration**:\n• Google Analytics 4\n• Search Console setup\n• Conversion tracking\n• Performance monitoring\n\nRank higher and load faster!",
        category: 'seo'
      },
      {
        keywords: ['help', 'support', 'assist', 'question'],
        response: "I'm here to help! You can ask me about Jeffery's skills, experience, projects, or how to get in touch. What would you like to know?",
        category: 'help'
      },
      {
        keywords: ['thank', 'thanks', 'appreciate'],
        response: "You're welcome! Feel free to ask if you have any other questions about Jeffery's work or expertise.",
        category: 'thanks'
      },
      {
        keywords: ['bye', 'goodbye', 'see you', 'later'],
        response: "Goodbye! Thanks for visiting Jeffery's portfolio. Don't hesitate to reach out through the Contact section!",
        category: 'farewell'
      }
    ];
  }

  public processMessage(userMessage: string): Message {
    const response = this.findBestResponse(userMessage.toLowerCase());
    
    return {
      id: Date.now().toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date()
    };
  }

  private findBestResponse(message: string): string {
    let bestMatch: ChatResponse = {
      response: "🤔 I'm not sure I understand that question. As JeffBot, I can help you with:\n• 💼 Jeffery's skills & expertise\n• 📊 His work experience\n• 🚀 Projects & portfolio\n• 🎓 Education & certifications\n• 📧 How to contact him\n\nWhat would you like to know?",
      confidence: 0
    };

    for (const entry of this.knowledgeBase) {
      let matchCount = 0;
      
      for (const keyword of entry.keywords) {
        if (message.includes(keyword)) {
          matchCount++;
        }
      }

      const confidence = matchCount / entry.keywords.length;
      
      if (confidence > bestMatch.confidence) {
        bestMatch = {
          response: entry.response,
          confidence: confidence
        };
      }
    }

    if (bestMatch.confidence > 0.3) {
      return bestMatch.response;
    }

    const greetingWords = ['hello', 'hi', 'hey'];
    if (greetingWords.some(word => message.includes(word))) {
      return "👋 Hello! I'm JeffBot, your personal guide to Jeffery's portfolio. I can help you learn about his skills, projects, and experience. How can I assist you today?";
    }

    const questionWords = ['what', 'who', 'when', 'where', 'why', 'how'];
    if (questionWords.some(word => message.includes(word))) {
      return "💡 I can help you with information about:\n• 💻 Skills & Technologies\n• 📊 Work Experience  \n• 🚀 Projects & Portfolio\n• 🎓 Education & Certifications\n• 📧 Contact Information\n\nWhat specifically would you like to know?";
    }

    return bestMatch.response;
  }

  public getSuggestions(): string[] {
    return [
      "💻 What are Jeffery's skills?",
      "📊 Tell me about his experience",
      "🚀 What projects has he worked on?",
      "📧 How can I contact him?",
      "🤖 What AI/ML expertise does he have?"
    ];
  }
}
