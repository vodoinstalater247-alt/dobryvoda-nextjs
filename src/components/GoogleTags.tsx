"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  COOKIE_CONSENT_COOKIE,
  getConsentFromCookieValue,
  shouldLoadGoogleTags,
  type CookieConsent,
} from "@/lib/cookie-consent";

const readConsent = (): CookieConsent | null => {
  const value = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${COOKIE_CONSENT_COOKIE}=`))
    ?.split("=")[1];

  return getConsentFromCookieValue(value);
};

export default function GoogleTags() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    const updateConsent = () => setConsent(readConsent());
    updateConsent();
    window.addEventListener("dobryvodar-cookie-consent", updateConsent);
    return () => window.removeEventListener("dobryvodar-cookie-consent", updateConsent);
  }, []);

  if (!shouldLoadGoogleTags(consent)) return null;

  return (
    <>
      <Script id="gtm-consented" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NGCZ6LGS');`}
      </Script>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-87S1WS3VLS" strategy="afterInteractive" />
      <Script id="ga-consented" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-87S1WS3VLS');`}
      </Script>
    </>
  );
}
