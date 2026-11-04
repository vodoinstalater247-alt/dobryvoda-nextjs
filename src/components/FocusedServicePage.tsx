import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";
import { Button } from "@/components/ui/button";
import { businessProfile } from "@/lib/business-profile";

type ContentSection = { title: string; paragraphs: string[]; points?: string[] };
type RelatedLink = { href: string; label: string };

interface FocusedServicePageProps {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  sections: ContentSection[];
  relatedLinks: RelatedLink[];
}

export default function FocusedServicePage({ eyebrow, title, lead, image, imageAlt, sections, relatedLinks }: FocusedServicePageProps) {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-secondary/30 pb-16 pt-8 md:pb-24 md:pt-32">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{lead}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild><a href={`tel:${businessProfile.phone}`}><Phone className="mr-2 h-5 w-5" />Zavolať a dohodnúť termín</a></Button>
              <Button size="lg" variant="outline" asChild><a href="#postup">Ako prebieha služba</a></Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl"><Image src={image} alt={imageAlt} width={1200} height={800} priority className="h-[320px] w-full object-cover md:h-[430px]" /></div>
        </div>
      </section>
      <article id="postup" className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="space-y-12">
          {sections.map((section) => <section key={section.title}>
            <h2 className="font-display text-3xl font-bold text-foreground">{section.title}</h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-muted-foreground">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            {section.points && <ul className="mt-6 grid gap-3 sm:grid-cols-2">{section.points.map((point) => <li key={point} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{point}</span></li>)}</ul>}
          </section>)}
        </div>
        <section className="mt-14 border-t border-border pt-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Ďalšie služby</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">{relatedLinks.map((link) => <Link key={link.href} href={link.href} className="group rounded-xl border border-border p-5 font-semibold text-foreground transition hover:border-primary/40 hover:shadow-md">{link.label}<span className="mt-3 flex items-center text-sm font-medium text-primary">Zistiť viac <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div>
        </section>
      </article>
      <section className="bg-primary py-16 text-primary-foreground"><div className="container mx-auto max-w-3xl px-4 text-center"><h2 className="font-display text-3xl font-bold">Potrebujete pomoc s vodoinštaláciou?</h2><p className="mt-4 text-lg opacity-90">Zavolajte nám alebo napíšte správu. Rozsah práce a termín dohodneme vopred.</p><Button className="mt-8" size="lg" variant="secondary" asChild><a href={`tel:${businessProfile.phone}`}>{businessProfile.phoneDisplay}</a></Button></div></section>
      <Footer />
      <FloatingPhoneButton />
    </main>
  );
}
