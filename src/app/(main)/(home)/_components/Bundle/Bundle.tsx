import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniEquals } from "react-icons/hi2";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import GetStarRating from "@/components/ui/GetStarRating";
import DynamicActionButton from "@/components/shared/DynamicActionButton/DynamicActionButton";

interface BundleReview {
  user: string;
  rating: number;
  comment: string;
  date: string;
  userImage: string;
}

interface BundleItem {
  id: number;
  image: string;
  title: string;
  originalPrice: number;
  salePrice: number;
  tag: string;
  reviews: BundleReview[];
}

const bundleData: BundleItem[] = [
  {
    id: 1,
    image: "https://i.ibb.co/SwZtxwKm/games6.jpg",
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
    image: "https://i.ibb.co/Rp4NzD68/games13.jpg",
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
                <span className="font-semibold text-[#37a937]">
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
                <span className="font-semibold text-[#37a937]">
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
              <span className="text-[40px] font-semibold text-[#37a937]">
                $95.99
              </span>
            </div>
            <DynamicActionButton label="Add to Cart" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Bundle;
