"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiChevronDown } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Cursor glow tracker (throttled via requestAnimationFrame)
    let rafId: number | null = null;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.transform = `translate(${mouseX - 200}px, ${mouseY - 200}px)`;
          }
          rafId = null;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 2. Animations using GSAP MatchMedia (respects user accessibility preferences)
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.2 }
      )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.7"
        )
        .fromTo(
          btnRef.current,
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.5"
        );

      // Scale-up parallax on the content container
      gsap.to(".hero-content", {
        yPercent: -10,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 30%",
          scrub: true,
        },
      });

      // One-time fade-in for scroll indicator (no infinite bounce)
      gsap.fromTo(
        scrollRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.8, delay: 2.5, ease: "power2.out" }
      );
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
      mm.revert();
    };
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Interactive Cursor Glow Spot (Hidden on mobile, throttled) */}
      <div
        ref={glowRef}
        className="cursor-glow-dot hidden md:block will-change-transform"
        style={{ left: 0, top: 0 }}
      />

      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://social-collage.s3.ap-south-1.amazonaws.com/properties/1766728639600-pwcjtl.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay gradient for high contrast text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/85" />
      </div>

      {/* Subtle static blur ambient spots */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-30"
      >
        <div className="absolute top-1/4 left-1/4 rounded-full bg-green-500/10 blur-3xl w-72 h-72" />
        <div className="absolute bottom-1/3 right-1/3 rounded-full bg-green-800/10 blur-3xl w-64 h-64" />
      </div>

      {/* Hero Content */}
      <div className="hero-content relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <h1
          ref={headingRef}
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-4xl"
        >
          CMDA-Approved Plots for Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-500">
            Dream Home
          </span>
        </h1>

        <p
          ref={subRef}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl font-medium tracking-wide"
        >
          Build Your Future on Solid Ground in Chennai&apos;s Prime Locations.
        </p>

        <div ref={btnRef} className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="https://wa.me/919941318518"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-xl shadow-green-600/30 transition-all duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
          >
            <FaWhatsapp className="w-6 h-6" />
            Contact Us on WhatsApp
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) {
                const yOffset = -80;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-medium px-8 py-4 rounded-full text-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
          >
            View Rates
          </a>
        </div>
      </div>

      {/* Animated Scroll Down Chevron (one-time fade in, then static) */}
      <div
        ref={scrollRef}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white cursor-pointer transition-colors duration-200 p-2 z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 rounded-full"
      >
        <HiChevronDown size={36} />
      </div>
    </section>
  );
}
