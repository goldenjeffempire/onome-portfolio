// API Service for backend communication
const API_BASE_URL = '/api/v1';

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Request failed' }));
      throw new ApiError(response.status, error.message || `HTTP ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(0, 'Network error');
  }
}

// Projects API
export const projectsAPI = {
  getAll: async (published = true) => {
    return fetchAPI<{ success: boolean; data: any[]; count: number }>(
      `/projects?published=${published}`
    );
  },

  getFeatured: async () => {
    return fetchAPI<{ success: boolean; data: any[]; count: number }>('/projects/featured');
  },

  getById: async (id: string) => {
    return fetchAPI<{ success: boolean; data: any }>(`/projects/${id}`);
  },
};

// Blog API
export const blogAPI = {
  getAll: async (params: { published?: boolean; category?: string; page?: number; limit?: number } = {}) => {
    const query = new URLSearchParams();
    if (params.published !== undefined) query.append('published', String(params.published));
    if (params.category) query.append('category', params.category);
    if (params.page) query.append('page', String(params.page));
    if (params.limit) query.append('limit', String(params.limit));
    
    return fetchAPI<{ success: boolean; data: any[]; pagination: any }>(
      `/blog?${query.toString()}`
    );
  },

  getBySlug: async (slug: string) => {
    return fetchAPI<{ success: boolean; data: any }>(`/blog/${slug}`);
  },

  getByCategory: async (category: string) => {
    return fetchAPI<{ success: boolean; data: any[]; count: number }>(`/blog/category/${category}`);
  },
};

// Experience API
export const experienceAPI = {
  getAll: async () => {
    return fetchAPI<{ success: boolean; data: any[] }>('/experience');
  },

  getById: async (id: string) => {
    return fetchAPI<{ success: boolean; data: any }>(`/experience/${id}`);
  },
};

// Stats API
export const statsAPI = {
  getAll: async () => {
    return fetchAPI<{ success: boolean; data: any[] }>('/data/stats');
  },
};

// Education API
export const educationAPI = {
  getAll: async () => {
    return fetchAPI<{ success: boolean; data: any[] }>('/data/education');
  },
};

// Testimonials API
export const testimonialsAPI = {
  getAll: async () => {
    return fetchAPI<{ success: boolean; data: any[] }>('/data/testimonials');
  },
};

// Contact API
export const contactAPI = {
  submit: async (data: { name: string; email: string; subject: string; message: string }) => {
    return fetchAPI<{ success: boolean; message: string; data: { id: string } }>('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

// AI/Chatbot API
export const aiAPI = {
  chat: async (message: string, sessionId?: string) => {
    return fetchAPI<{ success: boolean; data: { message: string; sessionId: string } }>('/ai/chat', {
      method: 'POST',
      body: JSON.stringify({ message, sessionId }),
    });
  },
};

export { ApiError };
