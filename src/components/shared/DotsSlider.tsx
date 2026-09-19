"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ComponentType, useEffect, useState } from "react";

interface DotsSliderProps<T = any> {
  data?: T[];
  CardComponent?: ComponentType<any>;
  uniqueId?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean | { delay?: number; disableOnInteraction?: boolean };
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

  return (
    <div className="relative w-full">
      <Swiper
        key={`swiper-${uniqueId}-${mounted ? "mounted" : "ssr"}`}
        modules={modules}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        autoplay={autoplay ? (typeof autoplay === "object" ? autoplay : { delay: 3000 }) : undefined}
        breakpoints={breakpoints}
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

      {/* External pagination */}
      <div className={`${paginationId} flex justify-center mt-6`}></div>

      {/* Custom Swiper Dots & SSR Hydration Layout Fix */}
      <style jsx global>{`
        /* Fix initial layout shift before Swiper JS initializes breakpoints */
        .swiper-slide:not([style*="width"]) {
          flex-shrink: 0;
        }
        @media (min-width: 400px) {
          .swiper-slide:not([style*="width"]) {
            width: calc(50% - 10px) !important;
          }
        }
        @media (min-width: 768px) {
          .swiper-slide:not([style*="width"]) {
            width: calc(33.333% - 14px) !important;
          }
        }
        @media (min-width: 1024px) {
          .swiper-slide:not([style*="width"]) {
            width: calc(25% - 15px) !important;
          }
        }
        @media (min-width: 1280px) {
          .swiper-slide:not([style*="width"]) {
            width: calc(20% - 16px) !important;
          }
        }
        @media (min-width: 1440px) {
          .swiper-slide:not([style*="width"]) {
            width: calc(14.285% - 18px) !important;
          }
        }

        .swiper-pagination-bullet {
          background-color: #ffffff;
          opacity: 0.5;
          width: 10px;
          height: 10px;
          margin: 0 4px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: ${paginationColor};
          opacity: 1;
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
}
