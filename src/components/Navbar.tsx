"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHomePage);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Intersection Observer for scroll spy active section highlight (homepage only)
  useEffect(() => {
    if (!isHomePage) return;

    const observers = navLinks
      .filter((link) => link.href.startsWith("#"))
      .map((link) => {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return null;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          {
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0.1,
          }
        );
        observer.observe(el);
        return { observer, el };
      });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.disconnect();
      });
    };
  }, [isHomePage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) return; // let the browser navigate to /#section
    e.preventDefault();
    setMobileOpen(false);
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-lg border-b border-green-100/30 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400 rounded-lg"
          >
            <span
              className={`font-extrabold text-2xl tracking-tight transition-colors duration-200 ${
                scrolled ? "text-green-800" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
              }`}
            >
              AKC
            </span>
            <span
              className={`hidden sm:block w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                scrolled ? "bg-green-500" : "bg-green-400 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
              }`}
            />
            <span
              className={`hidden sm:block text-lg font-light tracking-[0.15em] transition-colors duration-200 ${
                scrolled ? "text-green-700" : "text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
              }`}
            >
              Realestate
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isHashLink = link.href.startsWith("#");
              const sectionId = isHashLink ? link.href.replace("#", "") : "";
              const isActive = isHashLink
                ? isHomePage && activeSection === sectionId
                : pathname.startsWith(link.href);

              const linkClasses = `relative py-1 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded ${
                isActive
                  ? "text-green-700"
                  : scrolled
                  ? "text-gray-600 hover:text-green-700"
                  : "text-white/85 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
              }`;

              if (!isHashLink) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={linkClasses}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-green-700"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              }

              return (
                <a
                  key={link.name}
                  href={isHomePage ? link.href : `/${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={linkClasses}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        scrolled ? "bg-green-700" : "bg-green-400"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-xl transition-all duration-200 border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 ${
              scrolled
                ? "text-gray-700 hover:bg-green-50 border-green-100"
                : "text-white hover:bg-white/10 border-white/20"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-b border-green-50 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => {
                const isHashLink = link.href.startsWith("#");
                const sectionId = isHashLink ? link.href.replace("#", "") : "";
                const isActive = isHashLink
                  ? isHomePage && activeSection === sectionId
                  : pathname.startsWith(link.href);

                if (!isHashLink) {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-3 px-4 rounded-xl text-base font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 ${
                        isActive
                          ? "bg-green-50 text-green-800 border-l-4 border-green-600"
                          : "text-gray-600 hover:bg-gray-50 hover:text-green-700"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={isHomePage ? link.href : `/${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block py-3 px-4 rounded-xl text-base font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 ${
                      isActive
                        ? "bg-green-50 text-green-800 border-l-4 border-green-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-green-700"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
