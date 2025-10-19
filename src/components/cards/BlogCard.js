import Image from "next/image";

function BlogCard({ blog }) {
  return (
    <div key={blog?.id}>
      <div className="relative w-full max-h-[250px] h-full rounded-lg overflow-hidden">
        <Image
          src={blog?.image}
          width={500}
          height={500}
          alt={blog?.title}
          className="w-fit h-fit cursor-pointer hover:scale-110 transition duration-300"
        />
        <p className="absolute left-3 bottom-3 inline-block px-2 py-1 text-[.70rem] font-semibold bg-[#37a937] text-white rounded">
          {blog?.tag}
        </p>
      </div>
      <h3 className="text-xl font-semibold mt-5">{blog?.title}</h3>
    </div>
  );
}

export default BlogCard;
