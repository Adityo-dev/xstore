import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniEquals } from "react-icons/hi2";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import GetStarRating from "../ui/GetStarRating";

// Example bundle data
const bundleData = [
  {
    id: 1,
    image: "/images/games6.jpg",
    title: "Ghost Recon Breakpoint. Lorem ipsum dolor sit amet, consectetur",
    originalPrice: 69.99,
    salePrice: 54.99,
    tag: "SALE",
    reviews: [
      {
        user: "Neil Armstrong Jr.",
        rating: 4,
        comment: "Dream come true for space fans!",
        date: "2025-10-23",
        userImage: "/images/users/neil-armstrong-jr.jpg",
      },
    ],
  },
  {
    id: 2,
    image: "/images/1.13-300x300.jpg",
    title: "Ghost Recon Breakpoint. Lorem ipsum dolor sit amet, consectetur",
    originalPrice: 69.99,
    salePrice: 54.99,
    tag: "SALE",
    reviews: [
      {
        user: "Neil Armstrong Jr.",
        rating: 4.8,
        comment: "Dream come true for space fans!",
        date: "2025-10-23",
        userImage: "/images/users/neil-armstrong-jr.jpg",
      },
    ],
  },
];

function Bundle() {
  return (
    <>
      <SectionHeader title={"Purchase in Bundle!"} />

      <Container>
        <div className="bg-[#23262F] p-6 rounded-lg flex flex-wrap lg:flex-nowrap items-center justify-center gap-6">
          {/* Card 1 */}
          <div className="relative flex items-center gap-6 bg-[#23262F] border border-[#FFFFFF24] rounded-lg overflow-hidden pr-2">
            <Image
              src={bundleData[0].image}
              width={400}
              height={400}
              alt={bundleData[0].title}
              className="w-[260px] h-[210px] object-cover"
            />
            <div>
              <p className="font-semibold mb-3">{bundleData[0].title}</p>
              <GetStarRating reviews={bundleData[0].reviews} />
              <div className="flex items-center gap-2 mt-6 text-[15px]">
                <span className="line-through text-gray-400">
                  {bundleData[0].originalPrice}
                </span>
                <span className="font-semibold text-green-600">
                  {bundleData[0].salePrice}
                </span>
              </div>
              <span className="absolute left-3 top-0 inline-block mt-2 px-2 py-1 text-[.70rem] font-semibold bg-[#37a937] text-white rounded">
                {bundleData[0].tag}
              </span>
            </div>
          </div>

          {/* + Icon */}
          <div className="text-white text-xl border border-[#FFFFFF24] p-2 rounded-full">
            <AiOutlinePlus />
          </div>

          {/* Card 2 */}
          <div className="relative flex items-center gap-6 bg-[#23262F] border border-[#FFFFFF24] rounded-lg overflow-hidden pr-2">
            <Image
              src={bundleData[1].image}
              width={400}
              height={400}
              alt={bundleData[1].title}
              className="w-[260px] h-[210px] object-cover"
            />
            <div>
              <p className="font-semibold mb-3">{bundleData[1].title}</p>
              <GetStarRating reviews={bundleData[1].reviews} />
              <div className="flex items-center gap-2 mt-6 text-[15px]">
                <span className="line-through text-gray-400">
                  {bundleData[1].originalPrice}
                </span>
                <span className="font-semibold text-green-600">
                  {bundleData[1].salePrice}
                </span>
              </div>
              <span className="absolute left-3 top-0 inline-block mt-2 px-2 py-1 text-[.70rem] font-semibold bg-[#37a937] text-white rounded">
                {bundleData[1].tag}
              </span>
            </div>
          </div>

          {/* = Icon */}
          <div className="text-white text-xl border border-[#FFFFFF24] p-2 rounded-full">
            <HiMiniEquals />
          </div>

          {/* Price Box */}
          <div className="border border-[#FFFFFF24] rounded-lg p-6 w-[500px] h-[210px] flex flex-col justify-center">
            <p className="text-[#ABA9BC] font-semibold text-[17px] text-right mb-3">
              Your Price
            </p>
            <div className="flex items-end justify-end gap-2 text-xl mb-4">
              <span className="line-through text-[25px] text-[#858490]">
                $99.98
              </span>
              <span className="text-[40px] font-semibold text-green-500">
                $95.99
              </span>
            </div>
            <button className="bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8] px-8 py-2 rounded-lg cursor-pointer text-[17px] font-semibold transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Bundle;
