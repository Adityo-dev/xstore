"use client";

import Container from "@/components/Container";
import { useCart } from "@/components/context/CartContext";
import Image from "next/image";
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
        {/* ORDERS */}
        <div className="bg-[#1E2129] p-4 rounded-lg">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-white">My Orders</h1>
            <p className="text-gray-400">Track and manage your order history</p>
          </div>

          {orders.length === 0 ? (
            <p className="text-gray-400">No orders yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-700 text-left text-nowrap">
                    <th className="py-3 px-4">ORDER ID</th>
                    <th className="py-3 px-4">DATE</th>
                    <th className="py-3 px-4">STATUS</th>
                    <th className="py-3 px-4">TOTAL</th>
                    <th className="py-3 px-4">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => (
                    <tr
                      key={order.id}
                      className={`border-b border-gray-800 hover:bg-[#1a1a1a] transition text-nowrap ${
                        i % 2 === 0 ? "bg-[#1E2129]" : "bg-[#1E2129]"
                      }`}
                    >
                      <td className="py-4 px-4 font-medium text-gray-200">
                        {order.id}
                      </td>
                      <td className="py-4 px-4 text-gray-400">{order.date}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-300 font-semibold">
                        ${order.total.toFixed(2)}
                      </td>
                      <td className="py-4 px-4">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="text-[#d8d6d8] hover:underline font-medium cursor-pointer"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* ===== ORDER DETAILS MODAL ===== */}
      {selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm px-4">
          <div className="bg-[#111] w-full max-w-2xl rounded-lg p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-3 right-3 text-[#776BF8] text-2xl cursor-pointer"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-white">
              Order Details — {selectedOrder.id}
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Placed on: {selectedOrder.date}
            </p>

            {/* CUSTOMER INFO */}
            <div className="bg-[#1E2129] p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3 text-white">
                Customer Information
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-400">Name</p>
                  <p className="font-medium">
                    {selectedOrder.customer.firstName}{" "}
                    {selectedOrder.customer.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="font-medium">
                    {selectedOrder.customer.phone || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-medium">
                    {selectedOrder.customer.email || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="font-medium">
                    {selectedOrder.customer.street},{" "}
                    {selectedOrder.customer.city}
                  </p>
                </div>
                {selectedOrder.customer.notes && (
                  <div className="md:col-span-2">
                    <p className="text-gray-400">Notes</p>
                    <p className="font-medium">
                      {selectedOrder.customer.notes}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* ORDER ITEMS */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                Ordered Products
              </h3>
              <div className="space-y-3">
                {selectedOrder.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-[#1E2129] p-3 rounded-md"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.cartImage.src}
                        alt={item.cartImage.alt}
                        width={50}
                        height={50}
                        className="rounded-md object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs text-gray-400">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold">
                      ${(item.salePrice * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center border-t border-gray-700 mt-5 pt-3 text-lg font-bold">
                <span>Total</span>
                <span>${selectedOrder.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
