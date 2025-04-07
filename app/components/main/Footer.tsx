"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen text-gray-200 px-6 sm:px-12 lg:px-24 py-16 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Contact Form */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-white">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-5 py-3 bg-transparent border border-[#7042f861] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-5 py-3 bg-transparent border border-[#7042f861] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full px-5 py-3 bg-transparent border border-[#7042f861] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-medium py-3 rounded-lg disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {submitStatus === "success" && (
              <p className="text-green-400 text-center mt-2">
                Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-400 text-center mt-2">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="space-y-8 pl-4">
          <h2 className="text-4xl font-semibold text-white">Connect With Me</h2>
          <div className="flex flex-col space-y-6 text-xl">
            <a
              href="https://github.com/TrupeshMandani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub className="text-3xl" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/trupeshmandani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-3xl" />
              LinkedIn
            </a>
            <a
              href="https://instagram.com/trupesh_16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 text-gray-300 hover:text-white transition-colors"
            >
              <FaInstagram className="text-3xl" />
              Instagram
            </a>
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-5 text-gray-300 hover:text-white transition-colors"
            >
              <FaEnvelope className="text-3xl" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
