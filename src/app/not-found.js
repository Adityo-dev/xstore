import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <section className="container mx-auto px-2 min-h-[100vh] py-6 flex flex-col items-center justify-center text-center">
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src={"/gifs/404.gif"}
          width={300}
          height={300}
          alt="404 Error - The page you are looking for does not exist."
          className="max-w-[450px] w-full h-[350px]"
        />
      </div>
      <div className="space-y-4 px-4">
        <h2 className="text-2xl md:text-4xl font-marcellus">
          Oops! Page not found
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-[#8e919f]">
          Whoops, this is embarrassing. Looks like the page you were looking for
          was not found.
        </p>
      </div>

      <Link
        className="bg-[#776BF8] hover:bg-[#fff] hover:text-[#776BF8] px-8 py-2 rounded-lg cursor-pointer text-[17px] font-semibold transition duration-300 mt-6"
        href={"/shop"}
      >
        Go To Shop
      </Link>
    </section>
  );
}

export default NotFound;
