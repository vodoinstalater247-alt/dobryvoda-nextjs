"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { portfolioWorks } from "@/lib/portfolio-gallery";

const OurWorkSection = () => {
  const headerRef = useScrollAnimation({ threshold: 0.2 });
  const carouselRef = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();

  const works = [
    { id: "work-1", image: "/images/work-1.jpg", title: t("work.1"), href: undefined },
    { id: "work-2", image: "/images/work-2.jpg", title: t("work.2"), href: undefined },
    { id: "work-3", image: "/images/work-3.jpg", title: t("work.3"), href: undefined },
    { id: "work-4", image: "/images/work-4.jpg", title: t("work.4"), href: undefined },
    { id: "work-5", image: "/images/work-5.jpg", title: t("work.5"), href: undefined },
    { id: "work-6", image: "/images/work-6.jpg", title: t("work.6"), href: undefined },
    ...portfolioWorks.map((work) => ({
      ...work,
      title: t(work.titleKey),
    })),
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="prace" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef.ref}
          className={`text-center mb-12 scroll-animate ${headerRef.isVisible ? "visible" : ""}`}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {t("work.label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {t("work.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("work.description")}
          </p>
        </div>

        <div
          ref={carouselRef.ref}
          className={`relative scroll-animate-scale ${carouselRef.isVisible ? "visible" : ""}`}
        >
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {works.map((work) => (
                <div
                  key={work.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  {work.href ? (
                    <Link
                      href={work.href}
                      aria-label={`${work.title}. ${t("work.serviceLink")}`}
                      className="relative group block overflow-hidden rounded-xl shadow-lg aspect-[4/3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      <Image
                        src={work.image}
                        alt={`${t("work.realPhoto")}: ${work.title}`}
                        width={400}
                        height={300}
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-background font-semibold text-lg">{work.title}</h3>
                          <span className="mt-1 block text-sm text-background/90">{t("work.serviceLink")}</span>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                    <Image
                      src={work.image}
                      alt={work.title}
                      width={400}
                      height={300}
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-background font-semibold text-lg">
                          {work.title}
                        </h3>
                      </div>
                    </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 shadow-lg flex items-center justify-center hover:bg-background transition-colors z-10"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 shadow-lg flex items-center justify-center hover:bg-background transition-colors z-10"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
