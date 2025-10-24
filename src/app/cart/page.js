"use client";

import Image from "next/image";
import { useState } from "react";
import CartTotals from "./CartTotals";

export default function ShoppingCart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Vikings: War Of Clans Frigid P Strategy Warfare Conquer Enemies Feud",
      price: 313.33,
      img: "/images/image-1.jpg",
      quantity: 1,
      sku: "N/A",
    },
    {
      id: 2,
      name: "Klondike: Lost Expedition Farm & Explore Wilderness Of The Alaska",
      price: 209.99,
      img: "/images/image-4.jpg",
      quantity: 1,
      sku: "N/A",
    },
  ]);

  const handleQuantityChange = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white py-44 px-5">
      <div className="container mx-auto">
        {/* Step Header */}
        <div className="flex justify-center items-center gap-8 mb-10 text-gray-300">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-white text-black text-sm font-bold flex items-center justify-center">
              1
            </span>
            <p className="text-sm tracking-wide">SHOPPING CART</p>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <span className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center text-sm">
              2
            </span>
            <p className="text-sm tracking-wide">CHECKOUT</p>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <span className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center text-sm">
              3
            </span>
            <p className="text-sm tracking-wide">ORDER STATUS</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: Cart Items */}
          <div className="md:col-span-2 bg-[#111] p-6 rounded-lg">
            {cart.length === 0 ? (
              <p className="text-center text-gray-400 py-10">
                Your cart is empty 🛒
              </p>
            ) : (
              <>
                {/* Table Header */}
                <div className="hidden md:grid grid-cols-[3fr_1fr_1fr_1fr_1fr] text-gray-400 text-sm border-b border-gray-700 pb-3 mb-3">
                  <p>PRODUCT</p>
                  <p>PRICE</p>
                  <p>SKU</p>
                  <p>QUANTITY</p>
                  <p className="text-right">SUBTOTAL</p>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="grid md:grid-cols-[3fr_1fr_1fr_1fr_1fr] items-center border-b border-gray-700 py-5 gap-4"
                  >
                    {/* Product */}
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={75}
                        height={75}
                        className="rounded-md object-cover w-[150px] h-[75px]"
                      />
                      <div>
                        <p className="font-semibold text-[15px] leading-snug text-gray-100 max-w-xs">
                          {item.name}
                        </p>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-[#776BF8] text-xs mt-2 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <p className="text-gray-300 text-[15px]">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* SKU */}
                    <p className="text-gray-400 text-[15px]">{item.sku}</p>

                    {/* Quantity */}
                    <div className="flex items-center justify-center">
                      <div className="flex items-center bg-[#0d0d0d] border border-gray-600 rounded-md">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, "decrease")
                          }
                          className="px-3 py-1 text-gray-300 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border-x border-gray-600 text-gray-200">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, "increase")
                          }
                          className="px-3 py-1 text-gray-300 hover:text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <p className="text-right font-semibold text-[15px]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}

                {/* Coupon + Clear */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
                  <div className="flex w-full md:w-auto">
                    <input
                      type="text"
                      placeholder="Coupon code"
                      className="bg-[#1a1a1a] border border-gray-700 text-gray-300 px-3 py-2 rounded-l-md w-full md:w-64 focus:outline-none"
                    />
                    <button className="bg-[#776BF8] px-5 rounded-r-md font-semibold">
                      OK
                    </button>
                  </div>
                  <button
                    onClick={handleClearCart}
                    className="flex items-center gap-2 text-gray-300 border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition cursor-pointer"
                  >
                    🗑️ Clear Shopping Cart
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Right: Cart Totals */}
          <CartTotals subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
