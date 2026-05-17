"use client";

import { useRef } from "react";

const reviews = [
  {
    name: "Rajesh K",
    location: "Tambaram, Chennai",
    text: "AKC Real Estate made my plot purchase seamless. The documentation was crystal clear and the team guided me through every step. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya M",
    location: "Medavakkam, Chennai",
    text: "I was worried about legal issues with plot buying, but AKC ensured everything was CMDA-approved. Got my dream plot at a great price.",
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
    text: "We bought two plots from AKC and both transactions were smooth. The team knows Chennai's market inside out. True professionals.",
    rating: 5,
  },
  {
    name: "Karthik S",
    location: "Pallavaram, Chennai",
    text: "As a first-time buyer, I had many questions. AKC's team patiently answered everything. My plot has already appreciated 20% in value!",
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
    text: "Professional, honest, and reliable. What sets AKC apart is their commitment to customer satisfaction even after the sale is complete.",
    rating: 5,
  },
  {
    name: "Meera J",
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
  <div className="flex-shrink-0 w-[340px] md:w-[380px] mx-3">
    <div className="bg-white rounded-2xl shadow-md border border-green-50 p-6 h-full hover:shadow-xl transition-shadow duration-300">
      <div className="flex gap-1 mb-3">
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
      <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base italic">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="border-t border-gray-100 pt-3">
        <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
        <p className="text-xs text-gray-500">{review.location}</p>
      </div>
    </div>
  </div>
);

export default function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-green-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from over 1,000+ happy families who trusted AKC Real Estate
            with their dream plots
          </p>
        </div>
      </div>

      {/* Scrolling Track Container */}
      <div className="relative group">
        <style>
          {`
            @keyframes scrollReviews {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .reviews-scroll {
              animation: scrollReviews 60s linear infinite;
            }
            .reviews-scroll:hover {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .reviews-scroll {
                animation: none;
              }
            }
          `}
        </style>

        <div ref={trackRef} className="flex reviews-scroll" style={{ width: "max-content" }}>
          {/* First set */}
          {reviews.map((review, i) => (
            <ReviewCard key={`a-${i}`} review={review} />
          ))}
          {/* Duplicate set for seamless loop */}
          {reviews.map((review, i) => (
            <ReviewCard key={`b-${i}`} review={review} />
          ))}
          {/* Third set for extra smoothness */}
          {reviews.map((review, i) => (
            <ReviewCard key={`c-${i}`} review={review} />
          ))}
          {/* Fourth set */}
          {reviews.map((review, i) => (
            <ReviewCard key={`d-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
