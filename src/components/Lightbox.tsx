"use client";

import { useEffect, useCallback } from "react";
import { HiXMark, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

interface GalleryImage {
  src: string;
  alt: string;
  isVideo?: boolean;
  videoUrl?: string;
}

interface LightboxProps {
  images: GalleryImage[];
  current: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  current,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const item = images[current];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Media Lightbox"
    >
      {/* Top Bar (Close and Count) */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-gradient-to-b from-black/50 to-transparent">
        <div className="text-white/80 text-sm font-semibold tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
          {current + 1} / {images.length}
        </div>
        <button
          onClick={onClose}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-green-600 hover:scale-105 transition-all duration-200 border border-white/10 shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
          aria-label="Close Lightbox"
        >
          <HiXMark size={24} />
        </button>
      </div>

      {/* Navigation Buttons (Floating desktop) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 z-50 w-14 h-14 hidden md:flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-green-600 hover:scale-105 transition-all duration-200 border border-white/10 shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
        aria-label="Previous Media"
      >
        <HiChevronLeft size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 z-50 w-14 h-14 hidden md:flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-green-600 hover:scale-105 transition-all duration-200 border border-white/10 shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
        aria-label="Next Media"
      >
        <HiChevronRight size={28} />
      </button>

      {/* Content Area */}
      <div
        className="max-w-[92vw] max-h-[80vh] flex items-center justify-center relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {item.isVideo && item.videoUrl ? (
          <video
            src={item.videoUrl}
            controls
            autoPlay
            loop
            playsInline
            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl border border-white/10 bg-black"
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
          />
        )}
      </div>

      {/* Bottom Bar Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center z-50 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
        <p className="text-white text-base md:text-lg font-medium tracking-wide text-center max-w-2xl bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/5 pointer-events-auto">
          {item.alt}
        </p>
        
        {/* Mobile-only Swipe/Tap helper */}
        <div className="flex md:hidden items-center gap-6 mt-4 pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-green-600 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 rounded-full"
          >
            <HiChevronLeft size={20} />
          </button>
          <span className="text-white/60 text-xs tracking-widest uppercase">Swipe / Tap</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-green-600 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 rounded-full"
          >
            <HiChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
