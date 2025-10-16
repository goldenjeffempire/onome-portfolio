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
        keywords: ['hello', 'hi', 'hey', 'greetings'],
        response: "Hello! I'm Jeffery's AI assistant. I can help you learn about his skills, projects, and experience. How can I assist you today?",
        category: 'greeting'
      },
      {
        keywords: ['skills', 'technologies', 'tech stack', 'expertise', 'what can you do'],
        response: "Jeffery specializes in Full-Stack Development (React, Node.js, TypeScript), AI/ML (TensorFlow, PyTorch, OpenAI), Cloud Technologies (AWS, Azure, GCP), and DevOps (Docker, Kubernetes, CI/CD). He's proficient in Python, JavaScript, and modern web frameworks.",
        category: 'skills'
      },
      {
        keywords: ['experience', 'work', 'background', 'career'],
        response: "Jeffery is a Software Engineer and AI/ML Expert with extensive experience building scalable applications, implementing machine learning solutions, and architecting cloud infrastructure. Check the Experience section for detailed work history.",
        category: 'experience'
      },
      {
        keywords: ['projects', 'portfolio', 'work samples', 'what have you built'],
        response: "Jeffery has worked on various projects including AI-powered applications, full-stack web platforms, and cloud-based solutions. Visit the Projects section to see detailed case studies and live demos.",
        category: 'projects'
      },
      {
        keywords: ['contact', 'email', 'reach', 'get in touch', 'hire'],
        response: "You can contact Jeffery through the Contact section below. Feel free to reach out for collaborations, project inquiries, or professional opportunities!",
        category: 'contact'
      },
      {
        keywords: ['education', 'degree', 'university', 'study', 'learning'],
        response: "Jeffery has a strong educational background in Computer Science and continuously updates his skills through certifications and courses. Check the Education section for details.",
        category: 'education'
      },
      {
        keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning'],
        response: "Jeffery has expertise in AI/ML including deep learning, natural language processing, computer vision, and deploying ML models to production. He works with TensorFlow, PyTorch, scikit-learn, and various cloud ML services.",
        category: 'ai'
      },
      {
        keywords: ['web development', 'frontend', 'backend', 'fullstack', 'react', 'node'],
        response: "Jeffery excels in full-stack web development using React, Vue, Angular for frontend, and Node.js, Python, Express for backend. He builds scalable, performant web applications with modern best practices.",
        category: 'web'
      },
      {
        keywords: ['cloud', 'aws', 'azure', 'gcp', 'devops', 'kubernetes', 'docker'],
        response: "Jeffery is experienced with cloud platforms (AWS, Azure, GCP) and DevOps practices including containerization with Docker, orchestration with Kubernetes, and CI/CD pipeline implementation.",
        category: 'cloud'
      },
      {
        keywords: ['blog', 'articles', 'writing', 'posts'],
        response: "Jeffery regularly writes about technology, software engineering, AI, and industry trends. Check out the Blog section to read his latest insights on tech topics!",
        category: 'blog'
      },
      {
        keywords: ['database', 'sql', 'nosql', 'mongodb', 'postgresql'],
        response: "Jeffery works with both SQL databases (PostgreSQL, MySQL) and NoSQL databases (MongoDB, Redis). He designs efficient database schemas and optimizes queries for performance.",
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
        keywords: ['available', 'hire', 'freelance', 'consultant'],
        response: "Jeffery is open to new opportunities! Please use the Contact form to discuss potential collaborations, projects, or consulting engagements.",
        category: 'availability'
      },
      {
        keywords: ['location', 'where', 'based', 'live'],
        response: "Jeffery is based in Lagos, Nigeria, and is available for both remote and on-site opportunities globally.",
        category: 'location'
      },
      {
        keywords: ['github', 'code', 'repository', 'open source'],
        response: "You can find Jeffery's code and open-source contributions on GitHub. Check the Contact section for the GitHub link!",
        category: 'github'
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
      response: "I'm not sure I understand that question. You can ask me about Jeffery's skills, experience, projects, education, or how to contact him. What would you like to know?",
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
      return "Hello! I'm Jeffery's AI assistant. I can help you learn about his skills, projects, and experience. How can I assist you today?";
    }

    const questionWords = ['what', 'who', 'when', 'where', 'why', 'how'];
    if (questionWords.some(word => message.includes(word))) {
      return "I can help you with information about:\n• Skills & Technologies\n• Work Experience\n• Projects & Portfolio\n• Education & Certifications\n• Contact Information\n\nWhat specifically would you like to know?";
    }

    return bestMatch.response;
  }

  public getSuggestions(): string[] {
    return [
      "What are Jeffery's skills?",
      "Tell me about his experience",
      "What projects has he worked on?",
      "How can I contact him?",
      "What technologies does he use?"
    ];
  }
}
