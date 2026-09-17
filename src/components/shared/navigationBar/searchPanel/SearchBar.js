import { FaChevronDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="flex items-center bg-[#292D38] rounded-sm overflow-hidden">
      {/* Custom Dropdown */}
      <div className="relative inline-block">
        <select className="appearance-none text-sm bg-[#292D38] px-6 py-3 pr-10  border-r border-[#222222] outline-0 cursor-pointer">
          <option value="all-categories">All categories</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes </option>
          <option value="audi">Audi</option>
        </select>

        {/* Custom Arrow */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <FaChevronDown />
        </span>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for products..."
        className="min-w-[460px] bg-transparent text-white text-sm py-3 px-4 outline-none placeholder-gray-500"
      />

      {/* Search Button */}
      <button className="bg-[#776BF8] px-6 py-3 text-sm flex items-center gap-1 cursor-pointer">
        <IoSearchOutline className="text-lg" />
        Search
      </button>
    </div>
  );
}

export default SearchBar;
