import React, { Suspense } from "react";
import type { FC } from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import FilterDialog from "@/components/implement/FilterDialog/FilterDialog";
import SortingSelect from "@/components/implement/SortingSelect/SortingSelect";
import ProductCard from "@/components/implement/ProductCard/ProductCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getFlashsaleProductsController } from "@/controller/product";
import { useSearchProduct } from "@/hooks/components/useSearchProduct";

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
  const searchedProduct = useSearchProduct(products ?? [], searchParams);

  return (
    <main className="pt-8 pb-16">
      <SectionLayout className="flex justify-between items-center">
        <FilterDialog
          trigger={
            <Button variant="outline" className="w-44" type="button">
              Filter by
            </Button>
          }
        />

        <SortingSelect />
      </SectionLayout>

      <Separator className="h-0 my-10" />

      <SectionLayout>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-4 gap-y-8">
          {searchedProduct?.map((product, i) => (
            <ProductCard
              id={"i"}
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
