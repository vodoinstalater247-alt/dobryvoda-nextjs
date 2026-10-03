import { publicSupabase } from "@/lib/supabase";

export type BlogArticle = {
  id: number; title: string; slug: string; excerpt: string | null; content_html: string;
  cover_image_url: string | null; seo_title: string | null; seo_description: string | null; published_at: string | null;
};
const fields = "id,title,slug,excerpt,content_html,cover_image_url,seo_title,seo_description,published_at";
export const BLOG_PAGE_SIZE = 12;

export async function publishedArticles() {
  const { data, error } = await publicSupabase().from("blog_articles").select(fields)
    .eq("status", "published").not("published_at", "is", null)
    .lte("published_at", new Date().toISOString()).order("published_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as BlogArticle[];
}

export async function publishedArticlesPage(page: number, pageSize = BLOG_PAGE_SIZE) {
  const safePage = Math.max(1, Math.floor(page));
  const now = new Date().toISOString();
  const from = (safePage - 1) * pageSize;
  const to = from + pageSize - 1;
  const { data, error, count } = await publicSupabase().from("blog_articles")
    .select(fields, { count: "exact" })
    .eq("status", "published").not("published_at", "is", null)
    .lte("published_at", now).order("published_at", { ascending: false }).range(from, to);
  if (error) throw error;
  return { articles: (data ?? []) as BlogArticle[], total: count ?? 0 };
}

export async function publishedArticle(slug: string) {
  const { data, error } = await publicSupabase().from("blog_articles").select(fields)
    .eq("slug", slug).eq("status", "published").not("published_at", "is", null)
    .lte("published_at", new Date().toISOString()).maybeSingle();
  if (error) throw error;
  return data as BlogArticle | null;
}
