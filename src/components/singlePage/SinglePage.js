"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function SinglePage({ data }) {
  // 👉 Base total time (in seconds)
  const totalSeconds = 50 * 60 * 60; // 50 hours

  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert total seconds → days, hours, minutes, seconds
  const days = Math.floor(secondsLeft / (24 * 3600));
  const hours = Math.floor((secondsLeft % (24 * 3600)) / 3600);
  const mins = Math.floor((secondsLeft % 3600) / 60);
  const secs = secondsLeft % 60;

  const timeLeft = { days, hours, mins, secs };

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-10 py-10">
      {/* ---------- LEFT CONTENT (Sticky) ---------- */}
      <div className="md:w-1/2">
        <div className="md:sticky md:top-10 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Experience Hogwart: In Late 1800 <br /> And Decide Wizarding
            Exclusive World
          </h1>

          <p className="text-gray-400">Heroic Tower Defense with NFTs</p>
          <p className="text-2xl font-semibold">$142.59</p>
          <p className="text-gray-400 text-sm mb-6">Tax included.</p>

          {/* Timer */}
          <div>
            <p className="text-red-400 font-semibold flex items-center mb-3">
              🚨 Hurry up
            </p>
            <div className="flex gap-3 text-center">
              {["DAYS", "HOURS", "MINS", "SECS"].map((label, idx) => (
                <div
                  key={idx}
                  className="bg-[#1e1e1e] px-3 py-2 rounded-md w-16"
                >
                  <p className="text-2xl font-bold">
                    {Object.values(timeLeft)[idx].toString().padStart(2, "0")}
                  </p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div>
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>Sold:</span>
              <span>13</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[35%] bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed text-sm">
            Contrary to popular beliefs has roots in a piece of classical
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock an professors at Hampden-Sydney colleges in Virginia,
            looked up one of the more obscure consectetuer from a passage and
            going through the cites of the words in classical literature
            discovered undoubtable source book treatise.
          </p>

          {/* Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-600 rounded-lg">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-lg"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 text-lg"
              >
                +
              </button>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg font-semibold">
              Add To Cart
            </button>
          </div>

          {/* Info */}
          <div className="space-y-2 text-sm pt-4">
            <p>
              <span className="text-gray-400">Genre:</span>{" "}
              <span className="text-white">PvP, Tower Defense, RPG</span>
            </p>
            <p>
              <span className="text-gray-400">Developer:</span>{" "}
              <span className="text-white">Sony Interactive Entertainment</span>
            </p>
            <p>
              <span className="text-gray-400">Languages:</span>{" "}
              <span className="text-white">English[UK], French, Dutch</span>
            </p>
            <p>
              <span className="text-gray-400">Platform:</span>{" "}
              <span className="text-white">PS 5, Xbox Series X, Steam</span>
            </p>
          </div>

          {/* Share */}
          <div className="flex items-center gap-4 mt-4">
            <span className="text-gray-400 text-sm">Share</span>
            <div className="flex gap-3">
              <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="hover:text-sky-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- RIGHT CONTENT (Scrollable images) ---------- */}
      <div className="md:w-1/2 space-y-6  pr-2 ">
        {data?.images?.map((src) => (
          <div
            key={src?.id}
            className="relative w-full h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src={src?.src}
              alt="Game Image"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
