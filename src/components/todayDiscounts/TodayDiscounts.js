import Image from "next/image";
import Link from "next/link";
import DotsSlider from "../DotsSlider";
import SectionHeader from "../SectionHeader";

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

function TodayDiscounts() {
  return (
    <>
      <SectionHeader title={"Today’s Discounts"} />

      <div className="container mx-auto grid grid-cols-12 gap-6">
        <div className="col-span-9">
          <DotsSlider data={games} uniqueId={"todays-discounts"} />
        </div>

        <div className="col-span-3 rounded-lg overflow-hidden relative">
          <div className="max-w-sm bg-[#1c1f26] rounded-xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.6)] border border-[#2a2d36] text-white">
            {/* Image */}
            <Link
              href={""}
              className="block h-[160px] overflow-hidden relative"
            >
              <Image
                src={"/images/blog2.jpeg"}
                width={400}
                height={400}
                alt={"Game Image"}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </Link>

            {/* Text Content */}
            <div className="p-4 space-y-2">
              <h3 className="text-[15px] font-semibold leading-snug">
                Towers And Titans Heroic Tower Defense With NFTs Real-Time
                Strategic
              </h3>

              {/* Rating */}
              <div className="text-yellow-400 text-[17px]">★★★★★</div>

              {/* Prices */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through text-sm">
                  $99.33
                </span>
                <span className="text-[#00ff88] text-[18px] font-bold">
                  $59.64
                </span>
              </div>

              {/* Stock Info */}
              <div className="flex justify-between text-sm pt-1">
                <span className="text-green-400">
                  Available: <b>113</b>
                </span>
                <span className="text-gray-400">
                  Sold: <b>15</b>
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#2b2e36] rounded-full h-2 mt-1">
                <div
                  className="bg-green-400 h-2 rounded-full"
                  style={{ width: "12%" }}
                ></div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 bg-[#11141a] border-t border-[#2a2d36] text-center">
              <div className="py-3">
                <div className="text-[18px] font-bold">579</div>
                <div className="text-[10px] text-gray-400 tracking-wide">
                  DAYS
                </div>
              </div>
              <div className="py-3">
                <div className="text-[18px] font-bold">04</div>
                <div className="text-[10px] text-gray-400 tracking-wide">
                  HOUR
                </div>
              </div>
              <div className="py-3">
                <div className="text-[18px] font-bold">49</div>
                <div className="text-[10px] text-gray-400 tracking-wide">
                  MINS
                </div>
              </div>
              <div className="py-3">
                <div className="text-[18px] font-bold">20</div>
                <div className="text-[10px] text-gray-400 tracking-wide">
                  SECS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodayDiscounts;
