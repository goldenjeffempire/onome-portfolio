import { Request, Response } from 'express';
import { Database } from '../db/database';
import { AppError } from '../middleware/errorHandler';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  size: string;
  order: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export class ProjectController {
  async getAll(req: Request, res: Response) {
    const { published = 'true' } = req.query;
    
    const allProjects = await Database.find<Project>('projects');
    
    const filteredProjects = allProjects
      .filter(p => published === 'true' ? p.published : true)
      .sort((a, b) => {
        if (a.featured !== b.featured) return b.featured ? 1 : -1;
        if (a.order !== b.order) return a.order - b.order;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });

    res.json({
      success: true,
      data: filteredProjects,
      count: filteredProjects.length,
    });
  }

  async getFeatured(_req: Request, res: Response) {
    const allProjects = await Database.find<Project>('projects');
    
    const projects = allProjects
      .filter(p => p.published && p.featured)
      .sort((a, b) => {
        if (a.order !== b.order) return a.order - b.order;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });

    res.json({
      success: true,
      data: projects,
      count: projects.length,
    });
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const project = await Database.findById<Project>('projects', id);

    if (!project) {
      throw new AppError('Project not found', 404);
    }

    res.json({
      success: true,
      data: project,
    });
  }
}
