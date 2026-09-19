import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded-lg text-[17px] font-semibold border transition duration-300 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-white hover:text-primary border-primary",
        primary: "bg-primary text-white hover:bg-white hover:text-primary border-primary",
        secondary: "bg-secondary text-white hover:bg-white hover:text-secondary border-secondary",
        white: "bg-white text-black hover:bg-primary hover:text-white border-white",
        light: "bg-white text-black hover:bg-primary hover:text-white border-white",
        outline: "bg-transparent text-primary hover:bg-primary hover:text-white border-primary",
        danger: "bg-red-600 text-white hover:bg-red-700 border-red-600",
        ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/10 border-transparent",
      },
      size: {
        default: "px-8 py-2.5",
        sm: "px-4 py-1.5 text-sm",
        lg: "px-10 py-3 text-lg",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
