import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogSiteShell from "@/components/BlogSiteShell";
import { publishedArticle } from "@/lib/blog";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> { const article = await publishedArticle((await params).slug); if (!article) return {}; const title = article.seo_title || article.title; const description = article.seo_description || article.excerpt || undefined; return { title, description, alternates: { canonical: `https://dobryvodar.sk/blog/${article.slug}` }, openGraph: { type: "article", title, description, url: `https://dobryvodar.sk/blog/${article.slug}` } }; }
export default async function ArticlePage({ params }: Props) { const article = await publishedArticle((await params).slug); if (!article) notFound(); const publishedAt = article.published_at || new Date().toISOString(); const url = `https://dobryvodar.sk/blog/${article.slug}`; const schema = { "@context": "https://schema.org", "@type": "Article", headline: article.title, datePublished: publishedAt, mainEntityOfPage: url, author: { "@type": "Organization", name: "Dobrý Vodár" } };
  return <BlogSiteShell><article className="mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-16"><Link href="/blog" className="text-sm font-semibold text-primary hover:underline">← Všetky články</Link><p className="mt-8 text-sm text-muted-foreground">{new Intl.DateTimeFormat("sk-SK", { dateStyle: "long" }).format(new Date(publishedAt))}</p><h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-5xl">{article.title}</h1>{article.excerpt ? <p className="mt-6 text-xl text-muted-foreground">{article.excerpt}</p> : null}{article.cover_image_url ? <img src={article.cover_image_url} alt="" className="mt-8 w-full rounded-2xl" /> : null}<div className="prose prose-slate mt-10 max-w-none prose-headings:font-bold prose-a:text-primary" dangerouslySetInnerHTML={{ __html: article.content_html }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></article></BlogSiteShell>;
}
