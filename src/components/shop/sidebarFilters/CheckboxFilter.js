import Checkbox from "@/components/ui/Checkbox";
import InputField from "@/components/ui/InputField";
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
      {options.length > 10 ? (
        <InputField
          type="search"
          placeholder="Search..."
          value={search}
          onChange={SetSearch}
          className="py-2"
        />
      ) : null}

      {/* data show */}
      <div className="w-full max-h-[300px] h-full overflow-y-auto custom-scrollbar mt-2">
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
