"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { COOKIE_CONSENT_COOKIE, getConsentFromCookieValue, type CookieConsent } from "@/lib/cookie-consent";

const readConsent = () => getConsentFromCookieValue(document.cookie.split("; ").find((item) => item.startsWith(`${COOKIE_CONSENT_COOKIE}=`))?.split("=")[1]);

export default function CookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const currentConsent = readConsent();
    setConsent(currentConsent);
    setIsOpen(!currentConsent);
    const openSettings = () => setIsOpen(true);
    window.addEventListener("dobryvodar-open-cookie-settings", openSettings);
    return () => window.removeEventListener("dobryvodar-open-cookie-settings", openSettings);
  }, []);

  const saveConsent = (value: CookieConsent) => {
    document.cookie = `${COOKIE_CONSENT_COOKIE}=${value}; Path=/; Max-Age=15552000; SameSite=Lax`;
    setConsent(value);
    setIsOpen(false);
    window.dispatchEvent(new Event("dobryvodar-cookie-consent"));
  };

  if (consent === undefined || !isOpen) return null;

  return (
    <section className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-2xl rounded-2xl border border-border bg-card p-5 shadow-2xl md:bottom-6 md:p-6" aria-label="Nastavenie cookies">
      <h2 className="font-display text-lg font-bold text-foreground">Používame cookies</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">Nevyhnutné cookies zabezpečujú fungovanie webu. Analytické cookies zapneme iba po vašom súhlase, aby sme mohli zlepšovať služby.</p>
      <p className="mt-2 text-sm text-muted-foreground"><Link className="font-medium text-primary underline underline-offset-4" href="/ochrana-osobnych-udajov">Viac o cookies a ochrane osobných údajov</Link></p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button type="button" onClick={() => saveConsent("rejected")} className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted">Len nevyhnutné</button>
        <button type="button" onClick={() => saveConsent("accepted")} className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Prijať analytické cookies</button>
      </div>
    </section>
  );
}
