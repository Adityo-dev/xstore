"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaCheck,
} from "react-icons/fa";
import {
  FiShoppingBag,
  FiShield,
  FiTruck,
  FiZap,
  FiHeart,
  FiShare2,
  FiCheckCircle,
  FiRefreshCw,
} from "react-icons/fi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import Container from "@/components/shared/Container";
import { useModal } from "@/context/ModalContext";
import { useCart } from "@/context/CartContext";
import GetStarRating from "@/components/ui/GetStarRating";
import DynamicActionButton from "@/components/shared/DynamicActionButton/DynamicActionButton";
import Info from "./_components/Info/Info";

interface SinglePageProps {
  data: any;
}

export default function SinglePage({ data }: SinglePageProps) {
  const { addToCart } = useCart();
  const { openModal } = useModal();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "requirements" | "reviews" | "shipping">("overview");
  const [selectedColor, setSelectedColor] = useState<string>("Matte Black");
  const [selectedPlatform, setSelectedPlatform] = useState<string>(data?.platform?.[0] || "PC");
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  const handleAddToCart = () => {
    if (!data) return;
    const itemWithQty = {
      ...data,
      quantity,
      selectedColor,
      selectedPlatform,
    };
    addToCart(itemWithQty);

    openModal({
      view: "CART_DRAWER",
      layout: "DRAWER",
      position: "right",
      title: "🛒 Your Cart",
      data: itemWithQty,
    });
  };

  const totalSeconds = 50 * 60 * 60;
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

  const isOutOfStock = data?.stock === 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(secondsLeft / (24 * 3600));
  const hours = Math.floor((secondsLeft % (24 * 3600)) / 3600);
  const mins = Math.floor((secondsLeft % 3600) / 60);
  const secs = secondsLeft % 60;
  const timeLeft = { days, hours, mins, secs };

  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => Math.max(1, q - 1));

  const originalPrice = data?.originalPrice || data?.regularPrice || (data?.salePrice ? data.salePrice + 20 : null);
  const discountPercent =
    originalPrice && data?.salePrice && originalPrice > data.salePrice
      ? Math.round(((originalPrice - data.salePrice) / originalPrice) * 100)
      : null;

  const productImages = Array.isArray(data?.images) && data.images.length > 0
    ? data.images.map((img: any, idx: number) => typeof img === "string" ? { id: idx, src: img, alt: data?.title } : img)
    : data?.image ? [{ id: 0, src: data.image, alt: data?.title }] : [];

  const categories = (Array.isArray(data?.categories) && data.categories) || [data?.category || data?.genre || "Gaming Gear"];
  const isGameProduct = categories.some((c: string) => /game|console|pc|edition/i.test(c));

  return (
    <Container className="space-y-12 sm:space-y-16">
      {/* Original Two-Column Hero Layout */}
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
        {/* LEFT CONTENT (Sticky Text & Purchase Zone) */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-44">
          <h1 className="text-[26px] md:text-[38px] font-semibold leading-tight text-white">
            {data?.title}
          </h1>
          {data?.subtitle && (
            <p className="text-gray-400 font-semibold text-lg mt-3">
              {data?.subtitle}
            </p>
          )}

          {/* Rating */}
          <div className="flex items-center gap-3 my-3">
            <GetStarRating reviews={data?.reviews} />
            <span className="text-xs sm:text-sm font-semibold text-gray-300">
              ({data?.reviews?.length || 12} Verified Reviews)
            </span>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-3 my-3 text-[30px]">
            {originalPrice && originalPrice > data?.salePrice && (
              <span className="line-through text-gray-400">
                ${originalPrice}
              </span>
            )}
            <span className="font-semibold text-secondary">
              ${data?.salePrice}
            </span>

            {discountPercent && discountPercent > 0 && (
              <span className="text-xs font-bold text-danger bg-danger/10 px-2.5 py-1 rounded">
                SAVE {discountPercent}%
              </span>
            )}
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Tax included. Free Express Shipping available.
          </p>

          {/* Timer */}
          <div className="my-4">
            <p className="text-danger font-semibold flex items-center mb-3 text-sm sm:text-base">
              🚨 Limited Time Offer
            </p>
            <div className="flex gap-3 text-center">
              {["DAYS", "HOURS", "MINS", "SECS"].map((label, idx) => (
                <div key={idx} className="bg-secondary-dark border border-white/10 px-4 py-2 rounded-md w-20">
                  <p className="text-2xl font-bold text-white">
                    {Object.values(timeLeft)[idx].toString().padStart(2, "0")}
                  </p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sold / Stock Progress */}
          {data?.sold != null && (
            <div className="my-4">
              <div className="flex justify-between text-sm text-gray-400 py-2 font-medium">
                <span>Units Sold: <b className="text-white">{data?.sold}</b></span>
                <span>Stock: <b className={isOutOfStock ? "text-danger" : "text-secondary"}>{isOutOfStock ? "Out of Stock" : "In Stock"}</b></span>
              </div>
              <div className="h-2 bg-secondary-dark rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full bg-secondary rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(100, Math.max(15, (data.sold / ((data.sold + (data.stock || 50))) * 100)))}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Color Selector */}
          {!isGameProduct && (
            <div className="my-4">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-2">
                Color Option: <span className="text-primary font-bold">{selectedColor}</span>
              </label>
              <div className="flex gap-2 flex-wrap">
                {["Matte Black", "Glacier White", "Cyber RGB Edition"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3.5 py-1.5 rounded text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${selectedColor === color
                      ? "border-primary bg-primary/20 text-white"
                      : "border-white/15 bg-secondary-dark text-gray-400 hover:border-white/30 hover:text-white"
                      }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Platform Selector */}
          {data?.platform && (
            <div className="my-4">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-2">
                Platform: <span className="text-primary font-bold">{selectedPlatform}</span>
              </label>
              <div className="flex gap-2 flex-wrap">
                {(Array.isArray(data.platform) ? data.platform : [data.platform]).map((plat: string) => (
                  <button
                    key={plat}
                    onClick={() => setSelectedPlatform(plat)}
                    className={`px-3.5 py-1.5 rounded text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${selectedPlatform === plat
                      ? "border-primary bg-primary/20 text-white"
                      : "border-white/15 bg-secondary-dark text-gray-400 hover:border-white/30 hover:text-white"
                      }`}
                  >
                    {plat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-gray-400 leading-relaxed text-[17px] mt-4">
            {data?.description}
          </p>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-wrap items-center gap-3 py-6">
            <div className="flex items-center bg-[#1f1f1f] border border-[#333] rounded">
              <button
                onClick={handleDecrease}
                className="px-3 py-2.5 text-gray-300 hover:text-primary transition cursor-pointer disabled:opacity-40"
                disabled={isOutOfStock}
              >
                <IoMdRemove size={18} />
              </button>
              <span className="px-3 select-none text-white font-bold">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-3 py-2.5 text-gray-300 hover:text-primary transition cursor-pointer disabled:opacity-40"
                disabled={isOutOfStock}
              >
                <IoMdAdd size={18} />
              </button>
            </div>

            {/* Add To Cart Button */}
            <DynamicActionButton
              label={isOutOfStock ? "Out of Stock" : "Add To Cart"}
              onClick={handleAddToCart}
              disabled={isOutOfStock}
              icon={FiShoppingBag}
              showIcon={true}
            />

            {/* Buy Now Button */}
            {!isOutOfStock && (
              <DynamicActionButton
                href="/checkout"
                label="Buy Now"
                variant="secondary"
              />
            )}

            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-3 rounded border transition cursor-pointer ${isWishlisted
                ? "bg-danger/20 border-danger text-danger"
                : "bg-secondary-dark border-white/15 text-gray-400 hover:text-white"
                }`}
              title="Wishlist"
            >
              <FiHeart size={20} className={isWishlisted ? "fill-danger" : ""} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-secondary-dark/60 border border-white/10 p-3.5 rounded-lg text-center my-4">
            <div className="flex flex-col items-center gap-1 p-1">
              <FiShield className="text-primary text-lg" />
              <span className="text-[11px] font-semibold text-white">100% Genuine</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-1">
              <FiTruck className="text-secondary text-lg" />
              <span className="text-[11px] font-semibold text-white">Express Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-1">
              <FiZap className="text-yellow-400 text-lg" />
              <span className="text-[11px] font-semibold text-white">Instant Access</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-1">
              <FiRefreshCw className="text-primary text-lg" />
              <span className="text-[11px] font-semibold text-white">7-Day Return</span>
            </div>
          </div>

          {/* Info Section */}
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <Info label="Categories" values={data?.categories || data?.genre} />
            <Info label="Compatibility" values={data?.platform} />
            {data?.badge && <Info label="Badge" values={[data?.badge]} />}
            <Info label="Stock Status" values={[isOutOfStock ? "Out of Stock" : "In Stock"]} />
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-4 mt-8 pt-4 border-t border-white/10">
            <p className="text-gray-400 text-sm font-semibold uppercase flex items-center gap-1.5">
              <FiShare2 /> Share
            </p>
            <div className="flex items-center space-x-3 text-lg text-white">
              {[FaFacebook, FaInstagram, FaYoutube, FaTelegramPlane].map((Icon, i) => (
                <Icon key={i} className="hover:text-primary cursor-pointer transition" />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT (Original Stacked Image Column) */}
        <div className="w-full lg:w-1/2 space-y-4">
          {productImages.map((image: any) => (
            <div
              key={image?.id || image?.src}
              className="w-full aspect-[4/3] relative rounded-lg overflow-hidden bg-secondary-dark border border-white/10 group"
            >
              <Image
                src={image?.src}
                fill
                alt={image?.alt || "product image"}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tabs Section: Overview, Technical Specs, System Requirements, Reviews, Shipping */}
      <div className="bg-secondary-dark border border-white/10 rounded-xl p-4 sm:p-6 lg:p-8 shadow-xl mt-12">
        {/* Tab Header Navigation */}
        <div className="flex items-center gap-2 sm:gap-4 border-b border-white/10 overflow-x-auto pb-3 mb-6 custom-scrollbar">
          {[
            { id: "overview", label: "Product Overview" },
            { id: "specs", label: "Technical Specs" },
            { id: "requirements", label: "System Requirements" },
            { id: "reviews", label: `Reviews (${data?.reviews?.length || 0})` },
            { id: "shipping", label: "Shipping & Returns" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-semibold text-nowrap transition-all cursor-pointer ${activeTab === tab.id
                ? "bg-primary text-white shadow-md"
                : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className="text-sm sm:text-base leading-relaxed text-gray-300 min-h-[200px]">
          {/* TAB 1: Overview */}
          {activeTab === "overview" && (
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold font-marcellus text-white mb-3">
                {data?.title} — Product Highlights
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {data?.description || "Engineered to deliver flagship performance for serious gamers and creators."}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                {[
                  "Pro-Grade Flagship Performance & Low Latency",
                  "Ergonomic Durable Contour Crafted for Extended Sessions",
                  "RGB Customization Sync Support",
                  "Multi-Device Universal Platform Compatibility",
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-primary-dark/60 border border-white/5 p-3 rounded-lg">
                    <FiCheckCircle className="text-secondary shrink-0 text-base mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-white">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Technical Specs */}
          {activeTab === "specs" && (
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold font-marcellus text-white mb-4">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { label: "Sensor / Chipset", value: "Flagship Optical Gen-2 (35,000 DPI)" },
                  { label: "Polling Rate", value: "True 8,000Hz Response Rate" },
                  { label: "Switch Type", value: "Optical Switches (90 Million Clicks)" },
                  { label: "Battery Life", value: "Up to 95 Hours Continuous Play" },
                  { label: "Weight", value: "Ultra-lightweight 54g" },
                  { label: "Connectivity", value: "2.4GHz Wireless + USB-C" },
                  { label: "Warranty", value: "1-Year Official Warranty" },
                ].map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-primary-dark/60 border border-white/5 p-3 rounded-lg text-xs sm:text-sm">
                    <span className="text-gray-400 font-semibold">{spec.label}</span>
                    <span className="text-white font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: System Requirements */}
          {activeTab === "requirements" && (
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold font-marcellus text-white mb-4">
                System Compatibility
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary-dark/60 border border-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">Minimum Requirements</h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
                    <li><b>OS:</b> Windows 10 64-bit / macOS 12+</li>
                    <li><b>Processor:</b> Intel Core i5 / AMD Ryzen 5</li>
                    <li><b>Memory:</b> 8 GB RAM</li>
                    <li><b>Graphics:</b> GTX 1060 / RX 580</li>
                  </ul>
                </div>

                <div className="bg-primary-dark/60 border border-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-secondary text-sm uppercase tracking-wider mb-2">Recommended Requirements</h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
                    <li><b>OS:</b> Windows 11 64-bit</li>
                    <li><b>Processor:</b> Intel Core i7 / AMD Ryzen 7</li>
                    <li><b>Memory:</b> 16 GB RAM</li>
                    <li><b>Graphics:</b> RTX 4070 / RX 7800 XT</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Customer Reviews */}
          {activeTab === "reviews" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-primary-dark/60 border border-white/5 p-4 rounded-lg">
                <div>
                  <h3 className="text-xl font-bold text-white">4.9 / 5.0 Rating</h3>
                  <GetStarRating reviews={data?.reviews} />
                </div>
                <button className="bg-primary hover:bg-white hover:text-primary text-white font-semibold text-xs sm:text-sm py-2 px-4 rounded transition cursor-pointer">
                  Write Review
                </button>
              </div>

              <div className="space-y-3">
                {(data?.reviews || [
                  { id: 1, user: "Alex G.", rating: 5, comment: "Awesome product and fast delivery!" },
                  { id: 2, user: "Sarah M.", rating: 5, comment: "High quality build. Highly recommended!" },
                ]).map((rev: any, idx: number) => (
                  <div key={idx} className="bg-primary-dark/40 border border-white/5 p-3.5 rounded-lg space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{rev.user}</span>
                      <span className="text-xs text-secondary font-semibold flex items-center gap-1">
                        <FaCheck /> Verified Buyer
                      </span>
                    </div>
                    <GetStarRating reviews={[{ rating: rev.rating }]} />
                    <p className="text-xs sm:text-sm text-gray-300">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: Shipping & Returns */}
          {activeTab === "shipping" && (
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-primary-dark/60 border border-white/5 p-4 rounded-lg">
                <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                  <FiTruck className="text-secondary" /> Shipping Policy
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  Dispatched within 24 hours. Free express shipping on orders over $50.
                </p>
              </div>

              <div className="bg-primary-dark/60 border border-white/5 p-4 rounded-xl">
                <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                  <FiShield className="text-primary" /> Warranty & Returns
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  Includes 1-Year Official Warranty. 7-day hassle-free replacement guarantee.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
