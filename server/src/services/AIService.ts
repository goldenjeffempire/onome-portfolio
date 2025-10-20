import OpenAI from 'openai';
import { Database } from '../db/database';
import env from '../config/env';
import { logger } from '../utils/logger';
import { AppError } from '../middleware/errorHandler';
import { randomUUID } from 'crypto';

interface ChatConversation {
  id: string;
  sessionId: string;
  createdAt: string;
  updatedAt: string;
}

interface ChatMessage {
  id: string;
  conversationId: string;
  role: string;
  content: string;
  timestamp: string;
}

export class AIService {
  private openai: OpenAI | null = null;
  private fallbackMode: boolean = false;

  constructor() {
    if (env.OPENAI_API_KEY) {
      try {
        // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
        this.openai = new OpenAI({
          apiKey: env.OPENAI_API_KEY,
        });
        logger.info('OpenAI client initialized');
      } catch (error) {
        logger.warn('Failed to initialize OpenAI, falling back to local chatbot', { error });
        this.fallbackMode = true;
      }
    } else {
      logger.warn('OpenAI API key not configured, using fallback mode');
      this.fallbackMode = true;
    }
  }

  async processMessage(message: string, sessionId?: string): Promise<{ message: string; sessionId: string }> {
    const session = sessionId || `session_${Date.now()}`;

    // Get or create conversation
    const conversations = await Database.find<ChatConversation>('chatConversations');
    let conversation = conversations.find(c => c.sessionId === session);

    if (!conversation) {
      conversation = {
        id: randomUUID(),
        sessionId: session,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      await Database.create('chatConversations', conversation);
    }

    // Save user message
    const userMessage: ChatMessage = {
      id: randomUUID(),
      conversationId: conversation.id,
      role: 'USER',
      content: message,
      timestamp: new Date().toISOString(),
    };
    await Database.create('chatConversations', userMessage);

    // Get conversation history
    const allMessages = await Database.find<ChatMessage>('chatConversations');
    const history = allMessages
      .filter(m => m.conversationId === conversation.id)
      .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

    // Get AI response
    let aiResponse: string;

    if (this.fallbackMode || !this.openai) {
      aiResponse = this.getFallbackResponse(message);
    } else {
      try {
        aiResponse = await this.getOpenAIResponse(message, history);
      } catch (error) {
        logger.error('OpenAI API error', { error });
        aiResponse = this.getFallbackResponse(message);
      }
    }

    // Save AI response
    const assistantMessage: ChatMessage = {
      id: randomUUID(),
      conversationId: conversation.id,
      role: 'ASSISTANT',
      content: aiResponse,
      timestamp: new Date().toISOString(),
    };
    await Database.create('chatConversations', assistantMessage);

    return {
      message: aiResponse,
      sessionId: session,
    };
  }

  private async getOpenAIResponse(_message: string, history: ChatMessage[]): Promise<string> {
    if (!this.openai) {
      throw new AppError('OpenAI not initialized', 500);
    }

    // Build conversation history for context
    const messages: Array<{ role: string; content: string }> = [
      {
        role: 'system',
        content: `You are an AI assistant for Jeffery Onome Emuodafevware's professional portfolio. You're knowledgeable about his skills, experience, and projects. Be helpful, professional, and concise.

Key Information:
- Full Stack Developer & AI/ML Expert
- Expert in: React, Node.js, TypeScript, Python, AI/ML (TensorFlow, PyTorch), Cloud (AWS, Azure)
- Specializes in building scalable applications and AI-powered solutions
- Based in Lagos, Nigeria, available for remote work globally
- Contact: jeffemuodafe124@gmail.com

Provide helpful, accurate information about Jeffery's expertise and encourage users to explore the portfolio sections or contact him for opportunities.`,
      },
    ];

    // Add recent conversation history (last 10 messages for context)
    const recentHistory = history.slice(-10);
    for (const msg of recentHistory) {
      messages.push({
        role: msg.role === 'USER' ? 'user' : 'assistant',
        content: msg.content,
      });
    }

    // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-5',
      messages,
      max_completion_tokens: 500,
    });

    return completion.choices[0]?.message?.content || 'I apologize, but I could not generate a response. Please try again.';
  }

  private getFallbackResponse(message: string): string {
    const lowerMessage = message.toLowerCase();

    // Simple keyword-based responses (fallback when OpenAI is not available)
    const responses: Record<string, string> = {
      'hello': "Hello! I'm Jeffery's AI assistant. I can help you learn about his skills, projects, and experience. What would you like to know?",
      'hi': "Hi there! I'm here to help you explore Jeffery's portfolio. Feel free to ask about his skills, experience, or projects!",
      'skills': "Jeffery specializes in Full-Stack Development (React, Node.js, TypeScript), AI/ML (TensorFlow, PyTorch, OpenAI), Cloud Technologies (AWS, Azure, GCP), and DevOps. He's proficient in Python, JavaScript, and modern web frameworks.",
      'experience': "Jeffery is a Software Engineer and AI/ML Expert with extensive experience building scalable applications, implementing machine learning solutions, and architecting cloud infrastructure. Check the Experience section for detailed work history!",
      'projects': "Jeffery has worked on various projects including AI-powered applications, full-stack web platforms, and cloud-based solutions. Visit the Projects section to see detailed case studies and live demos.",
      'contact': "You can contact Jeffery through the Contact form on this website or email him directly at jeffemuodafe124@gmail.com. He's open to collaborations, project inquiries, and professional opportunities!",
      'ai': "Jeffery has expertise in AI/ML including deep learning, natural language processing, computer vision, and deploying ML models to production. He works with TensorFlow, PyTorch, scikit-learn, and various cloud ML services.",
    };

    for (const [keyword, response] of Object.entries(responses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }

    return "I can help you with information about Jeffery's skills, experience, projects, and how to contact him. What specifically would you like to know?";
  }
}
