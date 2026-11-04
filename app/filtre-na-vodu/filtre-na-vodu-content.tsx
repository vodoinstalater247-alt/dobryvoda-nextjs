"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  CheckCircle,
  MapPin,
  Clock,
  Shield,
  Zap,
  Star,
  Wrench,
  ArrowRight,
  Droplets,
  Home,
  Building,
  ChevronDown,
  Search,
  Filter,
  Thermometer,
  Send,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";
import PrivacyNotice from "@/components/PrivacyNotice";

export default function FiltreNaVoduContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xgvgzqlb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

  const reasons = [
    {
      icon: Thermometer,
      title: "Vodný kameň na spotrebičoch",
      description:
        "Usadeniny na vykurovacích telesách v bojleroch, varných kanviciach a práčkach skracujú ich životnosť a zvyšujú spotrebu energie.",
    },
    {
      icon: Droplets,
      title: "Vyššie náklady na energiu",
      description:
        "Už 1 mm vodného kameňa na vykurovacom telese zvyšuje spotrebu energie o 10 %. Zmäkčovač sa vám vráti na úsporách.",
    },
    {
      icon: Home,
      title: "Suchá pokožka a vlasy",
      description:
        "Tvrdá voda vysušuje pokožku a vlasy pri sprchovaní. Zmäkčená voda je jemnejšia k pleti a vlasy sú po umytí mäkšie.",
    },
    {
      icon: Wrench,
      title: "Zanášanie rozvodov",
      description:
        "Vodný kameň postupne zužuje priemer potrubí, znižuje prietok vody a skracuje životnosť vodovodných rozvodov.",
    },
    {
      icon: Shield,
      title: "Kvalita pitnej vody",
      description:
        "Chlór, ťažké kovy a mechanické nečistoty vo vode môžu ovplyvniť jej chuť aj zdravotnú bezpečnosť. Filter ich spoľahlivo odstráni.",
    },
  ];

  const services = [
    {
      icon: Filter,
      title: "Montáž zmäkčovačov vody",
      description:
        "Inštalácia katexových zmäkčovačov na hlavný prívod vody pre rodinné domy. Pre byty ponúkame kompaktné riešenia na stupačku alebo pod drez.",
    },
    {
      icon: Droplets,
      title: "Filtrácia pitnej vody",
      description:
        "Montáž filtrov pod kuchynský drez vrátane reverznej osmózy. Čistá pitná voda bez chlóru, ťažkých kovov a nečistôt priamo z kohútika.",
    },
    {
      icon: Wrench,
      title: "Mechanická filtrácia",
      description:
        "Sedimentové a uhlíkové filtre na odstránenie piesku, hrdze a mechanických nečistôt z vody. Ochrana celého vodovodného systému.",
    },
    {
      icon: Star,
      title: "Servis a výmena vložiek",
      description:
        "Pravidelná údržba filtračných systémov. Výmena filtračných vložiek, kontrola funkčnosti a nastavenie zmäkčovačov.",
    },
    {
      icon: Search,
      title: "Konzultácia a návrh",
      description:
        "Posúdime kvalitu vody u vás doma, zistíme tvrdosť a navrhneme optimálne riešenie filtrácie podľa vašich potrieb a rozpočtu.",
    },
    {
      icon: Home,
      title: "Napojenie na rozvody",
      description:
        "Profesionálne zapojenie filtračného systému do existujúceho vodovodného systému bez prerušenia dodávky vody.",
    },
  ];

  const steps = [
    {
      icon: Search,
      title: "Konzultácia a meranie",
      description:
        "Zistíme tvrdosť vašej vody, posúdime stav rozvodov a vaše potreby. Na základe toho navrhneme najvhodnejšie riešenie.",
    },
    {
      icon: CheckCircle,
      title: "Návrh riešenia",
      description:
        "Odporučíme konkrétny typ filtra alebo zmäkčovača, vysvetlíme výhody a nevýhody jednotlivých riešení a dohodneme cenu.",
    },
    {
      icon: Wrench,
      title: "Profesionálna montáž",
      description:
        "Odborná inštalácia zariadenia s napojením na existujúce rozvody. Pracujeme čisto a rýchlo, zvyčajne do 2-3 hodín.",
    },
    {
      icon: Star,
      title: "Nastavenie a zaškolenie",
      description:
        "Nastavíme systém podľa parametrov vašej vody, vysvetlíme údržbu a dohodneme termín prvého servisu.",
    },
  ];

  const targets = [
    {
      icon: Home,
      title: "Rodinné domy",
      description:
        "Centrálny zmäkčovač na hlavný prívod vody chráni celý dom – rozvody, spotrebiče aj sanitu. Ideálne riešenie pre novostavby aj rekonštrukcie.",
    },
    {
      icon: Building,
      title: "Byty",
      description:
        "Kompaktné filtre pod kuchynský drez pre čistú pitnú vodu. Zmäkčovače na stupačku pre ochranu práčky a bojlera.",
    },
    {
      icon: Wrench,
      title: "Firmy a prevádzky",
      description:
        "Zmäkčovače pre kaviarne, reštaurácie a hotely. Ochrana profesionálnych kávovarov, umývačiek a vykurovacích systémov.",
    },
  ];

  const areas = [
    "Staré Mesto", "Ružinov", "Nové Mesto", "Petržalka", "Dúbravka",
    "Karlova Ves", "Rača", "Vajnory", "Devín", "Devínska Nová Ves",
    "Záhorská Bystrica", "Lamač", "Podunajské Biskupice", "Vrakuňa",
    "Čunovo", "Jarovce", "Rusovce",
  ];

  const trustPoints = [
    {
      icon: Wrench,
      title: "Skúsení vodoinštalatéri",
      description: "Montáž vykonávajú kvalifikovaní technici s dlhoročnou praxou, nie predajcovia zariadení.",
    },
    {
      icon: Shield,
      title: "Nezávislé poradenstvo",
      description: "Neviažeme vás na konkrétnu značku. Odporučíme najlepšie riešenie podľa vašich potrieb a rozpočtu.",
    },
    {
      icon: Star,
      title: "Servis po montáži",
      description: "Zabezpečíme pravidelnú výmenu filtračných vložiek, kontrolu systému a úpravu nastavení.",
    },
  ];

  const faqs = [
    {
      question: "Koľko stojí montáž zmäkčovača vody?",
      answer:
        "Cena montáže sa odvíja od typu zariadenia a rozsahu prác. Orientačne sa montáž pohybuje od 150 €. Presnú cenu vám stanovíme po obhliadke a posúdení stavu vašich rozvodov.",
    },
    {
      question: "Dodávate aj samotné zariadenia?",
      answer:
        "Vieme zabezpečiť dodanie zariadenia od overených výrobcov, alebo namontujeme váš vlastný zmäkčovač či filter. Radi vám poradíme s výberom.",
    },
    {
      question: "Potrebujem zmäkčovač vody v byte?",
      answer:
        "V byte je najvhodnejšie riešenie filter pod kuchynský drez pre pitnú vodu, prípadne kompaktný zmäkčovač na stupačku. Poradíme vám najlepšie riešenie pri obhliadke.",
    },
    {
      question: "Ako často treba meniť filtre?",
      answer:
        "Závisí od typu filtra a kvality vody vo vašej lokalite. Väčšina filtračných vložiek sa mení raz za 6-12 mesiacov. Zmäkčovače vyžadujú pravidelné dopĺňanie regeneračnej soli.",
    },
    {
      question: "Zmäkčená voda je bezpečná na pitie?",
      answer:
        "Áno, zmäkčená voda je bezpečná. Pre priame pitie však odporúčame kombináciu zmäkčovača s filtrom na pitnú vodu pod drez, ktorý odstráni aj ďalšie nečistoty.",
    },
    {
      question: "Inštalujete aj v novostavbách?",
      answer:
        "Áno, ideálne je naplánovať filtráciu už pri výstavbe domu. Zabezpečíme kompletný návrh aj realizáciu filtračného systému od začiatku.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-8 pb-16 md:pt-24 lg:pt-32 lg:pb-24 hero-gradient min-h-[90vh] flex items-center">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
              <Filter className="inline h-4 w-4 mr-2" />
              Profesionálne služby v Bratislave
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Montáž a servis{" "}
              <span className="text-gradient">filtrov na vodu</span> a{" "}
              <span className="text-gradient">zmäkčovačov vody</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Profesionálna montáž filtračných systémov a zmäkčovačov vody pre rodinné domy a byty v Bratislave.
              Zbavte sa vodného kameňa a užívajte si čistú vodu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="tel:+421944562059">
                  <Phone className="mr-2 h-5 w-5" />
                  Objednať konzultáciu
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#preco">Viac informácií</a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Odborná montáž</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Servis a údržba</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Konzultácia zdarma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="preco" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                Kvalita vody
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Prečo riešiť kvalitu vody?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Bratislava má pomerne tvrdú vodu. Vodný kameň postupne poškodzuje spotrebiče, rozvody a znižuje komfort bývania.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+421944562059">
                  <Phone className="mr-2 h-5 w-5" />
                  Bezplatná konzultácia
                </a>
              </Button>
            </div>

            <div className="space-y-5">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <reason.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Naše služby
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Čo pre vás môžeme urobiť?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-card hover:card-shadow-hover transition-all group border-border">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-accent group-hover:bg-primary/10 rounded-xl flex items-center justify-center mb-4 transition-colors">
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

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Postup montáže
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ako prebieha montáž?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="border-border card-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Cieľové skupiny
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pre koho je naša služba?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {targets.map((target, index) => (
              <Card key={index} className="border-border card-shadow hover:card-shadow-hover transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <target.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{target.title}</h3>
                  <p className="text-muted-foreground">{target.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                Oblasť pôsobenia
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Bratislava I – V a okolie
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Montáž filtrov a zmäkčovačov vody vykonávame v celej Bratislave a blízkom okolí.
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Často kladené otázky
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-xl overflow-hidden bg-card">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-semibold text-lg text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ml-4 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-muted-foreground">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          {/* Cross-links */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              Riešite aj iné vodoinštalačné práce? Pozrite si naše služby{" "}
              <Link href="/oprava-potrubia" className="text-primary font-semibold hover:underline">
                opráv potrubí
              </Link>{" "}
              alebo{" "}
              <Link href="/montaz-sanity" className="text-primary font-semibold hover:underline">
                montáže sanity
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / CTA Footer */}
      <section id="kontakt" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Chcete <span className="text-primary">kvalitnejšiu vodu</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Zavolajte nám a poradíme vám najlepšie riešenie filtrácie pre vašu domácnosť alebo firmu.
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
                  <span>Pracovná doba: PON – PIA 7:00 – 17:00</span>
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
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12"
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Váš email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12"
                  />
                  <Input
                    type="tel"
                    placeholder="Telefónne číslo"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12"
                  />
                </div>
                <Textarea
                  placeholder="Opíšte váš problém alebo požiadavku..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
