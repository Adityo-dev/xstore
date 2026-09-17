"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FaChartPie, 
  FaBoxOpen, 
  FaHome, 
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Overview", href: "/dashboard", icon: FaChartPie },
    { label: "Admin Panel", href: "/dashboard/admin", icon: FaBoxOpen },
    { label: "User Account", href: "/dashboard/user", icon: FaUserCircle },
    { label: "Back to Shop", href: "/", icon: FaHome },
  ];

  return (
    <aside className="w-64 bg-[#0d1117]/80 backdrop-blur-md border-r border-white/10 text-white min-h-screen p-4 flex flex-col justify-between shrink-0">
      <div>
        <div className="flex items-center gap-3 px-3 py-4 mb-6 border-b border-white/10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/30">
            X
          </div>
          <div>
            <h2 className="font-bold text-lg tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              XStore Hub
            </h2>
            <p className="text-xs text-gray-400">Edu-Next App Router</p>
          </div>
        </div>

        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30 shadow-md shadow-cyan-500/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={`text-lg ${isActive ? "text-cyan-400" : "text-gray-400"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-4 border-t border-white/10">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <FaSignOutAlt />
          <span>Exit Dashboard</span>
        </Link>
      </div>
    </aside>
  );
}
