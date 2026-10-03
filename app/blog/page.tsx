import type { Metadata } from "next";
import Link from "next/link";
import BlogSiteShell from "@/components/BlogSiteShell";
import { publishedArticles } from "@/lib/blog";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Blog | Dobrý Vodár", description: "Praktické rady o vodoinštalácii a údržbe domácnosti.", alternates: { canonical: "https://dobryvodar.sk/blog" } };

export default async function BlogPage() {
  const articles = await publishedArticles();
  return <BlogSiteShell><section className="hero-gradient px-6 py-12 md:px-10 md:py-16"><div className="mx-auto max-w-5xl">
    <Link href="/" className="text-sm font-semibold text-primary hover:underline">← Späť na hlavnú stránku</Link>
    <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-primary">Dobrý vodár</p>
    <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Blog</h1><p className="mt-4 max-w-2xl text-lg text-muted-foreground">Rady a praktické informácie od Dobrého vodára.</p>
  </div></section><section className="px-6 py-12 md:px-10 md:py-16"><div className="mx-auto max-w-5xl">
    {articles.length ? <div className="grid gap-6 md:grid-cols-2">{articles.map((article) => <article key={article.id} className="card-shadow flex flex-col rounded-2xl border bg-card p-6 transition-shadow hover:card-shadow-hover">
      <p className="text-sm text-muted-foreground">{article.published_at ? new Intl.DateTimeFormat("sk-SK", { dateStyle: "long" }).format(new Date(article.published_at)) : null}</p>
      <h2 className="mt-3 text-2xl font-bold leading-tight">{article.title}</h2>{article.excerpt ? <p className="mt-3 text-muted-foreground">{article.excerpt}</p> : null}
      <Link href={`/blog/${article.slug}`} className="mt-6 inline-block font-semibold text-primary hover:underline">Čítať článok →</Link>
    </article>)}</div> : <p className="rounded-2xl border border-dashed bg-card p-8 text-muted-foreground">Prvé články sa zobrazia čoskoro.</p>}
  </div></section></BlogSiteShell>;
}
