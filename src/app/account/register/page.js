"use client";
import CustomButton from "@/components/ui/buttons/CustomButton";
import InputField from "@/components/ui/InputField";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="mb-16 md:mb-24 pt-32 xl:pt-44 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-[#0f1724] via-[#0b0f1a] to-[#051024] rounded-lg shadow-lg overflow-hidden">
        {/* LEFT SIDE */}
        <div className="relative hidden md:flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="text-center space-y-6 p-4 md:p-6">
            <h2 className="text-2xl font-extrabold tracking-tight">X-Store</h2>

            <p className="max-w-xs text-sm text-[#B8C0D6]">
              Join the ultimate gaming community. Create your G-Store account!
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
        <div className="p-4 md:p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2">Create Account</h3>
          <p className="text-sm text-[#9AA3C7] mb-6">
            Fill in the details to start your adventure
          </p>

          <form className="space-y-4">
            <InputField
              title="Username"
              type="text"
              placeholder="gamer_tag_007"
            />
            <InputField title="Email" type="email" placeholder="you@game.com" />
            <InputField
              title="Password"
              type="password"
              placeholder="Your secure password"
            />

            <CustomButton className="w-full" type="submit">
              Register Now
            </CustomButton>
          </form>

          <p className="text-xs text-[#9AA3C7] text-center mt-4">
            Already have an account?{" "}
            <Link
              href="/account/login"
              className="font-semibold text-[#E6E9FF] hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
