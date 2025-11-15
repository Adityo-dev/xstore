"use client";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerNavigationArrow from "./BannerNavigationArrow";
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
      <BannerNavigationArrow name={"custom-prev"} direction={"left"}>
        <SlArrowLeft />
      </BannerNavigationArrow>

      <BannerNavigationArrow name={"custom-next"} direction={"right"}>
        <SlArrowRight />
      </BannerNavigationArrow>
    </div>
  );
}
