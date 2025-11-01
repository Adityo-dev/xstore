import Image from "next/image";
import ContactLocations from "./ContactLocations";
import Message from "./Message";

function Contact() {
  return (
    <div className="container mx-auto px-4 pt-44 mb-24 space-y-20">
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <p className="text-[17px] text-[#776BF8] font-marcellus">
            24/7 Online Support
          </p>
          <h2 className="text-[50px] font-semibold font-marcellus leading-16 mt-3">
            Have questions? <br /> Ready to help!
          </h2>
        </div>
        <p className="col-span-2 text-[#8E919F] text-[17px] border-s-2 ps-8 border-[#776BF8] flex items-center">
          If you use this site regularly and would like to help keep the site on
          the Internet, please consider donating a small sum to help pay for the
          hosting and bandwidth bill.
        </p>
      </div>

      <div className="relative space-y-20">
        <Image
          src={"/images/contacts.png"}
          width={1600}
          height={600}
          alt=""
          className="w-full max-h-[550px] rounded-lg col-span-full"
        />

        <div className="absolute right-12 bottom-0">
          <Message />
        </div>
        <ContactLocations />
      </div>
    </div>
  );
}

export default Contact;
