import { Router, Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { Database } from '../db/database';

const router = Router();

interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
  achievements: string[];
  order: number;
  createdAt: string;
  updatedAt: string;
}

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company?: string;
  content: string;
  image?: string;
  rating: number;
  published: boolean;
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

// Education endpoints
router.get('/education', asyncHandler(async (_req: Request, res: Response) => {
  const education = await Database.find<Education>('education');
  
  education.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  res.json({
    success: true,
    data: education,
  });
}));

// Testimonials endpoints
router.get('/testimonials', asyncHandler(async (_req: Request, res: Response) => {
  const testimonials = await Database.findWhere<Testimonial>(
    'testimonials',
    t => t.published
  );
  
  testimonials.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  res.json({
    success: true,
    data: testimonials,
  });
}));

// Stats endpoints
router.get('/stats', asyncHandler(async (_req: Request, res: Response) => {
  const stats = await Database.find<Stat>('stats');
  
  stats.sort((a, b) => a.order - b.order);

  res.json({
    success: true,
    data: stats,
  });
}));

export default router;
