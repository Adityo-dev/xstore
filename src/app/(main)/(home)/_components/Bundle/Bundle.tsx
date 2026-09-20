"use client";

import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniEquals } from "react-icons/hi2";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import GetStarRating from "@/components/ui/GetStarRating";
import DynamicActionButton from "@/components/shared/DynamicActionButton/DynamicActionButton";
import DotsSlider from "@/components/shared/DotsSlider";

interface BundleItemDetail {
  id: number;
  image: string;
  title: string;
  category?: string;
  originalPrice?: number;
  salePrice: number;
  tag?: string;
  reviews?: any[];
}

interface BundlePackage {
  id: number;
  title: string;
  badge: string;
  item1: BundleItemDetail;
  item2: BundleItemDetail;
  originalTotal: number;
  bundlePrice: number;
  savings: number;
}

const bundlePackages: BundlePackage[] = [
  {
    id: 1,
    title: "Pro Tactical Shooter & Studio Audio Combo",
    badge: "HOT COMBO",
    item1: {
      id: 101,
      image: "https://i.ibb.co/SwZtxwKm/games6.jpg",
      title: "Ghost Recon Breakpoint. Deluxe Tactical Edition",
      category: "PC Games",
      originalPrice: 69.99,
      salePrice: 54.99,
      tag: "SALE",
      reviews: [{ rating: 4.8 }],
    },
    item2: {
      id: 102,
      image: "https://i.ibb.co/Rp4NzD68/games13.jpg",
      title: "Xiaomi HyperOS Premium Wooden Stand Studio Headset",
      category: "Headsets",
      originalPrice: 299.99,
      salePrice: 249.99,
      tag: "SALE",
      reviews: [{ rating: 5.0 }],
    },
    originalTotal: 369.98,
    bundlePrice: 289.99,
    savings: 79.99,
  },
  {
    id: 2,
    title: "Ultimate Wireless Esports Gear Pack",
    badge: "MOST POPULAR",
    item1: {
      id: 201,
      image: "https://i.ibb.co/SwZtxwKm/games6.jpg",
      title: "Xbox Levitating Moss Edition Wireless Pro Controller",
      category: "Controllers",
      originalPrice: 199.99,
      salePrice: 179.99,
      tag: "HOT",
      reviews: [{ rating: 4.9 }],
    },
    item2: {
      id: 202,
      image: "https://i.ibb.co/Rp4NzD68/games13.jpg",
      title: "Logitech G Pro X Superlight 2 Wireless Gaming Mouse",
      category: "Gaming Mice",
      originalPrice: 159.99,
      salePrice: 139.99,
      tag: "HOT",
      reviews: [{ rating: 4.9 }],
    },
    originalTotal: 359.98,
    bundlePrice: 299.99,
    savings: 59.99,
  },
  {
    id: 3,
    title: "Streamer & Content Creator Studio Kit",
    badge: "CREATOR SPECIAL",
    item1: {
      id: 301,
      image: "https://i.ibb.co/SwZtxwKm/games6.jpg",
      title: "DJI Osmo Pocket Floating Debris Gimbal Camera",
      category: "Streaming Gear",
      originalPrice: 529.99,
      salePrice: 479.99,
      tag: "SPECIAL",
      reviews: [{ rating: 4.7 }],
    },
    item2: {
      id: 302,
      image: "https://i.ibb.co/Rp4NzD68/games13.jpg",
      title: "Professional Studio Condenser Mic & Boom Arm",
      category: "Microphones",
      originalPrice: 249.99,
      salePrice: 199.99,
      tag: "SPECIAL",
      reviews: [{ rating: 4.8 }],
    },
    originalTotal: 779.98,
    bundlePrice: 619.99,
    savings: 159.99,
  },
];

