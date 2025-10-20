import { Router, Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { Database } from '../db/database';

const router = Router();

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

router.get('/', asyncHandler(async (_req: Request, res: Response) => {
  const experiences = await Database.find<Experience>('experience');
  
  experiences.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  res.json({
    success: true,
    data: experiences,
  });
}));

router.get('/:id', asyncHandler(async (req: Request, res: Response) => {
  const experience = await Database.findById<Experience>('experience', req.params.id);

  if (!experience) {
    res.status(404).json({
      success: false,
      message: 'Experience not found',
    });
    return;
  }

  res.json({
    success: true,
    data: experience,
  });
}));

export default router;
