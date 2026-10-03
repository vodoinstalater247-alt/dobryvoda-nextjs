"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import sanitizeHtml from "sanitize-html";
import { requireAdmin } from "@/lib/admin";
import { adminSupabase } from "@/lib/supabase";

const slugify = (text: string) => text.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 90);
export async function createArticle(form: FormData) { await requireAdmin(); const title = String(form.get("title") || "").trim(); const content = String(form.get("content") || "").trim(); if (!title || !content) return; const slug = `${slugify(title) || "clanok"}-${Date.now()}`; await adminSupabase().from("blog_articles").insert({ title, slug, content_html: sanitizeHtml(content), excerpt: String(form.get("excerpt") || "").trim() || null, seo_title: String(form.get("seo_title") || "").trim() || null, seo_description: String(form.get("seo_description") || "").trim() || null, source: "manual", source_id: slug, status: "published", published_at: new Date().toISOString() }); revalidatePath("/blog"); revalidatePath("/sitemap.xml"); redirect("/admin"); }
export async function unpublishArticle(form: FormData) { await requireAdmin(); const id = Number(form.get("id")); await adminSupabase().from("blog_articles").update({ status: "draft" }).eq("id", id); revalidatePath("/blog"); revalidatePath("/admin"); revalidatePath("/sitemap.xml"); }
export async function deleteArticle(form: FormData) { await requireAdmin(); const id = Number(form.get("id")); await adminSupabase().from("blog_articles").delete().eq("id", id); revalidatePath("/blog"); revalidatePath("/admin"); revalidatePath("/sitemap.xml"); }
