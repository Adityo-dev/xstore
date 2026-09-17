import Image from "next/image";
import CustomButton from "@/components/ui/buttons/CustomButton";

interface HeroBannerProps {
  bannerImage?: string;
  subTitle?: string;
  title?: string;
  btn?: string;
  btnUrl?: string;
  data?: {
    bannerImage?: string;
    subTitle?: string;
    title?: string;
    btn?: string;
    btnUrl?: string;
  };
}

function HeroBanner(props: HeroBannerProps) {
  const bannerImage = props.bannerImage || props.data?.bannerImage || "";
  const subTitle = props.subTitle || props.data?.subTitle || "";
  const title = props.title || props.data?.title || "";
  const btn = props.btn || props.data?.btn || "";
  const btnUrl = props.btnUrl || props.data?.btnUrl || "#";

  return (
    <div className="relative w-full overflow-hidden rounded-lg min-h-[350px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[500px]">
      {/* Background Image */}
      {bannerImage && (
        <Image
          src={bannerImage}
          alt={title || "Banner"}
          width={1600}
          height={800}
          priority
          className="w-full h-full object-cover rounded-lg absolute inset-0"
        />
      )}

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full p-6 sm:p-10 md:p-12 lg:p-16 max-w-xl">
        {subTitle && (
          <p className="text-[#37A937] text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider mb-2 drop-shadow">
            {subTitle}
          </p>
        )}

        {title && (
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-snug drop-shadow-md mb-6 font-marcellus">
            {title}
          </h1>
        )}

        {btn && <CustomButton href={btnUrl}>{btn}</CustomButton>}
      </div>
    </div>
  );
}

export default HeroBanner;
