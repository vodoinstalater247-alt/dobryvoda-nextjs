import { createClient } from "@supabase/supabase-js";

function required(value: string | undefined, name: string) {
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

export function publicSupabase() {
  return createClient(
    required(process.env.NEXT_PUBLIC_SUPABASE_URL, "NEXT_PUBLIC_SUPABASE_URL"),
    required(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"),
    { auth: { persistSession: false } },
  );
}

export function adminSupabase() {
  return createClient(
    required(process.env.NEXT_PUBLIC_SUPABASE_URL, "NEXT_PUBLIC_SUPABASE_URL"),
    required(process.env.SUPABASE_SECRET_KEY, "SUPABASE_SECRET_KEY"),
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}
