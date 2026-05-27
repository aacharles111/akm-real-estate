"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Lightbox from "./Lightbox";

interface ProjectSubGalleryProps {
  images: string[];
  projectTitle: string;
}

export default function ProjectSubGallery({
  images,
  projectTitle,
}: ProjectSubGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex((index + images.length) % images.length);
    },
    [images.length]
  );

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  const lightboxImages = images.map((src) => ({
    src,
    alt: `${projectTitle} - Gallery Image`,
  }));

  return (
    <>
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-green-950 tracking-tight mb-8">
          Project Gallery
        </h2>

        {/* Main Viewer */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[16/9] md:aspect-[21/9]">
          <Image
            src={images[currentIndex]}
            alt={`${projectTitle} - Image ${currentIndex + 1}`}
            fill
            className="object-cover cursor-pointer"
            onClick={() => setLightboxOpen(true)}
            sizes="(max-width: 768px) 100vw, 80vw"
          />

          {/* Nav Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-green-900 hover:bg-green-600 hover:text-white transition-all duration-200 shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
            aria-label="Previous image"
          >
            <HiChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-green-900 hover:bg-green-600 hover:text-white transition-all duration-200 shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
            aria-label="Next image"
          >
            <HiChevronRight size={22} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 snap-x">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`relative flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden snap-start transition-all duration-200 border-2 ${
                i === currentIndex
                  ? "border-green-500 ring-2 ring-green-500/30"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          current={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => goTo(currentIndex + 1)}
          onPrev={() => goTo(currentIndex - 1)}
        />
      )}
    </>
  );
}
