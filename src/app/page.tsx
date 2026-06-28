"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GAMES, getRandomGameSlug } from "@/data/gamesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const playRandomGame = () => {
    const slug = getRandomGameSlug();
    router.push(`/game/${slug}`);
  };

  const filteredGames = GAMES;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Dots Background overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.015] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent)] dark:bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent)]" />
      
      {/* Header */}
      <Header />

      {/* Main Container */}
      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <section className="mb-12 text-center max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Play Random Game Badge */}
          <button
            onClick={playRandomGame}
            type="button"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 dark:border-cyan-500/10 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 active:scale-95 transition-all select-none shadow-[0_0_15px_rgba(6,182,212,0.05)]"
          >
            🕹️ <span className="font-extrabold uppercase tracking-wide">VancedGames</span> • Play Random Game &rarr;
          </button>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
            Free online games for everyone
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
            <strong className="font-bold text-cyan-600 dark:text-cyan-400">VancedGames</strong> is your home for casual and arcade-style games. Pick a title, play instantly in your browser, and come back anytime for new additions.
          </p>

        </section>

       

        {/* Games Cards Grid */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-black text-slate-950 dark:text-white uppercase tracking-tight">
              Popular Titles
            </h2>
            <span className="text-xs text-slate-400 font-bold">{filteredGames.length} titles</span>
          </div>

          {filteredGames.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/20 p-12 text-center shadow-sm">
              <span className="text-4xl">🔍</span>
              <h3 className="mt-4 font-bold text-slate-700 dark:text-slate-300">No matching titles</h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Try expanding your search query or switching categories!</p>
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredGames.map((game) => (
                <Link
                  key={game.slug}
                  href={`/game/${game.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/40 hover:-translate-y-1 hover:border-cyan-500/30 dark:hover:border-cyan-500/20 hover:shadow-lg dark:hover:shadow-cyan-500/5 transition-all duration-300"
                >
                  {/* Thumbnail Wrapper */}
                  <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                    <Image
                      src={game.thumbnail}
                      alt={game.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={300}
                      height={300}
                    />
                  </div>

                  {/* Title details */}
                  <div className="p-3 border-t border-slate-100 dark:border-slate-900 flex-1 flex flex-col justify-between">
                    <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors uppercase truncate">
                      {game.title}
                    </h3>
                    <div className="mt-1 flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wide">
                      <span>★ {game.rating.toFixed(1)}</span>
                      <span className="text-cyan-600 dark:text-cyan-500 group-hover:translate-x-0.5 transition-transform">Play &rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
