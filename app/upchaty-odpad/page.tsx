import type { Metadata } from "next";
import FocusedServicePage from "@/components/FocusedServicePage";
import { ServiceSchemas } from "@/lib/service-schemas";
import { makeServiceMetadata } from "@/lib/service-metadata";
import { genericServiceFaqs } from "@/lib/generic-service-faqs";

const title = "Upchatý odpad Bratislava | Drez, umývadlo, WC | Dobrý Vodár";
const description = "Pomoc pri upchatom odpade v Bratislave. Riešime pomalé odtekanie drezu, umývadla, sprchy aj WC a preveríme príčinu problému.";
export const metadata: Metadata = makeServiceMetadata({ title, description, slug: "upchaty-odpad", image: "/images/work-4.jpg" });

export default function UpchatyOdpadPage() {
  return <><ServiceSchemas serviceType="Čistenie upchatého odpadu" title={title} description={description} slug="upchaty-odpad" pageName="Upchatý odpad" faqs={genericServiceFaqs} /><FocusedServicePage eyebrow="Čistenie odpadov Bratislava" title="Upchatý odpad v dreze, umývadle alebo WC" lead="Ak voda odteká pomaly alebo sa vracia späť, problém môže byť v sifóne, odbočke alebo v ďalšej časti odpadu. Zistíme príčinu a navrhneme vhodný postup." image="/images/work-4.jpg" imageAlt="Kúpeľňa s odpadom a sifónom" sections={[{ title: "Ako sa prejavuje upchatý odpad", paragraphs: ["Typickým príznakom je pomalé odtekanie vody, bublanie v potrubí, nepríjemný zápach alebo návrat vody do drezu či sprchy. Pri každom zariadení môže byť zdroj upchatia iný.", "Pred zásahom neodporúčame miešať viac agresívnych chemických prípravkov. Môžu poškodiť potrubie alebo sťažiť ďalšie čistenie."], points: ["Pomalé odtekanie vody", "Zápach zo sifónu alebo odpadu", "Voda sa vracia do zariadenia", "Upchatie v kuchyni, kúpeľni alebo WC"] }, { title: "Čo skontrolujeme pri čistení", paragraphs: ["Podľa prejavov preveríme sifón, prístupné spoje a smer odtoku. Pri zložitejšom probléme je dôležité zvoliť čistenie primerané materiálu a stavu rozvodov.", "Ak sa problém opakuje, môže ísť o nánosy v potrubí, nevhodný spád alebo poruchu ďalšej časti kanalizácie. V takom prípade odporučíme ďalší postup."] }]} relatedLinks={[{ href: "/krtkovanie", label: "Krtkovanie a čistenie odpadu" }, { href: "/kanalizacia", label: "Oprava kanalizácie" }, { href: "/vymena-sifonu", label: "Výmena sifónu" }]} faqs={genericServiceFaqs} /></>;
}
