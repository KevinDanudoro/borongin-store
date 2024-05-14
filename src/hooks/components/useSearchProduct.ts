import { getProductSchema } from "@/model/product";
import { sortingSchema } from "@/model/search";
import Fuse from "fuse.js";
import { z } from "zod";

const searchByKeyword = (
  products: z.infer<typeof getProductSchema>[],
  keyword: string
) => {
  const fuse = new Fuse(products, { keys: ["name", "desc"] });
  const searchProducts = keyword
    ? fuse.search(keyword).map((res) => res.item)
    : products;
  return searchProducts;
};

const filterByPriceAndRating = (
  products: z.infer<typeof getProductSchema>[],
  filter: {
    priceRange: number[];
    ratingRange: number[];
  }
) => {
  const { priceRange, ratingRange } = filter;

  const filteredByPrice =
    priceRange.length === 2
      ? products.filter(
          (product) =>
            product.price > priceRange[0] && product.price < priceRange[1]
        )
      : products;

  const filteredByRating =
    ratingRange.length > 0
      ? filteredByPrice.filter((product) =>
          ratingRange.includes(product.rating)
        )
      : filteredByPrice;

  return filteredByRating;
};

const sortingByType = (
  products: z.infer<typeof getProductSchema>[],
  sort: string
) => {
  const sortValue = sortingSchema.safeParse(sort);
  if (!sortValue.success) return products;

  if (sortValue.data === "most-cheap")
    return products.sort((a, b) => a.price - b.price);

  if (sortValue.data === "most-expensive")
    return products.sort((a, b) => b.price - a.price);

  // TODO: Terapkan sorting 2 tipe lainnya

  return products;
};

export const useSearchProduct = (
  products: z.infer<typeof getProductSchema>[],
  searchParams: {
    keyword: string;
    price: string;
    rating: string;
    sorting: string;
  }
) => {
  const searchedProducts = searchByKeyword(products, searchParams.keyword);

  const priceRange =
    searchParams.price?.split("-")?.map((p) => (p ? parseInt(p, 10) : 0)) ?? [];
  const ratingRange =
    searchParams.rating?.split("-")?.map((p) => (p ? parseInt(p, 10) : 0)) ??
    [];

  const filteredProducts = filterByPriceAndRating(searchedProducts, {
    priceRange,
    ratingRange,
  });

  const sortedProducts = sortingByType(filteredProducts, searchParams.sorting);

  return sortedProducts;
};
