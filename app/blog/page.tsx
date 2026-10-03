import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import BlogSiteShell from "@/components/BlogSiteShell";
import { BLOG_FALLBACK_IMAGES, BLOG_PAGE_SIZE, publishedArticlesPage } from "@/lib/blog";

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
  return <BlogSiteShell><section className="hero-gradient px-5 py-12 sm:px-6 md:px-10 md:py-20"><div className="mx-auto max-w-6xl">
    <Link href="/" className="text-sm font-semibold text-primary hover:underline">← Späť na hlavnú stránku</Link>
    <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-primary">Dobrý vodár</p>
    <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Blog</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">Praktické rady, postupy a informácie pre bezpečnú domácnosť.</p>
  </div></section><section className="px-5 py-10 sm:px-6 md:px-10 md:py-16"><div className="mx-auto max-w-6xl">
    {articles.length ? <><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">{articles.map((article) => { const image = article.cover_image_url || BLOG_FALLBACK_IMAGES[article.id % BLOG_FALLBACK_IMAGES.length]; return <Link key={article.id} href={`/blog/${article.slug}`} className="group block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4" aria-label={`Čítať článok: ${article.title}`}><article className="flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-[0_10px_32px_-18px_hsl(204_70%_35%_/_0.35)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_42px_-18px_hsl(204_70%_35%_/_0.45)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-secondary"><Image src={image} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" /><span className="absolute left-4 top-4 rounded-full bg-card/95 px-3 py-1 text-xs font-bold text-primary shadow-sm backdrop-blur">Rady od Dobrého vodára</span></div>
      <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
      <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground"><CalendarDays className="h-4 w-4 text-primary" />{article.published_at ? new Intl.DateTimeFormat("sk-SK", { dateStyle: "long" }).format(new Date(article.published_at)) : null}</p>
      <h2 className="mt-4 text-xl font-bold leading-snug tracking-tight sm:text-2xl">{article.title}</h2>{article.excerpt ? <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{article.excerpt}</p> : <p className="mt-3 text-sm leading-6 text-muted-foreground">Praktický postup a rady od profesionálneho vodoinštalatéra.</p>}
      <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-primary transition-colors group-hover:text-primary-dark">Čítať článok <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
      </div>
    </article></Link>})}</div>{totalPages > 1 ? <nav className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Stránkovanie blogu">
      {currentPage > 1 ? <Link href={pageHref(currentPage - 1)} className="rounded-lg border bg-card px-4 py-2 font-semibold transition-colors hover:bg-secondary">← Predchádzajúca</Link> : null}
      <span className="px-3 py-2 text-sm text-muted-foreground">Strana {currentPage} z {totalPages}</span>
      {currentPage < totalPages ? <Link href={pageHref(currentPage + 1)} className="rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground transition-opacity hover:opacity-90">Ďalšia →</Link> : null}
    </nav> : null}</> : <p className="rounded-2xl border border-dashed bg-card p-8 text-muted-foreground">Prvé články sa zobrazia čoskoro.</p>}
  </div></section></BlogSiteShell>;
}
