"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error Boundary caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[#090d16] text-white min-h-screen flex items-center justify-center p-4">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-3xl font-bold text-red-500">Application Error</h2>
          <p className="text-gray-300">
            {error?.message || "A critical error occurred."}
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-[#776BF8] hover:bg-white hover:text-[#776BF8] text-white font-semibold rounded-lg transition duration-300 cursor-pointer"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
