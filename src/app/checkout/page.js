"use client";

import BillingDetails from "@/components/checkout/BillingDetails";
import OrderSummary from "@/components/checkout/OrderSummary";
import { useCart } from "@/components/context/CartContext";
import StepHeader from "@/components/StepHeader";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartItems, totalPrice, updateQuantity, placeOrder, userInfo } =
    useCart();

  const router = useRouter();

  const [form, setForm] = useState(userInfo);
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "First Name is required";
    if (!form.street) newErrors.street = "Street Address is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    return newErrors;
  };

  const handlePlaceOrder = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const newOrder = placeOrder(form);

    if (newOrder) {
      setShowToast(true);
      setOrderPlaced(true);
      setForm({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        phone: "",
        email: "",
        notes: "",
      });
      setTimeout(() => setShowToast(false), 4000);
      router.push("/order-status");
    }
  };

  return (
    <div className="relative container mx-auto px-4 mb-16 md:mb-24 pt-32 xl:pt-44">
      {showToast && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold animate-bounce">
          ✅ Your order has been placed successfully!
        </div>
      )}

      <StepHeader />

      {cartItems.length === 0 && !orderPlaced ? (
        <p className="text-center text-xl mt-20">
          Your cart is empty. Please add items to your cart before checking
        </p>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6">
          <BillingDetails
            form={form}
            errors={errors}
            handleChange={handleChange}
          />
          <OrderSummary
            cartItems={cartItems}
            totalPrice={totalPrice}
            updateQuantity={updateQuantity}
            handlePlaceOrder={handlePlaceOrder}
            orderPlaced={orderPlaced}
          />
        </div>
      )}
    </div>
  );
}
