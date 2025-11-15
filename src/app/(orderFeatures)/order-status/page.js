"use client";

import Container from "@/components/Container";
import { useCart } from "@/components/context/CartContext";
import OrderDetailsModal from "@/components/orderFeatures/order-status/OrderDetailsModal";
import OrdersTable from "@/components/orderFeatures/order-status/OrdersTable";

import { useState } from "react";

export default function MyOrders() {
  const { orders } = useCart();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Completed":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <Container>
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="bg-[#1E2129] p-4 rounded-lg">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-white">My Orders</h1>
            <p className="text-gray-400">Track and manage your order history</p>
          </div>

          {orders.length === 0 ? (
            <p className="text-gray-400">No orders yet.</p>
          ) : (
            <OrdersTable
              orders={orders}
              getStatusColor={getStatusColor}
              onSelect={(o) => setSelectedOrder(o)}
            />
          )}
        </div>
      </div>

      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </Container>
  );
}
