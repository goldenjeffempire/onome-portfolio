import { Router } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { AIController } from '../controllers/AIController';

const router = Router();
const controller = new AIController();

// AI chat endpoint
router.post('/chat', asyncHandler(controller.chat));

export default router;