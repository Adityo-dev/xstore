"use client";
import Link from "next/link";

export default function Gaming404() {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-4">
      {/* Glitch Text */}
      <h1 className="text-8xl font-bold text-[#ff0055] relative">
        404
        <span className="absolute top-0 left-0 text-[#00ffff] opacity-50 animate-glitch">
          404
        </span>
        <span className="absolute top-0 left-0 text-[#ffdd00] opacity-50 animate-glitch animation-delay-200">
          404
        </span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-xl text-[#7e7a99] text-center">
        Oops! The level you are trying to access does not exist.
      </p>

      {/* Call to Action */}
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-[#776BF8] hover:bg-[#5a50c0] text-white font-semibold rounded-lg transition"
      >
        Return to Base
      </Link>
    </div>
  );
}
