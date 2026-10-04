import { ReactNode } from "react";
import Link from "next/link";

interface CategoriesCardProps {
  data?: {
    icon?: ReactNode;
    name?: string;
    url?: string;
  };
}

function CategoriesCard({ data }: CategoriesCardProps) {
  const content = (
    <div className="flex items-center gap-2.5 sm:gap-3 border border-white/20 hover:border-primary/50 bg-secondary-dark/60 hover:bg-secondary-dark transition-all duration-300 w-full min-h-[54px] sm:min-h-[62px] md:min-h-[68px] px-3.5 sm:px-4 md:px-5 py-3 sm:py-4 rounded-lg cursor-pointer group shadow-sm">
      <span className="text-[#776BF8] text-lg sm:text-xl md:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
        {data?.icon}
      </span>
      <span className="text-sm sm:text-base md:text-lg font-semibold truncate group-hover:text-primary transition-colors">
        {data?.name}
      </span>
    </div>
  );

  if (data?.url) {
    return (
      <Link href={data.url} className="block w-full">
        {content}
      </Link>
    );
  }

  return content;
}

export default CategoriesCard;
