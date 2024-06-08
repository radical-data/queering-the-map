import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';
import { config } from 'dotenv';

// Load environment variables from .env file when not running in Vite
if (!process.env.VITE_SUPABASE_URL) {
    config();
}

const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const key = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

class DBAuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DBAuthError";
  }
}

if (!url || !key) throw new DBAuthError('Missing credentials');

export const supabase = createClient<Database>(url ?? '', key ?? '');
