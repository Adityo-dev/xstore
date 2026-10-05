import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import DynamicActionButton from "@/components/shared/DynamicActionButton/DynamicActionButton";
import {
  FiShield,
  FiZap,
  FiPackage,
  FiHeadphones,
  FiCheckCircle,
} from "react-icons/fi";

interface DifferenceItem {
  id: number;
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  specs: string[];
}

const differences: DifferenceItem[] = [
  {
    id: 1,
    icon: <FiShield className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />,
    badge: "100% Authentic",
    title: "Direct Brand Allocation",
    description:
      "Direct authorization from Razer, Sony, Keychron, and Alienware. Every box arrives factory-sealed with verifiable serial numbers.",
    specs: ["0.0% Counterfeit Risk", "Factory Sealed Tape", "Serial Traceable"],
  },
  {
    id: 2,
    icon: <FiZap className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />,
    badge: "Rapid RMA",
    title: "48-Hour Unit Replacement",
    description:
      "Never wait weeks for slow overseas factory repairs. If your hardware encounters a defect, we provide a quick 1-to-1 replacement.",
    specs: ["48-Hour Turnaround", "Zero Waiting Delays", "Up to 3-Yr Warranty"],
  },
  {
    id: 3,
    icon: <FiPackage className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />,
    badge: "Safe Transit",
    title: "Shockproof Air Packaging",
    description:
      "Curved OLEDs, custom keyboards, and studio microphones are packed in multi-chamber inflatable air cells tested against heavy drops.",
    specs: ["360° Air Cell Cushion", "Drop Tested to 1.5m", "Fully Insured Cargo"],
  },
  {
    id: 4,
    icon: <FiHeadphones className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />,
    badge: "Enthusiast Care",
    title: "24/7 Hardware Concierge",
    description:
      "Talk directly with real PC builders and audiophiles. Get free setup help with 8K polling rates, color calibration, and switch tuning.",
    specs: ["< 2 Min Response", "Setup Tuning Help", "Lifetime Enthusiast Care"],
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full">
      {/* Project standard SectionHeader */}
      <SectionHeader
        title="The xstore Difference"
        btn="About Our Standards"
        btnUrl="/about-us"
      />

      <Container className="space-y-6">
        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differences.map((item) => (
            <div
              key={item.id}
              className="bg-secondary-dark border border-white/10 hover:border-primary/50 rounded-xl p-6 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-primary-dark flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white font-marcellus leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Spec Checklist Pills */}
              <div className="mt-5 pt-4 border-t border-white/5 space-y-1.5">
                {item.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-xs text-gray-300 bg-primary-dark/80 px-2.5 py-1.5 rounded border border-white/5"
                  >
                    <FiCheckCircle className="text-secondary shrink-0 text-xs" />
                    <span className="truncate">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner matching project standard */}
        <div className="bg-secondary-dark border border-white/10 rounded-xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-lg md:text-xl font-semibold text-white font-marcellus">
              100% Genuine Tech · Official Warranty · Zero Gray Market Uncertainty
            </h4>
            <p className="text-sm text-gray-400">
              Every gadget is backed by verified manufacturer warranties and delivered in military-grade shockproof packaging.
            </p>
          </div>

          <div className="shrink-0">
            <DynamicActionButton
              href="/shop"
              label="Explore Authentic Hardware"
              className="text-sm px-6 py-2.5"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
