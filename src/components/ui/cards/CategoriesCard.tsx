import { ReactNode } from "react";

interface CategoriesCardProps {
  data?: {
    icon?: ReactNode;
    name?: string;
    url?: string;
  };
}

function CategoriesCard({ data }: CategoriesCardProps) {
  return (
    <div className="flex items-center gap-2 border border-[#FFFFFF38] w-full p-4 rounded-lg cursor-pointer">
      <p className="text-[#776BF8] text-xl">{data?.icon}</p>
      <p className="text-lg font-semibold text-nowrap">{data?.name}</p>
    </div>
  );
}

export default CategoriesCard;
