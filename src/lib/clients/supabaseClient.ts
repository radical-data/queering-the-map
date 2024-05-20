import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types.ts'
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '$env/static/private';

const url = SUPABASE_URL
const key = SUPABASE_ANON_KEY

class DBAuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DBAuthError";
  }
}

if (!url || !key) throw new DBAuthError('Missing credentials')

export const supabase = createClient<Database>(url ?? '', key ?? '')