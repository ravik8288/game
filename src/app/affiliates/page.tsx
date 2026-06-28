"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Affiliates() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Affiliate Partner Candidate",
          email: email,
          subject: "Affiliate Program Application",
          message: "Partner request to join the VancedGames affiliates program.",
          inquiryType: "affiliate"
        })
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Affiliate registration failed.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during submission.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col theme-bg">
      <Header />

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 py-16 sm:px-6">
        <section className="rounded-3xl border theme-card p-6 sm:p-10 backdrop-blur shadow-sm text-center">
          <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent mb-4 uppercase tracking-tight">
            Affiliate Program
          </h1>
          <p className="text-xs theme-text-secondary mb-8 max-w-md mx-auto leading-relaxed">
            Partner with VancedGames and monetize your website traffic by distributing our lightweight casual HTML5 games collections.
          </p>
          
          <div className="grid gap-6 sm:grid-cols-2 text-left mb-8">
            <div className="rounded-2xl border theme-card p-5">
              <span className="text-xl">💰</span>
              <h3 className="font-bold theme-text-primary mt-2 text-sm">Revenue Share</h3>
              <p className="text-xs theme-text-secondary mt-1 leading-relaxed">
                Earn competitive revenue splits on ad impressions driven by users originating from your referral integrations.
              </p>
            </div>
            
            <div className="rounded-2xl border theme-card p-5">
              <span className="text-xl">🛠️</span>
              <h3 className="font-bold theme-text-primary mt-2 text-sm">Clean SDK &amp; API</h3>
              <p className="text-xs theme-text-secondary mt-1 leading-relaxed">
                Easily integrate our games feed using simple JSON feeds, embed codes, and customized brand wrappers.
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-6 text-center text-emerald-600 dark:text-emerald-400 font-semibold text-sm animate-in fade-in zoom-in-95 duration-300">
              🎉 Registration received! We will send the affiliate handbook and custom API details to your inbox shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your partner email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-xl border theme-card bg-background px-4 py-3 text-xs theme-text-primary outline-none focus:border-cyan-500/50"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 text-xs font-black shadow-md shadow-cyan-500/15 active:scale-95 transition-all select-none"
                >
                  Join Program
                </button>
              </div>
            </form>
          )}

          <div className="mt-8 text-center border-t border-card-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/contact?type=affiliate"
              className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              ✉ Need help? Contact Affiliate Support &rarr;
            </Link>
            <Link
              href="/"
              className="text-xs font-bold text-text-secondary hover:underline"
            >
              &larr; Return to Portal
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
