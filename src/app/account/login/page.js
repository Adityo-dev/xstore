"use client";
import CustomButton from "@/components/ui/buttons/CustomButton";
import InputField from "@/components/ui/InputField";
import Link from "next/link";
import AuthLeftPanel from "../AuthLeftPanel";

export default function LoginPage() {
  return (
    <div className="mb-16 md:mb-24 pt-32 xl:pt-44 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-[#0f1724] via-[#0b0f1a] to-[#051024] rounded-lg shadow-lg overflow-hidden">
        {/* LEFT SIDE */}
        <AuthLeftPanel
          title={"Sign in to access your library and gamer rewards."}
        />

        {/* RIGHT SIDE */}
        <div className="p-4 md:p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2">Welcome back, Gamer</h3>
          <p className="text-sm text-[#9AA3C7] mb-6">
            Sign in to continue your journey
          </p>

          <form className="space-y-4">
            <InputField
              title="Email"
              type="email"
              placeholder="you@game.com"
              isRequired={true}
            />

            <InputField
              title="Password"
              type="password"
              placeholder="Your password"
              isRequired={true}
            />

            <CustomButton className="w-full" type="submit">
              Sign in
            </CustomButton>
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
