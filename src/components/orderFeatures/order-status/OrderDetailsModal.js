"use client";

import CustomerInfo from "./CustomerInfo";
import OrderedProducts from "./OrderedProducts";

export default function OrderDetailsModal({ order, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm px-4 z-[10000]">
      <div className="bg-[#111] w-full max-w-2xl rounded-lg p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#776BF8] text-2xl cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-white">
          Order Details — {order.id}
        </h2>

        <p className="text-gray-400 text-sm mb-6">Placed on: {order.date}</p>

        <CustomerInfo customer={order.customer} />
        <OrderedProducts items={order.items} total={order.total} />
      </div>
    </div>
  );
}
