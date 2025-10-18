import { Request, Response } from 'express';
import { z } from 'zod';
import { AppError } from '../middleware/errorHandler';
import { AIService } from '../services/AIService';

const chatSchema = z.object({
  message: z.string().min(1, 'Message is required'),
  sessionId: z.string().optional(),
});

export class AIController {
  private aiService: AIService;

  constructor() {
    this.aiService = new AIService();
    this.chat = this.chat.bind(this);
  }

  async chat(req: Request, res: Response) {
    const validation = chatSchema.safeParse(req.body);
    
    if (!validation.success) {
      throw new AppError(validation.error.errors[0].message, 400);
    }

    const { message, sessionId } = validation.data;

    const response = await this.aiService.processMessage(message, sessionId);

    res.json({
      success: true,
      data: response,
    });
  }
}