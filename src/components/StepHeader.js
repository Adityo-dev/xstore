"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StepHeader() {
  const pathname = usePathname();

  const steps = [
    { id: 1, label: "SHOPPING CART", path: "/cart" },
    { id: 2, label: "CHECKOUT", path: "/checkout" },
    { id: 3, label: "ORDER STATUS", path: "/order-status" },
  ];

  return (
    <div className="flex justify-center items-center gap-8 mb-10 text-gray-300">
      {steps.map((step) => {
        const isActive = pathname === step.path;

        return (
          <div
            key={step.id}
            className={`flex items-center gap-2 transition-all ${
              isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
            }`}
          >
            {isActive ? (
              <span className="w-8 h-8 rounded-full bg-white text-black text-sm font-bold flex items-center justify-center">
                {step.id}
              </span>
            ) : (
              <Link href={step.path}>
                <span className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-sm">
                  {step.id}
                </span>
              </Link>
            )}

            {isActive ? (
              <p className="text-sm tracking-wide text-white font-semibold">
                {step.label}
              </p>
            ) : (
              <Link
                href={step.path}
                className="text-sm tracking-wide hover:text-white transition-colors"
              >
                {step.label}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
