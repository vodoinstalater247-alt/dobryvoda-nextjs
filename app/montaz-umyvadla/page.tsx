import type { Metadata } from "next";
import FocusedServicePage from "@/components/FocusedServicePage";
import { ServiceSchemas } from "@/lib/service-schemas";
import { makeServiceMetadata } from "@/lib/service-metadata";
import { genericServiceFaqs } from "@/lib/generic-service-faqs";

const title = "Montáž umývadla Bratislava | Pripojenie a výmena | Dobrý Vodár";
const description = "Montáž a výmena umývadla v Bratislave: pripojenie batérie, sifónu a odpadu, kontrola tesnosti a presné osadenie.";
export const metadata: Metadata = makeServiceMetadata({ title, description, slug: "montaz-umyvadla", image: "/images/portfolio/installed-basin-faucet.webp" });

export default function MontazUmyvadlaPage() {
  return <><ServiceSchemas serviceType="Montáž umývadla" title={title} description={description} slug="montaz-umyvadla" pageName="Montáž umývadla" faqs={genericServiceFaqs} /><FocusedServicePage eyebrow="Vodoinštalatér Bratislava" title="Montáž a výmena umývadla v Bratislave" lead="Presné osadenie umývadla, skrinky, batérie aj sifónu. Prípojky skontrolujeme a všetko odovzdáme po overení tesnosti." image="/images/portfolio/installed-basin-faucet.webp" imageAlt="Montáž umývadlovej batérie v kúpeľni" sections={[{ title: "Čo zahŕňa montáž umývadla", paragraphs: ["Pri montáži riešime osadenie umývadla, pripojenie batérie, sifónu a odpadu. Ak je potrebné, upravíme aj prívody vody alebo rohové ventily.", "Pri výmene najprv skontrolujeme stav existujúcich spojov. Tak sa dá predísť tomu, aby sa problém prejavil až po osadení nového zariadenia."], points: ["Osadenie závesného aj stojanového umývadla", "Pripojenie batérie, sifónu a odpadu", "Kontrola tesnosti spojov", "Montáž skrinky pod umývadlo"] }, { title: "Kedy je vhodné zavolať vodoinštalatéra", paragraphs: ["Pomoc je užitočná najmä vtedy, keď umývadlo meníte spolu s batériou alebo skrinkou, prípojky nesedia na nový typ zariadenia alebo sa objaví kvapkanie pri sifóne.", "Pred objednaním si pripravte rozmery umývadla a fotku miesta montáže. Uľahčí to dohodnutie rozsahu práce a potrebného materiálu."] }]} relatedLinks={[{ href: "/montaz-baterie", label: "Montáž a výmena batérie" }, { href: "/vymena-sifonu", label: "Výmena sifónu" }, { href: "/montaz-sanity", label: "Kompletná montáž sanity" }]} faqs={genericServiceFaqs} /></>;
}
