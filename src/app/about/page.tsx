"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col theme-bg">
      <Header />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
        <section className="rounded-3xl border theme-card p-6 sm:p-10 backdrop-blur shadow-sm">
          <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent text-center mb-8 uppercase tracking-tight">
            About VancedGames
          </h1>
          
          <div className="space-y-6 text-sm theme-text-secondary leading-relaxed">
            <p>
              Welcome to <strong className="theme-text-primary font-bold">VancedGames</strong>, your primary hub for direct-play casual browser games. We are committed to hosting high-quality HTML5 games that run instantly on desktop and mobile platforms without the need for downloads or installations.
            </p>
            
            <p>
              Our collection focuses on lightweight, high-performance arcade, reflex, skill, and puzzle games. Whether you want to beat your high score or relax during a quick break, we have a game for you.
            </p>
            
            <p>
              VancedGames is built for the web. We optimize our platform to deliver fast page loads, minimal data overhead, and maximum play time. Enjoy our collection and check back regularly as we introduce new titles!
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 text-slate-950 px-6 py-3 text-xs font-black shadow-md shadow-cyan-500/15 hover:bg-cyan-400 active:scale-95 transition-all"
            >
              🏠 Return Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
