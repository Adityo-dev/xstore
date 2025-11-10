"use client";
import { useCart } from "@/components/context/CartContext";

function TotalItems() {
  const { totalItems } = useCart();

  return (
    <p className="absolute -top-2 -right-6 flex items-center justify-center w-6 h-6 bg-[#776BF8] rounded-full p-1">
      {totalItems}
    </p>
  );
}

export default TotalItems;
