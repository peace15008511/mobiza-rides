"use client";

import { useState } from "react";

export default function EnquireWithUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="enquire"
      className="py-20 border-t border-[#D3CEC4] w-full bg-[#FDFCFB]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-[#C8102E]">Enquire</span> With Us
          </h2>
          <p className="text-gray-700 mb-6 max-w-md">
            Want to know more about our rental packages, fleet options, or
            partnership opportunities? Drop us a message — our team will respond
            within 24 hours.
          </p>
          <ul className="text-gray-800 space-y-2 text-sm">
            <li>
              <strong>Email:</strong> info@mobizarides.com
            </li>
            <li>
              <strong>WhatsApp:</strong> +27 71 234 5678
            </li>
            <li>
              <strong>Operating Hours:</strong> Mon – Fri, 9AM – 5PM
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#2C2F33] mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#D3CEC4] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#2C2F33] mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#D3CEC4] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-[#2C2F33] mb-1"
            >
              Your Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#D3CEC4] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#2C2F33] mb-1"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#D3CEC4] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-black via-[#440000] to-[#C8102E] text-white py-3 rounded-md text-sm font-semibold transition hover:brightness-110"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
