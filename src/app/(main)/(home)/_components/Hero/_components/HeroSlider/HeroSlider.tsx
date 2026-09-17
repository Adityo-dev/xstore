"use client";
import DotsSlider from "@/components/shared/DotsSlider";
import HeroBanner from "../HeroBanner/HeroBanner";

interface SliderDataItem {
  id: number;
  bannerImage: string;
  subTitle: string;
  title: string;
  btn: string;
  btnUrl: string;
}

const sliderData: SliderDataItem[] = [
  {
    id: 1,
    bannerImage: "/images/games5.jpg",
    subTitle: "Exclusive Release",
    title: "Call of Duty: Black Ops Cold War",
    btn: "Pre-Order Now",
    btnUrl: "/shop/call-of-duty-black-ops",
  },
  {
    id: 2,
    bannerImage: "/images/games6.jpg",
    subTitle: "Trending Action",
    title: "Ghost Recon Breakpoint Tactical Shooter",
    btn: "Explore Game",
    btnUrl: "/shop/ghost-recon-breakpoint",
  },
  {
    id: 3,
    bannerImage: "/images/games7.jpg",
    subTitle: "Next-Gen Racing",
    title: "Gran Turismo 7 Ultimate Racing Experience",
    btn: "Buy Now",
    btnUrl: "/shop/gran-turismo-7",
  },
];

function HeroSlider() {
  return (
    <DotsSlider
      data={sliderData}
      CardComponent={HeroBanner}
      uniqueId="hero-slider"
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
    />
  );
}

export default HeroSlider;
