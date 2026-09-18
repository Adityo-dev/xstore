"use client";

import Container from "@/components/shared/Container";
import { useCart } from "@/context/CartContext";
import CartItem from "../_components/Cart/CartItem/CartItem";
import CartTotals from "../_components/Cart/CartTotals/CartTotals";
import CouponAndClear from "../_components/Cart/CouponAndClear/CouponAndClear";
import TableHeader from "../_components/Cart/TableHeader/TableHeader";
import { toast } from "react-toastify";

export default function ShoppingCart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();

  const handleClearAllItems = () => {
    clearCart();
    toast.error("Cannot place order. Your cart might be empty!", {
      position: "top-center",
      autoClose: 4000,
    });
  };

  return (
    <Container className="grid lg:grid-cols-3 gap-6">
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

            {/* cart Items */}
            <div className="flex-1 max-h-[350px] overflow-y-auto custom-scrollbar pr-4">
              {cartItems.map((item: any) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemoveCart={removeFromCart}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
            </div>

            {/* Coupon + Clear */}
            <CouponAndClear onClearAllItems={handleClearAllItems} />
          </>
        )}
      </div>

      {/* Right: Cart Totals */}
      <CartTotals totalPrice={totalPrice} />
    </Container>
  );
}
