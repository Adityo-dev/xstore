"use client";
import PopularCategories from "../popularCategories/PopularCategories";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url("/images/BG-Image-1.png")`,
        backgroundSize: "cover",
      }}
    >
      {/* Slider Container */}
      <div className="pt-[136px] pb-4 space-y-8 px-4">
        <HeroSlider />
        <PopularCategories />
      </div>
    </section>
  );
}
