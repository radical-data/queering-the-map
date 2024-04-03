import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types.ts'

const url = process.env.SUPABASE_URL
const key = process.env.SUPABASE_ANON_KEY

class DBAuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DBAuthError";
  }
}

if (!url || !key) throw new DBAuthError('Missing credentials')

export const supabase = createClient<Database>(url ?? '', key ?? '')