"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { portfolioWorks } from "@/lib/portfolio-gallery";
import ServiceDetailsSection from "@/components/ServiceDetailsSection";

const relatedServices: Record<string, { href: string; translationKey: string }[]> = {
  boiler: [
    { href: "/vymena-ventilov", translationKey: "valve" },
    { href: "/oprava-potrubia", translationKey: "pipe" },
    { href: "/montaz-sanity", translationKey: "sanitary" },
  ],
  wc: [
    { href: "/vymena-sifonu", translationKey: "siphon" },
    { href: "/montaz-sanity", translationKey: "sanitary" },
    { href: "/kanalizacia", translationKey: "pipe" },
  ],
  faucet: [
    { href: "/vymena-ventilov", translationKey: "valve" },
    { href: "/vymena-sifonu", translationKey: "siphon" },
    { href: "/montaz-sanity", translationKey: "sanitary" },
  ],
  shower: [
    { href: "/montaz-sanity", translationKey: "sanitary" },
    { href: "/vymena-sifonu", translationKey: "siphon" },
    { href: "/oprava-potrubia", translationKey: "pipe" },
  ],
  appliance: [
    { href: "/vymena-ventilov", translationKey: "valve" },
    { href: "/vymena-sifonu", translationKey: "siphon" },
    { href: "/kanalizacia", translationKey: "pipe" },
  ],
  valve: [
    { href: "/oprava-potrubia", translationKey: "pipe" },
    { href: "/montaz-baterie", translationKey: "faucet" },
    { href: "/zapojenie-spotrebicov", translationKey: "appliance" },
  ],
  pipes: [
    { href: "/oprava-potrubia", translationKey: "pipe" },
    { href: "/montaz-sanity", translationKey: "sanitary" },
    { href: "/montaz-bojleru", translationKey: "boiler" },
  ],
};

const portfolioServicePaths: Record<string, string[]> = {
  boiler: ["/montaz-bojleru"],
  wc: ["/oprava-wc"],
  faucet: ["/montaz-baterie"],
  shower: ["/montaz-sprchy"],
  pipes: ["/vymena-rozvodov", "/oprava-potrubia"],
};

interface ServiceLayoutProps {
  translationKey: string;
  image: string;
  faqs?: readonly { question: string; answer: string }[];
}

const ServiceLayout = ({ translationKey, image, faqs: customFaqs }: ServiceLayoutProps) => {
  const { t } = useLanguage();
  const related = relatedServices[translationKey] ?? [];
  const portfolio = portfolioWorks.filter((work) =>
    (portfolioServicePaths[translationKey] ?? []).includes(work.href)
  );
  const defaultFaqs = [1, 2, 3].map((index) => ({
    question: t(`service.faq.${index}.question`),
    answer: t(`service.faq.${index}.answer`),
  }));
  const faqs = customFaqs ?? defaultFaqs;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-8 pb-16 md:pt-32 lg:pt-40 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                {t("services.label")}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                {t(`${translationKey}.hero.title`)}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t(`${translationKey}.hero.subtitle`)}
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="group" asChild>
                  <a href="tel:+421944562059">
                    <Phone className="mr-2 h-5 w-5" />
                    {t("hero.cta.call")}
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#kontakt">
                    {t("nav.contact")}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in delay-100">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={image}
                  alt={t(`${translationKey}.hero.title`)}
                  width={640}
                  height={400}
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-6">
              {t(`${translationKey}.problem.title`)}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t(`${translationKey}.problem.${num}`)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl border border-primary/15 bg-background p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex-1">
              <h2 className="font-display text-2xl font-bold mb-2">{t("services.pricing.title")}</h2>
              <p className="text-muted-foreground">{t("services.pricing.description")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="outline" asChild className="shrink-0">
                <Link href="/cennik">
                  {t("services.pricing.link")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="shrink-0">
                <a href="tel:+421944562059">
                  <Phone className="mr-2 h-4 w-4" />
                  {t("hero.cta.call")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {(["boiler", "wc", "faucet", "shower", "pipes"].includes(translationKey)) && (
        <ServiceDetailsSection serviceKey={translationKey as "boiler" | "wc" | "faucet" | "pipes" | "shower"} />
      )}

      {portfolio.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
                {t("work.label")}
              </span>
              <h2 className="font-display text-3xl font-bold mb-3">{t("work.gallery.title")}</h2>
              <p className="text-muted-foreground mb-8">{t("work.gallery.description")}</p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {portfolio.map((work) => (
                  <figure key={work.id} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={work.image}
                        alt={`${t("work.realPhoto")}: ${t(work.titleKey)}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="p-4 font-semibold text-foreground">{t(work.titleKey)}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
                {t("services.label")}
              </span>
              <h2 className="font-display text-3xl font-bold mb-7">{t("service.related.title")}</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group rounded-xl border border-border p-5 hover:border-primary/40 hover:shadow-md transition-all"
                  >
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {t(`${service.translationKey}.hero.title`)}
                    </span>
                    <span className="mt-3 flex items-center text-sm font-medium text-primary">
                      {t("service.related.link")} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">{t("service.faq.label")}</span>
            <h2 className="font-display text-3xl font-bold mb-7">{t("service.faq.title")}</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`service-faq-${index}`} className="rounded-xl border border-border bg-card px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-7">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontakt" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            {t(`${translationKey}.cta`)}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
            <a href="tel:+421944562059">0944 562 059</a>
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingPhoneButton />
    </main>
  );
};

export default ServiceLayout;
