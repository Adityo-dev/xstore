import Image from "next/image";
import Container from "@/components/shared/Container";
import DynamicActionButton from "@/components/shared/DynamicActionButton/DynamicActionButton";
import { FaCalendarAlt, FaShieldAlt } from "react-icons/fa";

function PreOrderBanner() {
  return (
    <Container>
      <div className="h-full min-h-[350px] md:min-h-[500px] bg-secondary-dark grid grid-cols-1 lg:grid-cols-12 items-center rounded-lg overflow-hidden relative">

        {/* Image Section */}
        <div className="col-span-1 lg:col-span-7 h-[250px] sm:h-[300px] md:h-[400px] lg:h-full">
          <Image
            src="/images/banner3.jpg"
            width={1500}
            height={600}
            alt="Upcoming Pre-order Hardware"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="col-span-1 lg:col-span-5 p-5 md:p-8 text-left">

          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary font-bold tracking-widest text-xs uppercase">
              Upcoming Pre-Order
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[30px] font-semibold font-marcellus text-white leading-snug">
            Next-Gen Gaming Console
          </h2>

          <p className="text-[#DBDCE1] text-base sm:text-[17px] leading-relaxed mt-4 mb-6">
            Experience the next evolution in gaming hardware. Pre-order now to guarantee your unit on launch day. Limited stock available!
          </p>

          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="flex items-center gap-2 text-sm text-[#DBDCE1]">
              <FaCalendarAlt className="text-primary" />
              <span>Releases Dec 2026</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#DBDCE1]">
              <FaShieldAlt className="text-primary" />
              <span>2 Year Warranty</span>
            </div>
          </div>

          <DynamicActionButton href="/pre-order" label="Pre-order Now" className="py-3" />
        </div>
      </div>
    </Container>
  );
}

export default PreOrderBanner;
