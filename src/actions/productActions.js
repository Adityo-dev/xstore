"use server";
import { getProductsData, getFilteredProducts } from "@/lib/products";

export async function fetchProducts(options = {}) {
  return await getProductsData(options);
}

export async function fetchFilteredProducts(type) {
  return await getFilteredProducts(type);
}
