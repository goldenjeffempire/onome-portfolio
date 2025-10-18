import { Request, Response } from 'express';
import prisma from '../config/database';
import { z } from 'zod';
import { AppError } from '../middleware/errorHandler';
import { logger } from '../utils/logger';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export class ContactController {
  async submit(req: Request, res: Response) {
    // Validate input
    const validation = contactSchema.safeParse(req.body);
    
    if (!validation.success) {
      throw new AppError(validation.error.errors[0].message, 400);
    }

    const { name, email, subject, message } = validation.data;

    // Store in database
    const inquiry = await prisma.contactInquiry.create({
      data: {
        name,
        email,
        subject,
        message,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
      },
    });

    logger.info('New contact form submission', {
      id: inquiry.id,
      email,
      subject,
    });

    // TODO: Send email notification (implement when email service is set up)
    // await emailService.sendContactNotification(inquiry);

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      data: {
        id: inquiry.id,
      },
    });
  }
}