function BundleCard({ data }: { data: BundlePackage }) {
  if (!data) return null;

  return (
    <div className="bg-secondary-dark p-4 sm:p-6 rounded-lg border border-white/10 shadow-xl">
      {/* Top Combo Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="bg-danger/15 text-danger border border-danger/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {data.badge}
          </span>
          <h3 className="text-base sm:text-xl font-bold font-marcellus text-white">
            {data.title}
          </h3>
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-400">
          Instant Savings: <span className="text-secondary font-bold">${data.savings.toFixed(2)}</span>
        </span>
      </div>

      {/* Main Bundle Items + Price Box */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-6">
        {/* Item 1 Card (RowCard Style) */}
        <div className="group relative flex items-center gap-3 sm:gap-4 bg-primary-dark/60 rounded-lg overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-300 flex-1 min-w-0">
          <div className="w-[140px] sm:w-[170px] xl:w-[200px] aspect-[4/3] relative flex-shrink-0 bg-primary-dark overflow-hidden self-stretch">
            <Image
              src={data.item1.image}
              alt={data.item1.title}
              fill
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 140px, 200px"
            />
            {data.item1.tag && (
              <span className="absolute left-1.5 top-1.5 sm:left-2 sm:top-2 px-1.5 sm:px-2 py-0.5 text-[.65rem] sm:text-[.70rem] font-semibold bg-secondary text-white rounded z-10">
                {data.item1.tag}
              </span>
            )}
          </div>

          <div className="pr-3 sm:pr-4 py-3 sm:py-4 flex-1 flex flex-col justify-center min-w-0">
            {data.item1.category && (
              <span className="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wider mb-0.5 sm:mb-1 line-clamp-1">
                {data.item1.category}
              </span>
            )}
            <p className="text-xs sm:text-sm md:text-[15px] font-semibold mb-1 sm:mb-2 line-clamp-2 hover:text-primary transition-colors leading-snug text-white">
              {data.item1.title}
            </p>
            <GetStarRating reviews={data.item1.reviews} />
            <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 text-xs sm:text-sm md:text-[15px] flex-wrap">
              {data.item1.originalPrice && (
                <span className="line-through text-gray-400">
                  ${data.item1.originalPrice}
                </span>
              )}
              <span className="font-semibold text-secondary">
                ${data.item1.salePrice}
              </span>
            </div>
          </div>
        </div>

        {/* Plus (+) Icon */}
        <div className="self-center shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-base sm:text-lg font-bold shadow-[0_0_12px_rgba(119,107,248,0.25)]">
          <AiOutlinePlus />
        </div>

        {/* Item 2 Card (RowCard Style) */}
        <div className="group relative flex items-center gap-3 sm:gap-4 bg-primary-dark/60 rounded-lg overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-300 flex-1 min-w-0">
          <div className="w-[140px] sm:w-[170px] xl:w-[200px] aspect-[4/3] relative flex-shrink-0 bg-primary-dark overflow-hidden self-stretch">
            <Image
              src={data.item2.image}
              alt={data.item2.title}
              fill
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 140px, 200px"
            />
            {data.item2.tag && (
              <span className="absolute left-1.5 top-1.5 sm:left-2 sm:top-2 px-1.5 sm:px-2 py-0.5 text-[.65rem] sm:text-[.70rem] font-semibold bg-secondary text-white rounded z-10">
                {data.item2.tag}
              </span>
            )}
          </div>

          <div className="pr-3 sm:pr-4 py-3 sm:py-4 flex-1 flex flex-col justify-center min-w-0">
            {data.item2.category && (
              <span className="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wider mb-0.5 sm:mb-1 line-clamp-1">
                {data.item2.category}
              </span>
            )}
            <p className="text-xs sm:text-sm md:text-[15px] font-semibold mb-1 sm:mb-2 line-clamp-2 hover:text-primary transition-colors leading-snug text-white">
              {data.item2.title}
            </p>
            <GetStarRating reviews={data.item2.reviews} />
            <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 text-xs sm:text-sm md:text-[15px] flex-wrap">
              {data.item2.originalPrice && (
                <span className="line-through text-gray-400">
                  ${data.item2.originalPrice}
                </span>
              )}
              <span className="font-semibold text-secondary">
                ${data.item2.salePrice}
              </span>
            </div>
          </div>
        </div>

        {/* Equals (=) Icon */}
        <div className="self-center shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary text-base sm:text-lg font-bold shadow-[0_0_12px_rgba(55,169,55,0.25)]">
          <HiMiniEquals />
        </div>

        {/* Price Box */}
        <div className="bg-primary-dark/80 rounded-lg p-4 sm:p-5 border border-white/10 flex flex-col justify-between flex-1 min-w-[260px] lg:max-w-[340px] xl:max-w-[380px] self-stretch">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[10px] sm:text-xs font-bold text-danger bg-danger/10 px-2 py-0.5 rounded">
              SAVE ${data.savings.toFixed(2)}
            </span>
            <span className="text-xs text-gray-400 font-semibold">Your Combo Price</span>
          </div>

          <div className="flex items-baseline justify-end gap-2 my-2 sm:my-3">
            <span className="line-through text-gray-400 text-sm sm:text-base md:text-lg">
              ${data.originalTotal.toFixed(2)}
            </span>
            <span className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-secondary tracking-tight">
              ${data.bundlePrice.toFixed(2)}
            </span>
          </div>

          <DynamicActionButton label="Add Combo To Cart" className="w-full justify-center text-center" />
        </div>
      </div>
    </div>
  );
}

function Bundle() {
  return (
    <>
      <SectionHeader title={"Purchase in Bundle!"} btn={"View All Combos"} btnUrl="/shop" />

      <Container>
        <DotsSlider
          data={bundlePackages}
          CardComponent={BundleCard}
          uniqueId="bundle-combos-slider"
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          speed={800}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
        />
      </Container>
    </>
  );
}

export default Bundle;
