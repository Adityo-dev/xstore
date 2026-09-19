"use client";
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
import GetStarRating from "@/components/ui/GetStarRating";
import { useModal } from "@/context/ModalContext";
import { useCart } from "@/context/CartContext";

interface AsideViewDetailsProps {
  data?: any;
  onAddToCart?: (itemWithQty: any) => void;
}

function AsideViewDetails({ data: propData, onAddToCart: propOnAddToCart }: AsideViewDetailsProps) {
  const modal = useModal();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const data = propData || modal?.data;
  const handleAddToCart = propOnAddToCart || ((item: any) => addToCart(item));

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col gap-5 py-4">
      <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden bg-[#18191c]">
        {data?.cartImage?.src && (
          <Image
            src={data.cartImage.src}
            alt={data.cartImage.alt || data.title}
            fill
            className="object-cover"
            priority
          />
        )}
        {data?.tag && (
          <span className="absolute left-3 top-3 px-2 py-1 text-xs font-semibold bg-[#37a937] rounded w-fit">
            {data.tag}
          </span>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">{data?.title}</h2>
        <div className="flex items-center gap-3 mb-3">
          {data?.originalPrice && (
            <span className="line-through text-gray-400">
              ${data?.originalPrice}
            </span>
          )}
          {data?.salePrice && (
            <span className="text-[#37a937] font-semibold text-xl">
              ${data?.salePrice}
            </span>
          )}
        </div>

        {data?.reviews && <GetStarRating reviews={data.reviews} />}

        <p className="text-[#8e919f] text-base my-3">
          {data?.description || "No description available."}
        </p>

        {data?.stock <= 0 ? (
          <p className="text-[#e00a0a] flex items-center gap-1">
            ✕ Out of stock
          </p>
        ) : (
          <p className="text-[#209e27] flex items-center gap-1">
            <IoCheckmark size={20} /> {data?.stock ?? "In"} stock
          </p>
        )}

        <div className="space-y-4 text-white mt-4">
          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-3">
            {/* Quantity Selector */}
            <div className="flex items-center bg-[#1f1f1f] border border-[#333] rounded">
              <button
                onClick={handleDecrease}
                className="px-3 py-2.5 hover:text-primary transition cursor-pointer"
              >
                <IoMdRemove size={18} />
              </button>
              <span className="px-3 select-none">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-3 py-2.5 hover:text-primary transition cursor-pointer"
              >
                <IoMdAdd size={18} />
              </button>
            </div>

            <button
              onClick={() => handleAddToCart({ ...data, quantity })}
              className="flex items-center gap-2 bg-primary hover:bg-white hover:text-primary text-[17px] font-semibold py-2 px-5 rounded transition-all duration-300 cursor-pointer"
              disabled={data?.stock <= 0}
            >
              <FiShoppingBag size={18} />
              Add To Cart
            </button>
          </div>

          {/* Category */}
          {data?.categories && (
            <div>
              <p className="text-sm">
                <span className="font-semibold text-gray-300">Category :</span>{" "}
                {data.categories.map((cat: string) => (
                  <Link
                    key={cat}
                    href={"#"}
                    className="text-[#888] hover:text-gray-300 transition duration-300"
                  >
                    {cat}{" "}
                  </Link>
                ))}
              </p>
            </div>
          )}

          {/* Share */}
          <div className="flex items-center gap-3 text-sm">
            <span className="font-semibold text-gray-300">Share:</span>
            <div className="flex justify-center space-x-4 text-lg text-white">
              <FaFacebookF className="hover:text-primary cursor-pointer transition" />
              <FaInstagram className="hover:text-primary cursor-pointer transition" />
              <FaYoutube className="hover:text-primary cursor-pointer transition" />
              <FaTelegramPlane className="hover:text-primary cursor-pointer transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideViewDetails;
