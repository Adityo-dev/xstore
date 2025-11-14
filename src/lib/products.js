import { readFile } from "fs/promises";
import { join } from "path";

export async function getProducts() {
  try {
    const filePath = join(process.cwd(), "public", "data", "products.json");
    const fileData = await readFile(filePath, "utf-8");
    return JSON.parse(fileData);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getFilteredProducts(filterType) {
  const products = await getProducts();
  if (!filterType) return products;
  return products.filter((p) => p[filterType]);
}
