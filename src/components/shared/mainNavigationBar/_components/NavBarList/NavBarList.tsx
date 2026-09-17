"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface HeaderNavItem {
  id: number;
  name: string;
  url: string;
}

const navList: HeaderNavItem[] = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About us", url: "/about-us" },
  { id: 3, name: "Shop", url: "/shop" },
  { id: 4, name: "FAQs", url: "/faqs" },
  { id: 5, name: "Contacts", url: "/contacts" },
  { id: 6, name: "Dashboard", url: "/dashboard" },
];

export default function NavBarList(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="hidden xl:flex items-center gap-7">
        {navList.map((list) => {
          const isActive = pathname === list.url;

          return (
            <li key={list.id}>
              <Link
                href={list.url}
                className={`text-[17px] font-semibold text-nowrap ${
                  isActive
                    ? "text-[#776BF8] border-b-2 border-[#776BF8] pb-1"
                    : "text-white"
                } hover:text-[#776BF8] transition`}
              >
                {list.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
