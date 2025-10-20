# Backend Server (Optional)

This directory contains an optional Express.js backend server with the following features:

## Features

- **RESTful API** endpoints for projects, blog, experience, and stats
- **AI Chatbot** integration with OpenAI (requires API key)
- **Contact Form** handling
- **JSON file-based storage** (can be upgraded to PostgreSQL/Prisma)
- **Error handling** and logging middleware

## Status

**Currently not in use** - The frontend uses local data and a client-side chatbot for better performance and simplicity.

## When to Enable

Enable the backend server if you need:

1. **Dynamic content management** - Update blog posts and projects without rebuilding
2. **Real AI chatbot** - Use OpenAI API for intelligent conversations
3. **Contact form backend** - Store contact submissions in a database
4. **Analytics** - Track visitor interactions
5. **Admin panel** - Manage content through a dashboard

## How to Enable

1. **Install backend dependencies**:
   ```bash
   cd server
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp ../.env.example .env
   # Add your OPENAI_API_KEY and other configs
   ```

3. **Start the backend server**:
   ```bash
   npm run dev
   ```

4. **Update frontend** to use API endpoints instead of local data:
   - Modify `src/services/api.ts` to point to `http://localhost:3001/api/v1`
   - Update components to fetch data from API

## Architecture

```
server/
├── src/
│   ├── controllers/   # Request handlers
│   ├── routes/        # API routes
│   ├── services/      # Business logic (AI, etc.)
│   ├── middleware/    # Error handling, logging
│   ├── db/            # Database operations
│   ├── config/        # Configuration
│   └── utils/         # Utilities
├── data/              # JSON data files
└── package.json
```

## Current Approach

The portfolio currently uses:
- **Static data** from `src/data/` for blog posts and content
- **Client-side chatbot** with predefined responses (`src/utils/chatbotEngine.ts`)
- **Mailto links** for contact form

This approach provides:
- ✅ Faster page loads (no API calls)
- ✅ Better SEO (static content)
- ✅ No backend hosting costs
- ✅ Simpler deployment

## Migration Path

When ready to enable the backend:

1. Set up a database (PostgreSQL recommended)
2. Migrate JSON data to database
3. Configure Prisma schema
4. Update frontend to call API endpoints
5. Set up backend hosting (Replit, Heroku, etc.)
6. Configure CORS for your domain

---

**Note**: The backend code is production-ready and fully typed. It's just not currently integrated with the frontend.
