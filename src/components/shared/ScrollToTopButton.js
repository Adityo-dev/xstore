"use client";
import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);

      if (scrollTop > 44) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg z-[500] cursor-pointer
      ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }
      bg-[#1e1f25]`}
    >
      <svg
        className="absolute w-full h-full rotate-[-90deg]"
        viewBox="0 0 36 36"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          stroke="#2c2e36"
          strokeWidth="4"
          fill="none"
        />

        <circle
          cx="18"
          cy="18"
          r="16"
          stroke="#776BF8"
          strokeWidth="4"
          fill="none"
          strokeDasharray="100"
          strokeDashoffset={100 - scrollPercent}
          strokeLinecap="round"
        />
      </svg>

      <IoArrowUp className="text-white text-2xl relative z-10" />
    </button>
  );
}
