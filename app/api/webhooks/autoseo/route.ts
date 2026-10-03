import { createHash, timingSafeEqual } from "crypto";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import sanitizeHtml from "sanitize-html";
import { adminSupabase } from "@/lib/supabase";

export const runtime = "nodejs";
type RecordData = Record<string, unknown>;
const asText = (value: unknown) => typeof value === "string" ? value.trim() : "";
const slugify = (value: string) => value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 90);

function authorized(header: string | null) {
  const secret = process.env.AUTOSEO_WEBHOOK_SECRET;
  if (!secret || !header?.startsWith("Bearer ")) return false;
  const supplied = Buffer.from(header.slice(7)); const expected = Buffer.from(secret);
  return supplied.length === expected.length && timingSafeEqual(supplied, expected);
}

export async function POST(request: NextRequest) {
  if (!authorized(request.headers.get("authorization"))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (Number(request.headers.get("content-length") || 0) > 1_000_000) return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  let payload: RecordData;
  try { payload = await request.json() as RecordData; } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }
  const article = payload.article && typeof payload.article === "object" ? payload.article as RecordData : payload;
  const title = asText(article.title || article.headline || article.name);
  const content = asText(article.content || article.body || article.html);
  if (!title || !content) return NextResponse.json({ error: "title and content are required" }, { status: 422 });
  const sourceId = asText(article.id || article.article_id || article.uuid) || request.headers.get("x-autoseo-delivery") || createHash("sha256").update(`${title}:${content}`).digest("hex");
  const existing = await adminSupabase().from("blog_articles").select("slug").eq("source", "autoseo").eq("source_id", sourceId).maybeSingle();
  const slug = existing.data?.slug || slugify(asText(article.slug)) || `${slugify(title) || "clanok"}-${sourceId.slice(-8).toLowerCase()}`;
  const { data, error } = await adminSupabase().from("blog_articles").upsert({
    title: title.slice(0, 240), slug, source: "autoseo", source_id: sourceId, status: "published", published_at: new Date().toISOString(),
    excerpt: asText(article.excerpt || article.summary || article.description) || null,
    content_html: sanitizeHtml(content, { allowedTags: ["p", "br", "h2", "h3", "h4", "ul", "ol", "li", "strong", "em", "a", "blockquote"], allowedAttributes: { a: ["href", "title", "target", "rel"] }, allowedSchemes: ["http", "https", "mailto"] }),
    cover_image_url: asText(article.cover_image_url || article.image || article.featured_image) || null,
    seo_title: asText(article.seo_title || article.meta_title) || null, seo_description: asText(article.seo_description || article.meta_description) || null,
  }, { onConflict: "source,source_id" }).select("slug").single();
  if (error) { console.error(error); return NextResponse.json({ error: "Unable to publish article" }, { status: 500 }); }
  revalidatePath("/blog"); revalidatePath(`/blog/${data.slug}`); revalidatePath("/sitemap.xml");
  return NextResponse.json({ ok: true, slug: data.slug }, { status: 201 });
}
