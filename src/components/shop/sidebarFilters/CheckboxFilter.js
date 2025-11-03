import Checkbox from "@/components/ui/Checkbox";

function CheckboxFilter({
  title,
  options = [],
  selectedValues,
  onUpdate,
  getLabel, // optional
  className = "",
}) {
  const handleChange = (item, checked) => {
    const updated = checked
      ? [...selectedValues, item]
      : selectedValues.filter((v) => v !== item);

    onUpdate(updated);
  };

  const getItemLabel = (item) => {
    return typeof getLabel === "function" ? getLabel(item) : item;
  };

  return (
    <div className={className}>
      {title && <h3 className="text-lg mb-2 mt-4">{title}</h3>}

      <div className="w-full max-h-[300px] h-full overflow-y-auto custom-scrollbar">
        {options.map((item) => (
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
