"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 1500, suffix: "+", label: "Plots Sold" },
  { value: 1000, suffix: "+", label: "Happy Customers" },
  { value: 10, suffix: "+", label: "Ongoing Projects" },
];

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= value) {
              setDisplayValue(value);
              clearInterval(interval);
            } else {
              setDisplayValue(Math.floor(current));
            }
          }, duration / steps);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center p-6 md:p-8">
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 tracking-tight">
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-gray-600 font-semibold text-sm md:text-base tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

export default function AboutAKC() {
  return (
    <section id="about" className="py-20 md:py-28 bg-green-50/20 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
      <div className="absolute -left-16 bottom-0 w-80 h-80 bg-green-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-green-950 tracking-tight">
            About AKC Realestate
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-950 leading-snug">
              Creating Trusted Plotted Developments in Chennai Since 2017
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 7 years of excellence in Chennai&apos;s real estate
              market, AKC Realestate has established itself as a trusted name
              in plotted development. From Tambaram to New Manli, we have
              multiple projects spanning Chennai&apos;s most promising
              corridors. Whether you&apos;re looking for a plot near schools,
              IT hubs, or upcoming infrastructure projects — we have options in
              every prime location.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to quality, transparency, and customer
              satisfaction has made us the preferred choice for over 1,000+
              happy families. Every plot we sell comes with complete legal
              documentation, CMDA approvals, and post-sale support that continues long after
              registration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl border border-green-50/50 hover:scale-105 hover:border-green-200 transition-all duration-300 transform"
              >
                <AnimatedStat
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Locations Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-green-50/50 shadow-xl text-center"
        >
          <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-6">
            Locations Served
          </p>
          <div className="flex flex-wrap justify-center gap-y-4 gap-x-6 md:gap-x-12">
            {["Tambaram", "New Manli", "Medavakkam", "Chromepet", "Pallavaram", "OMR"].map(
              (loc, idx) => (
                <div key={loc} className="flex items-center gap-3">
                  {idx > 0 && <span className="text-green-300 hidden sm:inline">&bull;</span>}
                  <span className="text-lg md:text-xl font-bold text-green-950 hover:text-green-600 transition-colors cursor-default">
                    {loc}
                  </span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
