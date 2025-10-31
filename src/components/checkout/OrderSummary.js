import Image from "next/image";

function OrderSummary({
  cartItems,
  totalPrice,
  updateItemQuantity,
  handlePlaceOrder,
  orderPlaced,
}) {
  return (
    <div className="bg-[#111] p-6 rounded-lg space-y-6">
      <h2 className="text-2xl font-semibold text-[#f5f5f5]">Your Order</h2>
      {cartItems.length === 0 && (
        <p className="text-gray-400 text-center mt-4">Your cart is empty.</p>
      )}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 bg-[#1a1a1a] p-3 rounded-lg shadow-inner"
          >
            <div className="flex items-center gap-3">
              <Image
                src={item.images[0].src}
                alt={item.images[0].alt || item.title}
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                    className="px-2 py-1 bg-[#2c2c2c] hover:bg-gray-700 rounded transition"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                    className="px-2 py-1 bg-[#2c2c2c] hover:bg-gray-700 rounded transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <p className="text-sm font-medium">
              ${(item.salePrice * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 pt-4 flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <div className="mt-4">
        <button
          onClick={handlePlaceOrder}
          className="w-full py-3 rounded-xl font-semibold text-black bg-[#776BF8] hover:bg-[#5f53d1] transition shadow-lg"
        >
          {orderPlaced ? "Order Placed!" : "Place Order"}
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
