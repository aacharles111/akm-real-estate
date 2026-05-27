"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiXMark } from "react-icons/hi2";
import { FiSend } from "react-icons/fi";

interface QuickEnquiryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
}

export default function QuickEnquiryDialog({
  isOpen,
  onClose,
  projectName,
}: QuickEnquiryDialogProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          message: `Project: ${projectName}\n\n${message}`,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setSubmitted(true);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Quick Enquiry"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-green-50">
              <h3 className="text-xl font-bold text-green-950">
                Quick Enquiry
              </h3>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-green-50 text-gray-500 hover:text-green-700 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                aria-label="Close enquiry dialog"
              >
                <HiXMark size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label
                  htmlFor="enq-name"
                  className="block text-sm font-bold text-green-950 mb-1.5 uppercase tracking-wide"
                >
                  Name *
                </label>
                <input
                  id="enq-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-green-200/60 bg-white text-green-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="enq-email"
                  className="block text-sm font-bold text-green-950 mb-1.5 uppercase tracking-wide"
                >
                  Email *
                </label>
                <input
                  id="enq-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-green-200/60 bg-white text-green-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="enq-phone"
                  className="block text-sm font-bold text-green-950 mb-1.5 uppercase tracking-wide"
                >
                  Mobile Number *
                </label>
                <input
                  id="enq-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 rounded-xl border border-green-200/60 bg-white text-green-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="enq-project"
                  className="block text-sm font-bold text-green-950 mb-1.5 uppercase tracking-wide"
                >
                  Project
                </label>
                <input
                  id="enq-project"
                  type="text"
                  value={projectName}
                  disabled
                  className="w-full px-4 py-3 rounded-xl border border-green-100 bg-green-50/50 text-green-800 font-medium cursor-not-allowed"
                />
              </div>

              <div>
                <label
                  htmlFor="enq-message"
                  className="block text-sm font-bold text-green-950 mb-1.5 uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="enq-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Any specific requirements?"
                  className="w-full px-4 py-3 rounded-xl border border-green-200/60 bg-white text-green-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to be contacted for project information
                and updates.
              </p>

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
                    Submit
                  </>
                )}
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-100 text-green-800 rounded-xl text-center font-bold text-sm border border-green-200/50"
                >
                  Thank you! We will contact you shortly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
