"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "CMDA Approved",
    description:
      "All our plots are CMDA-approved with clear documentation and legal clearance, ensuring a hassle-free purchase for your dream home.",
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Best Rates",
    description:
      "Competitive pricing with flexible payment options. We offer the most value for your money in Chennai's real estate market.",
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Secure & Legal",
    description:
      "Legally vetted plots with clear titles. Zero hidden charges and 100% transparent transactions for complete peace of mind.",
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Prime Locations",
    description:
      "Well-connected areas close to IT hubs, schools, and hospitals. Build your home in Chennai's most promising neighborhoods.",
    icon: (
      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function ValuePropsSection() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="value-props" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative BG blob */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-50/50 rounded-full blur-3xl -translate-y-1/2 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-green-950 tracking-tight">
            Why Choose AKC Realestate?
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At AKC Realestate, we specialize in offering CMDA-approved plots at
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onMouseMove={handleMouseMove}
              className="glow-card bg-white rounded-2xl shadow-md hover:shadow-xl border border-green-50/50 p-8 flex flex-col items-center text-center transition-all duration-300 group cursor-default"
            >
              {/* Highlight Circle behind icon */}
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-green-950 mb-3 group-hover:text-green-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
