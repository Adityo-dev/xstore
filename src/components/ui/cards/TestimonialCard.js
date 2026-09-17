import Image from "next/image";
import Link from "next/link";

function TestimonialCard({ data }) {
  return (
    <div className="bg-[#23262F] p-6 py-8 rounded-lg cursor-pointer">
      <div className="flex items-start gap-4">
        <Image
          src={data.image}
          alt={data.author}
          width={70}
          height={70}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div>
          <p className="text-white font-semibold md:text-[17px] leading-relaxed mb-3 line-clamp-3">
            {data.text}
          </p>
          <Link
            href={data.linkUrl}
            className="text-sm md:text-base text-[#776bf8] font-medium hover:underline"
          >
            {data.linkText}
          </Link>
          <p className="text-[#8E919F] md:text-[17px] font-medium mt-2">
            {data.author}s
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
