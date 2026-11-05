import { localBusinessSchema, makeServiceSchema, makeBreadcrumbSchema, makeFaqSchema } from "@/lib/structured-data";

interface ServiceSchemasProps {
  serviceType: string;
  title: string;
  description: string;
  slug: string;
  pageName: string;
  faqs?: { question: string; answer: string }[] | readonly { question: string; answer: string }[];
}

export function ServiceSchemas({ serviceType, title, description, slug, pageName, faqs }: ServiceSchemasProps) {
  const breadcrumbs = [
    { name: "Domov", url: "https://dobryvodar.sk" },
    { name: pageName, url: `https://dobryvodar.sk/${slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeServiceSchema(serviceType, title, description)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeBreadcrumbSchema(breadcrumbs)),
        }}
      />
      {faqs && faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(makeFaqSchema([...faqs])) }}
        />
      )}
    </>
  );
}
