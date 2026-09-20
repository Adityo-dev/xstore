"use client";

import Container from "@/components/shared/Container";
import BundleCard, { BundlePackage } from "@/components/ui/cards/BundleCard";
import CheckboxFilter from "../shop/_components/SidebarFilters/CheckboxFilter";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, ChangeEvent } from "react";

export default function ComboOffersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const query = Object.fromEntries(searchParams.entries());

  // States
  const [combos, setCombos] = useState<BundlePackage[]>([]);
  const [filteredCombos, setFilteredCombos] = useState<BundlePackage[]>([]);
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: query.max_price ? parseInt(query.max_price) : 2000,
  });
  const [categoryFilter, setCategoryFilter] = useState<string[]>(
    query.category ? query.category.split(",") : []
  );
  const [availabilityFilter, setAvailabilityFilter] = useState<string[]>(
    query.availability ? query.availability.split(",") : []
  );
  const [sortBy, setSortBy] = useState(query.sort_by || "default");
  const [currentPage, setCurrentPage] = useState(
    query.page ? parseInt(query.page) : 1
  );

  const itemsPerPage = 6; // BundleCards are large, so 6 per page is good

  // Fetch combos
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data/combos.json");
        if (!res.ok) throw new Error("Failed to fetch combos");
        const data = await res.json();
        setCombos(data);
        setFilteredCombos(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Dynamic categories (extract from all item categories)
  const allCategories = [
    ...new Set(combos.flatMap((c) => c.categories || [])),
  ];

  // Update URL helper
  const updateURL = (params: Record<string, any>) => {
    const updated = new URLSearchParams(searchParams.toString());
    Object.entries(params).forEach(([key, value]) => {
      if (
        !value ||
        (Array.isArray(value) && value.length === 0) ||
        (key === "page" && value === 1)
      ) {
        updated.delete(key);
      } else {
        updated.set(key, Array.isArray(value) ? value.join(",") : value);
      }
    });
    router.push(`/combo-offers?${updated.toString()}`, { scroll: false });
  };

  // Filtering & Sorting
  useEffect(() => {
    if (!combos.length) return;

    let filtered = [...combos].filter((combo) => {
      const priceOK =
        combo.bundlePrice >= priceRange.min &&
        combo.bundlePrice <= priceRange.max;

      const categoryOK =
        categoryFilter.length === 0 ||
        categoryFilter.some((c) => combo.categories?.includes(c));

      const availabilityOK = (() => {
        if (!availabilityFilter.length) return true;
        if (availabilityFilter.includes("in_stock") && (combo.stock || 0) > 0)
          return true;
        if (availabilityFilter.includes("out_of_stock") && (combo.stock || 0) <= 0)
          return true;
        return false;
      })();

      return priceOK && categoryOK && availabilityOK;
    });

    // Sorting
    if (sortBy === "highestSavings") {
      filtered.sort((a, b) => b.savings - a.savings);
    } else if (sortBy === "priceLowToHigh") {
      filtered.sort((a, b) => a.bundlePrice - b.bundlePrice);
    } else if (sortBy === "priceHighToLow") {
      filtered.sort((a, b) => b.bundlePrice - a.bundlePrice);
    }

    setFilteredCombos(filtered);
    setCurrentPage(1);
  }, [
    combos,
    priceRange,
    categoryFilter,
    availabilityFilter,
    sortBy,
  ]);

  // Pagination
  const totalPages = Math.ceil(filteredCombos.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentCombos = filteredCombos.slice(
    startIdx,
    startIdx + itemsPerPage
  );

  const paginate = (page: number) => {
    setCurrentPage(page);
    updateURL({ page });
  };

  // Smooth scroll on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <Container className="mb-16 md:mb-24 pt-32 xl:pt-44">

      {/* Page Header */}
      <div className="mb-8 md:mb-12 border-b border-white/10 pb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
          Combo Offers & Bundles
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Level up your gear and save big with our exclusive product combos. Handpicked bundles for the ultimate setup.
        </p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <div className="max-w-[260px] w-full rounded-lg h-fit sticky top-44 hidden xl:block border border-white/5 bg-secondary-dark/30 p-6">
          <h2 className="text-xl font-bold mb-6 text-white pb-3 border-b border-white/10">Filters</h2>

          {/* Category Filter */}
          <CheckboxFilter
            title="Included Categories"
            options={allCategories}
            selectedValues={categoryFilter}
            onUpdate={(updated) => {
              setCategoryFilter(updated);
              updateURL({ category: updated });
            }}
          />

          {/* Price Filter */}
          <h3 className="text-lg font-semibold text-white mb-3 mt-6">Bundle Price</h3>
          <input
            type="range"
            min="0"
            max="2000"
            step="50"
            value={priceRange.max}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const max = parseInt(e.target.value);
              setPriceRange({ ...priceRange, max });
              updateURL({ max_price: max });
            }}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <p className="mt-2 text-sm text-gray-400 font-medium">
            Price: ${priceRange.min} - ${priceRange.max}
          </p>

          {/* Availability Filter */}
          <div className="mt-6">
            <CheckboxFilter
              title="Availability"
              options={["in_stock", "out_of_stock"]}
              selectedValues={availabilityFilter}
              onUpdate={(updated) => {
                setAvailabilityFilter(updated);
                updateURL({ availability: updated });
              }}
              getLabel={(item) =>
                item === "in_stock" ? "In Stock" : "Out of Stock"
              }
            />
          </div>
        </div>

        {/* Combos Grid */}
        <div className="w-full">
          {/* Sort Dropdown */}
          <div className="mb-6 flex justify-between items-center bg-secondary-dark/50 p-3 rounded-lg border border-white/5">
            <span className="text-gray-400 text-sm font-medium">
              Showing {filteredCombos.length} combos
            </span>
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                updateURL({ sort_by: e.target.value });
              }}
              className="p-2.5 bg-gray-800 text-white rounded outline-0 cursor-pointer border border-white/10 text-sm focus:border-primary"
            >
              <option value="default">Default sorting</option>
              <option value="highestSavings">Sort by highest savings</option>
              <option value="priceLowToHigh">Price: low to high</option>
              <option value="priceHighToLow">Price: high to low</option>
            </select>
          </div>

          {loading ? (
            <div className="text-center text-gray-400 py-20 animate-pulse">Loading combo offers...</div>
          ) : (
            <>
              {/* Product Cards */}
              <div className="grid grid-cols-1 gap-6">
                {currentCombos.length > 0 ? (
                  currentCombos.map((combo) => (
                    <BundleCard key={combo.id} data={combo} />
                  ))
                ) : (
                  <div className="text-center text-gray-400 col-span-full py-20 bg-secondary-dark/30 rounded-lg border border-white/5">
                    <p className="text-lg">No combo offers found matching your criteria.</p>
                    <button onClick={() => {
                      setPriceRange({ min: 0, max: 2000 });
                      setCategoryFilter([]);
                      setAvailabilityFilter([]);
                      router.push('/combo-offers');
                    }} className="mt-4 text-primary hover:underline">
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {filteredCombos.length > itemsPerPage && (
                <div className="mt-12 flex justify-center gap-2">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50 cursor-pointer hover:bg-gray-700 border border-white/10 transition-colors"
                  >
                    Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (num) => (
                      <button
                        key={num}
                        onClick={() => paginate(num)}
                        className={`px-4 py-2 cursor-pointer rounded transition-colors ${currentPage === num ? "bg-primary text-white border-transparent shadow-lg shadow-primary/20" : "bg-gray-800 text-gray-300 border border-white/10 hover:bg-gray-700"
                          }`}
                      >
                        {num}
                      </button>
                    )
                  )}

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50 cursor-pointer hover:bg-gray-700 border border-white/10 transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Container>
  );
}
