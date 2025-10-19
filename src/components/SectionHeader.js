import Link from "next/link";

function SectionHeader({ title, btn, btnUrl = "#" }) {
  return (
    <div className="container mx-auto flex items-center justify-between mb-9">
      {title && <h2 className="text-[30px] font-semibold">{title}</h2>}
      {btn && (
        <Link href={btnUrl}>
          <button className="bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8] px-8 py-2 rounded-lg cursor-pointer text-[17px] font-semibold transition duration-300">
            {btn}
          </button>
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
