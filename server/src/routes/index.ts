import { Router } from 'express';
import projectRoutes from './projectRoutes';
import blogRoutes from './blogRoutes';
import experienceRoutes from './experienceRoutes';
import contactRoutes from './contactRoutes';
import aiRoutes from './aiRoutes';
import dataRoutes from './dataRoutes';

const router = Router();

// API version prefix
const API_VERSION = 'v1';

// Health check for API
router.get('/health', (_req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    version: API_VERSION,
    timestamp: new Date().toISOString(),
  });
});

// Mount routes
router.use(`/${API_VERSION}/projects`, projectRoutes);
router.use(`/${API_VERSION}/blog`, blogRoutes);
router.use(`/${API_VERSION}/experience`, experienceRoutes);
router.use(`/${API_VERSION}/contact`, contactRoutes);
router.use(`/${API_VERSION}/ai`, aiRoutes);
router.use(`/${API_VERSION}/data`, dataRoutes);

export default router;