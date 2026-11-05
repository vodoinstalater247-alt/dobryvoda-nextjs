"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, CheckCircle, MapPin, Clock, Shield, Zap, Star, Wrench, ArrowRight, Thermometer, Home, Building, AlertTriangle, ChevronDown, Flame, Droplets, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";
import PrivacyNotice from "@/components/PrivacyNotice";

export default function OpravaKureniaContent() {
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

  const services = [
    {
      icon: Wrench,
      title: "Výmena radiátorov",
      description: "Demontáž starého a montáž nového radiátora vrátane pripojenia na existujúce rozvody. Pracujeme s panelovými, článkovými aj dizajnovými radiátormi."
    },
    {
      icon: Droplets,
      title: "Oprava ventilov",
      description: "Výmena tečúcich termostatických hlavíc, uzatváracích a regulačných ventilov. Zabezpečíme správnu reguláciu teploty v každej miestnosti."
    },
    {
      icon: Zap,
      title: "Odvzdušnenie systému",
      description: "Vzduch v systéme spôsobuje nerovnomerné kúrenie a hluk. Profesionálne odvzdušníme celý vykurovací okruh vrátane stúpačiek."
    },
    {
      icon: Flame,
      title: "Podlahové kúrenie",
      description: "Montáž a oprava podlahového vykurovania. Riešime prietokové problémy, netesnosti a reguláciu jednotlivých okruhov."
    },
    {
      icon: Building,
      title: "Prepojenie na nový kotol",
      description: "Pri výmene kotla zabezpečíme správne napojenie rozvodov a radiátorov, vrátane hydraulického vyváženia systému."
    }
  ];

  const problems = [
    {
      icon: AlertTriangle,
      title: "Radiátor neheje",
      description: "Ak je radiátor studený alebo vlažný aj keď je kúrenie zapnuté, príčinou môže byť vzduch v systéme, upchaný ventil alebo problém s obehom vody."
    },
    {
      icon: Thermometer,
      title: "Nerovnomerné kúrenie",
      description: "Radiátor hreje len v hornej alebo dolnej časti? Tento problém zvyčajne rieši odvzdušnenie alebo výmena ventilu."
    },
    {
      icon: Droplets,
      title: "Únik vody z radiátora",
      description: "Kvapkanie z ventilu, spojov alebo samotného telesa radiátora. Aj malý únik môže spôsobiť vážne škody na podlahe a stene."
    },
    {
      icon: Home,
      title: "Hluk vo vykurovacom systéme",
      description: "Klopanie, bublanie alebo pískanie v radiátoroch signalizuje vzduch v systéme, nesprávny prietok alebo opotrebované ventily."
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
      question: "Kedy je najlepšie vymeniť radiátory?",
      answer: "Ideálny čas na výmenu radiátorov je mimo vykurovacej sezóny, teda od mája do septembra. Vtedy sa dá systém bez problémov vypustiť a nie ste obmedzení nedostatkom tepla. V prípade havárie však vieme radiátor vymeniť kedykoľvek."
    },
    {
      question: "Aké radiátory odporúčate?",
      answer: "Pre väčšinu domácností odporúčame panelové oceľové radiátory – majú výborný pomer výkonu a ceny. Pre moderné interiéry sú vhodné dizajnové radiátory. Poradíme vám podľa veľkosti miestnosti a typu vykurovania."
    },
    {
      question: "Koľko stojí výmena radiátora?",
      answer: "Cena výmeny radiátora závisí od typu, veľkosti a náročnosti prác. Bežná výmena panelového radiátora sa pohybuje od 80 do 200 € bez ceny radiátora. Presnú cenu vám oznámime po obhliadke."
    },
    {
      question: "Pracujete aj počas vykurovacej sezóny?",
      answer: "Áno, pracujeme celoročne. Počas vykurovacej sezóny riešime najmä havarijné opravy tečúcich radiátorov a ventilov. Výmenu radiátorov však odporúčame plánovať na letné mesiace."
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
              <span className="text-gradient">Oprava</span> a výmena{" "}
              <span className="text-gradient">radiátorov</span> v Bratislave
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Profesionálne kúrenárske služby – od výmeny radiátorov cez opravu ventilov
              až po odvzdušnenie systému. Aby bolo u vás doma vždy teplo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="tel:+421944562059">
                  <Phone className="mr-2 h-5 w-5" />
                  Zavolať kúrenára
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
              Naše služby <span className="text-gradient">vykurovania</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zabezpečujeme komplexné kúrenárske práce v bytoch, rodinných domoch
              aj v bytových domoch po celej Bratislave.
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

      {/* Problems Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Príznaky porúch
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kedy volať <span className="text-gradient">kúrenára</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ak spozorujete niektorý z týchto problémov, neodkladajte opravu.
              Včasný zásah predchádza väčším škodám a ušetrí vám peniaze.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <Card key={index} className="bg-card hover:card-shadow-hover transition-all group cursor-pointer border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent group-hover:bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                    <problem.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
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
                Poskytujeme kúrenárske služby v celej Bratislave a blízkom okolí.
                Rýchly výjazd zabezpečíme do všetkých mestských častí. V prípade havárie –
                napríklad tečúceho radiátora – sa snažíme byť u vás čo najskôr.
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Odpovede na najčastejšie otázky o výmene radiátorov a kúrenárskych službách.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
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

          {/* Cross-links */}
          <div className="max-w-3xl mx-auto mt-12 space-y-4 text-center">
            <p className="text-muted-foreground text-lg">
              Potrebujete aj opravu vodovodného potrubia? Pozrite si naše služby{" "}
              <Link href="/oprava-potrubia" className="text-primary font-semibold hover:underline">
                opravy a výmeny vodovodných rozvodov
              </Link>.
            </p>
            <p className="text-muted-foreground text-lg">
              Riešite rekonštrukciu kúpeľne? Pozrite naše služby{" "}
              <Link href="/montaz-sanity" className="text-primary font-semibold hover:underline">
                montáže sanity
              </Link>.
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
                Potrebujete <span className="text-primary">kúrenára</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Zavolajte nám a vyriešime váš problém s kúrením rýchlo a profesionálne.
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
