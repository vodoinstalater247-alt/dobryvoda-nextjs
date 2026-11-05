"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, CheckCircle, MapPin, Clock, Shield, Zap, Star, Wrench, ArrowRight, Droplets, Home, Building, Sparkles, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";
import PrivacyNotice from "@/components/PrivacyNotice";

export default function KanalizaciaContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xgvgzqlb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Správa odoslaná!",
          description: "Ďakujeme za vašu správu. Čoskoro vás budeme kontaktovať.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Chyba",
        description: "Nepodarilo sa odoslať správu. Skúste to znova.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Shield,
      title: "Šetrné k potrubiu",
      description: "Na rozdiel od vysokotlakového čistenia, FlexShaft nepoškodzuje potrubie a je bezpečný aj pre staršie rozvody."
    },
    {
      icon: Sparkles,
      title: "Dokonalé vyčistenie",
      description: "Reťazové hlavice čistia celý priemer potrubia od steny k stene, odstraňujú usadeniny, korene aj tuky."
    },
    {
      icon: Home,
      title: "Čistá práca",
      description: "Kábel je uzavretý v ochrannom puzdre – žiadne špinenie interiéru, žiadny neporiadok vo vašom dome."
    }
  ];

  const services = [
    { icon: Droplets, title: "Kuchynské drezy", description: "Odstránenie tukov, zvyškov jedla a usadenín" },
    { icon: Home, title: "Odtoky v kúpeľni", description: "Čistenie umývadiel, vaní a sprchových kútov" },
    { icon: Building, title: "Hlavná kanalizácia", description: "Profesionálne čistenie hlavných odpadových potrubí" },
    { icon: Wrench, title: "Odstránenie vodného kameňa", description: "Efektívne odstránenie minerálnych usadenín a tukov" }
  ];

  const areas = [
    "Staré Mesto", "Ružinov", "Nové Mesto", "Petržalka", "Dúbravka",
    "Karlova Ves", "Rača", "Vajnory", "Devín", "Devínska Nová Ves",
    "Záhorská Bystrica", "Lamač", "Podunajské Biskupice", "Vrakuňa", "Čunovo"
  ];

  const trustPoints = [
    { icon: Zap, title: "Dohodnutie termínu", description: "Termín zásahu dohodneme podľa typu práce a dostupnosti" },
    { icon: Shield, title: "Rozsah práce vopred", description: "Pred začatím si potvrdíme postup, materiál a cenu" },
    { icon: Star, title: "Služby u zákazníka", description: "Pracujeme v Bratislave a okolí" }
  ];


  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-8 pb-16 md:pt-24 lg:pt-32 lg:pb-24 hero-gradient min-h-[90vh] flex items-center">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
              <Wrench className="inline h-4 w-4 mr-2" />
              Profesionálne služby v Bratislave
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Efektívne <span className="text-gradient">Krtkovanie</span> a{" "}
              <span className="text-gradient">Čistenie Kanalizácie</span> v Bratislave
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Najnovšia technológia <strong className="text-primary">Ridgid FlexShaft K9-102</strong>.
              Čistíme potrubia od steny k stene, rýchlo a bezpečne.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="tel:+421944562059">
                  <Phone className="mr-2 h-5 w-5" />
                  Objednať krtkovanie
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#technologia">Viac informácií</a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Dohodnutie termínu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Rozsah práce vopred</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Služby v Bratislave a okolí</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technologia" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Naša technológia
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prečo <span className="text-gradient">Ridgid FlexShaft K9-102</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Používame najmodernejšiu technológiu na trhu pre dokonalé vyčistenie vašej kanalizácie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border hover:border-primary/30 card-shadow hover:card-shadow-hover transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-primary rounded-2xl p-8 text-primary-foreground">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                  <Wrench className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">Ridgid FlexShaft K9-102</h3>
                <p className="text-primary-foreground/90">
                  Profesionálny stroj na čistenie potrubia s priemerom 32-100mm.
                  Flexibilný kábel s rotujúcou reťazovou hlavicou odstraňuje aj tie najodolnejšie usadeniny.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="sluzby" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Naše služby
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Čo pre vás môžeme vyčistiť?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-card hover:card-shadow-hover transition-all group cursor-pointer border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent group-hover:bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section id="oblast" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                Oblasť pôsobenia
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Bratislava I - V a okolie
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Poskytujeme služby v celej Bratislave a blízkom okolí.
                Rýchly výjazd zabezpečíme do všetkých mestských častí.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {areas.map((area, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    <MapPin className="h-3 w-3" />
                    {area}
                  </span>
                ))}
              </div>

              <Button variant="hero" size="lg" asChild>
                <a href="tel:+421944562059">
                  <Phone className="mr-2 h-5 w-5" />
                  0944 562 059
                </a>
              </Button>
            </div>

            <div className="bg-secondary/50 rounded-2xl overflow-hidden h-[400px] flex items-center justify-center border border-border card-shadow">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">Oblasť pôsobenia</p>
                <p className="text-2xl font-bold text-foreground">Bratislava a okolie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Prečo si vybrať nás?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <point.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-primary-foreground/80">{point.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-muted-foreground text-lg">
              Hľadáte krtkovanie upchatého odpadu? Pozrite si naše{" "}
              <Link href="/krtkovanie" className="text-primary font-semibold hover:underline">
                služby krtkovania
              </Link>.
            </p>
            <p className="text-muted-foreground text-lg">
              Potrebujete aj{" "}
              <Link href="/filtre-na-vodu" className="text-primary font-semibold hover:underline">
                filtráciu a zmäkčovanie vody
              </Link>?
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Emergency Footer */}
      <section id="kontakt" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Potrebujete <span className="text-primary">krtkovanie</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Zavolajte nám a vyriešime váš problém s kanalizáciou rýchlo a profesionálne.
              </p>

              <a
                href="tel:+421944562059"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground text-2xl md:text-3xl font-bold px-8 py-4 rounded-xl transition-colors mb-8"
              >
                <Phone className="h-8 w-8" />
                0944 562 059
              </a>

              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Pracovná doba: PON - PIA 7:00 - 17:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  <span>Havárie: 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Bratislava a okolie</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-2xl p-6 md:p-8 border border-border">
              <h3 className="font-display text-xl font-bold mb-6">Napíšte nám</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Vaše meno"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12"
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Váš email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12"
                  />
                  <Input
                    type="tel"
                    placeholder="Telefónne číslo"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12"
                  />
                </div>
                <Textarea
                  placeholder="Opíšte váš problém alebo požiadavku..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none min-h-[100px]"
                />
                <PrivacyNotice />
                <Button type="submit" size="lg" variant="hero" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Odoslať správu
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingPhoneButton />
    </main>
  );
}
