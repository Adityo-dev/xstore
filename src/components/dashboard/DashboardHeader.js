"use client";

import { FaBell, FaSearch } from "react-icons/fa";

export default function DashboardHeader({ title = "Dashboard Overview" }) {
  return (
    <header className="h-16 border-b border-white/10 bg-[#0d1117]/60 backdrop-blur-md px-6 flex items-center justify-between shrink-0">
      <div>
        <h1 className="text-xl font-bold text-white tracking-tight">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
          <input
            type="text"
            placeholder="Search dashboard..."
            className="pl-9 pr-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
        <button className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 relative">
          <FaBell className="text-sm" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        </button>
        <div className="flex items-center gap-2 pl-2 border-l border-white/10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs">
            AD
          </div>
          <span className="text-xs text-gray-300 font-medium hidden sm:inline">Admin</span>
        </div>
      </div>
    </header>
  );
}
