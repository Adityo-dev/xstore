import Image from "next/image";
import Link from "next/link";

export default function EmptyCart({
  imageSrc = "/images/empty-cart.png", // default image
  alt = "Empty cart illustration",
  title = "Your cart is empty 🛒",
  message = "Looks like you haven’t added anything to your cart yet. Start shopping to add items!",
  btnText = "Go to Shop",
  onButtonClick = null, // optional callback
  href = "/shop", // fallback link if no button click
  suggestions = [], // optional { id, title, price, image }
}) {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20">
      {/* Image */}
      <div className="w-full max-w-sm mb-6">
        <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-[#111] flex items-center justify-center">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={alt}
              fill
              sizes="(max-width: 640px) 80vw, 420px"
              className="object-contain"
            />
          ) : (
            <div className="text-gray-500 text-sm">No image</div>
          )}
        </div>
      </div>

      {/* Title & Message */}
      <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-400 max-w-lg text-center mb-6">{message}</p>

      {/* Button */}
      <div className="flex items-center justify-center gap-3 mb-10">
        {onButtonClick ? (
          <button
            onClick={onButtonClick}
            className="px-6 py-3 rounded-xl bg-[#776BF8] text-black font-semibold hover:bg-[#5f53d1] transition-shadow shadow-md"
          >
            {btnText}
          </button>
        ) : (
          <Link
            href={href}
            className="px-6 py-3 rounded-xl bg-[#776BF8] text-black font-semibold hover:bg-[#5f53d1] transition-shadow shadow-md"
          >
            {btnText}
          </Link>
        )}

        <Link
          href="/"
          className="px-5 py-3 rounded-xl border border-gray-700 text-gray-200 hover:bg-[#0f0f0f] transition"
        >
          Continue browsing
        </Link>
      </div>

      {/* Optional suggestions */}
      {suggestions.length > 0 && (
        <div className="mt-4 w-full max-w-4xl">
          <h4 className="text-sm text-gray-300 font-medium mb-3 text-center">
            You might like
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {suggestions.map((p) => (
              <div
                key={p.id}
                className="bg-[#0f0f0f] p-3 rounded-lg flex flex-col gap-2 hover:scale-[1.02] transition"
              >
                <div className="relative w-full h-24 rounded-md overflow-hidden bg-gray-900">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 40vw, 150px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      No image
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-200 truncate">{p.title}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">
                    ${p.price?.toFixed(2) ?? "-"}
                  </p>
                  <button className="text-xs px-2 py-1 rounded bg-[#1b1b1b] hover:bg-[#262626] transition">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
