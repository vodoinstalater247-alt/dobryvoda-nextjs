"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, CheckCircle, MapPin, Clock, Shield, Zap, Star, Wrench, ArrowRight, Droplets, Home, Building, Bath, ChevronDown, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";
import PrivacyNotice from "@/components/PrivacyNotice";

export default function MontazSanityContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const services = [
    {
      icon: Droplets,
      title: "Umývadlá a skrinky",
      description: "Montáž závesných aj stojanových umývadiel, osadenie skriniek pod umývadlo a pripojenie na vodu a odpad. Zabezpečíme aj silikónovanie a utesnenie všetkých spojov pre maximálnu životnosť."
    },
    {
      icon: Bath,
      title: "Vane",
      description: "Osadenie akrylátových, liatinových aj voľne stojacich vaní. Zaistíme správny spád, utesnenie a pripojenie na rozvody. Vaňu osadíme tak, aby bola stabilná a dlhodobo funkčná."
    },
    {
      icon: Home,
      title: "Sprchové kúty a vaničky",
      description: "Kompletná montáž sprchových kútov vrátane vaničiek, zásten a sprchových systémov. Dôsledné utesnenie proti prenikaniu vody do podlahy a stien."
    },
    {
      icon: Building,
      title: "WC a bidety",
      description: "Montáž klasických aj závesných WC, podomietkových systémov Geberit a bidetov. Presné napojenie na kanalizáciu a zabezpečenie spoľahlivého splachovania."
    },
    {
      icon: Wrench,
      title: "Kuchynské drezy",
      description: "Inštalácia nerezových aj granitových drezov, pripojenie sifónu, batérie a dávkovača saponátu. Precízne zabudovanie do kuchynskej linky s dôrazom na tesnosť."
    }
  ];

  const steps = [
    {
      icon: CheckCircle,
      title: "Obhliadka a meranie",
      description: "Najprv si prezrieme miesto montáže, zistíme stav existujúcich rozvodov a naplánujeme presný postup prác. Poradíme vám aj s výberom vhodnej sanity."
    },
    {
      icon: Wrench,
      title: "Príprava rozvodov",
      description: "Pripravíme alebo upravíme prípojky vody a odpadu tak, aby presne sedeli na novú sanitu. V prípade potreby vymeníme ventily, sifóny alebo rohové ventily."
    },
    {
      icon: CheckCircle,
      title: "Montáž a napojenie",
      description: "Precízne osadíme sanitárne zariadenie, pripojíme na vodu a odpad, dôkladne utesníme všetky spoje a silikónujeme styky so stenou aj podlahou."
    },
    {
      icon: Star,
      title: "Testovanie a odovzdanie",
      description: "Skontrolujeme funkčnosť, otestujeme tesnosť všetkých spojov a predvedieme vám správne používanie. Upratáme po sebe pracovisko."
    }
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

  const faqs = [
    {
      question: "Dodávate aj sanitu alebo si ju mám kúpiť sám?",
      answer: "Sanitu si zvyčajne zabezpečuje zákazník podľa vlastného výberu a rozpočtu. Radi vám však poradíme s výberom a odporučíme overené značky a predajne. Vieme vám pomôcť s výberom správnych rozmerov a typov zariadení, aby montáž prebehla bez komplikácií a všetko presne sadlo."
    },
    {
      question: "Koľko trvá montáž umývadla?",
      answer: "Bežná montáž umývadla vrátane pripojenia na vodu a odpad trvá približne 1-2 hodiny. Pri komplikovanejších prípadoch, napríklad ak je potrebná úprava rozvodov alebo výmena rohových ventilov, to môže byť dlhšie. Pred začiatkom prác vám vždy oznámime predpokladaný čas montáže."
    },
    {
      question: "Montujete aj do novostavieb?",
      answer: "Áno, montujeme sanitu do novostavieb aj pri rekonštrukciách. Pri novostavbách vieme zabezpečiť aj osadenie všetkých rozvodov od začiatku. Spolupracujeme s architektmi a projektantmi, aby boli všetky prípojky na správnych miestach a montáž prebehla hladko."
    },
    {
      question: "Demontujete starú sanitu?",
      answer: "Áno, starú sanitu demontujeme a zabezpečíme jej odvoz. Cena za demontáž a odvoz sa kalkuluje individuálne podľa rozsahu prác. Pri objednaní montáže novej sanity vám ponúkneme zvýhodnenú cenu za demontáž a likvidáciu starej."
    }
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
              Profesionálna <span className="text-gradient">montáž sanity</span> v Bratislave
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kompletné osadenie umývadiel, vaní, sprchových kútov, WC a kuchynských drezov.
              Precízna práca s dôrazom na kvalitu a detail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="tel:+421944562059">
                  <Phone className="mr-2 h-5 w-5" />
                  Dohodnúť termín
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#sluzby">Viac informácií</a>
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

      {/* Services Section */}
      <section id="sluzby" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Naše služby
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Čo všetko <span className="text-gradient">montujeme</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zabezpečíme profesionálnu montáž všetkých typov sanitárnych zariadení vo vašej kúpeľni, kuchyni aj toalete.
              Každú prácu vykonávame precízne a s dôrazom na dlhú životnosť.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:border-primary/30 card-shadow hover:card-shadow-hover transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Postup prác
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ako prebieha <span className="text-gradient">montáž</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Každú montáž realizujeme systematicky v niekoľkých krokoch, aby bol výsledok dokonalý a bez problémov.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
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
                Poskytujeme služby montáže sanity v celej Bratislave a blízkom okolí.
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Často kladené otázky
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Máte otázky k <span className="text-gradient">montáži sanity</span>?
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl border border-border overflow-hidden card-shadow">
                <button
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="font-display text-lg font-bold text-foreground">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Cross-links */}
          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            <Card className="border-border hover:border-primary/30 card-shadow hover:card-shadow-hover transition-all">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-foreground font-medium">
                  Potrebujete aj opravu potrubia alebo výmenu rozvodov?
                </p>
                <Button variant="outline" asChild>
                  <Link href="/oprava-potrubia">
                    Oprava potrubia
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-primary/30 card-shadow hover:card-shadow-hover transition-all">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-foreground font-medium">
                  Riešite aj problémy s odpadom? Pozrite naše služby čistenia kanalizácie.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/kanalizacia">
                    Čistenie kanalizácie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="kontakt" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Potrebujete <span className="text-primary">montáž sanity</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Zavolajte nám a dohodneme termín montáže podľa vašich potrieb.
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
