"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onEarnCoinsClick: () => void;
}

export default function Sidebar({ isOpen, onClose, onEarnCoinsClick }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/games", label: "Hot Videos & Games", icon: "📺", highlight: true },
    { href: "/#leaderboard", label: "Leaderboard", icon: "🏆", dummy: true },
    { href: "/#stats", label: "My Stats", icon: "📊", dummy: true },
    { href: "/#achievements", label: "Achievements", icon: "🎯", dummy: true },
    { href: "#", label: "Earn Coins", icon: "💰", action: onEarnCoinsClick },
    { href: "/#friends", label: "Friends", icon: "👥", dummy: true },
  ];

  const footerItems = [
    { href: "/#settings", label: "Settings", icon: "⚙️", dummy: true },
    { href: "/#support", label: "Help & Support", icon: "ℹ️", dummy: true },
  ];

  return (
    <>
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex w-72 flex-col border-r border-slate-800 bg-slate-900/95 backdrop-blur-md p-6 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              TwitQuiz
            </h2>
            <p className="text-xs text-slate-400">Play, Learn &amp; Win!</p>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>

        <nav className="mt-8 flex-1 space-y-1.5 overflow-y-auto">
          {menuItems.map((item, idx) => {
            const isActive = pathname === item.href;

            if (item.action) {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            }

            return (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : item.highlight
                    ? "bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.dummy && (
                  <span className="text-[10px] text-slate-500 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">
                    soon
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-slate-800 pt-4 space-y-1.5">
          {footerItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <span className="text-[10px] text-slate-500 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">
                soon
              </span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
