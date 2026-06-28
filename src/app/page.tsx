"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GAMES, Game, getRandomGameSlug } from "@/data/gamesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLocalhost, setIsLocalhost] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLocalhost(
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
      );
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  const playRandomGame = () => {
    const slug = getRandomGameSlug();
    const game = GAMES.find((g) => g.slug === slug);
    if (game) {
      setSelectedGame(game);
      setIframeLoading(true);
    }
  };

  const filteredGames = GAMES;

  return (
    <div className="flex min-h-screen flex-col theme-bg">
      
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight theme-text-primary leading-[1.15]">
            Free online games for everyone
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base theme-text-secondary leading-relaxed max-w-xl">
            <strong className="font-bold text-cyan-600 dark:text-cyan-400">VancedGames</strong> is your home for casual and arcade-style games. Pick a title, play instantly in your browser, and come back anytime for new additions.
          </p>

        </section>

        {/* Games Cards Grid */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-black theme-text-primary uppercase tracking-tight">
              Popular Titles
            </h2>
            <span className="text-xs theme-text-secondary font-bold">{filteredGames.length} titles</span>
          </div>

          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredGames.map((game) => (
              <button
                key={game.slug}
                onClick={() => {
                  setSelectedGame(game);
                  setIframeLoading(true);
                }}
                className="group relative flex flex-col text-left overflow-hidden rounded-2xl border theme-card hover:-translate-y-1 hover:border-cyan-500/30 dark:hover:border-cyan-500/20 hover:shadow-lg dark:hover:shadow-cyan-500/5 transition-all duration-300 cursor-pointer"
              >
                {/* Thumbnail Wrapper */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <Image
                    src={game.thumbnail}
                    alt={game.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Title details */}
                <div className="p-3 border-t theme-card flex-1 flex flex-col justify-between">
                  <h3 className="text-xs font-bold theme-text-primary group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors uppercase truncate">
                    {game.title}
                  </h3>
                  <div className="mt-1 flex items-center justify-between text-[9px] font-bold theme-text-secondary uppercase tracking-wide">
                    <span>★ {game.rating.toFixed(1)}</span>
                    <span className="text-cyan-600 dark:text-cyan-500 group-hover:translate-x-0.5 transition-transform">Play &rarr;</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

      </main>

      {/* Modal Popup Game Player (Play in Same Page) */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-all duration-300">
          <div className="relative w-full max-w-4xl rounded-3xl theme-card overflow-hidden shadow-2xl flex flex-col md:flex-row aspect-video md:aspect-[21/9] border border-slate-200/20 dark:border-slate-800/40 animate-in fade-in zoom-in-95 duration-300">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedGame(null)}
              type="button"
              className="absolute top-4 right-4 z-30 rounded-full bg-slate-900/80 p-2.5 text-slate-400 hover:text-white active:scale-90 transition-all cursor-pointer"
            >
              ✕
            </button>

            {/* Left Hand: Iframe player side */}
            <div className="relative flex-1 bg-black flex flex-col justify-center items-center">
              <div
                ref={containerRef}
                className="relative w-full h-full"
              >
                {iframeLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 z-20 text-slate-200">
                    <div className="h-8 w-8 rounded-full border-4 border-cyan-500/20 border-t-cyan-500 animate-spin" />
                    <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-cyan-400">Loading game assets...</span>
                    <a
                      href={selectedGame.playUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-[8px] font-bold text-slate-400 hover:text-white hover:border-slate-500 transition-all"
                    >
                      ↗ Play in New Tab
                    </a>
                  </div>
                )}

                <iframe
                  src={selectedGame.playUrl}
                  title={selectedGame.title}
                  onLoad={() => setIframeLoading(false)}
                  className={`h-full w-full border-none transition-opacity duration-500 ${iframeLoading ? "opacity-0" : "opacity-100"}`}
                  allowFullScreen
                  scrolling="no"
                  sandbox={isLocalhost ? undefined : "allow-scripts allow-same-origin allow-pointer-lock allow-forms"}
                />

                {/* Controls overlay */}
                <div className="absolute bottom-4 right-4 flex gap-2 z-30">
                  <button
                    onClick={toggleFullscreen}
                    type="button"
                    className="rounded-xl bg-slate-900/80 backdrop-blur-sm border border-slate-700 px-3 py-1.5 text-[8px] font-bold text-slate-300 hover:text-white active:scale-95 transition-all cursor-pointer"
                  >
                    {isFullscreen ? "🗖 Exit Fullscreen" : "📺 Fullscreen"}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Hand: Game details sidebar */}
            <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-slate-200/20 dark:border-slate-800/40 p-6 flex flex-col justify-between overflow-y-auto select-none bg-slate-50 dark:bg-slate-950/20">
              <div>
                <span className="text-[9px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">Instant Play</span>
                <h2 className="text-lg font-black theme-text-primary mt-1 uppercase tracking-tight truncate">
                  {selectedGame.title}
                </h2>
                <div className="mt-1 flex items-center gap-1.5 text-[10px] font-semibold theme-text-secondary">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">★ {selectedGame.rating.toFixed(1)}</span>
                  <span>•</span>
                  <span>({selectedGame.reviews} reviews)</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-1">
                  {selectedGame.categories.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-slate-500/5 px-2 py-0.5 text-[8px] font-bold theme-text-secondary uppercase tracking-wide"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-2 text-[10px] theme-text-secondary leading-relaxed list-disc pl-3">
                  {selectedGame.description.slice(0, 3).map((desc, idx) => (
                    <li key={idx} className="marker:text-cyan-500">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/20 dark:border-slate-800/40 text-center">
                <button
                  onClick={() => setSelectedGame(null)}
                  type="button"
                  className="w-full rounded-xl bg-slate-900/10 dark:bg-slate-800/20 hover:bg-slate-900/20 dark:hover:bg-slate-800/35 theme-text-primary py-2 text-[10px] font-black transition-all cursor-pointer"
                >
                  ⏹ Close Game
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
