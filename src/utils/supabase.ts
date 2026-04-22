import { createClient, SupabaseClient } from '@supabase/supabase-js';
import site from '../config/site';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/** Supabase 테이블명 (site.dbPrefix 기반) */
export const TABLES = {
  categories: `${site.dbPrefix}categories`,
  lessons: `${site.dbPrefix}lessons`,
  lesson_quizzes: `${site.dbPrefix}lesson_quizzes`,
  levels: `${site.dbPrefix}levels`,
  challenges: `${site.dbPrefix}challenges`,
  stamps: `${site.dbPrefix}stamps`,
  challenge_attempts: `${site.dbPrefix}challenge_attempts`,
  user_levels: `${site.dbPrefix}user_levels`,
  lesson_progress: `${site.dbPrefix}lesson_progress`,
  badges: `${site.dbPrefix}badges`,
  user_badges: `${site.dbPrefix}user_badges`,
  certificates: `${site.dbPrefix}certificates`,
  activity_log: `${site.dbPrefix}activity_log`,
  announcements: `${site.dbPrefix}announcements`,
} as const;

let supabase: SupabaseClient | null = null;

const getSupabase = (): SupabaseClient | null => {
  if (!supabase && supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        autoRefreshToken: true,
        persistSession: true,
      }
    });
  }
  return supabase;
};

export default getSupabase;
