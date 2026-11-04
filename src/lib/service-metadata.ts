import type { Metadata } from "next";

type ServiceMetadataInput = {
  title: string;
  description: string;
  slug: string;
  image: string;
};

/** Keeps canonical, Open Graph and X metadata consistent on service pages. */
export function makeServiceMetadata({
  title,
  description,
  slug,
  image,
}: ServiceMetadataInput): Metadata {
  const url = `https://dobryvodar.sk/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
