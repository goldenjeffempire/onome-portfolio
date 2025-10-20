// Simple JSON-based database configuration
// Data is stored in server/data/*.json files

export const dbConfig = {
  type: 'json-file',
  dataDir: './data',
  collections: [
    'projects',
    'blogPosts',
    'experience',
    'education',
    'testimonials',
    'contactInquiries',
    'chatConversations',
    'stats',
  ],
};

export default dbConfig;