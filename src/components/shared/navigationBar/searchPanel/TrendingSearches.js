const trendingTag = [
  {
    id: 1,
    name: "action",
  },
  {
    id: 2,
    name: "fight",
  },
  {
    id: 3,
    name: "strateg",
  },
  {
    id: 4,
    name: "Solitare",
  },
];

function TrendingSearches() {
  return (
    <div className="flex items-center gap-2">
      <p className="text-[1rem] text-[#99a1af] uppercase">
        Trending searches :
      </p>

      <ul className="flex items-center gap-2">
        {trendingTag.map((tag) => (
          <li
            key={tag?.id}
            className="bg-[#f3f3f3] text-[#222] px-3 py-0.5 text-sm font-medium capitalize cursor-pointer"
          >
            {tag?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingSearches;
