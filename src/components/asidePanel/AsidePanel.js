"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function AsidePanel({ isOpen, onClose, title, children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-[999] cursor-pointer transition-opacity duration-300"
      ></div>

      {/* Panel */}
      <aside className="fixed top-0 right-0 w-[85vw] sm:w-[400px] h-[100vh] bg-[#1e1e1e] z-[1000] shadow-2xl animate-slideIn flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -left-12 top-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#776BF8] hover:rotate-90 transition duration-300 cursor-pointer"
        >
          ✕
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 p-4">
            {title}
          </h2>
        )}

        <div className="flex-1 overflow-y-auto px-4 pb-6 custom-scrollbar">
          {children}
        </div>
      </aside>
    </>,
    document.body
  );
}
