"use client";

import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniEquals } from "react-icons/hi2";
import GetStarRating from "@/components/ui/GetStarRating";
import DynamicActionButton from "@/components/shared/DynamicActionButton/DynamicActionButton";
import { Fragment } from "react";

export interface BundleItemDetail {
  id: number;
  image: string;
  title: string;
  category?: string;
  originalPrice?: number;
  salePrice: number;
  tag?: string;
  reviews?: any[];
}

export interface BundlePackage {
  id: number;
  title: string;
  badge: string;
  items: BundleItemDetail[];
  originalTotal: number;
  bundlePrice: number;
  savings: number;
  stock?: number;
  categories?: string[];
}

export default function BundleCard({ data }: { data: BundlePackage }) {
  if (!data || !data.items || data.items.length === 0) return null;

  return (
    <div className="bg-secondary-dark p-4 sm:p-6 rounded-lg border border-white/10 shadow-xl h-full flex flex-col justify-between w-full">
      {/* Top Combo Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b border-white/10 w-full">
        <div className="flex items-center gap-3">
          <span className="bg-danger text-white text-[10px] sm:text-[11px] font-bold px-2 py-1 rounded uppercase tracking-wider whitespace-nowrap">
            {data.badge}
          </span>
          <h3 className="text-base sm:text-xl font-bold font-marcellus text-white">
            {data.title}
          </h3>
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-400 whitespace-nowrap">
          Instant Savings: <span className="text-secondary font-bold">${data.savings.toFixed(2)}</span>
        </span>
      </div>

      {/* Main Bundle Items + Price Box */}
      <div className="flex flex-col xl:flex-row items-stretch justify-between gap-4 lg:gap-6 flex-1 w-full xl:min-w-0">
        
        {/* Dynamic Items Container - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col xl:flex-row items-stretch gap-4 flex-1 w-full">
          {data.items.map((item, index) => (
            <Fragment key={item.id}>
              {/* Item Card */}
              <div className="group relative flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-primary-dark/60 rounded-lg overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-300 flex-1 w-full xl:max-w-[400px]">
                <div className="w-full sm:w-[130px] aspect-[4/3] relative flex-shrink-0 bg-primary-dark overflow-hidden self-stretch">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 200px, 120px"
                  />
                  {item.tag && (
                    <span className="absolute left-1.5 top-1.5 sm:left-2 sm:top-2 px-1.5 sm:px-2 py-0.5 text-[.65rem] sm:text-[.70rem] font-semibold bg-secondary text-white rounded z-10">
                      {item.tag}
                    </span>
                  )}
                </div>

                <div className="p-3 sm:p-0 sm:pr-4 sm:py-3 flex-1 flex flex-col justify-center w-full min-w-0">
                  {item.category && (
                    <span className="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wider mb-0.5 sm:mb-1 line-clamp-1">
                      {item.category}
                    </span>
                  )}
                  <p className="text-xs sm:text-sm md:text-[15px] font-semibold mb-1 line-clamp-2 hover:text-primary transition-colors leading-snug text-white">
                    {item.title}
                  </p>
                  <GetStarRating reviews={item.reviews} />
                  <div className="flex items-center gap-1.5 sm:gap-2 mt-1.5 text-xs sm:text-sm md:text-[15px] flex-wrap">
                    {item.originalPrice && (
                      <span className="line-through text-gray-400">
                        ${item.originalPrice}
                      </span>
                    )}
                    <span className="font-semibold text-secondary">
                      ${item.salePrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Plus (+) Icon - Render after every item except the last one */}
              {index < data.items.length - 1 && (
                <div className="self-center shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 text-lg sm:text-xl font-bold my-1 xl:my-0">
                  <AiOutlinePlus />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Equals (=) Icon */}
        <div className="self-center shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 text-lg sm:text-xl font-bold my-2 xl:my-0 xl:mx-2">
          <HiMiniEquals />
        </div>

        {/* Price Box */}
        <div className="bg-primary-dark/80 rounded-lg p-4 sm:p-5 border border-white/10 flex flex-col justify-between w-full xl:min-w-[240px] xl:max-w-[280px] self-stretch mt-4 xl:mt-0">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[10px] sm:text-xs font-bold text-danger bg-danger/10 px-2 py-0.5 rounded whitespace-nowrap">
              SAVE ${data.savings.toFixed(2)}
            </span>
            <span className="text-xs text-gray-400 font-semibold whitespace-nowrap">Your Combo Price</span>
          </div>

          <div className="flex items-baseline justify-end gap-2 my-2 sm:my-3">
            <span className="line-through text-gray-400 text-sm sm:text-base md:text-lg">
              ${data.originalTotal.toFixed(2)}
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight">
              ${data.bundlePrice.toFixed(2)}
            </span>
          </div>

          <DynamicActionButton label="Add Combo To Cart" className="w-full justify-center text-center py-3" />
        </div>
      </div>
    </div>
  );
}
