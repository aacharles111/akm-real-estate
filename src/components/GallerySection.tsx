"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lightbox from "./Lightbox";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { seed: "plot1", alt: "CMDA approved plot in Chennai" },
  { seed: "plot2", alt: "Residential plot near Tambaram" },
  { seed: "plot3", alt: "Investment plot in New Manli" },
  { seed: "plot4", alt: "Prime location plot in Medavakkam" },
  { seed: "plot5", alt: "Plot near IT corridor Chennai" },
  { seed: "plot6", alt: "Residential plot in Chromepet" },
  { seed: "plot7", alt: "Plot in Pallavaram area" },
  { seed: "plot8", alt: "OMR corridor plot" },
  { seed: "plot9", alt: "Plot with clear title in Chennai" },
  { seed: "plot10", alt: "Affordable plot in Tambaram West" },
  { seed: "plot11", alt: "Premium plot Chennai suburbs" },
  { seed: "plot12", alt: "Gated community plot" },
  { seed: "plot13", alt: "Corner plot near main road" },
  { seed: "plot14", alt: "Plot near upcoming metro" },
  { seed: "plot15", alt: "Investment land Chennai" },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const items = gridRef.current?.querySelectorAll(".gallery-item");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
    return () => mm.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} id="gallery" className="py-20 md:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              Explore the Plot
            </h2>
            <p className="mt-4 text-lg text-text-body max-w-2xl mx-auto">
              Browse through our premium plot locations across Chennai&apos;s
              most promising corridors.
            </p>
          </div>

          <div
            ref={gridRef}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {images.map((img, index) => (
              <div
                key={img.seed}
                className="gallery-item break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl shadow-md border border-green-100 bg-white"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openLightbox(index);
                }}
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={`https://picsum.photos/seed/${img.seed}/800/600`}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}
