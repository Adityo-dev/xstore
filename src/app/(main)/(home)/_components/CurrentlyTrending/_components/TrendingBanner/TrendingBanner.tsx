import Image from "next/image";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import GetStarRating from "@/components/ui/GetStarRating";
import DynamicActionButton from "@/components/shared/DynamicActionButton/DynamicActionButton";

interface TrendingBannerProps {
  product?: any;
}

function TrendingBanner({ product }: TrendingBannerProps) {
  const title = product?.title || "Razer Viper V3 Pro Esports Mouse";
  const category = (Array.isArray(product?.categories) && product.categories[0]) || product?.category || "Flagship Gear";
  const imgSrc = typeof product?.image === "string"
    ? product.image
    : (product?.cartImage?.src || "/images/banner2.png");
  const originalPrice = product?.originalPrice || product?.regularPrice || (product?.salePrice ? product.salePrice + 20 : null);
  const salePrice = product?.salePrice || 159.99;
  const href = product?.id ? `/game/${product.id}` : "/shop";

  const discountPercent =
    originalPrice && salePrice && originalPrice > salePrice
      ? Math.round(((originalPrice - salePrice) / originalPrice) * 100)
      : null;

  return (
    <div className="col-span-full md:col-span-4 xl:col-span-3 rounded-lg h-full min-h-[380px] md:min-h-0 overflow-hidden relative group border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-xl flex flex-col justify-between bg-secondary-dark">
      {/* Background Image Showcase */}
      {imgSrc && (
        <Image
          src={imgSrc}
          fill
          sizes="(max-width: 768px) 100vw, 350px"
          alt={title}
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
        />
      )}

      {/* Dark Gradient Overlays for perfect readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/70 to-black/40 pointer-events-none z-10" />

      {/* Top Badges */}
      <div className="relative z-20 flex items-center justify-between p-4 sm:p-5 w-full">
        <span className="bg-danger text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider shadow-lg">
          <FaFire className="text-yellow-300 animate-pulse" /> #1 TRENDING
        </span>

        {discountPercent && discountPercent > 0 && (
          <span className="bg-secondary text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded">
            SAVE {discountPercent}%
          </span>
        )}
      </div>

      {/* Bottom Content Spotlight Box */}
      <div className="relative z-20 p-4 sm:p-5 flex flex-col justify-end gap-2.5 w-full">
        {/* Category */}
        <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider">
          {category}
        </span>

        {/* Product Title */}
        <Link href={href}>
          <h3 className="text-base sm:text-lg lg:text-xl font-bold font-marcellus text-white leading-tight line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>

        {/* Star Rating & Sold count */}
        <div className="flex items-center gap-2 flex-wrap">
          <GetStarRating reviews={product?.reviews} />
          {product?.sold && (
            <span className="text-[11px] text-gray-300 font-semibold">
              ({product.sold}+ claimed)
            </span>
          )}
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 my-1">
          {originalPrice && originalPrice > salePrice && (
            <span className="line-through text-gray-400 text-xs sm:text-sm font-medium">
              ${originalPrice}
            </span>
          )}
          <span className="font-extrabold text-secondary text-xl sm:text-2xl tracking-tight">
            ${salePrice}
          </span>
        </div>

        {/* Action Button */}
        <DynamicActionButton href={href} label="Shop Deal Now" className="w-full justify-center text-center mt-1" />
      </div>
    </div>
  );
}

export default TrendingBanner;
