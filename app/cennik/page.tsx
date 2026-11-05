import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock3, Phone, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";
import { Button } from "@/components/ui/button";
import { businessProfile } from "@/lib/business-profile";
import { makeBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Cenník vodoinštalatérskych prác Bratislava | Dobrý vodár",
  description:
    "Orientačný cenník vodoinštalatérskych prác v Bratislave. Výmena batérie, oprava WC, montáž potrubia, krtkovanie a havarijný servis.",
  alternates: { canonical: "https://dobryvodar.sk/cennik" },
};

const priceGroups = [
  {
    id: "vymena-a-montaz",
    title: "Výmena a montáž",
    items: [
      ["Výmena sifónu", "od 40 €"], ["Výmena rohového ventilu (roháčika)", "od 40 €"],
      ["Výmena vodovodnej batérie", "od 50 €"], ["Výmena sprchovej batérie", "od 50 €"],
      ["Výmena termostatickej batérie", "od 60 €"], ["Výmena sprchovej hadice", "od 20 €"],
      ["Výmena sprchovej hlavice", "od 20 €"], ["Výmena sprchového setu", "od 40 €"],
      ["Výmena WC misy", "od 150 €"], ["Výmena WC nádržky", "od 60 €"],
      ["Výmena napúšťacieho ventilu WC", "od 40 €"], ["Výmena vypúšťacieho ventilu WC", "od 50 €"],
      ["Výmena WC tlačidla", "od 30 €"], ["Výmena umývadla", "od 80 €"],
      ["Výmena kuchynského drezu", "od 80 €"], ["Výmena kuchynskej batérie", "od 50 €"],
      ["Výmena práčkového ventilu", "od 40 €"], ["Výmena rohového ventilu na práčku", "od 40 €"],
    ],
  },
  {
    id: "sprchovy-kut-a-vana",
    title: "Sprchový kút a vaňa",
    items: [
      ["Výmena sprchového sifónu", "od 60 €"], ["Montáž sprchového kúta", "od 150 €"],
      ["Demontáž sprchového kúta", "od 60 €"], ["Montáž sprchovej vaničky", "od 100 €"],
      ["Demontáž sprchovej vaničky", "od 60 €"], ["Výmena vaňového sifónu", "od 80 €"],
      ["Montáž vane", "od 150 €"], ["Silikónovanie vane", "od 60 €"],
      ["Silikónovanie sprchového kúta", "od 60 €"], ["Odstránenie starého silikónu", "od 30 €"],
    ],
  },
  {
    id: "opravy-a-servis",
    title: "Opravy a servis",
    items: [
      ["Oprava WC", "od 50 €"], ["Oprava vodovodnej batérie", "od 40 €"],
      ["Oprava úniku vody", "od 50 €"], ["Výmena tesnenia", "od 30 €"],
      ["Výmena ventilu", "od 40 €"], ["Odvzdušnenie radiátora", "od 20 €"],
      ["Výmena termostatickej hlavice", "od 25 €"], ["Výmena radiátorového ventilu", "od 70 €"],
      ["Výmena radiátora", "od 100 €"], ["Kontrola a diagnostika poruchy", "od 40 €"],
    ],
  },
  {
    id: "vodoinstalacne-prace",
    title: "Vodoinštalačné práce",
    items: [
      ["Montáž vodovodného potrubia", "od 15 €/bm"], ["Montáž odpadového potrubia", "od 15 €/bm"],
      ["Pripojenie umývadla", "od 50 €"], ["Pripojenie drezu", "od 50 €"],
      ["Pripojenie práčky", "od 30 €"], ["Pripojenie umývačky riadu", "od 30 €"],
      ["Montáž vodomeru", "od 40 €"], ["Montáž filtra na vodu", "od 40 €"],
      ["Montáž Geberit modulu", "od 150 €"], ["Montáž závesného WC", "od 100 €"],
    ],
  },
  {
    id: "krtkovanie-a-kanalizacia",
    title: "Krtkovanie a kanalizácia",
    items: [
      ["Čistenie sifónu", "od 40 €"], ["Čistenie odpadu", "od 60 €"],
      ["Krtkovanie odpadu", "od 80 €"], ["Mechanické čistenie kanalizácie", "od 80 €"],
      ["Kamerová diagnostika kanalizácie", "od 40 €"],
    ],
  },
  {
    id: "havarijny-servis",
    title: "Havarijný servis",
    items: [
      ["Výjazd a diagnostika", "od 50 €"], ["Havarijná oprava úniku vody", "od 80 €"],
      ["Urgentný výjazd", "individuálna cena"], ["Práca mimo pracovného času", "individuálna cena"],
    ],
  },
] as const;

