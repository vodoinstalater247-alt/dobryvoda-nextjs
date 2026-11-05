import type { Metadata } from "next";
import {
  localBusinessSchema,
  makeServiceSchema,
  makeFaqSchema,
  makeBreadcrumbSchema,
} from "@/lib/structured-data";
import KanalizaciaContent from "./kanalizacia-content";

export const metadata: Metadata = {
  // 58 chars
  title: "Krtkovanie a čistenie kanalizácie Bratislava | Dobrý Vodár",
  // 155 chars
  description:
    "Profesionálne krtkovanie a čistenie kanalizácie v Bratislave. Technológia Ridgid FlexShaft K9-102. Postup a termín zásahu dohodneme podľa situácie. Volajte 0944 562 059.",
  keywords:
    "krtkovanie, čistenie kanalizácie, upchatý odpad, profesionálne čistenie potrubia, krtkovanie bratislava, ridgid flexshaft",
  alternates: { canonical: "https://dobryvodar.sk/kanalizacia" },
  openGraph: {
    title: "Krtkovanie a čistenie kanalizácie Bratislava | Dobrý Vodár",
    description:
      "Profesionálne krtkovanie a čistenie kanalizácie v Bratislave. Technológia Ridgid FlexShaft K9-102. Postup a termín zásahu dohodneme podľa situácie. Volajte 0944 562 059.",
    url: "https://dobryvodar.sk/kanalizacia",
  },
};

const breadcrumbs = [
  { name: "Domov", url: "https://dobryvodar.sk" },
  { name: "Krtkovanie a čistenie kanalizácie", url: "https://dobryvodar.sk/kanalizacia" },
];

const pageFaqs = [
  {
    question: "Koľko stojí čistenie kanalizácie?",
    answer: "Cena závisí od typu upchatia a prístupu k potrubiu. Orientačnú cenu vám povieme už pri telefonáte.",
  },
  {
    question: "Ako rýchlo prídete?",
    answer: "Termín zásahu dohodneme podľa typu problému, lokality a aktuálnej dostupnosti.",
  },
  {
    question: "Je FlexShaft bezpečný pre staršie potrubie?",
    answer: "Áno, na rozdiel od vysokotlakového čistenia je FlexShaft šetrný aj k starším materiálom vrátane liatiny.",
  },
];

export default function KanalizaciaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            makeServiceSchema(
              "Čistenie kanalizácie",
              "Krtkovanie a čistenie kanalizácie Bratislava",
              metadata.description as string
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(makeBreadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(makeFaqSchema(pageFaqs)) }}
      />
      <KanalizaciaContent />
    </>
  );
}
