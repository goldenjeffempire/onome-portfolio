import fs from 'fs/promises';
import path from 'path';

const DB_DIR = path.join(__dirname, '../../data');
const DB_FILES = {
  projects: path.join(DB_DIR, 'projects.json'),
  blogPosts: path.join(DB_DIR, 'blogPosts.json'),
  experience: path.join(DB_DIR, 'experience.json'),
  education: path.join(DB_DIR, 'education.json'),
  testimonials: path.join(DB_DIR, 'testimonials.json'),
  contactInquiries: path.join(DB_DIR, 'contactInquiries.json'),
  chatConversations: path.join(DB_DIR, 'chatConversations.json'),
  stats: path.join(DB_DIR, 'stats.json'),
};

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.mkdir(DB_DIR, { recursive: true });
  } catch (error) {
    // Directory already exists
  }
}

// Read from JSON file
async function readData<T>(collection: keyof typeof DB_FILES): Promise<T[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(DB_FILES[collection], 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist or is empty, return empty array
    return [];
  }
}

// Write to JSON file
async function writeData<T>(collection: keyof typeof DB_FILES, data: T[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(DB_FILES[collection], JSON.stringify(data, null, 2), 'utf-8');
}

// Generic CRUD operations
export class Database {
  static async find<T>(collection: keyof typeof DB_FILES): Promise<T[]> {
    return await readData<T>(collection);
  }

  static async findById<T extends { id: string }>(
    collection: keyof typeof DB_FILES,
    id: string
  ): Promise<T | null> {
    const data = await readData<T>(collection);
    return data.find((item) => item.id === id) || null;
  }

  static async create<T extends { id: string }>(
    collection: keyof typeof DB_FILES,
    item: T
  ): Promise<T> {
    const data = await readData<T>(collection);
    data.push(item);
    await writeData(collection, data);
    return item;
  }

  static async update<T extends { id: string }>(
    collection: keyof typeof DB_FILES,
    id: string,
    updates: Partial<T>
  ): Promise<T | null> {
    const data = await readData<T>(collection);
    const index = data.findIndex((item) => item.id === id);
    
    if (index === -1) return null;
    
    data[index] = { ...data[index], ...updates };
    await writeData(collection, data);
    return data[index];
  }

  static async delete<T extends { id: string }>(
    collection: keyof typeof DB_FILES,
    id: string
  ): Promise<boolean> {
    const data = await readData<T>(collection);
    const filtered = data.filter((item) => item.id !== id);
    
    if (filtered.length === data.length) return false;
    
    await writeData(collection, filtered);
    return true;
  }

  static async findWhere<T>(
    collection: keyof typeof DB_FILES,
    predicate: (item: T) => boolean
  ): Promise<T[]> {
    const data = await readData<T>(collection);
    return data.filter(predicate);
  }
}
