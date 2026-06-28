"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const typeParam = params.get("type");
      if (typeParam === "affiliate") {
        setInquiryType("affiliate");
        setFormData(prev => ({ ...prev, subject: "Affiliate Support Request" }));
      } else if (typeParam === "developer") {
        setInquiryType("developer");
        setFormData(prev => ({ ...prev, subject: "Developer Support Request" }));
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          inquiryType: inquiryType
        })
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Check API configurations.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during submission.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col theme-bg">
      <Header />

      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col px-4 py-16 sm:px-6">
        <section className="rounded-3xl border theme-card p-6 sm:p-10 backdrop-blur shadow-sm ">
          <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent text-center mb-8 uppercase tracking-tight">
            Contact Us
          </h1>
          
          {submitted ? (
            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-6 text-center text-emerald-600 dark:text-emerald-400 font-semibold text-sm animate-in fade-in zoom-in-95 duration-300">
              🎉 Message sent successfully! Our support team will reply to your email address within 24-48 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-bold theme-text-secondary uppercase tracking-wide">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-xl border theme-card bg-background px-4 py-2.5 text-xs theme-text-primary outline-none focus:border-cyan-500/50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-bold theme-text-secondary uppercase tracking-wide">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl border theme-card bg-background px-4 py-2.5 text-xs theme-text-primary outline-none focus:border-cyan-500/50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="inquiryType" className="text-xs font-bold theme-text-secondary uppercase tracking-wide">Inquiry Type</label>
                <select
                  id="inquiryType"
                  value={inquiryType}
                  onChange={(e) => {
                    setInquiryType(e.target.value);
                    if (e.target.value === "affiliate") {
                      setFormData(prev => ({ ...prev, subject: "Affiliate Support Request" }));
                    } else if (e.target.value === "developer") {
                      setFormData(prev => ({ ...prev, subject: "Developer Support Request" }));
                    } else {
                      setFormData(prev => ({ ...prev, subject: "" }));
                    }
                  }}
                  className="rounded-xl border theme-card bg-background px-4 py-2.5 text-xs theme-text-primary outline-none focus:border-cyan-500/50"
                >
                  <option value="general">General Support</option>
                  <option value="affiliate">Affiliate Support</option>
                  <option value="developer">Developer Support</option>
                  <option value="bug">Report a Bug / Feedback</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-bold theme-text-secondary uppercase tracking-wide">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="rounded-xl border theme-card bg-background px-4 py-2.5 text-xs theme-text-primary outline-none focus:border-cyan-500/50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold theme-text-secondary uppercase tracking-wide">Message Details</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl border theme-card bg-background px-4 py-2.5 text-xs theme-text-primary outline-none focus:border-cyan-500/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-3 text-xs font-black shadow-md shadow-cyan-500/15 active:scale-95 transition-all select-none"
              >
                ✉ Send Message
              </button>
            </form>
          )}

          <div className="mt-8 text-center border-t border-card-border pt-6">
            <Link
              href="/"
              className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              &larr; Return to Home Page
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
