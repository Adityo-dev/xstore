import Link from "next/link";
import { ReactNode, MouseEventHandler } from "react";

interface CustomButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  hoverDefault?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

function CustomButton({
  children,
  href,
  className = "",
  type = "button",
  hoverDefault = false,
  onClick,
}: CustomButtonProps) {
  const baseClass = `${
    hoverDefault
      ? "bg-white text-black"
      : "bg-primary hover:bg-white hover:text-primary text-white"
  } px-8 py-2.5 rounded-lg cursor-pointer text-[17px] font-semibold transition duration-300`;

  if (href) {
    return (
      <Link className={`${baseClass} ${className}`} href={href} onClick={onClick}>
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
