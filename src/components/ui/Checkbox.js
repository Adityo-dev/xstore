"use client";

export default function Checkbox({
  id,
  label,
  checked,
  onChange,
  className = "",
}) {
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-2 cursor-pointer select-none ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        className="peer hidden"
        checked={checked}
        onChange={onChange}
      />

      <span
        className="
          w-4 h-4 border border-[#3d3d3d] flex items-center justify-center
          peer-checked:border-[#776BF8]
          peer-checked:bg-[#776BF8]
          after:content-['✔']
          after:text-[#fff]
          after:text-[10px]
          after:hidden
          peer-checked:after:inline-block
          transition-all
        "
      ></span>

      {label && <span className="text-sm">{label}</span>}
    </label>
  );
}
