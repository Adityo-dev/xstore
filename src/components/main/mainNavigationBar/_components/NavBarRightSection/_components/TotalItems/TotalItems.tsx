"use client";

import { useCart } from "@/context/CartContext";
import React from "react";

export default function TotalItems(): React.JSX.Element {
  const { totalItems } = useCart();

  return (
    <p className="absolute -top-2 -right-6 flex items-center justify-center w-6 h-6 bg-[#776BF8] text-white text-xs font-bold rounded-full p-1">
      {totalItems}
    </p>
  );
}
