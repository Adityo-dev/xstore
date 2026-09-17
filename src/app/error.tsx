"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center text-center px-4 space-y-4">
      <h2 className="text-2xl font-bold text-red-500">Something went wrong!</h2>
      <p className="text-gray-300 max-w-md">
        {error?.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-[#776BF8] hover:bg-white hover:text-[#776BF8] text-white font-semibold rounded-lg transition duration-300 cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
