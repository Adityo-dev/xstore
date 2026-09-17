"use client";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroBanner from "./HeroBanner";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/images/heroCard3.jpg",
      bgCover: "/images/hero-bg-slider3.jpeg",
      title: "RISE OF THE",
      subtitle: "ODYSSEY",
      available: "Available Now",
    },
    {
      id: 2,
      image: "/images/heroCard2.jpg",
      bgCover: "/images/hero-bg-slider2.jpeg",
      title: "RISE OF THE",
      subtitle: "XBOX",
      available: "Available Now",
    },
    {
      id: 3,
      image: "/images/heroCard1.jpg",
      bgCover: "/images/hero-bg-slider1.jpeg",
      title: "RISE OF THE",
      subtitle: "TITĀN",
      available: "Available Now",
    },
  ];

  return (
    <div className="relative w-full rounded-xl overflow-hidden group">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 6000 }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide?.id}>
            <HeroBanner slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}

      <button
        className={`custom-prev absolute left-0 group-hover:left-2 sm:group-hover:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#FFFFFF38] hover:bg-[#ffffff60] text-white rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer`}
      >
        <SlArrowLeft />
      </button>

      <button
        className={`custom-next absolute right-0 group-hover:right-2 sm:group-hover:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#FFFFFF38] hover:bg-[#ffffff60] text-white rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer`}
      >
        <SlArrowRight />
      </button>
    </div>
  );
}
