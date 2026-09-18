import Image from "next/image";
import Link from "next/link";

interface TestimonialCardProps {
  data?: {
    id?: number | string;
    image?: string;
    text?: string;
    linkUrl?: string;
    linkText?: string;
    author?: string;
  };
}

function TestimonialCard({ data }: TestimonialCardProps) {
  return (
    <div className="bg-[#23262F] p-6 py-8 rounded-lg cursor-pointer">
      <div className="flex items-start gap-4">
        {data?.image && (
          <Image
            src={data.image}
            alt={data?.author || "Author"}
            width={70}
            height={70}
            className="w-12 h-12 rounded-lg object-cover"
          />
        )}
        <div>
          <p className="text-white font-semibold md:text-[17px] leading-relaxed mb-3 line-clamp-3">
            {data?.text}
          </p>
          {data?.linkUrl && data?.linkText && (
            <Link
              href={data.linkUrl}
              className="text-sm md:text-base text-primary font-medium hover:underline"
            >
              {data.linkText}
            </Link>
          )}
          <p className="text-[#8E919F] md:text-[17px] font-medium mt-2">
            {data?.author}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
