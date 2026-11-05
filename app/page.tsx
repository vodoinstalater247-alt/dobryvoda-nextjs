import type { Metadata } from "next";
import { localBusinessSchema, makeFaqSchema } from "@/lib/structured-data";
import { homeSeo } from "@/lib/home-seo";
import HomeContent from "./home-content";

export const metadata: Metadata = {
  // 57 chars
  title: homeSeo.title,
  // 155 chars
  description: homeSeo.description,
  alternates: {
    canonical: "https://dobryvodar.sk",
  },
  openGraph: {
    title: homeSeo.title,
    description: homeSeo.description,
    url: "https://dobryvodar.sk",
  },
};

// FAQ data for structured data (hardcoded Slovak for SSR)
const faqsForSchema = [
  {
    question: "Ako rýchlo môžete prísť?",
    answer:
      "Termín zásahu dohodneme podľa typu práce, naliehavosti a aktuálnej dostupnosti.",
  },
  {
    question: "Aké služby ponúkate?",
    answer:
      "Ponúkame komplexné vodoinštalačné služby vrátane opráv vodovodných potrubí, inštalácie sanitárnych zariadení, čistenia odpadov, opráv vykurovania a montáže kotlov.",
  },
  {
    question: "Poskytujete záruky na vaše práce?",
    answer:
      "Áno, na všetky naše práce poskytujeme záruku minimálne 24 mesiacov. Na niektoré typy prác ponúkame aj rozšírenú záruku.",
  },
  {
    question: "Koľko stojí vaša služba?",
    answer:
      "Cena závisí od typu práce a rozsahu zásahu. Pred začatím si potvrdíme postup a cenu.",
  },
  {
    question: "Pracujete aj cez víkendy?",
    answer:
      "Áno, poskytujeme služby 7 dní v týždni. Pre pohotovostné služby sme dostupní 24/7 vrátane sviatkov.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeFaqSchema(faqsForSchema)),
        }}
      />
      <HomeContent />
    </>
  );
}
