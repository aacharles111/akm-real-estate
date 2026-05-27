"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "@/types";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectHero({
  project,
  onEnquire,
}: {
  project: Project;
  onEnquire: () => void;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
      );

      gsap.to(".project-hero-bg", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
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
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="project-hero-bg absolute -top-[5%] left-0 w-full h-[110%] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.mainImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-green-400 bg-green-900/50 border border-green-500/20 px-4 py-2 rounded-full">
          {project.status.toUpperCase()}
        </span>

        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          {project.title}
        </h1>

        {project.subtitle && (
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {project.subtitle}
          </p>
        )}

        <button
          onClick={onEnquire}
          className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-xl shadow-green-600/30 transition-all duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
        >
          ENQUIRE NOW
        </button>
      </div>
    </section>
  );
}
