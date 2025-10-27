"use client";
import ColumCard from "@/components/cards/ColumCard";
import { products } from "@/data/products";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Shop() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Extract query params
  const query = Object.fromEntries(searchParams.entries());

  // Default filters
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: query.max_price ? parseInt(query.max_price) : 314,
  });

  const [ratingFilter, setRatingFilter] = useState(
    query.rating_filter ? query.rating_filter.split(",").map(Number) : []
  );
  const [platformFilter, setPlatformFilter] = useState(
    query.platform ? query.platform.split(",") : []
  );
  const [categoryFilter, setCategoryFilter] = useState(
    query.category ? query.category.split(",") : []
  );
  const [availabilityFilter, setAvailabilityFilter] = useState(
    query.availability ? query.availability.split(",") : []
  );
  const [sortBy, setSortBy] = useState(query.sort_by || "default");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(
    query.page ? parseInt(query.page) : 1
  );
  const productsPerPage = 12;

  // Unique values (dynamic)
  const allCategories = [
    ...new Set(products.flatMap((p) => p.categories || [])),
  ];
  const allPlatforms = [...new Set(products.flatMap((p) => p.platform || []))];

  // Helper: Update URL
  const updateURL = (params) => {
    const updated = new URLSearchParams(searchParams.toString());
    Object.entries(params).forEach(([key, value]) => {
      if (
        value === undefined ||
        value === null ||
        value === "" ||
        (Array.isArray(value) && value.length === 0)
      ) {
        updated.delete(key);
      } else {
        updated.set(key, Array.isArray(value) ? value.join(",") : value);
      }
    });
    router.push(`/shop?${updated.toString()}`, { scroll: false });
  };

  // Filter logic
  useEffect(() => {
    let filtered = [...products].filter((product) => {
      const priceOK =
        product.salePrice >= priceRange.min &&
        product.salePrice <= priceRange.max;

      const ratingOK =
        ratingFilter.length === 0 ||
        ratingFilter.some((r) => {
          const avg =
            product.reviews?.reduce((sum, rev) => sum + rev.rating, 0) /
              (product.reviews?.length || 1) || 0;
          return avg >= r;
        });

      const platformOK =
        platformFilter.length === 0 ||
        platformFilter.some((p) => product.platform?.includes(p));

      const categoryOK =
        categoryFilter.length === 0 ||
        categoryFilter.some((c) => product.categories?.includes(c));

      const availabilityOK = (() => {
        if (availabilityFilter.length === 0) return true;
        if (availabilityFilter.includes("in_stock") && product.stock > 0)
          return true;
        if (availabilityFilter.includes("out_of_stock") && product.stock <= 0)
          return true;
        if (availabilityFilter.includes("on_sale") && product.isDiscounted)
          return true;
        return false;
      })();

      return priceOK && ratingOK && platformOK && categoryOK && availabilityOK;
    });

    // Sorting
    if (sortBy === "popularity") {
      filtered.sort((a, b) => b.sold - a.sold);
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => {
        const avgA =
          a.reviews?.reduce((sum, r) => sum + r.rating, 0) /
            (a.reviews?.length || 1) || 0;
        const avgB =
          b.reviews?.reduce((sum, r) => sum + r.rating, 0) /
            (b.reviews?.length || 1) || 0;
        return avgB - avgA;
      });
    } else if (sortBy === "priceLowToHigh") {
      filtered.sort((a, b) => a.salePrice - b.salePrice);
    } else if (sortBy === "priceHighToLow") {
      filtered.sort((a, b) => b.salePrice - a.salePrice);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // reset page when filters change
  }, [
    priceRange,
    ratingFilter,
    platformFilter,
    categoryFilter,
    availabilityFilter,
    sortBy,
  ]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIdx = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIdx,
    startIdx + productsPerPage
  );

  const paginate = (page) => {
    setCurrentPage(page);
    updateURL({ page });
  };

  return (
    <section className="container mx-auto py-44">
      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <div className="max-w-[300px] w-full p-4 rounded-lg h-fit sticky top-4">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          {/* Category */}
          <h3 className="text-lg mb-2">Categories</h3>
          <div className="w-full max-h-[300px] h-full overflow-y-auto custom-scrollbar">
            {allCategories.map((cat) => (
              <label key={cat} className="block">
                <input
                  type="checkbox"
                  checked={categoryFilter.includes(cat)}
                  onChange={(e) => {
                    const updated = e.target.checked
                      ? [...categoryFilter, cat]
                      : categoryFilter.filter((c) => c !== cat);
                    setCategoryFilter(updated);
                    updateURL({ category: updated });
                  }}
                />{" "}
                {cat}
              </label>
            ))}
          </div>

          {/* Price */}
          <h3 className="text-lg mb-2 mt-4">Price</h3>
          <input
            type="range"
            min="0"
            max="314"
            value={priceRange.max}
            onChange={(e) => {
              const max = parseInt(e.target.value);
              setPriceRange({ ...priceRange, max });
              updateURL({ max_price: max });
            }}
            className="w-full"
          />
          <p>
            Price: ${priceRange.min} - ${priceRange.max}
          </p>

          {/* Rating */}
          <h3 className="text-lg mb-2 mt-4">Filter by Rating</h3>
          {[5, 4, 3].map((rate) => (
            <label key={rate} className="block">
              <input
                type="checkbox"
                checked={ratingFilter.includes(rate)}
                onChange={(e) => {
                  const updated = e.target.checked
                    ? [...ratingFilter, rate]
                    : ratingFilter.filter((r) => r !== rate);
                  setRatingFilter(updated);
                  updateURL({ rating_filter: updated });
                }}
              />{" "}
              {rate}+ Stars
            </label>
          ))}

          {/* Platform */}
          <h3 className="text-lg mb-2 mt-4">Platform</h3>
          {allPlatforms.map((plat) => (
            <label key={plat} className="block">
              <input
                type="checkbox"
                checked={platformFilter.includes(plat)}
                onChange={(e) => {
                  const updated = e.target.checked
                    ? [...platformFilter, plat]
                    : platformFilter.filter((p) => p !== plat);
                  setPlatformFilter(updated);
                  updateURL({ platform: updated });
                }}
              />{" "}
              {plat}
            </label>
          ))}

          {/* Availability */}
          <h3 className="text-lg mb-2 mt-4">Availability</h3>
          {[
            { key: "in_stock", label: "In stock" },
            { key: "out_of_stock", label: "Out of stock" },
            { key: "on_sale", label: "On sale" },
          ].map((item) => (
            <label key={item.key} className="block">
              <input
                type="checkbox"
                checked={availabilityFilter.includes(item.key)}
                onChange={(e) => {
                  const updated = e.target.checked
                    ? [...availabilityFilter, item.key]
                    : availabilityFilter.filter((a) => a !== item.key);
                  setAvailabilityFilter(updated);
                  updateURL({ availability: updated });
                }}
              />{" "}
              {item.label}
            </label>
          ))}
        </div>

        {/* Product Grid */}
        <div className="w-full">
          {/* Sort Dropdown */}
          <div className="mb-4 flex justify-end">
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                updateURL({ sort_by: e.target.value });
              }}
              className="p-2 bg-gray-700 text-white rounded"
            >
              <option value="default">Default sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by rating</option>
              <option value="priceLowToHigh">Price: low to high</option>
              <option value="priceHighToLow">Price: high to low</option>
            </select>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <ColumCard key={product.id} data={product} />
              ))
            ) : (
              <p className="text-center text-gray-400 col-span-full">
                No products found.
              </p>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-700 text-white rounded-l disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => paginate(num)}
                className={`px-4 py-2 ${
                  currentPage === num ? "bg-blue-600" : "bg-gray-700"
                } text-white`}
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-700 text-white rounded-r disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
