"use client";

import { useState } from "react";
import { FiMail, FiCheck } from "react-icons/fi";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-navy to-teal text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Ahead of Flash Sales!</h2>
          <p className="text-white/90 mb-8 text-lg">
            Subscribe to our newsletter for exclusive deals, new arrivals, and insider tips.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 rounded-md text-darkText font-medium focus:outline-none focus:ring-2 focus:ring-orange"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-orange hover:bg-[#e49300] text-navy font-bold rounded-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {submitted ? (
                <>
                  <FiCheck size={20} />
                  Subscribed!
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>

          <p className="text-white/70 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}