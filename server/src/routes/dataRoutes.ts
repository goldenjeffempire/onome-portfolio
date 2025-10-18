import { Router, Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import prisma from '../config/database';

const router = Router();

// Education endpoints
router.get('/education', asyncHandler(async (_req: Request, res: Response) => {
  const education = await prisma.education.findMany({
    orderBy: [{ order: 'asc' }, { startDate: 'desc' }],
  });

  res.json({
    success: true,
    data: education,
  });
}));

// Testimonials endpoints
router.get('/testimonials', asyncHandler(async (_req: Request, res: Response) => {
  const testimonials = await prisma.testimonial.findMany({
    where: { published: true },
    orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
  });

  res.json({
    success: true,
    data: testimonials,
  });
}));

// Stats endpoints
router.get('/stats', asyncHandler(async (_req: Request, res: Response) => {
  const stats = await prisma.stat.findMany({
    orderBy: { order: 'asc' },
  });

  res.json({
    success: true,
    data: stats,
  });
}));

export default router;