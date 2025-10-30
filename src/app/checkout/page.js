"use client";

import { useCart } from "@/components/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const router = useRouter();

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // এখানে তুমি চাইলে backend এ order save করতে পারো

    alert("✅ Order placed successfully!");
    clearCart();
    router.push("/"); // order complete হলে home এ নিয়ে যাবে
  };

  return (
    <div className="max-w-3xl mx-auto pt-44 bg-[#111] p-6 rounded-lg text-gray-200">
      <h1 className="text-2xl font-bold mb-5 border-b border-gray-700 pb-3">
        Checkout
      </h1>

      {/* Cart Summary */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between py-3 border-b border-gray-700"
            >
              <span>{item.title}</span>
              <span>
                {item.quantity} × ${item.price.toFixed(2)}
              </span>
            </div>
          ))}

          <div className="flex justify-between py-3 font-semibold text-lg mt-3 border-t border-gray-700">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-[#776BF8] text-white py-3 rounded-md font-semibold mt-5 hover:bg-[#6558e5] transition-all"
          >
            PLACE ORDER
          </button>
        </>
      )}
    </div>
  );
}
