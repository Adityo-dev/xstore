import CustomButton from "../../ui/buttons/CustomButton";
import OrderItem from "./OrderItem";

function OrderSummary({
  cartItems,
  totalPrice,
  updateQuantity,
  handlePlaceOrder,
  orderPlaced,
}) {
  return (
    <div className="bg-[#1E2129] p-4 md:p-6 rounded-lg flex flex-col space-y-6">
      <h2 className="text-2xl font-semibold text-[#f5f5f5]">Your Order</h2>
      {cartItems.length === 0 && (
        <p className="text-gray-400 text-center mt-4">Your cart is empty.</p>
      )}

      <div className="space-y-4 flex-1 max-h-[350px] h-full overflow-y-auto custom-scrollbar">
        {cartItems.map((item) => (
          <OrderItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>

      <div className="border-t border-gray-700 pt-4 flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <CustomButton
        onClick={handlePlaceOrder}
        className="w-full block text-center"
      >
        {orderPlaced ? "Order Placed!" : "Place Order"}
      </CustomButton>
    </div>
  );
}

export default OrderSummary;
