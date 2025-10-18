import { Router } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import prisma from '../config/database';

const router = Router();

router.get('/', asyncHandler(async (_req, res) => {
  const experiences = await prisma.experience.findMany({
    orderBy: [{ order: 'asc' }, { startDate: 'desc' }],
  });

  res.json({
    success: true,
    data: experiences,
  });
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const experience = await prisma.experience.findUnique({
    where: { id: req.params.id },
  });

  if (!experience) {
    return res.status(404).json({
      success: false,
      message: 'Experience not found',
    });
  }

  res.json({
    success: true,
    data: experience,
  });
}));

export default router;