"use client";

import { useEffect, useState } from "react";

// 1 Fetch all products
export function useProductsData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/products.json");
        if (!res.ok) throw new Error("Failed to load products");
        const result = await res.json();
        setProducts(result); // adjust if JSON: result.data || result
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { products, loading, error };
}

// 2 Filter products by type
export function useFilteredProducts(filterType) {
  const { products, loading, error } = useProductsData();

  const filtered =
    filterType && products.length
      ? products.filter((p) => p[filterType])
      : products;

  return { products: filtered, loading, error };
}
