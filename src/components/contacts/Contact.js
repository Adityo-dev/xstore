import Image from "next/image";
import Container from "../Container";
import ContactHeader from "./ContactHeader";
import ContactLocations from "./ContactLocations";
import Message from "./Message";

function Contact() {
  return (
    <Container className="mb-16 md:mb-24 pt-32 xl:pt-44 space-y-10 md:space-y-12 lg:space-y-20">
      <ContactHeader />

      <div className="relative space-y-10 md:space-y-12 lg:space-y-20">
        <Image
          src={"/images/contacts.png"}
          width={1600}
          height={600}
          alt=""
          className="w-full max-h-[550px] rounded-lg col-span-full"
        />

        <div className="hidden lg:block lg:absolute lg:right-12 bottom-0">
          <Message />
        </div>

        <ContactLocations />
        <div className="relative lg:hidden">
          <Message />
        </div>
      </div>
    </Container>
  );
}

export default Contact;
