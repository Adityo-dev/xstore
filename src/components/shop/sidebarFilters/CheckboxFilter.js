import Checkbox from "@/components/ui/Checkbox";
import { useState } from "react";

function CheckboxFilter({
  title,
  options = [],
  selectedValues,
  onUpdate,
  getLabel, // optional
  className = "",
}) {
  const [search, SetSearch] = useState("");

  const handleChange = (item, checked) => {
    const updated = checked
      ? [...selectedValues, item]
      : selectedValues.filter((v) => v !== item);

    onUpdate(updated);
  };

  const getItemLabel = (item) => {
    return typeof getLabel === "function" ? getLabel(item) : item;
  };

  //   filtered Options
  const filteredOptions = options.filter((item) =>
    getItemLabel(item).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={className}>
      {/* title */}
      {title && <h3 className="text-lg mb-2 mt-4">{title}</h3>}

      {/* search box */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => SetSearch(e.target.value)}
        className="
            w-full px-3 py-2 text-sm rounded-md border border-gray-600 
            bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500
            mb-3
          "
      />

      {/* data show */}
      <div className="w-full max-h-[300px] h-full overflow-y-auto custom-scrollbar">
        {filteredOptions.map((item) => (
          <Checkbox
            key={item}
            id={String(item)}
            label={getItemLabel(item)}
            checked={selectedValues.includes(item)}
            onChange={(e) => handleChange(item, e.target.checked)}
            className="mt-2"
          />
        ))}
      </div>
    </div>
  );
}

export default CheckboxFilter;
