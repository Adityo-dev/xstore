"use client";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import Container from "../Container";
import DotsSlider from "../DotsSlider";
import ImageCart from "./ImageCart";

export default function SinglePage({ data }) {
  // 👉 Base total time (in seconds)
  const totalSeconds = 50 * 60 * 60; // 50 hours

  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [quantity, setQuantity] = useState(1);

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

  // Convert total seconds → days, hours, minutes, seconds
  const days = Math.floor(secondsLeft / (24 * 3600));
  const hours = Math.floor((secondsLeft % (24 * 3600)) / 3600);
  const mins = Math.floor((secondsLeft % 3600) / 60);
  const secs = secondsLeft % 60;

  const timeLeft = { days, hours, mins, secs };

  return (
    <Container className="flex flex-col-reverse lg:flex-row  gap-10 items-start">
      {/* ---------- LEFT CONTENT (Sticky) ---------- */}
      <div className="w-full lg:w-1/2">
        <div className="sticky top-40 self-start">
          {/* Title */}
          <h1 className="text-[26px] md:text-[38px] font-semibold leading-tight">
            {data?.title}
          </h1>

          <p className="text-[#888] font-semibold text-lg mt-3">
            {data?.subtitle}
          </p>

          {/* Price */}
          <div className="flex items-center gap-2 my-3 text-[30px]">
            <span className="line-through text-gray-400">
              ${data?.originalPrice}
            </span>
            <span className="font-semibold text-green-600">
              ${data?.salePrice}
            </span>
          </div>

          {/* Tax */}
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
                <div
                  key={idx}
                  className="bg-[#1e1e1e] px-4 py-2 rounded-md w-20"
                >
                  <p className="text-2xl font-bold">
                    {Object.values(timeLeft)[idx].toString().padStart(2, "0")}
                  </p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-sm text-gray-400 py-2">
              <span>Sold:</span>
              <span>{data?.sold}</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[35%] bg-green-600"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed text-[17px] mt-4">
            Contrary to popular beliefs, this has roots in a piece of classical
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words and discovered its
            undoubtable source.
          </p>

          {/* Add to Cart */}
          <div className="flex items-center gap-3 py-6">
            {/* Quantity Selector */}
            <div className="flex items-center bg-[#1f1f1f] border border-[#333] rounded">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2.5 hover:text-[#776BF8] transition cursor-pointer"
              >
                <IoMdRemove size={18} />
              </button>
              <span className="px-3 select-none">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2.5 hover:text-[#776BF8] transition cursor-pointer"
              >
                <IoMdAdd size={18} />
              </button>
            </div>

            <button
              className="flex items-center gap-2 bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8]
                         text-[17px] font-semibold py-2 px-5 rounded transition-all duration-300 cursor-pointer"
            >
              <FiShoppingBag size={18} />
              Add To Cart
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
      </div>

      {/* ---------- RIGHT CONTENT (Scrollable images) ---------- */}
      <div className="w-full lg:w-1/2 space-y-6">
        <DotsSlider
          data={data?.images}
          CardComponent={ImageCart}
          uniqueId="image-cart-slider"
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          paginationColor="#6c63ff"
        />
      </div>
    </Container>
  );
}

// ✅ Reusable Info Component
function Info({ label, values = [] }) {
  return (
    <div className="flex items-center gap-4">
      <FaUser className="mt-[2px]" />
      <div className="flex flex-col gap-1">
        <p className="text-[#A3A1AF] font-semibold">{label}:</p>
        <div className="flex flex-wrap gap-1.5">
          {values?.map(
            (v) =>
              v && (
                <p key={v} className="font-medium text-white">
                  {v}
                </p>
              )
          )}
        </div>
      </div>
    </div>
  );
}
