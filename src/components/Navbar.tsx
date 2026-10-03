"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), href: "/#domov" },
    { name: t("nav.services"), href: "/#sluzby" },
    { name: t("nav.work"), href: "/#prace" },
    { name: t("nav.references"), href: "/#referencie" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.contact"), href: "/#kontakt" },
  ];

  return (
    <nav className="relative md:fixed md:top-0 md:left-0 md:right-0 z-50 bg-card/95 md:backdrop-blur-md border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Dobrý vodár" width={120} height={56} className="h-14 w-auto" priority />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button & Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <a href="tel:+421944562059" className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="h-4 w-4" />
              0944 562 059
            </a>
            <Button variant="hero" size="default" asChild>
              <a href="/#kontakt">{t("nav.book")}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="tel:+421944562059" className="flex items-center gap-2 text-primary font-semibold py-2">
                <Phone className="h-4 w-4" />
                0944 562 059
              </a>
              <Button variant="hero" className="mt-2" asChild>
                <a href="/#kontakt">{t("nav.book")}</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
