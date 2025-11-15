"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [orders, setOrders] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCartItems(JSON.parse(savedCart));

    const savedUser = localStorage.getItem("userInfo");
    if (savedUser) setUserInfo(JSON.parse(savedUser));

    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) setOrders(JSON.parse(savedOrders));
  }, []);

  // Persist changes
  useEffect(
    () => localStorage.setItem("cart", JSON.stringify(cartItems)),
    [cartItems]
  );
  useEffect(
    () => localStorage.setItem("userInfo", JSON.stringify(userInfo)),
    [userInfo]
  );
  useEffect(
    () => localStorage.setItem("orders", JSON.stringify(orders)),
    [orders]
  );

  // ====== CART FUNCTIONS ======
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      const qtyToAdd = product.quantity || 1; // respect passed quantity
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qtyToAdd }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: qtyToAdd }];
      }
    });
  };

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) quantity = 1;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  // ====== TOTALS ======
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.salePrice * item.quantity,
    0
  );

  // ====== CHECKOUT / ORDERS ======
  const updateUserInfo = (info) => setUserInfo(info);

  const placeOrder = (customerInfo = userInfo) => {
    if (cartItems.length === 0) return null;

    const newOrder = {
      id: `#ORD-${Math.floor(Math.random() * 10000)}`,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      status: "Processing",
      items: cartItems,
      total: totalPrice,
      customer: customerInfo,
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    setUserInfo(customerInfo);
    return newOrder;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        userInfo,
        updateUserInfo,
        orders,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
