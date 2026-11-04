"use client";

import { useState } from "react";
import { Phone, CheckCircle, MapPin, Clock, Shield, Zap, Star, Wrench, ArrowRight, Droplets, Home, Building, Search, ChevronDown, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";
import Link from "next/link";
import PrivacyNotice from "@/components/PrivacyNotice";

export default function OpravaPotrabiaContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const processSteps = [
    {
      icon: Search,
      title: "Diagnostika problému",
      description: "Presne identifikujeme zdroj úniku alebo poruchy potrubia pomocou vizuálnej kontroly a tlakových testov."
    },
    {
      icon: MapPin,
      title: "Lokalizácia úniku",
      description: "Pomocou moderných metód nájdeme presné miesto poruchy, aj keď sa potrubie nachádza v stene alebo podlahe."
    },
    {
      icon: Wrench,
      title: "Oprava potrubia",
      description: "Vykonáme profesionálnu opravu – od výmeny poškodeného úseku po utesnenie spojov a armatúr."
    },
    {
      icon: CheckCircle,
      title: "Testovanie a kontrola",
      description: "Po oprave dôkladne otestujeme systém pod tlakom a uistíme sa, že je všetko v poriadku."
    }
  ];

  const services = [
    {
      icon: Droplets,
      title: "Medené rozvody",
      description: "Spájkovanie, výmena úsekov a oprava spojov medených rozvodov vody."
    },
    {
      icon: Home,
      title: "Plastové rozvody",
      description: "Oprava a výmena PPR a PEX plastových rozvodov vrátane pressovaných a zváraných spojov."
    },
    {
      icon: Building,
      title: "Oceľové stúpačky",
      description: "Oprava a výmena starých oceľových stúpacích potrubí v bytových domoch."
    },
    {
      icon: Wrench,
      title: "Havarijné utesnenie",
      description: "Rýchle provizórne aj trvalé utesnenie pri akútnom úniku vody."
    }
  ];

  const areas = [
    "Staré Mesto", "Ružinov", "Nové Mesto", "Petržalka", "Dúbravka",
    "Karlova Ves", "Rača", "Vajnory", "Devín", "Devínska Nová Ves",
    "Záhorská Bystrica", "Lamač", "Podunajské Biskupice", "Vrakuňa", "Čunovo"
  ];

  const trustPoints = [
    { icon: Zap, title: "Rýchly výjazd", description: "Do 60 minút v Bratislave" },
    { icon: Shield, title: "Férové ceny", description: "Bez skrytých poplatkov" },
    { icon: Star, title: "Profesionálny prístup", description: "Skúsení technici s praxou" }
  ];

  const faqs = [
    {
      question: "Ako rýchlo prídete pri havárii?",
      answer: "V prípade havarijných situácií sa snažíme prísť čo najrýchlejšie, zvyčajne do 60 minút v rámci Bratislavy. Pri bežných objednávkach dohodneme termín do 24-48 hodín."
    },
    {
      question: "Opravujete aj staré oceľové potrubie?",
      answer: "Áno, opravujeme všetky typy potrubí – medené, plastové (PPR, PEX) aj oceľové. Pri veľmi starom oceľovom potrubí vám poradíme, či je výhodnejšia oprava alebo kompletná výmena rozvodov."
    },
    {
      question: "Koľko stojí oprava prasknutého potrubia?",
      answer: "Cena závisí od typu poruchy, materiálu potrubia a náročnosti prístupu. Vždy poskytneme cenovú ponuku pred začatím prác. Bežná oprava sa pohybuje od 60 do 200 €."
    },
    {
      question: "Pracujete aj cez víkendy?",
      answer: "Štandardné služby poskytujeme v pracovné dni od 7:00 do 17:00. Pri havarijných situáciách sme k dispozícii 24/7 vrátane víkendov a sviatkov."
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
              <span className="text-gradient">Oprava</span> vodovodného{" "}
              <span className="text-gradient">potrubia</span> v Bratislave
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rýchly zásah pri úniku vody, prasknutom potrubí a havarijných situáciách.
              Profesionálna diagnostika a oprava rozvodov v celej Bratislave.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="tel:+421944562059">
                  <Phone className="mr-2 h-5 w-5" />
                  Nahlásiť haváriu
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#postup">Viac informácií</a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Výjazd do 60 min</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Férové ceny</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Záruka na prácu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="postup" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Náš postup
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ako <span className="text-gradient">postupujeme</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Každú opravu potrubia riešime systematicky a dôkladne, aby sme zabezpečili trvalý výsledok a vašu spokojnosť.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-border hover:border-primary/30 card-shadow hover:card-shadow-hover transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">Krok {index + 1}</div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
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
              Typy opráv
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Opravujeme všetky bežné typy vodovodného potrubia. Bez ohľadu na materiál alebo vek rozvodov nájdeme riešenie pre váš problém.
            </p>
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
                Poskytujeme služby opravy potrubia v celej Bratislave a blízkom okolí.
                Rýchly výjazd zabezpečíme do všetkých mestských častí. Pri havarijných situáciách reagujeme okamžite.
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
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Sme skúsený tím inštalatérov, ktorý sa špecializuje na opravy vodovodného potrubia v Bratislave. Kladieme dôraz na kvalitu, rýchlosť a férový prístup ku každému zákazníkovi.
            </p>
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
              Otázky a odpovede
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Často kladené otázky
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pripravili sme odpovede na najčastejšie otázky o oprave vodovodného potrubia. Ak nenájdete odpoveď na vašu otázku, neváhajte nás kontaktovať.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden card-shadow"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="font-display text-lg font-bold text-foreground pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Cross-link */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              Potrebujete aj čistenie kanalizácie? Pozrite si naše služby{" "}
              <Link href="/krtkovanie" className="text-primary font-semibold hover:underline">
                krtkovania a čistenia odpadov
              </Link>. Zaujíma vás{" "}
              <Link href="/filtre-na-vodu" className="text-primary font-semibold hover:underline">
                filtrácia a zmäkčovanie vody
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
                Potrebujete <span className="text-primary">opravu potrubia</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Zavolajte nám a vyriešime váš problém s potrubím rýchlo a profesionálne.
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
