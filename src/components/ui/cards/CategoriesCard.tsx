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
    <div className="flex items-center gap-2 sm:gap-2.5 border border-white/20 hover:border-primary/50 bg-secondary-dark/40 hover:bg-secondary-dark transition-all duration-300 w-full px-2.5 py-2.5 sm:px-4 sm:py-3.5 rounded-lg cursor-pointer group">
      <p className="text-[#776BF8] text-base sm:text-lg md:text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
        {data?.icon}
      </p>
      <p className="text-xs sm:text-sm md:text-base font-semibold truncate group-hover:text-primary transition-colors">
        {data?.name}
      </p>
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
