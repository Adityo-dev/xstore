function TableHeader() {
  return (
    <div className="hidden md:grid grid-cols-[3fr_1fr_1fr_1fr_1fr] text-gray-400 text-sm border-b border-gray-700 pb-3 mb-3">
      <p>PRODUCT</p>
      <p>PRICE</p>
      <p>SKU</p>
      <p>QUANTITY</p>
      <p className="text-right">SUBTOTAL</p>
    </div>
  );
}

export default TableHeader;
