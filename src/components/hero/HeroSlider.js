"use client";
import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomButton from "../ui/buttons/CustomButton";

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
          <SwiperSlide key={slide.id}>
            <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 w-full h-[480px] md:h-[400px] lg:h-[500px] px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
              {/* BG Image  */}
              <Image
                src={slide.bgCover}
                alt="Slide Background"
                fill
                priority
                className="object-cover object-center"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 z-[1]" />

              {/* Left Side: Image */}
              <div className="relative z-[2] w-[160px] sm:w-[220px] md:w-[260px] lg:w-[300px] flex justify-center mb-6 md:mb-0">
                <Image
                  src={slide.image}
                  width={600}
                  height={600}
                  alt={slide.title}
                  priority
                  className="rounded-lg shadow-xl border border-white/30 object-cover"
                />
              </div>

              {/* Right Side: Text */}
              <div className="relative z-[2] text-white text-center md:text-left flex flex-col items-center md:items-start gap-1 sm:gap-2">
                <h2 className="text-[14px] sm:text-[18px] md:text-[22px] uppercase tracking-widest font-light">
                  {slide.title}
                </h2>
                <p className="text-[36px] sm:text-[50px] md:text-[70px] lg:text-[90px] font-marcellus uppercase leading-tight">
                  {slide.subtitle}
                </p>
                <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-3 sm:mb-4">
                  {slide.available}
                </p>
                <CustomButton
                  href="#"
                  className="px-5 py-2 sm:px-7 sm:py-3 text-xs sm:text-sm md:text-base font-semibold transition-all"
                >
                  Purchase Now
                </CustomButton>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button className="custom-prev absolute left-0 group-hover:left-2 sm:group-hover:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#FFFFFF38] hover:bg-[#ffffff60] text-white rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer">
        <SlArrowLeft className="text-sm sm:text-lg" />
      </button>

      <button className="custom-next absolute right-0 group-hover:right-2 sm:group-hover:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#FFFFFF38] hover:bg-[#ffffff60] text-white rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer">
        <SlArrowRight className="text-sm sm:text-lg" />
      </button>
    </div>
  );
}
