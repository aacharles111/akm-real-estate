"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { HiChevronUp } from "react-icons/hi2";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -80; // offset for sticky header height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-green-950 text-white relative">
      {/* Dynamic top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="inline-flex items-baseline gap-2 group"
            >
              <span className="text-2xl font-extrabold tracking-tight text-white">
                AKC
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-lg font-light tracking-[0.15em] text-green-300">
                Realestate
              </span>
            </a>
            <p className="text-green-100/75 leading-relaxed max-w-md text-base">
              Your trusted partner for CMDA-approved plots in Chennai. Over 7
              years of excellence, 1,500+ plots sold, and 1,000+ happy
              families building their futures on solid ground.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold tracking-wider uppercase text-green-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Gallery", "Reviews", "Contact"].map((item) => {
                if (item === "Projects") {
                  return (
                    <li key={item}>
                      <Link
                        href="/projects"
                        className="text-green-100/75 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-medium text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 rounded"
                      >
                        {item}
                      </Link>
                    </li>
                  );
                }
                const id = item.toLowerCase();
                return (
                  <li key={item}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => handleLinkClick(e, `#${id}`)}
                      className="text-green-100/75 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-medium text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 rounded"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services Offered */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold tracking-wider uppercase text-green-400">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Plot Sales",
                "CMDA Approved Plots",
                "Investment Advisory",
                "Site Visits & Transport",
              ].map((service) => (
                <li key={service} className="text-green-100/75 text-base font-medium">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-16 pt-8 border-t border-green-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Links with hover scale animations */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-900/40 text-green-200 hover:bg-green-600 hover:text-white hover:scale-110 border border-green-800/50 hover:border-green-500/30 transition-all duration-200 shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-900/40 text-green-200 hover:bg-green-600 hover:text-white hover:scale-110 border border-green-800/50 hover:border-green-500/30 transition-all duration-200 shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
            >
              <FaXTwitter size={16} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-900/40 text-green-200 hover:bg-green-600 hover:text-white hover:scale-110 border border-green-800/50 hover:border-green-500/30 transition-all duration-200 shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
            >
              <FaInstagram size={16} />
            </a>
          </div>

          <p className="text-green-300/60 text-sm font-medium">
            &copy; {currentYear} AKC Realestate. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 hover:scale-110 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <HiChevronUp size={24} />
      </button>
    </footer>
  );
}
