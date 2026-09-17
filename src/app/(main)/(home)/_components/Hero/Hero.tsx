"use client";
import Container from "@/components/shared/Container";
import PopularCategories from "../PopularCategories/PopularCategories";
import HeroSlider from "./_components/HeroSlider/HeroSlider";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url("/images/BG-Image-1.png")`,
        backgroundSize: "cover",
      }}
    >
      {/* Slider Container */}
      <Container className="container mx-auto pt-[100px] md:pt-[120px] lg:pt-[136px] pb-4 space-y-8">
        <HeroSlider />
        <PopularCategories />
      </Container>
    </section>
  );
}
