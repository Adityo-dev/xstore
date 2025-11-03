"use client";

import CouponAndClear from "@/components/cart/CouponAndClear";
import TableHeader from "@/components/cart/TableHeader";
import Container from "@/components/Container";
import { useCart } from "@/components/context/CartContext";
import StepHeader from "@/components/StepHeader";
import Image from "next/image";
import CartTotals from "../../components/cart/CartTotals";

export default function ShoppingCart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();

  return (
    <Container className="mb-16 md:mb-24 pt-32 xl:pt-44">
      {/* Step Header */}
      <StepHeader />

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Cart Items */}
        <div className="lg:col-span-2 bg-[#1E2129] p-4 md:p-6 rounded-lg">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-400 py-10">
              Your cart is empty 🛒
            </p>
          ) : (
            <>
              {/* Table Header */}
              <TableHeader />

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid md:grid-cols-[3fr_1fr_1fr_1fr_1fr] items-center border-b border-gray-700 py-3 gap-4"
                >
                  {/* Product */}
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.images?.[0]?.src}
                      alt={item.images?.[0]?.alt || item.title}
                      width={75}
                      height={75}
                      className="rounded-md object-cover max-w-[80px] w-full h-full"
                    />
                    <div>
                      <p className="font-semibold text-[15px] leading-snug text-gray-100">
                        {item.title}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#776BF8] text-xs mt-2 hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <p className="text-gray-300 text-[15px]">
                    ${item?.salePrice}
                  </p>

                  {/* SKU */}
                  <p className="text-gray-400 text-[15px]">
                    {item.sku || "N/A"}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center justify-center">
                    <div className="flex items-center bg-[#0d0d0d] border border-gray-600 rounded-md">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-1 text-gray-300 hover:text-white cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-x border-gray-600 text-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 text-gray-300 hover:text-white cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <p className="text-right font-semibold text-[15px]">
                    ${(item.salePrice * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

              {/* Coupon + Clear */}
              <CouponAndClear onClearCart={clearCart} />
            </>
          )}
        </div>

        {/* Right: Cart Totals */}
        <CartTotals totalPrice={totalPrice} />
      </div>
    </Container>
  );
}
