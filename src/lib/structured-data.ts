import { businessProfile } from "./business-profile";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PlumbingService",
  "@id": "https://dobryvodar.sk/#business",
  name: businessProfile.brandName,
  legalName: businessProfile.legalName,
  alternateName: "DobryVodar",
  image: "https://dobryvodar.sk/og-image.png",
  logo: "https://dobryvodar.sk/favicon.png",
  telephone: businessProfile.phone,
  email: businessProfile.email,
  url: businessProfile.website,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "IČO",
    value: businessProfile.ico,
  },
  description:
    "Profesionálny vodoinštalatér v Bratislave a okolí. Rýchle opravy potrubí, montáž sanity, čistenie odpadov a havarijná služba 24/7.",
  areaServed: {
    "@type": "City",
    name: "Bratislava",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  priceRange: "$$",
  paymentAccepted: "Hotovosť, Bankový prevod",
  currenciesAccepted: "EUR",
  knowsLanguage: ["sk", "en"],
  sameAs: businessProfile.socialProfiles,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Vodoinštalačné služby",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Oprava potrubia" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Výmena sifónu" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Oprava WC" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Čistenie kanalizácie" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Montáž a výmena bojlerov" },
      },
    ],
  },
};

export function makeServiceSchema(serviceType: string, serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name: serviceName,
    provider: {
      "@type": "PlumbingService",
      "@id": "https://dobryvodar.sk/#business",
    },
    areaServed: {
      "@type": "City",
      name: "Bratislava",
    },
    description,
  };
}

export function makeFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function makeBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
