import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogSiteShell from "@/components/BlogSiteShell";
import { BLOG_PAGE_SIZE, publishedArticlesPage } from "@/lib/blog";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Blog | Dobrý Vodár", description: "Praktické rady o vodoinštalácii a údržbe domácnosti.", alternates: { canonical: "https://dobryvodar.sk/blog" } };

type BlogPageProps = { searchParams: Promise<{ page?: string }> };

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const requestedPage = Number.parseInt((await searchParams).page ?? "1", 10);
  const page = Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const { articles, total } = await publishedArticlesPage(page);
  const totalPages = Math.max(1, Math.ceil(total / BLOG_PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageHref = (targetPage: number) => targetPage === 1 ? "/blog" : `/blog?page=${targetPage}`;
  return <BlogSiteShell><section className="hero-gradient px-6 py-12 md:px-10 md:py-16"><div className="mx-auto max-w-5xl">
    <Link href="/" className="text-sm font-semibold text-primary hover:underline">← Späť na hlavnú stránku</Link>
    <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-primary">Dobrý vodár</p>
    <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Blog</h1><p className="mt-4 max-w-2xl text-lg text-muted-foreground">Rady a praktické informácie od Dobrého vodára.</p>
  </div></section><section className="px-5 py-10 sm:px-6 md:px-10 md:py-16"><div className="mx-auto max-w-6xl">
    {articles.length ? <><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">{articles.map((article) => <article key={article.id} className="card-shadow flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-card transition-shadow hover:card-shadow-hover">
      {article.cover_image_url ? <div className="relative aspect-[16/9] w-full bg-secondary"><Image src={article.cover_image_url} alt={article.title} fill className="object-cover" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" /></div> : null}
      <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
      <p className="text-sm text-muted-foreground">{article.published_at ? new Intl.DateTimeFormat("sk-SK", { dateStyle: "long" }).format(new Date(article.published_at)) : null}</p>
      <h2 className="mt-3 text-2xl font-bold leading-tight">{article.title}</h2>{article.excerpt ? <p className="mt-3 text-muted-foreground">{article.excerpt}</p> : null}
      <Link href={`/blog/${article.slug}`} className="mt-auto pt-6 font-semibold text-primary hover:underline">Čítať článok →</Link>
      </div>
    </article>)}</div>{totalPages > 1 ? <nav className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Stránkovanie blogu">
      {currentPage > 1 ? <Link href={pageHref(currentPage - 1)} className="rounded-lg border bg-card px-4 py-2 font-semibold transition-colors hover:bg-secondary">← Predchádzajúca</Link> : null}
      <span className="px-3 py-2 text-sm text-muted-foreground">Strana {currentPage} z {totalPages}</span>
      {currentPage < totalPages ? <Link href={pageHref(currentPage + 1)} className="rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground transition-opacity hover:opacity-90">Ďalšia →</Link> : null}
    </nav> : null}</> : <p className="rounded-2xl border border-dashed bg-card p-8 text-muted-foreground">Prvé články sa zobrazia čoskoro.</p>}
  </div></section></BlogSiteShell>;
}
