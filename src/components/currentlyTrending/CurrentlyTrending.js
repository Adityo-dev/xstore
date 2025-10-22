"use client";
import Image from "next/image";
import Link from "next/link";
import DotsSlider from "../DotsSlider";
import SectionHeader from "../SectionHeader";
import ColumCard from "../cards/ColumCard";

const games = [
  {
    id: 1,
    image: "/images/1.16-300x300.jpg",
    title: "Ghost Recon Breakpoint. Lorem ipsum dolor sit amet, consectetur",
    rating: 4.6,
    originalPrice: 99.33,
    salePrice: 61.78,
    tag: "SALE",
  },
  {
    id: 2,
    image: "/images/1.1-300x300.jpg",
    title:
      "Experience Hogwart: in late 1800 and decide wizarding Exclusive world",
    rating: 5,
    originalPrice: 59.99,
    salePrice: 39.99,
    tag: "SALE",
  },
  {
    id: 3,
    image: "/images/1.6-300x300.jpg",
    title:
      "The Callistos Protocols: generation- survival horror Glen Schofield",
    rating: 4.5,
    originalPrice: 69.99,
    salePrice: 49.99,
    tag: "NEW",
  },
  {
    id: 4,
    image: "/images/1.9-300x300.jpg",
    title:
      "Soldier Inc: Mobile Warfare Rugged MMORTS Challenge Beginngs Pro Rated 5.00 out of 5",
    rating: 5,
    originalPrice: 49.99,
    salePrice: 29.99,
    tag: "SALE",
  },
  {
    id: 5,
    image: "/images/1.12-300x300.jpg",
    title: "Ghost Recon Breakpoint. Lorem ipsum dolor sit amet, consectetur",
    rating: 4,
    originalPrice: 79.99,
    salePrice: 59.99,
    tag: "HOT",
  },
  {
    id: 6,
    image: "/images/1.10-300x300.jpg",
    title: "Ghost Recon ",
    rating: 4.5,
    originalPrice: 69.99,
    salePrice: 54.99,
    tag: "SALE",
  },
];

function CurrentlyTrending() {
  return (
    <>
      <SectionHeader title={"Currently Trending"} />

      <div className="container mx-auto grid grid-cols-10 gap-6">
        <div className="col-span-2 rounded-lg overflow-hidden relative">
          <Image
            src={"/images/banner2.png"}
            width={600}
            height={600}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-5 text-center">
            <h2 className="text-nowrap text-[30px] font-semibold font-marcellus">
              Row Game
            </h2>
            <Link href="">
              <button className="bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8] px-8 py-2 rounded-lg cursor-pointer text-[17px] font-semibold transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-8">
          <DotsSlider
            data={games}
            CardComponent={ColumCard}
            uniqueId="currently-trending"
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            paginationColor="#6c63ff"
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default CurrentlyTrending;
