"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { GAMES, Game } from "@/data/gamesData";

export default function FullscreenPlay() {
  const { slug } = useParams();
  const [game, setGame] = useState<Game | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [isLocalhost, setIsLocalhost] = useState(false);

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

  useEffect(() => {
    if (slug) {
      const found = GAMES.find((g) => g.slug === slug);
      if (found) {
        setGame(found);
        setIframeLoading(true);
      } else {
        setGame(null);
      }
    }
  }, [slug]);

  if (game === null) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-slate-100 text-center px-4">
        <span className="text-5xl">🎮</span>
        <h2 className="mt-4 text-2xl font-black uppercase tracking-tight text-white">
          Game Not Found
        </h2>
        <p className="text-sm text-slate-400 mt-2">
          The requested game could not be found in our directory.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-xl bg-cyan-500 text-slate-950 px-6 py-2.5 text-xs font-black shadow-md hover:bg-cyan-400 active:scale-95 transition-all"
        >
          🏠 Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen bg-black overflow-hidden flex items-center justify-center select-none"
    >
      {/* Loading Overlay */}
      {iframeLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 z-20 text-slate-200">
          <div className="h-10 w-10 rounded-full border-4 border-cyan-500/20 border-t-cyan-500 animate-spin" />
          <span className="mt-4 text-xs font-bold uppercase tracking-wider text-cyan-400">Loading {game.title}...</span>
          
          {/* Fallback new tab link */}
          <a
            href={game.playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2 text-[10px] font-bold text-slate-400 hover:text-white hover:border-slate-500 transition-all"
          >
            ↗ Play in New Tab
          </a>
        </div>
      )}

      {/* Floating Control Overlay */}
      <div className="absolute top-4 left-4 z-30 flex gap-2">
        <Link
          href={`/game/${game.slug}`}
          className="rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 px-4 py-2 text-[10px] font-black text-slate-200 hover:text-white hover:border-cyan-500/40 active:scale-95 transition-all flex items-center gap-1.5 shadow-lg shadow-black/20"
        >
          &larr; <span className="uppercase tracking-wide">Back to Details</span>
        </Link>
      </div>

      <div className="absolute top-4 right-4 z-30 flex gap-2">
        <button
          onClick={toggleFullscreen}
          type="button"
          className="rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 px-4 py-2 text-[10px] font-black text-slate-200 hover:text-white hover:border-cyan-500/40 active:scale-95 transition-all flex items-center gap-1.5 shadow-lg shadow-black/20 cursor-pointer"
        >
          {isFullscreen ? "🗖 Exit Fullscreen" : "📺 Go Fullscreen"}
        </button>
      </div>

      {/* Embedded Iframe Player */}
      <iframe
        src={game.playUrl}
        title={game.title}
        onLoad={() => setIframeLoading(false)}
        className={`h-full w-full border-none transition-opacity duration-700 ${
          iframeLoading ? "opacity-0" : "opacity-100"
        }`}
        allowFullScreen
        scrolling="no"
        sandbox={isLocalhost ? undefined : "allow-scripts allow-same-origin allow-pointer-lock allow-forms"}
      />
    </div>
  );
}
