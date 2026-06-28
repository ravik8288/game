"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { GAMES, Game } from "@/data/gamesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GameDetails() {
  const { slug } = useParams();
  const router = useRouter();
  const [game, setGame] = useState<Game | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (slug) {
      const found = GAMES.find((g) => g.slug === slug);
      if (found) {
        setGame(found);
      } else {
        setGame(null);
      }
    }
  }, [slug]);

  if (game === null) {
    return (
      <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <Header />
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 py-24 text-center">
          <span className="text-5xl">🎮</span>
          <h2 className="mt-4 text-2xl font-black text-slate-950 dark:text-white uppercase tracking-tight">Game Not Found</h2>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">The requested game could not be found in our directory.</p>
          <Link href="/" className="mt-6 rounded-xl bg-cyan-500 text-slate-950 px-6 py-2.5 text-xs font-black shadow-md shadow-cyan-500/15 hover:bg-cyan-400 active:scale-95 transition-all">
            🏠 Go Back Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Find other recommended games
  const recommendedGames = GAMES.filter((g) => g.slug !== game.slug).slice(0, 4);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Background overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.015] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent)] dark:bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent)]" />
      
      {/* Header */}
      <Header />

      {/* Main Play / Info Container */}
      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Ad block simulation top */}
        <div className="mb-6 w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/20 p-4 text-center shadow-sm">
          <div className="flex h-16 items-center justify-center border border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-950/20 text-slate-400 text-xs">
            Google Ad Manager Display Banner
          </div>
          <div className="mt-1 text-[8px] uppercase tracking-wider text-slate-400 dark:text-slate-600 text-right font-semibold">Advertisement</div>
        </div>

        {/* Dynamic Play Window or Game Details */}
        <section className="grid gap-8 lg:grid-cols-12 mb-12">
          
          {/* Main Visual Frame (Iframe player or Game Poster) */}
          <div className="lg:col-span-8 flex flex-col">
            {isPlaying ? (
              <div className="relative w-full aspect-video rounded-3xl border border-slate-200 dark:border-slate-800 bg-black overflow-hidden shadow-2xl">
                <iframe
                  src={game.playUrl}
                  title={game.title}
                  className="h-full w-full border-none"
                  allowFullScreen
                  scrolling="no"
                />
                
                {/* Embedded controls overlay */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setIsPlaying(false)}
                    type="button"
                    className="rounded-xl bg-slate-900/80 backdrop-blur-sm border border-slate-700 px-3 py-1.5 text-[10px] font-bold text-slate-300 hover:text-white"
                  >
                    ⏹ Stop Playing
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative w-full aspect-video rounded-3xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/40 p-6 flex flex-col justify-center items-center overflow-hidden shadow-sm">
                {/* Background image blur */}
                <img
                  src={game.thumbnail}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover blur-2xl opacity-20 dark:opacity-10 scale-110 pointer-events-none"
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-2xl border border-slate-200 dark:border-slate-855 overflow-hidden shadow-md">
                    <img src={game.thumbnail} alt={game.title} className="h-full w-full object-cover" />
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white mt-4 uppercase tracking-tight">
                    {game.title}
                  </h1>

                  <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">★ {game.rating.toFixed(1)} / 10</span>
                    <span>•</span>
                    <span>({game.reviews} reviews)</span>
                  </div>

                  {/* Play Action Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 text-xs font-black shadow-lg shadow-cyan-500/20 active:scale-95 transition-all select-none"
                  >
                    ▶ PLAY NOW
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar details (Description, reviews, categorization) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">About Game</span>
            <h2 className="text-xl font-black text-slate-950 dark:text-white mt-1 uppercase tracking-tight">Game Description</h2>
            
            {/* Badges / Genres */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {game.categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-slate-200/50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 px-3 py-1 text-[9px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Description items list */}
            <ul className="mt-6 space-y-3.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed list-disc pl-4.5">
              {game.description.map((desc, idx) => (
                <li key={idx} className="marker:text-cyan-500">
                  {desc}
                </li>
              ))}
            </ul>
          </div>

        </section>

        {/* Ad block simulation middle */}
        <div className="mb-12 w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/20 p-4 text-center shadow-sm">
          <div className="flex h-16 items-center justify-center border border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-950/20 text-slate-400 text-xs">
            Google AdSense Responsive Unit
          </div>
          <div className="mt-1 text-[8px] uppercase tracking-wider text-slate-400 dark:text-slate-600 text-right font-semibold">Advertisement</div>
        </div>

        {/* More Games Recommendation Grid */}
        <section className="border-t border-slate-200/50 dark:border-slate-900 pt-8 mb-12">
          <h2 className="text-lg font-black text-slate-950 dark:text-white uppercase tracking-tight mb-6">More Games to Play</h2>
          
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-4">
            {recommendedGames.map((rec) => (
              <Link
                key={rec.slug}
                href={`/game/${rec.slug}`}
                onClick={() => setIsPlaying(false)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900/40 hover:-translate-y-1 hover:border-cyan-500/30 dark:hover:border-cyan-500/20 hover:shadow-lg dark:hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <img
                    src={rec.thumbnail}
                    alt={rec.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 border-t border-slate-100 dark:border-slate-900 flex-1 flex flex-col justify-between">
                  <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors uppercase truncate">
                    {rec.title}
                  </h3>
                  <div className="mt-1 flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wide">
                    <span>★ {rec.rating.toFixed(1)}</span>
                    <span className="text-cyan-600 dark:text-cyan-500 group-hover:translate-x-0.5 transition-transform">Play &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
