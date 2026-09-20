"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ComponentType, useEffect, useState } from "react";

export interface DotsSliderProps<T = any> {
  data?: T[];
  CardComponent?: ComponentType<any>;
  uniqueId?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean | { delay?: number; disableOnInteraction?: boolean };
  speed?: number;
  breakpoints?: Record<number, { slidesPerView?: number; spaceBetween?: number }>;
  paginationColor?: string;
}

export default function DotsSlider<T extends { id?: any }>({
  data = [],
  CardComponent,
  uniqueId = "slider",
  slidesPerView = 1,
  spaceBetween = 24,
  loop = true,
  autoplay,
  speed = 800,
  breakpoints,
  paginationColor = "#6c63ff",
}: DotsSliderProps<T>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const paginationId = `custom-pagination-${uniqueId}`;

  const modules = [Pagination];
  if (autoplay) {
    modules.push(Autoplay);
  }

  if (!data || data.length === 0) return null;

  // SSR Initial Render Fallback (Exact matching grid to prevent Swiper layout shifts & 1-item flicker)
  if (!mounted) {
    const visibleCount = slidesPerView > 1 ? slidesPerView : 1;
    const initialItems = data.slice(0, visibleCount);

    return (
      <div className="relative w-full">
        <div
          className="grid gap-4 overflow-hidden w-full"
          style={{
            gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
          }}
        >
          {initialItems.map((item, index) => (
            <div key={item?.id || index} className="w-full">
              {CardComponent ? <CardComponent data={item} {...item} /> : null}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-6 h-3"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Swiper
        key={`swiper-${uniqueId}`}
        modules={modules}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop && data.length > 1}
        speed={speed}
        autoplay={autoplay ? (typeof autoplay === "object" ? autoplay : { delay: 8000 }) : undefined}
        breakpoints={breakpoints}
        observer={true}
        observeParents={true}
        pagination={{
          clickable: true,
          el: `.${paginationId}`,
        }}
        className="w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={item?.id || index}>
            {CardComponent ? <CardComponent data={item} {...item} /> : null}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* External pagination container */}
      <div className={`swiper-pagination ${paginationId} flex justify-center items-center gap-2 mt-6`}></div>

      {/* Modern Active-Pill Slider Dots */}
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
          background-color: ${paginationColor || "var(--color-primary, #776BF8)"} !important;
          box-shadow: 0 0 12px ${paginationColor ? `${paginationColor}80` : "rgba(119, 107, 248, 0.5)"} !important;
        }
      `}</style>
    </div>
  );
}
