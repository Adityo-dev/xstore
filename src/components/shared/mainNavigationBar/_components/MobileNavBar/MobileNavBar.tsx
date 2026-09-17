"use client";

import { useAside } from "@/context/AsideContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

export interface NavItem {
  id: number;
  name: string;
  url: string;
}

const navList: NavItem[] = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About us", url: "/about-us" },
  { id: 3, name: "Shop", url: "/shop" },
  { id: 4, name: "FAQs", url: "/faqs" },
  { id: 5, name: "Contacts", url: "/contacts" },
];

export default function MobileNavBar(): React.JSX.Element {
  const { closeAside } = useAside();
  const pathName = usePathname();

  return (
    <div className="flex flex-col items-start w-full">
      {/* ----- LOGO ----- */}
      <div className="w-full flex justify-center py-4 border-b border-gray-800">
        <Link href="/" onClick={closeAside}>
          <Image
            src="/logos/Logo.png"
            width={200}
            height={200}
            alt="Logo"
            className="w-[150px] max-h-[30px] object-contain"
          />
        </Link>
      </div>

      {/* ----- SEARCH BAR ----- */}
      <div className="w-full mt-5">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-[#0b1220] border border-[#1f2a44] rounded-lg p-3 outline-none focus:border-[#776BF8] transition duration-300"
          />
          <FaSearch
            className="absolute right-4 top-3.5 text-gray-400"
            size={16}
          />
        </div>
      </div>

      {/* ----- NAV LINKS ----- */}
      <nav className="flex flex-col w-full mt-6 space-y-4">
        {navList.map((list) => (
          <Link
            key={list.id}
            href={list.url}
            onClick={closeAside}
            className={`font-semibold border-b border-[#ffffff15] pb-3 ${
              pathName === list.url ? "text-[#776BF8]" : ""
            } hover:text-[#776BF8] transition-all duration-300`}
          >
            {list.name}
          </Link>
        ))}

        {/* ----- ACCOUNT LINK ----- */}
        <Link
          href="/login"
          className={`flex items-center gap-2 cursor-pointer ${
            pathName === "/login" ? "text-[#776BF8]" : ""
          }`}
        >
          <FiUser className="text-xl" />
          <p className="font-semibold">Sign In</p>
        </Link>
      </nav>
    </div>
  );
}
