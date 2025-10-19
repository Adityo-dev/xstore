"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navList = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About us", url: "/about-us" },
  { id: 3, name: "Shop", url: "/shop" },
  { id: 4, name: "FAQs", url: "/faqs" },
  { id: 5, name: "Contacts", url: "/contacts" },
];

function NavBarList() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-7">
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

export default NavBarList;
