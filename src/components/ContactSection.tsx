"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSubmitted(true);
      setFormState({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      {/* Subtle bottom section border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-green-950 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to secure your CMDA-approved plot? Build your future home on Chennai&apos;s solid ground. Reach out to us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8 bg-green-50/30 border border-green-50/50 p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-green-950 mb-6">
                Our Office Location
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-green-600/25">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-green-950 text-base">Phone Number</h4>
                  <a
                    href="tel:+919941318518"
                    className="text-green-700 hover:text-green-500 font-medium transition-colors mt-1 block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded"
                    aria-label="Call AKC Realestate at +91 99413 18518"
                  >
                    +91 99413 18518
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-green-600/25">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-green-950 text-base">Email Address</h4>
                  <a
                    href="mailto:kalaanitas@gmail.com"
                    className="text-green-700 hover:text-green-500 font-medium transition-colors mt-1 block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded"
                    aria-label="Email AKC Realestate at kalaanitas@gmail.com"
                  >
                    kalaanitas@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-green-600/25">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-green-950 text-base">Headquarters</h4>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    No:4032, PA Avenue, Redhills Road, Kolathur, Chennai, 600099
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map iframe */}
            <div className="mt-8 rounded-3xl overflow-hidden shadow-lg border border-green-50/50 flex-1 min-h-[300px] relative">
              <iframe
                title="AKC Realestate Kolathur Office"
                src="https://maps.google.com/maps?q=12.9249,80.1000&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-green-50/20 rounded-3xl p-8 md:p-10 border border-green-50/50 shadow-xl flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-2xl font-bold text-green-950 mb-6">
                  Send us a Message
                </h3>

                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-green-950 mb-2 uppercase tracking-wide"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-green-200/60 bg-white text-green-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 shadow-sm"
                      placeholder="e.g. Adithya Verma"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-green-950 mb-2 uppercase tracking-wide"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-green-200/60 bg-white text-green-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 shadow-sm"
                      placeholder="e.g. +91 99413 18518"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-green-950 mb-2 uppercase tracking-wide"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-2xl border border-green-200/60 bg-white text-green-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 shadow-sm"
                      placeholder="e.g. adithya@example.com"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-green-950 mb-2 uppercase tracking-wide"
                    >
                      Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-4 rounded-2xl border border-green-200/60 bg-white text-green-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 shadow-sm resize-none"
                      placeholder="Describe what kind of plot sizes, budget or location you are interested in..."
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 relative">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 text-lg font-bold text-white bg-green-600 rounded-full hover:bg-green-700 disabled:bg-green-400 transition-colors duration-200 shadow-lg shadow-green-600/20 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <FiSend size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-16 left-0 right-0 p-3 bg-green-100 text-green-800 rounded-2xl text-center font-bold shadow-md border border-green-200/50"
                  >
                    Thank you! We have received your query and will contact you shortly.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
