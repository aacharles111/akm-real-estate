"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-text-body max-w-2xl mx-auto">
            Ready to invest in your dream plot? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark">Phone</h3>
                  <a
                    href="tel:+919876543210"
                    className="text-primary-mid hover:text-cta-hover transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark">Email</h3>
                  <a
                    href="mailto:info@akcrealestate.com"
                    className="text-primary-mid hover:text-cta-hover transition-colors"
                  >
                    info@akcrealestate.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark">Address</h3>
                  <p className="text-text-body">
                    123, Main Road, Tambaram, Chennai - 600045
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps iframe */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-green-100">
              <iframe
                title="AKC Real Estate Location"
                src="https://maps.google.com/maps?q=12.9249,80.1000&z=14&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-bg-light rounded-2xl p-8 shadow-lg border border-green-100"
            >
              <h3 className="text-xl font-semibold text-text-dark mb-6">
                Send us a Message
              </h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-dark mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-green-200 bg-white text-text-dark placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-mid focus:border-transparent transition-shadow"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-text-dark mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-green-200 bg-white text-text-dark placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-mid focus:border-transparent transition-shadow"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-dark mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-green-200 bg-white text-text-dark placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-mid focus:border-transparent transition-shadow"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-dark mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-green-200 bg-white text-text-dark placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-mid focus:border-transparent transition-shadow resize-none"
                    placeholder="Tell us about your requirements"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 text-lg font-semibold text-white bg-primary-mid rounded-full hover:bg-cta-hover transition-colors duration-300 shadow-lg shadow-green-200"
                >
                  Send Message
                </button>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-100 text-primary-mid rounded-xl text-center font-medium"
                >
                  Thank you! We&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
