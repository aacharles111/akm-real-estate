"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Tambaram, Chennai",
    text: "AKC Realestate made my plot purchase seamless. The documentation was crystal clear and the team guided me through every step. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Mohan",
    location: "Medavakkam, Chennai",
    text: "I was worried about legal issues with plot buying, but AKC ensured everything was CMDA-approved. Got my dream plot at a great price.",
    rating: 5,
  },
  {
    name: "Suresh Raman",
    location: "Chromepet, Chennai",
    text: "Best real estate experience in Chennai. Transparent pricing, no hidden charges, and excellent post-sale support. Will buy again.",
    rating: 5,
  },
  {
    name: "Lakshmi Narayanan",
    location: "OMR, Chennai",
    text: "We bought two plots from AKC and both transactions were smooth. The team knows Chennai's market inside out. True professionals.",
    rating: 5,
  },
  {
    name: "Karthik Subramanian",
    location: "Pallavaram, Chennai",
    text: "As a first-time buyer, I had many questions. AKC's team patiently answered everything. My plot has already appreciated 20% in value!",
    rating: 5,
  },
  {
    name: "Deepa Venkat",
    location: "New Manli, Chennai",
    text: "Excellent investment opportunity. The location recommendations were spot-on. Very happy with my purchase and the returns so far.",
    rating: 5,
  },
  {
    name: "Anand Balaji",
    location: "Tambaram West, Chennai",
    text: "Professional, honest, and reliable. What sets AKC apart is their commitment to customer satisfaction even after the sale is complete.",
    rating: 5,
  },
  {
    name: "Meera Jagannathan",
    location: "Velachery, Chennai",
    text: "Great experience from site visit to registration. All promises were delivered. I've already recommended AKC to my family and friends.",
    rating: 5,
  },
];

const ReviewCard = ({
  review,
}: {
  review: (typeof reviews)[number];
}) => (
  <div className="flex-shrink-0 w-[340px] md:w-[380px] mx-4 py-4">
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl border border-green-50 p-8 h-full transition-all duration-200 transform hover:-translate-y-1 whitespace-normal">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base italic whitespace-normal">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="border-t border-green-50 pt-4 flex items-center justify-between">
        <div>
          <p className="font-bold text-green-950 text-sm md:text-base">{review.name}</p>
          <p className="text-xs text-gray-500">{review.location}</p>
        </div>
        <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
          Verified Buyer
        </span>
      </div>
    </div>
  </div>
);

export default function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const togglePause = useCallback(() => {
    setPaused((prev) => !prev);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 35,
      ease: "none",
      repeat: -1,
    });

    tweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, []);

  // Combine pause toggle and hover to control animation speed
  useEffect(() => {
    const tween = tweenRef.current;
    if (!tween) return;
    const speed = paused || hovered ? 0 : 1;
    gsap.to(tween, { timeScale: speed, duration: 0.6, ease: "power2.inOut" });
  }, [paused, hovered]);

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-green-50/50 overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-green-950 tracking-tight">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from families who built their homes and secured their investments on our plots.
          </p>

          {/* Pause/Play toggle */}
          <button
            onClick={togglePause}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-green-200 bg-white text-green-700 hover:bg-green-50 hover:border-green-300 transition-all duration-200 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            aria-label={paused ? "Resume review carousel" : "Pause review carousel"}
          >
            {paused ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Resume
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Pause
              </>
            )}
          </button>
        </div>
      </div>

      {/* Marquee viewport container */}
      <div
        className="relative w-full overflow-hidden select-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left/Right shade overlays for premium fading boundary scroll */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex whitespace-nowrap will-change-transform"
          style={{ width: "max-content" }}
        >
          {/* Main set of cards */}
          {reviews.map((review, i) => (
            <ReviewCard key={`main-${i}`} review={review} />
          ))}
          {/* Duplicate set of cards for seamless wrapping loop */}
          {reviews.map((review, i) => (
            <ReviewCard key={`dup-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
