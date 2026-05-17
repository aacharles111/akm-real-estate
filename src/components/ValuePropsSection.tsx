"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "CMDA Approved",
    description:
      "All our plots are CMDA-approved with clear documentation and legal clearance, ensuring a hassle-free purchase for your dream home.",
    icon: (
      <svg className="w-8 h-8 text-primary-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Best Rates",
    description:
      "Competitive pricing with flexible payment options. We offer the most value for your money in Chennai's real estate market.",
    icon: (
      <svg className="w-8 h-8 text-primary-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Secure & Legal",
    description:
      "Legally vetted plots with clear titles. Zero hidden charges and 100% transparent transactions for complete peace of mind.",
    icon: (
      <svg className="w-8 h-8 text-primary-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Prime Locations",
    description:
      "Well-connected areas close to IT hubs, schools, and hospitals. Build your home in Chennai's most promising neighborhoods.",
    icon: (
      <svg className="w-8 h-8 text-primary-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function ValuePropsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="value-props" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            Why Choose AKC Real Estate?
          </h2>
          <p className="mt-6 text-lg text-text-body max-w-4xl mx-auto leading-relaxed">
            At AKC Real Estate, we specialize in offering CMDA-approved plots at
            the most competitive rates in Chennai. Every plot we sell is legally
            vetted, properly maintained, and secured with clear titles — giving
            you complete peace of mind. Whether you are buying for your
            dream home or building long-term wealth, our plots are located in
            fast-appreciating corridors with excellent connectivity. With
            transparent transactions, zero hidden charges, and dedicated
            post-sale support, we ensure your journey to owning land is safe and
            rewarding. Secure your future on solid ground.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl shadow-lg border border-green-100 p-6 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-text-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
