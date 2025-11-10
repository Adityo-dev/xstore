"use client";

import ColumCard from "@/components/cards/ColumCard";
import Container from "@/components/Container";
import CheckboxFilter from "@/components/shop/sidebarFilters/CheckboxFilter";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Shop() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = Object.fromEntries(searchParams.entries());

  // States
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
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
  const [currentPage, setCurrentPage] = useState(
    query.page ? parseInt(query.page) : 1
  );

  const productsPerPage = 12;

  // Fetch products from public folder
  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  // Dynamic categories and platforms
  const allCategories = [
    ...new Set(products.flatMap((p) => p.categories || [])),
  ];
  const allPlatforms = [...new Set(products.flatMap((p) => p.platform || []))];

  // Update URL helper
  const updateURL = (params) => {
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
    router.push(`/shop?${updated.toString()}`, { scroll: false });
  };

  // Filtering & Sorting
  useEffect(() => {
    if (!products.length) return;

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
        if (!availabilityFilter.length) return true;
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
    if (sortBy === "popularity") filtered.sort((a, b) => b.sold - a.sold);
    else if (sortBy === "rating")
      filtered.sort(
        (a, b) =>
          (b.reviews?.reduce((sum, r) => sum + r.rating, 0) /
            (b.reviews?.length || 1) || 0) -
          (a.reviews?.reduce((sum, r) => sum + r.rating, 0) /
            (a.reviews?.length || 1) || 0)
      );
    else if (sortBy === "priceLowToHigh")
      filtered.sort((a, b) => a.salePrice - b.salePrice);
    else if (sortBy === "priceHighToLow")
      filtered.sort((a, b) => b.salePrice - a.salePrice);

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [
    products,
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

  // Smooth scroll on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <Container className="mb-16 md:mb-24 pt-32 xl:pt-44">
      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <div className="max-w-[260px] w-full rounded-lg h-fit sticky top-44 hidden xl:block">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          {/* Category Filter */}
          <CheckboxFilter
            title="Categories"
            options={allCategories}
            selectedValues={categoryFilter}
            onUpdate={(updated) => {
              setCategoryFilter(updated);
              updateURL({ category: updated });
            }}
          />

          {/* Price Filter */}
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

          {/* Rating Filter */}
          <CheckboxFilter
            title="Filter by Rating"
            options={[5, 4, 3]}
            selectedValues={ratingFilter}
            onUpdate={(updated) => {
              setRatingFilter(updated);
              updateURL({ rating_filter: updated });
            }}
            getLabel={(rating) => `${rating}+ Stars`}
          />

          {/* Platform Filter */}
          <CheckboxFilter
            title="Platform"
            options={allPlatforms}
            selectedValues={platformFilter}
            onUpdate={(updated) => {
              setPlatformFilter(updated);
              updateURL({ platform: updated });
            }}
          />

          {/* Availability Filter */}
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
              className="p-2 bg-gray-700 text-white rounded outline-0 cursor-pointer"
            >
              <option value="default">Default sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by rating</option>
              <option value="priceLowToHigh">Price: low to high</option>
              <option value="priceHighToLow">Price: high to low</option>
            </select>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
          {filteredProducts.length > productsPerPage && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-700 text-white rounded-l disabled:opacity-50 cursor-pointer"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (num) => (
                  <button
                    key={num}
                    onClick={() => paginate(num)}
                    className={`px-4 py-2 cursor-pointer ${
                      currentPage === num ? "bg-[#776BF8]" : "bg-gray-700"
                    } text-white`}
                  >
                    {num}
                  </button>
                )
              )}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-700 text-white rounded-r disabled:opacity-50 cursor-pointer"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
