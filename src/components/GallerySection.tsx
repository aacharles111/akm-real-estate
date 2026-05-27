"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import Lightbox from "./Lightbox";

gsap.registerPlugin(ScrollTrigger);

const mediaItems = [
  {
    src: "https://social-collage.s3.ap-south-1.amazonaws.com/properties/1766728639600-pwcjtl.jpeg",
    alt: "Sree Vaaragi Residency – BI City, Minjur – DTCP Approved Plots",
  },
  {
    src: "https://social-collage.s3.ap-south-1.amazonaws.com/properties/1766728876164-kkztqs.jpeg",
    alt: "Loketha Lakshmi Nagar – RERA & CMDA Approved Plots Ponneri",
  },
  {
    src: "https://social-collage.s3.amazonaws.com/properties/1767080689520-whquwn.jpeg",
    alt: "Srii Balaji Avenue – DTCP Approved Layout Tiruvallur BI CITY",
  },
  {
    src: "https://social-collage.s3.amazonaws.com/properties/1766728170586-5e7qc2.jpg",
    alt: "SrieVaare Aishwariyam Township – CMDA & RERA Approved",
  },
  {
    src: "https://social-collage.s3.amazonaws.com/properties/1776686113652-8wbaip.jpeg",
    alt: "BI City Beach Resort Plots – Ponneri North Chennai",
  },
  {
    src: "https://social-collage.s3.amazonaws.com/properties/1766458648764-top1nu.jpeg",
    alt: "Sree Vaaragi Residency – Plot Layout and Site Development",
  },
  {
    src: "https://social-collage.s3.ap-south-1.amazonaws.com/properties/1766471416070-df58zy.jpeg",
    alt: "Loketha Lakshmi Nagar – Gated Plot Community View",
  },
  {
    src: "https://social-collage.s3.amazonaws.com/properties/1767080689143-s22mlb.jpeg",
    alt: "Srii Balaji Avenue – Wide Roads and Plot Demarcation",
  },
  {
    src: "https://social-collage.s3.ap-south-1.amazonaws.com/properties/1766551434327-el6w37.jpg",
    alt: "Aishwariyam Township – Premium Gated Layout",
  },
  {
    src: "https://social-collage.s3.amazonaws.com/properties/1776686113593-hlicgr.jpeg",
    alt: "BI City Beach Resort Plots – Green Surroundings",
  },
  {
    src: "https://social-collage.s3.amazonaws.com/properties/1766458648716-2t5nq9.jpeg",
    alt: "Sree Vaaragi Residency – Site Walkthrough",
    isVideo: true,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-drone-view-of-a-dense-green-forest-42308-large.mp4",
  },
  {
    src: "https://social-collage.s3.amazonaws.com/properties/1767080689275-rvzf1a.jpeg",
    alt: "Srii Balaji Avenue – Aerial Layout Perspective",
    isVideo: true,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-camera-panning-upward-on-a-modern-white-house-41584-large.mp4",
  },
];

export default function GallerySection() {
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
    setLightboxIndex((prev) => (prev + 1) % mediaItems.length);
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const items = gridRef.current?.querySelectorAll(".gallery-item");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
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
      <section id="gallery" className="py-20 md:py-28 bg-green-50/30 relative overflow-hidden">
        {/* Soft background shape */}
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-green-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-green-950 tracking-tight">
              Explore the Plots
            </h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Take a visual tour of our premium, ready-to-construct plots. View drone walkthroughs and actual site photographs of high-appreciating sectors.
            </p>
          </div>

          {/* Masonry Grid */}
          <div
            ref={gridRef}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {mediaItems.map((item, i) => (
              <div
                key={i}
                className="gallery-item break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl bg-black shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 aspect-[4/3]"
                onClick={() => openLightbox(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(i);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading={i < 4 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Video Play Icon overlay */}
                {item.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-16 h-16 rounded-full bg-white/95 text-green-800 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                      <FaPlay size={18} className="translate-x-0.5" />
                    </div>
                  </div>
                )}

                {/* Dark Hover overlay with title text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white text-xs font-semibold uppercase tracking-widest text-green-400 mb-2">
                    {item.isVideo ? "Video Tour" : "Photograph"}
                  </span>
                  <h3 className="text-white text-base md:text-lg font-bold leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.alt}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={mediaItems}
          current={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
