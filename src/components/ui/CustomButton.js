import Link from "next/link";

function CustomButton({
  children,
  href,
  className,
  type = "button",
  hoverDefault = false,
  onClick,
}) {
  const baseClass = `${
    hoverDefault
      ? "bg-[#fff] text-[#000]"
      : "bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8]"
  } px-8 py-2.5 rounded-lg cursor-pointer text-[17px] font-semibold transition duration-300`;

  if (href) {
    return (
      <Link className={`${baseClass} ${className}`} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${baseClass} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CustomButton;
