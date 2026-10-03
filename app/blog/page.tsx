import type { Metadata } from "next";
import Link from "next/link";
import { publishedArticles } from "@/lib/blog";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Blog | Dobrý Vodár", description: "Praktické rady o vodoinštalácii a údržbe domácnosti.", alternates: { canonical: "https://dobryvodar.sk/blog" } };

export default async function BlogPage() {
  const articles = await publishedArticles();
  return <main className="min-h-screen bg-background px-6 py-16 text-foreground md:px-10"><div className="mx-auto max-w-5xl">
    <Link href="/" className="text-sm font-semibold text-primary hover:underline">← Späť na hlavnú stránku</Link>
    <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">Blog</h1><p className="mt-4 text-lg text-muted-foreground">Rady a praktické informácie od Dobrého vodára.</p>
    {articles.length ? <div className="mt-10 grid gap-6 md:grid-cols-2">{articles.map((article) => <article key={article.id} className="rounded-2xl border bg-card p-6 shadow-sm">
      <p className="text-sm text-muted-foreground">{article.published_at ? new Intl.DateTimeFormat("sk-SK", { dateStyle: "long" }).format(new Date(article.published_at)) : null}</p>
      <h2 className="mt-3 text-2xl font-bold leading-tight">{article.title}</h2>{article.excerpt ? <p className="mt-3 text-muted-foreground">{article.excerpt}</p> : null}
      <Link href={`/blog/${article.slug}`} className="mt-5 inline-block font-semibold text-primary hover:underline">Čítať článok →</Link>
    </article>)}</div> : <p className="mt-10 rounded-xl border border-dashed p-8 text-muted-foreground">Prvé články sa zobrazia čoskoro.</p>}
  </div></main>;
}
