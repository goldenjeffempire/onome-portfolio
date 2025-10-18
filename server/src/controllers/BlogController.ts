import { Request, Response } from 'express';
import prisma from '../config/database';
import { AppError } from '../middleware/errorHandler';

export class BlogController {
  async getAll(req: Request, res: Response) {
    const { published = 'true', category, limit = '10', page = '1' } = req.query;
    
    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    const where = {
      published: published === 'true',
      ...(category && { category: category as string }),
    };

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limitNum,
      }),
      prisma.blogPost.count({ where }),
    ]);

    res.json({
      success: true,
      data: posts,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
      },
    });
  }

  async getBySlug(req: Request, res: Response) {
    const { slug } = req.params;

    const post = await prisma.blogPost.findUnique({
      where: { slug },
    });

    if (!post) {
      throw new AppError('Blog post not found', 404);
    }

    // Increment views
    await prisma.blogPost.update({
      where: { id: post.id },
      data: { views: post.views + 1 },
    });

    res.json({
      success: true,
      data: { ...post, views: post.views + 1 },
    });
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const post = await prisma.blogPost.findUnique({
      where: { id },
    });

    if (!post) {
      throw new AppError('Blog post not found', 404);
    }

    res.json({
      success: true,
      data: post,
    });
  }

  async getByCategory(req: Request, res: Response) {
    const { category } = req.params;
    const { published = 'true' } = req.query;

    const posts = await prisma.blogPost.findMany({
      where: {
        category,
        published: published === 'true',
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({
      success: true,
      data: posts,
      count: posts.length,
    });
  }
}