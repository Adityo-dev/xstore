"use client";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="py-44 flex items-center justify-center">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-[#0f1724] via-[#0b0f1a] to-[#051024] rounded-lg shadow-lg overflow-hidden">
        {/* LEFT SIDE */}
        <div className="relative hidden md:flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="text-center space-y-6 p-8">
            <h2 className="text-2xl font-extrabold tracking-tight">X-Store</h2>

            <p className="max-w-xs text-sm text-[#B8C0D6]">
              Sign in to access your library and gamer rewards.
            </p>
            <Image
              src="/gifs/controller.gif"
              alt="controller"
              width={240}
              height={160}
              priority
              className="w-full h-fit rounded-lg"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2">Welcome back, Gamer</h3>
          <p className="text-sm text-[#9AA3C7] mb-6">
            Sign in to continue your journey
          </p>

          <form className="space-y-4">
            <label className="block">
              <span className="text-xs text-[#9AA3C7]">Email</span>
              <input
                type="email"
                required
                placeholder="you@game.com"
                className="mt-2 w-full bg-[#0b1220] border border-[#1f2a44] rounded-lg p-3 outline-none focus:border-[#776BF8] transition duration-300"
              />
            </label>

            <label className="block">
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#9AA3C7]">Password</span>
                <a href="#" className="text-xs hover:underline text-[#B8C0D6]">
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                required
                placeholder="Your password"
                className="mt-2 w-full bg-[#0b1220] border border-[#1f2a44] rounded-lg p-3 outline-none focus:border-[#776BF8] transition duration-300"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8] px-8 py-2 rounded-lg cursor-pointer text-[17px] font-semibold transition duration-300"
            >
              Sign in
            </button>
          </form>

          <p className="text-xs text-[#9AA3C7] text-center mt-4">
            Don’t have an account?{" "}
            <Link
              href="/account/register"
              className="font-semibold text-[#E6E9FF] hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
