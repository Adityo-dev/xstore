"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface DiscountsBannerProps {
  product: any;
}

function DiscountsBanner({ product }: DiscountsBannerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 579); // Simulate the 579 days from original design
      targetDate.setHours(4, 49, 20, 0);
      // Actually let's just make it a real midnight countdown but formatted as requested.
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight.getTime() - now.getTime();

      return {
        days: 0,
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!product) return null;

  const imgSrc =
    typeof product.image === "string"
      ? product.image
      : product.cartImage?.src || product.images?.[0] || "";
  const originalPrice =
    product.originalPrice ||
    product.regularPrice ||
    (product.salePrice ? product.salePrice + 20 : 0);

  // Fake stock data for the progress bar to make it look active
  const totalStock = product.stock || 150;
  const sold = Math.floor(totalStock * 0.12); // 12% sold, similar to original 15/113
  const progressPercent = Math.round((sold / totalStock) * 100);

  return (
    <div className="col-span-full md:col-span-4 xl:col-span-3 rounded-lg overflow-hidden relative">
      <div className="sm:max-w-sm bg-[#1c1f26] rounded-xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.6)] border border-[#2a2d36] text-white">

        {/* Deal Badge */}
        <div className="absolute top-2 left-2 z-10 bg-danger text-white text-[11px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-lg">
          Deal of the Day
        </div>

        {/* Image */}
        <Link href={`/game/${product.id}`} className="block sm:h-[160px] overflow-hidden relative">
          {imgSrc && (
            <Image
              src={imgSrc}
              fill
              sizes="(max-width: 640px) 100vw, 300px"
              alt={product.title || "Game Image"}
              className="w-full h-full object-cover hover:scale-110 transition duration-300"
            />
          )}
        </Link>

        {/* Text Content */}
        <div className="p-4 space-y-2">
          <Link href={`/game/${product.id}`}>
            <h3 className="text-[15px] font-semibold leading-snug line-clamp-2 hover:text-[#37a937] transition-colors">
              {product.title}
            </h3>
          </Link>

          {/* Rating */}
          <div className="text-yellow-400 text-[17px]">
            {"★".repeat(product.rating || 5)}
            <span className="text-gray-500 text-[17px] ml-1 opacity-50">
              {"★".repeat(5 - (product.rating || 5))}
            </span>
          </div>

          {/* Prices */}
          <div className="flex items-center gap-2">
            {originalPrice > product.salePrice && (
              <span className="text-gray-400 line-through text-sm">
                ${originalPrice}
              </span>
            )}
            <span className="text-[#37a937] text-[18px] font-bold">
              ${product.salePrice}
            </span>
          </div>

          {/* Stock Info */}
          <div className="flex justify-between text-sm pt-1">
            <span className="text-[#37a937]">
              Available: <b>{totalStock - sold}</b>
            </span>
            <span className="text-gray-400">
              Sold: <b>{sold}</b>
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#2b2e36] rounded-full h-2 mt-1">
            <div
              className="bg-[#37a937] h-2 rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 bg-[#11141a] border-t border-[#2a2d36] text-center">
          <div className="py-3">
            <div className="text-[18px] font-bold">
              {isMounted ? String(timeLeft.days).padStart(2, "0") : "00"}
            </div>
            <div className="text-[10px] text-gray-400 tracking-wide">DAYS</div>
          </div>
          <div className="py-3">
            <div className="text-[18px] font-bold">
              {isMounted ? String(timeLeft.hours).padStart(2, "0") : "00"}
            </div>
            <div className="text-[10px] text-gray-400 tracking-wide">HOUR</div>
          </div>
          <div className="py-3">
            <div className="text-[18px] font-bold">
              {isMounted ? String(timeLeft.minutes).padStart(2, "0") : "00"}
            </div>
            <div className="text-[10px] text-gray-400 tracking-wide">MINS</div>
          </div>
          <div className="py-3">
            <div className="text-[18px] font-bold">
              {isMounted ? String(timeLeft.seconds).padStart(2, "0") : "00"}
            </div>
            <div className="text-[10px] text-gray-400 tracking-wide">SECS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountsBanner;
