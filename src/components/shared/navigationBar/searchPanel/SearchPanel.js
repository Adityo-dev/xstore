import { RxCross1 } from "react-icons/rx";
import SearchBar from "./SearchBar";
import TrendingSearches from "./TrendingSearches";

function SearchPanel({ onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-[85vh] bg-[#222222] z-50 animate-slideDown flex flex-col p-[20px] text-white">
      {/* Close Button */}
      <button
        onClick={() => onClose(false)}
        className="absolute hover:rotate-90 right-[30px] top-[30px] cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-[#776BF8] transition duration-300"
      >
        <RxCross1 className="text-2xl " />
      </button>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center space-y-5">
        {/* Header Title */}
        <h3 className="text-[1.6rem] font-marcellus font-semibold text-white mb-6">
          What Are You Looking For?
        </h3>
        {/* Search bar */}
        <SearchBar />
        {/* Trending Searches Tag */}
        <TrendingSearches />
      </div>
    </div>
  );
}

export default SearchPanel;
