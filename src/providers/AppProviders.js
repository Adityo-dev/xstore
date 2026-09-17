"use client";
import { CartProvider } from "@/context/CartContext";
import { AsideProvider } from "@/context/AsideContext";

export default function AppProviders({ children }) {
  return (
    <AsideProvider>
      <CartProvider>{children}</CartProvider>
    </AsideProvider>
  );
}
