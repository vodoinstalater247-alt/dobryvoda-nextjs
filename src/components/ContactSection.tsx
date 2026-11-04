"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Send, Clock, MessageCircle, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import PrivacyNotice from "@/components/PrivacyNotice";

const ContactSection = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const formRef = useScrollAnimation({ threshold: 0.1 });
  const infoRef = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          title: t("contact.toast.title"),
          description: t("contact.toast.description"),
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t("contact.info.phone"),
      value: "0944 562 059",
      href: "tel:+421944562059",
    },
    {
      icon: Clock,
      label: t("contact.info.regular"),
      value: "PON-PIA 7:00 - 17:00",
      href: "#",
    },
    {
      icon: MessageCircle,
      label: t("contact.info.emergency"),
      value: "24/7",
      href: "tel:+421944562059",
    },
    {
      icon: MapPin,
      label: t("contact.info.area"),
      value: t("contact.info.area.value"),
      href: "#",
    },
  ];

  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div
          ref={headerRef.ref}
          className={`text-center max-w-2xl mx-auto mb-16 scroll-animate ${headerRef.isVisible ? "visible" : ""}`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            {t("contact.label")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("contact.title1")}
            <span className="text-gradient">{t("contact.title2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Form */}
          <div
            ref={formRef.ref}
            className={`bg-card rounded-2xl p-8 card-shadow h-full flex flex-col scroll-animate-left ${formRef.isVisible ? "visible" : ""}`}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              {t("contact.form.title")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
              <div>
                <Input
                  placeholder={t("contact.form.name")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                  onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity(t("contact.validation.name"))}
                  onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder={t("contact.form.email")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                  onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity(t("contact.validation.email"))}
                  onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                />
                <Input
                  type="tel"
                  placeholder={t("contact.form.phone")}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                />
              </div>
              <Textarea
                placeholder={t("contact.form.message")}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="resize-none flex-1 min-h-[100px]"
                onInvalid={(e) => (e.target as HTMLTextAreaElement).setCustomValidity(t("contact.validation.message"))}
                onInput={(e) => (e.target as HTMLTextAreaElement).setCustomValidity("")}
              />
              <PrivacyNotice />
              <Button type="submit" variant="hero" size="lg" className="w-full group mt-auto" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    {t("contact.form.submit")}
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            ref={infoRef.ref}
            className={`flex flex-col justify-center gap-4 scroll-animate-right ${infoRef.isVisible ? "visible" : ""}`}
          >
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:card-shadow transition-all duration-300"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="font-bold text-lg text-foreground">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
