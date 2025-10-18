import { Router } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { BlogController } from '../controllers/BlogController';

const router = Router();
const controller = new BlogController();

// Public routes
router.get('/', asyncHandler(controller.getAll));
router.get('/slug/:slug', asyncHandler(controller.getBySlug));
router.get('/:id', asyncHandler(controller.getById));
router.get('/category/:category', asyncHandler(controller.getByCategory));

export default router;