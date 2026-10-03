import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import BlogSiteShell from "@/components/BlogSiteShell";
import { BLOG_FALLBACK_IMAGES, publishedArticle } from "@/lib/blog";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };
type ArticleHeading = { id: string; text: string; level: 2 | 3 };

function plainText(value: string) {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .trim();
}

function headingId(value: string, index: number) {
  const normalized = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return normalized ? `section-${normalized}` : `section-${index + 1}`;
}

function formatArticleHtml(content: string) {
  // AutoSEO adds an internal "Obsah" list. The page has its own accessible navigation,
  // so displaying both only repeats the same links.
  const withoutDuplicateContents = content.replace(
    /<h2[^>]*>\s*(?:obsah|contents)\s*<\/h2>\s*<ul[^>]*>[\s\S]*?<\/ul>/i,
    "",
  );
  const headings: ArticleHeading[] = [];

  const html = withoutDuplicateContents.replace(
    /<h([23])[^>]*>([\s\S]*?)<\/h\1>/gi,
    (_match, level: string, value: string) => {
      const text = plainText(value);
      const headingLevel = Number(level) as 2 | 3;
      const id = headingId(text, headings.length);
      headings.push({ id, text, level: headingLevel });
      return `<h${level} id="${id}">${value}</h${level}>`;
    },
  );

  const questionStyledHtml = html.replace(
    /(<h3 id="[^"]+">([\s\S]*?)<\/h3>)([\s\S]*?)(?=<h[23] id=|$)/gi,
    (match, heading: string, title: string, answer: string) => {
      if (!plainText(title).endsWith("?")) return match;
      return `<div class="article-question">${heading}<div class="article-answer"><span class="article-answer-marker" aria-hidden="true">•</span><div>${answer}</div></div></div>`;
    },
  );

  const firstHeadingIndex = questionStyledHtml.search(/<h2 id=/i);
  const intro = firstHeadingIndex > 0 ? questionStyledHtml.slice(0, firstHeadingIndex) : "";
  const sections = firstHeadingIndex > 0 ? questionStyledHtml.slice(firstHeadingIndex) : questionStyledHtml;
  const sectionedHtml = sections.replace(
    /(<h2 id="[^"]+">([\s\S]*?)<\/h2>)([\s\S]*?)(?=<h2 id=|$)/gi,
    (match, _heading, title: string) => {
      const isKeyPoints = /kľúčové|klucove|key points|key takeaways/i.test(plainText(title));
      return `<section class="article-topic${isKeyPoints ? " article-key-points" : ""}">${match}</section>`;
    },
  );

  return {
    html: `${intro ? `<div class="article-intro">${intro}</div>` : ""}${sectionedHtml}`,
    headings,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await publishedArticle((await params).slug);
  if (!article) return {};

  const title = article.seo_title || article.title;
  const description = article.seo_description || article.excerpt || undefined;

  return {
    title,
    description,
    alternates: { canonical: `https://dobryvodar.sk/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `https://dobryvodar.sk/blog/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await publishedArticle((await params).slug);
  if (!article) notFound();

  const publishedAt = article.published_at || new Date().toISOString();
  const image = article.cover_image_url || BLOG_FALLBACK_IMAGES[article.id % BLOG_FALLBACK_IMAGES.length];
  const url = `https://dobryvodar.sk/blog/${article.slug}`;
  const { html: formattedContent, headings } = formatArticleHtml(article.content_html);
  const tocHeadings = headings.filter((heading) => heading.level === 2);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: publishedAt,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Dobrý Vodár" },
  };

  return (
    <BlogSiteShell>
      <article className="py-10 md:py-16">
        <div className="container mx-auto px-5 sm:px-6">
          <Link href="/blog" className="text-sm font-semibold text-primary hover:underline">
            ← Všetky články
          </Link>

          <header className="mt-8 max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Praktické rady</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-6xl">
              {article.title}
            </h1>
            {article.excerpt ? (
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground sm:mt-6 sm:text-xl">
                {article.excerpt}
              </p>
            ) : null}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                {new Intl.DateTimeFormat("sk-SK", { dateStyle: "long" }).format(new Date(publishedAt))}
              </span>
              <span className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-primary" />Čítanie: 4 min
              </span>
            </div>
          </header>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-secondary shadow-xl">
            <Image
              src={image}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 1120px"
            />
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-[236px_minmax(0,1fr)] lg:gap-16">
            {tocHeadings.length > 0 ? (
              <nav aria-label="Obsah článku" className="h-fit border-l-2 border-primary/30 pl-4 lg:sticky lg:top-28">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">V článku</p>
                <ol className="mt-5 space-y-5 text-sm leading-6 text-muted-foreground">
                  {tocHeadings.map((heading, index) => (
                    <li key={heading.id} className="flex gap-3">
                      <span className="mt-0.5 text-xs font-bold text-primary/70">{String(index + 1).padStart(2, "0")}</span>
                      <a className="transition-colors hover:text-primary hover:underline" href={`#${heading.id}`}>
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            <div
              className="prose prose-slate max-w-none text-[1.05rem] leading-8 text-slate-700 prose-headings:font-bold prose-headings:tracking-tight prose-h2:scroll-mt-28 prose-h2:border-b prose-h2:border-border prose-h2:pb-4 prose-h2:text-2xl prose-h2:leading-tight sm:prose-h2:text-3xl prose-h3:mt-10 prose-h3:border-l-2 prose-h3:border-primary/60 prose-h3:pl-4 prose-h3:text-xl prose-h3:leading-tight sm:prose-h3:text-2xl prose-p:my-5 prose-p:leading-8 prose-strong:font-bold prose-a:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-ul:my-7 prose-ul:space-y-3 prose-ul:pl-6 prose-ul:marker:text-primary prose-ol:my-7 prose-ol:space-y-3 prose-ol:pl-6 prose-ol:marker:font-bold prose-ol:marker:text-primary prose-li:pl-1 prose-blockquote:my-9 prose-blockquote:rounded-r-xl prose-blockquote:border-primary prose-blockquote:bg-secondary/60 prose-blockquote:px-5 prose-blockquote:py-4 prose-blockquote:font-medium prose-img:my-10 prose-img:w-full prose-img:rounded-2xl prose-img:shadow-lg prose-figure:my-10 prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-muted-foreground [&_.article-intro]:mb-12 [&_.article-intro>p:first-child]:text-xl [&_.article-intro>p:first-child]:font-medium [&_.article-topic]:mt-14 [&_.article-topic]:border-t [&_.article-topic]:border-border/80 [&_.article-topic]:pt-10 [&_.article-topic>h2]:mt-0 [&_.article-key-points]:rounded-2xl [&_.article-key-points]:border-primary/25 [&_.article-key-points]:bg-primary/[0.04] [&_.article-key-points]:px-6 [&_.article-key-points]:py-2 [&_.article-key-points>h2]:border-0 [&_.article-key-points>h2]:pb-1 [&_.article-question]:mt-10 [&_.article-question>h3]:border-l-0 [&_.article-question>h3]:pl-0 [&_.article-question>h3]:text-foreground [&_.article-question>h3]:font-bold [&_.article-answer]:my-5 [&_.article-answer]:flex [&_.article-answer]:gap-3 [&_.article-answer]:rounded-r-xl [&_.article-answer]:border-l-2 [&_.article-answer]:border-primary/35 [&_.article-answer]:bg-secondary/35 [&_.article-answer]:px-5 [&_.article-answer]:py-1 [&_.article-answer-marker]:mt-5 [&_.article-answer-marker]:text-xl [&_.article-answer-marker]:font-bold [&_.article-answer-marker]:text-primary [&_.article-answer>div]:min-w-0"
              dangerouslySetInnerHTML={{ __html: formattedContent }}
            />
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        </div>
      </article>
    </BlogSiteShell>
  );
}
