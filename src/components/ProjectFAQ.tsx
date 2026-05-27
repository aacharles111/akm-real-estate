"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";
import { FAQ } from "@/types";

export default function ProjectFAQ({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section>
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-4 py-2 rounded-full">
          Quick Help
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-green-950 tracking-tight mt-4">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about buying, documentation, and site
          visits. Can&apos;t find your answer? We are here to help.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white border border-green-100 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-green-950 hover:bg-green-50/50 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              aria-expanded={openIndex === i}
            >
              <span className="text-base md:text-lg">{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 text-green-600"
              >
                <HiChevronDown className="w-5 h-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
