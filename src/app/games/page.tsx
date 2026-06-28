"use client";

import React, { useState } from "react";
import { GAME_URLS } from "@/data/quizData";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function Games() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEarnCoinsModalOpen, setIsEarnCoinsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100 selection:bg-indigo-600 selection:text-white">
      {/* Header */}
      <Header
        onMenuToggle={() => setIsSidebarOpen(true)}
        onEarnCoinsClick={() => setIsEarnCoinsModalOpen(true)}
      />

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onEarnCoinsClick={() => setIsEarnCoinsModalOpen(true)}
      />

      {/* Main Container */}
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Top Header details */}
        <section className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Hot Videos &amp; Games
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Watch trending videos, play mini-games, and claim rewarded points.
          </p>
        </section>

        {/* Ad block simulation */}
        <div className="mb-8 w-full overflow-hidden rounded-2xl border border-slate-900 bg-slate-900/30 p-4 text-center backdrop-blur-md">
          <div className="flex h-20 items-center justify-center border border-dashed border-indigo-500/20 rounded-xl bg-indigo-500/5 text-slate-400 text-xs">
            Google Ad Manager Display Banner
          </div>
          <div className="mt-1.5 text-[9px] uppercase tracking-wider text-slate-600 text-right">Advertisement</div>
        </div>

        {/* Video / Games Grid */}
        <section className="mb-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GAME_URLS.map((game, idx) => (
              <a
                key={game.id}
                href={game.playUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-slate-900 bg-slate-900/40 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  {/* Autoplay ad video loop */}
                  <video
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={game.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 group-hover:bg-slate-950/40 transition-all duration-300">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600/90 text-white text-lg shadow-lg group-hover:scale-110 active:scale-95 transition-all duration-300">
                      ▶
                    </span>
                  </div>

                  {/* Watch Button Tag */}
                  <div className="absolute bottom-4 right-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 px-4 py-1.5 text-xs font-bold text-slate-200">
                    Watch Video
                  </div>
                </div>

                {/* Card Title Details */}
                <div className="p-4 border-t border-slate-900">
                  <h3 className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                    {game.title}
                  </h3>
                  <span className="text-[10px] text-indigo-400 font-semibold mt-1 block uppercase tracking-wider">
                    Sponsored Game Url &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Content Section - Insurance & Lawyers Info */}
        <section className="mb-12 border-t border-slate-900 pt-12">
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Left Column: Insurance details */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-900 bg-slate-900/10 p-6">
                <h3 className="text-lg font-bold text-slate-200 border-b border-slate-900 pb-3 mb-4">
                  Best Insurance Companies in the World
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Allianz, AXA, Ping An Insurance, China Life Insurance, Berkshire Hathaway, MetLife, Prudential Financial, UnitedHealth Group, Zurich Insurance Group, Generali Group. These companies lead the global insurance market in terms of assets, coverage options, and claim payouts.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-900 bg-slate-900/10 p-6">
                <h3 className="text-lg font-bold text-slate-200 border-b border-slate-900 pb-3 mb-4">
                  Top Home Insurance Companies in USA
                </h3>
                <ul className="space-y-3.5 text-xs text-slate-400">
                  <li>
                    <strong className="text-slate-300 block text-sm">1. State Farm</strong>
                    Largest agent network across the US, A++ rating, excellent claim payouts.
                  </li>
                  <li>
                    <strong className="text-slate-300 block text-sm">2. Allstate</strong>
                    Best for customizable add-on coverages like smart home protection.
                  </li>
                  <li>
                    <strong className="text-slate-300 block text-sm">3. Lemonade</strong>
                    AI-driven digital homeowners insurance for lightning-fast quotes.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Lawyers info */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-900 bg-slate-900/10 p-6">
                <h3 className="text-lg font-bold text-slate-200 border-b border-slate-900 pb-3 mb-4">
                  Types of Lawyers in demand 2025
                </h3>
                <ul className="grid gap-3 text-xs text-slate-400 sm:grid-cols-2">
                  <li className="bg-slate-950/40 p-2.5 rounded-xl border border-slate-900">
                    <span className="font-bold text-indigo-400 block text-xs mb-1">Corporate Lawyers</span>
                    Handle mergers, compliance, and IP.
                  </li>
                  <li className="bg-slate-950/40 p-2.5 rounded-xl border border-slate-900">
                    <span className="font-bold text-indigo-400 block text-xs mb-1">Intellectual Property</span>
                    Protect patents and trademarks.
                  </li>
                  <li className="bg-slate-950/40 p-2.5 rounded-xl border border-slate-900">
                    <span className="font-bold text-indigo-400 block text-xs mb-1">Environmental Law</span>
                    Advocate for conservation policies.
                  </li>
                  <li className="bg-slate-950/40 p-2.5 rounded-xl border border-slate-900">
                    <span className="font-bold text-indigo-400 block text-xs mb-1">Human Rights Law</span>
                    Defend liberties and global justice.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-900 bg-slate-900/10 p-6">
                <h3 className="text-lg font-bold text-slate-200 border-b border-slate-900 pb-3 mb-4">
                  Top 3 Lawyers globally
                </h3>
                <ul className="space-y-3.5 text-xs text-slate-400">
                  <li>
                    <strong className="text-slate-300 block text-sm">Amal Clooney</strong>
                    Distinguished British-Lebanese human rights lawyer advocating globally.
                  </li>
                  <li>
                    <strong className="text-slate-300 block text-sm">Harish Salve</strong>
                    Top Indian counsel specializing in international arbitration.
                  </li>
                  <li>
                    <strong className="text-slate-300 block text-sm">Alan Dershowitz</strong>
                    Constitutional law expert representing high-profile cases.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
