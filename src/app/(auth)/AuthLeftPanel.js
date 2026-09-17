import Image from "next/image";

function AuthLeftPanel({ title }) {
  return (
    <div className="relative hidden md:flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="text-center space-y-6 p-4 md:p-6">
        <h2 className="text-2xl font-extrabold tracking-tight">X-Store</h2>

        <p className="max-w-xs text-sm text-center text-[#B8C0D6]">{title}</p>

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
  );
}

export default AuthLeftPanel;
