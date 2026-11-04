import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov | Dobrý vodár",
  description: "Informácie o spracúvaní osobných údajov a používaní cookies na stránke Dobrý vodár.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <article className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Právne informácie</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">Ochrana osobných údajov</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">Tu vysvetľujeme, aké osobné údaje spracúvame, prečo ich potrebujeme a aké máte práva.</p>
        <div className="mt-12 space-y-10 text-muted-foreground [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:mt-3 [&_p]:leading-7 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          <section>
            <h2>1. Prevádzkovateľ</h2>
            <p>Prevádzkovateľom webovej stránky je <strong>Dobrý Vodar s. r. o.</strong>, IČO: <strong>57 972 443</strong>, so sídlom Karpatské námestie 7770/10A, 831 06 Bratislava – mestská časť Rača. V otázkach ochrany osobných údajov nás kontaktujte na <a className="text-primary underline" href="mailto:info@dobryvodar.sk">info@dobryvodar.sk</a> alebo telefonicky na 0944 562 059.</p>
          </section>
          <section><h2>2. Aké údaje spracúvame</h2><p>Pri odoslaní kontaktného formulára spracúvame meno, e-mailovú adresu, telefónne číslo a obsah správy. Údaje používame iba na odpoveď na váš dopyt, prípravu ponuky alebo zabezpečenie objednanej služby.</p></section>
          <section><h2>3. Právny základ a doba uchovávania</h2><p>Údaje spracúvame na základe vášho dopytu a oprávneného záujmu komunikovať so zákazníkmi; ak dôjde k objednávke, aj na plnenie zmluvy. Uchovávame ich len počas nevyhnutnej doby, najdlhšie podľa zákonných lehôt.</p></section>
          <section><h2>4. Príjemcovia údajov</h2><p>Formuláre technicky spracúva služba Formspree. Údaje môžu byť sprístupnené poskytovateľom hostingu a IT podpory, iba v rozsahu potrebnom na prevádzku webu a vybavenie dopytu.</p></section>
          <section><h2>5. Cookies a analytika</h2><p>Web používa nevyhnutné cookies pre svoje fungovanie. Google Tag Manager a Google Analytics načítame až po vašom dobrovoľnom súhlase s analytickými cookies. Súhlas môžete kedykoľvek zmeniť cez odkaz „Nastavenia cookies“ v pätičke.</p></section>
          <section><h2>6. Vaše práva</h2><ul><li>právo na prístup k údajom a ich opravu,</li><li>právo na vymazanie alebo obmedzenie spracúvania,</li><li>právo namietať proti spracúvaniu,</li><li>právo podať sťažnosť na Úrad na ochranu osobných údajov SR.</li></ul><p>Žiadosti uplatnite e-mailom na uvedenom kontakte.</p></section>
          <p className="border-t pt-6 text-sm">Posledná aktualizácia: 4. november 2026.</p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
