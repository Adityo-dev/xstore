"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Container from "../Container";
import CustomButton from "../ui/CustomButton";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/images/heroCard3.jpg",
      bgCover: "/images/hero-bg-slider3.jpeg",
      title: "RISE OF THE",
      subtitle: "odyssey",
      gradient: "from-[#0b0c10] to-[#1f2833]",
    },
    {
      id: 2,
      image: "/images/heroCard2.jpg",
      bgCover: "/images/hero-bg-slider2.jpeg",
      title: "RISE OF THE",
      subtitle: "xbox",
      gradient: "from-[#0b0c10] to-[#1f2833]",
    },
    {
      id: 3,
      bgCover: "/images/hero-bg-slider1.jpeg",
      image: "/images/heroCard1.jpg",
      title: "RISE OF THE",
      subtitle: "TitĀn",
      gradient: "from-[#0b0c10] to-[#1f2833]",
    },
  ];

  return (
    <Container className="relative w-full rounded-lg overflow-hidden group">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 10000 }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SwiperSlide key={slide.id}>
              <div
                className="relative w-full h-[500px] overflow-hidden"
                style={{
                  backgroundImage: `url(${slide?.bgCover})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Image
                  src={slide.image}
                  width={600}
                  height={600}
                  alt={slide.title}
                  className="w-fit h-[70%] rounded-lg relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />

                {/* Text Content Right side */}
                <div className="absolute top-1/2 right-20 -translate-y-1/2 text-white z-20 flex flex-col text-center gap-2">
                  <h2 className="text-[30px]">{slide?.title}</h2>
                  <p className="text-[90px] uppercase font-marcellus">
                    {slide?.subtitle}
                  </p>
                  <p></p>
                  <CustomButton href="#" className="mx-auto">
                    Purchase Now
                  </CustomButton>
                </div>
              </div>
            </SwiperSlide>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev absolute left-0 group-hover:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-[#FFFFFF38] hover:bg-[#ffffff60] text-white rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer">
        <SlArrowLeft className="text-lg" />
      </button>

      <button className="custom-next absolute right-0 group-hover:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-[#FFFFFF38] hover:bg-[#ffffff60] text-white rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer">
        <SlArrowRight className="text-lg" />
      </button>
    </Container>
  );
}
