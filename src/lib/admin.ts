import { redirect } from "next/navigation";
import { serverSupabase } from "@/lib/supabase-server";

export async function requireAdmin() {
  const supabase = await serverSupabase();
  const { data } = await supabase.auth.getClaims();
  const email = typeof data?.claims?.email === "string" ? data.claims.email.toLowerCase() : "";
  const allowed = process.env.ADMIN_EMAIL?.toLowerCase();
  if (!allowed || email !== allowed) redirect("/admin/login");
  return email;
}
