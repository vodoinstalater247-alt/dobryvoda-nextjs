import type { MetadataRoute } from "next";
import { publishedArticles } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dobryvodar.sk";

  const pages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/vymena-sifonu`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/oprava-wc`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/montaz-baterie`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/oprava-potrubia`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/montaz-sprchy`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/zapojenie-spotrebicov`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vymena-ventilov`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/montaz-sanity`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/oprava-kurenia`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/montaz-bojleru`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vymena-rozvodov`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/kanalizacia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/krtkovanie`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/filtre-na-vodu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  try {
    const articles = await publishedArticles();
    return [
      ...pages,
      { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
      ...articles.map((article) => ({ url: `${baseUrl}/blog/${article.slug}`, lastModified: article.published_at ? new Date(article.published_at) : undefined, changeFrequency: "monthly" as const, priority: 0.7 })),
    ];
  } catch {
    return pages;
  }
}
