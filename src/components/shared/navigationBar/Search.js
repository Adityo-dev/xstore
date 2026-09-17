"use client";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchPanel from "./searchPanel/SearchPanel";

function Search() {
  const [openPanel, setOpenPanel] = useState(false);

  const closeSearchPanel = (value) => {
    setOpenPanel(value);
  };

  return (
    <>
      <button
        onClick={() => setOpenPanel(true)}
        className="w-full flex items-center gap-2 cursor-pointer border-s border-[#FFFFFF24] pl-[20px] hover:text-[#776BF8] transition"
      >
        <IoSearchOutline className="text-2xl" />
        <p className="text-[17px] font-semibold">Search</p>
      </button>

      {/* Sliding Search Panel */}
      {openPanel && <SearchPanel onClose={closeSearchPanel} />}
    </>
  );
}

export default Search;
