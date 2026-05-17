"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        contentRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-r from-green-700 via-green-600 to-green-800 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Your Dream Plot is Just a Call Away
        </h2>
        <p className="mt-6 text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
          Don&apos;t wait. Premium CMDA-approved plots are selling fast. Secure
          yours today with AKC Real Estate.
        </p>
        <div className="mt-10">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-green-700 hover:text-green-800 font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <FaWhatsapp className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
            Contact Us on WhatsApp
          </a>
        </div>
        <p className="mt-6 text-green-200 text-sm">
          Or call us directly at{" "}
          <a
            href="tel:+919876543210"
            className="underline hover:text-white transition-colors"
          >
            +91 98765 43210
          </a>
        </p>
      </div>
    </section>
  );
}
