"use client";

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchPanel from "./_components/SearchPanel/SearchPanel";

export default function Search(): React.JSX.Element {
  const [openPanel, setOpenPanel] = useState<boolean>(false);

  const closeSearchPanel = (value: boolean) => {
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
