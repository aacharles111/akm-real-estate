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
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-primary-mid">
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-text-body font-medium">{label}</div>
    </div>
  );
}

export default function AboutAKC() {
  return (
    <section id="about" className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            About AKC Real Estate
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-lg text-text-body leading-relaxed">
              With over 7 years of excellence in Chennai&apos;s real estate
              market, AKC Real Estate has established itself as a trusted name
              in plotted development. From Tambaram to New Manli, we have
              multiple projects spanning Chennai&apos;s most promising
              corridors. Whether you&apos;re looking for a plot near schools,
              IT hubs, or upcoming infrastructure projects — we have options in
              every prime location.
            </p>
            <p className="text-lg text-text-body leading-relaxed mt-4">
              Our commitment to quality, transparency, and customer
              satisfaction has made us the preferred choice for over 1,000+
              happy families. Every plot we sell comes with complete legal
              documentation and post-sale support that continues long after
              registration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl shadow-lg border border-green-100"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-sm font-medium text-text-muted uppercase tracking-wider">
            Locations Served
          </p>
          <p className="mt-3 text-lg md:text-xl text-text-dark font-medium">
            Tambaram &bull; New Manli &bull; Medavakkam &bull; Chromepet
            &bull; Pallavaram &bull; OMR
          </p>
        </motion.div>
      </div>
    </section>
  );
}
