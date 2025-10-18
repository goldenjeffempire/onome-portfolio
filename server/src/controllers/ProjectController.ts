import { Request, Response } from 'express';
import prisma from '../config/database';
import { AppError } from '../middleware/errorHandler';

export class ProjectController {
  async getAll(req: Request, res: Response) {
    const { published = 'true' } = req.query;
    
    const projects = await prisma.project.findMany({
      where: {
        published: published === 'true',
      },
      orderBy: [
        { featured: 'desc' },
        { order: 'asc' },
        { createdAt: 'desc' },
      ],
    });

    res.json({
      success: true,
      data: projects,
      count: projects.length,
    });
  }

  async getFeatured(req: Request, res: Response) {
    const projects = await prisma.project.findMany({
      where: {
        published: true,
        featured: true,
      },
      orderBy: [
        { order: 'asc' },
        { createdAt: 'desc' },
      ],
    });

    res.json({
      success: true,
      data: projects,
      count: projects.length,
    });
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      throw new AppError('Project not found', 404);
    }

    res.json({
      success: true,
      data: project,
    });
  }
}