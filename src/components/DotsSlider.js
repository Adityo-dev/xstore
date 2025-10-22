"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DotsSlider({
  data = [],
  CardComponent,
  uniqueId = "slider",
  slidesPerView = 1,
  spaceBetween = 24,
  loop = true,
  breakpoints = {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  },
  paginationColor = "#776bf8",
}) {
  const paginationId = `custom-pagination-${uniqueId}`;

  return (
    <div className="relative w-full">
      <Swiper
        key={`swiper-${uniqueId}`}
        modules={[Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        breakpoints={breakpoints}
        pagination={{
          clickable: true,
          el: `.${paginationId}`,
        }}
        className="w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={item?.id || index}>
            {CardComponent ? <CardComponent data={item} /> : null}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* External pagination */}
      <div className={`${paginationId} flex justify-center mt-6`}></div>

      {/* Custom Swiper Dots */}
      <style jsx global>{`
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
