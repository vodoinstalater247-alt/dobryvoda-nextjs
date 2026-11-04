import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dobryvodar.sk"),
  title: {
    default: "Vodoinštalatér Bratislava | Dobrý Vodár | Opravy 24/7",
    template: "%s",
  },
  description:
    "Profesionálny vodoinštalatér v Bratislave a okolí. Rýchle opravy potrubí, montáž sanity, čistenie odpadov a havarijná služba 24/7. Volajte 0944 562 059.",
  keywords:
    "vodoinštalatér bratislava, oprava vody, havarijná služba voda, čistenie odpadov, inštalatér, výmena batérie, dobrý vodár",
  authors: [{ name: "DobryVodar" }],
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://dobryvodar.sk",
    siteName: "Dobrý Vodár",
    title: "Vodoinštalatér Bratislava | Dobrý Vodár | Opravy 24/7",
    description:
      "Profesionálny vodoinštalatér v Bratislave a okolí. Rýchle opravy potrubí, montáž sanity, čistenie odpadov a havarijná služba 24/7.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vodoinštalatér Bratislava | Dobrý Vodár | Opravy 24/7",
    description:
      "Profesionálny vodoinštalatér v Bratislave a okolí. Rýchle opravy potrubí, montáž sanity, čistenie odpadov a havarijná služba 24/7.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/favicon.png", sizes: "192x192" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "SK-BL",
    "geo.placename": "Bratislava",
    "geo.position": "48.1486;17.1077",
    ICBM: "48.1486, 17.1077",
  },
  alternates: {
    canonical: "https://dobryvodar.sk",
    languages: {
      sk: "https://dobryvodar.sk",
      "x-default": "https://dobryvodar.sk",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={`${dmSans.variable} ${plusJakarta.variable}`}>
      <head />
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
