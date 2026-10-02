"use client";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import RowCard from "@/components/ui/cards/RowCard";

interface RecentReleasesContentProps {
  products: any[];
}

export default function RecentReleasesContent({ products }: RecentReleasesContentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayProducts = products.slice(0, 6);

  // Group into pairs of 2 for mobile slider (2 cards per slide keeps height compact ~280px)
  const productPairs: any[][] = [];
  for (let i = 0; i < displayProducts.length; i += 2) {
    productPairs.push(displayProducts.slice(i, i + 2));
  }

  const paginationId = "custom-pagination-recent-releases";

  return (
    <div className="w-full">
      {/* Mobile & Small Tablets (< md): Swiper Carousel with 2 cards per slide */}
      <div className="block md:hidden w-full">
        {!mounted ? (
          // Initial SSR Fallback: show only the first 2 cards to prevent layout shift and avoid long stack
          <div className="flex flex-col gap-3">
            {displayProducts.slice(0, 2).map((game: any) => (
              <RowCard key={game?.id} game={game} />
            ))}
            <div className="flex justify-center items-center gap-2 mt-4 h-3" />
          </div>
        ) : (
          <div className="relative w-full">
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              loop={productPairs.length > 1}
              speed={600}
              pagination={{
                clickable: true,
                el: `.${paginationId}`,
              }}
              className="w-full"
            >
              {productPairs.map((pair, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-3">
                    {pair.map((game: any) => (
                      <RowCard key={game?.id} game={game} />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination Dots */}
            <div className={`swiper-pagination ${paginationId} flex justify-center items-center gap-2 mt-5`} />

            {/* Custom active pill styling matching theme */}
            <style jsx global>{`
              .${paginationId}.swiper-pagination {
                position: relative !important;
                bottom: auto !important;
                left: auto !important;
                top: auto !important;
                width: 100% !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                gap: 8px !important;
                margin-top: 1.25rem !important;
                transform: none !important;
              }
              .${paginationId} .swiper-pagination-bullet {
                width: 8px !important;
                height: 8px !important;
                margin: 0 !important;
                border-radius: 9999px !important;
                background-color: rgba(255, 255, 255, 0.25) !important;
                opacity: 1 !important;
                transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
                cursor: pointer !important;
              }
              .${paginationId} .swiper-pagination-bullet:hover {
                background-color: rgba(255, 255, 255, 0.5) !important;
                transform: scale(1.2) !important;
              }
              .${paginationId} .swiper-pagination-bullet-active {
                width: 28px !important;
                height: 8px !important;
                border-radius: 9999px !important;
                background-color: var(--color-primary, #776BF8) !important;
                box-shadow: 0 0 12px rgba(119, 107, 248, 0.5) !important;
              }
            `}</style>
          </div>
        )}
      </div>

      {/* Desktop & Medium+ Screens (>= md): Clean 2-3 column grid */}
      <div className="hidden md:grid md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-6">
        {displayProducts.map((game: any) => (
          <RowCard key={game?.id} game={game} />
        ))}
      </div>
    </div>
  );
}
