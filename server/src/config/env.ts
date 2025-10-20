import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().transform(Number).default('3000'),
  DATABASE_URL: z.string().default('file:./dev.db'),
  // Security: JWT secrets are REQUIRED - no defaults allowed for production safety
  JWT_SECRET: z.string().min(32, 'JWT_SECRET must be at least 32 characters').refine(
    (val: string) => val !== 'dev-secret-key-change-in-production',
    'JWT_SECRET cannot be the default value'
  ),
  JWT_REFRESH_SECRET: z.string().min(32, 'JWT_REFRESH_SECRET must be at least 32 characters').refine(
    (val: string) => val !== 'dev-refresh-secret-change-in-production',
    'JWT_REFRESH_SECRET cannot be the default value'
  ),
  JWT_EXPIRES_IN: z.string().default('1h'),
  JWT_REFRESH_EXPIRES_IN: z.string().default('7d'),
  OPENAI_API_KEY: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  // Security: Admin email should be explicitly set
  ADMIN_EMAIL: z.string().email(),
  // Security: CORS origin should be explicitly configured
  CORS_ORIGIN: z.string().refine(
    (val: string) => val !== '*' || process.env.NODE_ENV === 'development',
    'CORS_ORIGIN cannot be "*" in production'
  ),
  RATE_LIMIT_WINDOW_MS: z.string().transform(Number).default('900000'),
  RATE_LIMIT_MAX_REQUESTS: z.string().transform(Number).default('100'),
});

export type Env = z.infer<typeof envSchema>;

let env: Env;

try {
  env = envSchema.parse(process.env);
} catch (error) {
  console.error('❌ Invalid environment variables:', error);
  console.error('\n📋 Required environment variables:');
  console.error('  - JWT_SECRET (minimum 32 characters)');
  console.error('  - JWT_REFRESH_SECRET (minimum 32 characters)');
  console.error('  - ADMIN_EMAIL (valid email address)');
  console.error('  - CORS_ORIGIN (comma-separated origins, not "*" in production)');
  console.error('\nPlease set these in your .env file before starting the server.');
  process.exit(1);
}

export default env;