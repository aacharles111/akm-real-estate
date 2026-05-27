"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgPatternRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Scale and fade-in content on scroll
      gsap.fromTo(
        contentRef.current,
        { scale: 0.9, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Parallax scroll zoom on background patterns
      gsap.to(bgPatternRef.current, {
        scale: 1.2,
        rotate: 5,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-gradient-to-br from-green-950 via-green-800 to-emerald-950 overflow-hidden"
    >
      {/* Parallax Background Grid Pattern */}
      <div
        ref={bgPatternRef}
        className="absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating decorative light orbs */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />

      {/* Static decorative phone icon in background */}
      <div className="absolute right-[10%] top-[20%] text-white/5 pointer-events-none hidden md:block">
        <FaPhoneAlt size={160} />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-green-400 bg-green-900/50 border border-green-500/20 px-4 py-2 rounded-full">
          Immediate site visits available
        </span>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-6 tracking-tight">
          Your Dream Plot is Just a Call Away
        </h2>

        <p className="mt-6 text-lg md:text-xl text-green-100/90 max-w-2xl mx-auto leading-relaxed">
          Don&apos;t wait. Premium CMDA-approved residential plots are selling fast. Secure your family&apos;s future with AKC Realestate today.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/919941318518"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn inline-flex items-center gap-3 bg-white text-green-900 hover:bg-green-50 hover:scale-105 font-bold px-8 py-4 rounded-full text-lg shadow-2xl transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
          >
            <FaWhatsapp className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
            Contact Us on WhatsApp
          </a>

          <a
            href="tel:+919941318518"
            className="inline-flex items-center gap-2 text-white hover:text-green-300 font-semibold px-8 py-4 rounded-full text-lg border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
          >
            <FaPhoneAlt size={14} />
            Call +91 99413 18518
          </a>
        </div>

        <p className="mt-6 text-green-300/70 text-sm">
          No broker fees &bull; Clear titles guaranteed &bull; Hassle-free registration
        </p>
      </div>
    </section>
  );
}
