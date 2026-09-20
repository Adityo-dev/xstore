"use client";

import { useEffect, useState } from "react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import DotsSlider from "@/components/shared/DotsSlider/DotsSlider";
import BundleCard from "@/components/ui/cards/BundleCard";

function ComboOffers() {
  const [bundlePackages, setBundlePackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const res = await fetch("/data/combos.json");
        const data = await res.json();
        setBundlePackages(data);
      } catch (error) {
        console.error("Failed to fetch combos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCombos();
  }, []);

  if (loading || bundlePackages.length === 0) return null;

  return (
    <>
      <SectionHeader title={"Purchase in Bundle!"} btn={"View All Combos"} btnUrl="/combo-offers" />

      <Container>
        <DotsSlider
          data={bundlePackages}
          CardComponent={BundleCard}
          uniqueId="bundle-combos-slider"
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          speed={800}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
        />
      </Container>
    </>
  );
}

export default ComboOffers;
