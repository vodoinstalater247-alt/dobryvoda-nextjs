"use client";

import Link from "next/link";
import { ArrowRight, Clock3, ShieldCheck, Tag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { serviceDetails, ServiceDetailKey } from "@/lib/service-details";

export default function ServiceDetailsSection({ serviceKey }: { serviceKey: ServiceDetailKey }) {
  const { t } = useLanguage();
  const details = serviceDetails[serviceKey];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Praktické informácie</span>
            <h2 className="font-display text-3xl font-bold mt-2">Cena, záruka a výjazd</h2>
            <p className="text-muted-foreground mt-3 max-w-3xl">Presný rozsah a konečnú cenu potvrdíme po krátkej konzultácii alebo obhliadke. Materiál sa účtuje podľa dohody.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Tag className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Orientačná cena</h3>
              <p className="text-foreground font-semibold">{details.price}</p>
              <p className="text-sm text-muted-foreground mt-2">Cena práce, materiál podľa dohody.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Clock3 className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Termín výjazdu</h3>
              <p className="text-foreground font-semibold">Výjazd do 2 hodín</p>
              <p className="text-sm text-muted-foreground mt-2">Podľa lokality, naliehavosti a aktuálnej dostupnosti.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <ShieldCheck className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Záruka na prácu</h3>
              <p className="text-foreground font-semibold">Podľa rozsahu práce</p>
              <p className="text-sm text-muted-foreground mt-2">Podmienky záruky potvrdíme pred začiatkom zásahu.</p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl bg-secondary/40 p-6">
            <h3 className="font-semibold text-lg mb-3">Čo je súčasťou zásahu</h3>
            <ul className="grid gap-2 sm:grid-cols-3 text-muted-foreground">
              {details.points.map((point) => <li key={point} className="flex items-start gap-2"><span className="text-primary">•</span>{point}</li>)}
            </ul>
            <Link href="/cennik" className="inline-flex items-center mt-5 font-semibold text-primary hover:underline">Pozrieť kompletný cenník <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
