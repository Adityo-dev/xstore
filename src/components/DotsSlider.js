"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ColumCard from "./cards/ColumCard";

const DotsSlider = ({ data, uniqueId = "slider" }) => {
  const paginationId = `custom-pagination-${uniqueId}`;

  return (
    <div className="relative w-full">
      <Swiper
        key={`game-slider-${uniqueId}`}
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{
          clickable: true,
          el: `.${paginationId}`,
        }}
        className="w-full custom-swiper"
      >
        {data.map((game) => (
          <SwiperSlide key={game?.id}>
            <ColumCard game={game} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* External pagination (unique per slider) */}
      <div className={`${paginationId} flex justify-center mt-6`}></div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #ffffff;
          opacity: 0.6;
          width: 10px;
          height: 10px;
          margin: 0 4px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #776bf8;
          opacity: 1;
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
};

export default DotsSlider;
