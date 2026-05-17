"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const reviews = [
  {
    name: "Rajesh K",
    location: "Tambaram, Chennai",
    text: "AKM Real Estate made my plot purchase seamless. The documentation was crystal clear and the team guided me through every step. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya M",
    location: "Medavakkam, Chennai",
    text: "I was worried about legal issues with plot buying, but AKM ensured everything was CMDA-approved. Got my dream plot at a great price.",
    rating: 5,
  },
  {
    name: "Suresh R",
    location: "Chromepet, Chennai",
    text: "Best real estate experience in Chennai. Transparent pricing, no hidden charges, and excellent post-sale support. Will buy again.",
    rating: 5,
  },
  {
    name: "Lakshmi N",
    location: "OMR, Chennai",
    text: "We bought two plots from AKM and both transactions were smooth. The team knows Chennai's market inside out. True professionals.",
    rating: 5,
  },
  {
    name: "Karthik S",
    location: "Pallavaram, Chennai",
    text: "As a first-time buyer, I had many questions. AKM's team patiently answered everything. My plot has already appreciated 20% in value!",
    rating: 5,
  },
  {
    name: "Deepa V",
    location: "New Manli, Chennai",
    text: "Excellent investment opportunity. The location recommendations were spot-on. Very happy with my purchase and the returns so far.",
    rating: 5,
  },
  {
    name: "Anand B",
    location: "Tambaram West, Chennai",
    text: "Professional, honest, and reliable. What sets AKM apart is their commitment to customer satisfaction even after the sale is complete.",
    rating: 5,
  },
  {
    name: "Meera J",
    location: "Velachery, Chennai",
    text: "Great experience from site visit to registration. All promises were delivered. I've already recommended AKM to my family and friends.",
    rating: 5,
  },
];

const ReviewCard = ({
  review,
}: {
  review: (typeof reviews)[number];
}) => (
  <div className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-2xl shadow-lg border border-green-100 p-6 mx-3 select-none">
    <div className="flex items-center gap-1 mb-3">
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
    <p className="text-text-body leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
    <div className="border-t border-green-100 pt-3">
      <p className="font-semibold text-text-dark">{review.name}</p>
      <p className="text-sm text-text-muted">{review.location}</p>
    </div>
  </div>
);

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const track = trackRef.current;
      if (!track) return;

      const cards = track.querySelectorAll<HTMLDivElement>(".review-card");
      if (cards.length === 0) return;

      // Clone cards for infinite scroll
      cards.forEach((card) => {
        const clone = card.cloneNode(true) as HTMLDivElement;
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });

      const totalWidth = track.scrollWidth / 2;

      tweenRef.current = gsap.to(track, {
        x: -totalWidth,
        duration: 30,
        ease: "linear",
        repeat: -1,
      });

      // Pause on hover
      const handleEnter = () => tweenRef.current?.pause();
      const handleLeave = () => tweenRef.current?.play();

      track.addEventListener("mouseenter", handleEnter);
      track.addEventListener("mouseleave", handleLeave);
      track.addEventListener("touchstart", handleEnter, { passive: true });
      track.addEventListener("touchend", handleLeave);

      return () => {
        track.removeEventListener("mouseenter", handleEnter);
        track.removeEventListener("mouseleave", handleLeave);
        track.removeEventListener("touchstart", handleEnter);
        track.removeEventListener("touchend", handleLeave);
        tweenRef.current?.kill();
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="reviews" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
          What Our Customers Say
        </h2>
        <p className="mt-4 text-lg text-text-body max-w-2xl mx-auto">
          Trusted by over 1,000+ happy families across Chennai
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-stretch py-4"
          style={{ width: "max-content" }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
