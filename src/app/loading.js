import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6">
        <Image
          src="/gifs/loading.gif"
          alt="Loading..."
          width={192}
          height={192}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold animate-pulse">
        Loading...
      </p>
    </div>
  );
}
