"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Developer() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gameTitle: "",
    gameLink: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 py-16 sm:px-6">
        <section className="rounded-3xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/40 p-6 sm:p-10 backdrop-blur shadow-sm">
          <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent text-center mb-4 uppercase tracking-tight">
            Developer Submission
          </h1>
          <p className="text-center text-xs text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
            Are you a game developer? Publish your HTML5 game on VancedGames and reach thousands of players worldwide daily.
          </p>
          
          {submitted ? (
            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-6 text-center text-emerald-600 dark:text-emerald-400 font-semibold text-sm animate-in fade-in zoom-in-95 duration-300">
              🎉 Thank you for your submission! Our review team will inspect your game details and contact you via email soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Developer/Studio Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-2.5 text-xs text-slate-800 dark:text-slate-100 outline-none focus:border-cyan-500/50"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Contact Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-2.5 text-xs text-slate-800 dark:text-slate-100 outline-none focus:border-cyan-500/50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="gameTitle" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Game Title</label>
                <input
                  id="gameTitle"
                  type="text"
                  required
                  value={formData.gameTitle}
                  onChange={(e) => setFormData({ ...formData, gameTitle: e.target.value })}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-2.5 text-xs text-slate-800 dark:text-slate-100 outline-none focus:border-cyan-500/50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="gameLink" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Game Demo / Build Link</label>
                <input
                  id="gameLink"
                  type="url"
                  placeholder="https://example.com/demo"
                  required
                  value={formData.gameLink}
                  onChange={(e) => setFormData({ ...formData, gameLink: e.target.value })}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-2.5 text-xs text-slate-800 dark:text-slate-100 outline-none focus:border-cyan-500/50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="description" className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Short Description &amp; Instructions</label>
                <textarea
                  id="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-4 py-2.5 text-xs text-slate-800 dark:text-slate-100 outline-none focus:border-cyan-500/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-3 text-xs font-black shadow-md shadow-cyan-500/15 active:scale-95 transition-all select-none"
              >
                🚀 Submit Game
              </button>
            </form>
          )}

          <div className="mt-8 text-center border-t border-slate-100 dark:border-slate-900 pt-6">
            <Link
              href="/"
              className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              &larr; Back to Games Directory
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
