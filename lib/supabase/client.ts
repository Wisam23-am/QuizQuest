import { createBrowserClient } from '@supabase/ssr';

// Create a singleton Supabase client for browser-side operations
export const createClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};

// Export singleton instance
export const supabase = createClient();
