"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getRandomGameSlug } from "@/data/gamesData";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isThemeDark, setIsThemeDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync theme with local storage & document attribute
  useEffect(() => {
    const savedTheme = localStorage.getItem("data-theme") || "dark";
    setIsThemeDark(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = isThemeDark ? "light" : "dark";
    setIsThemeDark(!isThemeDark);
    localStorage.setItem("data-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const playRandomGame = () => {
    const slug = getRandomGameSlug();
    setIsMobileMenuOpen(false);
    router.push(`/game/${slug}`);
  };

  const navItems = [
    { href: "/", label: "Home", isHome: true },
    { href: "/about", label: "About Us" },
    { href: "/developer", label: "Developer" },
    { href: "/affiliates", label: "Affiliates" },
    { href: "/contact", label: "Contact Us" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/5 dark:border-slate-800/40 bg-slate-50/75 dark:bg-slate-950/75 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Brand Wordmark */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-1.5 group select-none">
            <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-indigo-400 transition-colors">
              VancedGames
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 rounded-full border border-slate-200/50 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/60 p-1 backdrop-blur shadow-sm">
          {navItems.map((item) => {
            const isActive = item.isHome ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25 scale-105"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Theme toggler & Mobile burger menu */}
        <div className="flex items-center gap-3">
          
          {/* Random Game Quickplay */}
          <button
            onClick={playRandomGame}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-slate-950 px-4 py-1.5 text-xs font-black shadow-md shadow-cyan-500/10 transition-all duration-300"
          >
            🎲 Random Play
          </button>

          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            type="button"
            className="rounded-full border border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/60 p-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200"
            aria-label="Switch theme mode"
          >
            {isThemeDark ? (
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Burger menu toggle (Mobile only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="rounded-full p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/60 hover:text-slate-950 dark:hover:text-slate-200 md:hidden"
            aria-label="Open primary menu"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/50 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 transition-colors duration-300">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = item.isHome ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-2 text-sm font-bold transition-all ${
                    isActive
                      ? "bg-cyan-500 text-slate-950"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={playRandomGame}
              type="button"
              className="mt-2 w-full text-center rounded-xl bg-cyan-500 text-slate-950 py-2.5 text-sm font-black transition-all"
            >
              🎲 Play Random Game
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
