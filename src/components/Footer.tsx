"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200/10 dark:border-slate-800/40 bg-slate-100/30 dark:bg-slate-950/30 py-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Brand & Description */}
        <div>
          <span className="text-sm font-black bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            VancedGames
          </span>
          <p className="text-[10px] text-slate-500 mt-1">
            Play free online HTML5 games on desktop and mobile viewports seamlessly.
          </p>
        </div>

        {/* Right Side: Footer Quick links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            About Us
          </Link>
          <Link href="/developer" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            Developer
          </Link>
          <Link href="/affiliates" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            Affiliates
          </Link>
          <Link href="/contact" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 pt-6 border-t border-slate-200/5 dark:border-slate-800/20 text-center">
        <p className="text-[10px] text-slate-500">
          &copy; {new Date().getFullYear()} VancedGames. All trademarks and characters belong to their respective owners. Powered by high performance browser engine.
        </p>
      </div>
    </footer>
  );
}
