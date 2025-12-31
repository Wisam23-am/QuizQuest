import { supabase } from '@/lib/supabase/client';

/**
 * Check if database tables are set up correctly
 */
export async function checkDatabaseSetup(): Promise<{
  isReady: boolean;
  tables: {
    profiles: boolean;
    questions: boolean;
    game_results: boolean;
  };
  errors: string[];
}> {
  const errors: string[] = [];
  const tables = {
    profiles: false,
    questions: false,
    game_results: false,
  };

  try {
    // Check profiles table
    const { error: profilesError } = await supabase
      .from('profiles')
      .select('id')
      .limit(1);

    if (!profilesError) {
      tables.profiles = true;
    } else {
      errors.push(`Profiles table: ${profilesError.message}`);
    }

    // Check questions table
    const { error: questionsError } = await supabase
      .from('questions')
      .select('id')
      .limit(1);

    if (!questionsError) {
      tables.questions = true;
    } else {
      errors.push(`Questions table: ${questionsError.message}`);
    }

    // Check game_results table
    const { error: resultsError } = await supabase
      .from('game_results')
      .select('id')
      .limit(1);

    if (!resultsError) {
      tables.game_results = true;
    } else {
      errors.push(`Game results table: ${resultsError.message}`);
    }

    const isReady = tables.profiles && tables.questions && tables.game_results;

    return { isReady, tables, errors };
  } catch (error) {
    console.error('Database check failed:', error);
    return {
      isReady: false,
      tables,
      errors: ['Failed to connect to database'],
    };
  }
}

/**
 * Get question count
 */
export async function getQuestionCount(): Promise<number> {
  try {
    const { count, error } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true })
      .eq('verified', true);

    if (error) {
      console.error('Error getting question count:', error);
      return 0;
    }

    return count || 0;
  } catch (error) {
    console.error('Exception getting question count:', error);
    return 0;
  }
}

/**
 * Check if user is authenticated
 */
export async function checkAuth(): Promise<{
  isAuthenticated: boolean;
  userId: string | null;
  email: string | null;
}> {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return {
        isAuthenticated: false,
        userId: null,
        email: null,
      };
    }

    return {
      isAuthenticated: true,
      userId: user.id,
      email: user.email || null,
    };
  } catch (error) {
    console.error('Auth check failed:', error);
    return {
      isAuthenticated: false,
      userId: null,
      email: null,
    };
  }
}
