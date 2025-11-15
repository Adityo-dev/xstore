"use client";

import BillingDetails from "@/components/checkout/BillingDetails";
import OrderSummary from "@/components/checkout/OrderSummary";
import Container from "@/components/Container";
import { useCart } from "@/components/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Toastify imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CheckoutPage() {
  const { cartItems, totalPrice, updateQuantity, placeOrder, userInfo } =
    useCart();
  const router = useRouter();

  const [form, setForm] = useState(userInfo);
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate required fields
  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "First Name is required";
    if (!form.street) newErrors.street = "Street Address is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    return newErrors;
  };

  // Place order handler
  const handlePlaceOrder = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      toast.error("⚠ Please fill in all required fields!", {
        position: "top-center",
        autoClose: 4000,
      });
      setErrors(formErrors);
      return;
    }

    const newOrder = placeOrder(form);

    if (!newOrder) {
      toast.error("⚠ Cannot place order. Your cart might be empty!", {
        position: "top-center",
        autoClose: 4000,
      });
      return;
    }

    setOrderPlaced(true);

    // Show success toast
    toast.success("✅ Your order has been placed successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Reset form
    setForm({
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      phone: "",
      email: "",
      notes: "",
    });

    setTimeout(() => {
      router.push("/order-status");
    }, 3000);
  };

  return (
    <Container>
      {/* Toast container */}
      <ToastContainer />

      {cartItems.length === 0 && !orderPlaced ? (
        <p className="text-center text-xl mt-20">
          Your cart is empty. Please add items to your cart before checking out.
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
    </Container>
  );
}
