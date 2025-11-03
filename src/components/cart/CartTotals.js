import CustomButton from "../ui/CustomButton";

function CartTotals({ totalPrice }) {
  return (
    <div className="bg-[#1E2129] p-4 md:p-6 rounded-lg h-fit">
      <h2 className="text-lg font-semibold mb-4">CART TOTALS</h2>
      <div className="flex justify-between text-gray-400 mb-4 border-b border-gray-700 pb-2">
        <p>Subtotal</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-xl font-semibold mb-6">
        <p>TOTAL</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
      <CustomButton
        href={"/checkout"}
        className="w-full block mb-3 text-center"
        hoverDefault={true}
      >
        Proceed to Checkout
      </CustomButton>
      <CustomButton href={"/shop"} className="w-full block text-center">
        Continue Shopping
      </CustomButton>
    </div>
  );
}

export default CartTotals;
