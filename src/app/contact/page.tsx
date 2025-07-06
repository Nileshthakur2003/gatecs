"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen relative bg-white dark:bg-[#121212] font-[family-name:var(--font-geist-sans)]">
      {/* Home Button */}
      <button
        onClick={handleHomeClick}
        className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
      >
        ← Home
      </button>

      {/* Centered Form */}
      <div className="flex items-center justify-center h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">Contact Us</h2>
            <p className="mt-2 text-sm text-gray-500">
              Have questions or feedback? We&rsquo;d love to hear from you.
            </p>
          </div>

          {submitted ? (
            <div className="text-center text-green-600 font-medium">
              ✅ Thank you, {form.name}! We&rsquo;ll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
              />
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}