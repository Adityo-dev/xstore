function StepHeader() {
  return (
    <div className="flex justify-center items-center gap-8 mb-10 text-gray-300">
      <div className="flex items-center gap-2">
        <span className="w-8 h-8 rounded-full bg-white text-black text-sm font-bold flex items-center justify-center">
          1
        </span>
        <p className="text-sm tracking-wide">SHOPPING CART</p>
      </div>
      <div className="flex items-center gap-2 opacity-50">
        <span className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-sm">
          2
        </span>
        <p className="text-sm tracking-wide">CHECKOUT</p>
      </div>
      <div className="flex items-center gap-2 opacity-50">
        <span className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-sm">
          3
        </span>
        <p className="text-sm tracking-wide">ORDER STATUS</p>
      </div>
    </div>
  );
}

export default StepHeader;
