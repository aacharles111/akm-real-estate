"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const decoRef = useRef<HTMLDivElement>(null);

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
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        );

      gsap.to(decoRef.current, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: "linear",
      });

      gsap.to(decoRef.current, {
        scale: 1.05,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-white"
    >
      {/* Background decoration */}
      <div
        ref={decoRef}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] border border-green-200/50 rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-[300px] h-[300px] border border-green-100/50 rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/4 w-3 h-3 bg-green-300/60 rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-green-400/50 rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary-mid bg-green-100 rounded-full">
          CMDA Approved Plots
        </span>
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-dark leading-tight opacity-0"
        >
          Plot in Chennai
          <br />
          <span className="text-primary-mid">Available for Sale</span>
        </h1>
        <p
          ref={subRef}
          className="mt-6 text-lg md:text-xl text-text-body max-w-2xl mx-auto leading-relaxed opacity-0"
        >
          CMDA Approved &bull; Prime Location &bull; Best Rates
        </p>
        <div ref={btnRef} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-mid rounded-full hover:bg-cta-hover transition-colors duration-300 shadow-lg shadow-green-200"
          >
            Contact Now
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-mid bg-white border-2 border-primary-mid rounded-full hover:bg-green-50 transition-colors duration-300"
          >
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
