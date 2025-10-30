import Image from "next/image";

function BlogCard({ data }) {
  return (
    <div key={data?.id} className="w-full">
      <div className="relative w-full max-h-[250px] sm:max-h-[280px] md:max-h-[320px] h-full rounded-lg overflow-hidden">
        <Image
          src={data?.image}
          width={500}
          height={500}
          alt={data?.title}
          className="w-full h-full object-cover cursor-pointer hover:scale-110 transition duration-300"
        />
        <p className="absolute left-3 bottom-3 inline-block px-2 py-1 text-[.70rem] font-semibold bg-[#37a937] text-white rounded">
          {data?.tag}
        </p>
      </div>

      <h3 className="text-base sm:text-[17px] font-semibold font-marcellus mt-4 sm:mt-5">
        {data?.title}
      </h3>
    </div>
  );
}

export default BlogCard;
