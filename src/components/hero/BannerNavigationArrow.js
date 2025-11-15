function BannerNavigationArrow({ children, name, direction }) {
  return (
    <button
      className={`${name} absolute ${direction}-0 group-hover:${direction}-2 sm:group-hover:${direction}-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#FFFFFF38] hover:bg-[#ffffff60] text-white rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer`}
    >
      <div className="text-sm sm:text-lg">{children}</div>
    </button>
  );
}

export default BannerNavigationArrow;
