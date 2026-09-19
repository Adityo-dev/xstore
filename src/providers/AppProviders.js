"use client";
import { CartProvider } from "@/context/CartContext";
import { ModalProvider } from "@/context/ModalContext";
import ModalContainer from "@/constants/ModalContainer/ModalContainer";

export default function AppProviders({ children }) {
  return (
    <ModalProvider>
      <CartProvider>
        {children}
        <ModalContainer />
      </CartProvider>
    </ModalProvider>
  );
}
