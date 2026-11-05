"use client";
import { AlertTriangle, Wrench, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const cardsRef = useScrollAnimation({ threshold: 0.1 });
  const noteRef = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  const emergencyServices = [
    { label: t("services.emergency.1"), href: "/oprava-potrubia" },
    { label: t("services.emergency.2"), href: "/oprava-potrubia" },
    { label: t("services.emergency.3"), href: "/vymena-rozvodov" },
    { label: t("services.emergency.4"), href: "/upchaty-odpad" },
  ];

  const regularServices = [
    { label: t("services.regular.1"), href: "/vymena-sifonu" },
    { label: t("services.regular.2"), href: "/montaz-baterie" },
    { label: t("services.regular.3"), href: "/oprava-wc" },
    { label: t("services.regular.4"), href: "/vymena-ventilov" },
    { label: t("services.regular.5"), href: "/montaz-sanity" },
    { label: t("services.regular.6"), href: "/oprava-potrubia" },
    { label: t("services.regular.7"), href: "/vymena-rozvodov" },
    { label: t("services.regular.8"), href: "/kanalizacia" },
    { label: t("services.regular.9"), href: "/oprava-kurenia" },
    { label: t("services.regular.10"), href: "/montaz-bojleru" },
  ];

  return (
    <section id="sluzby" className="pt-20 lg:pt-28 pb-12 lg:pb-16 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div
          ref={headerRef.ref}
          className={`text-center max-w-2xl mx-auto mb-16 scroll-animate ${headerRef.isVisible ? "visible" : ""}`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            {t("services.label")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("services.title1")}
            <span className="text-gradient">{t("services.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef.ref}
          className={`grid md:grid-cols-2 gap-8 lg:gap-12 scroll-animate ${cardsRef.isVisible ? "visible" : ""}`}
        >
          {/* Emergency Services */}
          <div 
            className="bg-card rounded-2xl border border-border p-8 card-shadow"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-7 w-7 text-destructive" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {t("services.emergency.title")}
                </h3>
                <span className="text-destructive font-semibold">24/7</span>
              </div>
            </div>
            <ul className="space-y-3">
              {emergencyServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <Link href={service.href} className="text-muted-foreground hover:text-primary hover:underline underline-offset-4">{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regular Services */}
          <div 
            className="bg-card rounded-2xl border border-border p-8 card-shadow"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                <Wrench className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {t("services.regular.title")}
                </h3>
                <span className="text-muted-foreground">{t("services.regular.hours")}</span>
              </div>
            </div>
            <ul className="space-y-3">
              {regularServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <Link href={service.href} className="text-muted-foreground hover:text-primary hover:underline underline-offset-4">{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing Note */}
        <div
          ref={noteRef.ref}
          className={`mt-12 bg-accent/50 rounded-2xl p-6 lg:p-8 text-center scroll-animate ${noteRef.isVisible ? "visible" : ""}`}
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-2">
            {t("services.pricing.title")}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("services.pricing.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
