import { Request, Response } from 'express';
import { Database } from '../db/database';
import { AppError } from '../middleware/errorHandler';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  image?: string;
  published: boolean;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export class BlogController {
  async getAll(req: Request, res: Response) {
    const { published = 'true', category, limit = '10', page = '1' } = req.query;
    
    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    let posts = await Database.find<BlogPost>('blogPosts');
    
    // Filter
    posts = posts.filter(p => {
      if (published === 'true' && !p.published) return false;
      if (category && p.category !== category) return false;
      return true;
    });

    // Sort by createdAt desc
    posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const total = posts.length;
    const paginatedPosts = posts.slice(skip, skip + limitNum);

    res.json({
      success: true,
      data: paginatedPosts,
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

    const posts = await Database.find<BlogPost>('blogPosts');
    const post = posts.find(p => p.slug === slug);

    if (!post) {
      throw new AppError('Blog post not found', 404);
    }

    // Increment views
    await Database.update<BlogPost>('blogPosts', post.id, { views: post.views + 1 });

    res.json({
      success: true,
      data: { ...post, views: post.views + 1 },
    });
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const post = await Database.findById<BlogPost>('blogPosts', id);

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

    const posts = await Database.findWhere<BlogPost>(
      'blogPosts',
      p => p.category === category && (published === 'true' ? p.published : true)
    );

    // Sort by createdAt desc
    posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    res.json({
      success: true,
      data: posts,
      count: posts.length,
    });
  }
}
