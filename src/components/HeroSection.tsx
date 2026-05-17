"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiChevronDown } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          btnRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6 },
          "-=0.3"
        );

      // Bouncing scroll indicator
      gsap.to(scrollRef.current, {
        y: 12,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => mm.revert();
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80)",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
        >
          Plot in Chennai{" "}
          <span className="text-green-400">Available for Sale</span>
        </h1>
        <p
          ref={subRef}
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
        >
          CMDA Approved &bull; Prime Location &bull; Best Rates
        </p>
        <div ref={btnRef} className="mt-10">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 animate-pulse"
          >
            Contact Now
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
      >
        <HiChevronDown size={32} />
      </div>
    </section>
  );
}
