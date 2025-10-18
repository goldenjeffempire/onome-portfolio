import { Router, Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import prisma from '../config/database';

const router = Router();

router.get('/', asyncHandler(async (_req: Request, res: Response) => {
  const experiences = await prisma.experience.findMany({
    orderBy: [{ order: 'asc' }, { startDate: 'desc' }],
  });

  res.json({
    success: true,
    data: experiences,
  });
}));

router.get('/:id', asyncHandler(async (req: Request, res: Response) => {
  const experience = await prisma.experience.findUnique({
    where: { id: req.params.id },
  });

  if (!experience) {
    return res.status(404).json({
      success: false,
      message: 'Experience not found',
    });
  }

  return res.json({
    success: true,
    data: experience,
  });
}));

export default router;