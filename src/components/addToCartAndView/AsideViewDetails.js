import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import GetStarRating from "../utils/GetStarRating";

function AsideViewDetails({ data }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col gap-5 py-4">
      <div className="relative w-full h-[350px] rounded-md overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />
        {data.tag && (
          <span className="absolute left-3 top-3 px-2 py-1 text-xs font-semibold bg-[#37a937] rounded w-fit">
            {data.tag}
          </span>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
        <div className="flex items-center gap-3 mb-3">
          <span className="line-through text-gray-400">
            ${data.originalPrice}
          </span>
          <span className="text-[#37a937] font-semibold text-xl">
            ${data.salePrice}
          </span>
        </div>

        <GetStarRating rating={data?.rating} />

        <p className="text-[#8e919f] text-base my-3">
          {"Contrary to popular beliefs has roots in a piece of classical literature from 45 BC, making it over 2000 years old. Richard McClintock an professors at hampden-sydney colleges in virginia, looked up once of the more obscure consectetur from an passages and going through the cites of the words in classical literature discovered undoubtable source book treatise." ||
            "No description available."}
        </p>

        <p className="text-[#209e27] flex items-center gap-1">
          <IoCheckmark size={20} /> 119 in stock
        </p>

        <div className="space-y-4 text-white mt-4">
          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-3">
            {/* Quantity Selector */}
            <div className="flex items-center bg-[#1f1f1f] border border-[#333] rounded">
              <button
                onClick={handleDecrease}
                className="px-3 py-2.5 hover:text-[#776BF8] transition cursor-pointer"
              >
                <IoMdRemove size={18} />
              </button>
              <span className="px-3 select-none">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-3 py-2.5 hover:text-[#776BF8] transition cursor-pointer"
              >
                <IoMdAdd size={18} />
              </button>
            </div>

            <button
              className="flex items-center gap-2 bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8]  text-[17px]
                    font-semibold py-2 px-5 rounded transition-all duration-300 cursor-pointer"
            >
              <FiShoppingBag size={18} />
              Add To Cart
            </button>
          </div>

          {/* Category */}
          <div>
            <p className="text-sm">
              <span className="font-semibold text-gray-300">Category :</span>{" "}
              <Link
                href={"#"}
                className="text-[#888] hover:text-gray-300 transition duration-300"
              >
                Heroic Tower Defense with NFTs
              </Link>
            </p>
          </div>

          {/* Share */}
          <div className="flex items-center gap-3 text-sm">
            <span className="font-semibold text-gray-300">Share:</span>
            <div className="flex justify-center space-x-4 text-lg text-white">
              <FaFacebookF className="hover:text-[#776BF8] cursor-pointer transition" />
              <FaInstagram className="hover:text-[#776BF8] cursor-pointer transition" />
              <FaYoutube className="hover:text-[#776BF8] cursor-pointer transition" />
              <FaTelegramPlane className="hover:text-[#776BF8] cursor-pointer transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideViewDetails;
