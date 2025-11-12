"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAside } from "./context/AsideContext";

export default function DynamicAsidePanel() {
  const { isOpen, closeAside, content, position, title } = useAside();

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) closeAside();
  }, [pathname]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeAside}
        className="fixed inset-0 bg-black/50 z-[999] cursor-pointer transition-opacity duration-300"
      ></div>

      {/* Aside Panel */}
      <div
        className={`fixed top-0 w-[85vw] sm:w-[400px] h-[100vh] bg-[#1e1e1e] z-[1000] shadow-2xl flex flex-col ${
          position === "right"
            ? "right-0 animate-slideInRight"
            : "left-0 animate-slideInLeft"
        } `}
      >
        {/* Close Button */}
        <button
          onClick={closeAside}
          className={`absolute ${
            position === "right" ? "-left-12" : "-right-12"
          } top-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#776BF8] hover:rotate-90 transition duration-300 cursor-pointer`}
        >
          ✕
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 p-4">
            {title}
          </h2>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 pb-6 custom-scrollbar">
          {content}
        </div>
      </div>
    </>
  );
}
