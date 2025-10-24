function CartTotals({ subtotal }) {
  return (
    <div className="bg-[#111] p-6 rounded-lg h-fit">
      <h2 className="text-lg font-semibold mb-4">CART TOTALS</h2>
      <div className="flex justify-between text-gray-400 mb-4 border-b border-gray-700 pb-2">
        <p>Subtotal</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-xl font-semibold mb-6">
        <p>TOTAL</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <button className="w-full bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8] px-8 py-2.5 rounded-lg cursor-pointer text-[17px] font-semibold transition duration-300 mb-3">
        Proceed To Checkout
      </button>
      <button className="w-full bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8] px-8 py-2.5 rounded-lg cursor-pointer text-[17px] font-semibold transition duration-300">
        Continue Shopping
      </button>
    </div>
  );
}

export default CartTotals;
