import type { Metadata } from "next";
import {
  localBusinessSchema,
  makeServiceSchema,
  makeFaqSchema,
  makeBreadcrumbSchema,
} from "@/lib/structured-data";
import OpravaPotrabiaContent from "./oprava-potrubia-content";

export const metadata: Metadata = {
  title: "Oprava prasknutého potrubia Bratislava | Únik vody | Dobrý Vodár",
  description:
    "Havarijná oprava vodovodného potrubia v Bratislave. Lokalizácia a odstránenie úniku vody. Termín zásahu dohodneme podľa situácie. Volajte 0944 562 059.",
  keywords:
    "oprava potrubia, prasknuté potrubie, únik vody bratislava, havarijná služba voda, inštalatér potrubie, oprava rozvodov",
  alternates: { canonical: "https://dobryvodar.sk/oprava-potrubia" },
  openGraph: {
    title: "Oprava prasknutého potrubia Bratislava | Únik vody | Dobrý Vodár",
    description:
      "Havarijná oprava vodovodného potrubia v Bratislave. Lokalizácia a odstránenie úniku vody. Termín zásahu dohodneme podľa situácie. Volajte 0944 562 059.",
    url: "https://dobryvodar.sk/oprava-potrubia",
  },
};

const breadcrumbs = [
  { name: "Domov", url: "https://dobryvodar.sk" },
  { name: "Oprava vodovodného potrubia", url: "https://dobryvodar.sk/oprava-potrubia" },
];

const pageFaqs = [
  {
    question: "Ako rýchlo prídete pri havárii?",
    answer: "Pri havárii nám stručne opíšte situáciu. Termín zásahu dohodneme podľa naliehavosti, lokality a aktuálnej dostupnosti.",
  },
  {
    question: "Opravujete aj staré oceľové potrubie?",
    answer: "Áno, opravujeme všetky typy potrubí – medené, plastové (PPR, PEX) aj oceľové. Pri veľmi starom oceľovom potrubí vám poradíme, či je výhodnejšia oprava alebo kompletná výmena rozvodov.",
  },
  {
    question: "Koľko stojí oprava prasknutého potrubia?",
    answer: "Cena závisí od typu poruchy, materiálu potrubia a náročnosti prístupu. Pred začatím si potvrdíme postup a cenu.",
  },
  {
    question: "Pracujete aj cez víkendy?",
    answer: "Štandardné služby poskytujeme v pracovné dni od 7:00 do 17:00. Pri havarijných situáciách sme k dispozícii 24/7 vrátane víkendov a sviatkov.",
  },
];

export default function OpravaPotrabiaPage() {
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
              "Oprava potrubia",
              "Oprava vodovodného potrubia Bratislava",
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
      <OpravaPotrabiaContent />
    </>
  );
}
