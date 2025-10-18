import { Router } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { ProjectController } from '../controllers/ProjectController';

const router = Router();
const controller = new ProjectController();

// Public routes - no authentication required
router.get('/', asyncHandler(controller.getAll));
router.get('/featured', asyncHandler(controller.getFeatured));
router.get('/:id', asyncHandler(controller.getById));

export default router;