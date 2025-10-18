"use client";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchPage from "./SearchPage";

function Search() {
  const [open, setOpen] = useState(false);

  const closeSearchPanel = (value) => {
    setOpen(value);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full flex items-center gap-2 cursor-pointer border-s border-[#FFFFFF24] pl-[20px] hover:text-[#776BF8] transition"
      >
        <IoSearchOutline className="text-2xl" />
        <p className="text-[17px] font-semibold">Search</p>
      </button>

      {/* Sliding Search Panel */}
      {open && <SearchPage onClose={closeSearchPanel} />}
    </>
  );
}

export default Search;