const breadcrumbSchema = makeBreadcrumbSchema([
  { name: "Domov", url: "https://dobryvodar.sk" },
  { name: "Cenník", url: "https://dobryvodar.sk/cennik" },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vodoinštalatérske práce v Bratislave",
  serviceType: "Vodoinštalatérske práce",
  provider: { "@id": "https://dobryvodar.sk/#business" },
  areaServed: { "@type": "City", name: "Bratislava" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "15",
    offerCount: priceGroups.reduce((total, group) => total + group.items.length, 0),
  },
};

export default function PriceListPage() {
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />

      <section className="bg-secondary/30 pb-16 pt-10 md:pb-20 md:pt-32">
        <div className="container mx-auto px-4">
          <nav aria-label="Drobečková navigácia" className="mb-7 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Domov</Link><span className="px-2">/</span><span>Cenník</span>
          </nav>
          <div className="max-w-3xl">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.16em] text-primary">Transparentné ceny</span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">Cenník vodoinštalatérskych prác v Bratislave</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Orientačné ceny najčastejších opráv, montáží a havarijných výjazdov. Pred začiatkom práce vždy potvrdíme postup aj cenu.</p>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">
            {priceGroups.map((group) => <a key={group.id} href={`#${group.id}`} className="rounded-full border border-primary/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary">{group.title}</a>)}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-2">
            {priceGroups.map((group) => (
              <section id={group.id} key={group.id} className="scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <h2 className="border-b border-border bg-primary px-6 py-5 font-display text-2xl font-bold text-primary-foreground">{group.title}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[380px] text-left">
                    <thead className="sr-only"><tr><th>Práca</th><th>Cena</th></tr></thead>
                    <tbody>
                      {group.items.map(([name, price]) => (
                        <tr key={name} className="border-b border-border last:border-0 hover:bg-secondary/30">
                          <td className="px-6 py-4 text-sm font-medium text-foreground sm:text-base">{name}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-bold text-primary sm:text-base">{price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-primary/15 bg-secondary/40 p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-foreground">Dôležité informácie k cenám</h2>
            <ul className="mt-5 grid gap-3 text-muted-foreground md:grid-cols-2">
              {[
                "Uvedené ceny sú orientačné a predstavujú cenu za prácu.",
                "Cena materiálu nie je zahrnutá, pokiaľ nie je uvedené inak.",
                "Konečná cena závisí od náročnosti práce a technického stavu zariadenia.",
                "Pri väčšom rozsahu prác sa cena stanovuje individuálne.",
              ].map((item) => <li className="flex gap-3" key={item}><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{item}</li>)}
            </ul>
          </section>

          <section className="mt-6 grid gap-5 rounded-2xl bg-foreground p-7 text-primary-foreground md:grid-cols-[1fr_auto] md:items-center md:p-9">
            <div>
              <div className="flex items-center gap-2 text-primary"><Clock3 className="h-5 w-5" /><span className="font-semibold">Havarijná služba 24/7</span></div>
              <h2 className="mt-3 font-display text-2xl font-bold">Potrebujete rýchlu pomoc?</h2>
              <p className="mt-2 max-w-2xl text-primary-foreground/75">Pri havárii vody sa snažíme vyraziť do 2 hodín v Bratislave a okolí.</p>
            </div>
            <Button size="lg" asChild><a href={`tel:${businessProfile.phone}`}><Phone className="mr-2 h-5 w-5" />{businessProfile.phoneDisplay}</a></Button>
          </section>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
            <Link href="/oprava-wc" className="hover:text-primary">Oprava WC</Link>
            <Link href="/montaz-baterie" className="hover:text-primary">Montáž batérie</Link>
            <Link href="/vymena-rozvodov" className="hover:text-primary">Výmena rozvodov</Link>
            <Link href="/krtkovanie" className="hover:text-primary">Krtkovanie odpadu</Link>
            <Link href="/filtre-na-vodu" className="hover:text-primary">Filtre na vodu</Link>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />Poistenie zodpovednosti za škodu</span>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingPhoneButton />
    </main>
  );
}
