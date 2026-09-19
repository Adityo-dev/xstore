"use client";
import { CartProvider } from "@/context/CartContext";
import { AsideProvider } from "@/context/AsideContext";
import { ModalProvider } from "@/context/ModalContext";
import ModalContainer from "@/constants/ModalContainer/ModalContainer";

export default function AppProviders({ children }) {
  return (
    <ModalProvider>
      <AsideProvider>
        <CartProvider>
          {children}
          <ModalContainer />
        </CartProvider>
      </AsideProvider>
    </ModalProvider>
  );
}
