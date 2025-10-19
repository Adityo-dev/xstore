import Image from "next/image";
import Link from "next/link";

function LogoAndSubscription() {
  return (
    <>
      <Link href={"/"}>
        <Image
          src={"/logos/logo.png"}
          width={200}
          height={200}
          alt=""
          className="w-fit h-fit"
        />
      </Link>

      <p className="text-[17px] text-[#A9ABB2] font-semibold my-6 leading-relaxed">
        Get notified about new product, tips, updates, and tutorials. You can
        always unsubscribe. No spam.
      </p>
      <div className="flex">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full px-4 py-3 rounded-l bg-[#3F4555] border-[#3A3B45] outline-none"
        />
        <button className="px-6 py-3 bg-[#776BF8] text-white uppercase rounded-r font-semibold transition cursor-pointer">
          Subscribe
        </button>
      </div>
    </>
  );
}

export default LogoAndSubscription;
