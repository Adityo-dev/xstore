import Image from "next/image";

function ImageCart({ data }) {
  return (
    <div className="overflow-hidden rounded-lg">
      <Image
        src={data?.src}
        alt={data?.alt || "Game Image"}
        width={1000}
        height={600}
        className="w-full h-auto object-contain rounded-lg"
      />
    </div>
  );
}

export default ImageCart;
