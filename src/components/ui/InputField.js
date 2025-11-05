function InputField({
  title,
  type = "text",
  placeholder,
  isRequired = false,
  value,
  onChange,
  className,
}) {
  return (
    <div>
      <label className="block">
        {title && <span className="text-xs text-[#9AA3C7]">{title}</span>}
        <input
          type={type}
          required={isRequired}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-[#0b1220] border border-[#1f2a44] rounded-lg p-3 outline-none focus:border-[#776BF8] transition duration-300 ${
            className || ""
          }`}
        />
      </label>
    </div>
  );
}

export default InputField;
