"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { GAMES, Game } from "@/data/gamesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function GameDetails() {
  const { slug } = useParams();
  const router = useRouter();
  const [game, setGame] = useState<Game | null>(null);

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
      <div className="flex min-h-screen flex-col theme-bg">
        <Header />
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 py-24 text-center">
          <span className="text-5xl">🎮</span>
          <h2 className="mt-4 text-2xl font-black theme-text-primary uppercase tracking-tight">
            Game Not Found
          </h2>
          <p className="text-sm theme-text-secondary mt-2">
            The requested game could not be found in our directory.
          </p>
          <Link
            href="/"
            className="mt-6 rounded-xl bg-cyan-500 text-slate-950 px-6 py-2.5 text-xs font-black shadow-md shadow-cyan-500/15 hover:bg-cyan-400 active:scale-95 transition-all"
          >
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
    <div className="flex min-h-screen flex-col theme-bg">
      
      {/* Background overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.015] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent)] dark:bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent)]" />
      
      {/* Header */}
      <Header />

      {/* Main Play / Info Container */}
      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Visual Frame & Description Grid */}
        <section className="grid gap-8 lg:grid-cols-12 mb-12">
          
          {/* Visual Poster Frame */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="relative w-full aspect-[4/3] md:aspect-video rounded-3xl border theme-card px-6 py-10 md:py-12 flex flex-col justify-center items-center overflow-hidden shadow-sm">
              {/* Background image blur */}
              <Image
                src={game.thumbnail}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 75vw"
                className="absolute inset-0 h-full w-full object-cover blur-2xl opacity-20 dark:opacity-10 scale-110 pointer-events-none"
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="h-24 w-24 relative rounded-2xl border theme-card overflow-hidden shadow-md">
                  <Image
                    src={game.thumbnail}
                    alt={game.title}
                    fill
                    sizes="96px"
                    className="h-full w-full object-cover"
                  />
                </div>

                <h1 className="text-2xl sm:text-3xl font-black theme-text-primary mt-4 uppercase tracking-tight">
                  {game.title}
                </h1>

                <div className="mt-2 flex items-center gap-2 text-xs font-semibold theme-text-secondary">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">★ {game.rating.toFixed(1)} / 10</span>
                  <span>•</span>
                  <span>({game.reviews} reviews)</span>
                </div>

                {/* Play Action Button - links to the fullscreen player page */}
                <Link
                  href={`/game/${game.slug}/play`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 text-xs font-black shadow-lg shadow-cyan-500/20 active:scale-95 transition-all select-none"
                >
                  ▶ PLAY FULLSCREEN
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar details (Description, reviews, categorization) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">About Game</span>
            <h2 className="text-xl font-black theme-text-primary mt-1 uppercase tracking-tight">Game Description</h2>
            
            {/* Badges / Genres */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {game.categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-slate-500/5 border theme-card px-3 py-1 text-[9px] font-bold theme-text-secondary uppercase tracking-wide"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Description items list */}
            <ul className="mt-6 space-y-3.5 text-xs theme-text-secondary leading-relaxed list-disc pl-4.5">
              {game.description.map((desc, idx) => (
                <li key={idx} className="marker:text-cyan-500">
                  {desc}
                </li>
              ))}
            </ul>
          </div>

        </section>

        {/* More Games Recommendation Grid */}
        <section className="border-t theme-card pt-8 mb-12">
          <h2 className="text-lg font-black theme-text-primary uppercase tracking-tight mb-6">More Games to Play</h2>
          
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-4">
            {recommendedGames.map((rec) => (
              <Link
                key={rec.slug}
                href={`/game/${rec.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border theme-card hover:-translate-y-1 hover:border-cyan-500/30 dark:hover:border-cyan-500/20 hover:shadow-lg dark:hover:shadow-cyan-500/5 transition-all duration-300"
              >
                {/* Thumbnail Wrapper */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <Image
                    src={rec.thumbnail}
                    alt={rec.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Title details */}
                <div className="p-3 border-t theme-card flex-1 flex flex-col justify-between">
                  <h3 className="text-xs font-bold theme-text-primary group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors uppercase truncate">
                    {rec.title}
                  </h3>
                  <div className="mt-1 flex items-center justify-between text-[9px] font-bold theme-text-secondary uppercase tracking-wide">
                    <span>★ {rec.rating.toFixed(1)}</span>
                    <span className="text-cyan-600 dark:text-cyan-500 group-hover:translate-x-0.5 transition-transform">
                      Play &rarr;
                    </span>
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
