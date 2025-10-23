import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniEquals } from "react-icons/hi2";
import SectionHeader from "../SectionHeader";
import { default as GetStarRating } from "../utils/GetStarRating";

function Bundle() {
  return (
    <>
      <SectionHeader title={"Purchase in Bundle!"} />

      <div className="container mx-auto bg-[#23262F] p-6 rounded-lg flex items-center gap-6">
        <div className="relative flex items-center gap-6 bg-[#23262F] border border-[#FFFFFF24] rounded-lg overflow-hidden pr-2">
          <Image
            src={"/images/1.12-300x300.jpg"}
            width={400}
            height={400}
            alt=""
            className="w-[260px] h-[210px] object-cover"
          />

          <div>
            <p className="font-semibold mb-3">
              {
                "Ghost Recon Breakpoint. Lorem ipsum dolor sit amet, consectetur"
              }
            </p>
            <GetStarRating rating={5} />
            <div className="flex items-center gap-2 mt-6 text-[15px]">
              <span className="line-through text-gray-400">69.99</span>
              <span className="font-semibold text-green-600">54.99</span>
            </div>

            {/*  */}
            <span className="absolute left-3 top-0 inline-block mt-2 px-2 py-1 text-[.70rem] font-semibold bg-[#37a937] text-white rounded">
              SALE
            </span>
          </div>
        </div>
        <div className="text-white text-xl border border-[#FFFFFF24] p-2 rounded-full">
          <AiOutlinePlus />
        </div>
        <div className="relative flex items-center gap-6 bg-[#23262F] border border-[#FFFFFF24] rounded-lg overflow-hidden pr-2">
          <Image
            src={"/images/1.13-300x300.jpg"}
            width={400}
            height={400}
            alt=""
            className="w-[260px] h-[210px] object-cover"
          />

          <div>
            <p className="font-semibold mb-3">
              {
                "Ghost Recon Breakpoint. Lorem ipsum dolor sit amet, consectetur"
              }
            </p>
            <GetStarRating rating={5} />
            <div className="flex items-center gap-2 mt-6 text-[15px]">
              <span className="line-through text-gray-400">69.99</span>
              <span className="font-semibold text-green-600">54.99</span>
            </div>

            {/*  */}
            <span className="absolute left-3 top-0 inline-block mt-2 px-2 py-1 text-[.70rem] font-semibold bg-[#37a937] text-white rounded">
              SALE
            </span>
          </div>
        </div>
        <div className="text-white text-xl border border-[#FFFFFF24] p-2 rounded-full">
          <HiMiniEquals />
        </div>

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
    </>
  );
}

export default Bundle;
