"use client";
import Container from "../Container";
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
      <Container className="container mx-auto pt-[100px] md:pt-[120px] lg:pt-[136px] pb-4 space-y-8">
        <HeroSlider />
        <PopularCategories />
      </Container>
    </section>
  );
}
