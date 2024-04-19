import React, { Suspense } from "react";
import type { FC } from "react";
import Fuse from "fuse.js";
import SectionLayout from "@/components/layout/SectionLayout";
import FilterDialog from "@/components/implement/FilterDialog/FilterDialog";
import SortingSelect from "@/components/implement/SortingSelect/SortingSelect";
import ProductCard from "@/components/implement/ProductCard/ProductCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getFlashsaleProductsController } from "@/controller/product";

interface PageProps {
  searchParams: {
    keyword: string;
    price: string;
    rating: string;
    sorting: string;
  };
}

const Page: FC<PageProps> = async ({ searchParams }) => {
  const { data: products } = await getFlashsaleProductsController();
  const fuse = new Fuse(products ?? [], { keys: ["name", "desc"] });
  const searchProducts = searchParams.keyword
    ? fuse.search(searchParams.keyword).map((res) => res.item)
    : products;

  const priceRange = searchParams.price
    ?.split("-")
    .map((p) => (p ? parseInt(p, 10) : 0));
  const rating = searchParams.rating
    ?.split("-")
    .map((r) => (r ? parseInt(r, 10) : 0));

  const filteredProductsByPrice =
    priceRange?.length === 2
      ? searchProducts?.filter(
          (product) =>
            product.price > priceRange[0] && product.price < priceRange[1]
        )
      : searchProducts;

  const filteredProductByRating = rating
    ? filteredProductsByPrice?.filter((product) =>
        rating.includes(product.rating)
      )
    : filteredProductsByPrice;

  return (
    <main className="pt-8 pb-16">
      <SectionLayout className="flex justify-between items-center">
        <Suspense>
          <FilterDialog
            trigger={
              <Button variant="outline" className="w-44" type="button">
                Filter by
              </Button>
            }
          />
        </Suspense>

        <Suspense>
          <SortingSelect />
        </Suspense>
      </SectionLayout>

      <Separator className="h-0 my-10" />

      <SectionLayout>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-4 gap-y-8">
          {filteredProductByRating?.map((product, i) => (
            <ProductCard
              key={i}
              name={product.name}
              imageSrc={product.imageUrl[0]}
              isWishlist={false}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </SectionLayout>
    </main>
  );
};

export default Page;
