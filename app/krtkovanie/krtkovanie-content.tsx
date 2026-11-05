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
  AlertTriangle,
  ChevronDown,
  Search,
  ShowerHead,
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

export default function KrtkovanieContent() {
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

  const problems = [
    {
      icon: AlertTriangle,
      title: "Upchatý kuchynský drez",
      description:
        "Mastnota, zvyšky jedla a saponátov postupne zanášajú sifón a potrubie. Voda prestane odtekať alebo odteká veľmi pomaly.",
    },
    {
      icon: Droplets,
      title: "Neodtekajúce umývadlo alebo vaňa",
      description:
        "Vlasy, mydlové zvyšky a kožné bunky vytvoria v sifóne a potrubí zátku, ktorá bráni odtoku vody.",
    },
    {
      icon: Home,
      title: "Upchaté WC",
      description:
        "Toaletný papier, vlhčené obrúsky alebo predmety, ktoré do WC nepatria. Častý problém v domácnostiach s deťmi.",
    },
    {
      icon: Search,
      title: "Zápach z odtoku",
      description:
        "Nepríjemný zápach z umývadla, drezu alebo sprchy signalizuje usadeniny v potrubí alebo poškodený sifón.",
    },
    {
      icon: ShowerHead,
      title: "Pomalý odtok v sprche",
      description:
        "Voda sa hromadí v sprchovom kúte? Príčinou sú väčšinou vlasy a mydlové usadeniny v odtokovom potrubí.",
    },
    {
      icon: Wrench,
      title: "Bublanie v potrubí",
      description:
        "Grganie alebo bublanie pri odtoku vody znamená čiastočné upchatia kanalizácie alebo problém s odvetraním.",
    },
  ];

  const steps = [
    {
      icon: Phone,
      title: "Telefonická konzultácia",
      description:
        "Opíšete nám problém a my vám hneď poradíme predbežné riešenie. Termín návštevy dohodneme podľa typu upchatia a dostupnosti.",
    },
    {
      icon: Zap,
      title: "Zásah u zákazníka",
      description:
        "Technik príde priamo k vám domov s kompletným vybavením. Nemusíte nič pripravovať ani zabezpečovať.",
    },
    {
      icon: Wrench,
      title: "Diagnostika a čistenie",
      description:
        "Zistíme presnú príčinu upchatia a vyčistíme potrubie modernou technikou Ridgid FlexShaft. Pracujeme čisto a bez neporiadku.",
    },
    {
      icon: CheckCircle,
      title: "Kontrola po vyčistení",
      description:
        "Po vyčistení skontrolujeme prietok vody a spolu si overíme výsledok zásahu.",
    },
  ];

  const services = [
    { icon: Droplets, title: "Kuchynské drezy a sifóny" },
    { icon: Home, title: "Umývadlá a vane" },
    { icon: ShowerHead, title: "Sprchové kúty a odtoky" },
    { icon: Building, title: "WC a pisoáre" },
    { icon: Wrench, title: "Bytové stúpačky" },
    { icon: Home, title: "Domové kanalizačné prípojky" },
    { icon: Droplets, title: "Vonkajšie kanalizačné šachty" },
    { icon: Building, title: "Dažďové zvody" },
  ];

  const areas = [
    "Staré Mesto", "Ružinov", "Nové Mesto", "Petržalka", "Dúbravka",
    "Karlova Ves", "Rača", "Vajnory", "Devín", "Devínska Nová Ves",
    "Záhorská Bystrica", "Lamač", "Podunajské Biskupice", "Vrakuňa",
    "Čunovo", "Jarovce", "Rusovce",
  ];

  const trustPoints = [
    {
      icon: Zap,
      title: "Dohodnutie termínu",
      description: "Termín zásahu dohodneme podľa typu upchatia, prístupnosti a dostupnosti.",
    },
    {
      icon: Shield,
      title: "Rozsah práce vopred",
      description: "Pred začatím si potvrdíme postup, potrebný materiál a cenu.",
    },
    {
      icon: Star,
      title: "Skúsení technici",
      description: "Naši technici majú dlhoročnú prax a pravidelne sa školia na najnovšie technológie a postupy.",
    },
  ];

  const faqs = [
    {
      question: "Koľko stojí krtkovanie?",
      answer:
        "Cena závisí od typu upchatia, priemeru potrubia a prístupnosti. Pred začatím si potvrdíme postup a cenu.",
    },
    {
      question: "Ako rýchlo prídete?",
      answer:
        "Termín zásahu dohodneme podľa typu upchatia, prístupnosti a aktuálnej dostupnosti.",
    },
    {
      question: "Pomôže mi krtkovanie, ak mám starý dom s liatinovým potrubím?",
      answer:
        "Áno, naša technika je šetrná aj k starším materiálom vrátane liatinového a keramického potrubia. FlexShaft je bezpečnejší ako vysokotlakové čistenie, ktoré môže staré potrubie poškodiť.",
    },
    {
      question: "Robíte aj preventívne čistenie?",
      answer:
        "Áno, preventívne krtkovanie odporúčame raz za 1-2 roky, najmä v starších bytoch, rodinných domoch a prevádzkach s veľkým zaťažením kanalizácie. Predídete tak náhlym upchatiam.",
    },
    {
      question: "Čistíte aj firemné a reštauračné prevádzky?",
      answer:
        "Áno, poskytujeme krtkovanie pre domácnosti, firmy aj reštauračné prevádzky. Pre gastroprevádzky ponúkame aj pravidelný servisný plán na čistenie tukových usadenín.",
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
              <Wrench className="inline h-4 w-4 mr-2" />
              Profesionálne služby v Bratislave
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Profesionálne <span className="text-gradient">Krtkovanie</span> a{" "}
              <span className="text-gradient">Čistenie Odpadov</span> v Bratislave
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Upchatý odpad? Vyriešime to rýchlo a čisto. Moderná technika{" "}
              <strong className="text-primary">Ridgid FlexShaft</strong> a termín zásahu dohodnutý podľa situácie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="tel:+421944562059">
                  <Phone className="mr-2 h-5 w-5" />
                  Zavolať krtkovanie
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
                <span>Dohodnutie termínu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Rozsah práce vopred</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Kontrola po vyčistení</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problemy" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Bežné problémy
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kedy potrebujete krtkovanie?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upchatý odpad sa môže prejaviť rôznymi spôsobmi. Ak spozorujete niektorý z týchto príznakov, neváhajte nás kontaktovať.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <Card key={index} className="border-border hover:border-primary/30 card-shadow hover:card-shadow-hover transition-all">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-4">
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

      {/* Process Section */}
      <section id="postup" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Náš postup
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ako postupujeme
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

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Naše služby
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Čo všetko vyčistíme?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Krtkujeme všetky typy odpadového potrubia v domácnostiach, bytových domoch aj komerčných prevádzkach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-card hover:card-shadow-hover transition-all group cursor-pointer border-border">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 bg-accent group-hover:bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Naša technika
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Moderná technika pre dokonalé vyčistenie
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-8 text-primary-foreground mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                  <Wrench className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">Ridgid FlexShaft K9-102</h3>
                <p className="text-primary-foreground/90">
                  Profesionálny stroj s rotujúcimi reťazovými hlavicami, ktoré čistia potrubie od steny k stene.
                  Vhodný pre priemery 32-100 mm. Na rozdiel od vysokotlakového čistenia je šetrný k potrubiu
                  a nespôsobuje špinenie interiéru.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-border card-shadow">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Elektromechanické špirály</h3>
                <p className="text-muted-foreground">
                  Pre menšie priemery potrubia a sifóny používame profesionálne elektromechanické špirály.
                  Efektívne odstraňujú vlasy, mastnotu a organické usadeniny.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border card-shadow">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Výhody oproti domácim riešeniam</h3>
                <p className="text-muted-foreground">
                  Chemické prostriedky z obchodu riešia len povrchové upchatia a môžu poškodiť potrubie.
                  Profesionálne krtkovanie odstraňuje príčinu problému trvalo a bezpečne.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className="text-muted-foreground text-lg">
              Pre komplexné čistenie kanalizácie a monitoring potrubia ponúkame aj{" "}
              <Link href="/kanalizacia" className="text-primary font-semibold hover:underline">
                špecializované služby čistenia kanalizácie
              </Link>.
            </p>
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
                Poskytujeme služby krtkovania v celej Bratislave a blízkom okolí.
                Termín zásahu dohodneme podľa lokality a aktuálnej dostupnosti.
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
              Prečo si vybrať Dobrého vodára?
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

          {/* Cross-link */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              Potrebujete aj opravu vodovodného potrubia? Pozrite si naše služby{" "}
              <Link href="/oprava-potrubia" className="text-primary font-semibold hover:underline">
                opráv a výmeny potrubí
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
                Máte <span className="text-primary">upchatý odpad</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Zavolajte nám a vyriešime váš problém s upchatým odpadom rýchlo a profesionálne.
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
