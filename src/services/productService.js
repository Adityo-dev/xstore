import { getProductsData, getFilteredProducts } from "@/lib/products";

export const productService = {
  async getAllProducts(options = {}) {
    return await getProductsData(options);
  },
  async getByFilter(filterType) {
    return await getFilteredProducts(filterType);
  },
};
