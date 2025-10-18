import { Router } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { ContactController } from '../controllers/ContactController';

const router = Router();
const controller = new ContactController();

// Public route for contact form submission
router.post('/', asyncHandler(controller.submit));

export default router;