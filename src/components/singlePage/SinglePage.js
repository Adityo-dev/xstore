"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import AsideAddToCard from "../addToCartAndView/AsideAddToCard";
import Container from "../Container";
import { useAside } from "../context/AsideContext";
import { useCart } from "../context/CartContext";
import Info from "./Info";

export default function SinglePage({ data }) {
  const { addToCart } = useCart();
  const { openAside } = useAside();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const itemWithQty = { ...data, quantity };
    addToCart(itemWithQty);

    // Open aside/modal
    openAside({
      title: "🛒 Your Cart",
      children: <AsideAddToCard data={itemWithQty} />,
    });
  };

  // Timer example
  const totalSeconds = 50 * 60 * 60; // 50 hours
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

  const isOutOfStock = data?.stock === 0;

  // Timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(secondsLeft / (24 * 3600));
  const hours = Math.floor((secondsLeft % (24 * 3600)) / 3600);
  const mins = Math.floor((secondsLeft % 3600) / 60);
  const secs = secondsLeft % 60;
  const timeLeft = { days, hours, mins, secs };

  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <Container className="flex flex-col-reverse lg:flex-row gap-10 items-start">
      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2 sticky top-44">
        <h1 className="text-[26px] md:text-[38px] font-semibold leading-tight">
          {data?.title}
        </h1>
        <p className="text-[#888] font-semibold text-lg mt-3">
          {data?.subtitle}
        </p>

        <div className="flex items-center gap-2 my-3 text-[30px]">
          <span className="line-through text-gray-400">
            ${data?.originalPrice}
          </span>
          <span className="font-semibold text-[#37a937]">
            ${data?.salePrice}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-6">
          {data?.taxIncluded ? "Tax included." : "Not tax included."}
        </p>

        {/* Timer */}
        <div className="my-3">
          <p className="text-red-400 font-semibold flex items-center mb-3">
            🚨 Hurry up
          </p>
          <div className="flex gap-3 text-center">
            {["DAYS", "HOURS", "MINS", "SECS"].map((label, idx) => (
              <div key={idx} className="bg-[#1e1e1e] px-4 py-2 rounded-md w-20">
                <p className="text-2xl font-bold">
                  {Object.values(timeLeft)[idx].toString().padStart(2, "0")}
                </p>
                <p className="text-xs text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sold / Stock Progress */}
        {data?.sold != null && data?.stock != null && (
          <div className="my-4">
            <div className="flex justify-between text-sm text-gray-400 py-2">
              <span>Sold:</span>
              <span>{data?.sold}</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-600"
                style={{
                  width: `${Math.min(100, (data.sold / data.stock) * 100)}%`,
                }}
              ></div>
            </div>
          </div>
        )}

        <p className="text-gray-400 leading-relaxed text-[17px] mt-4">
          {data?.description}
        </p>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center gap-3 py-6">
          <div className="flex items-center bg-[#1f1f1f] border border-[#333] rounded">
            <button
              onClick={handleDecrease}
              className="px-3 py-2.5 hover:text-[#776BF8] transition cursor-pointer"
              disabled={isOutOfStock}
            >
              <IoMdRemove size={18} />
            </button>
            <span className="px-3 select-none">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="px-3 py-2.5 hover:text-[#776BF8] transition cursor-pointer"
              disabled={isOutOfStock}
            >
              <IoMdAdd size={18} />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-2 text-[17px] font-semibold py-2 px-5 rounded transition-all duration-300 ${
              isOutOfStock
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8] cursor-pointer"
            }`}
            disabled={isOutOfStock}
          >
            <FiShoppingBag size={18} />{" "}
            {isOutOfStock ? "Out of Stock" : "Add To Cart"}
          </button>
        </div>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <Info label="Genre" values={data?.genre} />
          <Info label="Developer" values={[data?.developer]} />
          <Info label="Languages" values={data?.languages} />
          <Info label="Platform" values={data?.platform} />
        </div>

        {/* Social Share */}
        <div className="flex items-center gap-4 mt-10">
          <p className="text-gray-400">Share</p>
          <div className="flex items-center space-x-3 text-lg text-white">
            {[FaFacebook, FaInstagram, FaYoutube, FaTelegramPlane].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="hover:text-[#776BF8] cursor-pointer transition"
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT (Images) */}
      <div className="w-full lg:w-1/2 space-y-4">
        {data?.images.map((image) => (
          <Image
            key={image?.id}
            src={image?.src}
            width={500}
            height={500}
            alt={image.alt || "product image"}
            className="w-full h-fit"
          />
        ))}
      </div>
    </Container>
  );
}
