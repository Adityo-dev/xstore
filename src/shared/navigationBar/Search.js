import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div className="flex items-center gap-2 cursor-pointer border-s border-[#FFFFFF24] pl-[20px] hover:text-[#776BF8] transition">
      <IoSearchOutline className="text-2xl" />
      <p className="text-[17px] font-semibold">Search</p>
    </div>
  );
}

export default Search;
