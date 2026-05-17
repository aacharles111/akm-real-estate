"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lightbox from "./Lightbox";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    alt: "Green plot in Chennai",
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    alt: "Modern luxury house plot",
  },
  {
    src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
    alt: "Residential plot area",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    alt: "Modern home exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800&q=80",
    alt: "Green plot land",
  },
  {
    src: "https://images.unsplash.com/photo-1434082032745-a1590c00b1e2?w=800&q=80",
    alt: "Aerial drone shot of land",
  },
  {
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80",
    alt: "Aerial view of plots",
  },
  {
    src: "https://images.unsplash.com/photo-1592595896616-c37162298647?w=800&q=80",
    alt: "Green land for sale",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Luxury estate plot",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    alt: "Modern residential plot",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    alt: "Premium plot land",
  },
  {
    src: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80",
    alt: "Estate development plot",
  },
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
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              end: "bottom 15%",
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
      <section
        ref={sectionRef}
        id="gallery"
        className="py-20 md:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Explore the Plot
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Take a visual tour of our premium CMDA-approved plots in prime
              Chennai locations
            </p>
          </div>

          <div
            ref={gridRef}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="gallery-item break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={i < 6 ? "eager" : "lazy"}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={images}
          current={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
