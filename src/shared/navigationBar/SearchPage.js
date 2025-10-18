import { IoClose } from "react-icons/io5";

function SearchPage({ onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-[85vh] bg-[#222222] z-50 animate-slideDown flex flex-col p-[30px]">
      <button
        onClick={() => onClose(false)}
        className="absolute right-[30px] cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-red-500"
      >
        <IoClose className="text-3xl" />
      </button>

      <div className="flex flex-col items-center justify-center">
        <h3 className="text-3xl font-semibold mb-[20px]">
          What Are You Looking For?
        </h3>
        <div className="flex items-center ">
          <select
            name="cars"
            id="cars"
            className="bg-[#292D38] px-6 w-full h-full border-r"
          >
            <option value="all-categories">All categories</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <input
            type="text"
            placeholder="Search for products..."
            className="min-w-[500px] bg-[#292D38] py-2.5 px-4 outline-none"
          />
          <button className="w-full h-full px-6 bg-[#776BF8]">Search</button>
        </div>
      </div>

      {/* Search Input */}
    </div>
  );
}

export default SearchPage;
