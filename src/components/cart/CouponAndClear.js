function CouponAndClear({ onClearCart }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
      <div className="flex w-full md:w-auto">
        <input
          type="text"
          placeholder="Coupon code"
          className="bg-[#1a1a1a] border border-gray-700 text-gray-300 px-3 py-2 rounded-l-md w-full md:w-64 focus:outline-none"
        />
        <button className="bg-[#776BF8] px-5 rounded-r-md font-semibold">
          OK
        </button>
      </div>
      <button
        onClick={onClearCart}
        className="flex items-center gap-2 text-gray-300 border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-800 transition cursor-pointer"
      >
        🗑️ Clear Shopping Cart
      </button>
    </div>
  );
}

export default CouponAndClear;
